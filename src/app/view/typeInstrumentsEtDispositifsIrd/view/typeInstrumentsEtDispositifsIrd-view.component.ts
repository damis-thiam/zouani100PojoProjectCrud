import {Component, OnInit} from '@angular/core';
import {TypeInstrumentsEtDispositifsIrdService} from '../../../controller/service/TypeInstrumentsEtDispositifsIrd.service';
import {TypeInstrumentsEtDispositifsIrdVo} from '../../../controller/model/TypeInstrumentsEtDispositifsIrd.model';

@Component({
  selector: 'app-typeInstrumentsEtDispositifsIrd-view',
  templateUrl: './typeInstrumentsEtDispositifsIrd-view.component.html',
  styleUrls: ['./typeInstrumentsEtDispositifsIrd-view.component.css']
})
export class TypeInstrumentsEtDispositifsIrdViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private typeInstrumentsEtDispositifsIrdService: TypeInstrumentsEtDispositifsIrdService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewTypeInstrumentsEtDispositifsIrdDialog = false;
    } 



   // getters and setters
    get viewTypeInstrumentsEtDispositifsIrdDialog():boolean {
        return this.typeInstrumentsEtDispositifsIrdService.viewTypeInstrumentsEtDispositifsIrdDialog;
        }
    set viewTypeInstrumentsEtDispositifsIrdDialog(value: boolean) {
        this.typeInstrumentsEtDispositifsIrdService.viewTypeInstrumentsEtDispositifsIrdDialog= value;
        }
    
    get selectedTypeInstrumentsEtDispositifsIrd():TypeInstrumentsEtDispositifsIrdVo {
           return this.typeInstrumentsEtDispositifsIrdService.selectedTypeInstrumentsEtDispositifsIrd;
       }
    set selectedTypeInstrumentsEtDispositifsIrd(value: TypeInstrumentsEtDispositifsIrdVo) {
        this.typeInstrumentsEtDispositifsIrdService.selectedTypeInstrumentsEtDispositifsIrd = value;
       }





}