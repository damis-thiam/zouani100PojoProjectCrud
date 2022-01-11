import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {EnjeuxIrdService} from '../../../controller/service/EnjeuxIrd.service';
import {EnjeuxIrdVo} from '../../../controller/model/EnjeuxIrd.model';

@Component({
  selector: 'app-enjeuxIrd-edit',
  templateUrl: './enjeuxIrd-edit.component.html',
  styleUrls: ['./enjeuxIrd-edit.component.css']
})
export class EnjeuxIrdEditComponent implements OnInit {
// declarations
 editEnjeuxIrdForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
  }); 
constructor(private enjeuxIrdService: EnjeuxIrdService) { }
// methods 


  ngOnInit(): void {
    this.enjeuxIrdService.editEnjeuxIrd$.subscribe(value=>{
    if(value){
     this.editEnjeuxIrdForm.setValue({
          libelle: this.selectedEnjeuxIrd.libelle,
          code: this.selectedEnjeuxIrd.code,
          description: this.selectedEnjeuxIrd.description,
    });
    }
  });
  }



public edit(){ 
    this.enjeuxIrdService.edit().subscribe(updatedEnjeuxIrd => {
          const indexOfUpdated = this.enjeuxIrds.findIndex(
           (EnjeuxIrd) => EnjeuxIrd.id === updatedEnjeuxIrd.id
            );
            indexOfUpdated > -1 ? this.enjeuxIrds[indexOfUpdated] = updatedEnjeuxIrd : false;
                });
                  this.editEnjeuxIrdDialog = false;
    this.selectedEnjeuxIrd = new EnjeuxIrdVo();
            }

  hideEditDialog(){
    this.editEnjeuxIrdDialog = false;
  }
   submit(){
                this.selectedEnjeuxIrd.libelle = this.libelle.value;
                this.selectedEnjeuxIrd.code = this.code.value;
                this.selectedEnjeuxIrd.description = this.description.value;
    this.enjeuxIrdService.edit().subscribe(result=>{
        this.editEnjeuxIrdDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editEnjeuxIrdForm.get('libelle');
            }
            get code() {
                 return this.editEnjeuxIrdForm.get('code');
            }
            get description() {
                 return this.editEnjeuxIrdForm.get('description');
            }
 
  get enjeuxIrds(): Array<EnjeuxIrdVo> {
    return this.enjeuxIrdService.enjeuxIrds;
       }
  set enjeuxIrds(value: Array<EnjeuxIrdVo>) {
        this.enjeuxIrdService.enjeuxIrds = value;
       } 

  get selectedEnjeuxIrd():EnjeuxIrdVo {
           return this.enjeuxIrdService.selectedEnjeuxIrd;
       }
  set selectedEnjeuxIrd(value: EnjeuxIrdVo) {
        this.enjeuxIrdService.selectedEnjeuxIrd = value;
       }
  
  get editEnjeuxIrdDialog():boolean {
           return this.enjeuxIrdService.editEnjeuxIrdDialog;
       }
  set editEnjeuxIrdDialog(value: boolean) {
        this.enjeuxIrdService.editEnjeuxIrdDialog= value;
       }


}