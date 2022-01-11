import {Component, OnInit} from '@angular/core';
import {PaysFormationContinueService} from '../../../controller/service/PaysFormationContinue.service';
import {PaysFormationContinueVo} from '../../../controller/model/PaysFormationContinue.model';
import {FormationContinueVo} from '../../../controller/model/FormationContinue.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-paysFormationContinue-list',
  templateUrl: './paysFormationContinue-list.component.html',
  styleUrls: ['./paysFormationContinue-list.component.css']
})

export class PaysFormationContinueListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private paysFormationContinueService: PaysFormationContinueService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadPaysFormationContinues();
    } 
    
    // methods 
    public async loadPaysFormationContinues(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("PaysFormationContinue", "list");
        isPermistted ? this.paysFormationContinueService.findAll().subscribe(paysFormationContinues => this.paysFormationContinues = paysFormationContinues,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.paysFormationContinueService.findByCriteria(this.searchPaysFormationContinue).subscribe(paysFormationContinues=>{
            
            this.paysFormationContinues = paysFormationContinues;
           // this.searchPaysFormationContinue = new PaysFormationContinueVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'paysNationnalite', header: 'paysNationnalite'},
                {field: 'formationContinue', header: 'formationContinue'},
        ];
    }
    
    public async editPaysFormationContinue(paysFormationContinue:PaysFormationContinueVo){
        const isPermistted = await this.roleService.isPermitted("PaysFormationContinue", "edit");
         if(isPermistted){
         this.selectedPaysFormationContinue = paysFormationContinue;
         this.editPaysFormationContinueDialog = true;
         this.paysFormationContinueService.editPaysFormationContinue$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewPaysFormationContinue(paysFormationContinue:PaysFormationContinueVo){
        const isPermistted = await this.roleService.isPermitted("PaysFormationContinue", "view");
        if(isPermistted){
       this.selectedPaysFormationContinue = paysFormationContinue;
        this.viewPaysFormationContinueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreatePaysFormationContinue(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedPaysFormationContinue = new PaysFormationContinueVo();
        this.createPaysFormationContinueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deletePaysFormationContinue(paysFormationContinue:PaysFormationContinueVo){
       const isPermistted = await this.roleService.isPermitted("PaysFormationContinue", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the PaysFormationContinue ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.paysFormationContinueService.delete(paysFormationContinue).subscribe(status=>{
                          if(status > 0){
                          const position = this.paysFormationContinues.indexOf(paysFormationContinue);
                          position > -1 ? this.paysFormationContinues.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'PaysFormationContinue Deleted',
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

    get paysFormationContinues(): Array<PaysFormationContinueVo> {
           return this.paysFormationContinueService.paysFormationContinues;
       }
    set paysFormationContinues(value: Array<PaysFormationContinueVo>) {
        this.paysFormationContinueService.paysFormationContinues = value;
       }

    get paysFormationContinueSelections(): Array<PaysFormationContinueVo> {
           return this.paysFormationContinueService.paysFormationContinueSelections;
       }
    set paysFormationContinueSelections(value: Array<PaysFormationContinueVo>) {
        this.paysFormationContinueService.paysFormationContinueSelections = value;
       }
   
     


    get selectedPaysFormationContinue():PaysFormationContinueVo {
           return this.paysFormationContinueService.selectedPaysFormationContinue;
       }
    set selectedPaysFormationContinue(value: PaysFormationContinueVo) {
        this.paysFormationContinueService.selectedPaysFormationContinue = value;
       }
    
    get createPaysFormationContinueDialog():boolean {
           return this.paysFormationContinueService.createPaysFormationContinueDialog;
       }
    set createPaysFormationContinueDialog(value: boolean) {
        this.paysFormationContinueService.createPaysFormationContinueDialog= value;
       }
    
    get editPaysFormationContinueDialog():boolean {
           return this.paysFormationContinueService.editPaysFormationContinueDialog;
       }
    set editPaysFormationContinueDialog(value: boolean) {
        this.paysFormationContinueService.editPaysFormationContinueDialog= value;
       }
    get viewPaysFormationContinueDialog():boolean {
           return this.paysFormationContinueService.viewPaysFormationContinueDialog;
       }
    set viewPaysFormationContinueDialog(value: boolean) {
        this.paysFormationContinueService.viewPaysFormationContinueDialog = value;
       }
       
     get searchPaysFormationContinue(): PaysFormationContinueVo {
        return this.paysFormationContinueService.searchPaysFormationContinue;
       }
    set searchPaysFormationContinue(value: PaysFormationContinueVo) {
        this.paysFormationContinueService.searchPaysFormationContinue = value;
       }



}