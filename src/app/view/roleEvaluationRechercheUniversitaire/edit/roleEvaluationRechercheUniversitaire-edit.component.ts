import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {RoleEvaluationRechercheUniversitaireService} from '../../../controller/service/RoleEvaluationRechercheUniversitaire.service';
import {RoleEvaluationRechercheUniversitaireVo} from '../../../controller/model/RoleEvaluationRechercheUniversitaire.model';

@Component({
  selector: 'app-roleEvaluationRechercheUniversitaire-edit',
  templateUrl: './roleEvaluationRechercheUniversitaire-edit.component.html',
  styleUrls: ['./roleEvaluationRechercheUniversitaire-edit.component.css']
})
export class RoleEvaluationRechercheUniversitaireEditComponent implements OnInit {
// declarations
 editRoleEvaluationRechercheUniversitaireForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
  }); 
constructor(private roleEvaluationRechercheUniversitaireService: RoleEvaluationRechercheUniversitaireService) { }
// methods 


  ngOnInit(): void {
    this.roleEvaluationRechercheUniversitaireService.editRoleEvaluationRechercheUniversitaire$.subscribe(value=>{
    if(value){
     this.editRoleEvaluationRechercheUniversitaireForm.setValue({
          libelle: this.selectedRoleEvaluationRechercheUniversitaire.libelle,
          code: this.selectedRoleEvaluationRechercheUniversitaire.code,
          description: this.selectedRoleEvaluationRechercheUniversitaire.description,
    });
    }
  });
  }



public edit(){ 
    this.roleEvaluationRechercheUniversitaireService.edit().subscribe(updatedRoleEvaluationRechercheUniversitaire => {
          const indexOfUpdated = this.roleEvaluationRechercheUniversitaires.findIndex(
           (RoleEvaluationRechercheUniversitaire) => RoleEvaluationRechercheUniversitaire.id === updatedRoleEvaluationRechercheUniversitaire.id
            );
            indexOfUpdated > -1 ? this.roleEvaluationRechercheUniversitaires[indexOfUpdated] = updatedRoleEvaluationRechercheUniversitaire : false;
                });
                  this.editRoleEvaluationRechercheUniversitaireDialog = false;
    this.selectedRoleEvaluationRechercheUniversitaire = new RoleEvaluationRechercheUniversitaireVo();
            }

  hideEditDialog(){
    this.editRoleEvaluationRechercheUniversitaireDialog = false;
  }
   submit(){
                this.selectedRoleEvaluationRechercheUniversitaire.libelle = this.libelle.value;
                this.selectedRoleEvaluationRechercheUniversitaire.code = this.code.value;
                this.selectedRoleEvaluationRechercheUniversitaire.description = this.description.value;
    this.roleEvaluationRechercheUniversitaireService.edit().subscribe(result=>{
        this.editRoleEvaluationRechercheUniversitaireDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editRoleEvaluationRechercheUniversitaireForm.get('libelle');
            }
            get code() {
                 return this.editRoleEvaluationRechercheUniversitaireForm.get('code');
            }
            get description() {
                 return this.editRoleEvaluationRechercheUniversitaireForm.get('description');
            }
 
  get roleEvaluationRechercheUniversitaires(): Array<RoleEvaluationRechercheUniversitaireVo> {
    return this.roleEvaluationRechercheUniversitaireService.roleEvaluationRechercheUniversitaires;
       }
  set roleEvaluationRechercheUniversitaires(value: Array<RoleEvaluationRechercheUniversitaireVo>) {
        this.roleEvaluationRechercheUniversitaireService.roleEvaluationRechercheUniversitaires = value;
       } 

  get selectedRoleEvaluationRechercheUniversitaire():RoleEvaluationRechercheUniversitaireVo {
           return this.roleEvaluationRechercheUniversitaireService.selectedRoleEvaluationRechercheUniversitaire;
       }
  set selectedRoleEvaluationRechercheUniversitaire(value: RoleEvaluationRechercheUniversitaireVo) {
        this.roleEvaluationRechercheUniversitaireService.selectedRoleEvaluationRechercheUniversitaire = value;
       }
  
  get editRoleEvaluationRechercheUniversitaireDialog():boolean {
           return this.roleEvaluationRechercheUniversitaireService.editRoleEvaluationRechercheUniversitaireDialog;
       }
  set editRoleEvaluationRechercheUniversitaireDialog(value: boolean) {
        this.roleEvaluationRechercheUniversitaireService.editRoleEvaluationRechercheUniversitaireDialog= value;
       }


}