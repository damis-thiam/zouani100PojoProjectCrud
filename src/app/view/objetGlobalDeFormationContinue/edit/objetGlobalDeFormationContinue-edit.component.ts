import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {ObjetGlobalDeFormationContinueService} from '../../../controller/service/ObjetGlobalDeFormationContinue.service';
import {ObjetGlobalDeFormationContinueVo} from '../../../controller/model/ObjetGlobalDeFormationContinue.model';
import {FormationContinueVo} from '../../../controller/model/FormationContinue.model';
import {ObjetGlobalVo} from '../../../controller/model/ObjetGlobal.model';

@Component({
  selector: 'app-objetGlobalDeFormationContinue-edit',
  templateUrl: './objetGlobalDeFormationContinue-edit.component.html',
  styleUrls: ['./objetGlobalDeFormationContinue-edit.component.css']
})
export class ObjetGlobalDeFormationContinueEditComponent implements OnInit {
// declarations
 editObjetGlobalDeFormationContinueForm = new FormGroup({
  }); 
constructor(private objetGlobalDeFormationContinueService: ObjetGlobalDeFormationContinueService) { }
// methods 


  ngOnInit(): void {
    this.objetGlobalDeFormationContinueService.editObjetGlobalDeFormationContinue$.subscribe(value=>{
    if(value){
     this.editObjetGlobalDeFormationContinueForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.objetGlobalDeFormationContinueService.edit().subscribe(updatedObjetGlobalDeFormationContinue => {
          const indexOfUpdated = this.objetGlobalDeFormationContinues.findIndex(
           (ObjetGlobalDeFormationContinue) => ObjetGlobalDeFormationContinue.id === updatedObjetGlobalDeFormationContinue.id
            );
            indexOfUpdated > -1 ? this.objetGlobalDeFormationContinues[indexOfUpdated] = updatedObjetGlobalDeFormationContinue : false;
                });
                  this.editObjetGlobalDeFormationContinueDialog = false;
    this.selectedObjetGlobalDeFormationContinue = new ObjetGlobalDeFormationContinueVo();
            }

  hideEditDialog(){
    this.editObjetGlobalDeFormationContinueDialog = false;
  }
   submit(){
    this.objetGlobalDeFormationContinueService.edit().subscribe(result=>{
        this.editObjetGlobalDeFormationContinueDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get objetGlobalDeFormationContinues(): Array<ObjetGlobalDeFormationContinueVo> {
    return this.objetGlobalDeFormationContinueService.objetGlobalDeFormationContinues;
       }
  set objetGlobalDeFormationContinues(value: Array<ObjetGlobalDeFormationContinueVo>) {
        this.objetGlobalDeFormationContinueService.objetGlobalDeFormationContinues = value;
       } 

  get selectedObjetGlobalDeFormationContinue():ObjetGlobalDeFormationContinueVo {
           return this.objetGlobalDeFormationContinueService.selectedObjetGlobalDeFormationContinue;
       }
  set selectedObjetGlobalDeFormationContinue(value: ObjetGlobalDeFormationContinueVo) {
        this.objetGlobalDeFormationContinueService.selectedObjetGlobalDeFormationContinue = value;
       }
  
  get editObjetGlobalDeFormationContinueDialog():boolean {
           return this.objetGlobalDeFormationContinueService.editObjetGlobalDeFormationContinueDialog;
       }
  set editObjetGlobalDeFormationContinueDialog(value: boolean) {
        this.objetGlobalDeFormationContinueService.editObjetGlobalDeFormationContinueDialog= value;
       }


}