import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {PaysService} from '../../../controller/service/Pays.service';
import {PaysVo} from '../../../controller/model/Pays.model';
import {ContinentVo} from '../../../controller/model/Continent.model';

@Component({
  selector: 'app-pays-edit',
  templateUrl: './pays-edit.component.html',
  styleUrls: ['./pays-edit.component.css']
})
export class PaysEditComponent implements OnInit {
// declarations
 editPaysForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private paysService: PaysService) { }
// methods 


  ngOnInit(): void {
    this.paysService.editPays$.subscribe(value=>{
    if(value){
     this.editPaysForm.setValue({
          libelle: this.selectedPays.libelle,
          code: this.selectedPays.code,
    });
    }
  });
  }



public edit(){ 
    this.paysService.edit().subscribe(updatedPays => {
          const indexOfUpdated = this.payss.findIndex(
           (Pays) => Pays.id === updatedPays.id
            );
            indexOfUpdated > -1 ? this.payss[indexOfUpdated] = updatedPays : false;
                });
                  this.editPaysDialog = false;
    this.selectedPays = new PaysVo();
            }

  hideEditDialog(){
    this.editPaysDialog = false;
  }
   submit(){
                this.selectedPays.libelle = this.libelle.value;
                this.selectedPays.code = this.code.value;
    this.paysService.edit().subscribe(result=>{
        this.editPaysDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editPaysForm.get('libelle');
            }
            get code() {
                 return this.editPaysForm.get('code');
            }
 
  get payss(): Array<PaysVo> {
    return this.paysService.payss;
       }
  set payss(value: Array<PaysVo>) {
        this.paysService.payss = value;
       } 

  get selectedPays():PaysVo {
           return this.paysService.selectedPays;
       }
  set selectedPays(value: PaysVo) {
        this.paysService.selectedPays = value;
       }
  
  get editPaysDialog():boolean {
           return this.paysService.editPaysDialog;
       }
  set editPaysDialog(value: boolean) {
        this.paysService.editPaysDialog= value;
       }


}