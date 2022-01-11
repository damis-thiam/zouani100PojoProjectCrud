import {Component, OnInit} from '@angular/core';
import {FoireQuestionService} from '../../../controller/service/FoireQuestion.service';
import {FoireQuestionVo} from '../../../controller/model/FoireQuestion.model';
import {CategorieFoireQuestionVo} from '../../../controller/model/CategorieFoireQuestion.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-foireQuestion-list',
  templateUrl: './foireQuestion-list.component.html',
  styleUrls: ['./foireQuestion-list.component.css']
})

export class FoireQuestionListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private foireQuestionService: FoireQuestionService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadFoireQuestions();
    } 
    
    // methods 
    public async loadFoireQuestions(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("FoireQuestion", "list");
        isPermistted ? this.foireQuestionService.findAll().subscribe(foireQuestions => this.foireQuestions = foireQuestions,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.foireQuestionService.findByCriteria(this.searchFoireQuestion).subscribe(foireQuestions=>{
            
            this.foireQuestions = foireQuestions;
           // this.searchFoireQuestion = new FoireQuestionVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'question', header: 'question'},
                {field: 'reponse', header: 'reponse'},
                {field: 'numeroOrdre', header: 'numeroOrdre'},
                {field: 'categorieFoireQuestion', header: 'categorieFoireQuestion'},
        ];
    }
    
    public async editFoireQuestion(foireQuestion:FoireQuestionVo){
        const isPermistted = await this.roleService.isPermitted("FoireQuestion", "edit");
         if(isPermistted){
         this.selectedFoireQuestion = foireQuestion;
         this.editFoireQuestionDialog = true;
         this.foireQuestionService.editFoireQuestion$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewFoireQuestion(foireQuestion:FoireQuestionVo){
        const isPermistted = await this.roleService.isPermitted("FoireQuestion", "view");
        if(isPermistted){
       this.selectedFoireQuestion = foireQuestion;
        this.viewFoireQuestionDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateFoireQuestion(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedFoireQuestion = new FoireQuestionVo();
        this.createFoireQuestionDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteFoireQuestion(foireQuestion:FoireQuestionVo){
       const isPermistted = await this.roleService.isPermitted("FoireQuestion", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the FoireQuestion ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.foireQuestionService.delete(foireQuestion).subscribe(status=>{
                          if(status > 0){
                          const position = this.foireQuestions.indexOf(foireQuestion);
                          position > -1 ? this.foireQuestions.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'FoireQuestion Deleted',
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

    get foireQuestions(): Array<FoireQuestionVo> {
           return this.foireQuestionService.foireQuestions;
       }
    set foireQuestions(value: Array<FoireQuestionVo>) {
        this.foireQuestionService.foireQuestions = value;
       }

    get foireQuestionSelections(): Array<FoireQuestionVo> {
           return this.foireQuestionService.foireQuestionSelections;
       }
    set foireQuestionSelections(value: Array<FoireQuestionVo>) {
        this.foireQuestionService.foireQuestionSelections = value;
       }
   
     


    get selectedFoireQuestion():FoireQuestionVo {
           return this.foireQuestionService.selectedFoireQuestion;
       }
    set selectedFoireQuestion(value: FoireQuestionVo) {
        this.foireQuestionService.selectedFoireQuestion = value;
       }
    
    get createFoireQuestionDialog():boolean {
           return this.foireQuestionService.createFoireQuestionDialog;
       }
    set createFoireQuestionDialog(value: boolean) {
        this.foireQuestionService.createFoireQuestionDialog= value;
       }
    
    get editFoireQuestionDialog():boolean {
           return this.foireQuestionService.editFoireQuestionDialog;
       }
    set editFoireQuestionDialog(value: boolean) {
        this.foireQuestionService.editFoireQuestionDialog= value;
       }
    get viewFoireQuestionDialog():boolean {
           return this.foireQuestionService.viewFoireQuestionDialog;
       }
    set viewFoireQuestionDialog(value: boolean) {
        this.foireQuestionService.viewFoireQuestionDialog = value;
       }
       
     get searchFoireQuestion(): FoireQuestionVo {
        return this.foireQuestionService.searchFoireQuestion;
       }
    set searchFoireQuestion(value: FoireQuestionVo) {
        this.foireQuestionService.searchFoireQuestion = value;
       }



}