import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {EncadrementEtudiantService} from '../../../controller/service/EncadrementEtudiant.service';
import {EncadrementEtudiantVo} from '../../../controller/model/EncadrementEtudiant.model';
import {EvaluationEncadrementVo} from '../../../controller/model/EvaluationEncadrement.model';
import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
import {EtudiantVo} from '../../../controller/model/Etudiant.model';
import {ResponsabiliteEncadrementEtudiantVo} from '../../../controller/model/ResponsabiliteEncadrementEtudiant.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import {EtablissementPartenaireVo} from '../../../controller/model/EtablissementPartenaire.model';

@Component({
  selector: 'app-encadrementEtudiant-edit',
  templateUrl: './encadrementEtudiant-edit.component.html',
  styleUrls: ['./encadrementEtudiant-edit.component.css']
})
export class EncadrementEtudiantEditComponent implements OnInit {
// declarations
 editEncadrementEtudiantForm = new FormGroup({
          annee:new FormControl(0,[Validators.required]),
          tempsEstimePourCetteAnnne:new FormControl(0,[Validators.required]),
      sujetEtude: new FormControl("", [Validators.required]),
          codirectionInternationale:new FormControl(0,[Validators.required]),
      cursus: new FormControl("", [Validators.required]),
  }); 
constructor(private encadrementEtudiantService: EncadrementEtudiantService) { }
// methods 


  ngOnInit(): void {
    this.encadrementEtudiantService.editEncadrementEtudiant$.subscribe(value=>{
    if(value){
     this.editEncadrementEtudiantForm.setValue({
          annee: this.selectedEncadrementEtudiant.annee,
          tempsEstimePourCetteAnnne: this.selectedEncadrementEtudiant.tempsEstimePourCetteAnnne,
          sujetEtude: this.selectedEncadrementEtudiant.sujetEtude,
          codirectionInternationale: this.selectedEncadrementEtudiant.codirectionInternationale,
          cursus: this.selectedEncadrementEtudiant.cursus,
    });
    }
  });
  }



public edit(){ 
    this.encadrementEtudiantService.edit().subscribe(updatedEncadrementEtudiant => {
          const indexOfUpdated = this.encadrementEtudiants.findIndex(
           (EncadrementEtudiant) => EncadrementEtudiant.id === updatedEncadrementEtudiant.id
            );
            indexOfUpdated > -1 ? this.encadrementEtudiants[indexOfUpdated] = updatedEncadrementEtudiant : false;
                });
                  this.editEncadrementEtudiantDialog = false;
    this.selectedEncadrementEtudiant = new EncadrementEtudiantVo();
            }

  hideEditDialog(){
    this.editEncadrementEtudiantDialog = false;
  }
   submit(){
                this.selectedEncadrementEtudiant.annee = this.annee.value;
                this.selectedEncadrementEtudiant.tempsEstimePourCetteAnnne = this.tempsEstimePourCetteAnnne.value;
                this.selectedEncadrementEtudiant.sujetEtude = this.sujetEtude.value;
                this.selectedEncadrementEtudiant.codirectionInternationale = this.codirectionInternationale.value;
                this.selectedEncadrementEtudiant.cursus = this.cursus.value;
    this.encadrementEtudiantService.edit().subscribe(result=>{
        this.editEncadrementEtudiantDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get annee() {
                 return this.editEncadrementEtudiantForm.get('annee');
            }
            get tempsEstimePourCetteAnnne() {
                 return this.editEncadrementEtudiantForm.get('tempsEstimePourCetteAnnne');
            }
            get sujetEtude() {
                 return this.editEncadrementEtudiantForm.get('sujetEtude');
            }
            get codirectionInternationale() {
                 return this.editEncadrementEtudiantForm.get('codirectionInternationale');
            }
            get cursus() {
                 return this.editEncadrementEtudiantForm.get('cursus');
            }
 
  get encadrementEtudiants(): Array<EncadrementEtudiantVo> {
    return this.encadrementEtudiantService.encadrementEtudiants;
       }
  set encadrementEtudiants(value: Array<EncadrementEtudiantVo>) {
        this.encadrementEtudiantService.encadrementEtudiants = value;
       } 

  get selectedEncadrementEtudiant():EncadrementEtudiantVo {
           return this.encadrementEtudiantService.selectedEncadrementEtudiant;
       }
  set selectedEncadrementEtudiant(value: EncadrementEtudiantVo) {
        this.encadrementEtudiantService.selectedEncadrementEtudiant = value;
       }
  
  get editEncadrementEtudiantDialog():boolean {
           return this.encadrementEtudiantService.editEncadrementEtudiantDialog;
       }
  set editEncadrementEtudiantDialog(value: boolean) {
        this.encadrementEtudiantService.editEncadrementEtudiantDialog= value;
       }


}