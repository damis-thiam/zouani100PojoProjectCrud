import {Component, OnInit} from '@angular/core';
import {InstrumentsEtDispositifsIrdChercheurService} from '../../../controller/service/InstrumentsEtDispositifsIrdChercheur.service';
import {InstrumentsEtDispositifsIrdChercheurVo} from '../../../controller/model/InstrumentsEtDispositifsIrdChercheur.model';
      import {TypeInstrumentsEtDispositifsIrdVo} from '../../../controller/model/TypeInstrumentsEtDispositifsIrd.model';
      import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-instrumentsEtDispositifsIrdChercheur-create',
  templateUrl: './instrumentsEtDispositifsIrdChercheur-create.component.html',
  styleUrls: ['./instrumentsEtDispositifsIrdChercheur-create.component.css']
})
export class InstrumentsEtDispositifsIrdChercheurCreateComponent implements OnInit {

constructor(private instrumentsEtDispositifsIrdChercheurService: InstrumentsEtDispositifsIrdChercheurService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.instrumentsEtDispositifsIrdChercheurService.save().subscribe(instrumentsEtDispositifsIrdChercheur=>{
          
       this.instrumentsEtDispositifsIrdChercheurs.push({...instrumentsEtDispositifsIrdChercheur});
       this.createInstrumentsEtDispositifsIrdChercheurDialog = false;
       this.selectedInstrumentsEtDispositifsIrdChercheur = new InstrumentsEtDispositifsIrdChercheurVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createInstrumentsEtDispositifsIrdChercheurDialog  = false;
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
  
   get createInstrumentsEtDispositifsIrdChercheurDialog():boolean {
           return this.instrumentsEtDispositifsIrdChercheurService.createInstrumentsEtDispositifsIrdChercheurDialog;
       }
    set createInstrumentsEtDispositifsIrdChercheurDialog(value: boolean) {
        this.instrumentsEtDispositifsIrdChercheurService.createInstrumentsEtDispositifsIrdChercheurDialog= value;
       }


}