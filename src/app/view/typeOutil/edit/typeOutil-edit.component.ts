import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {TypeOutilService} from '../../../controller/service/TypeOutil.service';
import {TypeOutilVo} from '../../../controller/model/TypeOutil.model';

@Component({
  selector: 'app-typeOutil-edit',
  templateUrl: './typeOutil-edit.component.html',
  styleUrls: ['./typeOutil-edit.component.css']
})
export class TypeOutilEditComponent implements OnInit {
// declarations
 editTypeOutilForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private typeOutilService: TypeOutilService) { }
// methods 


  ngOnInit(): void {
    this.typeOutilService.editTypeOutil$.subscribe(value=>{
    if(value){
     this.editTypeOutilForm.setValue({
          libelle: this.selectedTypeOutil.libelle,
          code: this.selectedTypeOutil.code,
    });
    }
  });
  }



public edit(){ 
    this.typeOutilService.edit().subscribe(updatedTypeOutil => {
          const indexOfUpdated = this.typeOutils.findIndex(
           (TypeOutil) => TypeOutil.id === updatedTypeOutil.id
            );
            indexOfUpdated > -1 ? this.typeOutils[indexOfUpdated] = updatedTypeOutil : false;
                });
                  this.editTypeOutilDialog = false;
    this.selectedTypeOutil = new TypeOutilVo();
            }

  hideEditDialog(){
    this.editTypeOutilDialog = false;
  }
   submit(){
                this.selectedTypeOutil.libelle = this.libelle.value;
                this.selectedTypeOutil.code = this.code.value;
    this.typeOutilService.edit().subscribe(result=>{
        this.editTypeOutilDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editTypeOutilForm.get('libelle');
            }
            get code() {
                 return this.editTypeOutilForm.get('code');
            }
 
  get typeOutils(): Array<TypeOutilVo> {
    return this.typeOutilService.typeOutils;
       }
  set typeOutils(value: Array<TypeOutilVo>) {
        this.typeOutilService.typeOutils = value;
       } 

  get selectedTypeOutil():TypeOutilVo {
           return this.typeOutilService.selectedTypeOutil;
       }
  set selectedTypeOutil(value: TypeOutilVo) {
        this.typeOutilService.selectedTypeOutil = value;
       }
  
  get editTypeOutilDialog():boolean {
           return this.typeOutilService.editTypeOutilDialog;
       }
  set editTypeOutilDialog(value: boolean) {
        this.typeOutilService.editTypeOutilDialog= value;
       }


}