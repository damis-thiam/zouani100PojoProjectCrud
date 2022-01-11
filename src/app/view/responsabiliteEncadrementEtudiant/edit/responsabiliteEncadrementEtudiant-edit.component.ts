import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {ResponsabiliteEncadrementEtudiantService} from '../../../controller/service/ResponsabiliteEncadrementEtudiant.service';
import {ResponsabiliteEncadrementEtudiantVo} from '../../../controller/model/ResponsabiliteEncadrementEtudiant.model';

@Component({
  selector: 'app-responsabiliteEncadrementEtudiant-edit',
  templateUrl: './responsabiliteEncadrementEtudiant-edit.component.html',
  styleUrls: ['./responsabiliteEncadrementEtudiant-edit.component.css']
})
export class ResponsabiliteEncadrementEtudiantEditComponent implements OnInit {
// declarations
 editResponsabiliteEncadrementEtudiantForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private responsabiliteEncadrementEtudiantService: ResponsabiliteEncadrementEtudiantService) { }
// methods 


  ngOnInit(): void {
    this.responsabiliteEncadrementEtudiantService.editResponsabiliteEncadrementEtudiant$.subscribe(value=>{
    if(value){
     this.editResponsabiliteEncadrementEtudiantForm.setValue({
          libelle: this.selectedResponsabiliteEncadrementEtudiant.libelle,
          code: this.selectedResponsabiliteEncadrementEtudiant.code,
    });
    }
  });
  }



public edit(){ 
    this.responsabiliteEncadrementEtudiantService.edit().subscribe(updatedResponsabiliteEncadrementEtudiant => {
          const indexOfUpdated = this.responsabiliteEncadrementEtudiants.findIndex(
           (ResponsabiliteEncadrementEtudiant) => ResponsabiliteEncadrementEtudiant.id === updatedResponsabiliteEncadrementEtudiant.id
            );
            indexOfUpdated > -1 ? this.responsabiliteEncadrementEtudiants[indexOfUpdated] = updatedResponsabiliteEncadrementEtudiant : false;
                });
                  this.editResponsabiliteEncadrementEtudiantDialog = false;
    this.selectedResponsabiliteEncadrementEtudiant = new ResponsabiliteEncadrementEtudiantVo();
            }

  hideEditDialog(){
    this.editResponsabiliteEncadrementEtudiantDialog = false;
  }
   submit(){
                this.selectedResponsabiliteEncadrementEtudiant.libelle = this.libelle.value;
                this.selectedResponsabiliteEncadrementEtudiant.code = this.code.value;
    this.responsabiliteEncadrementEtudiantService.edit().subscribe(result=>{
        this.editResponsabiliteEncadrementEtudiantDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editResponsabiliteEncadrementEtudiantForm.get('libelle');
            }
            get code() {
                 return this.editResponsabiliteEncadrementEtudiantForm.get('code');
            }
 
  get responsabiliteEncadrementEtudiants(): Array<ResponsabiliteEncadrementEtudiantVo> {
    return this.responsabiliteEncadrementEtudiantService.responsabiliteEncadrementEtudiants;
       }
  set responsabiliteEncadrementEtudiants(value: Array<ResponsabiliteEncadrementEtudiantVo>) {
        this.responsabiliteEncadrementEtudiantService.responsabiliteEncadrementEtudiants = value;
       } 

  get selectedResponsabiliteEncadrementEtudiant():ResponsabiliteEncadrementEtudiantVo {
           return this.responsabiliteEncadrementEtudiantService.selectedResponsabiliteEncadrementEtudiant;
       }
  set selectedResponsabiliteEncadrementEtudiant(value: ResponsabiliteEncadrementEtudiantVo) {
        this.responsabiliteEncadrementEtudiantService.selectedResponsabiliteEncadrementEtudiant = value;
       }
  
  get editResponsabiliteEncadrementEtudiantDialog():boolean {
           return this.responsabiliteEncadrementEtudiantService.editResponsabiliteEncadrementEtudiantDialog;
       }
  set editResponsabiliteEncadrementEtudiantDialog(value: boolean) {
        this.responsabiliteEncadrementEtudiantService.editResponsabiliteEncadrementEtudiantDialog= value;
       }


}