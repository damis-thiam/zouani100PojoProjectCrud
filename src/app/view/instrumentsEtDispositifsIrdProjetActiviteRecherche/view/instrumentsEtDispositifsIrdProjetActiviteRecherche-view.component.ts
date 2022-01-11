import {Component, OnInit} from '@angular/core';
import {InstrumentsEtDispositifsIrdProjetActiviteRechercheService} from '../../../controller/service/InstrumentsEtDispositifsIrdProjetActiviteRecherche.service';
import {InstrumentsEtDispositifsIrdProjetActiviteRechercheVo} from '../../../controller/model/InstrumentsEtDispositifsIrdProjetActiviteRecherche.model';
import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
import {InstrumentsEtDispositifsIrdVo} from '../../../controller/model/InstrumentsEtDispositifsIrd.model';

@Component({
  selector: 'app-instrumentsEtDispositifsIrdProjetActiviteRecherche-view',
  templateUrl: './instrumentsEtDispositifsIrdProjetActiviteRecherche-view.component.html',
  styleUrls: ['./instrumentsEtDispositifsIrdProjetActiviteRecherche-view.component.css']
})
export class InstrumentsEtDispositifsIrdProjetActiviteRechercheViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private instrumentsEtDispositifsIrdProjetActiviteRechercheService: InstrumentsEtDispositifsIrdProjetActiviteRechercheService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog = false;
    } 



   // getters and setters
    get viewInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog():boolean {
        return this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.viewInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog;
        }
    set viewInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog(value: boolean) {
        this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.viewInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog= value;
        }
    
    get selectedInstrumentsEtDispositifsIrdProjetActiviteRecherche():InstrumentsEtDispositifsIrdProjetActiviteRechercheVo {
           return this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.selectedInstrumentsEtDispositifsIrdProjetActiviteRecherche;
       }
    set selectedInstrumentsEtDispositifsIrdProjetActiviteRecherche(value: InstrumentsEtDispositifsIrdProjetActiviteRechercheVo) {
        this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.selectedInstrumentsEtDispositifsIrdProjetActiviteRecherche = value;
       }





}