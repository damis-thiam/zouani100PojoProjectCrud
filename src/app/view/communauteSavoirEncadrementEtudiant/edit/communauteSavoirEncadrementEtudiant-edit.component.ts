import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {CommunauteSavoirEncadrementEtudiantService} from '../../../controller/service/CommunauteSavoirEncadrementEtudiant.service';
import {CommunauteSavoirEncadrementEtudiantVo} from '../../../controller/model/CommunauteSavoirEncadrementEtudiant.model';
import {EncadrementEtudiantVo} from '../../../controller/model/EncadrementEtudiant.model';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';

@Component({
  selector: 'app-communauteSavoirEncadrementEtudiant-edit',
  templateUrl: './communauteSavoirEncadrementEtudiant-edit.component.html',
  styleUrls: ['./communauteSavoirEncadrementEtudiant-edit.component.css']
})
export class CommunauteSavoirEncadrementEtudiantEditComponent implements OnInit {
// declarations
 editCommunauteSavoirEncadrementEtudiantForm = new FormGroup({
  }); 
constructor(private communauteSavoirEncadrementEtudiantService: CommunauteSavoirEncadrementEtudiantService) { }
// methods 


  ngOnInit(): void {
    this.communauteSavoirEncadrementEtudiantService.editCommunauteSavoirEncadrementEtudiant$.subscribe(value=>{
    if(value){
     this.editCommunauteSavoirEncadrementEtudiantForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.communauteSavoirEncadrementEtudiantService.edit().subscribe(updatedCommunauteSavoirEncadrementEtudiant => {
          const indexOfUpdated = this.communauteSavoirEncadrementEtudiants.findIndex(
           (CommunauteSavoirEncadrementEtudiant) => CommunauteSavoirEncadrementEtudiant.id === updatedCommunauteSavoirEncadrementEtudiant.id
            );
            indexOfUpdated > -1 ? this.communauteSavoirEncadrementEtudiants[indexOfUpdated] = updatedCommunauteSavoirEncadrementEtudiant : false;
                });
                  this.editCommunauteSavoirEncadrementEtudiantDialog = false;
    this.selectedCommunauteSavoirEncadrementEtudiant = new CommunauteSavoirEncadrementEtudiantVo();
            }

  hideEditDialog(){
    this.editCommunauteSavoirEncadrementEtudiantDialog = false;
  }
   submit(){
    this.communauteSavoirEncadrementEtudiantService.edit().subscribe(result=>{
        this.editCommunauteSavoirEncadrementEtudiantDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get communauteSavoirEncadrementEtudiants(): Array<CommunauteSavoirEncadrementEtudiantVo> {
    return this.communauteSavoirEncadrementEtudiantService.communauteSavoirEncadrementEtudiants;
       }
  set communauteSavoirEncadrementEtudiants(value: Array<CommunauteSavoirEncadrementEtudiantVo>) {
        this.communauteSavoirEncadrementEtudiantService.communauteSavoirEncadrementEtudiants = value;
       } 

  get selectedCommunauteSavoirEncadrementEtudiant():CommunauteSavoirEncadrementEtudiantVo {
           return this.communauteSavoirEncadrementEtudiantService.selectedCommunauteSavoirEncadrementEtudiant;
       }
  set selectedCommunauteSavoirEncadrementEtudiant(value: CommunauteSavoirEncadrementEtudiantVo) {
        this.communauteSavoirEncadrementEtudiantService.selectedCommunauteSavoirEncadrementEtudiant = value;
       }
  
  get editCommunauteSavoirEncadrementEtudiantDialog():boolean {
           return this.communauteSavoirEncadrementEtudiantService.editCommunauteSavoirEncadrementEtudiantDialog;
       }
  set editCommunauteSavoirEncadrementEtudiantDialog(value: boolean) {
        this.communauteSavoirEncadrementEtudiantService.editCommunauteSavoirEncadrementEtudiantDialog= value;
       }


}