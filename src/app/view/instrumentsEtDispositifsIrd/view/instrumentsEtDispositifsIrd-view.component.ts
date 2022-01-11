import {Component, OnInit} from '@angular/core';
import {InstrumentsEtDispositifsIrdService} from '../../../controller/service/InstrumentsEtDispositifsIrd.service';
import {InstrumentsEtDispositifsIrdVo} from '../../../controller/model/InstrumentsEtDispositifsIrd.model';

@Component({
  selector: 'app-instrumentsEtDispositifsIrd-view',
  templateUrl: './instrumentsEtDispositifsIrd-view.component.html',
  styleUrls: ['./instrumentsEtDispositifsIrd-view.component.css']
})
export class InstrumentsEtDispositifsIrdViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private instrumentsEtDispositifsIrdService: InstrumentsEtDispositifsIrdService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewInstrumentsEtDispositifsIrdDialog = false;
    } 



   // getters and setters
    get viewInstrumentsEtDispositifsIrdDialog():boolean {
        return this.instrumentsEtDispositifsIrdService.viewInstrumentsEtDispositifsIrdDialog;
        }
    set viewInstrumentsEtDispositifsIrdDialog(value: boolean) {
        this.instrumentsEtDispositifsIrdService.viewInstrumentsEtDispositifsIrdDialog= value;
        }
    
    get selectedInstrumentsEtDispositifsIrd():InstrumentsEtDispositifsIrdVo {
           return this.instrumentsEtDispositifsIrdService.selectedInstrumentsEtDispositifsIrd;
       }
    set selectedInstrumentsEtDispositifsIrd(value: InstrumentsEtDispositifsIrdVo) {
        this.instrumentsEtDispositifsIrdService.selectedInstrumentsEtDispositifsIrd = value;
       }





}