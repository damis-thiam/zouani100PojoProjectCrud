import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {PublicCibleCultureScientifiqueOutilPedagogiqueService} from '../../../controller/service/PublicCibleCultureScientifiqueOutilPedagogique.service';
import {PublicCibleCultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/PublicCibleCultureScientifiqueOutilPedagogique.model';
import {PublicCibleVo} from '../../../controller/model/PublicCible.model';
import {CultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/CultureScientifiqueOutilPedagogique.model';
import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-publicCibleCultureScientifiqueOutilPedagogique-edit',
  templateUrl: './publicCibleCultureScientifiqueOutilPedagogique-edit.component.html',
  styleUrls: ['./publicCibleCultureScientifiqueOutilPedagogique-edit.component.css']
})
export class PublicCibleCultureScientifiqueOutilPedagogiqueEditComponent implements OnInit {
// declarations
 editPublicCibleCultureScientifiqueOutilPedagogiqueForm = new FormGroup({
  }); 
constructor(private publicCibleCultureScientifiqueOutilPedagogiqueService: PublicCibleCultureScientifiqueOutilPedagogiqueService) { }
// methods 


  ngOnInit(): void {
    this.publicCibleCultureScientifiqueOutilPedagogiqueService.editPublicCibleCultureScientifiqueOutilPedagogique$.subscribe(value=>{
    if(value){
     this.editPublicCibleCultureScientifiqueOutilPedagogiqueForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.publicCibleCultureScientifiqueOutilPedagogiqueService.edit().subscribe(updatedPublicCibleCultureScientifiqueOutilPedagogique => {
          const indexOfUpdated = this.publicCibleCultureScientifiqueOutilPedagogiques.findIndex(
           (PublicCibleCultureScientifiqueOutilPedagogique) => PublicCibleCultureScientifiqueOutilPedagogique.id === updatedPublicCibleCultureScientifiqueOutilPedagogique.id
            );
            indexOfUpdated > -1 ? this.publicCibleCultureScientifiqueOutilPedagogiques[indexOfUpdated] = updatedPublicCibleCultureScientifiqueOutilPedagogique : false;
                });
                  this.editPublicCibleCultureScientifiqueOutilPedagogiqueDialog = false;
    this.selectedPublicCibleCultureScientifiqueOutilPedagogique = new PublicCibleCultureScientifiqueOutilPedagogiqueVo();
            }

  hideEditDialog(){
    this.editPublicCibleCultureScientifiqueOutilPedagogiqueDialog = false;
  }
   submit(){
    this.publicCibleCultureScientifiqueOutilPedagogiqueService.edit().subscribe(result=>{
        this.editPublicCibleCultureScientifiqueOutilPedagogiqueDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get publicCibleCultureScientifiqueOutilPedagogiques(): Array<PublicCibleCultureScientifiqueOutilPedagogiqueVo> {
    return this.publicCibleCultureScientifiqueOutilPedagogiqueService.publicCibleCultureScientifiqueOutilPedagogiques;
       }
  set publicCibleCultureScientifiqueOutilPedagogiques(value: Array<PublicCibleCultureScientifiqueOutilPedagogiqueVo>) {
        this.publicCibleCultureScientifiqueOutilPedagogiqueService.publicCibleCultureScientifiqueOutilPedagogiques = value;
       } 

  get selectedPublicCibleCultureScientifiqueOutilPedagogique():PublicCibleCultureScientifiqueOutilPedagogiqueVo {
           return this.publicCibleCultureScientifiqueOutilPedagogiqueService.selectedPublicCibleCultureScientifiqueOutilPedagogique;
       }
  set selectedPublicCibleCultureScientifiqueOutilPedagogique(value: PublicCibleCultureScientifiqueOutilPedagogiqueVo) {
        this.publicCibleCultureScientifiqueOutilPedagogiqueService.selectedPublicCibleCultureScientifiqueOutilPedagogique = value;
       }
  
  get editPublicCibleCultureScientifiqueOutilPedagogiqueDialog():boolean {
           return this.publicCibleCultureScientifiqueOutilPedagogiqueService.editPublicCibleCultureScientifiqueOutilPedagogiqueDialog;
       }
  set editPublicCibleCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this.publicCibleCultureScientifiqueOutilPedagogiqueService.editPublicCibleCultureScientifiqueOutilPedagogiqueDialog= value;
       }


}