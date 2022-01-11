import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {TypeSavoirService} from '../../../controller/service/TypeSavoir.service';
import {TypeSavoirVo} from '../../../controller/model/TypeSavoir.model';

@Component({
  selector: 'app-typeSavoir-edit',
  templateUrl: './typeSavoir-edit.component.html',
  styleUrls: ['./typeSavoir-edit.component.css']
})
export class TypeSavoirEditComponent implements OnInit {
// declarations
 editTypeSavoirForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private typeSavoirService: TypeSavoirService) { }
// methods 


  ngOnInit(): void {
    this.typeSavoirService.editTypeSavoir$.subscribe(value=>{
    if(value){
     this.editTypeSavoirForm.setValue({
          libelle: this.selectedTypeSavoir.libelle,
          code: this.selectedTypeSavoir.code,
    });
    }
  });
  }



public edit(){ 
    this.typeSavoirService.edit().subscribe(updatedTypeSavoir => {
          const indexOfUpdated = this.typeSavoirs.findIndex(
           (TypeSavoir) => TypeSavoir.id === updatedTypeSavoir.id
            );
            indexOfUpdated > -1 ? this.typeSavoirs[indexOfUpdated] = updatedTypeSavoir : false;
                });
                  this.editTypeSavoirDialog = false;
    this.selectedTypeSavoir = new TypeSavoirVo();
            }

  hideEditDialog(){
    this.editTypeSavoirDialog = false;
  }
   submit(){
                this.selectedTypeSavoir.libelle = this.libelle.value;
                this.selectedTypeSavoir.code = this.code.value;
    this.typeSavoirService.edit().subscribe(result=>{
        this.editTypeSavoirDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editTypeSavoirForm.get('libelle');
            }
            get code() {
                 return this.editTypeSavoirForm.get('code');
            }
 
  get typeSavoirs(): Array<TypeSavoirVo> {
    return this.typeSavoirService.typeSavoirs;
       }
  set typeSavoirs(value: Array<TypeSavoirVo>) {
        this.typeSavoirService.typeSavoirs = value;
       } 

  get selectedTypeSavoir():TypeSavoirVo {
           return this.typeSavoirService.selectedTypeSavoir;
       }
  set selectedTypeSavoir(value: TypeSavoirVo) {
        this.typeSavoirService.selectedTypeSavoir = value;
       }
  
  get editTypeSavoirDialog():boolean {
           return this.typeSavoirService.editTypeSavoirDialog;
       }
  set editTypeSavoirDialog(value: boolean) {
        this.typeSavoirService.editTypeSavoirDialog= value;
       }


}