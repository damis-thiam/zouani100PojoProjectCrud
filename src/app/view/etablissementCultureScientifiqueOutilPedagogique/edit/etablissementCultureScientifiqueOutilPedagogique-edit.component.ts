import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {EtablissementCultureScientifiqueOutilPedagogiqueService} from '../../../controller/service/EtablissementCultureScientifiqueOutilPedagogique.service';
import {EtablissementCultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/EtablissementCultureScientifiqueOutilPedagogique.model';
import {CultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/CultureScientifiqueOutilPedagogique.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';

@Component({
  selector: 'app-etablissementCultureScientifiqueOutilPedagogique-edit',
  templateUrl: './etablissementCultureScientifiqueOutilPedagogique-edit.component.html',
  styleUrls: ['./etablissementCultureScientifiqueOutilPedagogique-edit.component.css']
})
export class EtablissementCultureScientifiqueOutilPedagogiqueEditComponent implements OnInit {
// declarations
 editEtablissementCultureScientifiqueOutilPedagogiqueForm = new FormGroup({
  }); 
constructor(private etablissementCultureScientifiqueOutilPedagogiqueService: EtablissementCultureScientifiqueOutilPedagogiqueService) { }
// methods 


  ngOnInit(): void {
    this.etablissementCultureScientifiqueOutilPedagogiqueService.editEtablissementCultureScientifiqueOutilPedagogique$.subscribe(value=>{
    if(value){
     this.editEtablissementCultureScientifiqueOutilPedagogiqueForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.etablissementCultureScientifiqueOutilPedagogiqueService.edit().subscribe(updatedEtablissementCultureScientifiqueOutilPedagogique => {
          const indexOfUpdated = this.etablissementCultureScientifiqueOutilPedagogiques.findIndex(
           (EtablissementCultureScientifiqueOutilPedagogique) => EtablissementCultureScientifiqueOutilPedagogique.id === updatedEtablissementCultureScientifiqueOutilPedagogique.id
            );
            indexOfUpdated > -1 ? this.etablissementCultureScientifiqueOutilPedagogiques[indexOfUpdated] = updatedEtablissementCultureScientifiqueOutilPedagogique : false;
                });
                  this.editEtablissementCultureScientifiqueOutilPedagogiqueDialog = false;
    this.selectedEtablissementCultureScientifiqueOutilPedagogique = new EtablissementCultureScientifiqueOutilPedagogiqueVo();
            }

  hideEditDialog(){
    this.editEtablissementCultureScientifiqueOutilPedagogiqueDialog = false;
  }
   submit(){
    this.etablissementCultureScientifiqueOutilPedagogiqueService.edit().subscribe(result=>{
        this.editEtablissementCultureScientifiqueOutilPedagogiqueDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get etablissementCultureScientifiqueOutilPedagogiques(): Array<EtablissementCultureScientifiqueOutilPedagogiqueVo> {
    return this.etablissementCultureScientifiqueOutilPedagogiqueService.etablissementCultureScientifiqueOutilPedagogiques;
       }
  set etablissementCultureScientifiqueOutilPedagogiques(value: Array<EtablissementCultureScientifiqueOutilPedagogiqueVo>) {
        this.etablissementCultureScientifiqueOutilPedagogiqueService.etablissementCultureScientifiqueOutilPedagogiques = value;
       } 

  get selectedEtablissementCultureScientifiqueOutilPedagogique():EtablissementCultureScientifiqueOutilPedagogiqueVo {
           return this.etablissementCultureScientifiqueOutilPedagogiqueService.selectedEtablissementCultureScientifiqueOutilPedagogique;
       }
  set selectedEtablissementCultureScientifiqueOutilPedagogique(value: EtablissementCultureScientifiqueOutilPedagogiqueVo) {
        this.etablissementCultureScientifiqueOutilPedagogiqueService.selectedEtablissementCultureScientifiqueOutilPedagogique = value;
       }
  
  get editEtablissementCultureScientifiqueOutilPedagogiqueDialog():boolean {
           return this.etablissementCultureScientifiqueOutilPedagogiqueService.editEtablissementCultureScientifiqueOutilPedagogiqueDialog;
       }
  set editEtablissementCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this.etablissementCultureScientifiqueOutilPedagogiqueService.editEtablissementCultureScientifiqueOutilPedagogiqueDialog= value;
       }


}