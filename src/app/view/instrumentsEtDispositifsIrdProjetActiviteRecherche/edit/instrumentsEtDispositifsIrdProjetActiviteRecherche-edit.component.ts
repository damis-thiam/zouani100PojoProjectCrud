import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {InstrumentsEtDispositifsIrdProjetActiviteRechercheService} from '../../../controller/service/InstrumentsEtDispositifsIrdProjetActiviteRecherche.service';
import {InstrumentsEtDispositifsIrdProjetActiviteRechercheVo} from '../../../controller/model/InstrumentsEtDispositifsIrdProjetActiviteRecherche.model';
import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
import {InstrumentsEtDispositifsIrdVo} from '../../../controller/model/InstrumentsEtDispositifsIrd.model';

@Component({
  selector: 'app-instrumentsEtDispositifsIrdProjetActiviteRecherche-edit',
  templateUrl: './instrumentsEtDispositifsIrdProjetActiviteRecherche-edit.component.html',
  styleUrls: ['./instrumentsEtDispositifsIrdProjetActiviteRecherche-edit.component.css']
})
export class InstrumentsEtDispositifsIrdProjetActiviteRechercheEditComponent implements OnInit {
// declarations
 editInstrumentsEtDispositifsIrdProjetActiviteRechercheForm = new FormGroup({
  }); 
constructor(private instrumentsEtDispositifsIrdProjetActiviteRechercheService: InstrumentsEtDispositifsIrdProjetActiviteRechercheService) { }
// methods 


  ngOnInit(): void {
    this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.editInstrumentsEtDispositifsIrdProjetActiviteRecherche$.subscribe(value=>{
    if(value){
     this.editInstrumentsEtDispositifsIrdProjetActiviteRechercheForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.edit().subscribe(updatedInstrumentsEtDispositifsIrdProjetActiviteRecherche => {
          const indexOfUpdated = this.instrumentsEtDispositifsIrdProjetActiviteRecherches.findIndex(
           (InstrumentsEtDispositifsIrdProjetActiviteRecherche) => InstrumentsEtDispositifsIrdProjetActiviteRecherche.id === updatedInstrumentsEtDispositifsIrdProjetActiviteRecherche.id
            );
            indexOfUpdated > -1 ? this.instrumentsEtDispositifsIrdProjetActiviteRecherches[indexOfUpdated] = updatedInstrumentsEtDispositifsIrdProjetActiviteRecherche : false;
                });
                  this.editInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog = false;
    this.selectedInstrumentsEtDispositifsIrdProjetActiviteRecherche = new InstrumentsEtDispositifsIrdProjetActiviteRechercheVo();
            }

  hideEditDialog(){
    this.editInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog = false;
  }
   submit(){
    this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.edit().subscribe(result=>{
        this.editInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get instrumentsEtDispositifsIrdProjetActiviteRecherches(): Array<InstrumentsEtDispositifsIrdProjetActiviteRechercheVo> {
    return this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.instrumentsEtDispositifsIrdProjetActiviteRecherches;
       }
  set instrumentsEtDispositifsIrdProjetActiviteRecherches(value: Array<InstrumentsEtDispositifsIrdProjetActiviteRechercheVo>) {
        this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.instrumentsEtDispositifsIrdProjetActiviteRecherches = value;
       } 

  get selectedInstrumentsEtDispositifsIrdProjetActiviteRecherche():InstrumentsEtDispositifsIrdProjetActiviteRechercheVo {
           return this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.selectedInstrumentsEtDispositifsIrdProjetActiviteRecherche;
       }
  set selectedInstrumentsEtDispositifsIrdProjetActiviteRecherche(value: InstrumentsEtDispositifsIrdProjetActiviteRechercheVo) {
        this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.selectedInstrumentsEtDispositifsIrdProjetActiviteRecherche = value;
       }
  
  get editInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog():boolean {
           return this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.editInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog;
       }
  set editInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog(value: boolean) {
        this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.editInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog= value;
       }


}