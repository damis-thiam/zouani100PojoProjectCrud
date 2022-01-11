import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {CommunauteSavoirEvenementColloqueScientifiquesService} from '../../../controller/service/CommunauteSavoirEvenementColloqueScientifiques.service';
import {CommunauteSavoirEvenementColloqueScientifiquesVo} from '../../../controller/model/CommunauteSavoirEvenementColloqueScientifiques.model';
import {EvenementColloqueScienntifiqueVo} from '../../../controller/model/EvenementColloqueScienntifique.model';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';

@Component({
  selector: 'app-communauteSavoirEvenementColloqueScientifiques-edit',
  templateUrl: './communauteSavoirEvenementColloqueScientifiques-edit.component.html',
  styleUrls: ['./communauteSavoirEvenementColloqueScientifiques-edit.component.css']
})
export class CommunauteSavoirEvenementColloqueScientifiquesEditComponent implements OnInit {
// declarations
 editCommunauteSavoirEvenementColloqueScientifiquesForm = new FormGroup({
  }); 
constructor(private communauteSavoirEvenementColloqueScientifiquesService: CommunauteSavoirEvenementColloqueScientifiquesService) { }
// methods 


  ngOnInit(): void {
    this.communauteSavoirEvenementColloqueScientifiquesService.editCommunauteSavoirEvenementColloqueScientifiques$.subscribe(value=>{
    if(value){
     this.editCommunauteSavoirEvenementColloqueScientifiquesForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.communauteSavoirEvenementColloqueScientifiquesService.edit().subscribe(updatedCommunauteSavoirEvenementColloqueScientifiques => {
          const indexOfUpdated = this.communauteSavoirEvenementColloqueScientifiquess.findIndex(
           (CommunauteSavoirEvenementColloqueScientifiques) => CommunauteSavoirEvenementColloqueScientifiques.id === updatedCommunauteSavoirEvenementColloqueScientifiques.id
            );
            indexOfUpdated > -1 ? this.communauteSavoirEvenementColloqueScientifiquess[indexOfUpdated] = updatedCommunauteSavoirEvenementColloqueScientifiques : false;
                });
                  this.editCommunauteSavoirEvenementColloqueScientifiquesDialog = false;
    this.selectedCommunauteSavoirEvenementColloqueScientifiques = new CommunauteSavoirEvenementColloqueScientifiquesVo();
            }

  hideEditDialog(){
    this.editCommunauteSavoirEvenementColloqueScientifiquesDialog = false;
  }
   submit(){
    this.communauteSavoirEvenementColloqueScientifiquesService.edit().subscribe(result=>{
        this.editCommunauteSavoirEvenementColloqueScientifiquesDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get communauteSavoirEvenementColloqueScientifiquess(): Array<CommunauteSavoirEvenementColloqueScientifiquesVo> {
    return this.communauteSavoirEvenementColloqueScientifiquesService.communauteSavoirEvenementColloqueScientifiquess;
       }
  set communauteSavoirEvenementColloqueScientifiquess(value: Array<CommunauteSavoirEvenementColloqueScientifiquesVo>) {
        this.communauteSavoirEvenementColloqueScientifiquesService.communauteSavoirEvenementColloqueScientifiquess = value;
       } 

  get selectedCommunauteSavoirEvenementColloqueScientifiques():CommunauteSavoirEvenementColloqueScientifiquesVo {
           return this.communauteSavoirEvenementColloqueScientifiquesService.selectedCommunauteSavoirEvenementColloqueScientifiques;
       }
  set selectedCommunauteSavoirEvenementColloqueScientifiques(value: CommunauteSavoirEvenementColloqueScientifiquesVo) {
        this.communauteSavoirEvenementColloqueScientifiquesService.selectedCommunauteSavoirEvenementColloqueScientifiques = value;
       }
  
  get editCommunauteSavoirEvenementColloqueScientifiquesDialog():boolean {
           return this.communauteSavoirEvenementColloqueScientifiquesService.editCommunauteSavoirEvenementColloqueScientifiquesDialog;
       }
  set editCommunauteSavoirEvenementColloqueScientifiquesDialog(value: boolean) {
        this.communauteSavoirEvenementColloqueScientifiquesService.editCommunauteSavoirEvenementColloqueScientifiquesDialog= value;
       }


}