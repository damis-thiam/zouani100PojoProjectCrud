import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {DisciplineScientifiqueConseilEtComiteScientifiqueService} from '../../../controller/service/DisciplineScientifiqueConseilEtComiteScientifique.service';
import {DisciplineScientifiqueConseilEtComiteScientifiqueVo} from '../../../controller/model/DisciplineScientifiqueConseilEtComiteScientifique.model';
import {ConseilEtComiteScientifiqueVo} from '../../../controller/model/ConseilEtComiteScientifique.model';
import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';

@Component({
  selector: 'app-disciplineScientifiqueConseilEtComiteScientifique-edit',
  templateUrl: './disciplineScientifiqueConseilEtComiteScientifique-edit.component.html',
  styleUrls: ['./disciplineScientifiqueConseilEtComiteScientifique-edit.component.css']
})
export class DisciplineScientifiqueConseilEtComiteScientifiqueEditComponent implements OnInit {
// declarations
 editDisciplineScientifiqueConseilEtComiteScientifiqueForm = new FormGroup({
  }); 
constructor(private disciplineScientifiqueConseilEtComiteScientifiqueService: DisciplineScientifiqueConseilEtComiteScientifiqueService) { }
// methods 


  ngOnInit(): void {
    this.disciplineScientifiqueConseilEtComiteScientifiqueService.editDisciplineScientifiqueConseilEtComiteScientifique$.subscribe(value=>{
    if(value){
     this.editDisciplineScientifiqueConseilEtComiteScientifiqueForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.disciplineScientifiqueConseilEtComiteScientifiqueService.edit().subscribe(updatedDisciplineScientifiqueConseilEtComiteScientifique => {
          const indexOfUpdated = this.disciplineScientifiqueConseilEtComiteScientifiques.findIndex(
           (DisciplineScientifiqueConseilEtComiteScientifique) => DisciplineScientifiqueConseilEtComiteScientifique.id === updatedDisciplineScientifiqueConseilEtComiteScientifique.id
            );
            indexOfUpdated > -1 ? this.disciplineScientifiqueConseilEtComiteScientifiques[indexOfUpdated] = updatedDisciplineScientifiqueConseilEtComiteScientifique : false;
                });
                  this.editDisciplineScientifiqueConseilEtComiteScientifiqueDialog = false;
    this.selectedDisciplineScientifiqueConseilEtComiteScientifique = new DisciplineScientifiqueConseilEtComiteScientifiqueVo();
            }

  hideEditDialog(){
    this.editDisciplineScientifiqueConseilEtComiteScientifiqueDialog = false;
  }
   submit(){
    this.disciplineScientifiqueConseilEtComiteScientifiqueService.edit().subscribe(result=>{
        this.editDisciplineScientifiqueConseilEtComiteScientifiqueDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get disciplineScientifiqueConseilEtComiteScientifiques(): Array<DisciplineScientifiqueConseilEtComiteScientifiqueVo> {
    return this.disciplineScientifiqueConseilEtComiteScientifiqueService.disciplineScientifiqueConseilEtComiteScientifiques;
       }
  set disciplineScientifiqueConseilEtComiteScientifiques(value: Array<DisciplineScientifiqueConseilEtComiteScientifiqueVo>) {
        this.disciplineScientifiqueConseilEtComiteScientifiqueService.disciplineScientifiqueConseilEtComiteScientifiques = value;
       } 

  get selectedDisciplineScientifiqueConseilEtComiteScientifique():DisciplineScientifiqueConseilEtComiteScientifiqueVo {
           return this.disciplineScientifiqueConseilEtComiteScientifiqueService.selectedDisciplineScientifiqueConseilEtComiteScientifique;
       }
  set selectedDisciplineScientifiqueConseilEtComiteScientifique(value: DisciplineScientifiqueConseilEtComiteScientifiqueVo) {
        this.disciplineScientifiqueConseilEtComiteScientifiqueService.selectedDisciplineScientifiqueConseilEtComiteScientifique = value;
       }
  
  get editDisciplineScientifiqueConseilEtComiteScientifiqueDialog():boolean {
           return this.disciplineScientifiqueConseilEtComiteScientifiqueService.editDisciplineScientifiqueConseilEtComiteScientifiqueDialog;
       }
  set editDisciplineScientifiqueConseilEtComiteScientifiqueDialog(value: boolean) {
        this.disciplineScientifiqueConseilEtComiteScientifiqueService.editDisciplineScientifiqueConseilEtComiteScientifiqueDialog= value;
       }


}