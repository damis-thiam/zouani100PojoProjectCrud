import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {DisciplineScientifiqueEvaluationRechercheUniversitaireService} from '../../../controller/service/DisciplineScientifiqueEvaluationRechercheUniversitaire.service';
import {DisciplineScientifiqueEvaluationRechercheUniversitaireVo} from '../../../controller/model/DisciplineScientifiqueEvaluationRechercheUniversitaire.model';
import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';
import {EvaluationRechercheUniversitaireVo} from '../../../controller/model/EvaluationRechercheUniversitaire.model';

@Component({
  selector: 'app-disciplineScientifiqueEvaluationRechercheUniversitaire-edit',
  templateUrl: './disciplineScientifiqueEvaluationRechercheUniversitaire-edit.component.html',
  styleUrls: ['./disciplineScientifiqueEvaluationRechercheUniversitaire-edit.component.css']
})
export class DisciplineScientifiqueEvaluationRechercheUniversitaireEditComponent implements OnInit {
// declarations
 editDisciplineScientifiqueEvaluationRechercheUniversitaireForm = new FormGroup({
  }); 
constructor(private disciplineScientifiqueEvaluationRechercheUniversitaireService: DisciplineScientifiqueEvaluationRechercheUniversitaireService) { }
// methods 


  ngOnInit(): void {
    this.disciplineScientifiqueEvaluationRechercheUniversitaireService.editDisciplineScientifiqueEvaluationRechercheUniversitaire$.subscribe(value=>{
    if(value){
     this.editDisciplineScientifiqueEvaluationRechercheUniversitaireForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.disciplineScientifiqueEvaluationRechercheUniversitaireService.edit().subscribe(updatedDisciplineScientifiqueEvaluationRechercheUniversitaire => {
          const indexOfUpdated = this.disciplineScientifiqueEvaluationRechercheUniversitaires.findIndex(
           (DisciplineScientifiqueEvaluationRechercheUniversitaire) => DisciplineScientifiqueEvaluationRechercheUniversitaire.id === updatedDisciplineScientifiqueEvaluationRechercheUniversitaire.id
            );
            indexOfUpdated > -1 ? this.disciplineScientifiqueEvaluationRechercheUniversitaires[indexOfUpdated] = updatedDisciplineScientifiqueEvaluationRechercheUniversitaire : false;
                });
                  this.editDisciplineScientifiqueEvaluationRechercheUniversitaireDialog = false;
    this.selectedDisciplineScientifiqueEvaluationRechercheUniversitaire = new DisciplineScientifiqueEvaluationRechercheUniversitaireVo();
            }

  hideEditDialog(){
    this.editDisciplineScientifiqueEvaluationRechercheUniversitaireDialog = false;
  }
   submit(){
    this.disciplineScientifiqueEvaluationRechercheUniversitaireService.edit().subscribe(result=>{
        this.editDisciplineScientifiqueEvaluationRechercheUniversitaireDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get disciplineScientifiqueEvaluationRechercheUniversitaires(): Array<DisciplineScientifiqueEvaluationRechercheUniversitaireVo> {
    return this.disciplineScientifiqueEvaluationRechercheUniversitaireService.disciplineScientifiqueEvaluationRechercheUniversitaires;
       }
  set disciplineScientifiqueEvaluationRechercheUniversitaires(value: Array<DisciplineScientifiqueEvaluationRechercheUniversitaireVo>) {
        this.disciplineScientifiqueEvaluationRechercheUniversitaireService.disciplineScientifiqueEvaluationRechercheUniversitaires = value;
       } 

  get selectedDisciplineScientifiqueEvaluationRechercheUniversitaire():DisciplineScientifiqueEvaluationRechercheUniversitaireVo {
           return this.disciplineScientifiqueEvaluationRechercheUniversitaireService.selectedDisciplineScientifiqueEvaluationRechercheUniversitaire;
       }
  set selectedDisciplineScientifiqueEvaluationRechercheUniversitaire(value: DisciplineScientifiqueEvaluationRechercheUniversitaireVo) {
        this.disciplineScientifiqueEvaluationRechercheUniversitaireService.selectedDisciplineScientifiqueEvaluationRechercheUniversitaire = value;
       }
  
  get editDisciplineScientifiqueEvaluationRechercheUniversitaireDialog():boolean {
           return this.disciplineScientifiqueEvaluationRechercheUniversitaireService.editDisciplineScientifiqueEvaluationRechercheUniversitaireDialog;
       }
  set editDisciplineScientifiqueEvaluationRechercheUniversitaireDialog(value: boolean) {
        this.disciplineScientifiqueEvaluationRechercheUniversitaireService.editDisciplineScientifiqueEvaluationRechercheUniversitaireDialog= value;
       }


}