import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {DirectionEncadrementDoctorantService} from '../../../controller/service/DirectionEncadrementDoctorant.service';
import {DirectionEncadrementDoctorantVo} from '../../../controller/model/DirectionEncadrementDoctorant.model';
import {FinancementDoctorantVo} from '../../../controller/model/FinancementDoctorant.model';
import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
import {DoctorantVo} from '../../../controller/model/Doctorant.model';
import {ResponsabiliteDirectionEncadrementDoctorantVo} from '../../../controller/model/ResponsabiliteDirectionEncadrementDoctorant.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';
import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-directionEncadrementDoctorant-edit',
  templateUrl: './directionEncadrementDoctorant-edit.component.html',
  styleUrls: ['./directionEncadrementDoctorant-edit.component.css']
})
export class DirectionEncadrementDoctorantEditComponent implements OnInit {
// declarations
 editDirectionEncadrementDoctorantForm = new FormGroup({
          annee:new FormControl(0,[Validators.required]),
          tempsEstimePourCetteAnnne:new FormControl(0,[Validators.required]),
      sujetThese: new FormControl("", [Validators.required]),
      dateDebutThese: new FormControl(new Date(), [Validators.required]),
      datePrevuSoutenanceThese: new FormControl(new Date(), [Validators.required]),
          codirectionInternationale:new FormControl(0,[Validators.required]),
      intituleEd: new FormControl("", [Validators.required]),
      numeroEd: new FormControl("", [Validators.required]),
  }); 
constructor(private directionEncadrementDoctorantService: DirectionEncadrementDoctorantService) { }
// methods 


  ngOnInit(): void {
    this.directionEncadrementDoctorantService.editDirectionEncadrementDoctorant$.subscribe(value=>{
    if(value){
     this.editDirectionEncadrementDoctorantForm.setValue({
          annee: this.selectedDirectionEncadrementDoctorant.annee,
          tempsEstimePourCetteAnnne: this.selectedDirectionEncadrementDoctorant.tempsEstimePourCetteAnnne,
          sujetThese: this.selectedDirectionEncadrementDoctorant.sujetThese,
         dateDebutThese: moment(this.selectedDirectionEncadrementDoctorant.dateDebutThese).toDate(),
         datePrevuSoutenanceThese: moment(this.selectedDirectionEncadrementDoctorant.datePrevuSoutenanceThese).toDate(),
          codirectionInternationale: this.selectedDirectionEncadrementDoctorant.codirectionInternationale,
          intituleEd: this.selectedDirectionEncadrementDoctorant.intituleEd,
          numeroEd: this.selectedDirectionEncadrementDoctorant.numeroEd,
    });
    }
  });
  }



public edit(){ 
    this.directionEncadrementDoctorantService.edit().subscribe(updatedDirectionEncadrementDoctorant => {
          const indexOfUpdated = this.directionEncadrementDoctorants.findIndex(
           (DirectionEncadrementDoctorant) => DirectionEncadrementDoctorant.id === updatedDirectionEncadrementDoctorant.id
            );
            indexOfUpdated > -1 ? this.directionEncadrementDoctorants[indexOfUpdated] = updatedDirectionEncadrementDoctorant : false;
                });
                  this.editDirectionEncadrementDoctorantDialog = false;
    this.selectedDirectionEncadrementDoctorant = new DirectionEncadrementDoctorantVo();
            }

  hideEditDialog(){
    this.editDirectionEncadrementDoctorantDialog = false;
  }
   submit(){
                this.selectedDirectionEncadrementDoctorant.annee = this.annee.value;
                this.selectedDirectionEncadrementDoctorant.tempsEstimePourCetteAnnne = this.tempsEstimePourCetteAnnne.value;
                this.selectedDirectionEncadrementDoctorant.sujetThese = this.sujetThese.value;
                this.selectedDirectionEncadrementDoctorant.dateDebutThese = moment(this.dateDebutThese.value).format("YYYY-MM-DD");
                this.selectedDirectionEncadrementDoctorant.datePrevuSoutenanceThese = moment(this.datePrevuSoutenanceThese.value).format("YYYY-MM-DD");
                this.selectedDirectionEncadrementDoctorant.codirectionInternationale = this.codirectionInternationale.value;
                this.selectedDirectionEncadrementDoctorant.intituleEd = this.intituleEd.value;
                this.selectedDirectionEncadrementDoctorant.numeroEd = this.numeroEd.value;
    this.directionEncadrementDoctorantService.edit().subscribe(result=>{
        this.editDirectionEncadrementDoctorantDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get annee() {
                 return this.editDirectionEncadrementDoctorantForm.get('annee');
            }
            get tempsEstimePourCetteAnnne() {
                 return this.editDirectionEncadrementDoctorantForm.get('tempsEstimePourCetteAnnne');
            }
            get sujetThese() {
                 return this.editDirectionEncadrementDoctorantForm.get('sujetThese');
            }
            get dateDebutThese() {
                 return this.editDirectionEncadrementDoctorantForm.get('dateDebutThese');
            }
            get datePrevuSoutenanceThese() {
                 return this.editDirectionEncadrementDoctorantForm.get('datePrevuSoutenanceThese');
            }
            get codirectionInternationale() {
                 return this.editDirectionEncadrementDoctorantForm.get('codirectionInternationale');
            }
            get intituleEd() {
                 return this.editDirectionEncadrementDoctorantForm.get('intituleEd');
            }
            get numeroEd() {
                 return this.editDirectionEncadrementDoctorantForm.get('numeroEd');
            }
 
  get directionEncadrementDoctorants(): Array<DirectionEncadrementDoctorantVo> {
    return this.directionEncadrementDoctorantService.directionEncadrementDoctorants;
       }
  set directionEncadrementDoctorants(value: Array<DirectionEncadrementDoctorantVo>) {
        this.directionEncadrementDoctorantService.directionEncadrementDoctorants = value;
       } 

  get selectedDirectionEncadrementDoctorant():DirectionEncadrementDoctorantVo {
           return this.directionEncadrementDoctorantService.selectedDirectionEncadrementDoctorant;
       }
  set selectedDirectionEncadrementDoctorant(value: DirectionEncadrementDoctorantVo) {
        this.directionEncadrementDoctorantService.selectedDirectionEncadrementDoctorant = value;
       }
  
  get editDirectionEncadrementDoctorantDialog():boolean {
           return this.directionEncadrementDoctorantService.editDirectionEncadrementDoctorantDialog;
       }
  set editDirectionEncadrementDoctorantDialog(value: boolean) {
        this.directionEncadrementDoctorantService.editDirectionEncadrementDoctorantDialog= value;
       }


}