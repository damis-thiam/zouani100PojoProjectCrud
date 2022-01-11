import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {ModaliteEtudeService} from '../../../controller/service/ModaliteEtude.service';
import {ModaliteEtudeVo} from '../../../controller/model/ModaliteEtude.model';

@Component({
  selector: 'app-modaliteEtude-edit',
  templateUrl: './modaliteEtude-edit.component.html',
  styleUrls: ['./modaliteEtude-edit.component.css']
})
export class ModaliteEtudeEditComponent implements OnInit {
// declarations
 editModaliteEtudeForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
  }); 
constructor(private modaliteEtudeService: ModaliteEtudeService) { }
// methods 


  ngOnInit(): void {
    this.modaliteEtudeService.editModaliteEtude$.subscribe(value=>{
    if(value){
     this.editModaliteEtudeForm.setValue({
          libelle: this.selectedModaliteEtude.libelle,
          code: this.selectedModaliteEtude.code,
          description: this.selectedModaliteEtude.description,
    });
    }
  });
  }



public edit(){ 
    this.modaliteEtudeService.edit().subscribe(updatedModaliteEtude => {
          const indexOfUpdated = this.modaliteEtudes.findIndex(
           (ModaliteEtude) => ModaliteEtude.id === updatedModaliteEtude.id
            );
            indexOfUpdated > -1 ? this.modaliteEtudes[indexOfUpdated] = updatedModaliteEtude : false;
                });
                  this.editModaliteEtudeDialog = false;
    this.selectedModaliteEtude = new ModaliteEtudeVo();
            }

  hideEditDialog(){
    this.editModaliteEtudeDialog = false;
  }
   submit(){
                this.selectedModaliteEtude.libelle = this.libelle.value;
                this.selectedModaliteEtude.code = this.code.value;
                this.selectedModaliteEtude.description = this.description.value;
    this.modaliteEtudeService.edit().subscribe(result=>{
        this.editModaliteEtudeDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editModaliteEtudeForm.get('libelle');
            }
            get code() {
                 return this.editModaliteEtudeForm.get('code');
            }
            get description() {
                 return this.editModaliteEtudeForm.get('description');
            }
 
  get modaliteEtudes(): Array<ModaliteEtudeVo> {
    return this.modaliteEtudeService.modaliteEtudes;
       }
  set modaliteEtudes(value: Array<ModaliteEtudeVo>) {
        this.modaliteEtudeService.modaliteEtudes = value;
       } 

  get selectedModaliteEtude():ModaliteEtudeVo {
           return this.modaliteEtudeService.selectedModaliteEtude;
       }
  set selectedModaliteEtude(value: ModaliteEtudeVo) {
        this.modaliteEtudeService.selectedModaliteEtude = value;
       }
  
  get editModaliteEtudeDialog():boolean {
           return this.modaliteEtudeService.editModaliteEtudeDialog;
       }
  set editModaliteEtudeDialog(value: boolean) {
        this.modaliteEtudeService.editModaliteEtudeDialog= value;
       }


}