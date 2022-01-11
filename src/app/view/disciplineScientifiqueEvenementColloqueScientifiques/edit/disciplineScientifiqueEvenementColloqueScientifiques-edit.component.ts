import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {DisciplineScientifiqueEvenementColloqueScientifiquesService} from '../../../controller/service/DisciplineScientifiqueEvenementColloqueScientifiques.service';
import {DisciplineScientifiqueEvenementColloqueScientifiquesVo} from '../../../controller/model/DisciplineScientifiqueEvenementColloqueScientifiques.model';
import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';

@Component({
  selector: 'app-disciplineScientifiqueEvenementColloqueScientifiques-edit',
  templateUrl: './disciplineScientifiqueEvenementColloqueScientifiques-edit.component.html',
  styleUrls: ['./disciplineScientifiqueEvenementColloqueScientifiques-edit.component.css']
})
export class DisciplineScientifiqueEvenementColloqueScientifiquesEditComponent implements OnInit {
// declarations
 editDisciplineScientifiqueEvenementColloqueScientifiquesForm = new FormGroup({
  }); 
constructor(private disciplineScientifiqueEvenementColloqueScientifiquesService: DisciplineScientifiqueEvenementColloqueScientifiquesService) { }
// methods 


  ngOnInit(): void {
    this.disciplineScientifiqueEvenementColloqueScientifiquesService.editDisciplineScientifiqueEvenementColloqueScientifiques$.subscribe(value=>{
    if(value){
     this.editDisciplineScientifiqueEvenementColloqueScientifiquesForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.disciplineScientifiqueEvenementColloqueScientifiquesService.edit().subscribe(updatedDisciplineScientifiqueEvenementColloqueScientifiques => {
          const indexOfUpdated = this.disciplineScientifiqueEvenementColloqueScientifiquess.findIndex(
           (DisciplineScientifiqueEvenementColloqueScientifiques) => DisciplineScientifiqueEvenementColloqueScientifiques.id === updatedDisciplineScientifiqueEvenementColloqueScientifiques.id
            );
            indexOfUpdated > -1 ? this.disciplineScientifiqueEvenementColloqueScientifiquess[indexOfUpdated] = updatedDisciplineScientifiqueEvenementColloqueScientifiques : false;
                });
                  this.editDisciplineScientifiqueEvenementColloqueScientifiquesDialog = false;
    this.selectedDisciplineScientifiqueEvenementColloqueScientifiques = new DisciplineScientifiqueEvenementColloqueScientifiquesVo();
            }

  hideEditDialog(){
    this.editDisciplineScientifiqueEvenementColloqueScientifiquesDialog = false;
  }
   submit(){
    this.disciplineScientifiqueEvenementColloqueScientifiquesService.edit().subscribe(result=>{
        this.editDisciplineScientifiqueEvenementColloqueScientifiquesDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get disciplineScientifiqueEvenementColloqueScientifiquess(): Array<DisciplineScientifiqueEvenementColloqueScientifiquesVo> {
    return this.disciplineScientifiqueEvenementColloqueScientifiquesService.disciplineScientifiqueEvenementColloqueScientifiquess;
       }
  set disciplineScientifiqueEvenementColloqueScientifiquess(value: Array<DisciplineScientifiqueEvenementColloqueScientifiquesVo>) {
        this.disciplineScientifiqueEvenementColloqueScientifiquesService.disciplineScientifiqueEvenementColloqueScientifiquess = value;
       } 

  get selectedDisciplineScientifiqueEvenementColloqueScientifiques():DisciplineScientifiqueEvenementColloqueScientifiquesVo {
           return this.disciplineScientifiqueEvenementColloqueScientifiquesService.selectedDisciplineScientifiqueEvenementColloqueScientifiques;
       }
  set selectedDisciplineScientifiqueEvenementColloqueScientifiques(value: DisciplineScientifiqueEvenementColloqueScientifiquesVo) {
        this.disciplineScientifiqueEvenementColloqueScientifiquesService.selectedDisciplineScientifiqueEvenementColloqueScientifiques = value;
       }
  
  get editDisciplineScientifiqueEvenementColloqueScientifiquesDialog():boolean {
           return this.disciplineScientifiqueEvenementColloqueScientifiquesService.editDisciplineScientifiqueEvenementColloqueScientifiquesDialog;
       }
  set editDisciplineScientifiqueEvenementColloqueScientifiquesDialog(value: boolean) {
        this.disciplineScientifiqueEvenementColloqueScientifiquesService.editDisciplineScientifiqueEvenementColloqueScientifiquesDialog= value;
       }


}