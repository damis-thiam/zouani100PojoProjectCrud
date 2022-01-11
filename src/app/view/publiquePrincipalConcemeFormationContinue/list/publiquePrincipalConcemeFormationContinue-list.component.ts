import {Component, OnInit} from '@angular/core';
import {PubliquePrincipalConcemeFormationContinueService} from '../../../controller/service/PubliquePrincipalConcemeFormationContinue.service';
import {PubliquePrincipalConcemeFormationContinueVo} from '../../../controller/model/PubliquePrincipalConcemeFormationContinue.model';
import {PubliquePrincipalVo} from '../../../controller/model/PubliquePrincipal.model';
import {FormationContinueVo} from '../../../controller/model/FormationContinue.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-publiquePrincipalConcemeFormationContinue-list',
  templateUrl: './publiquePrincipalConcemeFormationContinue-list.component.html',
  styleUrls: ['./publiquePrincipalConcemeFormationContinue-list.component.css']
})

export class PubliquePrincipalConcemeFormationContinueListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private publiquePrincipalConcemeFormationContinueService: PubliquePrincipalConcemeFormationContinueService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadPubliquePrincipalConcemeFormationContinues();
    } 
    
    // methods 
    public async loadPubliquePrincipalConcemeFormationContinues(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("PubliquePrincipalConcemeFormationContinue", "list");
        isPermistted ? this.publiquePrincipalConcemeFormationContinueService.findAll().subscribe(publiquePrincipalConcemeFormationContinues => this.publiquePrincipalConcemeFormationContinues = publiquePrincipalConcemeFormationContinues,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.publiquePrincipalConcemeFormationContinueService.findByCriteria(this.searchPubliquePrincipalConcemeFormationContinue).subscribe(publiquePrincipalConcemeFormationContinues=>{
            
            this.publiquePrincipalConcemeFormationContinues = publiquePrincipalConcemeFormationContinues;
           // this.searchPubliquePrincipalConcemeFormationContinue = new PubliquePrincipalConcemeFormationContinueVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'publiquePrincipal', header: 'publiquePrincipal'},
                {field: 'formationContinue', header: 'formationContinue'},
        ];
    }
    
    public async editPubliquePrincipalConcemeFormationContinue(publiquePrincipalConcemeFormationContinue:PubliquePrincipalConcemeFormationContinueVo){
        const isPermistted = await this.roleService.isPermitted("PubliquePrincipalConcemeFormationContinue", "edit");
         if(isPermistted){
         this.selectedPubliquePrincipalConcemeFormationContinue = publiquePrincipalConcemeFormationContinue;
         this.editPubliquePrincipalConcemeFormationContinueDialog = true;
         this.publiquePrincipalConcemeFormationContinueService.editPubliquePrincipalConcemeFormationContinue$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewPubliquePrincipalConcemeFormationContinue(publiquePrincipalConcemeFormationContinue:PubliquePrincipalConcemeFormationContinueVo){
        const isPermistted = await this.roleService.isPermitted("PubliquePrincipalConcemeFormationContinue", "view");
        if(isPermistted){
       this.selectedPubliquePrincipalConcemeFormationContinue = publiquePrincipalConcemeFormationContinue;
        this.viewPubliquePrincipalConcemeFormationContinueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreatePubliquePrincipalConcemeFormationContinue(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedPubliquePrincipalConcemeFormationContinue = new PubliquePrincipalConcemeFormationContinueVo();
        this.createPubliquePrincipalConcemeFormationContinueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deletePubliquePrincipalConcemeFormationContinue(publiquePrincipalConcemeFormationContinue:PubliquePrincipalConcemeFormationContinueVo){
       const isPermistted = await this.roleService.isPermitted("PubliquePrincipalConcemeFormationContinue", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the PubliquePrincipalConcemeFormationContinue ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.publiquePrincipalConcemeFormationContinueService.delete(publiquePrincipalConcemeFormationContinue).subscribe(status=>{
                          if(status > 0){
                          const position = this.publiquePrincipalConcemeFormationContinues.indexOf(publiquePrincipalConcemeFormationContinue);
                          position > -1 ? this.publiquePrincipalConcemeFormationContinues.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'PubliquePrincipalConcemeFormationContinue Deleted',
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

    get publiquePrincipalConcemeFormationContinues(): Array<PubliquePrincipalConcemeFormationContinueVo> {
           return this.publiquePrincipalConcemeFormationContinueService.publiquePrincipalConcemeFormationContinues;
       }
    set publiquePrincipalConcemeFormationContinues(value: Array<PubliquePrincipalConcemeFormationContinueVo>) {
        this.publiquePrincipalConcemeFormationContinueService.publiquePrincipalConcemeFormationContinues = value;
       }

    get publiquePrincipalConcemeFormationContinueSelections(): Array<PubliquePrincipalConcemeFormationContinueVo> {
           return this.publiquePrincipalConcemeFormationContinueService.publiquePrincipalConcemeFormationContinueSelections;
       }
    set publiquePrincipalConcemeFormationContinueSelections(value: Array<PubliquePrincipalConcemeFormationContinueVo>) {
        this.publiquePrincipalConcemeFormationContinueService.publiquePrincipalConcemeFormationContinueSelections = value;
       }
   
     


    get selectedPubliquePrincipalConcemeFormationContinue():PubliquePrincipalConcemeFormationContinueVo {
           return this.publiquePrincipalConcemeFormationContinueService.selectedPubliquePrincipalConcemeFormationContinue;
       }
    set selectedPubliquePrincipalConcemeFormationContinue(value: PubliquePrincipalConcemeFormationContinueVo) {
        this.publiquePrincipalConcemeFormationContinueService.selectedPubliquePrincipalConcemeFormationContinue = value;
       }
    
    get createPubliquePrincipalConcemeFormationContinueDialog():boolean {
           return this.publiquePrincipalConcemeFormationContinueService.createPubliquePrincipalConcemeFormationContinueDialog;
       }
    set createPubliquePrincipalConcemeFormationContinueDialog(value: boolean) {
        this.publiquePrincipalConcemeFormationContinueService.createPubliquePrincipalConcemeFormationContinueDialog= value;
       }
    
    get editPubliquePrincipalConcemeFormationContinueDialog():boolean {
           return this.publiquePrincipalConcemeFormationContinueService.editPubliquePrincipalConcemeFormationContinueDialog;
       }
    set editPubliquePrincipalConcemeFormationContinueDialog(value: boolean) {
        this.publiquePrincipalConcemeFormationContinueService.editPubliquePrincipalConcemeFormationContinueDialog= value;
       }
    get viewPubliquePrincipalConcemeFormationContinueDialog():boolean {
           return this.publiquePrincipalConcemeFormationContinueService.viewPubliquePrincipalConcemeFormationContinueDialog;
       }
    set viewPubliquePrincipalConcemeFormationContinueDialog(value: boolean) {
        this.publiquePrincipalConcemeFormationContinueService.viewPubliquePrincipalConcemeFormationContinueDialog = value;
       }
       
     get searchPubliquePrincipalConcemeFormationContinue(): PubliquePrincipalConcemeFormationContinueVo {
        return this.publiquePrincipalConcemeFormationContinueService.searchPubliquePrincipalConcemeFormationContinue;
       }
    set searchPubliquePrincipalConcemeFormationContinue(value: PubliquePrincipalConcemeFormationContinueVo) {
        this.publiquePrincipalConcemeFormationContinueService.searchPubliquePrincipalConcemeFormationContinue = value;
       }



}