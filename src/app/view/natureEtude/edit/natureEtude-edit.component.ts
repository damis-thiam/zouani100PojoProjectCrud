import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {NatureEtudeService} from '../../../controller/service/NatureEtude.service';
import {NatureEtudeVo} from '../../../controller/model/NatureEtude.model';

@Component({
  selector: 'app-natureEtude-edit',
  templateUrl: './natureEtude-edit.component.html',
  styleUrls: ['./natureEtude-edit.component.css']
})
export class NatureEtudeEditComponent implements OnInit {
// declarations
 editNatureEtudeForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private natureEtudeService: NatureEtudeService) { }
// methods 


  ngOnInit(): void {
    this.natureEtudeService.editNatureEtude$.subscribe(value=>{
    if(value){
     this.editNatureEtudeForm.setValue({
          libelle: this.selectedNatureEtude.libelle,
          code: this.selectedNatureEtude.code,
    });
    }
  });
  }



public edit(){ 
    this.natureEtudeService.edit().subscribe(updatedNatureEtude => {
          const indexOfUpdated = this.natureEtudes.findIndex(
           (NatureEtude) => NatureEtude.id === updatedNatureEtude.id
            );
            indexOfUpdated > -1 ? this.natureEtudes[indexOfUpdated] = updatedNatureEtude : false;
                });
                  this.editNatureEtudeDialog = false;
    this.selectedNatureEtude = new NatureEtudeVo();
            }

  hideEditDialog(){
    this.editNatureEtudeDialog = false;
  }
   submit(){
                this.selectedNatureEtude.libelle = this.libelle.value;
                this.selectedNatureEtude.code = this.code.value;
    this.natureEtudeService.edit().subscribe(result=>{
        this.editNatureEtudeDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editNatureEtudeForm.get('libelle');
            }
            get code() {
                 return this.editNatureEtudeForm.get('code');
            }
 
  get natureEtudes(): Array<NatureEtudeVo> {
    return this.natureEtudeService.natureEtudes;
       }
  set natureEtudes(value: Array<NatureEtudeVo>) {
        this.natureEtudeService.natureEtudes = value;
       } 

  get selectedNatureEtude():NatureEtudeVo {
           return this.natureEtudeService.selectedNatureEtude;
       }
  set selectedNatureEtude(value: NatureEtudeVo) {
        this.natureEtudeService.selectedNatureEtude = value;
       }
  
  get editNatureEtudeDialog():boolean {
           return this.natureEtudeService.editNatureEtudeDialog;
       }
  set editNatureEtudeDialog(value: boolean) {
        this.natureEtudeService.editNatureEtudeDialog= value;
       }


}