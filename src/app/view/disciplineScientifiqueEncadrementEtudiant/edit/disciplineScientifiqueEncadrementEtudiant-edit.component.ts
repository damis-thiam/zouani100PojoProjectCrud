import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {DisciplineScientifiqueEncadrementEtudiantService} from '../../../controller/service/DisciplineScientifiqueEncadrementEtudiant.service';
import {DisciplineScientifiqueEncadrementEtudiantVo} from '../../../controller/model/DisciplineScientifiqueEncadrementEtudiant.model';
import {EncadrementEtudiantVo} from '../../../controller/model/EncadrementEtudiant.model';
import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';

@Component({
  selector: 'app-disciplineScientifiqueEncadrementEtudiant-edit',
  templateUrl: './disciplineScientifiqueEncadrementEtudiant-edit.component.html',
  styleUrls: ['./disciplineScientifiqueEncadrementEtudiant-edit.component.css']
})
export class DisciplineScientifiqueEncadrementEtudiantEditComponent implements OnInit {
// declarations
 editDisciplineScientifiqueEncadrementEtudiantForm = new FormGroup({
  }); 
constructor(private disciplineScientifiqueEncadrementEtudiantService: DisciplineScientifiqueEncadrementEtudiantService) { }
// methods 


  ngOnInit(): void {
    this.disciplineScientifiqueEncadrementEtudiantService.editDisciplineScientifiqueEncadrementEtudiant$.subscribe(value=>{
    if(value){
     this.editDisciplineScientifiqueEncadrementEtudiantForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.disciplineScientifiqueEncadrementEtudiantService.edit().subscribe(updatedDisciplineScientifiqueEncadrementEtudiant => {
          const indexOfUpdated = this.disciplineScientifiqueEncadrementEtudiants.findIndex(
           (DisciplineScientifiqueEncadrementEtudiant) => DisciplineScientifiqueEncadrementEtudiant.id === updatedDisciplineScientifiqueEncadrementEtudiant.id
            );
            indexOfUpdated > -1 ? this.disciplineScientifiqueEncadrementEtudiants[indexOfUpdated] = updatedDisciplineScientifiqueEncadrementEtudiant : false;
                });
                  this.editDisciplineScientifiqueEncadrementEtudiantDialog = false;
    this.selectedDisciplineScientifiqueEncadrementEtudiant = new DisciplineScientifiqueEncadrementEtudiantVo();
            }

  hideEditDialog(){
    this.editDisciplineScientifiqueEncadrementEtudiantDialog = false;
  }
   submit(){
    this.disciplineScientifiqueEncadrementEtudiantService.edit().subscribe(result=>{
        this.editDisciplineScientifiqueEncadrementEtudiantDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get disciplineScientifiqueEncadrementEtudiants(): Array<DisciplineScientifiqueEncadrementEtudiantVo> {
    return this.disciplineScientifiqueEncadrementEtudiantService.disciplineScientifiqueEncadrementEtudiants;
       }
  set disciplineScientifiqueEncadrementEtudiants(value: Array<DisciplineScientifiqueEncadrementEtudiantVo>) {
        this.disciplineScientifiqueEncadrementEtudiantService.disciplineScientifiqueEncadrementEtudiants = value;
       } 

  get selectedDisciplineScientifiqueEncadrementEtudiant():DisciplineScientifiqueEncadrementEtudiantVo {
           return this.disciplineScientifiqueEncadrementEtudiantService.selectedDisciplineScientifiqueEncadrementEtudiant;
       }
  set selectedDisciplineScientifiqueEncadrementEtudiant(value: DisciplineScientifiqueEncadrementEtudiantVo) {
        this.disciplineScientifiqueEncadrementEtudiantService.selectedDisciplineScientifiqueEncadrementEtudiant = value;
       }
  
  get editDisciplineScientifiqueEncadrementEtudiantDialog():boolean {
           return this.disciplineScientifiqueEncadrementEtudiantService.editDisciplineScientifiqueEncadrementEtudiantDialog;
       }
  set editDisciplineScientifiqueEncadrementEtudiantDialog(value: boolean) {
        this.disciplineScientifiqueEncadrementEtudiantService.editDisciplineScientifiqueEncadrementEtudiantDialog= value;
       }


}