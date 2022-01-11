import {Component, OnInit} from '@angular/core';
import {EnjeuxIrdService} from '../../../controller/service/EnjeuxIrd.service';
import {EnjeuxIrdVo} from '../../../controller/model/EnjeuxIrd.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-enjeuxIrd-list',
  templateUrl: './enjeuxIrd-list.component.html',
  styleUrls: ['./enjeuxIrd-list.component.css']
})

export class EnjeuxIrdListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private enjeuxIrdService: EnjeuxIrdService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadEnjeuxIrds();
    } 
    
    // methods 
    public async loadEnjeuxIrds(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("EnjeuxIrd", "list");
        isPermistted ? this.enjeuxIrdService.findAll().subscribe(enjeuxIrds => this.enjeuxIrds = enjeuxIrds,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.enjeuxIrdService.findByCriteria(this.searchEnjeuxIrd).subscribe(enjeuxIrds=>{
            
            this.enjeuxIrds = enjeuxIrds;
           // this.searchEnjeuxIrd = new EnjeuxIrdVo();
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
    
    public async editEnjeuxIrd(enjeuxIrd:EnjeuxIrdVo){
        const isPermistted = await this.roleService.isPermitted("EnjeuxIrd", "edit");
         if(isPermistted){
         this.selectedEnjeuxIrd = enjeuxIrd;
         this.editEnjeuxIrdDialog = true;
         this.enjeuxIrdService.editEnjeuxIrd$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewEnjeuxIrd(enjeuxIrd:EnjeuxIrdVo){
        const isPermistted = await this.roleService.isPermitted("EnjeuxIrd", "view");
        if(isPermistted){
       this.selectedEnjeuxIrd = enjeuxIrd;
        this.viewEnjeuxIrdDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateEnjeuxIrd(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedEnjeuxIrd = new EnjeuxIrdVo();
        this.createEnjeuxIrdDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteEnjeuxIrd(enjeuxIrd:EnjeuxIrdVo){
       const isPermistted = await this.roleService.isPermitted("EnjeuxIrd", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the EnjeuxIrd ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.enjeuxIrdService.delete(enjeuxIrd).subscribe(status=>{
                          if(status > 0){
                          const position = this.enjeuxIrds.indexOf(enjeuxIrd);
                          position > -1 ? this.enjeuxIrds.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'EnjeuxIrd Deleted',
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

    get enjeuxIrds(): Array<EnjeuxIrdVo> {
           return this.enjeuxIrdService.enjeuxIrds;
       }
    set enjeuxIrds(value: Array<EnjeuxIrdVo>) {
        this.enjeuxIrdService.enjeuxIrds = value;
       }

    get enjeuxIrdSelections(): Array<EnjeuxIrdVo> {
           return this.enjeuxIrdService.enjeuxIrdSelections;
       }
    set enjeuxIrdSelections(value: Array<EnjeuxIrdVo>) {
        this.enjeuxIrdService.enjeuxIrdSelections = value;
       }
   
     


    get selectedEnjeuxIrd():EnjeuxIrdVo {
           return this.enjeuxIrdService.selectedEnjeuxIrd;
       }
    set selectedEnjeuxIrd(value: EnjeuxIrdVo) {
        this.enjeuxIrdService.selectedEnjeuxIrd = value;
       }
    
    get createEnjeuxIrdDialog():boolean {
           return this.enjeuxIrdService.createEnjeuxIrdDialog;
       }
    set createEnjeuxIrdDialog(value: boolean) {
        this.enjeuxIrdService.createEnjeuxIrdDialog= value;
       }
    
    get editEnjeuxIrdDialog():boolean {
           return this.enjeuxIrdService.editEnjeuxIrdDialog;
       }
    set editEnjeuxIrdDialog(value: boolean) {
        this.enjeuxIrdService.editEnjeuxIrdDialog= value;
       }
    get viewEnjeuxIrdDialog():boolean {
           return this.enjeuxIrdService.viewEnjeuxIrdDialog;
       }
    set viewEnjeuxIrdDialog(value: boolean) {
        this.enjeuxIrdService.viewEnjeuxIrdDialog = value;
       }
       
     get searchEnjeuxIrd(): EnjeuxIrdVo {
        return this.enjeuxIrdService.searchEnjeuxIrd;
       }
    set searchEnjeuxIrd(value: EnjeuxIrdVo) {
        this.enjeuxIrdService.searchEnjeuxIrd = value;
       }



}