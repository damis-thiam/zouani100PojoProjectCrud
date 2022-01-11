import {Component, OnInit} from '@angular/core';
import {PubliquePrincipalService} from '../../../controller/service/PubliquePrincipal.service';
import {PubliquePrincipalVo} from '../../../controller/model/PubliquePrincipal.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-publiquePrincipal-list',
  templateUrl: './publiquePrincipal-list.component.html',
  styleUrls: ['./publiquePrincipal-list.component.css']
})

export class PubliquePrincipalListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private publiquePrincipalService: PubliquePrincipalService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadPubliquePrincipals();
    } 
    
    // methods 
    public async loadPubliquePrincipals(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("PubliquePrincipal", "list");
        isPermistted ? this.publiquePrincipalService.findAll().subscribe(publiquePrincipals => this.publiquePrincipals = publiquePrincipals,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.publiquePrincipalService.findByCriteria(this.searchPubliquePrincipal).subscribe(publiquePrincipals=>{
            
            this.publiquePrincipals = publiquePrincipals;
           // this.searchPubliquePrincipal = new PubliquePrincipalVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editPubliquePrincipal(publiquePrincipal:PubliquePrincipalVo){
        const isPermistted = await this.roleService.isPermitted("PubliquePrincipal", "edit");
         if(isPermistted){
         this.selectedPubliquePrincipal = publiquePrincipal;
         this.editPubliquePrincipalDialog = true;
         this.publiquePrincipalService.editPubliquePrincipal$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewPubliquePrincipal(publiquePrincipal:PubliquePrincipalVo){
        const isPermistted = await this.roleService.isPermitted("PubliquePrincipal", "view");
        if(isPermistted){
       this.selectedPubliquePrincipal = publiquePrincipal;
        this.viewPubliquePrincipalDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreatePubliquePrincipal(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedPubliquePrincipal = new PubliquePrincipalVo();
        this.createPubliquePrincipalDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deletePubliquePrincipal(publiquePrincipal:PubliquePrincipalVo){
       const isPermistted = await this.roleService.isPermitted("PubliquePrincipal", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the PubliquePrincipal ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.publiquePrincipalService.delete(publiquePrincipal).subscribe(status=>{
                          if(status > 0){
                          const position = this.publiquePrincipals.indexOf(publiquePrincipal);
                          position > -1 ? this.publiquePrincipals.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'PubliquePrincipal Deleted',
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

    get publiquePrincipals(): Array<PubliquePrincipalVo> {
           return this.publiquePrincipalService.publiquePrincipals;
       }
    set publiquePrincipals(value: Array<PubliquePrincipalVo>) {
        this.publiquePrincipalService.publiquePrincipals = value;
       }

    get publiquePrincipalSelections(): Array<PubliquePrincipalVo> {
           return this.publiquePrincipalService.publiquePrincipalSelections;
       }
    set publiquePrincipalSelections(value: Array<PubliquePrincipalVo>) {
        this.publiquePrincipalService.publiquePrincipalSelections = value;
       }
   
     


    get selectedPubliquePrincipal():PubliquePrincipalVo {
           return this.publiquePrincipalService.selectedPubliquePrincipal;
       }
    set selectedPubliquePrincipal(value: PubliquePrincipalVo) {
        this.publiquePrincipalService.selectedPubliquePrincipal = value;
       }
    
    get createPubliquePrincipalDialog():boolean {
           return this.publiquePrincipalService.createPubliquePrincipalDialog;
       }
    set createPubliquePrincipalDialog(value: boolean) {
        this.publiquePrincipalService.createPubliquePrincipalDialog= value;
       }
    
    get editPubliquePrincipalDialog():boolean {
           return this.publiquePrincipalService.editPubliquePrincipalDialog;
       }
    set editPubliquePrincipalDialog(value: boolean) {
        this.publiquePrincipalService.editPubliquePrincipalDialog= value;
       }
    get viewPubliquePrincipalDialog():boolean {
           return this.publiquePrincipalService.viewPubliquePrincipalDialog;
       }
    set viewPubliquePrincipalDialog(value: boolean) {
        this.publiquePrincipalService.viewPubliquePrincipalDialog = value;
       }
       
     get searchPubliquePrincipal(): PubliquePrincipalVo {
        return this.publiquePrincipalService.searchPubliquePrincipal;
       }
    set searchPubliquePrincipal(value: PubliquePrincipalVo) {
        this.publiquePrincipalService.searchPubliquePrincipal = value;
       }



}