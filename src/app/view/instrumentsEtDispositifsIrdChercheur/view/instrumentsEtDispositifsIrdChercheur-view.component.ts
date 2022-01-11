import {Component, OnInit} from '@angular/core';
import {InstrumentsEtDispositifsIrdChercheurService} from '../../../controller/service/InstrumentsEtDispositifsIrdChercheur.service';
import {InstrumentsEtDispositifsIrdChercheurVo} from '../../../controller/model/InstrumentsEtDispositifsIrdChercheur.model';
import {TypeInstrumentsEtDispositifsIrdVo} from '../../../controller/model/TypeInstrumentsEtDispositifsIrd.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-instrumentsEtDispositifsIrdChercheur-view',
  templateUrl: './instrumentsEtDispositifsIrdChercheur-view.component.html',
  styleUrls: ['./instrumentsEtDispositifsIrdChercheur-view.component.css']
})
export class InstrumentsEtDispositifsIrdChercheurViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private instrumentsEtDispositifsIrdChercheurService: InstrumentsEtDispositifsIrdChercheurService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewInstrumentsEtDispositifsIrdChercheurDialog = false;
    } 



   // getters and setters
    get viewInstrumentsEtDispositifsIrdChercheurDialog():boolean {
        return this.instrumentsEtDispositifsIrdChercheurService.viewInstrumentsEtDispositifsIrdChercheurDialog;
        }
    set viewInstrumentsEtDispositifsIrdChercheurDialog(value: boolean) {
        this.instrumentsEtDispositifsIrdChercheurService.viewInstrumentsEtDispositifsIrdChercheurDialog= value;
        }
    
    get selectedInstrumentsEtDispositifsIrdChercheur():InstrumentsEtDispositifsIrdChercheurVo {
           return this.instrumentsEtDispositifsIrdChercheurService.selectedInstrumentsEtDispositifsIrdChercheur;
       }
    set selectedInstrumentsEtDispositifsIrdChercheur(value: InstrumentsEtDispositifsIrdChercheurVo) {
        this.instrumentsEtDispositifsIrdChercheurService.selectedInstrumentsEtDispositifsIrdChercheur = value;
       }





}