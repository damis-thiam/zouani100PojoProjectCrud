import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {StatutMasterService} from '../../../controller/service/StatutMaster.service';
import {StatutMasterVo} from '../../../controller/model/StatutMaster.model';

@Component({
  selector: 'app-statutMaster-edit',
  templateUrl: './statutMaster-edit.component.html',
  styleUrls: ['./statutMaster-edit.component.css']
})
export class StatutMasterEditComponent implements OnInit {
// declarations
 editStatutMasterForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private statutMasterService: StatutMasterService) { }
// methods 


  ngOnInit(): void {
    this.statutMasterService.editStatutMaster$.subscribe(value=>{
    if(value){
     this.editStatutMasterForm.setValue({
          libelle: this.selectedStatutMaster.libelle,
          code: this.selectedStatutMaster.code,
    });
    }
  });
  }



public edit(){ 
    this.statutMasterService.edit().subscribe(updatedStatutMaster => {
          const indexOfUpdated = this.statutMasters.findIndex(
           (StatutMaster) => StatutMaster.id === updatedStatutMaster.id
            );
            indexOfUpdated > -1 ? this.statutMasters[indexOfUpdated] = updatedStatutMaster : false;
                });
                  this.editStatutMasterDialog = false;
    this.selectedStatutMaster = new StatutMasterVo();
            }

  hideEditDialog(){
    this.editStatutMasterDialog = false;
  }
   submit(){
                this.selectedStatutMaster.libelle = this.libelle.value;
                this.selectedStatutMaster.code = this.code.value;
    this.statutMasterService.edit().subscribe(result=>{
        this.editStatutMasterDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editStatutMasterForm.get('libelle');
            }
            get code() {
                 return this.editStatutMasterForm.get('code');
            }
 
  get statutMasters(): Array<StatutMasterVo> {
    return this.statutMasterService.statutMasters;
       }
  set statutMasters(value: Array<StatutMasterVo>) {
        this.statutMasterService.statutMasters = value;
       } 

  get selectedStatutMaster():StatutMasterVo {
           return this.statutMasterService.selectedStatutMaster;
       }
  set selectedStatutMaster(value: StatutMasterVo) {
        this.statutMasterService.selectedStatutMaster = value;
       }
  
  get editStatutMasterDialog():boolean {
           return this.statutMasterService.editStatutMasterDialog;
       }
  set editStatutMasterDialog(value: boolean) {
        this.statutMasterService.editStatutMasterDialog= value;
       }


}