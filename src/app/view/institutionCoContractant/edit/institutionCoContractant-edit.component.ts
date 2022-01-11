import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {InstitutionCoContractantService} from '../../../controller/service/InstitutionCoContractant.service';
import {InstitutionCoContractantVo} from '../../../controller/model/InstitutionCoContractant.model';
import {InstitutionVo} from '../../../controller/model/Institution.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-institutionCoContractant-edit',
  templateUrl: './institutionCoContractant-edit.component.html',
  styleUrls: ['./institutionCoContractant-edit.component.css']
})
export class InstitutionCoContractantEditComponent implements OnInit {
// declarations
 editInstitutionCoContractantForm = new FormGroup({
  }); 
constructor(private institutionCoContractantService: InstitutionCoContractantService) { }
// methods 


  ngOnInit(): void {
    this.institutionCoContractantService.editInstitutionCoContractant$.subscribe(value=>{
    if(value){
     this.editInstitutionCoContractantForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.institutionCoContractantService.edit().subscribe(updatedInstitutionCoContractant => {
          const indexOfUpdated = this.institutionCoContractants.findIndex(
           (InstitutionCoContractant) => InstitutionCoContractant.id === updatedInstitutionCoContractant.id
            );
            indexOfUpdated > -1 ? this.institutionCoContractants[indexOfUpdated] = updatedInstitutionCoContractant : false;
                });
                  this.editInstitutionCoContractantDialog = false;
    this.selectedInstitutionCoContractant = new InstitutionCoContractantVo();
            }

  hideEditDialog(){
    this.editInstitutionCoContractantDialog = false;
  }
   submit(){
    this.institutionCoContractantService.edit().subscribe(result=>{
        this.editInstitutionCoContractantDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get institutionCoContractants(): Array<InstitutionCoContractantVo> {
    return this.institutionCoContractantService.institutionCoContractants;
       }
  set institutionCoContractants(value: Array<InstitutionCoContractantVo>) {
        this.institutionCoContractantService.institutionCoContractants = value;
       } 

  get selectedInstitutionCoContractant():InstitutionCoContractantVo {
           return this.institutionCoContractantService.selectedInstitutionCoContractant;
       }
  set selectedInstitutionCoContractant(value: InstitutionCoContractantVo) {
        this.institutionCoContractantService.selectedInstitutionCoContractant = value;
       }
  
  get editInstitutionCoContractantDialog():boolean {
           return this.institutionCoContractantService.editInstitutionCoContractantDialog;
       }
  set editInstitutionCoContractantDialog(value: boolean) {
        this.institutionCoContractantService.editInstitutionCoContractantDialog= value;
       }


}