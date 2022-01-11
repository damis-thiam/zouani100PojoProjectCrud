import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {DisciplineScientifiqueExpertiseScientifiqueService} from '../../../controller/service/DisciplineScientifiqueExpertiseScientifique.service';
import {DisciplineScientifiqueExpertiseScientifiqueVo} from '../../../controller/model/DisciplineScientifiqueExpertiseScientifique.model';
import {ExpertiseScientifiqueVo} from '../../../controller/model/ExpertiseScientifique.model';
import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';

@Component({
  selector: 'app-disciplineScientifiqueExpertiseScientifique-edit',
  templateUrl: './disciplineScientifiqueExpertiseScientifique-edit.component.html',
  styleUrls: ['./disciplineScientifiqueExpertiseScientifique-edit.component.css']
})
export class DisciplineScientifiqueExpertiseScientifiqueEditComponent implements OnInit {
// declarations
 editDisciplineScientifiqueExpertiseScientifiqueForm = new FormGroup({
  }); 
constructor(private disciplineScientifiqueExpertiseScientifiqueService: DisciplineScientifiqueExpertiseScientifiqueService) { }
// methods 


  ngOnInit(): void {
    this.disciplineScientifiqueExpertiseScientifiqueService.editDisciplineScientifiqueExpertiseScientifique$.subscribe(value=>{
    if(value){
     this.editDisciplineScientifiqueExpertiseScientifiqueForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.disciplineScientifiqueExpertiseScientifiqueService.edit().subscribe(updatedDisciplineScientifiqueExpertiseScientifique => {
          const indexOfUpdated = this.disciplineScientifiqueExpertiseScientifiques.findIndex(
           (DisciplineScientifiqueExpertiseScientifique) => DisciplineScientifiqueExpertiseScientifique.id === updatedDisciplineScientifiqueExpertiseScientifique.id
            );
            indexOfUpdated > -1 ? this.disciplineScientifiqueExpertiseScientifiques[indexOfUpdated] = updatedDisciplineScientifiqueExpertiseScientifique : false;
                });
                  this.editDisciplineScientifiqueExpertiseScientifiqueDialog = false;
    this.selectedDisciplineScientifiqueExpertiseScientifique = new DisciplineScientifiqueExpertiseScientifiqueVo();
            }

  hideEditDialog(){
    this.editDisciplineScientifiqueExpertiseScientifiqueDialog = false;
  }
   submit(){
    this.disciplineScientifiqueExpertiseScientifiqueService.edit().subscribe(result=>{
        this.editDisciplineScientifiqueExpertiseScientifiqueDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get disciplineScientifiqueExpertiseScientifiques(): Array<DisciplineScientifiqueExpertiseScientifiqueVo> {
    return this.disciplineScientifiqueExpertiseScientifiqueService.disciplineScientifiqueExpertiseScientifiques;
       }
  set disciplineScientifiqueExpertiseScientifiques(value: Array<DisciplineScientifiqueExpertiseScientifiqueVo>) {
        this.disciplineScientifiqueExpertiseScientifiqueService.disciplineScientifiqueExpertiseScientifiques = value;
       } 

  get selectedDisciplineScientifiqueExpertiseScientifique():DisciplineScientifiqueExpertiseScientifiqueVo {
           return this.disciplineScientifiqueExpertiseScientifiqueService.selectedDisciplineScientifiqueExpertiseScientifique;
       }
  set selectedDisciplineScientifiqueExpertiseScientifique(value: DisciplineScientifiqueExpertiseScientifiqueVo) {
        this.disciplineScientifiqueExpertiseScientifiqueService.selectedDisciplineScientifiqueExpertiseScientifique = value;
       }
  
  get editDisciplineScientifiqueExpertiseScientifiqueDialog():boolean {
           return this.disciplineScientifiqueExpertiseScientifiqueService.editDisciplineScientifiqueExpertiseScientifiqueDialog;
       }
  set editDisciplineScientifiqueExpertiseScientifiqueDialog(value: boolean) {
        this.disciplineScientifiqueExpertiseScientifiqueService.editDisciplineScientifiqueExpertiseScientifiqueDialog= value;
       }


}