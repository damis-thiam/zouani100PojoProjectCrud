import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {InstrumentsEtDispositifsIrdService} from '../../../controller/service/InstrumentsEtDispositifsIrd.service';
import {InstrumentsEtDispositifsIrdVo} from '../../../controller/model/InstrumentsEtDispositifsIrd.model';

@Component({
  selector: 'app-instrumentsEtDispositifsIrd-edit',
  templateUrl: './instrumentsEtDispositifsIrd-edit.component.html',
  styleUrls: ['./instrumentsEtDispositifsIrd-edit.component.css']
})
export class InstrumentsEtDispositifsIrdEditComponent implements OnInit {
// declarations
 editInstrumentsEtDispositifsIrdForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
  }); 
constructor(private instrumentsEtDispositifsIrdService: InstrumentsEtDispositifsIrdService) { }
// methods 


  ngOnInit(): void {
    this.instrumentsEtDispositifsIrdService.editInstrumentsEtDispositifsIrd$.subscribe(value=>{
    if(value){
     this.editInstrumentsEtDispositifsIrdForm.setValue({
          libelle: this.selectedInstrumentsEtDispositifsIrd.libelle,
          code: this.selectedInstrumentsEtDispositifsIrd.code,
          description: this.selectedInstrumentsEtDispositifsIrd.description,
    });
    }
  });
  }



public edit(){ 
    this.instrumentsEtDispositifsIrdService.edit().subscribe(updatedInstrumentsEtDispositifsIrd => {
          const indexOfUpdated = this.instrumentsEtDispositifsIrds.findIndex(
           (InstrumentsEtDispositifsIrd) => InstrumentsEtDispositifsIrd.id === updatedInstrumentsEtDispositifsIrd.id
            );
            indexOfUpdated > -1 ? this.instrumentsEtDispositifsIrds[indexOfUpdated] = updatedInstrumentsEtDispositifsIrd : false;
                });
                  this.editInstrumentsEtDispositifsIrdDialog = false;
    this.selectedInstrumentsEtDispositifsIrd = new InstrumentsEtDispositifsIrdVo();
            }

  hideEditDialog(){
    this.editInstrumentsEtDispositifsIrdDialog = false;
  }
   submit(){
                this.selectedInstrumentsEtDispositifsIrd.libelle = this.libelle.value;
                this.selectedInstrumentsEtDispositifsIrd.code = this.code.value;
                this.selectedInstrumentsEtDispositifsIrd.description = this.description.value;
    this.instrumentsEtDispositifsIrdService.edit().subscribe(result=>{
        this.editInstrumentsEtDispositifsIrdDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editInstrumentsEtDispositifsIrdForm.get('libelle');
            }
            get code() {
                 return this.editInstrumentsEtDispositifsIrdForm.get('code');
            }
            get description() {
                 return this.editInstrumentsEtDispositifsIrdForm.get('description');
            }
 
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
  
  get editInstrumentsEtDispositifsIrdDialog():boolean {
           return this.instrumentsEtDispositifsIrdService.editInstrumentsEtDispositifsIrdDialog;
       }
  set editInstrumentsEtDispositifsIrdDialog(value: boolean) {
        this.instrumentsEtDispositifsIrdService.editInstrumentsEtDispositifsIrdDialog= value;
       }


}