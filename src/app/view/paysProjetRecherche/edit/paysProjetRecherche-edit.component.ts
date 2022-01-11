import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {PaysProjetRechercheService} from '../../../controller/service/PaysProjetRecherche.service';
import {PaysProjetRechercheVo} from '../../../controller/model/PaysProjetRecherche.model';
import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-paysProjetRecherche-edit',
  templateUrl: './paysProjetRecherche-edit.component.html',
  styleUrls: ['./paysProjetRecherche-edit.component.css']
})
export class PaysProjetRechercheEditComponent implements OnInit {
// declarations
 editPaysProjetRechercheForm = new FormGroup({
  }); 
constructor(private paysProjetRechercheService: PaysProjetRechercheService) { }
// methods 


  ngOnInit(): void {
    this.paysProjetRechercheService.editPaysProjetRecherche$.subscribe(value=>{
    if(value){
     this.editPaysProjetRechercheForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.paysProjetRechercheService.edit().subscribe(updatedPaysProjetRecherche => {
          const indexOfUpdated = this.paysProjetRecherches.findIndex(
           (PaysProjetRecherche) => PaysProjetRecherche.id === updatedPaysProjetRecherche.id
            );
            indexOfUpdated > -1 ? this.paysProjetRecherches[indexOfUpdated] = updatedPaysProjetRecherche : false;
                });
                  this.editPaysProjetRechercheDialog = false;
    this.selectedPaysProjetRecherche = new PaysProjetRechercheVo();
            }

  hideEditDialog(){
    this.editPaysProjetRechercheDialog = false;
  }
   submit(){
    this.paysProjetRechercheService.edit().subscribe(result=>{
        this.editPaysProjetRechercheDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get paysProjetRecherches(): Array<PaysProjetRechercheVo> {
    return this.paysProjetRechercheService.paysProjetRecherches;
       }
  set paysProjetRecherches(value: Array<PaysProjetRechercheVo>) {
        this.paysProjetRechercheService.paysProjetRecherches = value;
       } 

  get selectedPaysProjetRecherche():PaysProjetRechercheVo {
           return this.paysProjetRechercheService.selectedPaysProjetRecherche;
       }
  set selectedPaysProjetRecherche(value: PaysProjetRechercheVo) {
        this.paysProjetRechercheService.selectedPaysProjetRecherche = value;
       }
  
  get editPaysProjetRechercheDialog():boolean {
           return this.paysProjetRechercheService.editPaysProjetRechercheDialog;
       }
  set editPaysProjetRechercheDialog(value: boolean) {
        this.paysProjetRechercheService.editPaysProjetRechercheDialog= value;
       }


}