import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {GestionEquipeService} from '../../../controller/service/GestionEquipe.service';
import {GestionEquipeVo} from '../../../controller/model/GestionEquipe.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-gestionEquipe-edit',
  templateUrl: './gestionEquipe-edit.component.html',
  styleUrls: ['./gestionEquipe-edit.component.css']
})
export class GestionEquipeEditComponent implements OnInit {
// declarations
 editGestionEquipeForm = new FormGroup({
          annee:new FormControl(0,[Validators.required]),
          tempsEstimePourCetteAnnne:new FormControl(0,[Validators.required]),
          nombrePersonneHorsEtudiantEtDoctorant:new FormControl(0,[Validators.required]),
          nombrePersonneMemeNonIrd:new FormControl(0,[Validators.required]),
          nombrePersonneMemeSousConventionsOuContratProjet:new FormControl(0,[Validators.required]),
  }); 
constructor(private gestionEquipeService: GestionEquipeService) { }
// methods 


  ngOnInit(): void {
    this.gestionEquipeService.editGestionEquipe$.subscribe(value=>{
    if(value){
     this.editGestionEquipeForm.setValue({
          annee: this.selectedGestionEquipe.annee,
          tempsEstimePourCetteAnnne: this.selectedGestionEquipe.tempsEstimePourCetteAnnne,
          nombrePersonneHorsEtudiantEtDoctorant: this.selectedGestionEquipe.nombrePersonneHorsEtudiantEtDoctorant,
          nombrePersonneMemeNonIrd: this.selectedGestionEquipe.nombrePersonneMemeNonIrd,
          nombrePersonneMemeSousConventionsOuContratProjet: this.selectedGestionEquipe.nombrePersonneMemeSousConventionsOuContratProjet,
    });
    }
  });
  }



public edit(){ 
    this.gestionEquipeService.edit().subscribe(updatedGestionEquipe => {
          const indexOfUpdated = this.gestionEquipes.findIndex(
           (GestionEquipe) => GestionEquipe.id === updatedGestionEquipe.id
            );
            indexOfUpdated > -1 ? this.gestionEquipes[indexOfUpdated] = updatedGestionEquipe : false;
                });
                  this.editGestionEquipeDialog = false;
    this.selectedGestionEquipe = new GestionEquipeVo();
            }

  hideEditDialog(){
    this.editGestionEquipeDialog = false;
  }
   submit(){
                this.selectedGestionEquipe.annee = this.annee.value;
                this.selectedGestionEquipe.tempsEstimePourCetteAnnne = this.tempsEstimePourCetteAnnne.value;
                this.selectedGestionEquipe.nombrePersonneHorsEtudiantEtDoctorant = this.nombrePersonneHorsEtudiantEtDoctorant.value;
                this.selectedGestionEquipe.nombrePersonneMemeNonIrd = this.nombrePersonneMemeNonIrd.value;
                this.selectedGestionEquipe.nombrePersonneMemeSousConventionsOuContratProjet = this.nombrePersonneMemeSousConventionsOuContratProjet.value;
    this.gestionEquipeService.edit().subscribe(result=>{
        this.editGestionEquipeDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get annee() {
                 return this.editGestionEquipeForm.get('annee');
            }
            get tempsEstimePourCetteAnnne() {
                 return this.editGestionEquipeForm.get('tempsEstimePourCetteAnnne');
            }
            get nombrePersonneHorsEtudiantEtDoctorant() {
                 return this.editGestionEquipeForm.get('nombrePersonneHorsEtudiantEtDoctorant');
            }
            get nombrePersonneMemeNonIrd() {
                 return this.editGestionEquipeForm.get('nombrePersonneMemeNonIrd');
            }
            get nombrePersonneMemeSousConventionsOuContratProjet() {
                 return this.editGestionEquipeForm.get('nombrePersonneMemeSousConventionsOuContratProjet');
            }
 
  get gestionEquipes(): Array<GestionEquipeVo> {
    return this.gestionEquipeService.gestionEquipes;
       }
  set gestionEquipes(value: Array<GestionEquipeVo>) {
        this.gestionEquipeService.gestionEquipes = value;
       } 

  get selectedGestionEquipe():GestionEquipeVo {
           return this.gestionEquipeService.selectedGestionEquipe;
       }
  set selectedGestionEquipe(value: GestionEquipeVo) {
        this.gestionEquipeService.selectedGestionEquipe = value;
       }
  
  get editGestionEquipeDialog():boolean {
           return this.gestionEquipeService.editGestionEquipeDialog;
       }
  set editGestionEquipeDialog(value: boolean) {
        this.gestionEquipeService.editGestionEquipeDialog= value;
       }


}