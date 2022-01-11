import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {PaysTypeOutilCultureScientifiqueOutilPedagogiqueService} from '../../../controller/service/PaysTypeOutilCultureScientifiqueOutilPedagogique.service';
import {PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/PaysTypeOutilCultureScientifiqueOutilPedagogique.model';
import {CultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/CultureScientifiqueOutilPedagogique.model';
import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-paysTypeOutilCultureScientifiqueOutilPedagogique-edit',
  templateUrl: './paysTypeOutilCultureScientifiqueOutilPedagogique-edit.component.html',
  styleUrls: ['./paysTypeOutilCultureScientifiqueOutilPedagogique-edit.component.css']
})
export class PaysTypeOutilCultureScientifiqueOutilPedagogiqueEditComponent implements OnInit {
// declarations
 editPaysTypeOutilCultureScientifiqueOutilPedagogiqueForm = new FormGroup({
  }); 
constructor(private paysTypeOutilCultureScientifiqueOutilPedagogiqueService: PaysTypeOutilCultureScientifiqueOutilPedagogiqueService) { }
// methods 


  ngOnInit(): void {
    this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.editPaysTypeOutilCultureScientifiqueOutilPedagogique$.subscribe(value=>{
    if(value){
     this.editPaysTypeOutilCultureScientifiqueOutilPedagogiqueForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.edit().subscribe(updatedPaysTypeOutilCultureScientifiqueOutilPedagogique => {
          const indexOfUpdated = this.paysTypeOutilCultureScientifiqueOutilPedagogiques.findIndex(
           (PaysTypeOutilCultureScientifiqueOutilPedagogique) => PaysTypeOutilCultureScientifiqueOutilPedagogique.id === updatedPaysTypeOutilCultureScientifiqueOutilPedagogique.id
            );
            indexOfUpdated > -1 ? this.paysTypeOutilCultureScientifiqueOutilPedagogiques[indexOfUpdated] = updatedPaysTypeOutilCultureScientifiqueOutilPedagogique : false;
                });
                  this.editPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog = false;
    this.selectedPaysTypeOutilCultureScientifiqueOutilPedagogique = new PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo();
            }

  hideEditDialog(){
    this.editPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog = false;
  }
   submit(){
    this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.edit().subscribe(result=>{
        this.editPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get paysTypeOutilCultureScientifiqueOutilPedagogiques(): Array<PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo> {
    return this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.paysTypeOutilCultureScientifiqueOutilPedagogiques;
       }
  set paysTypeOutilCultureScientifiqueOutilPedagogiques(value: Array<PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo>) {
        this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.paysTypeOutilCultureScientifiqueOutilPedagogiques = value;
       } 

  get selectedPaysTypeOutilCultureScientifiqueOutilPedagogique():PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo {
           return this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.selectedPaysTypeOutilCultureScientifiqueOutilPedagogique;
       }
  set selectedPaysTypeOutilCultureScientifiqueOutilPedagogique(value: PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo) {
        this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.selectedPaysTypeOutilCultureScientifiqueOutilPedagogique = value;
       }
  
  get editPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog():boolean {
           return this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.editPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog;
       }
  set editPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.editPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog= value;
       }


}