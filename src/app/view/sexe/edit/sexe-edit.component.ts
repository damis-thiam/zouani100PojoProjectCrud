import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {SexeService} from '../../../controller/service/Sexe.service';
import {SexeVo} from '../../../controller/model/Sexe.model';

@Component({
  selector: 'app-sexe-edit',
  templateUrl: './sexe-edit.component.html',
  styleUrls: ['./sexe-edit.component.css']
})
export class SexeEditComponent implements OnInit {
// declarations
 editSexeForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private sexeService: SexeService) { }
// methods 


  ngOnInit(): void {
    this.sexeService.editSexe$.subscribe(value=>{
    if(value){
     this.editSexeForm.setValue({
          libelle: this.selectedSexe.libelle,
          code: this.selectedSexe.code,
    });
    }
  });
  }



public edit(){ 
    this.sexeService.edit().subscribe(updatedSexe => {
          const indexOfUpdated = this.sexes.findIndex(
           (Sexe) => Sexe.id === updatedSexe.id
            );
            indexOfUpdated > -1 ? this.sexes[indexOfUpdated] = updatedSexe : false;
                });
                  this.editSexeDialog = false;
    this.selectedSexe = new SexeVo();
            }

  hideEditDialog(){
    this.editSexeDialog = false;
  }
   submit(){
                this.selectedSexe.libelle = this.libelle.value;
                this.selectedSexe.code = this.code.value;
    this.sexeService.edit().subscribe(result=>{
        this.editSexeDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editSexeForm.get('libelle');
            }
            get code() {
                 return this.editSexeForm.get('code');
            }
 
  get sexes(): Array<SexeVo> {
    return this.sexeService.sexes;
       }
  set sexes(value: Array<SexeVo>) {
        this.sexeService.sexes = value;
       } 

  get selectedSexe():SexeVo {
           return this.sexeService.selectedSexe;
       }
  set selectedSexe(value: SexeVo) {
        this.sexeService.selectedSexe = value;
       }
  
  get editSexeDialog():boolean {
           return this.sexeService.editSexeDialog;
       }
  set editSexeDialog(value: boolean) {
        this.sexeService.editSexeDialog= value;
       }


}