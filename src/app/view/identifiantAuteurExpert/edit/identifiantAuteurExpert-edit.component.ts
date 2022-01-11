import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {IdentifiantAuteurExpertService} from '../../../controller/service/IdentifiantAuteurExpert.service';
import {IdentifiantAuteurExpertVo} from '../../../controller/model/IdentifiantAuteurExpert.model';
import {IdentifiantRechercheVo} from '../../../controller/model/IdentifiantRecherche.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-identifiantAuteurExpert-edit',
  templateUrl: './identifiantAuteurExpert-edit.component.html',
  styleUrls: ['./identifiantAuteurExpert-edit.component.css']
})
export class IdentifiantAuteurExpertEditComponent implements OnInit {
// declarations
 editIdentifiantAuteurExpertForm = new FormGroup({
      valeur: new FormControl("", [Validators.required]),
  }); 
constructor(private identifiantAuteurExpertService: IdentifiantAuteurExpertService) { }
// methods 


  ngOnInit(): void {
    this.identifiantAuteurExpertService.editIdentifiantAuteurExpert$.subscribe(value=>{
    if(value){
     this.editIdentifiantAuteurExpertForm.setValue({
          valeur: this.selectedIdentifiantAuteurExpert.valeur,
    });
    }
  });
  }



public edit(){ 
    this.identifiantAuteurExpertService.edit().subscribe(updatedIdentifiantAuteurExpert => {
          const indexOfUpdated = this.identifiantAuteurExperts.findIndex(
           (IdentifiantAuteurExpert) => IdentifiantAuteurExpert.id === updatedIdentifiantAuteurExpert.id
            );
            indexOfUpdated > -1 ? this.identifiantAuteurExperts[indexOfUpdated] = updatedIdentifiantAuteurExpert : false;
                });
                  this.editIdentifiantAuteurExpertDialog = false;
    this.selectedIdentifiantAuteurExpert = new IdentifiantAuteurExpertVo();
            }

  hideEditDialog(){
    this.editIdentifiantAuteurExpertDialog = false;
  }
   submit(){
                this.selectedIdentifiantAuteurExpert.valeur = this.valeur.value;
    this.identifiantAuteurExpertService.edit().subscribe(result=>{
        this.editIdentifiantAuteurExpertDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get valeur() {
                 return this.editIdentifiantAuteurExpertForm.get('valeur');
            }
 
  get identifiantAuteurExperts(): Array<IdentifiantAuteurExpertVo> {
    return this.identifiantAuteurExpertService.identifiantAuteurExperts;
       }
  set identifiantAuteurExperts(value: Array<IdentifiantAuteurExpertVo>) {
        this.identifiantAuteurExpertService.identifiantAuteurExperts = value;
       } 

  get selectedIdentifiantAuteurExpert():IdentifiantAuteurExpertVo {
           return this.identifiantAuteurExpertService.selectedIdentifiantAuteurExpert;
       }
  set selectedIdentifiantAuteurExpert(value: IdentifiantAuteurExpertVo) {
        this.identifiantAuteurExpertService.selectedIdentifiantAuteurExpert = value;
       }
  
  get editIdentifiantAuteurExpertDialog():boolean {
           return this.identifiantAuteurExpertService.editIdentifiantAuteurExpertDialog;
       }
  set editIdentifiantAuteurExpertDialog(value: boolean) {
        this.identifiantAuteurExpertService.editIdentifiantAuteurExpertDialog= value;
       }


}