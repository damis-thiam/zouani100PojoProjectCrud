import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {EnjeuxIrdChercheurService} from '../../../controller/service/EnjeuxIrdChercheur.service';
import {EnjeuxIrdChercheurVo} from '../../../controller/model/EnjeuxIrdChercheur.model';
import {EnjeuxIrdVo} from '../../../controller/model/EnjeuxIrd.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-enjeuxIrdChercheur-edit',
  templateUrl: './enjeuxIrdChercheur-edit.component.html',
  styleUrls: ['./enjeuxIrdChercheur-edit.component.css']
})
export class EnjeuxIrdChercheurEditComponent implements OnInit {
// declarations
 editEnjeuxIrdChercheurForm = new FormGroup({
  }); 
constructor(private enjeuxIrdChercheurService: EnjeuxIrdChercheurService) { }
// methods 


  ngOnInit(): void {
    this.enjeuxIrdChercheurService.editEnjeuxIrdChercheur$.subscribe(value=>{
    if(value){
     this.editEnjeuxIrdChercheurForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.enjeuxIrdChercheurService.edit().subscribe(updatedEnjeuxIrdChercheur => {
          const indexOfUpdated = this.enjeuxIrdChercheurs.findIndex(
           (EnjeuxIrdChercheur) => EnjeuxIrdChercheur.id === updatedEnjeuxIrdChercheur.id
            );
            indexOfUpdated > -1 ? this.enjeuxIrdChercheurs[indexOfUpdated] = updatedEnjeuxIrdChercheur : false;
                });
                  this.editEnjeuxIrdChercheurDialog = false;
    this.selectedEnjeuxIrdChercheur = new EnjeuxIrdChercheurVo();
            }

  hideEditDialog(){
    this.editEnjeuxIrdChercheurDialog = false;
  }
   submit(){
    this.enjeuxIrdChercheurService.edit().subscribe(result=>{
        this.editEnjeuxIrdChercheurDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get enjeuxIrdChercheurs(): Array<EnjeuxIrdChercheurVo> {
    return this.enjeuxIrdChercheurService.enjeuxIrdChercheurs;
       }
  set enjeuxIrdChercheurs(value: Array<EnjeuxIrdChercheurVo>) {
        this.enjeuxIrdChercheurService.enjeuxIrdChercheurs = value;
       } 

  get selectedEnjeuxIrdChercheur():EnjeuxIrdChercheurVo {
           return this.enjeuxIrdChercheurService.selectedEnjeuxIrdChercheur;
       }
  set selectedEnjeuxIrdChercheur(value: EnjeuxIrdChercheurVo) {
        this.enjeuxIrdChercheurService.selectedEnjeuxIrdChercheur = value;
       }
  
  get editEnjeuxIrdChercheurDialog():boolean {
           return this.enjeuxIrdChercheurService.editEnjeuxIrdChercheurDialog;
       }
  set editEnjeuxIrdChercheurDialog(value: boolean) {
        this.enjeuxIrdChercheurService.editEnjeuxIrdChercheurDialog= value;
       }


}