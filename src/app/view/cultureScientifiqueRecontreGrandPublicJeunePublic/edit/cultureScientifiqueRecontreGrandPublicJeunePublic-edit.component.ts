import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {CultureScientifiqueRecontreGrandPublicJeunePublicService} from '../../../controller/service/CultureScientifiqueRecontreGrandPublicJeunePublic.service';
import {CultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/CultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {FormatRencontreVo} from '../../../controller/model/FormatRencontre.model';

@Component({
  selector: 'app-cultureScientifiqueRecontreGrandPublicJeunePublic-edit',
  templateUrl: './cultureScientifiqueRecontreGrandPublicJeunePublic-edit.component.html',
  styleUrls: ['./cultureScientifiqueRecontreGrandPublicJeunePublic-edit.component.css']
})
export class CultureScientifiqueRecontreGrandPublicJeunePublicEditComponent implements OnInit {
// declarations
 editCultureScientifiqueRecontreGrandPublicJeunePublicForm = new FormGroup({
          tempsEstimePourCetteAnnne:new FormControl(0,[Validators.required]),
      intituleSujet: new FormControl("", [Validators.required]),
          periodeAnnee:new FormControl(0,[Validators.required]),
          periodeMois:new FormControl(0,[Validators.required]),
          evenementGrandPublic:new FormControl(0,[Validators.required]),
          volumePublic:new FormControl(0,[Validators.required]),
      lienWeb: new FormControl("", [Validators.required]),
  }); 
constructor(private cultureScientifiqueRecontreGrandPublicJeunePublicService: CultureScientifiqueRecontreGrandPublicJeunePublicService) { }
// methods 


  ngOnInit(): void {
    this.cultureScientifiqueRecontreGrandPublicJeunePublicService.editCultureScientifiqueRecontreGrandPublicJeunePublic$.subscribe(value=>{
    if(value){
     this.editCultureScientifiqueRecontreGrandPublicJeunePublicForm.setValue({
          tempsEstimePourCetteAnnne: this.selectedCultureScientifiqueRecontreGrandPublicJeunePublic.tempsEstimePourCetteAnnne,
          intituleSujet: this.selectedCultureScientifiqueRecontreGrandPublicJeunePublic.intituleSujet,
          periodeAnnee: this.selectedCultureScientifiqueRecontreGrandPublicJeunePublic.periodeAnnee,
          periodeMois: this.selectedCultureScientifiqueRecontreGrandPublicJeunePublic.periodeMois,
          evenementGrandPublic: this.selectedCultureScientifiqueRecontreGrandPublicJeunePublic.evenementGrandPublic,
          volumePublic: this.selectedCultureScientifiqueRecontreGrandPublicJeunePublic.volumePublic,
          lienWeb: this.selectedCultureScientifiqueRecontreGrandPublicJeunePublic.lienWeb,
    });
    }
  });
  }



public edit(){ 
    this.cultureScientifiqueRecontreGrandPublicJeunePublicService.edit().subscribe(updatedCultureScientifiqueRecontreGrandPublicJeunePublic => {
          const indexOfUpdated = this.cultureScientifiqueRecontreGrandPublicJeunePublics.findIndex(
           (CultureScientifiqueRecontreGrandPublicJeunePublic) => CultureScientifiqueRecontreGrandPublicJeunePublic.id === updatedCultureScientifiqueRecontreGrandPublicJeunePublic.id
            );
            indexOfUpdated > -1 ? this.cultureScientifiqueRecontreGrandPublicJeunePublics[indexOfUpdated] = updatedCultureScientifiqueRecontreGrandPublicJeunePublic : false;
                });
                  this.editCultureScientifiqueRecontreGrandPublicJeunePublicDialog = false;
    this.selectedCultureScientifiqueRecontreGrandPublicJeunePublic = new CultureScientifiqueRecontreGrandPublicJeunePublicVo();
            }

  hideEditDialog(){
    this.editCultureScientifiqueRecontreGrandPublicJeunePublicDialog = false;
  }
   submit(){
                this.selectedCultureScientifiqueRecontreGrandPublicJeunePublic.tempsEstimePourCetteAnnne = this.tempsEstimePourCetteAnnne.value;
                this.selectedCultureScientifiqueRecontreGrandPublicJeunePublic.intituleSujet = this.intituleSujet.value;
                this.selectedCultureScientifiqueRecontreGrandPublicJeunePublic.periodeAnnee = this.periodeAnnee.value;
                this.selectedCultureScientifiqueRecontreGrandPublicJeunePublic.periodeMois = this.periodeMois.value;
                this.selectedCultureScientifiqueRecontreGrandPublicJeunePublic.evenementGrandPublic = this.evenementGrandPublic.value;
                this.selectedCultureScientifiqueRecontreGrandPublicJeunePublic.volumePublic = this.volumePublic.value;
                this.selectedCultureScientifiqueRecontreGrandPublicJeunePublic.lienWeb = this.lienWeb.value;
    this.cultureScientifiqueRecontreGrandPublicJeunePublicService.edit().subscribe(result=>{
        this.editCultureScientifiqueRecontreGrandPublicJeunePublicDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get tempsEstimePourCetteAnnne() {
                 return this.editCultureScientifiqueRecontreGrandPublicJeunePublicForm.get('tempsEstimePourCetteAnnne');
            }
            get intituleSujet() {
                 return this.editCultureScientifiqueRecontreGrandPublicJeunePublicForm.get('intituleSujet');
            }
            get periodeAnnee() {
                 return this.editCultureScientifiqueRecontreGrandPublicJeunePublicForm.get('periodeAnnee');
            }
            get periodeMois() {
                 return this.editCultureScientifiqueRecontreGrandPublicJeunePublicForm.get('periodeMois');
            }
            get evenementGrandPublic() {
                 return this.editCultureScientifiqueRecontreGrandPublicJeunePublicForm.get('evenementGrandPublic');
            }
            get volumePublic() {
                 return this.editCultureScientifiqueRecontreGrandPublicJeunePublicForm.get('volumePublic');
            }
            get lienWeb() {
                 return this.editCultureScientifiqueRecontreGrandPublicJeunePublicForm.get('lienWeb');
            }
 
  get cultureScientifiqueRecontreGrandPublicJeunePublics(): Array<CultureScientifiqueRecontreGrandPublicJeunePublicVo> {
    return this.cultureScientifiqueRecontreGrandPublicJeunePublicService.cultureScientifiqueRecontreGrandPublicJeunePublics;
       }
  set cultureScientifiqueRecontreGrandPublicJeunePublics(value: Array<CultureScientifiqueRecontreGrandPublicJeunePublicVo>) {
        this.cultureScientifiqueRecontreGrandPublicJeunePublicService.cultureScientifiqueRecontreGrandPublicJeunePublics = value;
       } 

  get selectedCultureScientifiqueRecontreGrandPublicJeunePublic():CultureScientifiqueRecontreGrandPublicJeunePublicVo {
           return this.cultureScientifiqueRecontreGrandPublicJeunePublicService.selectedCultureScientifiqueRecontreGrandPublicJeunePublic;
       }
  set selectedCultureScientifiqueRecontreGrandPublicJeunePublic(value: CultureScientifiqueRecontreGrandPublicJeunePublicVo) {
        this.cultureScientifiqueRecontreGrandPublicJeunePublicService.selectedCultureScientifiqueRecontreGrandPublicJeunePublic = value;
       }
  
  get editCultureScientifiqueRecontreGrandPublicJeunePublicDialog():boolean {
           return this.cultureScientifiqueRecontreGrandPublicJeunePublicService.editCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
  set editCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this.cultureScientifiqueRecontreGrandPublicJeunePublicService.editCultureScientifiqueRecontreGrandPublicJeunePublicDialog= value;
       }


}