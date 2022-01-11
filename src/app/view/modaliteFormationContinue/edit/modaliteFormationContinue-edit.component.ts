import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {ModaliteFormationContinueService} from '../../../controller/service/ModaliteFormationContinue.service';
import {ModaliteFormationContinueVo} from '../../../controller/model/ModaliteFormationContinue.model';

@Component({
  selector: 'app-modaliteFormationContinue-edit',
  templateUrl: './modaliteFormationContinue-edit.component.html',
  styleUrls: ['./modaliteFormationContinue-edit.component.css']
})
export class ModaliteFormationContinueEditComponent implements OnInit {
// declarations
 editModaliteFormationContinueForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private modaliteFormationContinueService: ModaliteFormationContinueService) { }
// methods 


  ngOnInit(): void {
    this.modaliteFormationContinueService.editModaliteFormationContinue$.subscribe(value=>{
    if(value){
     this.editModaliteFormationContinueForm.setValue({
          libelle: this.selectedModaliteFormationContinue.libelle,
          code: this.selectedModaliteFormationContinue.code,
    });
    }
  });
  }



public edit(){ 
    this.modaliteFormationContinueService.edit().subscribe(updatedModaliteFormationContinue => {
          const indexOfUpdated = this.modaliteFormationContinues.findIndex(
           (ModaliteFormationContinue) => ModaliteFormationContinue.id === updatedModaliteFormationContinue.id
            );
            indexOfUpdated > -1 ? this.modaliteFormationContinues[indexOfUpdated] = updatedModaliteFormationContinue : false;
                });
                  this.editModaliteFormationContinueDialog = false;
    this.selectedModaliteFormationContinue = new ModaliteFormationContinueVo();
            }

  hideEditDialog(){
    this.editModaliteFormationContinueDialog = false;
  }
   submit(){
                this.selectedModaliteFormationContinue.libelle = this.libelle.value;
                this.selectedModaliteFormationContinue.code = this.code.value;
    this.modaliteFormationContinueService.edit().subscribe(result=>{
        this.editModaliteFormationContinueDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editModaliteFormationContinueForm.get('libelle');
            }
            get code() {
                 return this.editModaliteFormationContinueForm.get('code');
            }
 
  get modaliteFormationContinues(): Array<ModaliteFormationContinueVo> {
    return this.modaliteFormationContinueService.modaliteFormationContinues;
       }
  set modaliteFormationContinues(value: Array<ModaliteFormationContinueVo>) {
        this.modaliteFormationContinueService.modaliteFormationContinues = value;
       } 

  get selectedModaliteFormationContinue():ModaliteFormationContinueVo {
           return this.modaliteFormationContinueService.selectedModaliteFormationContinue;
       }
  set selectedModaliteFormationContinue(value: ModaliteFormationContinueVo) {
        this.modaliteFormationContinueService.selectedModaliteFormationContinue = value;
       }
  
  get editModaliteFormationContinueDialog():boolean {
           return this.modaliteFormationContinueService.editModaliteFormationContinueDialog;
       }
  set editModaliteFormationContinueDialog(value: boolean) {
        this.modaliteFormationContinueService.editModaliteFormationContinueDialog= value;
       }


}