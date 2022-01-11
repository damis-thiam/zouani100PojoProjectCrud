import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {CommunauteSavoirService} from '../../../controller/service/CommunauteSavoir.service';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';

@Component({
  selector: 'app-communauteSavoir-edit',
  templateUrl: './communauteSavoir-edit.component.html',
  styleUrls: ['./communauteSavoir-edit.component.css']
})
export class CommunauteSavoirEditComponent implements OnInit {
// declarations
 editCommunauteSavoirForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private communauteSavoirService: CommunauteSavoirService) { }
// methods 


  ngOnInit(): void {
    this.communauteSavoirService.editCommunauteSavoir$.subscribe(value=>{
    if(value){
     this.editCommunauteSavoirForm.setValue({
          libelle: this.selectedCommunauteSavoir.libelle,
          code: this.selectedCommunauteSavoir.code,
    });
    }
  });
  }



public edit(){ 
    this.communauteSavoirService.edit().subscribe(updatedCommunauteSavoir => {
          const indexOfUpdated = this.communauteSavoirs.findIndex(
           (CommunauteSavoir) => CommunauteSavoir.id === updatedCommunauteSavoir.id
            );
            indexOfUpdated > -1 ? this.communauteSavoirs[indexOfUpdated] = updatedCommunauteSavoir : false;
                });
                  this.editCommunauteSavoirDialog = false;
    this.selectedCommunauteSavoir = new CommunauteSavoirVo();
            }

  hideEditDialog(){
    this.editCommunauteSavoirDialog = false;
  }
   submit(){
                this.selectedCommunauteSavoir.libelle = this.libelle.value;
                this.selectedCommunauteSavoir.code = this.code.value;
    this.communauteSavoirService.edit().subscribe(result=>{
        this.editCommunauteSavoirDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editCommunauteSavoirForm.get('libelle');
            }
            get code() {
                 return this.editCommunauteSavoirForm.get('code');
            }
 
  get communauteSavoirs(): Array<CommunauteSavoirVo> {
    return this.communauteSavoirService.communauteSavoirs;
       }
  set communauteSavoirs(value: Array<CommunauteSavoirVo>) {
        this.communauteSavoirService.communauteSavoirs = value;
       } 

  get selectedCommunauteSavoir():CommunauteSavoirVo {
           return this.communauteSavoirService.selectedCommunauteSavoir;
       }
  set selectedCommunauteSavoir(value: CommunauteSavoirVo) {
        this.communauteSavoirService.selectedCommunauteSavoir = value;
       }
  
  get editCommunauteSavoirDialog():boolean {
           return this.communauteSavoirService.editCommunauteSavoirDialog;
       }
  set editCommunauteSavoirDialog(value: boolean) {
        this.communauteSavoirService.editCommunauteSavoirDialog= value;
       }


}