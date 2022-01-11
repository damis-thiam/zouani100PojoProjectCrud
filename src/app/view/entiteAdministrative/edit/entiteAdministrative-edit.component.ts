import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {EntiteAdministrativeService} from '../../../controller/service/EntiteAdministrative.service';
import {EntiteAdministrativeVo} from '../../../controller/model/EntiteAdministrative.model';
import {TypeEntiteAdministrativeVo} from '../../../controller/model/TypeEntiteAdministrative.model';

@Component({
  selector: 'app-entiteAdministrative-edit',
  templateUrl: './entiteAdministrative-edit.component.html',
  styleUrls: ['./entiteAdministrative-edit.component.css']
})
export class EntiteAdministrativeEditComponent implements OnInit {
// declarations
 editEntiteAdministrativeForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
  }); 
constructor(private entiteAdministrativeService: EntiteAdministrativeService) { }
// methods 


  ngOnInit(): void {
    this.entiteAdministrativeService.editEntiteAdministrative$.subscribe(value=>{
    if(value){
     this.editEntiteAdministrativeForm.setValue({
          libelle: this.selectedEntiteAdministrative.libelle,
          code: this.selectedEntiteAdministrative.code,
          description: this.selectedEntiteAdministrative.description,
    });
    }
  });
  }



public edit(){ 
    this.entiteAdministrativeService.edit().subscribe(updatedEntiteAdministrative => {
          const indexOfUpdated = this.entiteAdministratives.findIndex(
           (EntiteAdministrative) => EntiteAdministrative.id === updatedEntiteAdministrative.id
            );
            indexOfUpdated > -1 ? this.entiteAdministratives[indexOfUpdated] = updatedEntiteAdministrative : false;
                });
                  this.editEntiteAdministrativeDialog = false;
    this.selectedEntiteAdministrative = new EntiteAdministrativeVo();
            }

  hideEditDialog(){
    this.editEntiteAdministrativeDialog = false;
  }
   submit(){
                this.selectedEntiteAdministrative.libelle = this.libelle.value;
                this.selectedEntiteAdministrative.code = this.code.value;
                this.selectedEntiteAdministrative.description = this.description.value;
    this.entiteAdministrativeService.edit().subscribe(result=>{
        this.editEntiteAdministrativeDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editEntiteAdministrativeForm.get('libelle');
            }
            get code() {
                 return this.editEntiteAdministrativeForm.get('code');
            }
            get description() {
                 return this.editEntiteAdministrativeForm.get('description');
            }
 
  get entiteAdministratives(): Array<EntiteAdministrativeVo> {
    return this.entiteAdministrativeService.entiteAdministratives;
       }
  set entiteAdministratives(value: Array<EntiteAdministrativeVo>) {
        this.entiteAdministrativeService.entiteAdministratives = value;
       } 

  get selectedEntiteAdministrative():EntiteAdministrativeVo {
           return this.entiteAdministrativeService.selectedEntiteAdministrative;
       }
  set selectedEntiteAdministrative(value: EntiteAdministrativeVo) {
        this.entiteAdministrativeService.selectedEntiteAdministrative = value;
       }
  
  get editEntiteAdministrativeDialog():boolean {
           return this.entiteAdministrativeService.editEntiteAdministrativeDialog;
       }
  set editEntiteAdministrativeDialog(value: boolean) {
        this.entiteAdministrativeService.editEntiteAdministrativeDialog= value;
       }


}