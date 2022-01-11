import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {ProjetActiviteRechercheService} from '../../../controller/service/ProjetActiviteRecherche.service';
import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
import {RoleProjetVo} from '../../../controller/model/RoleProjet.model';
import {StatusProjetVo} from '../../../controller/model/StatusProjet.model';
import {FournisseurAppelProjetRechercheVo} from '../../../controller/model/FournisseurAppelProjetRecherche.model';
import {EtablissementProjetVo} from '../../../controller/model/EtablissementProjet.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-projetActiviteRecherche-edit',
  templateUrl: './projetActiviteRecherche-edit.component.html',
  styleUrls: ['./projetActiviteRecherche-edit.component.css']
})
export class ProjetActiviteRechercheEditComponent implements OnInit {
// declarations
 editProjetActiviteRechercheForm = new FormGroup({
          annee:new FormControl(0,[Validators.required]),
          tempsEstimePourCetteAnnne:new FormControl(0,[Validators.required]),
      IntituleSujetReponse: new FormControl("", [Validators.required]),
          dureeFinancementPrevuEnMois:new FormControl(0,[Validators.required]),
          montantFinancementPrevu:new FormControl(0,[Validators.required]),
          dureeFinancementAccordeEnMois:new FormControl(0,[Validators.required]),
          montantFinancementAccorde:new FormControl(0,[Validators.required]),
  }); 
constructor(private projetActiviteRechercheService: ProjetActiviteRechercheService) { }
// methods 


  ngOnInit(): void {
    this.projetActiviteRechercheService.editProjetActiviteRecherche$.subscribe(value=>{
    if(value){
     this.editProjetActiviteRechercheForm.setValue({
          annee: this.selectedProjetActiviteRecherche.annee,
          tempsEstimePourCetteAnnne: this.selectedProjetActiviteRecherche.tempsEstimePourCetteAnnne,
          IntituleSujetReponse: this.selectedProjetActiviteRecherche.IntituleSujetReponse,
          dureeFinancementPrevuEnMois: this.selectedProjetActiviteRecherche.dureeFinancementPrevuEnMois,
          montantFinancementPrevu: this.selectedProjetActiviteRecherche.montantFinancementPrevu,
          dureeFinancementAccordeEnMois: this.selectedProjetActiviteRecherche.dureeFinancementAccordeEnMois,
          montantFinancementAccorde: this.selectedProjetActiviteRecherche.montantFinancementAccorde,
    });
    }
  });
  }



public edit(){ 
    this.projetActiviteRechercheService.edit().subscribe(updatedProjetActiviteRecherche => {
          const indexOfUpdated = this.projetActiviteRecherches.findIndex(
           (ProjetActiviteRecherche) => ProjetActiviteRecherche.id === updatedProjetActiviteRecherche.id
            );
            indexOfUpdated > -1 ? this.projetActiviteRecherches[indexOfUpdated] = updatedProjetActiviteRecherche : false;
                });
                  this.editProjetActiviteRechercheDialog = false;
    this.selectedProjetActiviteRecherche = new ProjetActiviteRechercheVo();
            }

  hideEditDialog(){
    this.editProjetActiviteRechercheDialog = false;
  }
   submit(){
                this.selectedProjetActiviteRecherche.annee = this.annee.value;
                this.selectedProjetActiviteRecherche.tempsEstimePourCetteAnnne = this.tempsEstimePourCetteAnnne.value;
                this.selectedProjetActiviteRecherche.IntituleSujetReponse = this.IntituleSujetReponse.value;
                this.selectedProjetActiviteRecherche.dureeFinancementPrevuEnMois = this.dureeFinancementPrevuEnMois.value;
                this.selectedProjetActiviteRecherche.montantFinancementPrevu = this.montantFinancementPrevu.value;
                this.selectedProjetActiviteRecherche.dureeFinancementAccordeEnMois = this.dureeFinancementAccordeEnMois.value;
                this.selectedProjetActiviteRecherche.montantFinancementAccorde = this.montantFinancementAccorde.value;
    this.projetActiviteRechercheService.edit().subscribe(result=>{
        this.editProjetActiviteRechercheDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get annee() {
                 return this.editProjetActiviteRechercheForm.get('annee');
            }
            get tempsEstimePourCetteAnnne() {
                 return this.editProjetActiviteRechercheForm.get('tempsEstimePourCetteAnnne');
            }
            get IntituleSujetReponse() {
                 return this.editProjetActiviteRechercheForm.get('IntituleSujetReponse');
            }
            get dureeFinancementPrevuEnMois() {
                 return this.editProjetActiviteRechercheForm.get('dureeFinancementPrevuEnMois');
            }
            get montantFinancementPrevu() {
                 return this.editProjetActiviteRechercheForm.get('montantFinancementPrevu');
            }
            get dureeFinancementAccordeEnMois() {
                 return this.editProjetActiviteRechercheForm.get('dureeFinancementAccordeEnMois');
            }
            get montantFinancementAccorde() {
                 return this.editProjetActiviteRechercheForm.get('montantFinancementAccorde');
            }
 
  get projetActiviteRecherches(): Array<ProjetActiviteRechercheVo> {
    return this.projetActiviteRechercheService.projetActiviteRecherches;
       }
  set projetActiviteRecherches(value: Array<ProjetActiviteRechercheVo>) {
        this.projetActiviteRechercheService.projetActiviteRecherches = value;
       } 

  get selectedProjetActiviteRecherche():ProjetActiviteRechercheVo {
           return this.projetActiviteRechercheService.selectedProjetActiviteRecherche;
       }
  set selectedProjetActiviteRecherche(value: ProjetActiviteRechercheVo) {
        this.projetActiviteRechercheService.selectedProjetActiviteRecherche = value;
       }
  
  get editProjetActiviteRechercheDialog():boolean {
           return this.projetActiviteRechercheService.editProjetActiviteRechercheDialog;
       }
  set editProjetActiviteRechercheDialog(value: boolean) {
        this.projetActiviteRechercheService.editProjetActiviteRechercheDialog= value;
       }


}