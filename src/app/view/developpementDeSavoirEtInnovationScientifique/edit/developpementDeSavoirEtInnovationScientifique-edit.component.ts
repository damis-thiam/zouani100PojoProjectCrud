import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {DeveloppementDeSavoirEtInnovationScientifiqueService} from '../../../controller/service/DeveloppementDeSavoirEtInnovationScientifique.service';
import {DeveloppementDeSavoirEtInnovationScientifiqueVo} from '../../../controller/model/DeveloppementDeSavoirEtInnovationScientifique.model';
import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-developpementDeSavoirEtInnovationScientifique-edit',
  templateUrl: './developpementDeSavoirEtInnovationScientifique-edit.component.html',
  styleUrls: ['./developpementDeSavoirEtInnovationScientifique-edit.component.css']
})
export class DeveloppementDeSavoirEtInnovationScientifiqueEditComponent implements OnInit {
// declarations
 editDeveloppementDeSavoirEtInnovationScientifiqueForm = new FormGroup({
      titreInstrument: new FormControl("", [Validators.required]),
      role: new FormControl("", [Validators.required]),
          anneeMiseEnOeuvre:new FormControl(0,[Validators.required]),
      codeveloppeurs: new FormControl("", [Validators.required]),
      lienWeb: new FormControl("", [Validators.required]),
  }); 
constructor(private developpementDeSavoirEtInnovationScientifiqueService: DeveloppementDeSavoirEtInnovationScientifiqueService) { }
// methods 


  ngOnInit(): void {
    this.developpementDeSavoirEtInnovationScientifiqueService.editDeveloppementDeSavoirEtInnovationScientifique$.subscribe(value=>{
    if(value){
     this.editDeveloppementDeSavoirEtInnovationScientifiqueForm.setValue({
          titreInstrument: this.selectedDeveloppementDeSavoirEtInnovationScientifique.titreInstrument,
          role: this.selectedDeveloppementDeSavoirEtInnovationScientifique.role,
          anneeMiseEnOeuvre: this.selectedDeveloppementDeSavoirEtInnovationScientifique.anneeMiseEnOeuvre,
          codeveloppeurs: this.selectedDeveloppementDeSavoirEtInnovationScientifique.codeveloppeurs,
          lienWeb: this.selectedDeveloppementDeSavoirEtInnovationScientifique.lienWeb,
    });
    }
  });
  }



public edit(){ 
    this.developpementDeSavoirEtInnovationScientifiqueService.edit().subscribe(updatedDeveloppementDeSavoirEtInnovationScientifique => {
          const indexOfUpdated = this.developpementDeSavoirEtInnovationScientifiques.findIndex(
           (DeveloppementDeSavoirEtInnovationScientifique) => DeveloppementDeSavoirEtInnovationScientifique.id === updatedDeveloppementDeSavoirEtInnovationScientifique.id
            );
            indexOfUpdated > -1 ? this.developpementDeSavoirEtInnovationScientifiques[indexOfUpdated] = updatedDeveloppementDeSavoirEtInnovationScientifique : false;
                });
                  this.editDeveloppementDeSavoirEtInnovationScientifiqueDialog = false;
    this.selectedDeveloppementDeSavoirEtInnovationScientifique = new DeveloppementDeSavoirEtInnovationScientifiqueVo();
            }

  hideEditDialog(){
    this.editDeveloppementDeSavoirEtInnovationScientifiqueDialog = false;
  }
   submit(){
                this.selectedDeveloppementDeSavoirEtInnovationScientifique.titreInstrument = this.titreInstrument.value;
                this.selectedDeveloppementDeSavoirEtInnovationScientifique.role = this.role.value;
                this.selectedDeveloppementDeSavoirEtInnovationScientifique.anneeMiseEnOeuvre = this.anneeMiseEnOeuvre.value;
                this.selectedDeveloppementDeSavoirEtInnovationScientifique.codeveloppeurs = this.codeveloppeurs.value;
                this.selectedDeveloppementDeSavoirEtInnovationScientifique.lienWeb = this.lienWeb.value;
    this.developpementDeSavoirEtInnovationScientifiqueService.edit().subscribe(result=>{
        this.editDeveloppementDeSavoirEtInnovationScientifiqueDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get titreInstrument() {
                 return this.editDeveloppementDeSavoirEtInnovationScientifiqueForm.get('titreInstrument');
            }
            get role() {
                 return this.editDeveloppementDeSavoirEtInnovationScientifiqueForm.get('role');
            }
            get anneeMiseEnOeuvre() {
                 return this.editDeveloppementDeSavoirEtInnovationScientifiqueForm.get('anneeMiseEnOeuvre');
            }
            get codeveloppeurs() {
                 return this.editDeveloppementDeSavoirEtInnovationScientifiqueForm.get('codeveloppeurs');
            }
            get lienWeb() {
                 return this.editDeveloppementDeSavoirEtInnovationScientifiqueForm.get('lienWeb');
            }
 
  get developpementDeSavoirEtInnovationScientifiques(): Array<DeveloppementDeSavoirEtInnovationScientifiqueVo> {
    return this.developpementDeSavoirEtInnovationScientifiqueService.developpementDeSavoirEtInnovationScientifiques;
       }
  set developpementDeSavoirEtInnovationScientifiques(value: Array<DeveloppementDeSavoirEtInnovationScientifiqueVo>) {
        this.developpementDeSavoirEtInnovationScientifiqueService.developpementDeSavoirEtInnovationScientifiques = value;
       } 

  get selectedDeveloppementDeSavoirEtInnovationScientifique():DeveloppementDeSavoirEtInnovationScientifiqueVo {
           return this.developpementDeSavoirEtInnovationScientifiqueService.selectedDeveloppementDeSavoirEtInnovationScientifique;
       }
  set selectedDeveloppementDeSavoirEtInnovationScientifique(value: DeveloppementDeSavoirEtInnovationScientifiqueVo) {
        this.developpementDeSavoirEtInnovationScientifiqueService.selectedDeveloppementDeSavoirEtInnovationScientifique = value;
       }
  
  get editDeveloppementDeSavoirEtInnovationScientifiqueDialog():boolean {
           return this.developpementDeSavoirEtInnovationScientifiqueService.editDeveloppementDeSavoirEtInnovationScientifiqueDialog;
       }
  set editDeveloppementDeSavoirEtInnovationScientifiqueDialog(value: boolean) {
        this.developpementDeSavoirEtInnovationScientifiqueService.editDeveloppementDeSavoirEtInnovationScientifiqueDialog= value;
       }


}