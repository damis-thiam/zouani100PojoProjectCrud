import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {NationaliteService} from '../../../controller/service/Nationalite.service';
import {NationaliteVo} from '../../../controller/model/Nationalite.model';

@Component({
  selector: 'app-nationalite-edit',
  templateUrl: './nationalite-edit.component.html',
  styleUrls: ['./nationalite-edit.component.css']
})
export class NationaliteEditComponent implements OnInit {
// declarations
 editNationaliteForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private nationaliteService: NationaliteService) { }
// methods 


  ngOnInit(): void {
    this.nationaliteService.editNationalite$.subscribe(value=>{
    if(value){
     this.editNationaliteForm.setValue({
          libelle: this.selectedNationalite.libelle,
          code: this.selectedNationalite.code,
    });
    }
  });
  }



public edit(){ 
    this.nationaliteService.edit().subscribe(updatedNationalite => {
          const indexOfUpdated = this.nationalites.findIndex(
           (Nationalite) => Nationalite.id === updatedNationalite.id
            );
            indexOfUpdated > -1 ? this.nationalites[indexOfUpdated] = updatedNationalite : false;
                });
                  this.editNationaliteDialog = false;
    this.selectedNationalite = new NationaliteVo();
            }

  hideEditDialog(){
    this.editNationaliteDialog = false;
  }
   submit(){
                this.selectedNationalite.libelle = this.libelle.value;
                this.selectedNationalite.code = this.code.value;
    this.nationaliteService.edit().subscribe(result=>{
        this.editNationaliteDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editNationaliteForm.get('libelle');
            }
            get code() {
                 return this.editNationaliteForm.get('code');
            }
 
  get nationalites(): Array<NationaliteVo> {
    return this.nationaliteService.nationalites;
       }
  set nationalites(value: Array<NationaliteVo>) {
        this.nationaliteService.nationalites = value;
       } 

  get selectedNationalite():NationaliteVo {
           return this.nationaliteService.selectedNationalite;
       }
  set selectedNationalite(value: NationaliteVo) {
        this.nationaliteService.selectedNationalite = value;
       }
  
  get editNationaliteDialog():boolean {
           return this.nationaliteService.editNationaliteDialog;
       }
  set editNationaliteDialog(value: boolean) {
        this.nationaliteService.editNationaliteDialog= value;
       }


}