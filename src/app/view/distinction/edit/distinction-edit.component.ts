import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {DistinctionService} from '../../../controller/service/Distinction.service';
import {DistinctionVo} from '../../../controller/model/Distinction.model';
import {TypeParticipationVo} from '../../../controller/model/TypeParticipation.model';
import {OrganismeVo} from '../../../controller/model/Organisme.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-distinction-edit',
  templateUrl: './distinction-edit.component.html',
  styleUrls: ['./distinction-edit.component.css']
})
export class DistinctionEditComponent implements OnInit {
// declarations
 editDistinctionForm = new FormGroup({
      dateObtention: new FormControl(new Date(), [Validators.required]),
      intitule: new FormControl("", [Validators.required]),
  }); 
constructor(private distinctionService: DistinctionService) { }
// methods 


  ngOnInit(): void {
    this.distinctionService.editDistinction$.subscribe(value=>{
    if(value){
     this.editDistinctionForm.setValue({
         dateObtention: moment(this.selectedDistinction.dateObtention).toDate(),
          intitule: this.selectedDistinction.intitule,
    });
    }
  });
  }



public edit(){ 
    this.distinctionService.edit().subscribe(updatedDistinction => {
          const indexOfUpdated = this.distinctions.findIndex(
           (Distinction) => Distinction.id === updatedDistinction.id
            );
            indexOfUpdated > -1 ? this.distinctions[indexOfUpdated] = updatedDistinction : false;
                });
                  this.editDistinctionDialog = false;
    this.selectedDistinction = new DistinctionVo();
            }

  hideEditDialog(){
    this.editDistinctionDialog = false;
  }
   submit(){
                this.selectedDistinction.dateObtention = moment(this.dateObtention.value).format("YYYY-MM-DD");
                this.selectedDistinction.intitule = this.intitule.value;
    this.distinctionService.edit().subscribe(result=>{
        this.editDistinctionDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get dateObtention() {
                 return this.editDistinctionForm.get('dateObtention');
            }
            get intitule() {
                 return this.editDistinctionForm.get('intitule');
            }
 
  get distinctions(): Array<DistinctionVo> {
    return this.distinctionService.distinctions;
       }
  set distinctions(value: Array<DistinctionVo>) {
        this.distinctionService.distinctions = value;
       } 

  get selectedDistinction():DistinctionVo {
           return this.distinctionService.selectedDistinction;
       }
  set selectedDistinction(value: DistinctionVo) {
        this.distinctionService.selectedDistinction = value;
       }
  
  get editDistinctionDialog():boolean {
           return this.distinctionService.editDistinctionDialog;
       }
  set editDistinctionDialog(value: boolean) {
        this.distinctionService.editDistinctionDialog= value;
       }


}