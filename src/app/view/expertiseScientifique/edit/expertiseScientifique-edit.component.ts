import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {ExpertiseScientifiqueService} from '../../../controller/service/ExpertiseScientifique.service';
import {ExpertiseScientifiqueVo} from '../../../controller/model/ExpertiseScientifique.model';
import {TypeExpertiseVo} from '../../../controller/model/TypeExpertise.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-expertiseScientifique-edit',
  templateUrl: './expertiseScientifique-edit.component.html',
  styleUrls: ['./expertiseScientifique-edit.component.css']
})
export class ExpertiseScientifiqueEditComponent implements OnInit {
// declarations
 editExpertiseScientifiqueForm = new FormGroup({
          annee:new FormControl(0,[Validators.required]),
      intitule: new FormControl("", [Validators.required]),
          nombreJourConsacrePourCetteAnnee:new FormControl(0,[Validators.required]),
          periodeRemiseRapportMois:new FormControl(0,[Validators.required]),
          periodeRemiseRapportAnnee:new FormControl(0,[Validators.required]),
      commentairesEventuels: new FormControl("", [Validators.required]),
  }); 
constructor(private expertiseScientifiqueService: ExpertiseScientifiqueService) { }
// methods 


  ngOnInit(): void {
    this.expertiseScientifiqueService.editExpertiseScientifique$.subscribe(value=>{
    if(value){
     this.editExpertiseScientifiqueForm.setValue({
          annee: this.selectedExpertiseScientifique.annee,
          intitule: this.selectedExpertiseScientifique.intitule,
          nombreJourConsacrePourCetteAnnee: this.selectedExpertiseScientifique.nombreJourConsacrePourCetteAnnee,
          periodeRemiseRapportMois: this.selectedExpertiseScientifique.periodeRemiseRapportMois,
          periodeRemiseRapportAnnee: this.selectedExpertiseScientifique.periodeRemiseRapportAnnee,
          commentairesEventuels: this.selectedExpertiseScientifique.commentairesEventuels,
    });
    }
  });
  }



public edit(){ 
    this.expertiseScientifiqueService.edit().subscribe(updatedExpertiseScientifique => {
          const indexOfUpdated = this.expertiseScientifiques.findIndex(
           (ExpertiseScientifique) => ExpertiseScientifique.id === updatedExpertiseScientifique.id
            );
            indexOfUpdated > -1 ? this.expertiseScientifiques[indexOfUpdated] = updatedExpertiseScientifique : false;
                });
                  this.editExpertiseScientifiqueDialog = false;
    this.selectedExpertiseScientifique = new ExpertiseScientifiqueVo();
            }

  hideEditDialog(){
    this.editExpertiseScientifiqueDialog = false;
  }
   submit(){
                this.selectedExpertiseScientifique.annee = this.annee.value;
                this.selectedExpertiseScientifique.intitule = this.intitule.value;
                this.selectedExpertiseScientifique.nombreJourConsacrePourCetteAnnee = this.nombreJourConsacrePourCetteAnnee.value;
                this.selectedExpertiseScientifique.periodeRemiseRapportMois = this.periodeRemiseRapportMois.value;
                this.selectedExpertiseScientifique.periodeRemiseRapportAnnee = this.periodeRemiseRapportAnnee.value;
                this.selectedExpertiseScientifique.commentairesEventuels = this.commentairesEventuels.value;
    this.expertiseScientifiqueService.edit().subscribe(result=>{
        this.editExpertiseScientifiqueDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get annee() {
                 return this.editExpertiseScientifiqueForm.get('annee');
            }
            get intitule() {
                 return this.editExpertiseScientifiqueForm.get('intitule');
            }
            get nombreJourConsacrePourCetteAnnee() {
                 return this.editExpertiseScientifiqueForm.get('nombreJourConsacrePourCetteAnnee');
            }
            get periodeRemiseRapportMois() {
                 return this.editExpertiseScientifiqueForm.get('periodeRemiseRapportMois');
            }
            get periodeRemiseRapportAnnee() {
                 return this.editExpertiseScientifiqueForm.get('periodeRemiseRapportAnnee');
            }
            get commentairesEventuels() {
                 return this.editExpertiseScientifiqueForm.get('commentairesEventuels');
            }
 
  get expertiseScientifiques(): Array<ExpertiseScientifiqueVo> {
    return this.expertiseScientifiqueService.expertiseScientifiques;
       }
  set expertiseScientifiques(value: Array<ExpertiseScientifiqueVo>) {
        this.expertiseScientifiqueService.expertiseScientifiques = value;
       } 

  get selectedExpertiseScientifique():ExpertiseScientifiqueVo {
           return this.expertiseScientifiqueService.selectedExpertiseScientifique;
       }
  set selectedExpertiseScientifique(value: ExpertiseScientifiqueVo) {
        this.expertiseScientifiqueService.selectedExpertiseScientifique = value;
       }
  
  get editExpertiseScientifiqueDialog():boolean {
           return this.expertiseScientifiqueService.editExpertiseScientifiqueDialog;
       }
  set editExpertiseScientifiqueDialog(value: boolean) {
        this.expertiseScientifiqueService.editExpertiseScientifiqueDialog= value;
       }


}