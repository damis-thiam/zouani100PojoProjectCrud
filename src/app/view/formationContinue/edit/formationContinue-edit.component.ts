import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {FormationContinueService} from '../../../controller/service/FormationContinue.service';
import {FormationContinueVo} from '../../../controller/model/FormationContinue.model';
import {OutilFormationContinueVo} from '../../../controller/model/OutilFormationContinue.model';
import {ModaliteFormationContinueVo} from '../../../controller/model/ModaliteFormationContinue.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-formationContinue-edit',
  templateUrl: './formationContinue-edit.component.html',
  styleUrls: ['./formationContinue-edit.component.css']
})
export class FormationContinueEditComponent implements OnInit {
// declarations
 editFormationContinueForm = new FormGroup({
          annee:new FormControl(0,[Validators.required]),
          tempsEstimePourCetteAnnne:new FormControl(0,[Validators.required]),
      intituleExact: new FormControl("", [Validators.required]),
          nombreHeuresDispenseesDansAnnee:new FormControl(0,[Validators.required]),
  }); 
constructor(private formationContinueService: FormationContinueService) { }
// methods 


  ngOnInit(): void {
    this.formationContinueService.editFormationContinue$.subscribe(value=>{
    if(value){
     this.editFormationContinueForm.setValue({
          annee: this.selectedFormationContinue.annee,
          tempsEstimePourCetteAnnne: this.selectedFormationContinue.tempsEstimePourCetteAnnne,
          intituleExact: this.selectedFormationContinue.intituleExact,
          nombreHeuresDispenseesDansAnnee: this.selectedFormationContinue.nombreHeuresDispenseesDansAnnee,
    });
    }
  });
  }



public edit(){ 
    this.formationContinueService.edit().subscribe(updatedFormationContinue => {
          const indexOfUpdated = this.formationContinues.findIndex(
           (FormationContinue) => FormationContinue.id === updatedFormationContinue.id
            );
            indexOfUpdated > -1 ? this.formationContinues[indexOfUpdated] = updatedFormationContinue : false;
                });
                  this.editFormationContinueDialog = false;
    this.selectedFormationContinue = new FormationContinueVo();
            }

  hideEditDialog(){
    this.editFormationContinueDialog = false;
  }
   submit(){
                this.selectedFormationContinue.annee = this.annee.value;
                this.selectedFormationContinue.tempsEstimePourCetteAnnne = this.tempsEstimePourCetteAnnne.value;
                this.selectedFormationContinue.intituleExact = this.intituleExact.value;
                this.selectedFormationContinue.nombreHeuresDispenseesDansAnnee = this.nombreHeuresDispenseesDansAnnee.value;
    this.formationContinueService.edit().subscribe(result=>{
        this.editFormationContinueDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get annee() {
                 return this.editFormationContinueForm.get('annee');
            }
            get tempsEstimePourCetteAnnne() {
                 return this.editFormationContinueForm.get('tempsEstimePourCetteAnnne');
            }
            get intituleExact() {
                 return this.editFormationContinueForm.get('intituleExact');
            }
            get nombreHeuresDispenseesDansAnnee() {
                 return this.editFormationContinueForm.get('nombreHeuresDispenseesDansAnnee');
            }
 
  get formationContinues(): Array<FormationContinueVo> {
    return this.formationContinueService.formationContinues;
       }
  set formationContinues(value: Array<FormationContinueVo>) {
        this.formationContinueService.formationContinues = value;
       } 

  get selectedFormationContinue():FormationContinueVo {
           return this.formationContinueService.selectedFormationContinue;
       }
  set selectedFormationContinue(value: FormationContinueVo) {
        this.formationContinueService.selectedFormationContinue = value;
       }
  
  get editFormationContinueDialog():boolean {
           return this.formationContinueService.editFormationContinueDialog;
       }
  set editFormationContinueDialog(value: boolean) {
        this.formationContinueService.editFormationContinueDialog= value;
       }


}