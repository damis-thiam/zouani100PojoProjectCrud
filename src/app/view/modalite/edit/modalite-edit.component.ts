import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {ModaliteService} from '../../../controller/service/Modalite.service';
import {ModaliteVo} from '../../../controller/model/Modalite.model';

@Component({
  selector: 'app-modalite-edit',
  templateUrl: './modalite-edit.component.html',
  styleUrls: ['./modalite-edit.component.css']
})
export class ModaliteEditComponent implements OnInit {
// declarations
 editModaliteForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private modaliteService: ModaliteService) { }
// methods 


  ngOnInit(): void {
    this.modaliteService.editModalite$.subscribe(value=>{
    if(value){
     this.editModaliteForm.setValue({
          libelle: this.selectedModalite.libelle,
          code: this.selectedModalite.code,
    });
    }
  });
  }



public edit(){ 
    this.modaliteService.edit().subscribe(updatedModalite => {
          const indexOfUpdated = this.modalites.findIndex(
           (Modalite) => Modalite.id === updatedModalite.id
            );
            indexOfUpdated > -1 ? this.modalites[indexOfUpdated] = updatedModalite : false;
                });
                  this.editModaliteDialog = false;
    this.selectedModalite = new ModaliteVo();
            }

  hideEditDialog(){
    this.editModaliteDialog = false;
  }
   submit(){
                this.selectedModalite.libelle = this.libelle.value;
                this.selectedModalite.code = this.code.value;
    this.modaliteService.edit().subscribe(result=>{
        this.editModaliteDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editModaliteForm.get('libelle');
            }
            get code() {
                 return this.editModaliteForm.get('code');
            }
 
  get modalites(): Array<ModaliteVo> {
    return this.modaliteService.modalites;
       }
  set modalites(value: Array<ModaliteVo>) {
        this.modaliteService.modalites = value;
       } 

  get selectedModalite():ModaliteVo {
           return this.modaliteService.selectedModalite;
       }
  set selectedModalite(value: ModaliteVo) {
        this.modaliteService.selectedModalite = value;
       }
  
  get editModaliteDialog():boolean {
           return this.modaliteService.editModaliteDialog;
       }
  set editModaliteDialog(value: boolean) {
        this.modaliteService.editModaliteDialog= value;
       }


}