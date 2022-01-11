import {Component, OnInit} from '@angular/core';
import {InstrumentsEtDispositifsIrdProjetActiviteRechercheService} from '../../../controller/service/InstrumentsEtDispositifsIrdProjetActiviteRecherche.service';
import {InstrumentsEtDispositifsIrdProjetActiviteRechercheVo} from '../../../controller/model/InstrumentsEtDispositifsIrdProjetActiviteRecherche.model';
      import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
      import {InstrumentsEtDispositifsIrdVo} from '../../../controller/model/InstrumentsEtDispositifsIrd.model';

@Component({
  selector: 'app-instrumentsEtDispositifsIrdProjetActiviteRecherche-create',
  templateUrl: './instrumentsEtDispositifsIrdProjetActiviteRecherche-create.component.html',
  styleUrls: ['./instrumentsEtDispositifsIrdProjetActiviteRecherche-create.component.css']
})
export class InstrumentsEtDispositifsIrdProjetActiviteRechercheCreateComponent implements OnInit {

constructor(private instrumentsEtDispositifsIrdProjetActiviteRechercheService: InstrumentsEtDispositifsIrdProjetActiviteRechercheService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.save().subscribe(instrumentsEtDispositifsIrdProjetActiviteRecherche=>{
          
       this.instrumentsEtDispositifsIrdProjetActiviteRecherches.push({...instrumentsEtDispositifsIrdProjetActiviteRecherche});
       this.createInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog = false;
       this.selectedInstrumentsEtDispositifsIrdProjetActiviteRecherche = new InstrumentsEtDispositifsIrdProjetActiviteRechercheVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog  = false;
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
  
   get createInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog():boolean {
           return this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.createInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog;
       }
    set createInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog(value: boolean) {
        this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.createInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog= value;
       }


}