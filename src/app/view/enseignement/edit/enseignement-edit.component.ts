import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {EnseignementService} from '../../../controller/service/Enseignement.service';
import {EnseignementVo} from '../../../controller/model/Enseignement.model';
import {TypeEnseignementDispenseVo} from '../../../controller/model/TypeEnseignementDispense.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-enseignement-edit',
  templateUrl: './enseignement-edit.component.html',
  styleUrls: ['./enseignement-edit.component.css']
})
export class EnseignementEditComponent implements OnInit {
// declarations
 editEnseignementForm = new FormGroup({
          annee:new FormControl(0,[Validators.required]),
          tempsEstimePourCetteAnnne:new FormControl(0,[Validators.required]),
          nombreHeureDispenseesDansAnnee:new FormControl(0,[Validators.required]),
      denominationEnseignement: new FormControl("", [Validators.required]),
  }); 
constructor(private enseignementService: EnseignementService) { }
// methods 


  ngOnInit(): void {
    this.enseignementService.editEnseignement$.subscribe(value=>{
    if(value){
     this.editEnseignementForm.setValue({
          annee: this.selectedEnseignement.annee,
          tempsEstimePourCetteAnnne: this.selectedEnseignement.tempsEstimePourCetteAnnne,
          nombreHeureDispenseesDansAnnee: this.selectedEnseignement.nombreHeureDispenseesDansAnnee,
          denominationEnseignement: this.selectedEnseignement.denominationEnseignement,
    });
    }
  });
  }



public edit(){ 
    this.enseignementService.edit().subscribe(updatedEnseignement => {
          const indexOfUpdated = this.enseignements.findIndex(
           (Enseignement) => Enseignement.id === updatedEnseignement.id
            );
            indexOfUpdated > -1 ? this.enseignements[indexOfUpdated] = updatedEnseignement : false;
                });
                  this.editEnseignementDialog = false;
    this.selectedEnseignement = new EnseignementVo();
            }

  hideEditDialog(){
    this.editEnseignementDialog = false;
  }
   submit(){
                this.selectedEnseignement.annee = this.annee.value;
                this.selectedEnseignement.tempsEstimePourCetteAnnne = this.tempsEstimePourCetteAnnne.value;
                this.selectedEnseignement.nombreHeureDispenseesDansAnnee = this.nombreHeureDispenseesDansAnnee.value;
                this.selectedEnseignement.denominationEnseignement = this.denominationEnseignement.value;
    this.enseignementService.edit().subscribe(result=>{
        this.editEnseignementDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get annee() {
                 return this.editEnseignementForm.get('annee');
            }
            get tempsEstimePourCetteAnnne() {
                 return this.editEnseignementForm.get('tempsEstimePourCetteAnnne');
            }
            get nombreHeureDispenseesDansAnnee() {
                 return this.editEnseignementForm.get('nombreHeureDispenseesDansAnnee');
            }
            get denominationEnseignement() {
                 return this.editEnseignementForm.get('denominationEnseignement');
            }
 
  get enseignements(): Array<EnseignementVo> {
    return this.enseignementService.enseignements;
       }
  set enseignements(value: Array<EnseignementVo>) {
        this.enseignementService.enseignements = value;
       } 

  get selectedEnseignement():EnseignementVo {
           return this.enseignementService.selectedEnseignement;
       }
  set selectedEnseignement(value: EnseignementVo) {
        this.enseignementService.selectedEnseignement = value;
       }
  
  get editEnseignementDialog():boolean {
           return this.enseignementService.editEnseignementDialog;
       }
  set editEnseignementDialog(value: boolean) {
        this.enseignementService.editEnseignementDialog= value;
       }


}