import {Component, OnInit} from '@angular/core';
import {ObjetGlobalDeFormationContinueService} from '../../../controller/service/ObjetGlobalDeFormationContinue.service';
import {ObjetGlobalDeFormationContinueVo} from '../../../controller/model/ObjetGlobalDeFormationContinue.model';
import {FormationContinueVo} from '../../../controller/model/FormationContinue.model';
import {ObjetGlobalVo} from '../../../controller/model/ObjetGlobal.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-objetGlobalDeFormationContinue-list',
  templateUrl: './objetGlobalDeFormationContinue-list.component.html',
  styleUrls: ['./objetGlobalDeFormationContinue-list.component.css']
})

export class ObjetGlobalDeFormationContinueListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private objetGlobalDeFormationContinueService: ObjetGlobalDeFormationContinueService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadObjetGlobalDeFormationContinues();
    } 
    
    // methods 
    public async loadObjetGlobalDeFormationContinues(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("ObjetGlobalDeFormationContinue", "list");
        isPermistted ? this.objetGlobalDeFormationContinueService.findAll().subscribe(objetGlobalDeFormationContinues => this.objetGlobalDeFormationContinues = objetGlobalDeFormationContinues,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.objetGlobalDeFormationContinueService.findByCriteria(this.searchObjetGlobalDeFormationContinue).subscribe(objetGlobalDeFormationContinues=>{
            
            this.objetGlobalDeFormationContinues = objetGlobalDeFormationContinues;
           // this.searchObjetGlobalDeFormationContinue = new ObjetGlobalDeFormationContinueVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'objetGlobal', header: 'objetGlobal'},
                {field: 'formationContinue', header: 'formationContinue'},
        ];
    }
    
    public async editObjetGlobalDeFormationContinue(objetGlobalDeFormationContinue:ObjetGlobalDeFormationContinueVo){
        const isPermistted = await this.roleService.isPermitted("ObjetGlobalDeFormationContinue", "edit");
         if(isPermistted){
         this.selectedObjetGlobalDeFormationContinue = objetGlobalDeFormationContinue;
         this.editObjetGlobalDeFormationContinueDialog = true;
         this.objetGlobalDeFormationContinueService.editObjetGlobalDeFormationContinue$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewObjetGlobalDeFormationContinue(objetGlobalDeFormationContinue:ObjetGlobalDeFormationContinueVo){
        const isPermistted = await this.roleService.isPermitted("ObjetGlobalDeFormationContinue", "view");
        if(isPermistted){
       this.selectedObjetGlobalDeFormationContinue = objetGlobalDeFormationContinue;
        this.viewObjetGlobalDeFormationContinueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateObjetGlobalDeFormationContinue(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedObjetGlobalDeFormationContinue = new ObjetGlobalDeFormationContinueVo();
        this.createObjetGlobalDeFormationContinueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteObjetGlobalDeFormationContinue(objetGlobalDeFormationContinue:ObjetGlobalDeFormationContinueVo){
       const isPermistted = await this.roleService.isPermitted("ObjetGlobalDeFormationContinue", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the ObjetGlobalDeFormationContinue ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.objetGlobalDeFormationContinueService.delete(objetGlobalDeFormationContinue).subscribe(status=>{
                          if(status > 0){
                          const position = this.objetGlobalDeFormationContinues.indexOf(objetGlobalDeFormationContinue);
                          position > -1 ? this.objetGlobalDeFormationContinues.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'ObjetGlobalDeFormationContinue Deleted',
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

    get objetGlobalDeFormationContinues(): Array<ObjetGlobalDeFormationContinueVo> {
           return this.objetGlobalDeFormationContinueService.objetGlobalDeFormationContinues;
       }
    set objetGlobalDeFormationContinues(value: Array<ObjetGlobalDeFormationContinueVo>) {
        this.objetGlobalDeFormationContinueService.objetGlobalDeFormationContinues = value;
       }

    get objetGlobalDeFormationContinueSelections(): Array<ObjetGlobalDeFormationContinueVo> {
           return this.objetGlobalDeFormationContinueService.objetGlobalDeFormationContinueSelections;
       }
    set objetGlobalDeFormationContinueSelections(value: Array<ObjetGlobalDeFormationContinueVo>) {
        this.objetGlobalDeFormationContinueService.objetGlobalDeFormationContinueSelections = value;
       }
   
     


    get selectedObjetGlobalDeFormationContinue():ObjetGlobalDeFormationContinueVo {
           return this.objetGlobalDeFormationContinueService.selectedObjetGlobalDeFormationContinue;
       }
    set selectedObjetGlobalDeFormationContinue(value: ObjetGlobalDeFormationContinueVo) {
        this.objetGlobalDeFormationContinueService.selectedObjetGlobalDeFormationContinue = value;
       }
    
    get createObjetGlobalDeFormationContinueDialog():boolean {
           return this.objetGlobalDeFormationContinueService.createObjetGlobalDeFormationContinueDialog;
       }
    set createObjetGlobalDeFormationContinueDialog(value: boolean) {
        this.objetGlobalDeFormationContinueService.createObjetGlobalDeFormationContinueDialog= value;
       }
    
    get editObjetGlobalDeFormationContinueDialog():boolean {
           return this.objetGlobalDeFormationContinueService.editObjetGlobalDeFormationContinueDialog;
       }
    set editObjetGlobalDeFormationContinueDialog(value: boolean) {
        this.objetGlobalDeFormationContinueService.editObjetGlobalDeFormationContinueDialog= value;
       }
    get viewObjetGlobalDeFormationContinueDialog():boolean {
           return this.objetGlobalDeFormationContinueService.viewObjetGlobalDeFormationContinueDialog;
       }
    set viewObjetGlobalDeFormationContinueDialog(value: boolean) {
        this.objetGlobalDeFormationContinueService.viewObjetGlobalDeFormationContinueDialog = value;
       }
       
     get searchObjetGlobalDeFormationContinue(): ObjetGlobalDeFormationContinueVo {
        return this.objetGlobalDeFormationContinueService.searchObjetGlobalDeFormationContinue;
       }
    set searchObjetGlobalDeFormationContinue(value: ObjetGlobalDeFormationContinueVo) {
        this.objetGlobalDeFormationContinueService.searchObjetGlobalDeFormationContinue = value;
       }



}