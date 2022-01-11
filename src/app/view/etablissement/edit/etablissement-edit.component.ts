import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {EtablissementService} from '../../../controller/service/Etablissement.service';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';

@Component({
  selector: 'app-etablissement-edit',
  templateUrl: './etablissement-edit.component.html',
  styleUrls: ['./etablissement-edit.component.css']
})
export class EtablissementEditComponent implements OnInit {
// declarations
 editEtablissementForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
  }); 
constructor(private etablissementService: EtablissementService) { }
// methods 


  ngOnInit(): void {
    this.etablissementService.editEtablissement$.subscribe(value=>{
    if(value){
     this.editEtablissementForm.setValue({
          libelle: this.selectedEtablissement.libelle,
          code: this.selectedEtablissement.code,
          description: this.selectedEtablissement.description,
    });
    }
  });
  }



public edit(){ 
    this.etablissementService.edit().subscribe(updatedEtablissement => {
          const indexOfUpdated = this.etablissements.findIndex(
           (Etablissement) => Etablissement.id === updatedEtablissement.id
            );
            indexOfUpdated > -1 ? this.etablissements[indexOfUpdated] = updatedEtablissement : false;
                });
                  this.editEtablissementDialog = false;
    this.selectedEtablissement = new EtablissementVo();
            }

  hideEditDialog(){
    this.editEtablissementDialog = false;
  }
   submit(){
                this.selectedEtablissement.libelle = this.libelle.value;
                this.selectedEtablissement.code = this.code.value;
                this.selectedEtablissement.description = this.description.value;
    this.etablissementService.edit().subscribe(result=>{
        this.editEtablissementDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editEtablissementForm.get('libelle');
            }
            get code() {
                 return this.editEtablissementForm.get('code');
            }
            get description() {
                 return this.editEtablissementForm.get('description');
            }
 
  get etablissements(): Array<EtablissementVo> {
    return this.etablissementService.etablissements;
       }
  set etablissements(value: Array<EtablissementVo>) {
        this.etablissementService.etablissements = value;
       } 

  get selectedEtablissement():EtablissementVo {
           return this.etablissementService.selectedEtablissement;
       }
  set selectedEtablissement(value: EtablissementVo) {
        this.etablissementService.selectedEtablissement = value;
       }
  
  get editEtablissementDialog():boolean {
           return this.etablissementService.editEtablissementDialog;
       }
  set editEtablissementDialog(value: boolean) {
        this.etablissementService.editEtablissementDialog= value;
       }


}