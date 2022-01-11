import {Component, OnInit} from '@angular/core';
import {ModaliteEtudeEnseignementService} from '../../../controller/service/ModaliteEtudeEnseignement.service';
import {ModaliteEtudeEnseignementVo} from '../../../controller/model/ModaliteEtudeEnseignement.model';
import {EnseignementVo} from '../../../controller/model/Enseignement.model';
import {ModaliteEtudeVo} from '../../../controller/model/ModaliteEtude.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-modaliteEtudeEnseignement-list',
  templateUrl: './modaliteEtudeEnseignement-list.component.html',
  styleUrls: ['./modaliteEtudeEnseignement-list.component.css']
})

export class ModaliteEtudeEnseignementListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private modaliteEtudeEnseignementService: ModaliteEtudeEnseignementService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadModaliteEtudeEnseignements();
    } 
    
    // methods 
    public async loadModaliteEtudeEnseignements(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("ModaliteEtudeEnseignement", "list");
        isPermistted ? this.modaliteEtudeEnseignementService.findAll().subscribe(modaliteEtudeEnseignements => this.modaliteEtudeEnseignements = modaliteEtudeEnseignements,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.modaliteEtudeEnseignementService.findByCriteria(this.searchModaliteEtudeEnseignement).subscribe(modaliteEtudeEnseignements=>{
            
            this.modaliteEtudeEnseignements = modaliteEtudeEnseignements;
           // this.searchModaliteEtudeEnseignement = new ModaliteEtudeEnseignementVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'modaliteEtude', header: 'modaliteEtude'},
                {field: 'enseignement', header: 'enseignement'},
        ];
    }
    
    public async editModaliteEtudeEnseignement(modaliteEtudeEnseignement:ModaliteEtudeEnseignementVo){
        const isPermistted = await this.roleService.isPermitted("ModaliteEtudeEnseignement", "edit");
         if(isPermistted){
         this.selectedModaliteEtudeEnseignement = modaliteEtudeEnseignement;
         this.editModaliteEtudeEnseignementDialog = true;
         this.modaliteEtudeEnseignementService.editModaliteEtudeEnseignement$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewModaliteEtudeEnseignement(modaliteEtudeEnseignement:ModaliteEtudeEnseignementVo){
        const isPermistted = await this.roleService.isPermitted("ModaliteEtudeEnseignement", "view");
        if(isPermistted){
       this.selectedModaliteEtudeEnseignement = modaliteEtudeEnseignement;
        this.viewModaliteEtudeEnseignementDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateModaliteEtudeEnseignement(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedModaliteEtudeEnseignement = new ModaliteEtudeEnseignementVo();
        this.createModaliteEtudeEnseignementDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteModaliteEtudeEnseignement(modaliteEtudeEnseignement:ModaliteEtudeEnseignementVo){
       const isPermistted = await this.roleService.isPermitted("ModaliteEtudeEnseignement", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the ModaliteEtudeEnseignement ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.modaliteEtudeEnseignementService.delete(modaliteEtudeEnseignement).subscribe(status=>{
                          if(status > 0){
                          const position = this.modaliteEtudeEnseignements.indexOf(modaliteEtudeEnseignement);
                          position > -1 ? this.modaliteEtudeEnseignements.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'ModaliteEtudeEnseignement Deleted',
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

    get modaliteEtudeEnseignements(): Array<ModaliteEtudeEnseignementVo> {
           return this.modaliteEtudeEnseignementService.modaliteEtudeEnseignements;
       }
    set modaliteEtudeEnseignements(value: Array<ModaliteEtudeEnseignementVo>) {
        this.modaliteEtudeEnseignementService.modaliteEtudeEnseignements = value;
       }

    get modaliteEtudeEnseignementSelections(): Array<ModaliteEtudeEnseignementVo> {
           return this.modaliteEtudeEnseignementService.modaliteEtudeEnseignementSelections;
       }
    set modaliteEtudeEnseignementSelections(value: Array<ModaliteEtudeEnseignementVo>) {
        this.modaliteEtudeEnseignementService.modaliteEtudeEnseignementSelections = value;
       }
   
     


    get selectedModaliteEtudeEnseignement():ModaliteEtudeEnseignementVo {
           return this.modaliteEtudeEnseignementService.selectedModaliteEtudeEnseignement;
       }
    set selectedModaliteEtudeEnseignement(value: ModaliteEtudeEnseignementVo) {
        this.modaliteEtudeEnseignementService.selectedModaliteEtudeEnseignement = value;
       }
    
    get createModaliteEtudeEnseignementDialog():boolean {
           return this.modaliteEtudeEnseignementService.createModaliteEtudeEnseignementDialog;
       }
    set createModaliteEtudeEnseignementDialog(value: boolean) {
        this.modaliteEtudeEnseignementService.createModaliteEtudeEnseignementDialog= value;
       }
    
    get editModaliteEtudeEnseignementDialog():boolean {
           return this.modaliteEtudeEnseignementService.editModaliteEtudeEnseignementDialog;
       }
    set editModaliteEtudeEnseignementDialog(value: boolean) {
        this.modaliteEtudeEnseignementService.editModaliteEtudeEnseignementDialog= value;
       }
    get viewModaliteEtudeEnseignementDialog():boolean {
           return this.modaliteEtudeEnseignementService.viewModaliteEtudeEnseignementDialog;
       }
    set viewModaliteEtudeEnseignementDialog(value: boolean) {
        this.modaliteEtudeEnseignementService.viewModaliteEtudeEnseignementDialog = value;
       }
       
     get searchModaliteEtudeEnseignement(): ModaliteEtudeEnseignementVo {
        return this.modaliteEtudeEnseignementService.searchModaliteEtudeEnseignement;
       }
    set searchModaliteEtudeEnseignement(value: ModaliteEtudeEnseignementVo) {
        this.modaliteEtudeEnseignementService.searchModaliteEtudeEnseignement = value;
       }



}