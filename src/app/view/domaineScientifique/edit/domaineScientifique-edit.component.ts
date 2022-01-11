import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {DomaineScientifiqueService} from '../../../controller/service/DomaineScientifique.service';
import {DomaineScientifiqueVo} from '../../../controller/model/DomaineScientifique.model';

@Component({
  selector: 'app-domaineScientifique-edit',
  templateUrl: './domaineScientifique-edit.component.html',
  styleUrls: ['./domaineScientifique-edit.component.css']
})
export class DomaineScientifiqueEditComponent implements OnInit {
// declarations
 editDomaineScientifiqueForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
  }); 
constructor(private domaineScientifiqueService: DomaineScientifiqueService) { }
// methods 


  ngOnInit(): void {
    this.domaineScientifiqueService.editDomaineScientifique$.subscribe(value=>{
    if(value){
     this.editDomaineScientifiqueForm.setValue({
          libelle: this.selectedDomaineScientifique.libelle,
          code: this.selectedDomaineScientifique.code,
          description: this.selectedDomaineScientifique.description,
    });
    }
  });
  }



public edit(){ 
    this.domaineScientifiqueService.edit().subscribe(updatedDomaineScientifique => {
          const indexOfUpdated = this.domaineScientifiques.findIndex(
           (DomaineScientifique) => DomaineScientifique.id === updatedDomaineScientifique.id
            );
            indexOfUpdated > -1 ? this.domaineScientifiques[indexOfUpdated] = updatedDomaineScientifique : false;
                });
                  this.editDomaineScientifiqueDialog = false;
    this.selectedDomaineScientifique = new DomaineScientifiqueVo();
            }

  hideEditDialog(){
    this.editDomaineScientifiqueDialog = false;
  }
   submit(){
                this.selectedDomaineScientifique.libelle = this.libelle.value;
                this.selectedDomaineScientifique.code = this.code.value;
                this.selectedDomaineScientifique.description = this.description.value;
    this.domaineScientifiqueService.edit().subscribe(result=>{
        this.editDomaineScientifiqueDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editDomaineScientifiqueForm.get('libelle');
            }
            get code() {
                 return this.editDomaineScientifiqueForm.get('code');
            }
            get description() {
                 return this.editDomaineScientifiqueForm.get('description');
            }
 
  get domaineScientifiques(): Array<DomaineScientifiqueVo> {
    return this.domaineScientifiqueService.domaineScientifiques;
       }
  set domaineScientifiques(value: Array<DomaineScientifiqueVo>) {
        this.domaineScientifiqueService.domaineScientifiques = value;
       } 

  get selectedDomaineScientifique():DomaineScientifiqueVo {
           return this.domaineScientifiqueService.selectedDomaineScientifique;
       }
  set selectedDomaineScientifique(value: DomaineScientifiqueVo) {
        this.domaineScientifiqueService.selectedDomaineScientifique = value;
       }
  
  get editDomaineScientifiqueDialog():boolean {
           return this.domaineScientifiqueService.editDomaineScientifiqueDialog;
       }
  set editDomaineScientifiqueDialog(value: boolean) {
        this.domaineScientifiqueService.editDomaineScientifiqueDialog= value;
       }


}