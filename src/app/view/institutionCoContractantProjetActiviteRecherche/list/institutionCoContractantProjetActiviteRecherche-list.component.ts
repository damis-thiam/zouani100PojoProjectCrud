import {Component, OnInit} from '@angular/core';
import {InstitutionCoContractantProjetActiviteRechercheService} from '../../../controller/service/InstitutionCoContractantProjetActiviteRecherche.service';
import {InstitutionCoContractantProjetActiviteRechercheVo} from '../../../controller/model/InstitutionCoContractantProjetActiviteRecherche.model';
import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
import {InstitutionCoContractantVo} from '../../../controller/model/InstitutionCoContractant.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-institutionCoContractantProjetActiviteRecherche-list',
  templateUrl: './institutionCoContractantProjetActiviteRecherche-list.component.html',
  styleUrls: ['./institutionCoContractantProjetActiviteRecherche-list.component.css']
})

export class InstitutionCoContractantProjetActiviteRechercheListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private institutionCoContractantProjetActiviteRechercheService: InstitutionCoContractantProjetActiviteRechercheService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadInstitutionCoContractantProjetActiviteRecherches();
    } 
    
    // methods 
    public async loadInstitutionCoContractantProjetActiviteRecherches(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("InstitutionCoContractantProjetActiviteRecherche", "list");
        isPermistted ? this.institutionCoContractantProjetActiviteRechercheService.findAll().subscribe(institutionCoContractantProjetActiviteRecherches => this.institutionCoContractantProjetActiviteRecherches = institutionCoContractantProjetActiviteRecherches,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.institutionCoContractantProjetActiviteRechercheService.findByCriteria(this.searchInstitutionCoContractantProjetActiviteRecherche).subscribe(institutionCoContractantProjetActiviteRecherches=>{
            
            this.institutionCoContractantProjetActiviteRecherches = institutionCoContractantProjetActiviteRecherches;
           // this.searchInstitutionCoContractantProjetActiviteRecherche = new InstitutionCoContractantProjetActiviteRechercheVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'institutionCoContractant', header: 'institutionCoContractant'},
                {field: 'projetActiviteRecherche', header: 'projetActiviteRecherche'},
        ];
    }
    
    public async editInstitutionCoContractantProjetActiviteRecherche(institutionCoContractantProjetActiviteRecherche:InstitutionCoContractantProjetActiviteRechercheVo){
        const isPermistted = await this.roleService.isPermitted("InstitutionCoContractantProjetActiviteRecherche", "edit");
         if(isPermistted){
         this.selectedInstitutionCoContractantProjetActiviteRecherche = institutionCoContractantProjetActiviteRecherche;
         this.editInstitutionCoContractantProjetActiviteRechercheDialog = true;
         this.institutionCoContractantProjetActiviteRechercheService.editInstitutionCoContractantProjetActiviteRecherche$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewInstitutionCoContractantProjetActiviteRecherche(institutionCoContractantProjetActiviteRecherche:InstitutionCoContractantProjetActiviteRechercheVo){
        const isPermistted = await this.roleService.isPermitted("InstitutionCoContractantProjetActiviteRecherche", "view");
        if(isPermistted){
       this.selectedInstitutionCoContractantProjetActiviteRecherche = institutionCoContractantProjetActiviteRecherche;
        this.viewInstitutionCoContractantProjetActiviteRechercheDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateInstitutionCoContractantProjetActiviteRecherche(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedInstitutionCoContractantProjetActiviteRecherche = new InstitutionCoContractantProjetActiviteRechercheVo();
        this.createInstitutionCoContractantProjetActiviteRechercheDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteInstitutionCoContractantProjetActiviteRecherche(institutionCoContractantProjetActiviteRecherche:InstitutionCoContractantProjetActiviteRechercheVo){
       const isPermistted = await this.roleService.isPermitted("InstitutionCoContractantProjetActiviteRecherche", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the InstitutionCoContractantProjetActiviteRecherche ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.institutionCoContractantProjetActiviteRechercheService.delete(institutionCoContractantProjetActiviteRecherche).subscribe(status=>{
                          if(status > 0){
                          const position = this.institutionCoContractantProjetActiviteRecherches.indexOf(institutionCoContractantProjetActiviteRecherche);
                          position > -1 ? this.institutionCoContractantProjetActiviteRecherches.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'InstitutionCoContractantProjetActiviteRecherche Deleted',
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

    get institutionCoContractantProjetActiviteRecherches(): Array<InstitutionCoContractantProjetActiviteRechercheVo> {
           return this.institutionCoContractantProjetActiviteRechercheService.institutionCoContractantProjetActiviteRecherches;
       }
    set institutionCoContractantProjetActiviteRecherches(value: Array<InstitutionCoContractantProjetActiviteRechercheVo>) {
        this.institutionCoContractantProjetActiviteRechercheService.institutionCoContractantProjetActiviteRecherches = value;
       }

    get institutionCoContractantProjetActiviteRechercheSelections(): Array<InstitutionCoContractantProjetActiviteRechercheVo> {
           return this.institutionCoContractantProjetActiviteRechercheService.institutionCoContractantProjetActiviteRechercheSelections;
       }
    set institutionCoContractantProjetActiviteRechercheSelections(value: Array<InstitutionCoContractantProjetActiviteRechercheVo>) {
        this.institutionCoContractantProjetActiviteRechercheService.institutionCoContractantProjetActiviteRechercheSelections = value;
       }
   
     


    get selectedInstitutionCoContractantProjetActiviteRecherche():InstitutionCoContractantProjetActiviteRechercheVo {
           return this.institutionCoContractantProjetActiviteRechercheService.selectedInstitutionCoContractantProjetActiviteRecherche;
       }
    set selectedInstitutionCoContractantProjetActiviteRecherche(value: InstitutionCoContractantProjetActiviteRechercheVo) {
        this.institutionCoContractantProjetActiviteRechercheService.selectedInstitutionCoContractantProjetActiviteRecherche = value;
       }
    
    get createInstitutionCoContractantProjetActiviteRechercheDialog():boolean {
           return this.institutionCoContractantProjetActiviteRechercheService.createInstitutionCoContractantProjetActiviteRechercheDialog;
       }
    set createInstitutionCoContractantProjetActiviteRechercheDialog(value: boolean) {
        this.institutionCoContractantProjetActiviteRechercheService.createInstitutionCoContractantProjetActiviteRechercheDialog= value;
       }
    
    get editInstitutionCoContractantProjetActiviteRechercheDialog():boolean {
           return this.institutionCoContractantProjetActiviteRechercheService.editInstitutionCoContractantProjetActiviteRechercheDialog;
       }
    set editInstitutionCoContractantProjetActiviteRechercheDialog(value: boolean) {
        this.institutionCoContractantProjetActiviteRechercheService.editInstitutionCoContractantProjetActiviteRechercheDialog= value;
       }
    get viewInstitutionCoContractantProjetActiviteRechercheDialog():boolean {
           return this.institutionCoContractantProjetActiviteRechercheService.viewInstitutionCoContractantProjetActiviteRechercheDialog;
       }
    set viewInstitutionCoContractantProjetActiviteRechercheDialog(value: boolean) {
        this.institutionCoContractantProjetActiviteRechercheService.viewInstitutionCoContractantProjetActiviteRechercheDialog = value;
       }
       
     get searchInstitutionCoContractantProjetActiviteRecherche(): InstitutionCoContractantProjetActiviteRechercheVo {
        return this.institutionCoContractantProjetActiviteRechercheService.searchInstitutionCoContractantProjetActiviteRecherche;
       }
    set searchInstitutionCoContractantProjetActiviteRecherche(value: InstitutionCoContractantProjetActiviteRechercheVo) {
        this.institutionCoContractantProjetActiviteRechercheService.searchInstitutionCoContractantProjetActiviteRecherche = value;
       }



}