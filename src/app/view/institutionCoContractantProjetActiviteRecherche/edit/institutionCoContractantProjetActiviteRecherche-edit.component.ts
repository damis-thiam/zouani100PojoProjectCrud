import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {InstitutionCoContractantProjetActiviteRechercheService} from '../../../controller/service/InstitutionCoContractantProjetActiviteRecherche.service';
import {InstitutionCoContractantProjetActiviteRechercheVo} from '../../../controller/model/InstitutionCoContractantProjetActiviteRecherche.model';
import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
import {InstitutionCoContractantVo} from '../../../controller/model/InstitutionCoContractant.model';

@Component({
  selector: 'app-institutionCoContractantProjetActiviteRecherche-edit',
  templateUrl: './institutionCoContractantProjetActiviteRecherche-edit.component.html',
  styleUrls: ['./institutionCoContractantProjetActiviteRecherche-edit.component.css']
})
export class InstitutionCoContractantProjetActiviteRechercheEditComponent implements OnInit {
// declarations
 editInstitutionCoContractantProjetActiviteRechercheForm = new FormGroup({
  }); 
constructor(private institutionCoContractantProjetActiviteRechercheService: InstitutionCoContractantProjetActiviteRechercheService) { }
// methods 


  ngOnInit(): void {
    this.institutionCoContractantProjetActiviteRechercheService.editInstitutionCoContractantProjetActiviteRecherche$.subscribe(value=>{
    if(value){
     this.editInstitutionCoContractantProjetActiviteRechercheForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.institutionCoContractantProjetActiviteRechercheService.edit().subscribe(updatedInstitutionCoContractantProjetActiviteRecherche => {
          const indexOfUpdated = this.institutionCoContractantProjetActiviteRecherches.findIndex(
           (InstitutionCoContractantProjetActiviteRecherche) => InstitutionCoContractantProjetActiviteRecherche.id === updatedInstitutionCoContractantProjetActiviteRecherche.id
            );
            indexOfUpdated > -1 ? this.institutionCoContractantProjetActiviteRecherches[indexOfUpdated] = updatedInstitutionCoContractantProjetActiviteRecherche : false;
                });
                  this.editInstitutionCoContractantProjetActiviteRechercheDialog = false;
    this.selectedInstitutionCoContractantProjetActiviteRecherche = new InstitutionCoContractantProjetActiviteRechercheVo();
            }

  hideEditDialog(){
    this.editInstitutionCoContractantProjetActiviteRechercheDialog = false;
  }
   submit(){
    this.institutionCoContractantProjetActiviteRechercheService.edit().subscribe(result=>{
        this.editInstitutionCoContractantProjetActiviteRechercheDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get institutionCoContractantProjetActiviteRecherches(): Array<InstitutionCoContractantProjetActiviteRechercheVo> {
    return this.institutionCoContractantProjetActiviteRechercheService.institutionCoContractantProjetActiviteRecherches;
       }
  set institutionCoContractantProjetActiviteRecherches(value: Array<InstitutionCoContractantProjetActiviteRechercheVo>) {
        this.institutionCoContractantProjetActiviteRechercheService.institutionCoContractantProjetActiviteRecherches = value;
       } 

  get selectedInstitutionCoContractantProjetActiviteRecherche():InstitutionCoContractantProjetActiviteRechercheVo {
           return this.institutionCoContractantProjetActiviteRechercheService.selectedInstitutionCoContractantProjetActiviteRecherche;
       }
  set selectedInstitutionCoContractantProjetActiviteRecherche(value: InstitutionCoContractantProjetActiviteRechercheVo) {
        this.institutionCoContractantProjetActiviteRechercheService.selectedInstitutionCoContractantProjetActiviteRecherche = value;
       }
  
  get editInstitutionCoContractantProjetActiviteRechercheDialog():boolean {
           return this.institutionCoContractantProjetActiviteRechercheService.editInstitutionCoContractantProjetActiviteRechercheDialog;
       }
  set editInstitutionCoContractantProjetActiviteRechercheDialog(value: boolean) {
        this.institutionCoContractantProjetActiviteRechercheService.editInstitutionCoContractantProjetActiviteRechercheDialog= value;
       }


}