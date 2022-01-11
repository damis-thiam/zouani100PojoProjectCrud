import {Component, OnInit} from '@angular/core';
import {ModaliteService} from '../../../controller/service/Modalite.service';
import {ModaliteVo} from '../../../controller/model/Modalite.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-modalite-list',
  templateUrl: './modalite-list.component.html',
  styleUrls: ['./modalite-list.component.css']
})

export class ModaliteListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private modaliteService: ModaliteService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadModalites();
    } 
    
    // methods 
    public async loadModalites(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("Modalite", "list");
        isPermistted ? this.modaliteService.findAll().subscribe(modalites => this.modalites = modalites,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.modaliteService.findByCriteria(this.searchModalite).subscribe(modalites=>{
            
            this.modalites = modalites;
           // this.searchModalite = new ModaliteVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editModalite(modalite:ModaliteVo){
        const isPermistted = await this.roleService.isPermitted("Modalite", "edit");
         if(isPermistted){
         this.selectedModalite = modalite;
         this.editModaliteDialog = true;
         this.modaliteService.editModalite$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewModalite(modalite:ModaliteVo){
        const isPermistted = await this.roleService.isPermitted("Modalite", "view");
        if(isPermistted){
       this.selectedModalite = modalite;
        this.viewModaliteDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateModalite(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedModalite = new ModaliteVo();
        this.createModaliteDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteModalite(modalite:ModaliteVo){
       const isPermistted = await this.roleService.isPermitted("Modalite", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the Modalite ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.modaliteService.delete(modalite).subscribe(status=>{
                          if(status > 0){
                          const position = this.modalites.indexOf(modalite);
                          position > -1 ? this.modalites.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Modalite Deleted',
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

    get modalites(): Array<ModaliteVo> {
           return this.modaliteService.modalites;
       }
    set modalites(value: Array<ModaliteVo>) {
        this.modaliteService.modalites = value;
       }

    get modaliteSelections(): Array<ModaliteVo> {
           return this.modaliteService.modaliteSelections;
       }
    set modaliteSelections(value: Array<ModaliteVo>) {
        this.modaliteService.modaliteSelections = value;
       }
   
     


    get selectedModalite():ModaliteVo {
           return this.modaliteService.selectedModalite;
       }
    set selectedModalite(value: ModaliteVo) {
        this.modaliteService.selectedModalite = value;
       }
    
    get createModaliteDialog():boolean {
           return this.modaliteService.createModaliteDialog;
       }
    set createModaliteDialog(value: boolean) {
        this.modaliteService.createModaliteDialog= value;
       }
    
    get editModaliteDialog():boolean {
           return this.modaliteService.editModaliteDialog;
       }
    set editModaliteDialog(value: boolean) {
        this.modaliteService.editModaliteDialog= value;
       }
    get viewModaliteDialog():boolean {
           return this.modaliteService.viewModaliteDialog;
       }
    set viewModaliteDialog(value: boolean) {
        this.modaliteService.viewModaliteDialog = value;
       }
       
     get searchModalite(): ModaliteVo {
        return this.modaliteService.searchModalite;
       }
    set searchModalite(value: ModaliteVo) {
        this.modaliteService.searchModalite = value;
       }



}