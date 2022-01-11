import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService} from '../../../controller/service/TypeSavoirDeveloppementDeSavoirEtInnovationScientifique.service';
import {TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo} from '../../../controller/model/TypeSavoirDeveloppementDeSavoirEtInnovationScientifique.model';
import {TypeSavoirVo} from '../../../controller/model/TypeSavoir.model';
import {DeveloppementDeSavoirEtInnovationScientifiqueVo} from '../../../controller/model/DeveloppementDeSavoirEtInnovationScientifique.model';

@Component({
  selector: 'app-typeSavoirDeveloppementDeSavoirEtInnovationScientifique-edit',
  templateUrl: './typeSavoirDeveloppementDeSavoirEtInnovationScientifique-edit.component.html',
  styleUrls: ['./typeSavoirDeveloppementDeSavoirEtInnovationScientifique-edit.component.css']
})
export class TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueEditComponent implements OnInit {
// declarations
 editTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueForm = new FormGroup({
  }); 
constructor(private typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService: TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService) { }
// methods 


  ngOnInit(): void {
    this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.editTypeSavoirDeveloppementDeSavoirEtInnovationScientifique$.subscribe(value=>{
    if(value){
     this.editTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.edit().subscribe(updatedTypeSavoirDeveloppementDeSavoirEtInnovationScientifique => {
          const indexOfUpdated = this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiques.findIndex(
           (TypeSavoirDeveloppementDeSavoirEtInnovationScientifique) => TypeSavoirDeveloppementDeSavoirEtInnovationScientifique.id === updatedTypeSavoirDeveloppementDeSavoirEtInnovationScientifique.id
            );
            indexOfUpdated > -1 ? this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiques[indexOfUpdated] = updatedTypeSavoirDeveloppementDeSavoirEtInnovationScientifique : false;
                });
                  this.editTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog = false;
    this.selectedTypeSavoirDeveloppementDeSavoirEtInnovationScientifique = new TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo();
            }

  hideEditDialog(){
    this.editTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog = false;
  }
   submit(){
    this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.edit().subscribe(result=>{
        this.editTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get typeSavoirDeveloppementDeSavoirEtInnovationScientifiques(): Array<TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo> {
    return this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.typeSavoirDeveloppementDeSavoirEtInnovationScientifiques;
       }
  set typeSavoirDeveloppementDeSavoirEtInnovationScientifiques(value: Array<TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo>) {
        this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.typeSavoirDeveloppementDeSavoirEtInnovationScientifiques = value;
       } 

  get selectedTypeSavoirDeveloppementDeSavoirEtInnovationScientifique():TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo {
           return this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.selectedTypeSavoirDeveloppementDeSavoirEtInnovationScientifique;
       }
  set selectedTypeSavoirDeveloppementDeSavoirEtInnovationScientifique(value: TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo) {
        this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.selectedTypeSavoirDeveloppementDeSavoirEtInnovationScientifique = value;
       }
  
  get editTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog():boolean {
           return this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.editTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog;
       }
  set editTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog(value: boolean) {
        this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.editTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog= value;
       }


}