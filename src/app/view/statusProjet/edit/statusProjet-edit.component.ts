import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {StatusProjetService} from '../../../controller/service/StatusProjet.service';
import {StatusProjetVo} from '../../../controller/model/StatusProjet.model';

@Component({
  selector: 'app-statusProjet-edit',
  templateUrl: './statusProjet-edit.component.html',
  styleUrls: ['./statusProjet-edit.component.css']
})
export class StatusProjetEditComponent implements OnInit {
// declarations
 editStatusProjetForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private statusProjetService: StatusProjetService) { }
// methods 


  ngOnInit(): void {
    this.statusProjetService.editStatusProjet$.subscribe(value=>{
    if(value){
     this.editStatusProjetForm.setValue({
          libelle: this.selectedStatusProjet.libelle,
          code: this.selectedStatusProjet.code,
    });
    }
  });
  }



public edit(){ 
    this.statusProjetService.edit().subscribe(updatedStatusProjet => {
          const indexOfUpdated = this.statusProjets.findIndex(
           (StatusProjet) => StatusProjet.id === updatedStatusProjet.id
            );
            indexOfUpdated > -1 ? this.statusProjets[indexOfUpdated] = updatedStatusProjet : false;
                });
                  this.editStatusProjetDialog = false;
    this.selectedStatusProjet = new StatusProjetVo();
            }

  hideEditDialog(){
    this.editStatusProjetDialog = false;
  }
   submit(){
                this.selectedStatusProjet.libelle = this.libelle.value;
                this.selectedStatusProjet.code = this.code.value;
    this.statusProjetService.edit().subscribe(result=>{
        this.editStatusProjetDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editStatusProjetForm.get('libelle');
            }
            get code() {
                 return this.editStatusProjetForm.get('code');
            }
 
  get statusProjets(): Array<StatusProjetVo> {
    return this.statusProjetService.statusProjets;
       }
  set statusProjets(value: Array<StatusProjetVo>) {
        this.statusProjetService.statusProjets = value;
       } 

  get selectedStatusProjet():StatusProjetVo {
           return this.statusProjetService.selectedStatusProjet;
       }
  set selectedStatusProjet(value: StatusProjetVo) {
        this.statusProjetService.selectedStatusProjet = value;
       }
  
  get editStatusProjetDialog():boolean {
           return this.statusProjetService.editStatusProjetDialog;
       }
  set editStatusProjetDialog(value: boolean) {
        this.statusProjetService.editStatusProjetDialog= value;
       }


}