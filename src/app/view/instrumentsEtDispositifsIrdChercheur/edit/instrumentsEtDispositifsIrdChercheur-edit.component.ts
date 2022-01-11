import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {InstrumentsEtDispositifsIrdChercheurService} from '../../../controller/service/InstrumentsEtDispositifsIrdChercheur.service';
import {InstrumentsEtDispositifsIrdChercheurVo} from '../../../controller/model/InstrumentsEtDispositifsIrdChercheur.model';
import {TypeInstrumentsEtDispositifsIrdVo} from '../../../controller/model/TypeInstrumentsEtDispositifsIrd.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-instrumentsEtDispositifsIrdChercheur-edit',
  templateUrl: './instrumentsEtDispositifsIrdChercheur-edit.component.html',
  styleUrls: ['./instrumentsEtDispositifsIrdChercheur-edit.component.css']
})
export class InstrumentsEtDispositifsIrdChercheurEditComponent implements OnInit {
// declarations
 editInstrumentsEtDispositifsIrdChercheurForm = new FormGroup({
  }); 
constructor(private instrumentsEtDispositifsIrdChercheurService: InstrumentsEtDispositifsIrdChercheurService) { }
// methods 


  ngOnInit(): void {
    this.instrumentsEtDispositifsIrdChercheurService.editInstrumentsEtDispositifsIrdChercheur$.subscribe(value=>{
    if(value){
     this.editInstrumentsEtDispositifsIrdChercheurForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.instrumentsEtDispositifsIrdChercheurService.edit().subscribe(updatedInstrumentsEtDispositifsIrdChercheur => {
          const indexOfUpdated = this.instrumentsEtDispositifsIrdChercheurs.findIndex(
           (InstrumentsEtDispositifsIrdChercheur) => InstrumentsEtDispositifsIrdChercheur.id === updatedInstrumentsEtDispositifsIrdChercheur.id
            );
            indexOfUpdated > -1 ? this.instrumentsEtDispositifsIrdChercheurs[indexOfUpdated] = updatedInstrumentsEtDispositifsIrdChercheur : false;
                });
                  this.editInstrumentsEtDispositifsIrdChercheurDialog = false;
    this.selectedInstrumentsEtDispositifsIrdChercheur = new InstrumentsEtDispositifsIrdChercheurVo();
            }

  hideEditDialog(){
    this.editInstrumentsEtDispositifsIrdChercheurDialog = false;
  }
   submit(){
    this.instrumentsEtDispositifsIrdChercheurService.edit().subscribe(result=>{
        this.editInstrumentsEtDispositifsIrdChercheurDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get instrumentsEtDispositifsIrdChercheurs(): Array<InstrumentsEtDispositifsIrdChercheurVo> {
    return this.instrumentsEtDispositifsIrdChercheurService.instrumentsEtDispositifsIrdChercheurs;
       }
  set instrumentsEtDispositifsIrdChercheurs(value: Array<InstrumentsEtDispositifsIrdChercheurVo>) {
        this.instrumentsEtDispositifsIrdChercheurService.instrumentsEtDispositifsIrdChercheurs = value;
       } 

  get selectedInstrumentsEtDispositifsIrdChercheur():InstrumentsEtDispositifsIrdChercheurVo {
           return this.instrumentsEtDispositifsIrdChercheurService.selectedInstrumentsEtDispositifsIrdChercheur;
       }
  set selectedInstrumentsEtDispositifsIrdChercheur(value: InstrumentsEtDispositifsIrdChercheurVo) {
        this.instrumentsEtDispositifsIrdChercheurService.selectedInstrumentsEtDispositifsIrdChercheur = value;
       }
  
  get editInstrumentsEtDispositifsIrdChercheurDialog():boolean {
           return this.instrumentsEtDispositifsIrdChercheurService.editInstrumentsEtDispositifsIrdChercheurDialog;
       }
  set editInstrumentsEtDispositifsIrdChercheurDialog(value: boolean) {
        this.instrumentsEtDispositifsIrdChercheurService.editInstrumentsEtDispositifsIrdChercheurDialog= value;
       }


}