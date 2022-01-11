import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {VieInstitutionnelleService} from '../../../controller/service/VieInstitutionnelle.service';
import {VieInstitutionnelleVo} from '../../../controller/model/VieInstitutionnelle.model';
import {TypeInstanceVo} from '../../../controller/model/TypeInstance.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-vieInstitutionnelle-edit',
  templateUrl: './vieInstitutionnelle-edit.component.html',
  styleUrls: ['./vieInstitutionnelle-edit.component.css']
})
export class VieInstitutionnelleEditComponent implements OnInit {
// declarations
 editVieInstitutionnelleForm = new FormGroup({
          tempsEstime:new FormControl(0,[Validators.required]),
      libelleInstance: new FormControl("", [Validators.required]),
  }); 
constructor(private vieInstitutionnelleService: VieInstitutionnelleService) { }
// methods 


  ngOnInit(): void {
    this.vieInstitutionnelleService.editVieInstitutionnelle$.subscribe(value=>{
    if(value){
     this.editVieInstitutionnelleForm.setValue({
          tempsEstime: this.selectedVieInstitutionnelle.tempsEstime,
          libelleInstance: this.selectedVieInstitutionnelle.libelleInstance,
    });
    }
  });
  }



public edit(){ 
    this.vieInstitutionnelleService.edit().subscribe(updatedVieInstitutionnelle => {
          const indexOfUpdated = this.vieInstitutionnelles.findIndex(
           (VieInstitutionnelle) => VieInstitutionnelle.id === updatedVieInstitutionnelle.id
            );
            indexOfUpdated > -1 ? this.vieInstitutionnelles[indexOfUpdated] = updatedVieInstitutionnelle : false;
                });
                  this.editVieInstitutionnelleDialog = false;
    this.selectedVieInstitutionnelle = new VieInstitutionnelleVo();
            }

  hideEditDialog(){
    this.editVieInstitutionnelleDialog = false;
  }
   submit(){
                this.selectedVieInstitutionnelle.tempsEstime = this.tempsEstime.value;
                this.selectedVieInstitutionnelle.libelleInstance = this.libelleInstance.value;
    this.vieInstitutionnelleService.edit().subscribe(result=>{
        this.editVieInstitutionnelleDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get tempsEstime() {
                 return this.editVieInstitutionnelleForm.get('tempsEstime');
            }
            get libelleInstance() {
                 return this.editVieInstitutionnelleForm.get('libelleInstance');
            }
 
  get vieInstitutionnelles(): Array<VieInstitutionnelleVo> {
    return this.vieInstitutionnelleService.vieInstitutionnelles;
       }
  set vieInstitutionnelles(value: Array<VieInstitutionnelleVo>) {
        this.vieInstitutionnelleService.vieInstitutionnelles = value;
       } 

  get selectedVieInstitutionnelle():VieInstitutionnelleVo {
           return this.vieInstitutionnelleService.selectedVieInstitutionnelle;
       }
  set selectedVieInstitutionnelle(value: VieInstitutionnelleVo) {
        this.vieInstitutionnelleService.selectedVieInstitutionnelle = value;
       }
  
  get editVieInstitutionnelleDialog():boolean {
           return this.vieInstitutionnelleService.editVieInstitutionnelleDialog;
       }
  set editVieInstitutionnelleDialog(value: boolean) {
        this.vieInstitutionnelleService.editVieInstitutionnelleDialog= value;
       }


}