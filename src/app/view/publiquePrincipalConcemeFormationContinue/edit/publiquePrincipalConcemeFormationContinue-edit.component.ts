import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {PubliquePrincipalConcemeFormationContinueService} from '../../../controller/service/PubliquePrincipalConcemeFormationContinue.service';
import {PubliquePrincipalConcemeFormationContinueVo} from '../../../controller/model/PubliquePrincipalConcemeFormationContinue.model';
import {PubliquePrincipalVo} from '../../../controller/model/PubliquePrincipal.model';
import {FormationContinueVo} from '../../../controller/model/FormationContinue.model';

@Component({
  selector: 'app-publiquePrincipalConcemeFormationContinue-edit',
  templateUrl: './publiquePrincipalConcemeFormationContinue-edit.component.html',
  styleUrls: ['./publiquePrincipalConcemeFormationContinue-edit.component.css']
})
export class PubliquePrincipalConcemeFormationContinueEditComponent implements OnInit {
// declarations
 editPubliquePrincipalConcemeFormationContinueForm = new FormGroup({
  }); 
constructor(private publiquePrincipalConcemeFormationContinueService: PubliquePrincipalConcemeFormationContinueService) { }
// methods 


  ngOnInit(): void {
    this.publiquePrincipalConcemeFormationContinueService.editPubliquePrincipalConcemeFormationContinue$.subscribe(value=>{
    if(value){
     this.editPubliquePrincipalConcemeFormationContinueForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.publiquePrincipalConcemeFormationContinueService.edit().subscribe(updatedPubliquePrincipalConcemeFormationContinue => {
          const indexOfUpdated = this.publiquePrincipalConcemeFormationContinues.findIndex(
           (PubliquePrincipalConcemeFormationContinue) => PubliquePrincipalConcemeFormationContinue.id === updatedPubliquePrincipalConcemeFormationContinue.id
            );
            indexOfUpdated > -1 ? this.publiquePrincipalConcemeFormationContinues[indexOfUpdated] = updatedPubliquePrincipalConcemeFormationContinue : false;
                });
                  this.editPubliquePrincipalConcemeFormationContinueDialog = false;
    this.selectedPubliquePrincipalConcemeFormationContinue = new PubliquePrincipalConcemeFormationContinueVo();
            }

  hideEditDialog(){
    this.editPubliquePrincipalConcemeFormationContinueDialog = false;
  }
   submit(){
    this.publiquePrincipalConcemeFormationContinueService.edit().subscribe(result=>{
        this.editPubliquePrincipalConcemeFormationContinueDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get publiquePrincipalConcemeFormationContinues(): Array<PubliquePrincipalConcemeFormationContinueVo> {
    return this.publiquePrincipalConcemeFormationContinueService.publiquePrincipalConcemeFormationContinues;
       }
  set publiquePrincipalConcemeFormationContinues(value: Array<PubliquePrincipalConcemeFormationContinueVo>) {
        this.publiquePrincipalConcemeFormationContinueService.publiquePrincipalConcemeFormationContinues = value;
       } 

  get selectedPubliquePrincipalConcemeFormationContinue():PubliquePrincipalConcemeFormationContinueVo {
           return this.publiquePrincipalConcemeFormationContinueService.selectedPubliquePrincipalConcemeFormationContinue;
       }
  set selectedPubliquePrincipalConcemeFormationContinue(value: PubliquePrincipalConcemeFormationContinueVo) {
        this.publiquePrincipalConcemeFormationContinueService.selectedPubliquePrincipalConcemeFormationContinue = value;
       }
  
  get editPubliquePrincipalConcemeFormationContinueDialog():boolean {
           return this.publiquePrincipalConcemeFormationContinueService.editPubliquePrincipalConcemeFormationContinueDialog;
       }
  set editPubliquePrincipalConcemeFormationContinueDialog(value: boolean) {
        this.publiquePrincipalConcemeFormationContinueService.editPubliquePrincipalConcemeFormationContinueDialog= value;
       }


}