import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {ResponsabilitePedagogiqueMasterService} from '../../../controller/service/ResponsabilitePedagogiqueMaster.service';
import {ResponsabilitePedagogiqueMasterVo} from '../../../controller/model/ResponsabilitePedagogiqueMaster.model';
import {MasterVo} from '../../../controller/model/Master.model';
import {StatutMasterVo} from '../../../controller/model/StatutMaster.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-responsabilitePedagogiqueMaster-edit',
  templateUrl: './responsabilitePedagogiqueMaster-edit.component.html',
  styleUrls: ['./responsabilitePedagogiqueMaster-edit.component.css']
})
export class ResponsabilitePedagogiqueMasterEditComponent implements OnInit {
// declarations
 editResponsabilitePedagogiqueMasterForm = new FormGroup({
          annee:new FormControl(0,[Validators.required]),
          tempsEstimePourCetteAnnne:new FormControl(0,[Validators.required]),
          appelServiceRenforcementCapaciteSud:new FormControl(0,[Validators.required]),
          masterInternational:new FormControl(0,[Validators.required]),
  }); 
constructor(private responsabilitePedagogiqueMasterService: ResponsabilitePedagogiqueMasterService) { }
// methods 


  ngOnInit(): void {
    this.responsabilitePedagogiqueMasterService.editResponsabilitePedagogiqueMaster$.subscribe(value=>{
    if(value){
     this.editResponsabilitePedagogiqueMasterForm.setValue({
          annee: this.selectedResponsabilitePedagogiqueMaster.annee,
          tempsEstimePourCetteAnnne: this.selectedResponsabilitePedagogiqueMaster.tempsEstimePourCetteAnnne,
          appelServiceRenforcementCapaciteSud: this.selectedResponsabilitePedagogiqueMaster.appelServiceRenforcementCapaciteSud,
          masterInternational: this.selectedResponsabilitePedagogiqueMaster.masterInternational,
    });
    }
  });
  }



public edit(){ 
    this.responsabilitePedagogiqueMasterService.edit().subscribe(updatedResponsabilitePedagogiqueMaster => {
          const indexOfUpdated = this.responsabilitePedagogiqueMasters.findIndex(
           (ResponsabilitePedagogiqueMaster) => ResponsabilitePedagogiqueMaster.id === updatedResponsabilitePedagogiqueMaster.id
            );
            indexOfUpdated > -1 ? this.responsabilitePedagogiqueMasters[indexOfUpdated] = updatedResponsabilitePedagogiqueMaster : false;
                });
                  this.editResponsabilitePedagogiqueMasterDialog = false;
    this.selectedResponsabilitePedagogiqueMaster = new ResponsabilitePedagogiqueMasterVo();
            }

  hideEditDialog(){
    this.editResponsabilitePedagogiqueMasterDialog = false;
  }
   submit(){
                this.selectedResponsabilitePedagogiqueMaster.annee = this.annee.value;
                this.selectedResponsabilitePedagogiqueMaster.tempsEstimePourCetteAnnne = this.tempsEstimePourCetteAnnne.value;
                this.selectedResponsabilitePedagogiqueMaster.appelServiceRenforcementCapaciteSud = this.appelServiceRenforcementCapaciteSud.value;
                this.selectedResponsabilitePedagogiqueMaster.masterInternational = this.masterInternational.value;
    this.responsabilitePedagogiqueMasterService.edit().subscribe(result=>{
        this.editResponsabilitePedagogiqueMasterDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get annee() {
                 return this.editResponsabilitePedagogiqueMasterForm.get('annee');
            }
            get tempsEstimePourCetteAnnne() {
                 return this.editResponsabilitePedagogiqueMasterForm.get('tempsEstimePourCetteAnnne');
            }
            get appelServiceRenforcementCapaciteSud() {
                 return this.editResponsabilitePedagogiqueMasterForm.get('appelServiceRenforcementCapaciteSud');
            }
            get masterInternational() {
                 return this.editResponsabilitePedagogiqueMasterForm.get('masterInternational');
            }
 
  get responsabilitePedagogiqueMasters(): Array<ResponsabilitePedagogiqueMasterVo> {
    return this.responsabilitePedagogiqueMasterService.responsabilitePedagogiqueMasters;
       }
  set responsabilitePedagogiqueMasters(value: Array<ResponsabilitePedagogiqueMasterVo>) {
        this.responsabilitePedagogiqueMasterService.responsabilitePedagogiqueMasters = value;
       } 

  get selectedResponsabilitePedagogiqueMaster():ResponsabilitePedagogiqueMasterVo {
           return this.responsabilitePedagogiqueMasterService.selectedResponsabilitePedagogiqueMaster;
       }
  set selectedResponsabilitePedagogiqueMaster(value: ResponsabilitePedagogiqueMasterVo) {
        this.responsabilitePedagogiqueMasterService.selectedResponsabilitePedagogiqueMaster = value;
       }
  
  get editResponsabilitePedagogiqueMasterDialog():boolean {
           return this.responsabilitePedagogiqueMasterService.editResponsabilitePedagogiqueMasterDialog;
       }
  set editResponsabilitePedagogiqueMasterDialog(value: boolean) {
        this.responsabilitePedagogiqueMasterService.editResponsabilitePedagogiqueMasterDialog= value;
       }


}