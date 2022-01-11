import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService} from '../../../controller/service/ModeDiffusionDeveloppementDeSavoirEtInnovationScientifique.service';
import {ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo} from '../../../controller/model/ModeDiffusionDeveloppementDeSavoirEtInnovationScientifique.model';
import {ModeDiffusionVo} from '../../../controller/model/ModeDiffusion.model';
import {DeveloppementDeSavoirEtInnovationScientifiqueVo} from '../../../controller/model/DeveloppementDeSavoirEtInnovationScientifique.model';

@Component({
  selector: 'app-modeDiffusionDeveloppementDeSavoirEtInnovationScientifique-edit',
  templateUrl: './modeDiffusionDeveloppementDeSavoirEtInnovationScientifique-edit.component.html',
  styleUrls: ['./modeDiffusionDeveloppementDeSavoirEtInnovationScientifique-edit.component.css']
})
export class ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueEditComponent implements OnInit {
// declarations
 editModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueForm = new FormGroup({
  }); 
constructor(private modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService: ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService) { }
// methods 


  ngOnInit(): void {
    this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.editModeDiffusionDeveloppementDeSavoirEtInnovationScientifique$.subscribe(value=>{
    if(value){
     this.editModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.edit().subscribe(updatedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique => {
          const indexOfUpdated = this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiques.findIndex(
           (ModeDiffusionDeveloppementDeSavoirEtInnovationScientifique) => ModeDiffusionDeveloppementDeSavoirEtInnovationScientifique.id === updatedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique.id
            );
            indexOfUpdated > -1 ? this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiques[indexOfUpdated] = updatedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique : false;
                });
                  this.editModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog = false;
    this.selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique = new ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo();
            }

  hideEditDialog(){
    this.editModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog = false;
  }
   submit(){
    this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.edit().subscribe(result=>{
        this.editModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get modeDiffusionDeveloppementDeSavoirEtInnovationScientifiques(): Array<ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo> {
    return this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiques;
       }
  set modeDiffusionDeveloppementDeSavoirEtInnovationScientifiques(value: Array<ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo>) {
        this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiques = value;
       } 

  get selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique():ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo {
           return this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique;
       }
  set selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique(value: ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo) {
        this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique = value;
       }
  
  get editModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog():boolean {
           return this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.editModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog;
       }
  set editModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog(value: boolean) {
        this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.editModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog= value;
       }


}