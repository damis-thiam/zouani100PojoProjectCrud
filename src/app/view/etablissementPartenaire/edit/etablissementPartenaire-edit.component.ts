import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {EtablissementPartenaireService} from '../../../controller/service/EtablissementPartenaire.service';
import {EtablissementPartenaireVo} from '../../../controller/model/EtablissementPartenaire.model';

@Component({
  selector: 'app-etablissementPartenaire-edit',
  templateUrl: './etablissementPartenaire-edit.component.html',
  styleUrls: ['./etablissementPartenaire-edit.component.css']
})
export class EtablissementPartenaireEditComponent implements OnInit {
// declarations
 editEtablissementPartenaireForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
  }); 
constructor(private etablissementPartenaireService: EtablissementPartenaireService) { }
// methods 


  ngOnInit(): void {
    this.etablissementPartenaireService.editEtablissementPartenaire$.subscribe(value=>{
    if(value){
     this.editEtablissementPartenaireForm.setValue({
          libelle: this.selectedEtablissementPartenaire.libelle,
          code: this.selectedEtablissementPartenaire.code,
          description: this.selectedEtablissementPartenaire.description,
    });
    }
  });
  }



public edit(){ 
    this.etablissementPartenaireService.edit().subscribe(updatedEtablissementPartenaire => {
          const indexOfUpdated = this.etablissementPartenaires.findIndex(
           (EtablissementPartenaire) => EtablissementPartenaire.id === updatedEtablissementPartenaire.id
            );
            indexOfUpdated > -1 ? this.etablissementPartenaires[indexOfUpdated] = updatedEtablissementPartenaire : false;
                });
                  this.editEtablissementPartenaireDialog = false;
    this.selectedEtablissementPartenaire = new EtablissementPartenaireVo();
            }

  hideEditDialog(){
    this.editEtablissementPartenaireDialog = false;
  }
   submit(){
                this.selectedEtablissementPartenaire.libelle = this.libelle.value;
                this.selectedEtablissementPartenaire.code = this.code.value;
                this.selectedEtablissementPartenaire.description = this.description.value;
    this.etablissementPartenaireService.edit().subscribe(result=>{
        this.editEtablissementPartenaireDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editEtablissementPartenaireForm.get('libelle');
            }
            get code() {
                 return this.editEtablissementPartenaireForm.get('code');
            }
            get description() {
                 return this.editEtablissementPartenaireForm.get('description');
            }
 
  get etablissementPartenaires(): Array<EtablissementPartenaireVo> {
    return this.etablissementPartenaireService.etablissementPartenaires;
       }
  set etablissementPartenaires(value: Array<EtablissementPartenaireVo>) {
        this.etablissementPartenaireService.etablissementPartenaires = value;
       } 

  get selectedEtablissementPartenaire():EtablissementPartenaireVo {
           return this.etablissementPartenaireService.selectedEtablissementPartenaire;
       }
  set selectedEtablissementPartenaire(value: EtablissementPartenaireVo) {
        this.etablissementPartenaireService.selectedEtablissementPartenaire = value;
       }
  
  get editEtablissementPartenaireDialog():boolean {
           return this.etablissementPartenaireService.editEtablissementPartenaireDialog;
       }
  set editEtablissementPartenaireDialog(value: boolean) {
        this.etablissementPartenaireService.editEtablissementPartenaireDialog= value;
       }


}