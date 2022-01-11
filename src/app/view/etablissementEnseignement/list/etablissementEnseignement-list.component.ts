import {Component, OnInit} from '@angular/core';
import {EtablissementEnseignementService} from '../../../controller/service/EtablissementEnseignement.service';
import {EtablissementEnseignementVo} from '../../../controller/model/EtablissementEnseignement.model';
import {EnseignementVo} from '../../../controller/model/Enseignement.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-etablissementEnseignement-list',
  templateUrl: './etablissementEnseignement-list.component.html',
  styleUrls: ['./etablissementEnseignement-list.component.css']
})

export class EtablissementEnseignementListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private etablissementEnseignementService: EtablissementEnseignementService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadEtablissementEnseignements();
    } 
    
    // methods 
    public async loadEtablissementEnseignements(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("EtablissementEnseignement", "list");
        isPermistted ? this.etablissementEnseignementService.findAll().subscribe(etablissementEnseignements => this.etablissementEnseignements = etablissementEnseignements,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.etablissementEnseignementService.findByCriteria(this.searchEtablissementEnseignement).subscribe(etablissementEnseignements=>{
            
            this.etablissementEnseignements = etablissementEnseignements;
           // this.searchEtablissementEnseignement = new EtablissementEnseignementVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'etablissement', header: 'etablissement'},
                {field: 'enseignement', header: 'enseignement'},
        ];
    }
    
    public async editEtablissementEnseignement(etablissementEnseignement:EtablissementEnseignementVo){
        const isPermistted = await this.roleService.isPermitted("EtablissementEnseignement", "edit");
         if(isPermistted){
         this.selectedEtablissementEnseignement = etablissementEnseignement;
         this.editEtablissementEnseignementDialog = true;
         this.etablissementEnseignementService.editEtablissementEnseignement$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewEtablissementEnseignement(etablissementEnseignement:EtablissementEnseignementVo){
        const isPermistted = await this.roleService.isPermitted("EtablissementEnseignement", "view");
        if(isPermistted){
       this.selectedEtablissementEnseignement = etablissementEnseignement;
        this.viewEtablissementEnseignementDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateEtablissementEnseignement(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedEtablissementEnseignement = new EtablissementEnseignementVo();
        this.createEtablissementEnseignementDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteEtablissementEnseignement(etablissementEnseignement:EtablissementEnseignementVo){
       const isPermistted = await this.roleService.isPermitted("EtablissementEnseignement", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the EtablissementEnseignement ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.etablissementEnseignementService.delete(etablissementEnseignement).subscribe(status=>{
                          if(status > 0){
                          const position = this.etablissementEnseignements.indexOf(etablissementEnseignement);
                          position > -1 ? this.etablissementEnseignements.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'EtablissementEnseignement Deleted',
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

    get etablissementEnseignements(): Array<EtablissementEnseignementVo> {
           return this.etablissementEnseignementService.etablissementEnseignements;
       }
    set etablissementEnseignements(value: Array<EtablissementEnseignementVo>) {
        this.etablissementEnseignementService.etablissementEnseignements = value;
       }

    get etablissementEnseignementSelections(): Array<EtablissementEnseignementVo> {
           return this.etablissementEnseignementService.etablissementEnseignementSelections;
       }
    set etablissementEnseignementSelections(value: Array<EtablissementEnseignementVo>) {
        this.etablissementEnseignementService.etablissementEnseignementSelections = value;
       }
   
     


    get selectedEtablissementEnseignement():EtablissementEnseignementVo {
           return this.etablissementEnseignementService.selectedEtablissementEnseignement;
       }
    set selectedEtablissementEnseignement(value: EtablissementEnseignementVo) {
        this.etablissementEnseignementService.selectedEtablissementEnseignement = value;
       }
    
    get createEtablissementEnseignementDialog():boolean {
           return this.etablissementEnseignementService.createEtablissementEnseignementDialog;
       }
    set createEtablissementEnseignementDialog(value: boolean) {
        this.etablissementEnseignementService.createEtablissementEnseignementDialog= value;
       }
    
    get editEtablissementEnseignementDialog():boolean {
           return this.etablissementEnseignementService.editEtablissementEnseignementDialog;
       }
    set editEtablissementEnseignementDialog(value: boolean) {
        this.etablissementEnseignementService.editEtablissementEnseignementDialog= value;
       }
    get viewEtablissementEnseignementDialog():boolean {
           return this.etablissementEnseignementService.viewEtablissementEnseignementDialog;
       }
    set viewEtablissementEnseignementDialog(value: boolean) {
        this.etablissementEnseignementService.viewEtablissementEnseignementDialog = value;
       }
       
     get searchEtablissementEnseignement(): EtablissementEnseignementVo {
        return this.etablissementEnseignementService.searchEtablissementEnseignement;
       }
    set searchEtablissementEnseignement(value: EtablissementEnseignementVo) {
        this.etablissementEnseignementService.searchEtablissementEnseignement = value;
       }



}