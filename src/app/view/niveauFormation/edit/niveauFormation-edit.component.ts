import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {NiveauFormationService} from '../../../controller/service/NiveauFormation.service';
import {NiveauFormationVo} from '../../../controller/model/NiveauFormation.model';

@Component({
  selector: 'app-niveauFormation-edit',
  templateUrl: './niveauFormation-edit.component.html',
  styleUrls: ['./niveauFormation-edit.component.css']
})
export class NiveauFormationEditComponent implements OnInit {
// declarations
 editNiveauFormationForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private niveauFormationService: NiveauFormationService) { }
// methods 


  ngOnInit(): void {
    this.niveauFormationService.editNiveauFormation$.subscribe(value=>{
    if(value){
     this.editNiveauFormationForm.setValue({
          libelle: this.selectedNiveauFormation.libelle,
          code: this.selectedNiveauFormation.code,
    });
    }
  });
  }



public edit(){ 
    this.niveauFormationService.edit().subscribe(updatedNiveauFormation => {
          const indexOfUpdated = this.niveauFormations.findIndex(
           (NiveauFormation) => NiveauFormation.id === updatedNiveauFormation.id
            );
            indexOfUpdated > -1 ? this.niveauFormations[indexOfUpdated] = updatedNiveauFormation : false;
                });
                  this.editNiveauFormationDialog = false;
    this.selectedNiveauFormation = new NiveauFormationVo();
            }

  hideEditDialog(){
    this.editNiveauFormationDialog = false;
  }
   submit(){
                this.selectedNiveauFormation.libelle = this.libelle.value;
                this.selectedNiveauFormation.code = this.code.value;
    this.niveauFormationService.edit().subscribe(result=>{
        this.editNiveauFormationDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editNiveauFormationForm.get('libelle');
            }
            get code() {
                 return this.editNiveauFormationForm.get('code');
            }
 
  get niveauFormations(): Array<NiveauFormationVo> {
    return this.niveauFormationService.niveauFormations;
       }
  set niveauFormations(value: Array<NiveauFormationVo>) {
        this.niveauFormationService.niveauFormations = value;
       } 

  get selectedNiveauFormation():NiveauFormationVo {
           return this.niveauFormationService.selectedNiveauFormation;
       }
  set selectedNiveauFormation(value: NiveauFormationVo) {
        this.niveauFormationService.selectedNiveauFormation = value;
       }
  
  get editNiveauFormationDialog():boolean {
           return this.niveauFormationService.editNiveauFormationDialog;
       }
  set editNiveauFormationDialog(value: boolean) {
        this.niveauFormationService.editNiveauFormationDialog= value;
       }


}