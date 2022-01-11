import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {EcoleDoctoraleService} from '../../../controller/service/EcoleDoctorale.service';
import {EcoleDoctoraleVo} from '../../../controller/model/EcoleDoctorale.model';
import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-ecoleDoctorale-edit',
  templateUrl: './ecoleDoctorale-edit.component.html',
  styleUrls: ['./ecoleDoctorale-edit.component.css']
})
export class EcoleDoctoraleEditComponent implements OnInit {
// declarations
 editEcoleDoctoraleForm = new FormGroup({
      intitule: new FormControl("", [Validators.required]),
          international:new FormControl(0,[Validators.required]),
  }); 
constructor(private ecoleDoctoraleService: EcoleDoctoraleService) { }
// methods 


  ngOnInit(): void {
    this.ecoleDoctoraleService.editEcoleDoctorale$.subscribe(value=>{
    if(value){
     this.editEcoleDoctoraleForm.setValue({
          intitule: this.selectedEcoleDoctorale.intitule,
          international: this.selectedEcoleDoctorale.international,
    });
    }
  });
  }



public edit(){ 
    this.ecoleDoctoraleService.edit().subscribe(updatedEcoleDoctorale => {
          const indexOfUpdated = this.ecoleDoctorales.findIndex(
           (EcoleDoctorale) => EcoleDoctorale.id === updatedEcoleDoctorale.id
            );
            indexOfUpdated > -1 ? this.ecoleDoctorales[indexOfUpdated] = updatedEcoleDoctorale : false;
                });
                  this.editEcoleDoctoraleDialog = false;
    this.selectedEcoleDoctorale = new EcoleDoctoraleVo();
            }

  hideEditDialog(){
    this.editEcoleDoctoraleDialog = false;
  }
   submit(){
                this.selectedEcoleDoctorale.intitule = this.intitule.value;
                this.selectedEcoleDoctorale.international = this.international.value;
    this.ecoleDoctoraleService.edit().subscribe(result=>{
        this.editEcoleDoctoraleDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get intitule() {
                 return this.editEcoleDoctoraleForm.get('intitule');
            }
            get international() {
                 return this.editEcoleDoctoraleForm.get('international');
            }
 
  get ecoleDoctorales(): Array<EcoleDoctoraleVo> {
    return this.ecoleDoctoraleService.ecoleDoctorales;
       }
  set ecoleDoctorales(value: Array<EcoleDoctoraleVo>) {
        this.ecoleDoctoraleService.ecoleDoctorales = value;
       } 

  get selectedEcoleDoctorale():EcoleDoctoraleVo {
           return this.ecoleDoctoraleService.selectedEcoleDoctorale;
       }
  set selectedEcoleDoctorale(value: EcoleDoctoraleVo) {
        this.ecoleDoctoraleService.selectedEcoleDoctorale = value;
       }
  
  get editEcoleDoctoraleDialog():boolean {
           return this.ecoleDoctoraleService.editEcoleDoctoraleDialog;
       }
  set editEcoleDoctoraleDialog(value: boolean) {
        this.ecoleDoctoraleService.editEcoleDoctoraleDialog= value;
       }


}