import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {ObjetGlobalService} from '../../../controller/service/ObjetGlobal.service';
import {ObjetGlobalVo} from '../../../controller/model/ObjetGlobal.model';

@Component({
  selector: 'app-objetGlobal-edit',
  templateUrl: './objetGlobal-edit.component.html',
  styleUrls: ['./objetGlobal-edit.component.css']
})
export class ObjetGlobalEditComponent implements OnInit {
// declarations
 editObjetGlobalForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private objetGlobalService: ObjetGlobalService) { }
// methods 


  ngOnInit(): void {
    this.objetGlobalService.editObjetGlobal$.subscribe(value=>{
    if(value){
     this.editObjetGlobalForm.setValue({
          libelle: this.selectedObjetGlobal.libelle,
          code: this.selectedObjetGlobal.code,
    });
    }
  });
  }



public edit(){ 
    this.objetGlobalService.edit().subscribe(updatedObjetGlobal => {
          const indexOfUpdated = this.objetGlobals.findIndex(
           (ObjetGlobal) => ObjetGlobal.id === updatedObjetGlobal.id
            );
            indexOfUpdated > -1 ? this.objetGlobals[indexOfUpdated] = updatedObjetGlobal : false;
                });
                  this.editObjetGlobalDialog = false;
    this.selectedObjetGlobal = new ObjetGlobalVo();
            }

  hideEditDialog(){
    this.editObjetGlobalDialog = false;
  }
   submit(){
                this.selectedObjetGlobal.libelle = this.libelle.value;
                this.selectedObjetGlobal.code = this.code.value;
    this.objetGlobalService.edit().subscribe(result=>{
        this.editObjetGlobalDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editObjetGlobalForm.get('libelle');
            }
            get code() {
                 return this.editObjetGlobalForm.get('code');
            }
 
  get objetGlobals(): Array<ObjetGlobalVo> {
    return this.objetGlobalService.objetGlobals;
       }
  set objetGlobals(value: Array<ObjetGlobalVo>) {
        this.objetGlobalService.objetGlobals = value;
       } 

  get selectedObjetGlobal():ObjetGlobalVo {
           return this.objetGlobalService.selectedObjetGlobal;
       }
  set selectedObjetGlobal(value: ObjetGlobalVo) {
        this.objetGlobalService.selectedObjetGlobal = value;
       }
  
  get editObjetGlobalDialog():boolean {
           return this.objetGlobalService.editObjetGlobalDialog;
       }
  set editObjetGlobalDialog(value: boolean) {
        this.objetGlobalService.editObjetGlobalDialog= value;
       }


}