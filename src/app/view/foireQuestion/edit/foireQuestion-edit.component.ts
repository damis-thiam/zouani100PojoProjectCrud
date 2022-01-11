import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {FoireQuestionService} from '../../../controller/service/FoireQuestion.service';
import {FoireQuestionVo} from '../../../controller/model/FoireQuestion.model';
import {CategorieFoireQuestionVo} from '../../../controller/model/CategorieFoireQuestion.model';

@Component({
  selector: 'app-foireQuestion-edit',
  templateUrl: './foireQuestion-edit.component.html',
  styleUrls: ['./foireQuestion-edit.component.css']
})
export class FoireQuestionEditComponent implements OnInit {
// declarations
 editFoireQuestionForm = new FormGroup({
      question: new FormControl("", [Validators.required]),
      reponse: new FormControl("", [Validators.required]),
          numeroOrdre:new FormControl(0,[Validators.required]),
  }); 
constructor(private foireQuestionService: FoireQuestionService) { }
// methods 


  ngOnInit(): void {
    this.foireQuestionService.editFoireQuestion$.subscribe(value=>{
    if(value){
     this.editFoireQuestionForm.setValue({
          question: this.selectedFoireQuestion.question,
          reponse: this.selectedFoireQuestion.reponse,
          numeroOrdre: this.selectedFoireQuestion.numeroOrdre,
    });
    }
  });
  }



public edit(){ 
    this.foireQuestionService.edit().subscribe(updatedFoireQuestion => {
          const indexOfUpdated = this.foireQuestions.findIndex(
           (FoireQuestion) => FoireQuestion.id === updatedFoireQuestion.id
            );
            indexOfUpdated > -1 ? this.foireQuestions[indexOfUpdated] = updatedFoireQuestion : false;
                });
                  this.editFoireQuestionDialog = false;
    this.selectedFoireQuestion = new FoireQuestionVo();
            }

  hideEditDialog(){
    this.editFoireQuestionDialog = false;
  }
   submit(){
                this.selectedFoireQuestion.question = this.question.value;
                this.selectedFoireQuestion.reponse = this.reponse.value;
                this.selectedFoireQuestion.numeroOrdre = this.numeroOrdre.value;
    this.foireQuestionService.edit().subscribe(result=>{
        this.editFoireQuestionDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get question() {
                 return this.editFoireQuestionForm.get('question');
            }
            get reponse() {
                 return this.editFoireQuestionForm.get('reponse');
            }
            get numeroOrdre() {
                 return this.editFoireQuestionForm.get('numeroOrdre');
            }
 
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
  
  get editFoireQuestionDialog():boolean {
           return this.foireQuestionService.editFoireQuestionDialog;
       }
  set editFoireQuestionDialog(value: boolean) {
        this.foireQuestionService.editFoireQuestionDialog= value;
       }


}