import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {ResponsabilitePedagogiqueEcoleDoctoraleService} from '../../../controller/service/ResponsabilitePedagogiqueEcoleDoctorale.service';
import {ResponsabilitePedagogiqueEcoleDoctoraleVo} from '../../../controller/model/ResponsabilitePedagogiqueEcoleDoctorale.model';
import {EcoleDoctoraleVo} from '../../../controller/model/EcoleDoctorale.model';
import {StatutEcoleDoctoraleVo} from '../../../controller/model/StatutEcoleDoctorale.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-responsabilitePedagogiqueEcoleDoctorale-edit',
  templateUrl: './responsabilitePedagogiqueEcoleDoctorale-edit.component.html',
  styleUrls: ['./responsabilitePedagogiqueEcoleDoctorale-edit.component.css']
})
export class ResponsabilitePedagogiqueEcoleDoctoraleEditComponent implements OnInit {
// declarations
 editResponsabilitePedagogiqueEcoleDoctoraleForm = new FormGroup({
          annee:new FormControl(0,[Validators.required]),
          tempsEstimePourCetteAnnne:new FormControl(0,[Validators.required]),
          appelServiceRenforcementCapaciteSud:new FormControl(0,[Validators.required]),
          ecoleDoctoraleInternational:new FormControl(0,[Validators.required]),
  }); 
constructor(private responsabilitePedagogiqueEcoleDoctoraleService: ResponsabilitePedagogiqueEcoleDoctoraleService) { }
// methods 


  ngOnInit(): void {
    this.responsabilitePedagogiqueEcoleDoctoraleService.editResponsabilitePedagogiqueEcoleDoctorale$.subscribe(value=>{
    if(value){
     this.editResponsabilitePedagogiqueEcoleDoctoraleForm.setValue({
          annee: this.selectedResponsabilitePedagogiqueEcoleDoctorale.annee,
          tempsEstimePourCetteAnnne: this.selectedResponsabilitePedagogiqueEcoleDoctorale.tempsEstimePourCetteAnnne,
          appelServiceRenforcementCapaciteSud: this.selectedResponsabilitePedagogiqueEcoleDoctorale.appelServiceRenforcementCapaciteSud,
          ecoleDoctoraleInternational: this.selectedResponsabilitePedagogiqueEcoleDoctorale.ecoleDoctoraleInternational,
    });
    }
  });
  }



public edit(){ 
    this.responsabilitePedagogiqueEcoleDoctoraleService.edit().subscribe(updatedResponsabilitePedagogiqueEcoleDoctorale => {
          const indexOfUpdated = this.responsabilitePedagogiqueEcoleDoctorales.findIndex(
           (ResponsabilitePedagogiqueEcoleDoctorale) => ResponsabilitePedagogiqueEcoleDoctorale.id === updatedResponsabilitePedagogiqueEcoleDoctorale.id
            );
            indexOfUpdated > -1 ? this.responsabilitePedagogiqueEcoleDoctorales[indexOfUpdated] = updatedResponsabilitePedagogiqueEcoleDoctorale : false;
                });
                  this.editResponsabilitePedagogiqueEcoleDoctoraleDialog = false;
    this.selectedResponsabilitePedagogiqueEcoleDoctorale = new ResponsabilitePedagogiqueEcoleDoctoraleVo();
            }

  hideEditDialog(){
    this.editResponsabilitePedagogiqueEcoleDoctoraleDialog = false;
  }
   submit(){
                this.selectedResponsabilitePedagogiqueEcoleDoctorale.annee = this.annee.value;
                this.selectedResponsabilitePedagogiqueEcoleDoctorale.tempsEstimePourCetteAnnne = this.tempsEstimePourCetteAnnne.value;
                this.selectedResponsabilitePedagogiqueEcoleDoctorale.appelServiceRenforcementCapaciteSud = this.appelServiceRenforcementCapaciteSud.value;
                this.selectedResponsabilitePedagogiqueEcoleDoctorale.ecoleDoctoraleInternational = this.ecoleDoctoraleInternational.value;
    this.responsabilitePedagogiqueEcoleDoctoraleService.edit().subscribe(result=>{
        this.editResponsabilitePedagogiqueEcoleDoctoraleDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get annee() {
                 return this.editResponsabilitePedagogiqueEcoleDoctoraleForm.get('annee');
            }
            get tempsEstimePourCetteAnnne() {
                 return this.editResponsabilitePedagogiqueEcoleDoctoraleForm.get('tempsEstimePourCetteAnnne');
            }
            get appelServiceRenforcementCapaciteSud() {
                 return this.editResponsabilitePedagogiqueEcoleDoctoraleForm.get('appelServiceRenforcementCapaciteSud');
            }
            get ecoleDoctoraleInternational() {
                 return this.editResponsabilitePedagogiqueEcoleDoctoraleForm.get('ecoleDoctoraleInternational');
            }
 
  get responsabilitePedagogiqueEcoleDoctorales(): Array<ResponsabilitePedagogiqueEcoleDoctoraleVo> {
    return this.responsabilitePedagogiqueEcoleDoctoraleService.responsabilitePedagogiqueEcoleDoctorales;
       }
  set responsabilitePedagogiqueEcoleDoctorales(value: Array<ResponsabilitePedagogiqueEcoleDoctoraleVo>) {
        this.responsabilitePedagogiqueEcoleDoctoraleService.responsabilitePedagogiqueEcoleDoctorales = value;
       } 

  get selectedResponsabilitePedagogiqueEcoleDoctorale():ResponsabilitePedagogiqueEcoleDoctoraleVo {
           return this.responsabilitePedagogiqueEcoleDoctoraleService.selectedResponsabilitePedagogiqueEcoleDoctorale;
       }
  set selectedResponsabilitePedagogiqueEcoleDoctorale(value: ResponsabilitePedagogiqueEcoleDoctoraleVo) {
        this.responsabilitePedagogiqueEcoleDoctoraleService.selectedResponsabilitePedagogiqueEcoleDoctorale = value;
       }
  
  get editResponsabilitePedagogiqueEcoleDoctoraleDialog():boolean {
           return this.responsabilitePedagogiqueEcoleDoctoraleService.editResponsabilitePedagogiqueEcoleDoctoraleDialog;
       }
  set editResponsabilitePedagogiqueEcoleDoctoraleDialog(value: boolean) {
        this.responsabilitePedagogiqueEcoleDoctoraleService.editResponsabilitePedagogiqueEcoleDoctoraleDialog= value;
       }


}