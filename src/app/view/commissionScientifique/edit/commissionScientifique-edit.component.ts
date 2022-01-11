import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {CommissionScientifiqueService} from '../../../controller/service/CommissionScientifique.service';
import {CommissionScientifiqueVo} from '../../../controller/model/CommissionScientifique.model';

@Component({
  selector: 'app-commissionScientifique-edit',
  templateUrl: './commissionScientifique-edit.component.html',
  styleUrls: ['./commissionScientifique-edit.component.css']
})
export class CommissionScientifiqueEditComponent implements OnInit {
// declarations
 editCommissionScientifiqueForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private commissionScientifiqueService: CommissionScientifiqueService) { }
// methods 


  ngOnInit(): void {
    this.commissionScientifiqueService.editCommissionScientifique$.subscribe(value=>{
    if(value){
     this.editCommissionScientifiqueForm.setValue({
          libelle: this.selectedCommissionScientifique.libelle,
          code: this.selectedCommissionScientifique.code,
    });
    }
  });
  }



public edit(){ 
    this.commissionScientifiqueService.edit().subscribe(updatedCommissionScientifique => {
          const indexOfUpdated = this.commissionScientifiques.findIndex(
           (CommissionScientifique) => CommissionScientifique.id === updatedCommissionScientifique.id
            );
            indexOfUpdated > -1 ? this.commissionScientifiques[indexOfUpdated] = updatedCommissionScientifique : false;
                });
                  this.editCommissionScientifiqueDialog = false;
    this.selectedCommissionScientifique = new CommissionScientifiqueVo();
            }

  hideEditDialog(){
    this.editCommissionScientifiqueDialog = false;
  }
   submit(){
                this.selectedCommissionScientifique.libelle = this.libelle.value;
                this.selectedCommissionScientifique.code = this.code.value;
    this.commissionScientifiqueService.edit().subscribe(result=>{
        this.editCommissionScientifiqueDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editCommissionScientifiqueForm.get('libelle');
            }
            get code() {
                 return this.editCommissionScientifiqueForm.get('code');
            }
 
  get commissionScientifiques(): Array<CommissionScientifiqueVo> {
    return this.commissionScientifiqueService.commissionScientifiques;
       }
  set commissionScientifiques(value: Array<CommissionScientifiqueVo>) {
        this.commissionScientifiqueService.commissionScientifiques = value;
       } 

  get selectedCommissionScientifique():CommissionScientifiqueVo {
           return this.commissionScientifiqueService.selectedCommissionScientifique;
       }
  set selectedCommissionScientifique(value: CommissionScientifiqueVo) {
        this.commissionScientifiqueService.selectedCommissionScientifique = value;
       }
  
  get editCommissionScientifiqueDialog():boolean {
           return this.commissionScientifiqueService.editCommissionScientifiqueDialog;
       }
  set editCommissionScientifiqueDialog(value: boolean) {
        this.commissionScientifiqueService.editCommissionScientifiqueDialog= value;
       }


}