import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {CommunauteSavoirEvaluationRechercheUniversitaireService} from '../../../controller/service/CommunauteSavoirEvaluationRechercheUniversitaire.service';
import {CommunauteSavoirEvaluationRechercheUniversitaireVo} from '../../../controller/model/CommunauteSavoirEvaluationRechercheUniversitaire.model';
import {EvaluationRechercheUniversitaireVo} from '../../../controller/model/EvaluationRechercheUniversitaire.model';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';

@Component({
  selector: 'app-communauteSavoirEvaluationRechercheUniversitaire-edit',
  templateUrl: './communauteSavoirEvaluationRechercheUniversitaire-edit.component.html',
  styleUrls: ['./communauteSavoirEvaluationRechercheUniversitaire-edit.component.css']
})
export class CommunauteSavoirEvaluationRechercheUniversitaireEditComponent implements OnInit {
// declarations
 editCommunauteSavoirEvaluationRechercheUniversitaireForm = new FormGroup({
  }); 
constructor(private communauteSavoirEvaluationRechercheUniversitaireService: CommunauteSavoirEvaluationRechercheUniversitaireService) { }
// methods 


  ngOnInit(): void {
    this.communauteSavoirEvaluationRechercheUniversitaireService.editCommunauteSavoirEvaluationRechercheUniversitaire$.subscribe(value=>{
    if(value){
     this.editCommunauteSavoirEvaluationRechercheUniversitaireForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.communauteSavoirEvaluationRechercheUniversitaireService.edit().subscribe(updatedCommunauteSavoirEvaluationRechercheUniversitaire => {
          const indexOfUpdated = this.communauteSavoirEvaluationRechercheUniversitaires.findIndex(
           (CommunauteSavoirEvaluationRechercheUniversitaire) => CommunauteSavoirEvaluationRechercheUniversitaire.id === updatedCommunauteSavoirEvaluationRechercheUniversitaire.id
            );
            indexOfUpdated > -1 ? this.communauteSavoirEvaluationRechercheUniversitaires[indexOfUpdated] = updatedCommunauteSavoirEvaluationRechercheUniversitaire : false;
                });
                  this.editCommunauteSavoirEvaluationRechercheUniversitaireDialog = false;
    this.selectedCommunauteSavoirEvaluationRechercheUniversitaire = new CommunauteSavoirEvaluationRechercheUniversitaireVo();
            }

  hideEditDialog(){
    this.editCommunauteSavoirEvaluationRechercheUniversitaireDialog = false;
  }
   submit(){
    this.communauteSavoirEvaluationRechercheUniversitaireService.edit().subscribe(result=>{
        this.editCommunauteSavoirEvaluationRechercheUniversitaireDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get communauteSavoirEvaluationRechercheUniversitaires(): Array<CommunauteSavoirEvaluationRechercheUniversitaireVo> {
    return this.communauteSavoirEvaluationRechercheUniversitaireService.communauteSavoirEvaluationRechercheUniversitaires;
       }
  set communauteSavoirEvaluationRechercheUniversitaires(value: Array<CommunauteSavoirEvaluationRechercheUniversitaireVo>) {
        this.communauteSavoirEvaluationRechercheUniversitaireService.communauteSavoirEvaluationRechercheUniversitaires = value;
       } 

  get selectedCommunauteSavoirEvaluationRechercheUniversitaire():CommunauteSavoirEvaluationRechercheUniversitaireVo {
           return this.communauteSavoirEvaluationRechercheUniversitaireService.selectedCommunauteSavoirEvaluationRechercheUniversitaire;
       }
  set selectedCommunauteSavoirEvaluationRechercheUniversitaire(value: CommunauteSavoirEvaluationRechercheUniversitaireVo) {
        this.communauteSavoirEvaluationRechercheUniversitaireService.selectedCommunauteSavoirEvaluationRechercheUniversitaire = value;
       }
  
  get editCommunauteSavoirEvaluationRechercheUniversitaireDialog():boolean {
           return this.communauteSavoirEvaluationRechercheUniversitaireService.editCommunauteSavoirEvaluationRechercheUniversitaireDialog;
       }
  set editCommunauteSavoirEvaluationRechercheUniversitaireDialog(value: boolean) {
        this.communauteSavoirEvaluationRechercheUniversitaireService.editCommunauteSavoirEvaluationRechercheUniversitaireDialog= value;
       }


}