import {Component, OnInit} from '@angular/core';
import {CategorieFoireQuestionService} from '../../../controller/service/CategorieFoireQuestion.service';
import {CategorieFoireQuestionVo} from '../../../controller/model/CategorieFoireQuestion.model';

@Component({
  selector: 'app-categorieFoireQuestion-create',
  templateUrl: './categorieFoireQuestion-create.component.html',
  styleUrls: ['./categorieFoireQuestion-create.component.css']
})
export class CategorieFoireQuestionCreateComponent implements OnInit {

constructor(private categorieFoireQuestionService: CategorieFoireQuestionService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.categorieFoireQuestionService.save().subscribe(categorieFoireQuestion=>{
          
       this.categorieFoireQuestions.push({...categorieFoireQuestion});
       this.createCategorieFoireQuestionDialog = false;
       this.selectedCategorieFoireQuestion = new CategorieFoireQuestionVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createCategorieFoireQuestionDialog  = false;
}

// getters and setters 

get categorieFoireQuestions(): Array<CategorieFoireQuestionVo> {
    return this.categorieFoireQuestionService.categorieFoireQuestions;
       }
set categorieFoireQuestions(value: Array<CategorieFoireQuestionVo>) {
        this.categorieFoireQuestionService.categorieFoireQuestions = value;
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


}