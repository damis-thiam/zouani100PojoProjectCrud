import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {CommunauteSavoirChercheurService} from '../../../controller/service/CommunauteSavoirChercheur.service';
import {CommunauteSavoirChercheurVo} from '../../../controller/model/CommunauteSavoirChercheur.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-communauteSavoirChercheur-edit',
  templateUrl: './communauteSavoirChercheur-edit.component.html',
  styleUrls: ['./communauteSavoirChercheur-edit.component.css']
})
export class CommunauteSavoirChercheurEditComponent implements OnInit {
// declarations
 editCommunauteSavoirChercheurForm = new FormGroup({
      communauteSavoir: new FormControl("", [Validators.required]),
  }); 
constructor(private communauteSavoirChercheurService: CommunauteSavoirChercheurService) { }
// methods 


  ngOnInit(): void {
    this.communauteSavoirChercheurService.editCommunauteSavoirChercheur$.subscribe(value=>{
    if(value){
     this.editCommunauteSavoirChercheurForm.setValue({
          communauteSavoir: this.selectedCommunauteSavoirChercheur.communauteSavoir,
    });
    }
  });
  }



public edit(){ 
    this.communauteSavoirChercheurService.edit().subscribe(updatedCommunauteSavoirChercheur => {
          const indexOfUpdated = this.communauteSavoirChercheurs.findIndex(
           (CommunauteSavoirChercheur) => CommunauteSavoirChercheur.id === updatedCommunauteSavoirChercheur.id
            );
            indexOfUpdated > -1 ? this.communauteSavoirChercheurs[indexOfUpdated] = updatedCommunauteSavoirChercheur : false;
                });
                  this.editCommunauteSavoirChercheurDialog = false;
    this.selectedCommunauteSavoirChercheur = new CommunauteSavoirChercheurVo();
            }

  hideEditDialog(){
    this.editCommunauteSavoirChercheurDialog = false;
  }
   submit(){
                this.selectedCommunauteSavoirChercheur.communauteSavoir = this.communauteSavoir.value;
    this.communauteSavoirChercheurService.edit().subscribe(result=>{
        this.editCommunauteSavoirChercheurDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get communauteSavoir() {
                 return this.editCommunauteSavoirChercheurForm.get('communauteSavoir');
            }
 
  get communauteSavoirChercheurs(): Array<CommunauteSavoirChercheurVo> {
    return this.communauteSavoirChercheurService.communauteSavoirChercheurs;
       }
  set communauteSavoirChercheurs(value: Array<CommunauteSavoirChercheurVo>) {
        this.communauteSavoirChercheurService.communauteSavoirChercheurs = value;
       } 

  get selectedCommunauteSavoirChercheur():CommunauteSavoirChercheurVo {
           return this.communauteSavoirChercheurService.selectedCommunauteSavoirChercheur;
       }
  set selectedCommunauteSavoirChercheur(value: CommunauteSavoirChercheurVo) {
        this.communauteSavoirChercheurService.selectedCommunauteSavoirChercheur = value;
       }
  
  get editCommunauteSavoirChercheurDialog():boolean {
           return this.communauteSavoirChercheurService.editCommunauteSavoirChercheurDialog;
       }
  set editCommunauteSavoirChercheurDialog(value: boolean) {
        this.communauteSavoirChercheurService.editCommunauteSavoirChercheurDialog= value;
       }


}