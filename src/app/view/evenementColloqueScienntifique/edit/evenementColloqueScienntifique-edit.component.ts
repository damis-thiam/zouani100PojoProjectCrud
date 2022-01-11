import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {EvenementColloqueScienntifiqueService} from '../../../controller/service/EvenementColloqueScienntifique.service';
import {EvenementColloqueScienntifiqueVo} from '../../../controller/model/EvenementColloqueScienntifique.model';
import {ModaliteVo} from '../../../controller/model/Modalite.model';
import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-evenementColloqueScienntifique-edit',
  templateUrl: './evenementColloqueScienntifique-edit.component.html',
  styleUrls: ['./evenementColloqueScienntifique-edit.component.css']
})
export class EvenementColloqueScienntifiqueEditComponent implements OnInit {
// declarations
 editEvenementColloqueScienntifiqueForm = new FormGroup({
          tempsEstime:new FormControl(0,[Validators.required]),
      typeDeParticipation: new FormControl("", [Validators.required]),
      intitule: new FormControl("", [Validators.required]),
          periodeEvenementAnnee:new FormControl(0,[Validators.required]),
          periodeEvenementMois:new FormControl(0,[Validators.required]),
          diplomatieScientifiques:new FormControl(0,[Validators.required]),
          volumeParticipant:new FormControl(0,[Validators.required]),
      financementEvenement: new FormControl("", [Validators.required]),
      typeEvenement: new FormControl("", [Validators.required]),
      partIrd: new FormControl("", [Validators.required]),
  }); 
constructor(private evenementColloqueScienntifiqueService: EvenementColloqueScienntifiqueService) { }
// methods 


  ngOnInit(): void {
    this.evenementColloqueScienntifiqueService.editEvenementColloqueScienntifique$.subscribe(value=>{
    if(value){
     this.editEvenementColloqueScienntifiqueForm.setValue({
          tempsEstime: this.selectedEvenementColloqueScienntifique.tempsEstime,
          typeDeParticipation: this.selectedEvenementColloqueScienntifique.typeDeParticipation,
          intitule: this.selectedEvenementColloqueScienntifique.intitule,
          periodeEvenementAnnee: this.selectedEvenementColloqueScienntifique.periodeEvenementAnnee,
          periodeEvenementMois: this.selectedEvenementColloqueScienntifique.periodeEvenementMois,
          diplomatieScientifiques: this.selectedEvenementColloqueScienntifique.diplomatieScientifiques,
          volumeParticipant: this.selectedEvenementColloqueScienntifique.volumeParticipant,
          financementEvenement: this.selectedEvenementColloqueScienntifique.financementEvenement,
          typeEvenement: this.selectedEvenementColloqueScienntifique.typeEvenement,
          partIrd: this.selectedEvenementColloqueScienntifique.partIrd,
    });
    }
  });
  }



public edit(){ 
    this.evenementColloqueScienntifiqueService.edit().subscribe(updatedEvenementColloqueScienntifique => {
          const indexOfUpdated = this.evenementColloqueScienntifiques.findIndex(
           (EvenementColloqueScienntifique) => EvenementColloqueScienntifique.id === updatedEvenementColloqueScienntifique.id
            );
            indexOfUpdated > -1 ? this.evenementColloqueScienntifiques[indexOfUpdated] = updatedEvenementColloqueScienntifique : false;
                });
                  this.editEvenementColloqueScienntifiqueDialog = false;
    this.selectedEvenementColloqueScienntifique = new EvenementColloqueScienntifiqueVo();
            }

  hideEditDialog(){
    this.editEvenementColloqueScienntifiqueDialog = false;
  }
   submit(){
                this.selectedEvenementColloqueScienntifique.tempsEstime = this.tempsEstime.value;
                this.selectedEvenementColloqueScienntifique.typeDeParticipation = this.typeDeParticipation.value;
                this.selectedEvenementColloqueScienntifique.intitule = this.intitule.value;
                this.selectedEvenementColloqueScienntifique.periodeEvenementAnnee = this.periodeEvenementAnnee.value;
                this.selectedEvenementColloqueScienntifique.periodeEvenementMois = this.periodeEvenementMois.value;
                this.selectedEvenementColloqueScienntifique.diplomatieScientifiques = this.diplomatieScientifiques.value;
                this.selectedEvenementColloqueScienntifique.volumeParticipant = this.volumeParticipant.value;
                this.selectedEvenementColloqueScienntifique.financementEvenement = this.financementEvenement.value;
                this.selectedEvenementColloqueScienntifique.typeEvenement = this.typeEvenement.value;
                this.selectedEvenementColloqueScienntifique.partIrd = this.partIrd.value;
    this.evenementColloqueScienntifiqueService.edit().subscribe(result=>{
        this.editEvenementColloqueScienntifiqueDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get tempsEstime() {
                 return this.editEvenementColloqueScienntifiqueForm.get('tempsEstime');
            }
            get typeDeParticipation() {
                 return this.editEvenementColloqueScienntifiqueForm.get('typeDeParticipation');
            }
            get intitule() {
                 return this.editEvenementColloqueScienntifiqueForm.get('intitule');
            }
            get periodeEvenementAnnee() {
                 return this.editEvenementColloqueScienntifiqueForm.get('periodeEvenementAnnee');
            }
            get periodeEvenementMois() {
                 return this.editEvenementColloqueScienntifiqueForm.get('periodeEvenementMois');
            }
            get diplomatieScientifiques() {
                 return this.editEvenementColloqueScienntifiqueForm.get('diplomatieScientifiques');
            }
            get volumeParticipant() {
                 return this.editEvenementColloqueScienntifiqueForm.get('volumeParticipant');
            }
            get financementEvenement() {
                 return this.editEvenementColloqueScienntifiqueForm.get('financementEvenement');
            }
            get typeEvenement() {
                 return this.editEvenementColloqueScienntifiqueForm.get('typeEvenement');
            }
            get partIrd() {
                 return this.editEvenementColloqueScienntifiqueForm.get('partIrd');
            }
 
  get evenementColloqueScienntifiques(): Array<EvenementColloqueScienntifiqueVo> {
    return this.evenementColloqueScienntifiqueService.evenementColloqueScienntifiques;
       }
  set evenementColloqueScienntifiques(value: Array<EvenementColloqueScienntifiqueVo>) {
        this.evenementColloqueScienntifiqueService.evenementColloqueScienntifiques = value;
       } 

  get selectedEvenementColloqueScienntifique():EvenementColloqueScienntifiqueVo {
           return this.evenementColloqueScienntifiqueService.selectedEvenementColloqueScienntifique;
       }
  set selectedEvenementColloqueScienntifique(value: EvenementColloqueScienntifiqueVo) {
        this.evenementColloqueScienntifiqueService.selectedEvenementColloqueScienntifique = value;
       }
  
  get editEvenementColloqueScienntifiqueDialog():boolean {
           return this.evenementColloqueScienntifiqueService.editEvenementColloqueScienntifiqueDialog;
       }
  set editEvenementColloqueScienntifiqueDialog(value: boolean) {
        this.evenementColloqueScienntifiqueService.editEvenementColloqueScienntifiqueDialog= value;
       }


}