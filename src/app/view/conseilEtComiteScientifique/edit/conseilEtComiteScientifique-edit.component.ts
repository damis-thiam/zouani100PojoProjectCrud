import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {ConseilEtComiteScientifiqueService} from '../../../controller/service/ConseilEtComiteScientifique.service';
import {ConseilEtComiteScientifiqueVo} from '../../../controller/model/ConseilEtComiteScientifique.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-conseilEtComiteScientifique-edit',
  templateUrl: './conseilEtComiteScientifique-edit.component.html',
  styleUrls: ['./conseilEtComiteScientifique-edit.component.css']
})
export class ConseilEtComiteScientifiqueEditComponent implements OnInit {
// declarations
 editConseilEtComiteScientifiqueForm = new FormGroup({
          annee:new FormControl(0,[Validators.required]),
          tempsEstimePourCetteAnnne:new FormControl(0,[Validators.required]),
      intitule: new FormControl("", [Validators.required]),
          nombreJoursParAnnee:new FormControl(0,[Validators.required]),
  }); 
constructor(private conseilEtComiteScientifiqueService: ConseilEtComiteScientifiqueService) { }
// methods 


  ngOnInit(): void {
    this.conseilEtComiteScientifiqueService.editConseilEtComiteScientifique$.subscribe(value=>{
    if(value){
     this.editConseilEtComiteScientifiqueForm.setValue({
          annee: this.selectedConseilEtComiteScientifique.annee,
          tempsEstimePourCetteAnnne: this.selectedConseilEtComiteScientifique.tempsEstimePourCetteAnnne,
          intitule: this.selectedConseilEtComiteScientifique.intitule,
          nombreJoursParAnnee: this.selectedConseilEtComiteScientifique.nombreJoursParAnnee,
    });
    }
  });
  }



public edit(){ 
    this.conseilEtComiteScientifiqueService.edit().subscribe(updatedConseilEtComiteScientifique => {
          const indexOfUpdated = this.conseilEtComiteScientifiques.findIndex(
           (ConseilEtComiteScientifique) => ConseilEtComiteScientifique.id === updatedConseilEtComiteScientifique.id
            );
            indexOfUpdated > -1 ? this.conseilEtComiteScientifiques[indexOfUpdated] = updatedConseilEtComiteScientifique : false;
                });
                  this.editConseilEtComiteScientifiqueDialog = false;
    this.selectedConseilEtComiteScientifique = new ConseilEtComiteScientifiqueVo();
            }

  hideEditDialog(){
    this.editConseilEtComiteScientifiqueDialog = false;
  }
   submit(){
                this.selectedConseilEtComiteScientifique.annee = this.annee.value;
                this.selectedConseilEtComiteScientifique.tempsEstimePourCetteAnnne = this.tempsEstimePourCetteAnnne.value;
                this.selectedConseilEtComiteScientifique.intitule = this.intitule.value;
                this.selectedConseilEtComiteScientifique.nombreJoursParAnnee = this.nombreJoursParAnnee.value;
    this.conseilEtComiteScientifiqueService.edit().subscribe(result=>{
        this.editConseilEtComiteScientifiqueDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get annee() {
                 return this.editConseilEtComiteScientifiqueForm.get('annee');
            }
            get tempsEstimePourCetteAnnne() {
                 return this.editConseilEtComiteScientifiqueForm.get('tempsEstimePourCetteAnnne');
            }
            get intitule() {
                 return this.editConseilEtComiteScientifiqueForm.get('intitule');
            }
            get nombreJoursParAnnee() {
                 return this.editConseilEtComiteScientifiqueForm.get('nombreJoursParAnnee');
            }
 
  get conseilEtComiteScientifiques(): Array<ConseilEtComiteScientifiqueVo> {
    return this.conseilEtComiteScientifiqueService.conseilEtComiteScientifiques;
       }
  set conseilEtComiteScientifiques(value: Array<ConseilEtComiteScientifiqueVo>) {
        this.conseilEtComiteScientifiqueService.conseilEtComiteScientifiques = value;
       } 

  get selectedConseilEtComiteScientifique():ConseilEtComiteScientifiqueVo {
           return this.conseilEtComiteScientifiqueService.selectedConseilEtComiteScientifique;
       }
  set selectedConseilEtComiteScientifique(value: ConseilEtComiteScientifiqueVo) {
        this.conseilEtComiteScientifiqueService.selectedConseilEtComiteScientifique = value;
       }
  
  get editConseilEtComiteScientifiqueDialog():boolean {
           return this.conseilEtComiteScientifiqueService.editConseilEtComiteScientifiqueDialog;
       }
  set editConseilEtComiteScientifiqueDialog(value: boolean) {
        this.conseilEtComiteScientifiqueService.editConseilEtComiteScientifiqueDialog= value;
       }


}