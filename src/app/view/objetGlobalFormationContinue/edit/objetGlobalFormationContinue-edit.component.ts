import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {ObjetGlobalFormationContinueService} from '../../../controller/service/ObjetGlobalFormationContinue.service';
import {ObjetGlobalFormationContinueVo} from '../../../controller/model/ObjetGlobalFormationContinue.model';
import {FormationContinueVo} from '../../../controller/model/FormationContinue.model';
import {ObjetGlobalVo} from '../../../controller/model/ObjetGlobal.model';

@Component({
  selector: 'app-objetGlobalFormationContinue-edit',
  templateUrl: './objetGlobalFormationContinue-edit.component.html',
  styleUrls: ['./objetGlobalFormationContinue-edit.component.css']
})
export class ObjetGlobalFormationContinueEditComponent implements OnInit {
// declarations
 editObjetGlobalFormationContinueForm = new FormGroup({
  }); 
constructor(private objetGlobalFormationContinueService: ObjetGlobalFormationContinueService) { }
// methods 


  ngOnInit(): void {
    this.objetGlobalFormationContinueService.editObjetGlobalFormationContinue$.subscribe(value=>{
    if(value){
     this.editObjetGlobalFormationContinueForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.objetGlobalFormationContinueService.edit().subscribe(updatedObjetGlobalFormationContinue => {
          const indexOfUpdated = this.objetGlobalFormationContinues.findIndex(
           (ObjetGlobalFormationContinue) => ObjetGlobalFormationContinue.id === updatedObjetGlobalFormationContinue.id
            );
            indexOfUpdated > -1 ? this.objetGlobalFormationContinues[indexOfUpdated] = updatedObjetGlobalFormationContinue : false;
                });
                  this.editObjetGlobalFormationContinueDialog = false;
    this.selectedObjetGlobalFormationContinue = new ObjetGlobalFormationContinueVo();
            }

  hideEditDialog(){
    this.editObjetGlobalFormationContinueDialog = false;
  }
   submit(){
    this.objetGlobalFormationContinueService.edit().subscribe(result=>{
        this.editObjetGlobalFormationContinueDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get objetGlobalFormationContinues(): Array<ObjetGlobalFormationContinueVo> {
    return this.objetGlobalFormationContinueService.objetGlobalFormationContinues;
       }
  set objetGlobalFormationContinues(value: Array<ObjetGlobalFormationContinueVo>) {
        this.objetGlobalFormationContinueService.objetGlobalFormationContinues = value;
       } 

  get selectedObjetGlobalFormationContinue():ObjetGlobalFormationContinueVo {
           return this.objetGlobalFormationContinueService.selectedObjetGlobalFormationContinue;
       }
  set selectedObjetGlobalFormationContinue(value: ObjetGlobalFormationContinueVo) {
        this.objetGlobalFormationContinueService.selectedObjetGlobalFormationContinue = value;
       }
  
  get editObjetGlobalFormationContinueDialog():boolean {
           return this.objetGlobalFormationContinueService.editObjetGlobalFormationContinueDialog;
       }
  set editObjetGlobalFormationContinueDialog(value: boolean) {
        this.objetGlobalFormationContinueService.editObjetGlobalFormationContinueDialog= value;
       }


}