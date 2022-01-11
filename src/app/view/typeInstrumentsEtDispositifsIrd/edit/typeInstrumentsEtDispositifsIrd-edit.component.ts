import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {TypeInstrumentsEtDispositifsIrdService} from '../../../controller/service/TypeInstrumentsEtDispositifsIrd.service';
import {TypeInstrumentsEtDispositifsIrdVo} from '../../../controller/model/TypeInstrumentsEtDispositifsIrd.model';

@Component({
  selector: 'app-typeInstrumentsEtDispositifsIrd-edit',
  templateUrl: './typeInstrumentsEtDispositifsIrd-edit.component.html',
  styleUrls: ['./typeInstrumentsEtDispositifsIrd-edit.component.css']
})
export class TypeInstrumentsEtDispositifsIrdEditComponent implements OnInit {
// declarations
 editTypeInstrumentsEtDispositifsIrdForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private typeInstrumentsEtDispositifsIrdService: TypeInstrumentsEtDispositifsIrdService) { }
// methods 


  ngOnInit(): void {
    this.typeInstrumentsEtDispositifsIrdService.editTypeInstrumentsEtDispositifsIrd$.subscribe(value=>{
    if(value){
     this.editTypeInstrumentsEtDispositifsIrdForm.setValue({
          libelle: this.selectedTypeInstrumentsEtDispositifsIrd.libelle,
          code: this.selectedTypeInstrumentsEtDispositifsIrd.code,
    });
    }
  });
  }



public edit(){ 
    this.typeInstrumentsEtDispositifsIrdService.edit().subscribe(updatedTypeInstrumentsEtDispositifsIrd => {
          const indexOfUpdated = this.typeInstrumentsEtDispositifsIrds.findIndex(
           (TypeInstrumentsEtDispositifsIrd) => TypeInstrumentsEtDispositifsIrd.id === updatedTypeInstrumentsEtDispositifsIrd.id
            );
            indexOfUpdated > -1 ? this.typeInstrumentsEtDispositifsIrds[indexOfUpdated] = updatedTypeInstrumentsEtDispositifsIrd : false;
                });
                  this.editTypeInstrumentsEtDispositifsIrdDialog = false;
    this.selectedTypeInstrumentsEtDispositifsIrd = new TypeInstrumentsEtDispositifsIrdVo();
            }

  hideEditDialog(){
    this.editTypeInstrumentsEtDispositifsIrdDialog = false;
  }
   submit(){
                this.selectedTypeInstrumentsEtDispositifsIrd.libelle = this.libelle.value;
                this.selectedTypeInstrumentsEtDispositifsIrd.code = this.code.value;
    this.typeInstrumentsEtDispositifsIrdService.edit().subscribe(result=>{
        this.editTypeInstrumentsEtDispositifsIrdDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editTypeInstrumentsEtDispositifsIrdForm.get('libelle');
            }
            get code() {
                 return this.editTypeInstrumentsEtDispositifsIrdForm.get('code');
            }
 
  get typeInstrumentsEtDispositifsIrds(): Array<TypeInstrumentsEtDispositifsIrdVo> {
    return this.typeInstrumentsEtDispositifsIrdService.typeInstrumentsEtDispositifsIrds;
       }
  set typeInstrumentsEtDispositifsIrds(value: Array<TypeInstrumentsEtDispositifsIrdVo>) {
        this.typeInstrumentsEtDispositifsIrdService.typeInstrumentsEtDispositifsIrds = value;
       } 

  get selectedTypeInstrumentsEtDispositifsIrd():TypeInstrumentsEtDispositifsIrdVo {
           return this.typeInstrumentsEtDispositifsIrdService.selectedTypeInstrumentsEtDispositifsIrd;
       }
  set selectedTypeInstrumentsEtDispositifsIrd(value: TypeInstrumentsEtDispositifsIrdVo) {
        this.typeInstrumentsEtDispositifsIrdService.selectedTypeInstrumentsEtDispositifsIrd = value;
       }
  
  get editTypeInstrumentsEtDispositifsIrdDialog():boolean {
           return this.typeInstrumentsEtDispositifsIrdService.editTypeInstrumentsEtDispositifsIrdDialog;
       }
  set editTypeInstrumentsEtDispositifsIrdDialog(value: boolean) {
        this.typeInstrumentsEtDispositifsIrdService.editTypeInstrumentsEtDispositifsIrdDialog= value;
       }


}