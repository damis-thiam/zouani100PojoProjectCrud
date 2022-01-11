import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {RoleProjetService} from '../../../controller/service/RoleProjet.service';
import {RoleProjetVo} from '../../../controller/model/RoleProjet.model';

@Component({
  selector: 'app-roleProjet-edit',
  templateUrl: './roleProjet-edit.component.html',
  styleUrls: ['./roleProjet-edit.component.css']
})
export class RoleProjetEditComponent implements OnInit {
// declarations
 editRoleProjetForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
  }); 
constructor(private roleProjetService: RoleProjetService) { }
// methods 


  ngOnInit(): void {
    this.roleProjetService.editRoleProjet$.subscribe(value=>{
    if(value){
     this.editRoleProjetForm.setValue({
          libelle: this.selectedRoleProjet.libelle,
          code: this.selectedRoleProjet.code,
          description: this.selectedRoleProjet.description,
    });
    }
  });
  }



public edit(){ 
    this.roleProjetService.edit().subscribe(updatedRoleProjet => {
          const indexOfUpdated = this.roleProjets.findIndex(
           (RoleProjet) => RoleProjet.id === updatedRoleProjet.id
            );
            indexOfUpdated > -1 ? this.roleProjets[indexOfUpdated] = updatedRoleProjet : false;
                });
                  this.editRoleProjetDialog = false;
    this.selectedRoleProjet = new RoleProjetVo();
            }

  hideEditDialog(){
    this.editRoleProjetDialog = false;
  }
   submit(){
                this.selectedRoleProjet.libelle = this.libelle.value;
                this.selectedRoleProjet.code = this.code.value;
                this.selectedRoleProjet.description = this.description.value;
    this.roleProjetService.edit().subscribe(result=>{
        this.editRoleProjetDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editRoleProjetForm.get('libelle');
            }
            get code() {
                 return this.editRoleProjetForm.get('code');
            }
            get description() {
                 return this.editRoleProjetForm.get('description');
            }
 
  get roleProjets(): Array<RoleProjetVo> {
    return this.roleProjetService.roleProjets;
       }
  set roleProjets(value: Array<RoleProjetVo>) {
        this.roleProjetService.roleProjets = value;
       } 

  get selectedRoleProjet():RoleProjetVo {
           return this.roleProjetService.selectedRoleProjet;
       }
  set selectedRoleProjet(value: RoleProjetVo) {
        this.roleProjetService.selectedRoleProjet = value;
       }
  
  get editRoleProjetDialog():boolean {
           return this.roleProjetService.editRoleProjetDialog;
       }
  set editRoleProjetDialog(value: boolean) {
        this.roleProjetService.editRoleProjetDialog= value;
       }


}