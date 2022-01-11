import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {NiveauEtudeEnseignementService} from '../../../controller/service/NiveauEtudeEnseignement.service';
import {NiveauEtudeEnseignementVo} from '../../../controller/model/NiveauEtudeEnseignement.model';
import {EnseignementVo} from '../../../controller/model/Enseignement.model';
import {NiveauEtudeVo} from '../../../controller/model/NiveauEtude.model';

@Component({
  selector: 'app-niveauEtudeEnseignement-edit',
  templateUrl: './niveauEtudeEnseignement-edit.component.html',
  styleUrls: ['./niveauEtudeEnseignement-edit.component.css']
})
export class NiveauEtudeEnseignementEditComponent implements OnInit {
// declarations
 editNiveauEtudeEnseignementForm = new FormGroup({
  }); 
constructor(private niveauEtudeEnseignementService: NiveauEtudeEnseignementService) { }
// methods 


  ngOnInit(): void {
    this.niveauEtudeEnseignementService.editNiveauEtudeEnseignement$.subscribe(value=>{
    if(value){
     this.editNiveauEtudeEnseignementForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.niveauEtudeEnseignementService.edit().subscribe(updatedNiveauEtudeEnseignement => {
          const indexOfUpdated = this.niveauEtudeEnseignements.findIndex(
           (NiveauEtudeEnseignement) => NiveauEtudeEnseignement.id === updatedNiveauEtudeEnseignement.id
            );
            indexOfUpdated > -1 ? this.niveauEtudeEnseignements[indexOfUpdated] = updatedNiveauEtudeEnseignement : false;
                });
                  this.editNiveauEtudeEnseignementDialog = false;
    this.selectedNiveauEtudeEnseignement = new NiveauEtudeEnseignementVo();
            }

  hideEditDialog(){
    this.editNiveauEtudeEnseignementDialog = false;
  }
   submit(){
    this.niveauEtudeEnseignementService.edit().subscribe(result=>{
        this.editNiveauEtudeEnseignementDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get niveauEtudeEnseignements(): Array<NiveauEtudeEnseignementVo> {
    return this.niveauEtudeEnseignementService.niveauEtudeEnseignements;
       }
  set niveauEtudeEnseignements(value: Array<NiveauEtudeEnseignementVo>) {
        this.niveauEtudeEnseignementService.niveauEtudeEnseignements = value;
       } 

  get selectedNiveauEtudeEnseignement():NiveauEtudeEnseignementVo {
           return this.niveauEtudeEnseignementService.selectedNiveauEtudeEnseignement;
       }
  set selectedNiveauEtudeEnseignement(value: NiveauEtudeEnseignementVo) {
        this.niveauEtudeEnseignementService.selectedNiveauEtudeEnseignement = value;
       }
  
  get editNiveauEtudeEnseignementDialog():boolean {
           return this.niveauEtudeEnseignementService.editNiveauEtudeEnseignementDialog;
       }
  set editNiveauEtudeEnseignementDialog(value: boolean) {
        this.niveauEtudeEnseignementService.editNiveauEtudeEnseignementDialog= value;
       }


}