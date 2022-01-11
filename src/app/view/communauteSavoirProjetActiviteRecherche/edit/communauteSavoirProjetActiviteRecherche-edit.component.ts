import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {CommunauteSavoirProjetActiviteRechercheService} from '../../../controller/service/CommunauteSavoirProjetActiviteRecherche.service';
import {CommunauteSavoirProjetActiviteRechercheVo} from '../../../controller/model/CommunauteSavoirProjetActiviteRecherche.model';
import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';

@Component({
  selector: 'app-communauteSavoirProjetActiviteRecherche-edit',
  templateUrl: './communauteSavoirProjetActiviteRecherche-edit.component.html',
  styleUrls: ['./communauteSavoirProjetActiviteRecherche-edit.component.css']
})
export class CommunauteSavoirProjetActiviteRechercheEditComponent implements OnInit {
// declarations
 editCommunauteSavoirProjetActiviteRechercheForm = new FormGroup({
  }); 
constructor(private communauteSavoirProjetActiviteRechercheService: CommunauteSavoirProjetActiviteRechercheService) { }
// methods 


  ngOnInit(): void {
    this.communauteSavoirProjetActiviteRechercheService.editCommunauteSavoirProjetActiviteRecherche$.subscribe(value=>{
    if(value){
     this.editCommunauteSavoirProjetActiviteRechercheForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.communauteSavoirProjetActiviteRechercheService.edit().subscribe(updatedCommunauteSavoirProjetActiviteRecherche => {
          const indexOfUpdated = this.communauteSavoirProjetActiviteRecherches.findIndex(
           (CommunauteSavoirProjetActiviteRecherche) => CommunauteSavoirProjetActiviteRecherche.id === updatedCommunauteSavoirProjetActiviteRecherche.id
            );
            indexOfUpdated > -1 ? this.communauteSavoirProjetActiviteRecherches[indexOfUpdated] = updatedCommunauteSavoirProjetActiviteRecherche : false;
                });
                  this.editCommunauteSavoirProjetActiviteRechercheDialog = false;
    this.selectedCommunauteSavoirProjetActiviteRecherche = new CommunauteSavoirProjetActiviteRechercheVo();
            }

  hideEditDialog(){
    this.editCommunauteSavoirProjetActiviteRechercheDialog = false;
  }
   submit(){
    this.communauteSavoirProjetActiviteRechercheService.edit().subscribe(result=>{
        this.editCommunauteSavoirProjetActiviteRechercheDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get communauteSavoirProjetActiviteRecherches(): Array<CommunauteSavoirProjetActiviteRechercheVo> {
    return this.communauteSavoirProjetActiviteRechercheService.communauteSavoirProjetActiviteRecherches;
       }
  set communauteSavoirProjetActiviteRecherches(value: Array<CommunauteSavoirProjetActiviteRechercheVo>) {
        this.communauteSavoirProjetActiviteRechercheService.communauteSavoirProjetActiviteRecherches = value;
       } 

  get selectedCommunauteSavoirProjetActiviteRecherche():CommunauteSavoirProjetActiviteRechercheVo {
           return this.communauteSavoirProjetActiviteRechercheService.selectedCommunauteSavoirProjetActiviteRecherche;
       }
  set selectedCommunauteSavoirProjetActiviteRecherche(value: CommunauteSavoirProjetActiviteRechercheVo) {
        this.communauteSavoirProjetActiviteRechercheService.selectedCommunauteSavoirProjetActiviteRecherche = value;
       }
  
  get editCommunauteSavoirProjetActiviteRechercheDialog():boolean {
           return this.communauteSavoirProjetActiviteRechercheService.editCommunauteSavoirProjetActiviteRechercheDialog;
       }
  set editCommunauteSavoirProjetActiviteRechercheDialog(value: boolean) {
        this.communauteSavoirProjetActiviteRechercheService.editCommunauteSavoirProjetActiviteRechercheDialog= value;
       }


}