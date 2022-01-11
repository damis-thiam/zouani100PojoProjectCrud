import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {EtablissementEnseignementService} from '../../../controller/service/EtablissementEnseignement.service';
import {EtablissementEnseignementVo} from '../../../controller/model/EtablissementEnseignement.model';
import {EnseignementVo} from '../../../controller/model/Enseignement.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';

@Component({
  selector: 'app-etablissementEnseignement-edit',
  templateUrl: './etablissementEnseignement-edit.component.html',
  styleUrls: ['./etablissementEnseignement-edit.component.css']
})
export class EtablissementEnseignementEditComponent implements OnInit {
// declarations
 editEtablissementEnseignementForm = new FormGroup({
  }); 
constructor(private etablissementEnseignementService: EtablissementEnseignementService) { }
// methods 


  ngOnInit(): void {
    this.etablissementEnseignementService.editEtablissementEnseignement$.subscribe(value=>{
    if(value){
     this.editEtablissementEnseignementForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.etablissementEnseignementService.edit().subscribe(updatedEtablissementEnseignement => {
          const indexOfUpdated = this.etablissementEnseignements.findIndex(
           (EtablissementEnseignement) => EtablissementEnseignement.id === updatedEtablissementEnseignement.id
            );
            indexOfUpdated > -1 ? this.etablissementEnseignements[indexOfUpdated] = updatedEtablissementEnseignement : false;
                });
                  this.editEtablissementEnseignementDialog = false;
    this.selectedEtablissementEnseignement = new EtablissementEnseignementVo();
            }

  hideEditDialog(){
    this.editEtablissementEnseignementDialog = false;
  }
   submit(){
    this.etablissementEnseignementService.edit().subscribe(result=>{
        this.editEtablissementEnseignementDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get etablissementEnseignements(): Array<EtablissementEnseignementVo> {
    return this.etablissementEnseignementService.etablissementEnseignements;
       }
  set etablissementEnseignements(value: Array<EtablissementEnseignementVo>) {
        this.etablissementEnseignementService.etablissementEnseignements = value;
       } 

  get selectedEtablissementEnseignement():EtablissementEnseignementVo {
           return this.etablissementEnseignementService.selectedEtablissementEnseignement;
       }
  set selectedEtablissementEnseignement(value: EtablissementEnseignementVo) {
        this.etablissementEnseignementService.selectedEtablissementEnseignement = value;
       }
  
  get editEtablissementEnseignementDialog():boolean {
           return this.etablissementEnseignementService.editEtablissementEnseignementDialog;
       }
  set editEtablissementEnseignementDialog(value: boolean) {
        this.etablissementEnseignementService.editEtablissementEnseignementDialog= value;
       }


}