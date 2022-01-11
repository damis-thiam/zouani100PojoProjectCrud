import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {TypeInstanceService} from '../../../controller/service/TypeInstance.service';
import {TypeInstanceVo} from '../../../controller/model/TypeInstance.model';

@Component({
  selector: 'app-typeInstance-edit',
  templateUrl: './typeInstance-edit.component.html',
  styleUrls: ['./typeInstance-edit.component.css']
})
export class TypeInstanceEditComponent implements OnInit {
// declarations
 editTypeInstanceForm = new FormGroup({
      code: new FormControl("", [Validators.required]),
      libelle: new FormControl("", [Validators.required]),
  }); 
constructor(private typeInstanceService: TypeInstanceService) { }
// methods 


  ngOnInit(): void {
    this.typeInstanceService.editTypeInstance$.subscribe(value=>{
    if(value){
     this.editTypeInstanceForm.setValue({
          code: this.selectedTypeInstance.code,
          libelle: this.selectedTypeInstance.libelle,
    });
    }
  });
  }



public edit(){ 
    this.typeInstanceService.edit().subscribe(updatedTypeInstance => {
          const indexOfUpdated = this.typeInstances.findIndex(
           (TypeInstance) => TypeInstance.id === updatedTypeInstance.id
            );
            indexOfUpdated > -1 ? this.typeInstances[indexOfUpdated] = updatedTypeInstance : false;
                });
                  this.editTypeInstanceDialog = false;
    this.selectedTypeInstance = new TypeInstanceVo();
            }

  hideEditDialog(){
    this.editTypeInstanceDialog = false;
  }
   submit(){
                this.selectedTypeInstance.code = this.code.value;
                this.selectedTypeInstance.libelle = this.libelle.value;
    this.typeInstanceService.edit().subscribe(result=>{
        this.editTypeInstanceDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get code() {
                 return this.editTypeInstanceForm.get('code');
            }
            get libelle() {
                 return this.editTypeInstanceForm.get('libelle');
            }
 
  get typeInstances(): Array<TypeInstanceVo> {
    return this.typeInstanceService.typeInstances;
       }
  set typeInstances(value: Array<TypeInstanceVo>) {
        this.typeInstanceService.typeInstances = value;
       } 

  get selectedTypeInstance():TypeInstanceVo {
           return this.typeInstanceService.selectedTypeInstance;
       }
  set selectedTypeInstance(value: TypeInstanceVo) {
        this.typeInstanceService.selectedTypeInstance = value;
       }
  
  get editTypeInstanceDialog():boolean {
           return this.typeInstanceService.editTypeInstanceDialog;
       }
  set editTypeInstanceDialog(value: boolean) {
        this.typeInstanceService.editTypeInstanceDialog= value;
       }


}