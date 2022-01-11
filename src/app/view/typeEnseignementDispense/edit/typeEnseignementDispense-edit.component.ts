import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {TypeEnseignementDispenseService} from '../../../controller/service/TypeEnseignementDispense.service';
import {TypeEnseignementDispenseVo} from '../../../controller/model/TypeEnseignementDispense.model';

@Component({
  selector: 'app-typeEnseignementDispense-edit',
  templateUrl: './typeEnseignementDispense-edit.component.html',
  styleUrls: ['./typeEnseignementDispense-edit.component.css']
})
export class TypeEnseignementDispenseEditComponent implements OnInit {
// declarations
 editTypeEnseignementDispenseForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private typeEnseignementDispenseService: TypeEnseignementDispenseService) { }
// methods 


  ngOnInit(): void {
    this.typeEnseignementDispenseService.editTypeEnseignementDispense$.subscribe(value=>{
    if(value){
     this.editTypeEnseignementDispenseForm.setValue({
          libelle: this.selectedTypeEnseignementDispense.libelle,
          code: this.selectedTypeEnseignementDispense.code,
    });
    }
  });
  }



public edit(){ 
    this.typeEnseignementDispenseService.edit().subscribe(updatedTypeEnseignementDispense => {
          const indexOfUpdated = this.typeEnseignementDispenses.findIndex(
           (TypeEnseignementDispense) => TypeEnseignementDispense.id === updatedTypeEnseignementDispense.id
            );
            indexOfUpdated > -1 ? this.typeEnseignementDispenses[indexOfUpdated] = updatedTypeEnseignementDispense : false;
                });
                  this.editTypeEnseignementDispenseDialog = false;
    this.selectedTypeEnseignementDispense = new TypeEnseignementDispenseVo();
            }

  hideEditDialog(){
    this.editTypeEnseignementDispenseDialog = false;
  }
   submit(){
                this.selectedTypeEnseignementDispense.libelle = this.libelle.value;
                this.selectedTypeEnseignementDispense.code = this.code.value;
    this.typeEnseignementDispenseService.edit().subscribe(result=>{
        this.editTypeEnseignementDispenseDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editTypeEnseignementDispenseForm.get('libelle');
            }
            get code() {
                 return this.editTypeEnseignementDispenseForm.get('code');
            }
 
  get typeEnseignementDispenses(): Array<TypeEnseignementDispenseVo> {
    return this.typeEnseignementDispenseService.typeEnseignementDispenses;
       }
  set typeEnseignementDispenses(value: Array<TypeEnseignementDispenseVo>) {
        this.typeEnseignementDispenseService.typeEnseignementDispenses = value;
       } 

  get selectedTypeEnseignementDispense():TypeEnseignementDispenseVo {
           return this.typeEnseignementDispenseService.selectedTypeEnseignementDispense;
       }
  set selectedTypeEnseignementDispense(value: TypeEnseignementDispenseVo) {
        this.typeEnseignementDispenseService.selectedTypeEnseignementDispense = value;
       }
  
  get editTypeEnseignementDispenseDialog():boolean {
           return this.typeEnseignementDispenseService.editTypeEnseignementDispenseDialog;
       }
  set editTypeEnseignementDispenseDialog(value: boolean) {
        this.typeEnseignementDispenseService.editTypeEnseignementDispenseDialog= value;
       }


}