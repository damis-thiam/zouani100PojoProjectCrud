import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {OutilFormationContinueService} from '../../../controller/service/OutilFormationContinue.service';
import {OutilFormationContinueVo} from '../../../controller/model/OutilFormationContinue.model';

@Component({
  selector: 'app-outilFormationContinue-edit',
  templateUrl: './outilFormationContinue-edit.component.html',
  styleUrls: ['./outilFormationContinue-edit.component.css']
})
export class OutilFormationContinueEditComponent implements OnInit {
// declarations
 editOutilFormationContinueForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private outilFormationContinueService: OutilFormationContinueService) { }
// methods 


  ngOnInit(): void {
    this.outilFormationContinueService.editOutilFormationContinue$.subscribe(value=>{
    if(value){
     this.editOutilFormationContinueForm.setValue({
          libelle: this.selectedOutilFormationContinue.libelle,
          code: this.selectedOutilFormationContinue.code,
    });
    }
  });
  }



public edit(){ 
    this.outilFormationContinueService.edit().subscribe(updatedOutilFormationContinue => {
          const indexOfUpdated = this.outilFormationContinues.findIndex(
           (OutilFormationContinue) => OutilFormationContinue.id === updatedOutilFormationContinue.id
            );
            indexOfUpdated > -1 ? this.outilFormationContinues[indexOfUpdated] = updatedOutilFormationContinue : false;
                });
                  this.editOutilFormationContinueDialog = false;
    this.selectedOutilFormationContinue = new OutilFormationContinueVo();
            }

  hideEditDialog(){
    this.editOutilFormationContinueDialog = false;
  }
   submit(){
                this.selectedOutilFormationContinue.libelle = this.libelle.value;
                this.selectedOutilFormationContinue.code = this.code.value;
    this.outilFormationContinueService.edit().subscribe(result=>{
        this.editOutilFormationContinueDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editOutilFormationContinueForm.get('libelle');
            }
            get code() {
                 return this.editOutilFormationContinueForm.get('code');
            }
 
  get outilFormationContinues(): Array<OutilFormationContinueVo> {
    return this.outilFormationContinueService.outilFormationContinues;
       }
  set outilFormationContinues(value: Array<OutilFormationContinueVo>) {
        this.outilFormationContinueService.outilFormationContinues = value;
       } 

  get selectedOutilFormationContinue():OutilFormationContinueVo {
           return this.outilFormationContinueService.selectedOutilFormationContinue;
       }
  set selectedOutilFormationContinue(value: OutilFormationContinueVo) {
        this.outilFormationContinueService.selectedOutilFormationContinue = value;
       }
  
  get editOutilFormationContinueDialog():boolean {
           return this.outilFormationContinueService.editOutilFormationContinueDialog;
       }
  set editOutilFormationContinueDialog(value: boolean) {
        this.outilFormationContinueService.editOutilFormationContinueDialog= value;
       }


}