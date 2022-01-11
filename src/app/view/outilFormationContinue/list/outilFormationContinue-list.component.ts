import {Component, OnInit} from '@angular/core';
import {OutilFormationContinueService} from '../../../controller/service/OutilFormationContinue.service';
import {OutilFormationContinueVo} from '../../../controller/model/OutilFormationContinue.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-outilFormationContinue-list',
  templateUrl: './outilFormationContinue-list.component.html',
  styleUrls: ['./outilFormationContinue-list.component.css']
})

export class OutilFormationContinueListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private outilFormationContinueService: OutilFormationContinueService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadOutilFormationContinues();
    } 
    
    // methods 
    public async loadOutilFormationContinues(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("OutilFormationContinue", "list");
        isPermistted ? this.outilFormationContinueService.findAll().subscribe(outilFormationContinues => this.outilFormationContinues = outilFormationContinues,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.outilFormationContinueService.findByCriteria(this.searchOutilFormationContinue).subscribe(outilFormationContinues=>{
            
            this.outilFormationContinues = outilFormationContinues;
           // this.searchOutilFormationContinue = new OutilFormationContinueVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editOutilFormationContinue(outilFormationContinue:OutilFormationContinueVo){
        const isPermistted = await this.roleService.isPermitted("OutilFormationContinue", "edit");
         if(isPermistted){
         this.selectedOutilFormationContinue = outilFormationContinue;
         this.editOutilFormationContinueDialog = true;
         this.outilFormationContinueService.editOutilFormationContinue$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewOutilFormationContinue(outilFormationContinue:OutilFormationContinueVo){
        const isPermistted = await this.roleService.isPermitted("OutilFormationContinue", "view");
        if(isPermistted){
       this.selectedOutilFormationContinue = outilFormationContinue;
        this.viewOutilFormationContinueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateOutilFormationContinue(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedOutilFormationContinue = new OutilFormationContinueVo();
        this.createOutilFormationContinueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteOutilFormationContinue(outilFormationContinue:OutilFormationContinueVo){
       const isPermistted = await this.roleService.isPermitted("OutilFormationContinue", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the OutilFormationContinue ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.outilFormationContinueService.delete(outilFormationContinue).subscribe(status=>{
                          if(status > 0){
                          const position = this.outilFormationContinues.indexOf(outilFormationContinue);
                          position > -1 ? this.outilFormationContinues.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'OutilFormationContinue Deleted',
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

    get outilFormationContinues(): Array<OutilFormationContinueVo> {
           return this.outilFormationContinueService.outilFormationContinues;
       }
    set outilFormationContinues(value: Array<OutilFormationContinueVo>) {
        this.outilFormationContinueService.outilFormationContinues = value;
       }

    get outilFormationContinueSelections(): Array<OutilFormationContinueVo> {
           return this.outilFormationContinueService.outilFormationContinueSelections;
       }
    set outilFormationContinueSelections(value: Array<OutilFormationContinueVo>) {
        this.outilFormationContinueService.outilFormationContinueSelections = value;
       }
   
     


    get selectedOutilFormationContinue():OutilFormationContinueVo {
           return this.outilFormationContinueService.selectedOutilFormationContinue;
       }
    set selectedOutilFormationContinue(value: OutilFormationContinueVo) {
        this.outilFormationContinueService.selectedOutilFormationContinue = value;
       }
    
    get createOutilFormationContinueDialog():boolean {
           return this.outilFormationContinueService.createOutilFormationContinueDialog;
       }
    set createOutilFormationContinueDialog(value: boolean) {
        this.outilFormationContinueService.createOutilFormationContinueDialog= value;
       }
    
    get editOutilFormationContinueDialog():boolean {
           return this.outilFormationContinueService.editOutilFormationContinueDialog;
       }
    set editOutilFormationContinueDialog(value: boolean) {
        this.outilFormationContinueService.editOutilFormationContinueDialog= value;
       }
    get viewOutilFormationContinueDialog():boolean {
           return this.outilFormationContinueService.viewOutilFormationContinueDialog;
       }
    set viewOutilFormationContinueDialog(value: boolean) {
        this.outilFormationContinueService.viewOutilFormationContinueDialog = value;
       }
       
     get searchOutilFormationContinue(): OutilFormationContinueVo {
        return this.outilFormationContinueService.searchOutilFormationContinue;
       }
    set searchOutilFormationContinue(value: OutilFormationContinueVo) {
        this.outilFormationContinueService.searchOutilFormationContinue = value;
       }



}