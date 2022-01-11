import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {CommunauteSavoirExpertiseScientifiqueService} from '../../../controller/service/CommunauteSavoirExpertiseScientifique.service';
import {CommunauteSavoirExpertiseScientifiqueVo} from '../../../controller/model/CommunauteSavoirExpertiseScientifique.model';
import {ExpertiseScientifiqueVo} from '../../../controller/model/ExpertiseScientifique.model';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';

@Component({
  selector: 'app-communauteSavoirExpertiseScientifique-edit',
  templateUrl: './communauteSavoirExpertiseScientifique-edit.component.html',
  styleUrls: ['./communauteSavoirExpertiseScientifique-edit.component.css']
})
export class CommunauteSavoirExpertiseScientifiqueEditComponent implements OnInit {
// declarations
 editCommunauteSavoirExpertiseScientifiqueForm = new FormGroup({
  }); 
constructor(private communauteSavoirExpertiseScientifiqueService: CommunauteSavoirExpertiseScientifiqueService) { }
// methods 


  ngOnInit(): void {
    this.communauteSavoirExpertiseScientifiqueService.editCommunauteSavoirExpertiseScientifique$.subscribe(value=>{
    if(value){
     this.editCommunauteSavoirExpertiseScientifiqueForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.communauteSavoirExpertiseScientifiqueService.edit().subscribe(updatedCommunauteSavoirExpertiseScientifique => {
          const indexOfUpdated = this.communauteSavoirExpertiseScientifiques.findIndex(
           (CommunauteSavoirExpertiseScientifique) => CommunauteSavoirExpertiseScientifique.id === updatedCommunauteSavoirExpertiseScientifique.id
            );
            indexOfUpdated > -1 ? this.communauteSavoirExpertiseScientifiques[indexOfUpdated] = updatedCommunauteSavoirExpertiseScientifique : false;
                });
                  this.editCommunauteSavoirExpertiseScientifiqueDialog = false;
    this.selectedCommunauteSavoirExpertiseScientifique = new CommunauteSavoirExpertiseScientifiqueVo();
            }

  hideEditDialog(){
    this.editCommunauteSavoirExpertiseScientifiqueDialog = false;
  }
   submit(){
    this.communauteSavoirExpertiseScientifiqueService.edit().subscribe(result=>{
        this.editCommunauteSavoirExpertiseScientifiqueDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get communauteSavoirExpertiseScientifiques(): Array<CommunauteSavoirExpertiseScientifiqueVo> {
    return this.communauteSavoirExpertiseScientifiqueService.communauteSavoirExpertiseScientifiques;
       }
  set communauteSavoirExpertiseScientifiques(value: Array<CommunauteSavoirExpertiseScientifiqueVo>) {
        this.communauteSavoirExpertiseScientifiqueService.communauteSavoirExpertiseScientifiques = value;
       } 

  get selectedCommunauteSavoirExpertiseScientifique():CommunauteSavoirExpertiseScientifiqueVo {
           return this.communauteSavoirExpertiseScientifiqueService.selectedCommunauteSavoirExpertiseScientifique;
       }
  set selectedCommunauteSavoirExpertiseScientifique(value: CommunauteSavoirExpertiseScientifiqueVo) {
        this.communauteSavoirExpertiseScientifiqueService.selectedCommunauteSavoirExpertiseScientifique = value;
       }
  
  get editCommunauteSavoirExpertiseScientifiqueDialog():boolean {
           return this.communauteSavoirExpertiseScientifiqueService.editCommunauteSavoirExpertiseScientifiqueDialog;
       }
  set editCommunauteSavoirExpertiseScientifiqueDialog(value: boolean) {
        this.communauteSavoirExpertiseScientifiqueService.editCommunauteSavoirExpertiseScientifiqueDialog= value;
       }


}