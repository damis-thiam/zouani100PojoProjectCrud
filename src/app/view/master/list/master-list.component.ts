import {Component, OnInit} from '@angular/core';
import {MasterService} from '../../../controller/service/Master.service';
import {MasterVo} from '../../../controller/model/Master.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-master-list',
  templateUrl: './master-list.component.html',
  styleUrls: ['./master-list.component.css']
})

export class MasterListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private masterService: MasterService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadMasters();
    } 
    
    // methods 
    public async loadMasters(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("Master", "list");
        isPermistted ? this.masterService.findAll().subscribe(masters => this.masters = masters,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.masterService.findByCriteria(this.searchMaster).subscribe(masters=>{
            
            this.masters = masters;
           // this.searchMaster = new MasterVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'intitule', header: 'intitule'},
                {field: 'international', header: 'international'},
                {field: 'paysEtablissement', header: 'paysEtablissement'},
        ];
    }
    
    public async editMaster(master:MasterVo){
        const isPermistted = await this.roleService.isPermitted("Master", "edit");
         if(isPermistted){
         this.selectedMaster = master;
         this.editMasterDialog = true;
         this.masterService.editMaster$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewMaster(master:MasterVo){
        const isPermistted = await this.roleService.isPermitted("Master", "view");
        if(isPermistted){
       this.selectedMaster = master;
        this.viewMasterDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateMaster(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedMaster = new MasterVo();
        this.createMasterDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteMaster(master:MasterVo){
       const isPermistted = await this.roleService.isPermitted("Master", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the Master ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.masterService.delete(master).subscribe(status=>{
                          if(status > 0){
                          const position = this.masters.indexOf(master);
                          position > -1 ? this.masters.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Master Deleted',
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

    get masters(): Array<MasterVo> {
           return this.masterService.masters;
       }
    set masters(value: Array<MasterVo>) {
        this.masterService.masters = value;
       }

    get masterSelections(): Array<MasterVo> {
           return this.masterService.masterSelections;
       }
    set masterSelections(value: Array<MasterVo>) {
        this.masterService.masterSelections = value;
       }
   
     


    get selectedMaster():MasterVo {
           return this.masterService.selectedMaster;
       }
    set selectedMaster(value: MasterVo) {
        this.masterService.selectedMaster = value;
       }
    
    get createMasterDialog():boolean {
           return this.masterService.createMasterDialog;
       }
    set createMasterDialog(value: boolean) {
        this.masterService.createMasterDialog= value;
       }
    
    get editMasterDialog():boolean {
           return this.masterService.editMasterDialog;
       }
    set editMasterDialog(value: boolean) {
        this.masterService.editMasterDialog= value;
       }
    get viewMasterDialog():boolean {
           return this.masterService.viewMasterDialog;
       }
    set viewMasterDialog(value: boolean) {
        this.masterService.viewMasterDialog = value;
       }
       
     get searchMaster(): MasterVo {
        return this.masterService.searchMaster;
       }
    set searchMaster(value: MasterVo) {
        this.masterService.searchMaster = value;
       }



}