import {Component, OnInit} from '@angular/core';
import {CategorieFoireQuestionService} from '../../../controller/service/CategorieFoireQuestion.service';
import {CategorieFoireQuestionVo} from '../../../controller/model/CategorieFoireQuestion.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-categorieFoireQuestion-list',
  templateUrl: './categorieFoireQuestion-list.component.html',
  styleUrls: ['./categorieFoireQuestion-list.component.css']
})

export class CategorieFoireQuestionListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private categorieFoireQuestionService: CategorieFoireQuestionService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadCategorieFoireQuestions();
    } 
    
    // methods 
    public async loadCategorieFoireQuestions(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("CategorieFoireQuestion", "list");
        isPermistted ? this.categorieFoireQuestionService.findAll().subscribe(categorieFoireQuestions => this.categorieFoireQuestions = categorieFoireQuestions,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.categorieFoireQuestionService.findByCriteria(this.searchCategorieFoireQuestion).subscribe(categorieFoireQuestions=>{
            
            this.categorieFoireQuestions = categorieFoireQuestions;
           // this.searchCategorieFoireQuestion = new CategorieFoireQuestionVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
                {field: 'numeroOrdre', header: 'numeroOrdre'},
        ];
    }
    
    public async editCategorieFoireQuestion(categorieFoireQuestion:CategorieFoireQuestionVo){
        const isPermistted = await this.roleService.isPermitted("CategorieFoireQuestion", "edit");
         if(isPermistted){
         this.selectedCategorieFoireQuestion = categorieFoireQuestion;
         this.editCategorieFoireQuestionDialog = true;
         this.categorieFoireQuestionService.editCategorieFoireQuestion$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewCategorieFoireQuestion(categorieFoireQuestion:CategorieFoireQuestionVo){
        const isPermistted = await this.roleService.isPermitted("CategorieFoireQuestion", "view");
        if(isPermistted){
       this.selectedCategorieFoireQuestion = categorieFoireQuestion;
        this.viewCategorieFoireQuestionDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateCategorieFoireQuestion(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedCategorieFoireQuestion = new CategorieFoireQuestionVo();
        this.createCategorieFoireQuestionDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteCategorieFoireQuestion(categorieFoireQuestion:CategorieFoireQuestionVo){
       const isPermistted = await this.roleService.isPermitted("CategorieFoireQuestion", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the CategorieFoireQuestion ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.categorieFoireQuestionService.delete(categorieFoireQuestion).subscribe(status=>{
                          if(status > 0){
                          const position = this.categorieFoireQuestions.indexOf(categorieFoireQuestion);
                          position > -1 ? this.categorieFoireQuestions.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'CategorieFoireQuestion Deleted',
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

    get categorieFoireQuestions(): Array<CategorieFoireQuestionVo> {
           return this.categorieFoireQuestionService.categorieFoireQuestions;
       }
    set categorieFoireQuestions(value: Array<CategorieFoireQuestionVo>) {
        this.categorieFoireQuestionService.categorieFoireQuestions = value;
       }

    get categorieFoireQuestionSelections(): Array<CategorieFoireQuestionVo> {
           return this.categorieFoireQuestionService.categorieFoireQuestionSelections;
       }
    set categorieFoireQuestionSelections(value: Array<CategorieFoireQuestionVo>) {
        this.categorieFoireQuestionService.categorieFoireQuestionSelections = value;
       }
   
     


    get selectedCategorieFoireQuestion():CategorieFoireQuestionVo {
           return this.categorieFoireQuestionService.selectedCategorieFoireQuestion;
       }
    set selectedCategorieFoireQuestion(value: CategorieFoireQuestionVo) {
        this.categorieFoireQuestionService.selectedCategorieFoireQuestion = value;
       }
    
    get createCategorieFoireQuestionDialog():boolean {
           return this.categorieFoireQuestionService.createCategorieFoireQuestionDialog;
       }
    set createCategorieFoireQuestionDialog(value: boolean) {
        this.categorieFoireQuestionService.createCategorieFoireQuestionDialog= value;
       }
    
    get editCategorieFoireQuestionDialog():boolean {
           return this.categorieFoireQuestionService.editCategorieFoireQuestionDialog;
       }
    set editCategorieFoireQuestionDialog(value: boolean) {
        this.categorieFoireQuestionService.editCategorieFoireQuestionDialog= value;
       }
    get viewCategorieFoireQuestionDialog():boolean {
           return this.categorieFoireQuestionService.viewCategorieFoireQuestionDialog;
       }
    set viewCategorieFoireQuestionDialog(value: boolean) {
        this.categorieFoireQuestionService.viewCategorieFoireQuestionDialog = value;
       }
       
     get searchCategorieFoireQuestion(): CategorieFoireQuestionVo {
        return this.categorieFoireQuestionService.searchCategorieFoireQuestion;
       }
    set searchCategorieFoireQuestion(value: CategorieFoireQuestionVo) {
        this.categorieFoireQuestionService.searchCategorieFoireQuestion = value;
       }



}