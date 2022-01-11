import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {ChercheurService} from '../../../controller/service/Chercheur.service';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';
import {TypeEntiteAdministrativeVo} from '../../../controller/model/TypeEntiteAdministrative.model';
import {EntiteAdministrativeVo} from '../../../controller/model/EntiteAdministrative.model';
import {DepartementScientifiqueVo} from '../../../controller/model/DepartementScientifique.model';
import {SexeVo} from '../../../controller/model/Sexe.model';
import {GradeVo} from '../../../controller/model/Grade.model';
import {CorpsVo} from '../../../controller/model/Corps.model';
import {CommissionScientifiqueVo} from '../../../controller/model/CommissionScientifique.model';

@Component({
  selector: 'app-chercheur-edit',
  templateUrl: './chercheur-edit.component.html',
  styleUrls: ['./chercheur-edit.component.css']
})
export class ChercheurEditComponent implements OnInit {
// declarations
 editChercheurForm = new FormGroup({
      numeroMatricule: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      nom: new FormControl("", [Validators.required]),
      prenom: new FormControl("", [Validators.required]),
      affectationGeographiquePays: new FormControl("", [Validators.required]),
      affectationGeographiqueVille: new FormControl("", [Validators.required]),
      natureImplication: new FormControl("", [Validators.required]),
      resume: new FormControl("", [Validators.required]),
          formationEnManagement:new FormControl(0,[Validators.required]),
  }); 
constructor(private chercheurService: ChercheurService) { }
// methods 


  ngOnInit(): void {
    this.chercheurService.editChercheur$.subscribe(value=>{
    if(value){
     this.editChercheurForm.setValue({
          numeroMatricule: this.selectedChercheur.numeroMatricule,
          email: this.selectedChercheur.email,
          nom: this.selectedChercheur.nom,
          prenom: this.selectedChercheur.prenom,
          affectationGeographiquePays: this.selectedChercheur.affectationGeographiquePays,
          affectationGeographiqueVille: this.selectedChercheur.affectationGeographiqueVille,
          natureImplication: this.selectedChercheur.natureImplication,
          resume: this.selectedChercheur.resume,
          formationEnManagement: this.selectedChercheur.formationEnManagement,
    });
    }
  });
  }



public edit(){ 
    this.chercheurService.edit().subscribe(updatedChercheur => {
          const indexOfUpdated = this.chercheurs.findIndex(
           (Chercheur) => Chercheur.id === updatedChercheur.id
            );
            indexOfUpdated > -1 ? this.chercheurs[indexOfUpdated] = updatedChercheur : false;
                });
                  this.editChercheurDialog = false;
    this.selectedChercheur = new ChercheurVo();
            }

  hideEditDialog(){
    this.editChercheurDialog = false;
  }
   submit(){
                this.selectedChercheur.numeroMatricule = this.numeroMatricule.value;
                this.selectedChercheur.email = this.email.value;
                this.selectedChercheur.nom = this.nom.value;
                this.selectedChercheur.prenom = this.prenom.value;
                this.selectedChercheur.affectationGeographiquePays = this.affectationGeographiquePays.value;
                this.selectedChercheur.affectationGeographiqueVille = this.affectationGeographiqueVille.value;
                this.selectedChercheur.natureImplication = this.natureImplication.value;
                this.selectedChercheur.resume = this.resume.value;
                this.selectedChercheur.formationEnManagement = this.formationEnManagement.value;
    this.chercheurService.edit().subscribe(result=>{
        this.editChercheurDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get numeroMatricule() {
                 return this.editChercheurForm.get('numeroMatricule');
            }
            get email() {
                 return this.editChercheurForm.get('email');
            }
            get nom() {
                 return this.editChercheurForm.get('nom');
            }
            get prenom() {
                 return this.editChercheurForm.get('prenom');
            }
            get affectationGeographiquePays() {
                 return this.editChercheurForm.get('affectationGeographiquePays');
            }
            get affectationGeographiqueVille() {
                 return this.editChercheurForm.get('affectationGeographiqueVille');
            }
            get natureImplication() {
                 return this.editChercheurForm.get('natureImplication');
            }
            get resume() {
                 return this.editChercheurForm.get('resume');
            }
            get formationEnManagement() {
                 return this.editChercheurForm.get('formationEnManagement');
            }
 
  get chercheurs(): Array<ChercheurVo> {
    return this.chercheurService.chercheurs;
       }
  set chercheurs(value: Array<ChercheurVo>) {
        this.chercheurService.chercheurs = value;
       } 

  get selectedChercheur():ChercheurVo {
           return this.chercheurService.selectedChercheur;
       }
  set selectedChercheur(value: ChercheurVo) {
        this.chercheurService.selectedChercheur = value;
       }
  
  get editChercheurDialog():boolean {
           return this.chercheurService.editChercheurDialog;
       }
  set editChercheurDialog(value: boolean) {
        this.chercheurService.editChercheurDialog= value;
       }


}