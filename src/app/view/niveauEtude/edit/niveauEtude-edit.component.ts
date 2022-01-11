import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {NiveauEtudeService} from '../../../controller/service/NiveauEtude.service';
import {NiveauEtudeVo} from '../../../controller/model/NiveauEtude.model';

@Component({
  selector: 'app-niveauEtude-edit',
  templateUrl: './niveauEtude-edit.component.html',
  styleUrls: ['./niveauEtude-edit.component.css']
})
export class NiveauEtudeEditComponent implements OnInit {
// declarations
 editNiveauEtudeForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private niveauEtudeService: NiveauEtudeService) { }
// methods 


  ngOnInit(): void {
    this.niveauEtudeService.editNiveauEtude$.subscribe(value=>{
    if(value){
     this.editNiveauEtudeForm.setValue({
          libelle: this.selectedNiveauEtude.libelle,
          code: this.selectedNiveauEtude.code,
    });
    }
  });
  }



public edit(){ 
    this.niveauEtudeService.edit().subscribe(updatedNiveauEtude => {
          const indexOfUpdated = this.niveauEtudes.findIndex(
           (NiveauEtude) => NiveauEtude.id === updatedNiveauEtude.id
            );
            indexOfUpdated > -1 ? this.niveauEtudes[indexOfUpdated] = updatedNiveauEtude : false;
                });
                  this.editNiveauEtudeDialog = false;
    this.selectedNiveauEtude = new NiveauEtudeVo();
            }

  hideEditDialog(){
    this.editNiveauEtudeDialog = false;
  }
   submit(){
                this.selectedNiveauEtude.libelle = this.libelle.value;
                this.selectedNiveauEtude.code = this.code.value;
    this.niveauEtudeService.edit().subscribe(result=>{
        this.editNiveauEtudeDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editNiveauEtudeForm.get('libelle');
            }
            get code() {
                 return this.editNiveauEtudeForm.get('code');
            }
 
  get niveauEtudes(): Array<NiveauEtudeVo> {
    return this.niveauEtudeService.niveauEtudes;
       }
  set niveauEtudes(value: Array<NiveauEtudeVo>) {
        this.niveauEtudeService.niveauEtudes = value;
       } 

  get selectedNiveauEtude():NiveauEtudeVo {
           return this.niveauEtudeService.selectedNiveauEtude;
       }
  set selectedNiveauEtude(value: NiveauEtudeVo) {
        this.niveauEtudeService.selectedNiveauEtude = value;
       }
  
  get editNiveauEtudeDialog():boolean {
           return this.niveauEtudeService.editNiveauEtudeDialog;
       }
  set editNiveauEtudeDialog(value: boolean) {
        this.niveauEtudeService.editNiveauEtudeDialog= value;
       }


}