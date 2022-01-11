import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {CultureScientifiqueOutilPedagogiqueService} from '../../../controller/service/CultureScientifiqueOutilPedagogique.service';
import {CultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/CultureScientifiqueOutilPedagogique.model';

@Component({
  selector: 'app-cultureScientifiqueOutilPedagogique-edit',
  templateUrl: './cultureScientifiqueOutilPedagogique-edit.component.html',
  styleUrls: ['./cultureScientifiqueOutilPedagogique-edit.component.css']
})
export class CultureScientifiqueOutilPedagogiqueEditComponent implements OnInit {
// declarations
 editCultureScientifiqueOutilPedagogiqueForm = new FormGroup({
      role: new FormControl("", [Validators.required]),
      nomOutil: new FormControl("", [Validators.required]),
          sortieAnnee:new FormControl(0,[Validators.required]),
          sortieMois:new FormControl(0,[Validators.required]),
      lienWeb: new FormControl("", [Validators.required]),
  }); 
constructor(private cultureScientifiqueOutilPedagogiqueService: CultureScientifiqueOutilPedagogiqueService) { }
// methods 


  ngOnInit(): void {
    this.cultureScientifiqueOutilPedagogiqueService.editCultureScientifiqueOutilPedagogique$.subscribe(value=>{
    if(value){
     this.editCultureScientifiqueOutilPedagogiqueForm.setValue({
          role: this.selectedCultureScientifiqueOutilPedagogique.role,
          nomOutil: this.selectedCultureScientifiqueOutilPedagogique.nomOutil,
          sortieAnnee: this.selectedCultureScientifiqueOutilPedagogique.sortieAnnee,
          sortieMois: this.selectedCultureScientifiqueOutilPedagogique.sortieMois,
          lienWeb: this.selectedCultureScientifiqueOutilPedagogique.lienWeb,
    });
    }
  });
  }



public edit(){ 
    this.cultureScientifiqueOutilPedagogiqueService.edit().subscribe(updatedCultureScientifiqueOutilPedagogique => {
          const indexOfUpdated = this.cultureScientifiqueOutilPedagogiques.findIndex(
           (CultureScientifiqueOutilPedagogique) => CultureScientifiqueOutilPedagogique.id === updatedCultureScientifiqueOutilPedagogique.id
            );
            indexOfUpdated > -1 ? this.cultureScientifiqueOutilPedagogiques[indexOfUpdated] = updatedCultureScientifiqueOutilPedagogique : false;
                });
                  this.editCultureScientifiqueOutilPedagogiqueDialog = false;
    this.selectedCultureScientifiqueOutilPedagogique = new CultureScientifiqueOutilPedagogiqueVo();
            }

  hideEditDialog(){
    this.editCultureScientifiqueOutilPedagogiqueDialog = false;
  }
   submit(){
                this.selectedCultureScientifiqueOutilPedagogique.role = this.role.value;
                this.selectedCultureScientifiqueOutilPedagogique.nomOutil = this.nomOutil.value;
                this.selectedCultureScientifiqueOutilPedagogique.sortieAnnee = this.sortieAnnee.value;
                this.selectedCultureScientifiqueOutilPedagogique.sortieMois = this.sortieMois.value;
                this.selectedCultureScientifiqueOutilPedagogique.lienWeb = this.lienWeb.value;
    this.cultureScientifiqueOutilPedagogiqueService.edit().subscribe(result=>{
        this.editCultureScientifiqueOutilPedagogiqueDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get role() {
                 return this.editCultureScientifiqueOutilPedagogiqueForm.get('role');
            }
            get nomOutil() {
                 return this.editCultureScientifiqueOutilPedagogiqueForm.get('nomOutil');
            }
            get sortieAnnee() {
                 return this.editCultureScientifiqueOutilPedagogiqueForm.get('sortieAnnee');
            }
            get sortieMois() {
                 return this.editCultureScientifiqueOutilPedagogiqueForm.get('sortieMois');
            }
            get lienWeb() {
                 return this.editCultureScientifiqueOutilPedagogiqueForm.get('lienWeb');
            }
 
  get cultureScientifiqueOutilPedagogiques(): Array<CultureScientifiqueOutilPedagogiqueVo> {
    return this.cultureScientifiqueOutilPedagogiqueService.cultureScientifiqueOutilPedagogiques;
       }
  set cultureScientifiqueOutilPedagogiques(value: Array<CultureScientifiqueOutilPedagogiqueVo>) {
        this.cultureScientifiqueOutilPedagogiqueService.cultureScientifiqueOutilPedagogiques = value;
       } 

  get selectedCultureScientifiqueOutilPedagogique():CultureScientifiqueOutilPedagogiqueVo {
           return this.cultureScientifiqueOutilPedagogiqueService.selectedCultureScientifiqueOutilPedagogique;
       }
  set selectedCultureScientifiqueOutilPedagogique(value: CultureScientifiqueOutilPedagogiqueVo) {
        this.cultureScientifiqueOutilPedagogiqueService.selectedCultureScientifiqueOutilPedagogique = value;
       }
  
  get editCultureScientifiqueOutilPedagogiqueDialog():boolean {
           return this.cultureScientifiqueOutilPedagogiqueService.editCultureScientifiqueOutilPedagogiqueDialog;
       }
  set editCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this.cultureScientifiqueOutilPedagogiqueService.editCultureScientifiqueOutilPedagogiqueDialog= value;
       }


}