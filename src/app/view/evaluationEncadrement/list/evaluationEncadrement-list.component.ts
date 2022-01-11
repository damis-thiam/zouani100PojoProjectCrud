import {Component, OnInit} from '@angular/core';
import {EvaluationEncadrementService} from '../../../controller/service/EvaluationEncadrement.service';
import {EvaluationEncadrementVo} from '../../../controller/model/EvaluationEncadrement.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-evaluationEncadrement-list',
  templateUrl: './evaluationEncadrement-list.component.html',
  styleUrls: ['./evaluationEncadrement-list.component.css']
})

export class EvaluationEncadrementListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private evaluationEncadrementService: EvaluationEncadrementService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadEvaluationEncadrements();
    } 
    
    // methods 
    public async loadEvaluationEncadrements(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("EvaluationEncadrement", "list");
        isPermistted ? this.evaluationEncadrementService.findAll().subscribe(evaluationEncadrements => this.evaluationEncadrements = evaluationEncadrements,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.evaluationEncadrementService.findByCriteria(this.searchEvaluationEncadrement).subscribe(evaluationEncadrements=>{
            
            this.evaluationEncadrements = evaluationEncadrements;
           // this.searchEvaluationEncadrement = new EvaluationEncadrementVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editEvaluationEncadrement(evaluationEncadrement:EvaluationEncadrementVo){
        const isPermistted = await this.roleService.isPermitted("EvaluationEncadrement", "edit");
         if(isPermistted){
         this.selectedEvaluationEncadrement = evaluationEncadrement;
         this.editEvaluationEncadrementDialog = true;
         this.evaluationEncadrementService.editEvaluationEncadrement$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewEvaluationEncadrement(evaluationEncadrement:EvaluationEncadrementVo){
        const isPermistted = await this.roleService.isPermitted("EvaluationEncadrement", "view");
        if(isPermistted){
       this.selectedEvaluationEncadrement = evaluationEncadrement;
        this.viewEvaluationEncadrementDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateEvaluationEncadrement(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedEvaluationEncadrement = new EvaluationEncadrementVo();
        this.createEvaluationEncadrementDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteEvaluationEncadrement(evaluationEncadrement:EvaluationEncadrementVo){
       const isPermistted = await this.roleService.isPermitted("EvaluationEncadrement", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the EvaluationEncadrement ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.evaluationEncadrementService.delete(evaluationEncadrement).subscribe(status=>{
                          if(status > 0){
                          const position = this.evaluationEncadrements.indexOf(evaluationEncadrement);
                          position > -1 ? this.evaluationEncadrements.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'EvaluationEncadrement Deleted',
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

    get evaluationEncadrements(): Array<EvaluationEncadrementVo> {
           return this.evaluationEncadrementService.evaluationEncadrements;
       }
    set evaluationEncadrements(value: Array<EvaluationEncadrementVo>) {
        this.evaluationEncadrementService.evaluationEncadrements = value;
       }

    get evaluationEncadrementSelections(): Array<EvaluationEncadrementVo> {
           return this.evaluationEncadrementService.evaluationEncadrementSelections;
       }
    set evaluationEncadrementSelections(value: Array<EvaluationEncadrementVo>) {
        this.evaluationEncadrementService.evaluationEncadrementSelections = value;
       }
   
     


    get selectedEvaluationEncadrement():EvaluationEncadrementVo {
           return this.evaluationEncadrementService.selectedEvaluationEncadrement;
       }
    set selectedEvaluationEncadrement(value: EvaluationEncadrementVo) {
        this.evaluationEncadrementService.selectedEvaluationEncadrement = value;
       }
    
    get createEvaluationEncadrementDialog():boolean {
           return this.evaluationEncadrementService.createEvaluationEncadrementDialog;
       }
    set createEvaluationEncadrementDialog(value: boolean) {
        this.evaluationEncadrementService.createEvaluationEncadrementDialog= value;
       }
    
    get editEvaluationEncadrementDialog():boolean {
           return this.evaluationEncadrementService.editEvaluationEncadrementDialog;
       }
    set editEvaluationEncadrementDialog(value: boolean) {
        this.evaluationEncadrementService.editEvaluationEncadrementDialog= value;
       }
    get viewEvaluationEncadrementDialog():boolean {
           return this.evaluationEncadrementService.viewEvaluationEncadrementDialog;
       }
    set viewEvaluationEncadrementDialog(value: boolean) {
        this.evaluationEncadrementService.viewEvaluationEncadrementDialog = value;
       }
       
     get searchEvaluationEncadrement(): EvaluationEncadrementVo {
        return this.evaluationEncadrementService.searchEvaluationEncadrement;
       }
    set searchEvaluationEncadrement(value: EvaluationEncadrementVo) {
        this.evaluationEncadrementService.searchEvaluationEncadrement = value;
       }



}