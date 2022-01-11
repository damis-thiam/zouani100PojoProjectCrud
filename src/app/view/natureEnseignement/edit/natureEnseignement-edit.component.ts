import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {NatureEnseignementService} from '../../../controller/service/NatureEnseignement.service';
import {NatureEnseignementVo} from '../../../controller/model/NatureEnseignement.model';
import {EnseignementVo} from '../../../controller/model/Enseignement.model';
import {NatureEtudeVo} from '../../../controller/model/NatureEtude.model';

@Component({
  selector: 'app-natureEnseignement-edit',
  templateUrl: './natureEnseignement-edit.component.html',
  styleUrls: ['./natureEnseignement-edit.component.css']
})
export class NatureEnseignementEditComponent implements OnInit {
// declarations
 editNatureEnseignementForm = new FormGroup({
  }); 
constructor(private natureEnseignementService: NatureEnseignementService) { }
// methods 


  ngOnInit(): void {
    this.natureEnseignementService.editNatureEnseignement$.subscribe(value=>{
    if(value){
     this.editNatureEnseignementForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.natureEnseignementService.edit().subscribe(updatedNatureEnseignement => {
          const indexOfUpdated = this.natureEnseignements.findIndex(
           (NatureEnseignement) => NatureEnseignement.id === updatedNatureEnseignement.id
            );
            indexOfUpdated > -1 ? this.natureEnseignements[indexOfUpdated] = updatedNatureEnseignement : false;
                });
                  this.editNatureEnseignementDialog = false;
    this.selectedNatureEnseignement = new NatureEnseignementVo();
            }

  hideEditDialog(){
    this.editNatureEnseignementDialog = false;
  }
   submit(){
    this.natureEnseignementService.edit().subscribe(result=>{
        this.editNatureEnseignementDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get natureEnseignements(): Array<NatureEnseignementVo> {
    return this.natureEnseignementService.natureEnseignements;
       }
  set natureEnseignements(value: Array<NatureEnseignementVo>) {
        this.natureEnseignementService.natureEnseignements = value;
       } 

  get selectedNatureEnseignement():NatureEnseignementVo {
           return this.natureEnseignementService.selectedNatureEnseignement;
       }
  set selectedNatureEnseignement(value: NatureEnseignementVo) {
        this.natureEnseignementService.selectedNatureEnseignement = value;
       }
  
  get editNatureEnseignementDialog():boolean {
           return this.natureEnseignementService.editNatureEnseignementDialog;
       }
  set editNatureEnseignementDialog(value: boolean) {
        this.natureEnseignementService.editNatureEnseignementDialog= value;
       }


}