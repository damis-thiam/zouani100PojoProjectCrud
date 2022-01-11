import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {DomaineScientifiqueChercheurService} from '../../../controller/service/DomaineScientifiqueChercheur.service';
import {DomaineScientifiqueChercheurVo} from '../../../controller/model/DomaineScientifiqueChercheur.model';
import {DomaineScientifiqueVo} from '../../../controller/model/DomaineScientifique.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-domaineScientifiqueChercheur-edit',
  templateUrl: './domaineScientifiqueChercheur-edit.component.html',
  styleUrls: ['./domaineScientifiqueChercheur-edit.component.css']
})
export class DomaineScientifiqueChercheurEditComponent implements OnInit {
// declarations
 editDomaineScientifiqueChercheurForm = new FormGroup({
  }); 
constructor(private domaineScientifiqueChercheurService: DomaineScientifiqueChercheurService) { }
// methods 


  ngOnInit(): void {
    this.domaineScientifiqueChercheurService.editDomaineScientifiqueChercheur$.subscribe(value=>{
    if(value){
     this.editDomaineScientifiqueChercheurForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.domaineScientifiqueChercheurService.edit().subscribe(updatedDomaineScientifiqueChercheur => {
          const indexOfUpdated = this.domaineScientifiqueChercheurs.findIndex(
           (DomaineScientifiqueChercheur) => DomaineScientifiqueChercheur.id === updatedDomaineScientifiqueChercheur.id
            );
            indexOfUpdated > -1 ? this.domaineScientifiqueChercheurs[indexOfUpdated] = updatedDomaineScientifiqueChercheur : false;
                });
                  this.editDomaineScientifiqueChercheurDialog = false;
    this.selectedDomaineScientifiqueChercheur = new DomaineScientifiqueChercheurVo();
            }

  hideEditDialog(){
    this.editDomaineScientifiqueChercheurDialog = false;
  }
   submit(){
    this.domaineScientifiqueChercheurService.edit().subscribe(result=>{
        this.editDomaineScientifiqueChercheurDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get domaineScientifiqueChercheurs(): Array<DomaineScientifiqueChercheurVo> {
    return this.domaineScientifiqueChercheurService.domaineScientifiqueChercheurs;
       }
  set domaineScientifiqueChercheurs(value: Array<DomaineScientifiqueChercheurVo>) {
        this.domaineScientifiqueChercheurService.domaineScientifiqueChercheurs = value;
       } 

  get selectedDomaineScientifiqueChercheur():DomaineScientifiqueChercheurVo {
           return this.domaineScientifiqueChercheurService.selectedDomaineScientifiqueChercheur;
       }
  set selectedDomaineScientifiqueChercheur(value: DomaineScientifiqueChercheurVo) {
        this.domaineScientifiqueChercheurService.selectedDomaineScientifiqueChercheur = value;
       }
  
  get editDomaineScientifiqueChercheurDialog():boolean {
           return this.domaineScientifiqueChercheurService.editDomaineScientifiqueChercheurDialog;
       }
  set editDomaineScientifiqueChercheurDialog(value: boolean) {
        this.domaineScientifiqueChercheurService.editDomaineScientifiqueChercheurDialog= value;
       }


}