import {Component, OnInit} from '@angular/core';
import {PaysProjetRechercheService} from '../../../controller/service/PaysProjetRecherche.service';
import {PaysProjetRechercheVo} from '../../../controller/model/PaysProjetRecherche.model';
import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-paysProjetRecherche-list',
  templateUrl: './paysProjetRecherche-list.component.html',
  styleUrls: ['./paysProjetRecherche-list.component.css']
})

export class PaysProjetRechercheListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private paysProjetRechercheService: PaysProjetRechercheService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadPaysProjetRecherches();
    } 
    
    // methods 
    public async loadPaysProjetRecherches(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("PaysProjetRecherche", "list");
        isPermistted ? this.paysProjetRechercheService.findAll().subscribe(paysProjetRecherches => this.paysProjetRecherches = paysProjetRecherches,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.paysProjetRechercheService.findByCriteria(this.searchPaysProjetRecherche).subscribe(paysProjetRecherches=>{
            
            this.paysProjetRecherches = paysProjetRecherches;
           // this.searchPaysProjetRecherche = new PaysProjetRechercheVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'pays', header: 'pays'},
                {field: 'projetActiviteRecherche', header: 'projetActiviteRecherche'},
        ];
    }
    
    public async editPaysProjetRecherche(paysProjetRecherche:PaysProjetRechercheVo){
        const isPermistted = await this.roleService.isPermitted("PaysProjetRecherche", "edit");
         if(isPermistted){
         this.selectedPaysProjetRecherche = paysProjetRecherche;
         this.editPaysProjetRechercheDialog = true;
         this.paysProjetRechercheService.editPaysProjetRecherche$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewPaysProjetRecherche(paysProjetRecherche:PaysProjetRechercheVo){
        const isPermistted = await this.roleService.isPermitted("PaysProjetRecherche", "view");
        if(isPermistted){
       this.selectedPaysProjetRecherche = paysProjetRecherche;
        this.viewPaysProjetRechercheDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreatePaysProjetRecherche(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedPaysProjetRecherche = new PaysProjetRechercheVo();
        this.createPaysProjetRechercheDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deletePaysProjetRecherche(paysProjetRecherche:PaysProjetRechercheVo){
       const isPermistted = await this.roleService.isPermitted("PaysProjetRecherche", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the PaysProjetRecherche ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.paysProjetRechercheService.delete(paysProjetRecherche).subscribe(status=>{
                          if(status > 0){
                          const position = this.paysProjetRecherches.indexOf(paysProjetRecherche);
                          position > -1 ? this.paysProjetRecherches.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'PaysProjetRecherche Deleted',
                        life: 3000
                    });
                    },error=>console.log(error))
                             }
                     });
              }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
              });
             }
        

     
    }


    // getters and setters

    get paysProjetRecherches(): Array<PaysProjetRechercheVo> {
           return this.paysProjetRechercheService.paysProjetRecherches;
       }
    set paysProjetRecherches(value: Array<PaysProjetRechercheVo>) {
        this.paysProjetRechercheService.paysProjetRecherches = value;
       }

    get paysProjetRechercheSelections(): Array<PaysProjetRechercheVo> {
           return this.paysProjetRechercheService.paysProjetRechercheSelections;
       }
    set paysProjetRechercheSelections(value: Array<PaysProjetRechercheVo>) {
        this.paysProjetRechercheService.paysProjetRechercheSelections = value;
       }
   
     


    get selectedPaysProjetRecherche():PaysProjetRechercheVo {
           return this.paysProjetRechercheService.selectedPaysProjetRecherche;
       }
    set selectedPaysProjetRecherche(value: PaysProjetRechercheVo) {
        this.paysProjetRechercheService.selectedPaysProjetRecherche = value;
       }
    
    get createPaysProjetRechercheDialog():boolean {
           return this.paysProjetRechercheService.createPaysProjetRechercheDialog;
       }
    set createPaysProjetRechercheDialog(value: boolean) {
        this.paysProjetRechercheService.createPaysProjetRechercheDialog= value;
       }
    
    get editPaysProjetRechercheDialog():boolean {
           return this.paysProjetRechercheService.editPaysProjetRechercheDialog;
       }
    set editPaysProjetRechercheDialog(value: boolean) {
        this.paysProjetRechercheService.editPaysProjetRechercheDialog= value;
       }
    get viewPaysProjetRechercheDialog():boolean {
           return this.paysProjetRechercheService.viewPaysProjetRechercheDialog;
       }
    set viewPaysProjetRechercheDialog(value: boolean) {
        this.paysProjetRechercheService.viewPaysProjetRechercheDialog = value;
       }
       
     get searchPaysProjetRecherche(): PaysProjetRechercheVo {
        return this.paysProjetRechercheService.searchPaysProjetRecherche;
       }
    set searchPaysProjetRecherche(value: PaysProjetRechercheVo) {
        this.paysProjetRechercheService.searchPaysProjetRecherche = value;
       }



}