import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {StatutEcoleDoctoraleService} from '../../../controller/service/StatutEcoleDoctorale.service';
import {StatutEcoleDoctoraleVo} from '../../../controller/model/StatutEcoleDoctorale.model';

@Component({
  selector: 'app-statutEcoleDoctorale-edit',
  templateUrl: './statutEcoleDoctorale-edit.component.html',
  styleUrls: ['./statutEcoleDoctorale-edit.component.css']
})
export class StatutEcoleDoctoraleEditComponent implements OnInit {
// declarations
 editStatutEcoleDoctoraleForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private statutEcoleDoctoraleService: StatutEcoleDoctoraleService) { }
// methods 


  ngOnInit(): void {
    this.statutEcoleDoctoraleService.editStatutEcoleDoctorale$.subscribe(value=>{
    if(value){
     this.editStatutEcoleDoctoraleForm.setValue({
          libelle: this.selectedStatutEcoleDoctorale.libelle,
          code: this.selectedStatutEcoleDoctorale.code,
    });
    }
  });
  }



public edit(){ 
    this.statutEcoleDoctoraleService.edit().subscribe(updatedStatutEcoleDoctorale => {
          const indexOfUpdated = this.statutEcoleDoctorales.findIndex(
           (StatutEcoleDoctorale) => StatutEcoleDoctorale.id === updatedStatutEcoleDoctorale.id
            );
            indexOfUpdated > -1 ? this.statutEcoleDoctorales[indexOfUpdated] = updatedStatutEcoleDoctorale : false;
                });
                  this.editStatutEcoleDoctoraleDialog = false;
    this.selectedStatutEcoleDoctorale = new StatutEcoleDoctoraleVo();
            }

  hideEditDialog(){
    this.editStatutEcoleDoctoraleDialog = false;
  }
   submit(){
                this.selectedStatutEcoleDoctorale.libelle = this.libelle.value;
                this.selectedStatutEcoleDoctorale.code = this.code.value;
    this.statutEcoleDoctoraleService.edit().subscribe(result=>{
        this.editStatutEcoleDoctoraleDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editStatutEcoleDoctoraleForm.get('libelle');
            }
            get code() {
                 return this.editStatutEcoleDoctoraleForm.get('code');
            }
 
  get statutEcoleDoctorales(): Array<StatutEcoleDoctoraleVo> {
    return this.statutEcoleDoctoraleService.statutEcoleDoctorales;
       }
  set statutEcoleDoctorales(value: Array<StatutEcoleDoctoraleVo>) {
        this.statutEcoleDoctoraleService.statutEcoleDoctorales = value;
       } 

  get selectedStatutEcoleDoctorale():StatutEcoleDoctoraleVo {
           return this.statutEcoleDoctoraleService.selectedStatutEcoleDoctorale;
       }
  set selectedStatutEcoleDoctorale(value: StatutEcoleDoctoraleVo) {
        this.statutEcoleDoctoraleService.selectedStatutEcoleDoctorale = value;
       }
  
  get editStatutEcoleDoctoraleDialog():boolean {
           return this.statutEcoleDoctoraleService.editStatutEcoleDoctoraleDialog;
       }
  set editStatutEcoleDoctoraleDialog(value: boolean) {
        this.statutEcoleDoctoraleService.editStatutEcoleDoctoraleDialog= value;
       }


}