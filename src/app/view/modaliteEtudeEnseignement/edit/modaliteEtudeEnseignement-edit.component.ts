import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {ModaliteEtudeEnseignementService} from '../../../controller/service/ModaliteEtudeEnseignement.service';
import {ModaliteEtudeEnseignementVo} from '../../../controller/model/ModaliteEtudeEnseignement.model';
import {EnseignementVo} from '../../../controller/model/Enseignement.model';
import {ModaliteEtudeVo} from '../../../controller/model/ModaliteEtude.model';

@Component({
  selector: 'app-modaliteEtudeEnseignement-edit',
  templateUrl: './modaliteEtudeEnseignement-edit.component.html',
  styleUrls: ['./modaliteEtudeEnseignement-edit.component.css']
})
export class ModaliteEtudeEnseignementEditComponent implements OnInit {
// declarations
 editModaliteEtudeEnseignementForm = new FormGroup({
  }); 
constructor(private modaliteEtudeEnseignementService: ModaliteEtudeEnseignementService) { }
// methods 


  ngOnInit(): void {
    this.modaliteEtudeEnseignementService.editModaliteEtudeEnseignement$.subscribe(value=>{
    if(value){
     this.editModaliteEtudeEnseignementForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.modaliteEtudeEnseignementService.edit().subscribe(updatedModaliteEtudeEnseignement => {
          const indexOfUpdated = this.modaliteEtudeEnseignements.findIndex(
           (ModaliteEtudeEnseignement) => ModaliteEtudeEnseignement.id === updatedModaliteEtudeEnseignement.id
            );
            indexOfUpdated > -1 ? this.modaliteEtudeEnseignements[indexOfUpdated] = updatedModaliteEtudeEnseignement : false;
                });
                  this.editModaliteEtudeEnseignementDialog = false;
    this.selectedModaliteEtudeEnseignement = new ModaliteEtudeEnseignementVo();
            }

  hideEditDialog(){
    this.editModaliteEtudeEnseignementDialog = false;
  }
   submit(){
    this.modaliteEtudeEnseignementService.edit().subscribe(result=>{
        this.editModaliteEtudeEnseignementDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get modaliteEtudeEnseignements(): Array<ModaliteEtudeEnseignementVo> {
    return this.modaliteEtudeEnseignementService.modaliteEtudeEnseignements;
       }
  set modaliteEtudeEnseignements(value: Array<ModaliteEtudeEnseignementVo>) {
        this.modaliteEtudeEnseignementService.modaliteEtudeEnseignements = value;
       } 

  get selectedModaliteEtudeEnseignement():ModaliteEtudeEnseignementVo {
           return this.modaliteEtudeEnseignementService.selectedModaliteEtudeEnseignement;
       }
  set selectedModaliteEtudeEnseignement(value: ModaliteEtudeEnseignementVo) {
        this.modaliteEtudeEnseignementService.selectedModaliteEtudeEnseignement = value;
       }
  
  get editModaliteEtudeEnseignementDialog():boolean {
           return this.modaliteEtudeEnseignementService.editModaliteEtudeEnseignementDialog;
       }
  set editModaliteEtudeEnseignementDialog(value: boolean) {
        this.modaliteEtudeEnseignementService.editModaliteEtudeEnseignementDialog= value;
       }


}