import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {CategorieFoireQuestionService} from '../../../controller/service/CategorieFoireQuestion.service';
import {CategorieFoireQuestionVo} from '../../../controller/model/CategorieFoireQuestion.model';

@Component({
  selector: 'app-categorieFoireQuestion-edit',
  templateUrl: './categorieFoireQuestion-edit.component.html',
  styleUrls: ['./categorieFoireQuestion-edit.component.css']
})
export class CategorieFoireQuestionEditComponent implements OnInit {
// declarations
 editCategorieFoireQuestionForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
          numeroOrdre:new FormControl(0,[Validators.required]),
  }); 
constructor(private categorieFoireQuestionService: CategorieFoireQuestionService) { }
// methods 


  ngOnInit(): void {
    this.categorieFoireQuestionService.editCategorieFoireQuestion$.subscribe(value=>{
    if(value){
     this.editCategorieFoireQuestionForm.setValue({
          libelle: this.selectedCategorieFoireQuestion.libelle,
          code: this.selectedCategorieFoireQuestion.code,
          numeroOrdre: this.selectedCategorieFoireQuestion.numeroOrdre,
    });
    }
  });
  }



public edit(){ 
    this.categorieFoireQuestionService.edit().subscribe(updatedCategorieFoireQuestion => {
          const indexOfUpdated = this.categorieFoireQuestions.findIndex(
           (CategorieFoireQuestion) => CategorieFoireQuestion.id === updatedCategorieFoireQuestion.id
            );
            indexOfUpdated > -1 ? this.categorieFoireQuestions[indexOfUpdated] = updatedCategorieFoireQuestion : false;
                });
                  this.editCategorieFoireQuestionDialog = false;
    this.selectedCategorieFoireQuestion = new CategorieFoireQuestionVo();
            }

  hideEditDialog(){
    this.editCategorieFoireQuestionDialog = false;
  }
   submit(){
                this.selectedCategorieFoireQuestion.libelle = this.libelle.value;
                this.selectedCategorieFoireQuestion.code = this.code.value;
                this.selectedCategorieFoireQuestion.numeroOrdre = this.numeroOrdre.value;
    this.categorieFoireQuestionService.edit().subscribe(result=>{
        this.editCategorieFoireQuestionDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editCategorieFoireQuestionForm.get('libelle');
            }
            get code() {
                 return this.editCategorieFoireQuestionForm.get('code');
            }
            get numeroOrdre() {
                 return this.editCategorieFoireQuestionForm.get('numeroOrdre');
            }
 
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
  
  get editCategorieFoireQuestionDialog():boolean {
           return this.categorieFoireQuestionService.editCategorieFoireQuestionDialog;
       }
  set editCategorieFoireQuestionDialog(value: boolean) {
        this.categorieFoireQuestionService.editCategorieFoireQuestionDialog= value;
       }


}