import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {IdentifiantRechercheService} from '../../../controller/service/IdentifiantRecherche.service';
import {IdentifiantRechercheVo} from '../../../controller/model/IdentifiantRecherche.model';

@Component({
  selector: 'app-identifiantRecherche-edit',
  templateUrl: './identifiantRecherche-edit.component.html',
  styleUrls: ['./identifiantRecherche-edit.component.css']
})
export class IdentifiantRechercheEditComponent implements OnInit {
// declarations
 editIdentifiantRechercheForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
  }); 
constructor(private identifiantRechercheService: IdentifiantRechercheService) { }
// methods 


  ngOnInit(): void {
    this.identifiantRechercheService.editIdentifiantRecherche$.subscribe(value=>{
    if(value){
     this.editIdentifiantRechercheForm.setValue({
          libelle: this.selectedIdentifiantRecherche.libelle,
          code: this.selectedIdentifiantRecherche.code,
          description: this.selectedIdentifiantRecherche.description,
    });
    }
  });
  }



public edit(){ 
    this.identifiantRechercheService.edit().subscribe(updatedIdentifiantRecherche => {
          const indexOfUpdated = this.identifiantRecherches.findIndex(
           (IdentifiantRecherche) => IdentifiantRecherche.id === updatedIdentifiantRecherche.id
            );
            indexOfUpdated > -1 ? this.identifiantRecherches[indexOfUpdated] = updatedIdentifiantRecherche : false;
                });
                  this.editIdentifiantRechercheDialog = false;
    this.selectedIdentifiantRecherche = new IdentifiantRechercheVo();
            }

  hideEditDialog(){
    this.editIdentifiantRechercheDialog = false;
  }
   submit(){
                this.selectedIdentifiantRecherche.libelle = this.libelle.value;
                this.selectedIdentifiantRecherche.code = this.code.value;
                this.selectedIdentifiantRecherche.description = this.description.value;
    this.identifiantRechercheService.edit().subscribe(result=>{
        this.editIdentifiantRechercheDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editIdentifiantRechercheForm.get('libelle');
            }
            get code() {
                 return this.editIdentifiantRechercheForm.get('code');
            }
            get description() {
                 return this.editIdentifiantRechercheForm.get('description');
            }
 
  get identifiantRecherches(): Array<IdentifiantRechercheVo> {
    return this.identifiantRechercheService.identifiantRecherches;
       }
  set identifiantRecherches(value: Array<IdentifiantRechercheVo>) {
        this.identifiantRechercheService.identifiantRecherches = value;
       } 

  get selectedIdentifiantRecherche():IdentifiantRechercheVo {
           return this.identifiantRechercheService.selectedIdentifiantRecherche;
       }
  set selectedIdentifiantRecherche(value: IdentifiantRechercheVo) {
        this.identifiantRechercheService.selectedIdentifiantRecherche = value;
       }
  
  get editIdentifiantRechercheDialog():boolean {
           return this.identifiantRechercheService.editIdentifiantRechercheDialog;
       }
  set editIdentifiantRechercheDialog(value: boolean) {
        this.identifiantRechercheService.editIdentifiantRechercheDialog= value;
       }


}