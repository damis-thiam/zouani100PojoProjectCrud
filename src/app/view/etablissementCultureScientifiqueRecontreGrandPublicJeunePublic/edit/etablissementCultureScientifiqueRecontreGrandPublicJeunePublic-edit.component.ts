import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicService} from '../../../controller/service/EtablissementCultureScientifiqueRecontreGrandPublicJeunePublic.service';
import {EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/EtablissementCultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {CultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/CultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';

@Component({
  selector: 'app-etablissementCultureScientifiqueRecontreGrandPublicJeunePublic-edit',
  templateUrl: './etablissementCultureScientifiqueRecontreGrandPublicJeunePublic-edit.component.html',
  styleUrls: ['./etablissementCultureScientifiqueRecontreGrandPublicJeunePublic-edit.component.css']
})
export class EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicEditComponent implements OnInit {
// declarations
 editEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicForm = new FormGroup({
  }); 
constructor(private etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService: EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicService) { }
// methods 


  ngOnInit(): void {
    this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.editEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic$.subscribe(value=>{
    if(value){
     this.editEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.edit().subscribe(updatedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic => {
          const indexOfUpdated = this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublics.findIndex(
           (EtablissementCultureScientifiqueRecontreGrandPublicJeunePublic) => EtablissementCultureScientifiqueRecontreGrandPublicJeunePublic.id === updatedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic.id
            );
            indexOfUpdated > -1 ? this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublics[indexOfUpdated] = updatedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic : false;
                });
                  this.editEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog = false;
    this.selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic = new EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo();
            }

  hideEditDialog(){
    this.editEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog = false;
  }
   submit(){
    this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.edit().subscribe(result=>{
        this.editEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get etablissementCultureScientifiqueRecontreGrandPublicJeunePublics(): Array<EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo> {
    return this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.etablissementCultureScientifiqueRecontreGrandPublicJeunePublics;
       }
  set etablissementCultureScientifiqueRecontreGrandPublicJeunePublics(value: Array<EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo>) {
        this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.etablissementCultureScientifiqueRecontreGrandPublicJeunePublics = value;
       } 

  get selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic():EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo {
           return this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic;
       }
  set selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic(value: EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo) {
        this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic = value;
       }
  
  get editEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog():boolean {
           return this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.editEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
  set editEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.editEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog= value;
       }


}