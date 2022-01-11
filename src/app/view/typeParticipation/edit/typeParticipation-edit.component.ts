import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {TypeParticipationService} from '../../../controller/service/TypeParticipation.service';
import {TypeParticipationVo} from '../../../controller/model/TypeParticipation.model';

@Component({
  selector: 'app-typeParticipation-edit',
  templateUrl: './typeParticipation-edit.component.html',
  styleUrls: ['./typeParticipation-edit.component.css']
})
export class TypeParticipationEditComponent implements OnInit {
// declarations
 editTypeParticipationForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private typeParticipationService: TypeParticipationService) { }
// methods 


  ngOnInit(): void {
    this.typeParticipationService.editTypeParticipation$.subscribe(value=>{
    if(value){
     this.editTypeParticipationForm.setValue({
          libelle: this.selectedTypeParticipation.libelle,
          code: this.selectedTypeParticipation.code,
    });
    }
  });
  }



public edit(){ 
    this.typeParticipationService.edit().subscribe(updatedTypeParticipation => {
          const indexOfUpdated = this.typeParticipations.findIndex(
           (TypeParticipation) => TypeParticipation.id === updatedTypeParticipation.id
            );
            indexOfUpdated > -1 ? this.typeParticipations[indexOfUpdated] = updatedTypeParticipation : false;
                });
                  this.editTypeParticipationDialog = false;
    this.selectedTypeParticipation = new TypeParticipationVo();
            }

  hideEditDialog(){
    this.editTypeParticipationDialog = false;
  }
   submit(){
                this.selectedTypeParticipation.libelle = this.libelle.value;
                this.selectedTypeParticipation.code = this.code.value;
    this.typeParticipationService.edit().subscribe(result=>{
        this.editTypeParticipationDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editTypeParticipationForm.get('libelle');
            }
            get code() {
                 return this.editTypeParticipationForm.get('code');
            }
 
  get typeParticipations(): Array<TypeParticipationVo> {
    return this.typeParticipationService.typeParticipations;
       }
  set typeParticipations(value: Array<TypeParticipationVo>) {
        this.typeParticipationService.typeParticipations = value;
       } 

  get selectedTypeParticipation():TypeParticipationVo {
           return this.typeParticipationService.selectedTypeParticipation;
       }
  set selectedTypeParticipation(value: TypeParticipationVo) {
        this.typeParticipationService.selectedTypeParticipation = value;
       }
  
  get editTypeParticipationDialog():boolean {
           return this.typeParticipationService.editTypeParticipationDialog;
       }
  set editTypeParticipationDialog(value: boolean) {
        this.typeParticipationService.editTypeParticipationDialog= value;
       }


}