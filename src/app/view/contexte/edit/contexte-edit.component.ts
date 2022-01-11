import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {ContexteService} from '../../../controller/service/Contexte.service';
import {ContexteVo} from '../../../controller/model/Contexte.model';

@Component({
  selector: 'app-contexte-edit',
  templateUrl: './contexte-edit.component.html',
  styleUrls: ['./contexte-edit.component.css']
})
export class ContexteEditComponent implements OnInit {
// declarations
 editContexteForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private contexteService: ContexteService) { }
// methods 


  ngOnInit(): void {
    this.contexteService.editContexte$.subscribe(value=>{
    if(value){
     this.editContexteForm.setValue({
          libelle: this.selectedContexte.libelle,
          code: this.selectedContexte.code,
    });
    }
  });
  }



public edit(){ 
    this.contexteService.edit().subscribe(updatedContexte => {
          const indexOfUpdated = this.contextes.findIndex(
           (Contexte) => Contexte.id === updatedContexte.id
            );
            indexOfUpdated > -1 ? this.contextes[indexOfUpdated] = updatedContexte : false;
                });
                  this.editContexteDialog = false;
    this.selectedContexte = new ContexteVo();
            }

  hideEditDialog(){
    this.editContexteDialog = false;
  }
   submit(){
                this.selectedContexte.libelle = this.libelle.value;
                this.selectedContexte.code = this.code.value;
    this.contexteService.edit().subscribe(result=>{
        this.editContexteDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editContexteForm.get('libelle');
            }
            get code() {
                 return this.editContexteForm.get('code');
            }
 
  get contextes(): Array<ContexteVo> {
    return this.contexteService.contextes;
       }
  set contextes(value: Array<ContexteVo>) {
        this.contexteService.contextes = value;
       } 

  get selectedContexte():ContexteVo {
           return this.contexteService.selectedContexte;
       }
  set selectedContexte(value: ContexteVo) {
        this.contexteService.selectedContexte = value;
       }
  
  get editContexteDialog():boolean {
           return this.contexteService.editContexteDialog;
       }
  set editContexteDialog(value: boolean) {
        this.contexteService.editContexteDialog= value;
       }


}