import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {PubliquePrincipalService} from '../../../controller/service/PubliquePrincipal.service';
import {PubliquePrincipalVo} from '../../../controller/model/PubliquePrincipal.model';

@Component({
  selector: 'app-publiquePrincipal-edit',
  templateUrl: './publiquePrincipal-edit.component.html',
  styleUrls: ['./publiquePrincipal-edit.component.css']
})
export class PubliquePrincipalEditComponent implements OnInit {
// declarations
 editPubliquePrincipalForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private publiquePrincipalService: PubliquePrincipalService) { }
// methods 


  ngOnInit(): void {
    this.publiquePrincipalService.editPubliquePrincipal$.subscribe(value=>{
    if(value){
     this.editPubliquePrincipalForm.setValue({
          libelle: this.selectedPubliquePrincipal.libelle,
          code: this.selectedPubliquePrincipal.code,
    });
    }
  });
  }



public edit(){ 
    this.publiquePrincipalService.edit().subscribe(updatedPubliquePrincipal => {
          const indexOfUpdated = this.publiquePrincipals.findIndex(
           (PubliquePrincipal) => PubliquePrincipal.id === updatedPubliquePrincipal.id
            );
            indexOfUpdated > -1 ? this.publiquePrincipals[indexOfUpdated] = updatedPubliquePrincipal : false;
                });
                  this.editPubliquePrincipalDialog = false;
    this.selectedPubliquePrincipal = new PubliquePrincipalVo();
            }

  hideEditDialog(){
    this.editPubliquePrincipalDialog = false;
  }
   submit(){
                this.selectedPubliquePrincipal.libelle = this.libelle.value;
                this.selectedPubliquePrincipal.code = this.code.value;
    this.publiquePrincipalService.edit().subscribe(result=>{
        this.editPubliquePrincipalDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editPubliquePrincipalForm.get('libelle');
            }
            get code() {
                 return this.editPubliquePrincipalForm.get('code');
            }
 
  get publiquePrincipals(): Array<PubliquePrincipalVo> {
    return this.publiquePrincipalService.publiquePrincipals;
       }
  set publiquePrincipals(value: Array<PubliquePrincipalVo>) {
        this.publiquePrincipalService.publiquePrincipals = value;
       } 

  get selectedPubliquePrincipal():PubliquePrincipalVo {
           return this.publiquePrincipalService.selectedPubliquePrincipal;
       }
  set selectedPubliquePrincipal(value: PubliquePrincipalVo) {
        this.publiquePrincipalService.selectedPubliquePrincipal = value;
       }
  
  get editPubliquePrincipalDialog():boolean {
           return this.publiquePrincipalService.editPubliquePrincipalDialog;
       }
  set editPubliquePrincipalDialog(value: boolean) {
        this.publiquePrincipalService.editPubliquePrincipalDialog= value;
       }


}