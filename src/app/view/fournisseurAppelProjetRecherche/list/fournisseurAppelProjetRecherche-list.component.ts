import {Component, OnInit} from '@angular/core';
import {FournisseurAppelProjetRechercheService} from '../../../controller/service/FournisseurAppelProjetRecherche.service';
import {FournisseurAppelProjetRechercheVo} from '../../../controller/model/FournisseurAppelProjetRecherche.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-fournisseurAppelProjetRecherche-list',
  templateUrl: './fournisseurAppelProjetRecherche-list.component.html',
  styleUrls: ['./fournisseurAppelProjetRecherche-list.component.css']
})

export class FournisseurAppelProjetRechercheListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private fournisseurAppelProjetRechercheService: FournisseurAppelProjetRechercheService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadFournisseurAppelProjetRecherches();
    } 
    
    // methods 
    public async loadFournisseurAppelProjetRecherches(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("FournisseurAppelProjetRecherche", "list");
        isPermistted ? this.fournisseurAppelProjetRechercheService.findAll().subscribe(fournisseurAppelProjetRecherches => this.fournisseurAppelProjetRecherches = fournisseurAppelProjetRecherches,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.fournisseurAppelProjetRechercheService.findByCriteria(this.searchFournisseurAppelProjetRecherche).subscribe(fournisseurAppelProjetRecherches=>{
            
            this.fournisseurAppelProjetRecherches = fournisseurAppelProjetRecherches;
           // this.searchFournisseurAppelProjetRecherche = new FournisseurAppelProjetRechercheVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
                {field: 'description', header: 'description'},
                {field: 'pays', header: 'pays'},
        ];
    }
    
    public async editFournisseurAppelProjetRecherche(fournisseurAppelProjetRecherche:FournisseurAppelProjetRechercheVo){
        const isPermistted = await this.roleService.isPermitted("FournisseurAppelProjetRecherche", "edit");
         if(isPermistted){
         this.selectedFournisseurAppelProjetRecherche = fournisseurAppelProjetRecherche;
         this.editFournisseurAppelProjetRechercheDialog = true;
         this.fournisseurAppelProjetRechercheService.editFournisseurAppelProjetRecherche$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewFournisseurAppelProjetRecherche(fournisseurAppelProjetRecherche:FournisseurAppelProjetRechercheVo){
        const isPermistted = await this.roleService.isPermitted("FournisseurAppelProjetRecherche", "view");
        if(isPermistted){
       this.selectedFournisseurAppelProjetRecherche = fournisseurAppelProjetRecherche;
        this.viewFournisseurAppelProjetRechercheDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateFournisseurAppelProjetRecherche(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedFournisseurAppelProjetRecherche = new FournisseurAppelProjetRechercheVo();
        this.createFournisseurAppelProjetRechercheDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteFournisseurAppelProjetRecherche(fournisseurAppelProjetRecherche:FournisseurAppelProjetRechercheVo){
       const isPermistted = await this.roleService.isPermitted("FournisseurAppelProjetRecherche", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the FournisseurAppelProjetRecherche ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.fournisseurAppelProjetRechercheService.delete(fournisseurAppelProjetRecherche).subscribe(status=>{
                          if(status > 0){
                          const position = this.fournisseurAppelProjetRecherches.indexOf(fournisseurAppelProjetRecherche);
                          position > -1 ? this.fournisseurAppelProjetRecherches.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'FournisseurAppelProjetRecherche Deleted',
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

    get fournisseurAppelProjetRecherches(): Array<FournisseurAppelProjetRechercheVo> {
           return this.fournisseurAppelProjetRechercheService.fournisseurAppelProjetRecherches;
       }
    set fournisseurAppelProjetRecherches(value: Array<FournisseurAppelProjetRechercheVo>) {
        this.fournisseurAppelProjetRechercheService.fournisseurAppelProjetRecherches = value;
       }

    get fournisseurAppelProjetRechercheSelections(): Array<FournisseurAppelProjetRechercheVo> {
           return this.fournisseurAppelProjetRechercheService.fournisseurAppelProjetRechercheSelections;
       }
    set fournisseurAppelProjetRechercheSelections(value: Array<FournisseurAppelProjetRechercheVo>) {
        this.fournisseurAppelProjetRechercheService.fournisseurAppelProjetRechercheSelections = value;
       }
   
     


    get selectedFournisseurAppelProjetRecherche():FournisseurAppelProjetRechercheVo {
           return this.fournisseurAppelProjetRechercheService.selectedFournisseurAppelProjetRecherche;
       }
    set selectedFournisseurAppelProjetRecherche(value: FournisseurAppelProjetRechercheVo) {
        this.fournisseurAppelProjetRechercheService.selectedFournisseurAppelProjetRecherche = value;
       }
    
    get createFournisseurAppelProjetRechercheDialog():boolean {
           return this.fournisseurAppelProjetRechercheService.createFournisseurAppelProjetRechercheDialog;
       }
    set createFournisseurAppelProjetRechercheDialog(value: boolean) {
        this.fournisseurAppelProjetRechercheService.createFournisseurAppelProjetRechercheDialog= value;
       }
    
    get editFournisseurAppelProjetRechercheDialog():boolean {
           return this.fournisseurAppelProjetRechercheService.editFournisseurAppelProjetRechercheDialog;
       }
    set editFournisseurAppelProjetRechercheDialog(value: boolean) {
        this.fournisseurAppelProjetRechercheService.editFournisseurAppelProjetRechercheDialog= value;
       }
    get viewFournisseurAppelProjetRechercheDialog():boolean {
           return this.fournisseurAppelProjetRechercheService.viewFournisseurAppelProjetRechercheDialog;
       }
    set viewFournisseurAppelProjetRechercheDialog(value: boolean) {
        this.fournisseurAppelProjetRechercheService.viewFournisseurAppelProjetRechercheDialog = value;
       }
       
     get searchFournisseurAppelProjetRecherche(): FournisseurAppelProjetRechercheVo {
        return this.fournisseurAppelProjetRechercheService.searchFournisseurAppelProjetRecherche;
       }
    set searchFournisseurAppelProjetRecherche(value: FournisseurAppelProjetRechercheVo) {
        this.fournisseurAppelProjetRechercheService.searchFournisseurAppelProjetRecherche = value;
       }



}