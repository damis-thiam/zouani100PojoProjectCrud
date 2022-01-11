import {Component, OnInit} from '@angular/core';
import {MasterInternationalService} from '../../../controller/service/MasterInternational.service';
import {MasterInternationalVo} from '../../../controller/model/MasterInternational.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-masterInternational-list',
  templateUrl: './masterInternational-list.component.html',
  styleUrls: ['./masterInternational-list.component.css']
})

export class MasterInternationalListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private masterInternationalService: MasterInternationalService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadMasterInternationals();
    } 
    
    // methods 
    public async loadMasterInternationals(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("MasterInternational", "list");
        isPermistted ? this.masterInternationalService.findAll().subscribe(masterInternationals => this.masterInternationals = masterInternationals,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.masterInternationalService.findByCriteria(this.searchMasterInternational).subscribe(masterInternationals=>{
            
            this.masterInternationals = masterInternationals;
           // this.searchMasterInternational = new MasterInternationalVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editMasterInternational(masterInternational:MasterInternationalVo){
        const isPermistted = await this.roleService.isPermitted("MasterInternational", "edit");
         if(isPermistted){
         this.selectedMasterInternational = masterInternational;
         this.editMasterInternationalDialog = true;
         this.masterInternationalService.editMasterInternational$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewMasterInternational(masterInternational:MasterInternationalVo){
        const isPermistted = await this.roleService.isPermitted("MasterInternational", "view");
        if(isPermistted){
       this.selectedMasterInternational = masterInternational;
        this.viewMasterInternationalDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateMasterInternational(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedMasterInternational = new MasterInternationalVo();
        this.createMasterInternationalDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteMasterInternational(masterInternational:MasterInternationalVo){
       const isPermistted = await this.roleService.isPermitted("MasterInternational", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the MasterInternational ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.masterInternationalService.delete(masterInternational).subscribe(status=>{
                          if(status > 0){
                          const position = this.masterInternationals.indexOf(masterInternational);
                          position > -1 ? this.masterInternationals.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'MasterInternational Deleted',
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

    get masterInternationals(): Array<MasterInternationalVo> {
           return this.masterInternationalService.masterInternationals;
       }
    set masterInternationals(value: Array<MasterInternationalVo>) {
        this.masterInternationalService.masterInternationals = value;
       }

    get masterInternationalSelections(): Array<MasterInternationalVo> {
           return this.masterInternationalService.masterInternationalSelections;
       }
    set masterInternationalSelections(value: Array<MasterInternationalVo>) {
        this.masterInternationalService.masterInternationalSelections = value;
       }
   
     


    get selectedMasterInternational():MasterInternationalVo {
           return this.masterInternationalService.selectedMasterInternational;
       }
    set selectedMasterInternational(value: MasterInternationalVo) {
        this.masterInternationalService.selectedMasterInternational = value;
       }
    
    get createMasterInternationalDialog():boolean {
           return this.masterInternationalService.createMasterInternationalDialog;
       }
    set createMasterInternationalDialog(value: boolean) {
        this.masterInternationalService.createMasterInternationalDialog= value;
       }
    
    get editMasterInternationalDialog():boolean {
           return this.masterInternationalService.editMasterInternationalDialog;
       }
    set editMasterInternationalDialog(value: boolean) {
        this.masterInternationalService.editMasterInternationalDialog= value;
       }
    get viewMasterInternationalDialog():boolean {
           return this.masterInternationalService.viewMasterInternationalDialog;
       }
    set viewMasterInternationalDialog(value: boolean) {
        this.masterInternationalService.viewMasterInternationalDialog = value;
       }
       
     get searchMasterInternational(): MasterInternationalVo {
        return this.masterInternationalService.searchMasterInternational;
       }
    set searchMasterInternational(value: MasterInternationalVo) {
        this.masterInternationalService.searchMasterInternational = value;
       }



}