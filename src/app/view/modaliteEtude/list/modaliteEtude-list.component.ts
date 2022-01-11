import {Component, OnInit} from '@angular/core';
import {ModaliteEtudeService} from '../../../controller/service/ModaliteEtude.service';
import {ModaliteEtudeVo} from '../../../controller/model/ModaliteEtude.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-modaliteEtude-list',
  templateUrl: './modaliteEtude-list.component.html',
  styleUrls: ['./modaliteEtude-list.component.css']
})

export class ModaliteEtudeListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private modaliteEtudeService: ModaliteEtudeService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadModaliteEtudes();
    } 
    
    // methods 
    public async loadModaliteEtudes(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("ModaliteEtude", "list");
        isPermistted ? this.modaliteEtudeService.findAll().subscribe(modaliteEtudes => this.modaliteEtudes = modaliteEtudes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.modaliteEtudeService.findByCriteria(this.searchModaliteEtude).subscribe(modaliteEtudes=>{
            
            this.modaliteEtudes = modaliteEtudes;
           // this.searchModaliteEtude = new ModaliteEtudeVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
                {field: 'description', header: 'description'},
        ];
    }
    
    public async editModaliteEtude(modaliteEtude:ModaliteEtudeVo){
        const isPermistted = await this.roleService.isPermitted("ModaliteEtude", "edit");
         if(isPermistted){
         this.selectedModaliteEtude = modaliteEtude;
         this.editModaliteEtudeDialog = true;
         this.modaliteEtudeService.editModaliteEtude$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewModaliteEtude(modaliteEtude:ModaliteEtudeVo){
        const isPermistted = await this.roleService.isPermitted("ModaliteEtude", "view");
        if(isPermistted){
       this.selectedModaliteEtude = modaliteEtude;
        this.viewModaliteEtudeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateModaliteEtude(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedModaliteEtude = new ModaliteEtudeVo();
        this.createModaliteEtudeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteModaliteEtude(modaliteEtude:ModaliteEtudeVo){
       const isPermistted = await this.roleService.isPermitted("ModaliteEtude", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the ModaliteEtude ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.modaliteEtudeService.delete(modaliteEtude).subscribe(status=>{
                          if(status > 0){
                          const position = this.modaliteEtudes.indexOf(modaliteEtude);
                          position > -1 ? this.modaliteEtudes.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'ModaliteEtude Deleted',
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

    get modaliteEtudes(): Array<ModaliteEtudeVo> {
           return this.modaliteEtudeService.modaliteEtudes;
       }
    set modaliteEtudes(value: Array<ModaliteEtudeVo>) {
        this.modaliteEtudeService.modaliteEtudes = value;
       }

    get modaliteEtudeSelections(): Array<ModaliteEtudeVo> {
           return this.modaliteEtudeService.modaliteEtudeSelections;
       }
    set modaliteEtudeSelections(value: Array<ModaliteEtudeVo>) {
        this.modaliteEtudeService.modaliteEtudeSelections = value;
       }
   
     


    get selectedModaliteEtude():ModaliteEtudeVo {
           return this.modaliteEtudeService.selectedModaliteEtude;
       }
    set selectedModaliteEtude(value: ModaliteEtudeVo) {
        this.modaliteEtudeService.selectedModaliteEtude = value;
       }
    
    get createModaliteEtudeDialog():boolean {
           return this.modaliteEtudeService.createModaliteEtudeDialog;
       }
    set createModaliteEtudeDialog(value: boolean) {
        this.modaliteEtudeService.createModaliteEtudeDialog= value;
       }
    
    get editModaliteEtudeDialog():boolean {
           return this.modaliteEtudeService.editModaliteEtudeDialog;
       }
    set editModaliteEtudeDialog(value: boolean) {
        this.modaliteEtudeService.editModaliteEtudeDialog= value;
       }
    get viewModaliteEtudeDialog():boolean {
           return this.modaliteEtudeService.viewModaliteEtudeDialog;
       }
    set viewModaliteEtudeDialog(value: boolean) {
        this.modaliteEtudeService.viewModaliteEtudeDialog = value;
       }
       
     get searchModaliteEtude(): ModaliteEtudeVo {
        return this.modaliteEtudeService.searchModaliteEtude;
       }
    set searchModaliteEtude(value: ModaliteEtudeVo) {
        this.modaliteEtudeService.searchModaliteEtude = value;
       }



}