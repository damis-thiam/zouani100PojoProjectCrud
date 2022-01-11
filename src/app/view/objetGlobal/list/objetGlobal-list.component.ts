import {Component, OnInit} from '@angular/core';
import {ObjetGlobalService} from '../../../controller/service/ObjetGlobal.service';
import {ObjetGlobalVo} from '../../../controller/model/ObjetGlobal.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-objetGlobal-list',
  templateUrl: './objetGlobal-list.component.html',
  styleUrls: ['./objetGlobal-list.component.css']
})

export class ObjetGlobalListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private objetGlobalService: ObjetGlobalService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadObjetGlobals();
    } 
    
    // methods 
    public async loadObjetGlobals(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("ObjetGlobal", "list");
        isPermistted ? this.objetGlobalService.findAll().subscribe(objetGlobals => this.objetGlobals = objetGlobals,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.objetGlobalService.findByCriteria(this.searchObjetGlobal).subscribe(objetGlobals=>{
            
            this.objetGlobals = objetGlobals;
           // this.searchObjetGlobal = new ObjetGlobalVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editObjetGlobal(objetGlobal:ObjetGlobalVo){
        const isPermistted = await this.roleService.isPermitted("ObjetGlobal", "edit");
         if(isPermistted){
         this.selectedObjetGlobal = objetGlobal;
         this.editObjetGlobalDialog = true;
         this.objetGlobalService.editObjetGlobal$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewObjetGlobal(objetGlobal:ObjetGlobalVo){
        const isPermistted = await this.roleService.isPermitted("ObjetGlobal", "view");
        if(isPermistted){
       this.selectedObjetGlobal = objetGlobal;
        this.viewObjetGlobalDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateObjetGlobal(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedObjetGlobal = new ObjetGlobalVo();
        this.createObjetGlobalDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteObjetGlobal(objetGlobal:ObjetGlobalVo){
       const isPermistted = await this.roleService.isPermitted("ObjetGlobal", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the ObjetGlobal ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.objetGlobalService.delete(objetGlobal).subscribe(status=>{
                          if(status > 0){
                          const position = this.objetGlobals.indexOf(objetGlobal);
                          position > -1 ? this.objetGlobals.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'ObjetGlobal Deleted',
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

    get objetGlobals(): Array<ObjetGlobalVo> {
           return this.objetGlobalService.objetGlobals;
       }
    set objetGlobals(value: Array<ObjetGlobalVo>) {
        this.objetGlobalService.objetGlobals = value;
       }

    get objetGlobalSelections(): Array<ObjetGlobalVo> {
           return this.objetGlobalService.objetGlobalSelections;
       }
    set objetGlobalSelections(value: Array<ObjetGlobalVo>) {
        this.objetGlobalService.objetGlobalSelections = value;
       }
   
     


    get selectedObjetGlobal():ObjetGlobalVo {
           return this.objetGlobalService.selectedObjetGlobal;
       }
    set selectedObjetGlobal(value: ObjetGlobalVo) {
        this.objetGlobalService.selectedObjetGlobal = value;
       }
    
    get createObjetGlobalDialog():boolean {
           return this.objetGlobalService.createObjetGlobalDialog;
       }
    set createObjetGlobalDialog(value: boolean) {
        this.objetGlobalService.createObjetGlobalDialog= value;
       }
    
    get editObjetGlobalDialog():boolean {
           return this.objetGlobalService.editObjetGlobalDialog;
       }
    set editObjetGlobalDialog(value: boolean) {
        this.objetGlobalService.editObjetGlobalDialog= value;
       }
    get viewObjetGlobalDialog():boolean {
           return this.objetGlobalService.viewObjetGlobalDialog;
       }
    set viewObjetGlobalDialog(value: boolean) {
        this.objetGlobalService.viewObjetGlobalDialog = value;
       }
       
     get searchObjetGlobal(): ObjetGlobalVo {
        return this.objetGlobalService.searchObjetGlobal;
       }
    set searchObjetGlobal(value: ObjetGlobalVo) {
        this.objetGlobalService.searchObjetGlobal = value;
       }



}