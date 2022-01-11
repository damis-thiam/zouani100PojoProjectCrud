import {Component, OnInit} from '@angular/core';
import {ModaliteFormationContinueService} from '../../../controller/service/ModaliteFormationContinue.service';
import {ModaliteFormationContinueVo} from '../../../controller/model/ModaliteFormationContinue.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-modaliteFormationContinue-list',
  templateUrl: './modaliteFormationContinue-list.component.html',
  styleUrls: ['./modaliteFormationContinue-list.component.css']
})

export class ModaliteFormationContinueListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private modaliteFormationContinueService: ModaliteFormationContinueService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadModaliteFormationContinues();
    } 
    
    // methods 
    public async loadModaliteFormationContinues(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("ModaliteFormationContinue", "list");
        isPermistted ? this.modaliteFormationContinueService.findAll().subscribe(modaliteFormationContinues => this.modaliteFormationContinues = modaliteFormationContinues,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.modaliteFormationContinueService.findByCriteria(this.searchModaliteFormationContinue).subscribe(modaliteFormationContinues=>{
            
            this.modaliteFormationContinues = modaliteFormationContinues;
           // this.searchModaliteFormationContinue = new ModaliteFormationContinueVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editModaliteFormationContinue(modaliteFormationContinue:ModaliteFormationContinueVo){
        const isPermistted = await this.roleService.isPermitted("ModaliteFormationContinue", "edit");
         if(isPermistted){
         this.selectedModaliteFormationContinue = modaliteFormationContinue;
         this.editModaliteFormationContinueDialog = true;
         this.modaliteFormationContinueService.editModaliteFormationContinue$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewModaliteFormationContinue(modaliteFormationContinue:ModaliteFormationContinueVo){
        const isPermistted = await this.roleService.isPermitted("ModaliteFormationContinue", "view");
        if(isPermistted){
       this.selectedModaliteFormationContinue = modaliteFormationContinue;
        this.viewModaliteFormationContinueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateModaliteFormationContinue(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedModaliteFormationContinue = new ModaliteFormationContinueVo();
        this.createModaliteFormationContinueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteModaliteFormationContinue(modaliteFormationContinue:ModaliteFormationContinueVo){
       const isPermistted = await this.roleService.isPermitted("ModaliteFormationContinue", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the ModaliteFormationContinue ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.modaliteFormationContinueService.delete(modaliteFormationContinue).subscribe(status=>{
                          if(status > 0){
                          const position = this.modaliteFormationContinues.indexOf(modaliteFormationContinue);
                          position > -1 ? this.modaliteFormationContinues.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'ModaliteFormationContinue Deleted',
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

    get modaliteFormationContinues(): Array<ModaliteFormationContinueVo> {
           return this.modaliteFormationContinueService.modaliteFormationContinues;
       }
    set modaliteFormationContinues(value: Array<ModaliteFormationContinueVo>) {
        this.modaliteFormationContinueService.modaliteFormationContinues = value;
       }

    get modaliteFormationContinueSelections(): Array<ModaliteFormationContinueVo> {
           return this.modaliteFormationContinueService.modaliteFormationContinueSelections;
       }
    set modaliteFormationContinueSelections(value: Array<ModaliteFormationContinueVo>) {
        this.modaliteFormationContinueService.modaliteFormationContinueSelections = value;
       }
   
     


    get selectedModaliteFormationContinue():ModaliteFormationContinueVo {
           return this.modaliteFormationContinueService.selectedModaliteFormationContinue;
       }
    set selectedModaliteFormationContinue(value: ModaliteFormationContinueVo) {
        this.modaliteFormationContinueService.selectedModaliteFormationContinue = value;
       }
    
    get createModaliteFormationContinueDialog():boolean {
           return this.modaliteFormationContinueService.createModaliteFormationContinueDialog;
       }
    set createModaliteFormationContinueDialog(value: boolean) {
        this.modaliteFormationContinueService.createModaliteFormationContinueDialog= value;
       }
    
    get editModaliteFormationContinueDialog():boolean {
           return this.modaliteFormationContinueService.editModaliteFormationContinueDialog;
       }
    set editModaliteFormationContinueDialog(value: boolean) {
        this.modaliteFormationContinueService.editModaliteFormationContinueDialog= value;
       }
    get viewModaliteFormationContinueDialog():boolean {
           return this.modaliteFormationContinueService.viewModaliteFormationContinueDialog;
       }
    set viewModaliteFormationContinueDialog(value: boolean) {
        this.modaliteFormationContinueService.viewModaliteFormationContinueDialog = value;
       }
       
     get searchModaliteFormationContinue(): ModaliteFormationContinueVo {
        return this.modaliteFormationContinueService.searchModaliteFormationContinue;
       }
    set searchModaliteFormationContinue(value: ModaliteFormationContinueVo) {
        this.modaliteFormationContinueService.searchModaliteFormationContinue = value;
       }



}