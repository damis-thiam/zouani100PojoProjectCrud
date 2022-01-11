import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {FournisseurAppelProjetRechercheService} from '../../../controller/service/FournisseurAppelProjetRecherche.service';
import {FournisseurAppelProjetRechercheVo} from '../../../controller/model/FournisseurAppelProjetRecherche.model';
import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-fournisseurAppelProjetRecherche-edit',
  templateUrl: './fournisseurAppelProjetRecherche-edit.component.html',
  styleUrls: ['./fournisseurAppelProjetRecherche-edit.component.css']
})
export class FournisseurAppelProjetRechercheEditComponent implements OnInit {
// declarations
 editFournisseurAppelProjetRechercheForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
  }); 
constructor(private fournisseurAppelProjetRechercheService: FournisseurAppelProjetRechercheService) { }
// methods 


  ngOnInit(): void {
    this.fournisseurAppelProjetRechercheService.editFournisseurAppelProjetRecherche$.subscribe(value=>{
    if(value){
     this.editFournisseurAppelProjetRechercheForm.setValue({
          libelle: this.selectedFournisseurAppelProjetRecherche.libelle,
          code: this.selectedFournisseurAppelProjetRecherche.code,
          description: this.selectedFournisseurAppelProjetRecherche.description,
    });
    }
  });
  }



public edit(){ 
    this.fournisseurAppelProjetRechercheService.edit().subscribe(updatedFournisseurAppelProjetRecherche => {
          const indexOfUpdated = this.fournisseurAppelProjetRecherches.findIndex(
           (FournisseurAppelProjetRecherche) => FournisseurAppelProjetRecherche.id === updatedFournisseurAppelProjetRecherche.id
            );
            indexOfUpdated > -1 ? this.fournisseurAppelProjetRecherches[indexOfUpdated] = updatedFournisseurAppelProjetRecherche : false;
                });
                  this.editFournisseurAppelProjetRechercheDialog = false;
    this.selectedFournisseurAppelProjetRecherche = new FournisseurAppelProjetRechercheVo();
            }

  hideEditDialog(){
    this.editFournisseurAppelProjetRechercheDialog = false;
  }
   submit(){
                this.selectedFournisseurAppelProjetRecherche.libelle = this.libelle.value;
                this.selectedFournisseurAppelProjetRecherche.code = this.code.value;
                this.selectedFournisseurAppelProjetRecherche.description = this.description.value;
    this.fournisseurAppelProjetRechercheService.edit().subscribe(result=>{
        this.editFournisseurAppelProjetRechercheDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editFournisseurAppelProjetRechercheForm.get('libelle');
            }
            get code() {
                 return this.editFournisseurAppelProjetRechercheForm.get('code');
            }
            get description() {
                 return this.editFournisseurAppelProjetRechercheForm.get('description');
            }
 
  get fournisseurAppelProjetRecherches(): Array<FournisseurAppelProjetRechercheVo> {
    return this.fournisseurAppelProjetRechercheService.fournisseurAppelProjetRecherches;
       }
  set fournisseurAppelProjetRecherches(value: Array<FournisseurAppelProjetRechercheVo>) {
        this.fournisseurAppelProjetRechercheService.fournisseurAppelProjetRecherches = value;
       } 

  get selectedFournisseurAppelProjetRecherche():FournisseurAppelProjetRechercheVo {
           return this.fournisseurAppelProjetRechercheService.selectedFournisseurAppelProjetRecherche;
       }
  set selectedFournisseurAppelProjetRecherche(value: FournisseurAppelProjetRechercheVo) {
        this.fournisseurAppelProjetRechercheService.selectedFournisseurAppelProjetRecherche = value;
       }
  
  get editFournisseurAppelProjetRechercheDialog():boolean {
           return this.fournisseurAppelProjetRechercheService.editFournisseurAppelProjetRechercheDialog;
       }
  set editFournisseurAppelProjetRechercheDialog(value: boolean) {
        this.fournisseurAppelProjetRechercheService.editFournisseurAppelProjetRechercheDialog= value;
       }


}