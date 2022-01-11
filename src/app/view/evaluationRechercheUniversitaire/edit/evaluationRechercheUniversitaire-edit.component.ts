import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {EvaluationRechercheUniversitaireService} from '../../../controller/service/EvaluationRechercheUniversitaire.service';
import {EvaluationRechercheUniversitaireVo} from '../../../controller/model/EvaluationRechercheUniversitaire.model';
import {RoleEvaluationRechercheUniversitaireVo} from '../../../controller/model/RoleEvaluationRechercheUniversitaire.model';
import {TypeExpertVo} from '../../../controller/model/TypeExpert.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-evaluationRechercheUniversitaire-edit',
  templateUrl: './evaluationRechercheUniversitaire-edit.component.html',
  styleUrls: ['./evaluationRechercheUniversitaire-edit.component.css']
})
export class EvaluationRechercheUniversitaireEditComponent implements OnInit {
// declarations
 editEvaluationRechercheUniversitaireForm = new FormGroup({
          annee:new FormControl(0,[Validators.required]),
          nombreJourConsacrePourCetteAnnee:new FormControl(0,[Validators.required]),
      commentaire: new FormControl("", [Validators.required]),
  }); 
constructor(private evaluationRechercheUniversitaireService: EvaluationRechercheUniversitaireService) { }
// methods 


  ngOnInit(): void {
    this.evaluationRechercheUniversitaireService.editEvaluationRechercheUniversitaire$.subscribe(value=>{
    if(value){
     this.editEvaluationRechercheUniversitaireForm.setValue({
          annee: this.selectedEvaluationRechercheUniversitaire.annee,
          nombreJourConsacrePourCetteAnnee: this.selectedEvaluationRechercheUniversitaire.nombreJourConsacrePourCetteAnnee,
          commentaire: this.selectedEvaluationRechercheUniversitaire.commentaire,
    });
    }
  });
  }



public edit(){ 
    this.evaluationRechercheUniversitaireService.edit().subscribe(updatedEvaluationRechercheUniversitaire => {
          const indexOfUpdated = this.evaluationRechercheUniversitaires.findIndex(
           (EvaluationRechercheUniversitaire) => EvaluationRechercheUniversitaire.id === updatedEvaluationRechercheUniversitaire.id
            );
            indexOfUpdated > -1 ? this.evaluationRechercheUniversitaires[indexOfUpdated] = updatedEvaluationRechercheUniversitaire : false;
                });
                  this.editEvaluationRechercheUniversitaireDialog = false;
    this.selectedEvaluationRechercheUniversitaire = new EvaluationRechercheUniversitaireVo();
            }

  hideEditDialog(){
    this.editEvaluationRechercheUniversitaireDialog = false;
  }
   submit(){
                this.selectedEvaluationRechercheUniversitaire.annee = this.annee.value;
                this.selectedEvaluationRechercheUniversitaire.nombreJourConsacrePourCetteAnnee = this.nombreJourConsacrePourCetteAnnee.value;
                this.selectedEvaluationRechercheUniversitaire.commentaire = this.commentaire.value;
    this.evaluationRechercheUniversitaireService.edit().subscribe(result=>{
        this.editEvaluationRechercheUniversitaireDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get annee() {
                 return this.editEvaluationRechercheUniversitaireForm.get('annee');
            }
            get nombreJourConsacrePourCetteAnnee() {
                 return this.editEvaluationRechercheUniversitaireForm.get('nombreJourConsacrePourCetteAnnee');
            }
            get commentaire() {
                 return this.editEvaluationRechercheUniversitaireForm.get('commentaire');
            }
 
  get evaluationRechercheUniversitaires(): Array<EvaluationRechercheUniversitaireVo> {
    return this.evaluationRechercheUniversitaireService.evaluationRechercheUniversitaires;
       }
  set evaluationRechercheUniversitaires(value: Array<EvaluationRechercheUniversitaireVo>) {
        this.evaluationRechercheUniversitaireService.evaluationRechercheUniversitaires = value;
       } 

  get selectedEvaluationRechercheUniversitaire():EvaluationRechercheUniversitaireVo {
           return this.evaluationRechercheUniversitaireService.selectedEvaluationRechercheUniversitaire;
       }
  set selectedEvaluationRechercheUniversitaire(value: EvaluationRechercheUniversitaireVo) {
        this.evaluationRechercheUniversitaireService.selectedEvaluationRechercheUniversitaire = value;
       }
  
  get editEvaluationRechercheUniversitaireDialog():boolean {
           return this.evaluationRechercheUniversitaireService.editEvaluationRechercheUniversitaireDialog;
       }
  set editEvaluationRechercheUniversitaireDialog(value: boolean) {
        this.evaluationRechercheUniversitaireService.editEvaluationRechercheUniversitaireDialog= value;
       }


}