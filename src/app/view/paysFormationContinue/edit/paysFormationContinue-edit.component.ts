import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {PaysFormationContinueService} from '../../../controller/service/PaysFormationContinue.service';
import {PaysFormationContinueVo} from '../../../controller/model/PaysFormationContinue.model';
import {FormationContinueVo} from '../../../controller/model/FormationContinue.model';
import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-paysFormationContinue-edit',
  templateUrl: './paysFormationContinue-edit.component.html',
  styleUrls: ['./paysFormationContinue-edit.component.css']
})
export class PaysFormationContinueEditComponent implements OnInit {
// declarations
 editPaysFormationContinueForm = new FormGroup({
  }); 
constructor(private paysFormationContinueService: PaysFormationContinueService) { }
// methods 


  ngOnInit(): void {
    this.paysFormationContinueService.editPaysFormationContinue$.subscribe(value=>{
    if(value){
     this.editPaysFormationContinueForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.paysFormationContinueService.edit().subscribe(updatedPaysFormationContinue => {
          const indexOfUpdated = this.paysFormationContinues.findIndex(
           (PaysFormationContinue) => PaysFormationContinue.id === updatedPaysFormationContinue.id
            );
            indexOfUpdated > -1 ? this.paysFormationContinues[indexOfUpdated] = updatedPaysFormationContinue : false;
                });
                  this.editPaysFormationContinueDialog = false;
    this.selectedPaysFormationContinue = new PaysFormationContinueVo();
            }

  hideEditDialog(){
    this.editPaysFormationContinueDialog = false;
  }
   submit(){
    this.paysFormationContinueService.edit().subscribe(result=>{
        this.editPaysFormationContinueDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get paysFormationContinues(): Array<PaysFormationContinueVo> {
    return this.paysFormationContinueService.paysFormationContinues;
       }
  set paysFormationContinues(value: Array<PaysFormationContinueVo>) {
        this.paysFormationContinueService.paysFormationContinues = value;
       } 

  get selectedPaysFormationContinue():PaysFormationContinueVo {
           return this.paysFormationContinueService.selectedPaysFormationContinue;
       }
  set selectedPaysFormationContinue(value: PaysFormationContinueVo) {
        this.paysFormationContinueService.selectedPaysFormationContinue = value;
       }
  
  get editPaysFormationContinueDialog():boolean {
           return this.paysFormationContinueService.editPaysFormationContinueDialog;
       }
  set editPaysFormationContinueDialog(value: boolean) {
        this.paysFormationContinueService.editPaysFormationContinueDialog= value;
       }


}