import {Component, OnInit} from '@angular/core';
import {ObjetGlobalFormationContinueService} from '../../../controller/service/ObjetGlobalFormationContinue.service';
import {ObjetGlobalFormationContinueVo} from '../../../controller/model/ObjetGlobalFormationContinue.model';
import {FormationContinueVo} from '../../../controller/model/FormationContinue.model';
import {ObjetGlobalVo} from '../../../controller/model/ObjetGlobal.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-objetGlobalFormationContinue-list',
  templateUrl: './objetGlobalFormationContinue-list.component.html',
  styleUrls: ['./objetGlobalFormationContinue-list.component.css']
})

export class ObjetGlobalFormationContinueListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private objetGlobalFormationContinueService: ObjetGlobalFormationContinueService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadObjetGlobalFormationContinues();
    } 
    
    // methods 
    public async loadObjetGlobalFormationContinues(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("ObjetGlobalFormationContinue", "list");
        isPermistted ? this.objetGlobalFormationContinueService.findAll().subscribe(objetGlobalFormationContinues => this.objetGlobalFormationContinues = objetGlobalFormationContinues,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.objetGlobalFormationContinueService.findByCriteria(this.searchObjetGlobalFormationContinue).subscribe(objetGlobalFormationContinues=>{
            
            this.objetGlobalFormationContinues = objetGlobalFormationContinues;
           // this.searchObjetGlobalFormationContinue = new ObjetGlobalFormationContinueVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'objetGlobal', header: 'objetGlobal'},
                {field: 'formationContinue', header: 'formationContinue'},
        ];
    }
    
    public async editObjetGlobalFormationContinue(objetGlobalFormationContinue:ObjetGlobalFormationContinueVo){
        const isPermistted = await this.roleService.isPermitted("ObjetGlobalFormationContinue", "edit");
         if(isPermistted){
         this.selectedObjetGlobalFormationContinue = objetGlobalFormationContinue;
         this.editObjetGlobalFormationContinueDialog = true;
         this.objetGlobalFormationContinueService.editObjetGlobalFormationContinue$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewObjetGlobalFormationContinue(objetGlobalFormationContinue:ObjetGlobalFormationContinueVo){
        const isPermistted = await this.roleService.isPermitted("ObjetGlobalFormationContinue", "view");
        if(isPermistted){
       this.selectedObjetGlobalFormationContinue = objetGlobalFormationContinue;
        this.viewObjetGlobalFormationContinueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateObjetGlobalFormationContinue(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedObjetGlobalFormationContinue = new ObjetGlobalFormationContinueVo();
        this.createObjetGlobalFormationContinueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteObjetGlobalFormationContinue(objetGlobalFormationContinue:ObjetGlobalFormationContinueVo){
       const isPermistted = await this.roleService.isPermitted("ObjetGlobalFormationContinue", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the ObjetGlobalFormationContinue ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.objetGlobalFormationContinueService.delete(objetGlobalFormationContinue).subscribe(status=>{
                          if(status > 0){
                          const position = this.objetGlobalFormationContinues.indexOf(objetGlobalFormationContinue);
                          position > -1 ? this.objetGlobalFormationContinues.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'ObjetGlobalFormationContinue Deleted',
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

    get objetGlobalFormationContinues(): Array<ObjetGlobalFormationContinueVo> {
           return this.objetGlobalFormationContinueService.objetGlobalFormationContinues;
       }
    set objetGlobalFormationContinues(value: Array<ObjetGlobalFormationContinueVo>) {
        this.objetGlobalFormationContinueService.objetGlobalFormationContinues = value;
       }

    get objetGlobalFormationContinueSelections(): Array<ObjetGlobalFormationContinueVo> {
           return this.objetGlobalFormationContinueService.objetGlobalFormationContinueSelections;
       }
    set objetGlobalFormationContinueSelections(value: Array<ObjetGlobalFormationContinueVo>) {
        this.objetGlobalFormationContinueService.objetGlobalFormationContinueSelections = value;
       }
   
     


    get selectedObjetGlobalFormationContinue():ObjetGlobalFormationContinueVo {
           return this.objetGlobalFormationContinueService.selectedObjetGlobalFormationContinue;
       }
    set selectedObjetGlobalFormationContinue(value: ObjetGlobalFormationContinueVo) {
        this.objetGlobalFormationContinueService.selectedObjetGlobalFormationContinue = value;
       }
    
    get createObjetGlobalFormationContinueDialog():boolean {
           return this.objetGlobalFormationContinueService.createObjetGlobalFormationContinueDialog;
       }
    set createObjetGlobalFormationContinueDialog(value: boolean) {
        this.objetGlobalFormationContinueService.createObjetGlobalFormationContinueDialog= value;
       }
    
    get editObjetGlobalFormationContinueDialog():boolean {
           return this.objetGlobalFormationContinueService.editObjetGlobalFormationContinueDialog;
       }
    set editObjetGlobalFormationContinueDialog(value: boolean) {
        this.objetGlobalFormationContinueService.editObjetGlobalFormationContinueDialog= value;
       }
    get viewObjetGlobalFormationContinueDialog():boolean {
           return this.objetGlobalFormationContinueService.viewObjetGlobalFormationContinueDialog;
       }
    set viewObjetGlobalFormationContinueDialog(value: boolean) {
        this.objetGlobalFormationContinueService.viewObjetGlobalFormationContinueDialog = value;
       }
       
     get searchObjetGlobalFormationContinue(): ObjetGlobalFormationContinueVo {
        return this.objetGlobalFormationContinueService.searchObjetGlobalFormationContinue;
       }
    set searchObjetGlobalFormationContinue(value: ObjetGlobalFormationContinueVo) {
        this.objetGlobalFormationContinueService.searchObjetGlobalFormationContinue = value;
       }



}