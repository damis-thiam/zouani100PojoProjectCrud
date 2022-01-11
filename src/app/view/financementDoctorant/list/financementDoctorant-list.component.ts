import {Component, OnInit} from '@angular/core';
import {FinancementDoctorantService} from '../../../controller/service/FinancementDoctorant.service';
import {FinancementDoctorantVo} from '../../../controller/model/FinancementDoctorant.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-financementDoctorant-list',
  templateUrl: './financementDoctorant-list.component.html',
  styleUrls: ['./financementDoctorant-list.component.css']
})

export class FinancementDoctorantListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private financementDoctorantService: FinancementDoctorantService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadFinancementDoctorants();
    } 
    
    // methods 
    public async loadFinancementDoctorants(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("FinancementDoctorant", "list");
        isPermistted ? this.financementDoctorantService.findAll().subscribe(financementDoctorants => this.financementDoctorants = financementDoctorants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.financementDoctorantService.findByCriteria(this.searchFinancementDoctorant).subscribe(financementDoctorants=>{
            
            this.financementDoctorants = financementDoctorants;
           // this.searchFinancementDoctorant = new FinancementDoctorantVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editFinancementDoctorant(financementDoctorant:FinancementDoctorantVo){
        const isPermistted = await this.roleService.isPermitted("FinancementDoctorant", "edit");
         if(isPermistted){
         this.selectedFinancementDoctorant = financementDoctorant;
         this.editFinancementDoctorantDialog = true;
         this.financementDoctorantService.editFinancementDoctorant$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewFinancementDoctorant(financementDoctorant:FinancementDoctorantVo){
        const isPermistted = await this.roleService.isPermitted("FinancementDoctorant", "view");
        if(isPermistted){
       this.selectedFinancementDoctorant = financementDoctorant;
        this.viewFinancementDoctorantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateFinancementDoctorant(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedFinancementDoctorant = new FinancementDoctorantVo();
        this.createFinancementDoctorantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteFinancementDoctorant(financementDoctorant:FinancementDoctorantVo){
       const isPermistted = await this.roleService.isPermitted("FinancementDoctorant", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the FinancementDoctorant ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.financementDoctorantService.delete(financementDoctorant).subscribe(status=>{
                          if(status > 0){
                          const position = this.financementDoctorants.indexOf(financementDoctorant);
                          position > -1 ? this.financementDoctorants.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'FinancementDoctorant Deleted',
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

    get financementDoctorants(): Array<FinancementDoctorantVo> {
           return this.financementDoctorantService.financementDoctorants;
       }
    set financementDoctorants(value: Array<FinancementDoctorantVo>) {
        this.financementDoctorantService.financementDoctorants = value;
       }

    get financementDoctorantSelections(): Array<FinancementDoctorantVo> {
           return this.financementDoctorantService.financementDoctorantSelections;
       }
    set financementDoctorantSelections(value: Array<FinancementDoctorantVo>) {
        this.financementDoctorantService.financementDoctorantSelections = value;
       }
   
     


    get selectedFinancementDoctorant():FinancementDoctorantVo {
           return this.financementDoctorantService.selectedFinancementDoctorant;
       }
    set selectedFinancementDoctorant(value: FinancementDoctorantVo) {
        this.financementDoctorantService.selectedFinancementDoctorant = value;
       }
    
    get createFinancementDoctorantDialog():boolean {
           return this.financementDoctorantService.createFinancementDoctorantDialog;
       }
    set createFinancementDoctorantDialog(value: boolean) {
        this.financementDoctorantService.createFinancementDoctorantDialog= value;
       }
    
    get editFinancementDoctorantDialog():boolean {
           return this.financementDoctorantService.editFinancementDoctorantDialog;
       }
    set editFinancementDoctorantDialog(value: boolean) {
        this.financementDoctorantService.editFinancementDoctorantDialog= value;
       }
    get viewFinancementDoctorantDialog():boolean {
           return this.financementDoctorantService.viewFinancementDoctorantDialog;
       }
    set viewFinancementDoctorantDialog(value: boolean) {
        this.financementDoctorantService.viewFinancementDoctorantDialog = value;
       }
       
     get searchFinancementDoctorant(): FinancementDoctorantVo {
        return this.financementDoctorantService.searchFinancementDoctorant;
       }
    set searchFinancementDoctorant(value: FinancementDoctorantVo) {
        this.financementDoctorantService.searchFinancementDoctorant = value;
       }



}