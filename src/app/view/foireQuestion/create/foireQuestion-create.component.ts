import {Component, OnInit} from '@angular/core';
import {FoireQuestionService} from '../../../controller/service/FoireQuestion.service';
import {FoireQuestionVo} from '../../../controller/model/FoireQuestion.model';
      import {CategorieFoireQuestionVo} from '../../../controller/model/CategorieFoireQuestion.model';

@Component({
  selector: 'app-foireQuestion-create',
  templateUrl: './foireQuestion-create.component.html',
  styleUrls: ['./foireQuestion-create.component.css']
})
export class FoireQuestionCreateComponent implements OnInit {

constructor(private foireQuestionService: FoireQuestionService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.foireQuestionService.save().subscribe(foireQuestion=>{
          
       this.foireQuestions.push({...foireQuestion});
       this.createFoireQuestionDialog = false;
       this.selectedFoireQuestion = new FoireQuestionVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createFoireQuestionDialog  = false;
}

// getters and setters 

get foireQuestions(): Array<FoireQuestionVo> {
    return this.foireQuestionService.foireQuestions;
       }
set foireQuestions(value: Array<FoireQuestionVo>) {
        this.foireQuestionService.foireQuestions = value;
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


}