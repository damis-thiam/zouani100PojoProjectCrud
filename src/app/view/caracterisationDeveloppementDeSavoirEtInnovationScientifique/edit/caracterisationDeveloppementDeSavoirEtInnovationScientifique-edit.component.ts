import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueService} from '../../../controller/service/CaracterisationDeveloppementDeSavoirEtInnovationScientifique.service';
import {CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo} from '../../../controller/model/CaracterisationDeveloppementDeSavoirEtInnovationScientifique.model';
import {CaracterisationVo} from '../../../controller/model/Caracterisation.model';
import {DeveloppementDeSavoirEtInnovationScientifiqueVo} from '../../../controller/model/DeveloppementDeSavoirEtInnovationScientifique.model';

@Component({
  selector: 'app-caracterisationDeveloppementDeSavoirEtInnovationScientifique-edit',
  templateUrl: './caracterisationDeveloppementDeSavoirEtInnovationScientifique-edit.component.html',
  styleUrls: ['./caracterisationDeveloppementDeSavoirEtInnovationScientifique-edit.component.css']
})
export class CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueEditComponent implements OnInit {
// declarations
 editCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueForm = new FormGroup({
  }); 
constructor(private caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService: CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueService) { }
// methods 


  ngOnInit(): void {
    this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.editCaracterisationDeveloppementDeSavoirEtInnovationScientifique$.subscribe(value=>{
    if(value){
     this.editCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.edit().subscribe(updatedCaracterisationDeveloppementDeSavoirEtInnovationScientifique => {
          const indexOfUpdated = this.caracterisationDeveloppementDeSavoirEtInnovationScientifiques.findIndex(
           (CaracterisationDeveloppementDeSavoirEtInnovationScientifique) => CaracterisationDeveloppementDeSavoirEtInnovationScientifique.id === updatedCaracterisationDeveloppementDeSavoirEtInnovationScientifique.id
            );
            indexOfUpdated > -1 ? this.caracterisationDeveloppementDeSavoirEtInnovationScientifiques[indexOfUpdated] = updatedCaracterisationDeveloppementDeSavoirEtInnovationScientifique : false;
                });
                  this.editCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog = false;
    this.selectedCaracterisationDeveloppementDeSavoirEtInnovationScientifique = new CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo();
            }

  hideEditDialog(){
    this.editCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog = false;
  }
   submit(){
    this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.edit().subscribe(result=>{
        this.editCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get caracterisationDeveloppementDeSavoirEtInnovationScientifiques(): Array<CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo> {
    return this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.caracterisationDeveloppementDeSavoirEtInnovationScientifiques;
       }
  set caracterisationDeveloppementDeSavoirEtInnovationScientifiques(value: Array<CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo>) {
        this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.caracterisationDeveloppementDeSavoirEtInnovationScientifiques = value;
       } 

  get selectedCaracterisationDeveloppementDeSavoirEtInnovationScientifique():CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo {
           return this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.selectedCaracterisationDeveloppementDeSavoirEtInnovationScientifique;
       }
  set selectedCaracterisationDeveloppementDeSavoirEtInnovationScientifique(value: CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo) {
        this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.selectedCaracterisationDeveloppementDeSavoirEtInnovationScientifique = value;
       }
  
  get editCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog():boolean {
           return this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.editCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog;
       }
  set editCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog(value: boolean) {
        this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.editCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog= value;
       }


}