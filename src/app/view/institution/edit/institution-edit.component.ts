import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {InstitutionService} from '../../../controller/service/Institution.service';
import {InstitutionVo} from '../../../controller/model/Institution.model';

@Component({
  selector: 'app-institution-edit',
  templateUrl: './institution-edit.component.html',
  styleUrls: ['./institution-edit.component.css']
})
export class InstitutionEditComponent implements OnInit {
// declarations
 editInstitutionForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private institutionService: InstitutionService) { }
// methods 


  ngOnInit(): void {
    this.institutionService.editInstitution$.subscribe(value=>{
    if(value){
     this.editInstitutionForm.setValue({
          libelle: this.selectedInstitution.libelle,
          code: this.selectedInstitution.code,
    });
    }
  });
  }



public edit(){ 
    this.institutionService.edit().subscribe(updatedInstitution => {
          const indexOfUpdated = this.institutions.findIndex(
           (Institution) => Institution.id === updatedInstitution.id
            );
            indexOfUpdated > -1 ? this.institutions[indexOfUpdated] = updatedInstitution : false;
                });
                  this.editInstitutionDialog = false;
    this.selectedInstitution = new InstitutionVo();
            }

  hideEditDialog(){
    this.editInstitutionDialog = false;
  }
   submit(){
                this.selectedInstitution.libelle = this.libelle.value;
                this.selectedInstitution.code = this.code.value;
    this.institutionService.edit().subscribe(result=>{
        this.editInstitutionDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editInstitutionForm.get('libelle');
            }
            get code() {
                 return this.editInstitutionForm.get('code');
            }
 
  get institutions(): Array<InstitutionVo> {
    return this.institutionService.institutions;
       }
  set institutions(value: Array<InstitutionVo>) {
        this.institutionService.institutions = value;
       } 

  get selectedInstitution():InstitutionVo {
           return this.institutionService.selectedInstitution;
       }
  set selectedInstitution(value: InstitutionVo) {
        this.institutionService.selectedInstitution = value;
       }
  
  get editInstitutionDialog():boolean {
           return this.institutionService.editInstitutionDialog;
       }
  set editInstitutionDialog(value: boolean) {
        this.institutionService.editInstitutionDialog= value;
       }


}