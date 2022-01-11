import {Component, OnInit} from '@angular/core';
import {CommunauteSavoirProjetActiviteRechercheService} from '../../../controller/service/CommunauteSavoirProjetActiviteRecherche.service';
import {CommunauteSavoirProjetActiviteRechercheVo} from '../../../controller/model/CommunauteSavoirProjetActiviteRecherche.model';
import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-communauteSavoirProjetActiviteRecherche-list',
  templateUrl: './communauteSavoirProjetActiviteRecherche-list.component.html',
  styleUrls: ['./communauteSavoirProjetActiviteRecherche-list.component.css']
})

export class CommunauteSavoirProjetActiviteRechercheListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private communauteSavoirProjetActiviteRechercheService: CommunauteSavoirProjetActiviteRechercheService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadCommunauteSavoirProjetActiviteRecherches();
    } 
    
    // methods 
    public async loadCommunauteSavoirProjetActiviteRecherches(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("CommunauteSavoirProjetActiviteRecherche", "list");
        isPermistted ? this.communauteSavoirProjetActiviteRechercheService.findAll().subscribe(communauteSavoirProjetActiviteRecherches => this.communauteSavoirProjetActiviteRecherches = communauteSavoirProjetActiviteRecherches,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.communauteSavoirProjetActiviteRechercheService.findByCriteria(this.searchCommunauteSavoirProjetActiviteRecherche).subscribe(communauteSavoirProjetActiviteRecherches=>{
            
            this.communauteSavoirProjetActiviteRecherches = communauteSavoirProjetActiviteRecherches;
           // this.searchCommunauteSavoirProjetActiviteRecherche = new CommunauteSavoirProjetActiviteRechercheVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'projetActiviteRecherche', header: 'projetActiviteRecherche'},
                {field: 'communauteSavoir', header: 'communauteSavoir'},
        ];
    }
    
    public async editCommunauteSavoirProjetActiviteRecherche(communauteSavoirProjetActiviteRecherche:CommunauteSavoirProjetActiviteRechercheVo){
        const isPermistted = await this.roleService.isPermitted("CommunauteSavoirProjetActiviteRecherche", "edit");
         if(isPermistted){
         this.selectedCommunauteSavoirProjetActiviteRecherche = communauteSavoirProjetActiviteRecherche;
         this.editCommunauteSavoirProjetActiviteRechercheDialog = true;
         this.communauteSavoirProjetActiviteRechercheService.editCommunauteSavoirProjetActiviteRecherche$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewCommunauteSavoirProjetActiviteRecherche(communauteSavoirProjetActiviteRecherche:CommunauteSavoirProjetActiviteRechercheVo){
        const isPermistted = await this.roleService.isPermitted("CommunauteSavoirProjetActiviteRecherche", "view");
        if(isPermistted){
       this.selectedCommunauteSavoirProjetActiviteRecherche = communauteSavoirProjetActiviteRecherche;
        this.viewCommunauteSavoirProjetActiviteRechercheDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateCommunauteSavoirProjetActiviteRecherche(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedCommunauteSavoirProjetActiviteRecherche = new CommunauteSavoirProjetActiviteRechercheVo();
        this.createCommunauteSavoirProjetActiviteRechercheDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteCommunauteSavoirProjetActiviteRecherche(communauteSavoirProjetActiviteRecherche:CommunauteSavoirProjetActiviteRechercheVo){
       const isPermistted = await this.roleService.isPermitted("CommunauteSavoirProjetActiviteRecherche", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the CommunauteSavoirProjetActiviteRecherche ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.communauteSavoirProjetActiviteRechercheService.delete(communauteSavoirProjetActiviteRecherche).subscribe(status=>{
                          if(status > 0){
                          const position = this.communauteSavoirProjetActiviteRecherches.indexOf(communauteSavoirProjetActiviteRecherche);
                          position > -1 ? this.communauteSavoirProjetActiviteRecherches.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'CommunauteSavoirProjetActiviteRecherche Deleted',
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

    get communauteSavoirProjetActiviteRecherches(): Array<CommunauteSavoirProjetActiviteRechercheVo> {
           return this.communauteSavoirProjetActiviteRechercheService.communauteSavoirProjetActiviteRecherches;
       }
    set communauteSavoirProjetActiviteRecherches(value: Array<CommunauteSavoirProjetActiviteRechercheVo>) {
        this.communauteSavoirProjetActiviteRechercheService.communauteSavoirProjetActiviteRecherches = value;
       }

    get communauteSavoirProjetActiviteRechercheSelections(): Array<CommunauteSavoirProjetActiviteRechercheVo> {
           return this.communauteSavoirProjetActiviteRechercheService.communauteSavoirProjetActiviteRechercheSelections;
       }
    set communauteSavoirProjetActiviteRechercheSelections(value: Array<CommunauteSavoirProjetActiviteRechercheVo>) {
        this.communauteSavoirProjetActiviteRechercheService.communauteSavoirProjetActiviteRechercheSelections = value;
       }
   
     


    get selectedCommunauteSavoirProjetActiviteRecherche():CommunauteSavoirProjetActiviteRechercheVo {
           return this.communauteSavoirProjetActiviteRechercheService.selectedCommunauteSavoirProjetActiviteRecherche;
       }
    set selectedCommunauteSavoirProjetActiviteRecherche(value: CommunauteSavoirProjetActiviteRechercheVo) {
        this.communauteSavoirProjetActiviteRechercheService.selectedCommunauteSavoirProjetActiviteRecherche = value;
       }
    
    get createCommunauteSavoirProjetActiviteRechercheDialog():boolean {
           return this.communauteSavoirProjetActiviteRechercheService.createCommunauteSavoirProjetActiviteRechercheDialog;
       }
    set createCommunauteSavoirProjetActiviteRechercheDialog(value: boolean) {
        this.communauteSavoirProjetActiviteRechercheService.createCommunauteSavoirProjetActiviteRechercheDialog= value;
       }
    
    get editCommunauteSavoirProjetActiviteRechercheDialog():boolean {
           return this.communauteSavoirProjetActiviteRechercheService.editCommunauteSavoirProjetActiviteRechercheDialog;
       }
    set editCommunauteSavoirProjetActiviteRechercheDialog(value: boolean) {
        this.communauteSavoirProjetActiviteRechercheService.editCommunauteSavoirProjetActiviteRechercheDialog= value;
       }
    get viewCommunauteSavoirProjetActiviteRechercheDialog():boolean {
           return this.communauteSavoirProjetActiviteRechercheService.viewCommunauteSavoirProjetActiviteRechercheDialog;
       }
    set viewCommunauteSavoirProjetActiviteRechercheDialog(value: boolean) {
        this.communauteSavoirProjetActiviteRechercheService.viewCommunauteSavoirProjetActiviteRechercheDialog = value;
       }
       
     get searchCommunauteSavoirProjetActiviteRecherche(): CommunauteSavoirProjetActiviteRechercheVo {
        return this.communauteSavoirProjetActiviteRechercheService.searchCommunauteSavoirProjetActiviteRecherche;
       }
    set searchCommunauteSavoirProjetActiviteRecherche(value: CommunauteSavoirProjetActiviteRechercheVo) {
        this.communauteSavoirProjetActiviteRechercheService.searchCommunauteSavoirProjetActiviteRecherche = value;
       }



}