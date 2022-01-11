import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {ContinentService} from '../../../controller/service/Continent.service';
import {ContinentVo} from '../../../controller/model/Continent.model';

@Component({
  selector: 'app-continent-edit',
  templateUrl: './continent-edit.component.html',
  styleUrls: ['./continent-edit.component.css']
})
export class ContinentEditComponent implements OnInit {
// declarations
 editContinentForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private continentService: ContinentService) { }
// methods 


  ngOnInit(): void {
    this.continentService.editContinent$.subscribe(value=>{
    if(value){
     this.editContinentForm.setValue({
          libelle: this.selectedContinent.libelle,
          code: this.selectedContinent.code,
    });
    }
  });
  }



public edit(){ 
    this.continentService.edit().subscribe(updatedContinent => {
          const indexOfUpdated = this.continents.findIndex(
           (Continent) => Continent.id === updatedContinent.id
            );
            indexOfUpdated > -1 ? this.continents[indexOfUpdated] = updatedContinent : false;
                });
                  this.editContinentDialog = false;
    this.selectedContinent = new ContinentVo();
            }

  hideEditDialog(){
    this.editContinentDialog = false;
  }
   submit(){
                this.selectedContinent.libelle = this.libelle.value;
                this.selectedContinent.code = this.code.value;
    this.continentService.edit().subscribe(result=>{
        this.editContinentDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editContinentForm.get('libelle');
            }
            get code() {
                 return this.editContinentForm.get('code');
            }
 
  get continents(): Array<ContinentVo> {
    return this.continentService.continents;
       }
  set continents(value: Array<ContinentVo>) {
        this.continentService.continents = value;
       } 

  get selectedContinent():ContinentVo {
           return this.continentService.selectedContinent;
       }
  set selectedContinent(value: ContinentVo) {
        this.continentService.selectedContinent = value;
       }
  
  get editContinentDialog():boolean {
           return this.continentService.editContinentDialog;
       }
  set editContinentDialog(value: boolean) {
        this.continentService.editContinentDialog= value;
       }


}