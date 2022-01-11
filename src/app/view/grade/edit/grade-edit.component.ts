import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {GradeService} from '../../../controller/service/Grade.service';
import {GradeVo} from '../../../controller/model/Grade.model';

@Component({
  selector: 'app-grade-edit',
  templateUrl: './grade-edit.component.html',
  styleUrls: ['./grade-edit.component.css']
})
export class GradeEditComponent implements OnInit {
// declarations
 editGradeForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
  }); 
constructor(private gradeService: GradeService) { }
// methods 


  ngOnInit(): void {
    this.gradeService.editGrade$.subscribe(value=>{
    if(value){
     this.editGradeForm.setValue({
          libelle: this.selectedGrade.libelle,
          code: this.selectedGrade.code,
          description: this.selectedGrade.description,
    });
    }
  });
  }



public edit(){ 
    this.gradeService.edit().subscribe(updatedGrade => {
          const indexOfUpdated = this.grades.findIndex(
           (Grade) => Grade.id === updatedGrade.id
            );
            indexOfUpdated > -1 ? this.grades[indexOfUpdated] = updatedGrade : false;
                });
                  this.editGradeDialog = false;
    this.selectedGrade = new GradeVo();
            }

  hideEditDialog(){
    this.editGradeDialog = false;
  }
   submit(){
                this.selectedGrade.libelle = this.libelle.value;
                this.selectedGrade.code = this.code.value;
                this.selectedGrade.description = this.description.value;
    this.gradeService.edit().subscribe(result=>{
        this.editGradeDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editGradeForm.get('libelle');
            }
            get code() {
                 return this.editGradeForm.get('code');
            }
            get description() {
                 return this.editGradeForm.get('description');
            }
 
  get grades(): Array<GradeVo> {
    return this.gradeService.grades;
       }
  set grades(value: Array<GradeVo>) {
        this.gradeService.grades = value;
       } 

  get selectedGrade():GradeVo {
           return this.gradeService.selectedGrade;
       }
  set selectedGrade(value: GradeVo) {
        this.gradeService.selectedGrade = value;
       }
  
  get editGradeDialog():boolean {
           return this.gradeService.editGradeDialog;
       }
  set editGradeDialog(value: boolean) {
        this.gradeService.editGradeDialog= value;
       }


}