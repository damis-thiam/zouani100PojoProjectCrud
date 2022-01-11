import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {TypeExpertService} from '../../../controller/service/TypeExpert.service';
import {TypeExpertVo} from '../../../controller/model/TypeExpert.model';

@Component({
  selector: 'app-typeExpert-edit',
  templateUrl: './typeExpert-edit.component.html',
  styleUrls: ['./typeExpert-edit.component.css']
})
export class TypeExpertEditComponent implements OnInit {
// declarations
 editTypeExpertForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private typeExpertService: TypeExpertService) { }
// methods 


  ngOnInit(): void {
    this.typeExpertService.editTypeExpert$.subscribe(value=>{
    if(value){
     this.editTypeExpertForm.setValue({
          libelle: this.selectedTypeExpert.libelle,
          code: this.selectedTypeExpert.code,
    });
    }
  });
  }



public edit(){ 
    this.typeExpertService.edit().subscribe(updatedTypeExpert => {
          const indexOfUpdated = this.typeExperts.findIndex(
           (TypeExpert) => TypeExpert.id === updatedTypeExpert.id
            );
            indexOfUpdated > -1 ? this.typeExperts[indexOfUpdated] = updatedTypeExpert : false;
                });
                  this.editTypeExpertDialog = false;
    this.selectedTypeExpert = new TypeExpertVo();
            }

  hideEditDialog(){
    this.editTypeExpertDialog = false;
  }
   submit(){
                this.selectedTypeExpert.libelle = this.libelle.value;
                this.selectedTypeExpert.code = this.code.value;
    this.typeExpertService.edit().subscribe(result=>{
        this.editTypeExpertDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editTypeExpertForm.get('libelle');
            }
            get code() {
                 return this.editTypeExpertForm.get('code');
            }
 
  get typeExperts(): Array<TypeExpertVo> {
    return this.typeExpertService.typeExperts;
       }
  set typeExperts(value: Array<TypeExpertVo>) {
        this.typeExpertService.typeExperts = value;
       } 

  get selectedTypeExpert():TypeExpertVo {
           return this.typeExpertService.selectedTypeExpert;
       }
  set selectedTypeExpert(value: TypeExpertVo) {
        this.typeExpertService.selectedTypeExpert = value;
       }
  
  get editTypeExpertDialog():boolean {
           return this.typeExpertService.editTypeExpertDialog;
       }
  set editTypeExpertDialog(value: boolean) {
        this.typeExpertService.editTypeExpertDialog= value;
       }


}