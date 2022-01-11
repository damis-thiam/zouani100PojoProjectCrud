import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {EtablissementProjetService} from '../../../controller/service/EtablissementProjet.service';
import {EtablissementProjetVo} from '../../../controller/model/EtablissementProjet.model';

@Component({
  selector: 'app-etablissementProjet-edit',
  templateUrl: './etablissementProjet-edit.component.html',
  styleUrls: ['./etablissementProjet-edit.component.css']
})
export class EtablissementProjetEditComponent implements OnInit {
// declarations
 editEtablissementProjetForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
  }); 
constructor(private etablissementProjetService: EtablissementProjetService) { }
// methods 


  ngOnInit(): void {
    this.etablissementProjetService.editEtablissementProjet$.subscribe(value=>{
    if(value){
     this.editEtablissementProjetForm.setValue({
          libelle: this.selectedEtablissementProjet.libelle,
          code: this.selectedEtablissementProjet.code,
          description: this.selectedEtablissementProjet.description,
    });
    }
  });
  }



public edit(){ 
    this.etablissementProjetService.edit().subscribe(updatedEtablissementProjet => {
          const indexOfUpdated = this.etablissementProjets.findIndex(
           (EtablissementProjet) => EtablissementProjet.id === updatedEtablissementProjet.id
            );
            indexOfUpdated > -1 ? this.etablissementProjets[indexOfUpdated] = updatedEtablissementProjet : false;
                });
                  this.editEtablissementProjetDialog = false;
    this.selectedEtablissementProjet = new EtablissementProjetVo();
            }

  hideEditDialog(){
    this.editEtablissementProjetDialog = false;
  }
   submit(){
                this.selectedEtablissementProjet.libelle = this.libelle.value;
                this.selectedEtablissementProjet.code = this.code.value;
                this.selectedEtablissementProjet.description = this.description.value;
    this.etablissementProjetService.edit().subscribe(result=>{
        this.editEtablissementProjetDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editEtablissementProjetForm.get('libelle');
            }
            get code() {
                 return this.editEtablissementProjetForm.get('code');
            }
            get description() {
                 return this.editEtablissementProjetForm.get('description');
            }
 
  get etablissementProjets(): Array<EtablissementProjetVo> {
    return this.etablissementProjetService.etablissementProjets;
       }
  set etablissementProjets(value: Array<EtablissementProjetVo>) {
        this.etablissementProjetService.etablissementProjets = value;
       } 

  get selectedEtablissementProjet():EtablissementProjetVo {
           return this.etablissementProjetService.selectedEtablissementProjet;
       }
  set selectedEtablissementProjet(value: EtablissementProjetVo) {
        this.etablissementProjetService.selectedEtablissementProjet = value;
       }
  
  get editEtablissementProjetDialog():boolean {
           return this.etablissementProjetService.editEtablissementProjetDialog;
       }
  set editEtablissementProjetDialog(value: boolean) {
        this.etablissementProjetService.editEtablissementProjetDialog= value;
       }


}