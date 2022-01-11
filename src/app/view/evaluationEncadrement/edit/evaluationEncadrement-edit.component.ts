import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {EvaluationEncadrementService} from '../../../controller/service/EvaluationEncadrement.service';
import {EvaluationEncadrementVo} from '../../../controller/model/EvaluationEncadrement.model';

@Component({
  selector: 'app-evaluationEncadrement-edit',
  templateUrl: './evaluationEncadrement-edit.component.html',
  styleUrls: ['./evaluationEncadrement-edit.component.css']
})
export class EvaluationEncadrementEditComponent implements OnInit {
// declarations
 editEvaluationEncadrementForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private evaluationEncadrementService: EvaluationEncadrementService) { }
// methods 


  ngOnInit(): void {
    this.evaluationEncadrementService.editEvaluationEncadrement$.subscribe(value=>{
    if(value){
     this.editEvaluationEncadrementForm.setValue({
          libelle: this.selectedEvaluationEncadrement.libelle,
          code: this.selectedEvaluationEncadrement.code,
    });
    }
  });
  }



public edit(){ 
    this.evaluationEncadrementService.edit().subscribe(updatedEvaluationEncadrement => {
          const indexOfUpdated = this.evaluationEncadrements.findIndex(
           (EvaluationEncadrement) => EvaluationEncadrement.id === updatedEvaluationEncadrement.id
            );
            indexOfUpdated > -1 ? this.evaluationEncadrements[indexOfUpdated] = updatedEvaluationEncadrement : false;
                });
                  this.editEvaluationEncadrementDialog = false;
    this.selectedEvaluationEncadrement = new EvaluationEncadrementVo();
            }

  hideEditDialog(){
    this.editEvaluationEncadrementDialog = false;
  }
   submit(){
                this.selectedEvaluationEncadrement.libelle = this.libelle.value;
                this.selectedEvaluationEncadrement.code = this.code.value;
    this.evaluationEncadrementService.edit().subscribe(result=>{
        this.editEvaluationEncadrementDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editEvaluationEncadrementForm.get('libelle');
            }
            get code() {
                 return this.editEvaluationEncadrementForm.get('code');
            }
 
  get evaluationEncadrements(): Array<EvaluationEncadrementVo> {
    return this.evaluationEncadrementService.evaluationEncadrements;
       }
  set evaluationEncadrements(value: Array<EvaluationEncadrementVo>) {
        this.evaluationEncadrementService.evaluationEncadrements = value;
       } 

  get selectedEvaluationEncadrement():EvaluationEncadrementVo {
           return this.evaluationEncadrementService.selectedEvaluationEncadrement;
       }
  set selectedEvaluationEncadrement(value: EvaluationEncadrementVo) {
        this.evaluationEncadrementService.selectedEvaluationEncadrement = value;
       }
  
  get editEvaluationEncadrementDialog():boolean {
           return this.evaluationEncadrementService.editEvaluationEncadrementDialog;
       }
  set editEvaluationEncadrementDialog(value: boolean) {
        this.evaluationEncadrementService.editEvaluationEncadrementDialog= value;
       }


}