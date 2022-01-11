import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {TypeEntiteAdministrativeService} from '../../../controller/service/TypeEntiteAdministrative.service';
import {TypeEntiteAdministrativeVo} from '../../../controller/model/TypeEntiteAdministrative.model';

@Component({
  selector: 'app-typeEntiteAdministrative-edit',
  templateUrl: './typeEntiteAdministrative-edit.component.html',
  styleUrls: ['./typeEntiteAdministrative-edit.component.css']
})
export class TypeEntiteAdministrativeEditComponent implements OnInit {
// declarations
 editTypeEntiteAdministrativeForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private typeEntiteAdministrativeService: TypeEntiteAdministrativeService) { }
// methods 


  ngOnInit(): void {
    this.typeEntiteAdministrativeService.editTypeEntiteAdministrative$.subscribe(value=>{
    if(value){
     this.editTypeEntiteAdministrativeForm.setValue({
          libelle: this.selectedTypeEntiteAdministrative.libelle,
          code: this.selectedTypeEntiteAdministrative.code,
    });
    }
  });
  }



public edit(){ 
    this.typeEntiteAdministrativeService.edit().subscribe(updatedTypeEntiteAdministrative => {
          const indexOfUpdated = this.typeEntiteAdministratives.findIndex(
           (TypeEntiteAdministrative) => TypeEntiteAdministrative.id === updatedTypeEntiteAdministrative.id
            );
            indexOfUpdated > -1 ? this.typeEntiteAdministratives[indexOfUpdated] = updatedTypeEntiteAdministrative : false;
                });
                  this.editTypeEntiteAdministrativeDialog = false;
    this.selectedTypeEntiteAdministrative = new TypeEntiteAdministrativeVo();
            }

  hideEditDialog(){
    this.editTypeEntiteAdministrativeDialog = false;
  }
   submit(){
                this.selectedTypeEntiteAdministrative.libelle = this.libelle.value;
                this.selectedTypeEntiteAdministrative.code = this.code.value;
    this.typeEntiteAdministrativeService.edit().subscribe(result=>{
        this.editTypeEntiteAdministrativeDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editTypeEntiteAdministrativeForm.get('libelle');
            }
            get code() {
                 return this.editTypeEntiteAdministrativeForm.get('code');
            }
 
  get typeEntiteAdministratives(): Array<TypeEntiteAdministrativeVo> {
    return this.typeEntiteAdministrativeService.typeEntiteAdministratives;
       }
  set typeEntiteAdministratives(value: Array<TypeEntiteAdministrativeVo>) {
        this.typeEntiteAdministrativeService.typeEntiteAdministratives = value;
       } 

  get selectedTypeEntiteAdministrative():TypeEntiteAdministrativeVo {
           return this.typeEntiteAdministrativeService.selectedTypeEntiteAdministrative;
       }
  set selectedTypeEntiteAdministrative(value: TypeEntiteAdministrativeVo) {
        this.typeEntiteAdministrativeService.selectedTypeEntiteAdministrative = value;
       }
  
  get editTypeEntiteAdministrativeDialog():boolean {
           return this.typeEntiteAdministrativeService.editTypeEntiteAdministrativeDialog;
       }
  set editTypeEntiteAdministrativeDialog(value: boolean) {
        this.typeEntiteAdministrativeService.editTypeEntiteAdministrativeDialog= value;
       }


}