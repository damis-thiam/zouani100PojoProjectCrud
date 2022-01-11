import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {MasterInternationalService} from '../../../controller/service/MasterInternational.service';
import {MasterInternationalVo} from '../../../controller/model/MasterInternational.model';

@Component({
  selector: 'app-masterInternational-edit',
  templateUrl: './masterInternational-edit.component.html',
  styleUrls: ['./masterInternational-edit.component.css']
})
export class MasterInternationalEditComponent implements OnInit {
// declarations
 editMasterInternationalForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private masterInternationalService: MasterInternationalService) { }
// methods 


  ngOnInit(): void {
    this.masterInternationalService.editMasterInternational$.subscribe(value=>{
    if(value){
     this.editMasterInternationalForm.setValue({
          libelle: this.selectedMasterInternational.libelle,
          code: this.selectedMasterInternational.code,
    });
    }
  });
  }



public edit(){ 
    this.masterInternationalService.edit().subscribe(updatedMasterInternational => {
          const indexOfUpdated = this.masterInternationals.findIndex(
           (MasterInternational) => MasterInternational.id === updatedMasterInternational.id
            );
            indexOfUpdated > -1 ? this.masterInternationals[indexOfUpdated] = updatedMasterInternational : false;
                });
                  this.editMasterInternationalDialog = false;
    this.selectedMasterInternational = new MasterInternationalVo();
            }

  hideEditDialog(){
    this.editMasterInternationalDialog = false;
  }
   submit(){
                this.selectedMasterInternational.libelle = this.libelle.value;
                this.selectedMasterInternational.code = this.code.value;
    this.masterInternationalService.edit().subscribe(result=>{
        this.editMasterInternationalDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editMasterInternationalForm.get('libelle');
            }
            get code() {
                 return this.editMasterInternationalForm.get('code');
            }
 
  get masterInternationals(): Array<MasterInternationalVo> {
    return this.masterInternationalService.masterInternationals;
       }
  set masterInternationals(value: Array<MasterInternationalVo>) {
        this.masterInternationalService.masterInternationals = value;
       } 

  get selectedMasterInternational():MasterInternationalVo {
           return this.masterInternationalService.selectedMasterInternational;
       }
  set selectedMasterInternational(value: MasterInternationalVo) {
        this.masterInternationalService.selectedMasterInternational = value;
       }
  
  get editMasterInternationalDialog():boolean {
           return this.masterInternationalService.editMasterInternationalDialog;
       }
  set editMasterInternationalDialog(value: boolean) {
        this.masterInternationalService.editMasterInternationalDialog= value;
       }


}