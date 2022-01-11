import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {ModeDiffusionService} from '../../../controller/service/ModeDiffusion.service';
import {ModeDiffusionVo} from '../../../controller/model/ModeDiffusion.model';
import {TypeSavoirVo} from '../../../controller/model/TypeSavoir.model';

@Component({
  selector: 'app-modeDiffusion-edit',
  templateUrl: './modeDiffusion-edit.component.html',
  styleUrls: ['./modeDiffusion-edit.component.css']
})
export class ModeDiffusionEditComponent implements OnInit {
// declarations
 editModeDiffusionForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private modeDiffusionService: ModeDiffusionService) { }
// methods 


  ngOnInit(): void {
    this.modeDiffusionService.editModeDiffusion$.subscribe(value=>{
    if(value){
     this.editModeDiffusionForm.setValue({
          libelle: this.selectedModeDiffusion.libelle,
          code: this.selectedModeDiffusion.code,
    });
    }
  });
  }



public edit(){ 
    this.modeDiffusionService.edit().subscribe(updatedModeDiffusion => {
          const indexOfUpdated = this.modeDiffusions.findIndex(
           (ModeDiffusion) => ModeDiffusion.id === updatedModeDiffusion.id
            );
            indexOfUpdated > -1 ? this.modeDiffusions[indexOfUpdated] = updatedModeDiffusion : false;
                });
                  this.editModeDiffusionDialog = false;
    this.selectedModeDiffusion = new ModeDiffusionVo();
            }

  hideEditDialog(){
    this.editModeDiffusionDialog = false;
  }
   submit(){
                this.selectedModeDiffusion.libelle = this.libelle.value;
                this.selectedModeDiffusion.code = this.code.value;
    this.modeDiffusionService.edit().subscribe(result=>{
        this.editModeDiffusionDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editModeDiffusionForm.get('libelle');
            }
            get code() {
                 return this.editModeDiffusionForm.get('code');
            }
 
  get modeDiffusions(): Array<ModeDiffusionVo> {
    return this.modeDiffusionService.modeDiffusions;
       }
  set modeDiffusions(value: Array<ModeDiffusionVo>) {
        this.modeDiffusionService.modeDiffusions = value;
       } 

  get selectedModeDiffusion():ModeDiffusionVo {
           return this.modeDiffusionService.selectedModeDiffusion;
       }
  set selectedModeDiffusion(value: ModeDiffusionVo) {
        this.modeDiffusionService.selectedModeDiffusion = value;
       }
  
  get editModeDiffusionDialog():boolean {
           return this.modeDiffusionService.editModeDiffusionDialog;
       }
  set editModeDiffusionDialog(value: boolean) {
        this.modeDiffusionService.editModeDiffusionDialog= value;
       }


}