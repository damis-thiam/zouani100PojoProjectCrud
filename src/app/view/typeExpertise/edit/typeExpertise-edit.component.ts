import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {TypeExpertiseService} from '../../../controller/service/TypeExpertise.service';
import {TypeExpertiseVo} from '../../../controller/model/TypeExpertise.model';

@Component({
  selector: 'app-typeExpertise-edit',
  templateUrl: './typeExpertise-edit.component.html',
  styleUrls: ['./typeExpertise-edit.component.css']
})
export class TypeExpertiseEditComponent implements OnInit {
// declarations
 editTypeExpertiseForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private typeExpertiseService: TypeExpertiseService) { }
// methods 


  ngOnInit(): void {
    this.typeExpertiseService.editTypeExpertise$.subscribe(value=>{
    if(value){
     this.editTypeExpertiseForm.setValue({
          libelle: this.selectedTypeExpertise.libelle,
          code: this.selectedTypeExpertise.code,
    });
    }
  });
  }



public edit(){ 
    this.typeExpertiseService.edit().subscribe(updatedTypeExpertise => {
          const indexOfUpdated = this.typeExpertises.findIndex(
           (TypeExpertise) => TypeExpertise.id === updatedTypeExpertise.id
            );
            indexOfUpdated > -1 ? this.typeExpertises[indexOfUpdated] = updatedTypeExpertise : false;
                });
                  this.editTypeExpertiseDialog = false;
    this.selectedTypeExpertise = new TypeExpertiseVo();
            }

  hideEditDialog(){
    this.editTypeExpertiseDialog = false;
  }
   submit(){
                this.selectedTypeExpertise.libelle = this.libelle.value;
                this.selectedTypeExpertise.code = this.code.value;
    this.typeExpertiseService.edit().subscribe(result=>{
        this.editTypeExpertiseDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editTypeExpertiseForm.get('libelle');
            }
            get code() {
                 return this.editTypeExpertiseForm.get('code');
            }
 
  get typeExpertises(): Array<TypeExpertiseVo> {
    return this.typeExpertiseService.typeExpertises;
       }
  set typeExpertises(value: Array<TypeExpertiseVo>) {
        this.typeExpertiseService.typeExpertises = value;
       } 

  get selectedTypeExpertise():TypeExpertiseVo {
           return this.typeExpertiseService.selectedTypeExpertise;
       }
  set selectedTypeExpertise(value: TypeExpertiseVo) {
        this.typeExpertiseService.selectedTypeExpertise = value;
       }
  
  get editTypeExpertiseDialog():boolean {
           return this.typeExpertiseService.editTypeExpertiseDialog;
       }
  set editTypeExpertiseDialog(value: boolean) {
        this.typeExpertiseService.editTypeExpertiseDialog= value;
       }


}