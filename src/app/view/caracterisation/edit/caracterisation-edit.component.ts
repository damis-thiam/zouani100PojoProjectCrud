import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {CaracterisationService} from '../../../controller/service/Caracterisation.service';
import {CaracterisationVo} from '../../../controller/model/Caracterisation.model';

@Component({
  selector: 'app-caracterisation-edit',
  templateUrl: './caracterisation-edit.component.html',
  styleUrls: ['./caracterisation-edit.component.css']
})
export class CaracterisationEditComponent implements OnInit {
// declarations
 editCaracterisationForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private caracterisationService: CaracterisationService) { }
// methods 


  ngOnInit(): void {
    this.caracterisationService.editCaracterisation$.subscribe(value=>{
    if(value){
     this.editCaracterisationForm.setValue({
          libelle: this.selectedCaracterisation.libelle,
          code: this.selectedCaracterisation.code,
    });
    }
  });
  }



public edit(){ 
    this.caracterisationService.edit().subscribe(updatedCaracterisation => {
          const indexOfUpdated = this.caracterisations.findIndex(
           (Caracterisation) => Caracterisation.id === updatedCaracterisation.id
            );
            indexOfUpdated > -1 ? this.caracterisations[indexOfUpdated] = updatedCaracterisation : false;
                });
                  this.editCaracterisationDialog = false;
    this.selectedCaracterisation = new CaracterisationVo();
            }

  hideEditDialog(){
    this.editCaracterisationDialog = false;
  }
   submit(){
                this.selectedCaracterisation.libelle = this.libelle.value;
                this.selectedCaracterisation.code = this.code.value;
    this.caracterisationService.edit().subscribe(result=>{
        this.editCaracterisationDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editCaracterisationForm.get('libelle');
            }
            get code() {
                 return this.editCaracterisationForm.get('code');
            }
 
  get caracterisations(): Array<CaracterisationVo> {
    return this.caracterisationService.caracterisations;
       }
  set caracterisations(value: Array<CaracterisationVo>) {
        this.caracterisationService.caracterisations = value;
       } 

  get selectedCaracterisation():CaracterisationVo {
           return this.caracterisationService.selectedCaracterisation;
       }
  set selectedCaracterisation(value: CaracterisationVo) {
        this.caracterisationService.selectedCaracterisation = value;
       }
  
  get editCaracterisationDialog():boolean {
           return this.caracterisationService.editCaracterisationDialog;
       }
  set editCaracterisationDialog(value: boolean) {
        this.caracterisationService.editCaracterisationDialog= value;
       }


}