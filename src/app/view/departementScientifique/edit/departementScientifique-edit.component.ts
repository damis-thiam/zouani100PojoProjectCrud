import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {DepartementScientifiqueService} from '../../../controller/service/DepartementScientifique.service';
import {DepartementScientifiqueVo} from '../../../controller/model/DepartementScientifique.model';

@Component({
  selector: 'app-departementScientifique-edit',
  templateUrl: './departementScientifique-edit.component.html',
  styleUrls: ['./departementScientifique-edit.component.css']
})
export class DepartementScientifiqueEditComponent implements OnInit {
// declarations
 editDepartementScientifiqueForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private departementScientifiqueService: DepartementScientifiqueService) { }
// methods 


  ngOnInit(): void {
    this.departementScientifiqueService.editDepartementScientifique$.subscribe(value=>{
    if(value){
     this.editDepartementScientifiqueForm.setValue({
          libelle: this.selectedDepartementScientifique.libelle,
          code: this.selectedDepartementScientifique.code,
    });
    }
  });
  }



public edit(){ 
    this.departementScientifiqueService.edit().subscribe(updatedDepartementScientifique => {
          const indexOfUpdated = this.departementScientifiques.findIndex(
           (DepartementScientifique) => DepartementScientifique.id === updatedDepartementScientifique.id
            );
            indexOfUpdated > -1 ? this.departementScientifiques[indexOfUpdated] = updatedDepartementScientifique : false;
                });
                  this.editDepartementScientifiqueDialog = false;
    this.selectedDepartementScientifique = new DepartementScientifiqueVo();
            }

  hideEditDialog(){
    this.editDepartementScientifiqueDialog = false;
  }
   submit(){
                this.selectedDepartementScientifique.libelle = this.libelle.value;
                this.selectedDepartementScientifique.code = this.code.value;
    this.departementScientifiqueService.edit().subscribe(result=>{
        this.editDepartementScientifiqueDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editDepartementScientifiqueForm.get('libelle');
            }
            get code() {
                 return this.editDepartementScientifiqueForm.get('code');
            }
 
  get departementScientifiques(): Array<DepartementScientifiqueVo> {
    return this.departementScientifiqueService.departementScientifiques;
       }
  set departementScientifiques(value: Array<DepartementScientifiqueVo>) {
        this.departementScientifiqueService.departementScientifiques = value;
       } 

  get selectedDepartementScientifique():DepartementScientifiqueVo {
           return this.departementScientifiqueService.selectedDepartementScientifique;
       }
  set selectedDepartementScientifique(value: DepartementScientifiqueVo) {
        this.departementScientifiqueService.selectedDepartementScientifique = value;
       }
  
  get editDepartementScientifiqueDialog():boolean {
           return this.departementScientifiqueService.editDepartementScientifiqueDialog;
       }
  set editDepartementScientifiqueDialog(value: boolean) {
        this.departementScientifiqueService.editDepartementScientifiqueDialog= value;
       }


}