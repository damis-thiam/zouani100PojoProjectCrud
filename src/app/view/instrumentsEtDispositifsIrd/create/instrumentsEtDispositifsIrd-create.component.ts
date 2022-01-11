import {Component, OnInit} from '@angular/core';
import {InstrumentsEtDispositifsIrdService} from '../../../controller/service/InstrumentsEtDispositifsIrd.service';
import {InstrumentsEtDispositifsIrdVo} from '../../../controller/model/InstrumentsEtDispositifsIrd.model';

@Component({
  selector: 'app-instrumentsEtDispositifsIrd-create',
  templateUrl: './instrumentsEtDispositifsIrd-create.component.html',
  styleUrls: ['./instrumentsEtDispositifsIrd-create.component.css']
})
export class InstrumentsEtDispositifsIrdCreateComponent implements OnInit {

constructor(private instrumentsEtDispositifsIrdService: InstrumentsEtDispositifsIrdService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.instrumentsEtDispositifsIrdService.save().subscribe(instrumentsEtDispositifsIrd=>{
          
       this.instrumentsEtDispositifsIrds.push({...instrumentsEtDispositifsIrd});
       this.createInstrumentsEtDispositifsIrdDialog = false;
       this.selectedInstrumentsEtDispositifsIrd = new InstrumentsEtDispositifsIrdVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createInstrumentsEtDispositifsIrdDialog  = false;
}

// getters and setters 

get instrumentsEtDispositifsIrds(): Array<InstrumentsEtDispositifsIrdVo> {
    return this.instrumentsEtDispositifsIrdService.instrumentsEtDispositifsIrds;
       }
set instrumentsEtDispositifsIrds(value: Array<InstrumentsEtDispositifsIrdVo>) {
        this.instrumentsEtDispositifsIrdService.instrumentsEtDispositifsIrds = value;
       } 

 get selectedInstrumentsEtDispositifsIrd():InstrumentsEtDispositifsIrdVo {
           return this.instrumentsEtDispositifsIrdService.selectedInstrumentsEtDispositifsIrd;
       }
    set selectedInstrumentsEtDispositifsIrd(value: InstrumentsEtDispositifsIrdVo) {
        this.instrumentsEtDispositifsIrdService.selectedInstrumentsEtDispositifsIrd = value;
       }
  
   get createInstrumentsEtDispositifsIrdDialog():boolean {
           return this.instrumentsEtDispositifsIrdService.createInstrumentsEtDispositifsIrdDialog;
       }
    set createInstrumentsEtDispositifsIrdDialog(value: boolean) {
        this.instrumentsEtDispositifsIrdService.createInstrumentsEtDispositifsIrdDialog= value;
       }


}