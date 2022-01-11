import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {TypeOutilCultureScientifiqueOutilPedagogiqueService} from '../../../controller/service/TypeOutilCultureScientifiqueOutilPedagogique.service';
import {TypeOutilCultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/TypeOutilCultureScientifiqueOutilPedagogique.model';
import {TypeOutilVo} from '../../../controller/model/TypeOutil.model';
import {CultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/CultureScientifiqueOutilPedagogique.model';

@Component({
  selector: 'app-typeOutilCultureScientifiqueOutilPedagogique-edit',
  templateUrl: './typeOutilCultureScientifiqueOutilPedagogique-edit.component.html',
  styleUrls: ['./typeOutilCultureScientifiqueOutilPedagogique-edit.component.css']
})
export class TypeOutilCultureScientifiqueOutilPedagogiqueEditComponent implements OnInit {
// declarations
 editTypeOutilCultureScientifiqueOutilPedagogiqueForm = new FormGroup({
  }); 
constructor(private typeOutilCultureScientifiqueOutilPedagogiqueService: TypeOutilCultureScientifiqueOutilPedagogiqueService) { }
// methods 


  ngOnInit(): void {
    this.typeOutilCultureScientifiqueOutilPedagogiqueService.editTypeOutilCultureScientifiqueOutilPedagogique$.subscribe(value=>{
    if(value){
     this.editTypeOutilCultureScientifiqueOutilPedagogiqueForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.typeOutilCultureScientifiqueOutilPedagogiqueService.edit().subscribe(updatedTypeOutilCultureScientifiqueOutilPedagogique => {
          const indexOfUpdated = this.typeOutilCultureScientifiqueOutilPedagogiques.findIndex(
           (TypeOutilCultureScientifiqueOutilPedagogique) => TypeOutilCultureScientifiqueOutilPedagogique.id === updatedTypeOutilCultureScientifiqueOutilPedagogique.id
            );
            indexOfUpdated > -1 ? this.typeOutilCultureScientifiqueOutilPedagogiques[indexOfUpdated] = updatedTypeOutilCultureScientifiqueOutilPedagogique : false;
                });
                  this.editTypeOutilCultureScientifiqueOutilPedagogiqueDialog = false;
    this.selectedTypeOutilCultureScientifiqueOutilPedagogique = new TypeOutilCultureScientifiqueOutilPedagogiqueVo();
            }

  hideEditDialog(){
    this.editTypeOutilCultureScientifiqueOutilPedagogiqueDialog = false;
  }
   submit(){
    this.typeOutilCultureScientifiqueOutilPedagogiqueService.edit().subscribe(result=>{
        this.editTypeOutilCultureScientifiqueOutilPedagogiqueDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get typeOutilCultureScientifiqueOutilPedagogiques(): Array<TypeOutilCultureScientifiqueOutilPedagogiqueVo> {
    return this.typeOutilCultureScientifiqueOutilPedagogiqueService.typeOutilCultureScientifiqueOutilPedagogiques;
       }
  set typeOutilCultureScientifiqueOutilPedagogiques(value: Array<TypeOutilCultureScientifiqueOutilPedagogiqueVo>) {
        this.typeOutilCultureScientifiqueOutilPedagogiqueService.typeOutilCultureScientifiqueOutilPedagogiques = value;
       } 

  get selectedTypeOutilCultureScientifiqueOutilPedagogique():TypeOutilCultureScientifiqueOutilPedagogiqueVo {
           return this.typeOutilCultureScientifiqueOutilPedagogiqueService.selectedTypeOutilCultureScientifiqueOutilPedagogique;
       }
  set selectedTypeOutilCultureScientifiqueOutilPedagogique(value: TypeOutilCultureScientifiqueOutilPedagogiqueVo) {
        this.typeOutilCultureScientifiqueOutilPedagogiqueService.selectedTypeOutilCultureScientifiqueOutilPedagogique = value;
       }
  
  get editTypeOutilCultureScientifiqueOutilPedagogiqueDialog():boolean {
           return this.typeOutilCultureScientifiqueOutilPedagogiqueService.editTypeOutilCultureScientifiqueOutilPedagogiqueDialog;
       }
  set editTypeOutilCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this.typeOutilCultureScientifiqueOutilPedagogiqueService.editTypeOutilCultureScientifiqueOutilPedagogiqueDialog= value;
       }


}