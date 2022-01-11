import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {DisciplineScientifiqueService} from '../../../controller/service/DisciplineScientifique.service';
import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';

@Component({
  selector: 'app-disciplineScientifique-edit',
  templateUrl: './disciplineScientifique-edit.component.html',
  styleUrls: ['./disciplineScientifique-edit.component.css']
})
export class DisciplineScientifiqueEditComponent implements OnInit {
// declarations
 editDisciplineScientifiqueForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private disciplineScientifiqueService: DisciplineScientifiqueService) { }
// methods 


  ngOnInit(): void {
    this.disciplineScientifiqueService.editDisciplineScientifique$.subscribe(value=>{
    if(value){
     this.editDisciplineScientifiqueForm.setValue({
          libelle: this.selectedDisciplineScientifique.libelle,
          code: this.selectedDisciplineScientifique.code,
    });
    }
  });
  }



public edit(){ 
    this.disciplineScientifiqueService.edit().subscribe(updatedDisciplineScientifique => {
          const indexOfUpdated = this.disciplineScientifiques.findIndex(
           (DisciplineScientifique) => DisciplineScientifique.id === updatedDisciplineScientifique.id
            );
            indexOfUpdated > -1 ? this.disciplineScientifiques[indexOfUpdated] = updatedDisciplineScientifique : false;
                });
                  this.editDisciplineScientifiqueDialog = false;
    this.selectedDisciplineScientifique = new DisciplineScientifiqueVo();
            }

  hideEditDialog(){
    this.editDisciplineScientifiqueDialog = false;
  }
   submit(){
                this.selectedDisciplineScientifique.libelle = this.libelle.value;
                this.selectedDisciplineScientifique.code = this.code.value;
    this.disciplineScientifiqueService.edit().subscribe(result=>{
        this.editDisciplineScientifiqueDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editDisciplineScientifiqueForm.get('libelle');
            }
            get code() {
                 return this.editDisciplineScientifiqueForm.get('code');
            }
 
  get disciplineScientifiques(): Array<DisciplineScientifiqueVo> {
    return this.disciplineScientifiqueService.disciplineScientifiques;
       }
  set disciplineScientifiques(value: Array<DisciplineScientifiqueVo>) {
        this.disciplineScientifiqueService.disciplineScientifiques = value;
       } 

  get selectedDisciplineScientifique():DisciplineScientifiqueVo {
           return this.disciplineScientifiqueService.selectedDisciplineScientifique;
       }
  set selectedDisciplineScientifique(value: DisciplineScientifiqueVo) {
        this.disciplineScientifiqueService.selectedDisciplineScientifique = value;
       }
  
  get editDisciplineScientifiqueDialog():boolean {
           return this.disciplineScientifiqueService.editDisciplineScientifiqueDialog;
       }
  set editDisciplineScientifiqueDialog(value: boolean) {
        this.disciplineScientifiqueService.editDisciplineScientifiqueDialog= value;
       }


}