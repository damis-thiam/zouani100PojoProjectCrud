import {Component, OnInit} from '@angular/core';
import {StatutMasterService} from '../../../controller/service/StatutMaster.service';
import {StatutMasterVo} from '../../../controller/model/StatutMaster.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-statutMaster-list',
  templateUrl: './statutMaster-list.component.html',
  styleUrls: ['./statutMaster-list.component.css']
})

export class StatutMasterListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private statutMasterService: StatutMasterService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadStatutMasters();
    } 
    
    // methods 
    public async loadStatutMasters(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("StatutMaster", "list");
        isPermistted ? this.statutMasterService.findAll().subscribe(statutMasters => this.statutMasters = statutMasters,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.statutMasterService.findByCriteria(this.searchStatutMaster).subscribe(statutMasters=>{
            
            this.statutMasters = statutMasters;
           // this.searchStatutMaster = new StatutMasterVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editStatutMaster(statutMaster:StatutMasterVo){
        const isPermistted = await this.roleService.isPermitted("StatutMaster", "edit");
         if(isPermistted){
         this.selectedStatutMaster = statutMaster;
         this.editStatutMasterDialog = true;
         this.statutMasterService.editStatutMaster$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewStatutMaster(statutMaster:StatutMasterVo){
        const isPermistted = await this.roleService.isPermitted("StatutMaster", "view");
        if(isPermistted){
       this.selectedStatutMaster = statutMaster;
        this.viewStatutMasterDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateStatutMaster(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedStatutMaster = new StatutMasterVo();
        this.createStatutMasterDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteStatutMaster(statutMaster:StatutMasterVo){
       const isPermistted = await this.roleService.isPermitted("StatutMaster", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the StatutMaster ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.statutMasterService.delete(statutMaster).subscribe(status=>{
                          if(status > 0){
                          const position = this.statutMasters.indexOf(statutMaster);
                          position > -1 ? this.statutMasters.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'StatutMaster Deleted',
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

    get statutMasters(): Array<StatutMasterVo> {
           return this.statutMasterService.statutMasters;
       }
    set statutMasters(value: Array<StatutMasterVo>) {
        this.statutMasterService.statutMasters = value;
       }

    get statutMasterSelections(): Array<StatutMasterVo> {
           return this.statutMasterService.statutMasterSelections;
       }
    set statutMasterSelections(value: Array<StatutMasterVo>) {
        this.statutMasterService.statutMasterSelections = value;
       }
   
     


    get selectedStatutMaster():StatutMasterVo {
           return this.statutMasterService.selectedStatutMaster;
       }
    set selectedStatutMaster(value: StatutMasterVo) {
        this.statutMasterService.selectedStatutMaster = value;
       }
    
    get createStatutMasterDialog():boolean {
           return this.statutMasterService.createStatutMasterDialog;
       }
    set createStatutMasterDialog(value: boolean) {
        this.statutMasterService.createStatutMasterDialog= value;
       }
    
    get editStatutMasterDialog():boolean {
           return this.statutMasterService.editStatutMasterDialog;
       }
    set editStatutMasterDialog(value: boolean) {
        this.statutMasterService.editStatutMasterDialog= value;
       }
    get viewStatutMasterDialog():boolean {
           return this.statutMasterService.viewStatutMasterDialog;
       }
    set viewStatutMasterDialog(value: boolean) {
        this.statutMasterService.viewStatutMasterDialog = value;
       }
       
     get searchStatutMaster(): StatutMasterVo {
        return this.statutMasterService.searchStatutMaster;
       }
    set searchStatutMaster(value: StatutMasterVo) {
        this.statutMasterService.searchStatutMaster = value;
       }



}