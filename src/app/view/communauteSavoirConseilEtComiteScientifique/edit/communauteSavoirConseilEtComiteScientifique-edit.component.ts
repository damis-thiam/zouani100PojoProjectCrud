import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {CommunauteSavoirConseilEtComiteScientifiqueService} from '../../../controller/service/CommunauteSavoirConseilEtComiteScientifique.service';
import {CommunauteSavoirConseilEtComiteScientifiqueVo} from '../../../controller/model/CommunauteSavoirConseilEtComiteScientifique.model';
import {ConseilEtComiteScientifiqueVo} from '../../../controller/model/ConseilEtComiteScientifique.model';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';

@Component({
  selector: 'app-communauteSavoirConseilEtComiteScientifique-edit',
  templateUrl: './communauteSavoirConseilEtComiteScientifique-edit.component.html',
  styleUrls: ['./communauteSavoirConseilEtComiteScientifique-edit.component.css']
})
export class CommunauteSavoirConseilEtComiteScientifiqueEditComponent implements OnInit {
// declarations
 editCommunauteSavoirConseilEtComiteScientifiqueForm = new FormGroup({
  }); 
constructor(private communauteSavoirConseilEtComiteScientifiqueService: CommunauteSavoirConseilEtComiteScientifiqueService) { }
// methods 


  ngOnInit(): void {
    this.communauteSavoirConseilEtComiteScientifiqueService.editCommunauteSavoirConseilEtComiteScientifique$.subscribe(value=>{
    if(value){
     this.editCommunauteSavoirConseilEtComiteScientifiqueForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.communauteSavoirConseilEtComiteScientifiqueService.edit().subscribe(updatedCommunauteSavoirConseilEtComiteScientifique => {
          const indexOfUpdated = this.communauteSavoirConseilEtComiteScientifiques.findIndex(
           (CommunauteSavoirConseilEtComiteScientifique) => CommunauteSavoirConseilEtComiteScientifique.id === updatedCommunauteSavoirConseilEtComiteScientifique.id
            );
            indexOfUpdated > -1 ? this.communauteSavoirConseilEtComiteScientifiques[indexOfUpdated] = updatedCommunauteSavoirConseilEtComiteScientifique : false;
                });
                  this.editCommunauteSavoirConseilEtComiteScientifiqueDialog = false;
    this.selectedCommunauteSavoirConseilEtComiteScientifique = new CommunauteSavoirConseilEtComiteScientifiqueVo();
            }

  hideEditDialog(){
    this.editCommunauteSavoirConseilEtComiteScientifiqueDialog = false;
  }
   submit(){
    this.communauteSavoirConseilEtComiteScientifiqueService.edit().subscribe(result=>{
        this.editCommunauteSavoirConseilEtComiteScientifiqueDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get communauteSavoirConseilEtComiteScientifiques(): Array<CommunauteSavoirConseilEtComiteScientifiqueVo> {
    return this.communauteSavoirConseilEtComiteScientifiqueService.communauteSavoirConseilEtComiteScientifiques;
       }
  set communauteSavoirConseilEtComiteScientifiques(value: Array<CommunauteSavoirConseilEtComiteScientifiqueVo>) {
        this.communauteSavoirConseilEtComiteScientifiqueService.communauteSavoirConseilEtComiteScientifiques = value;
       } 

  get selectedCommunauteSavoirConseilEtComiteScientifique():CommunauteSavoirConseilEtComiteScientifiqueVo {
           return this.communauteSavoirConseilEtComiteScientifiqueService.selectedCommunauteSavoirConseilEtComiteScientifique;
       }
  set selectedCommunauteSavoirConseilEtComiteScientifique(value: CommunauteSavoirConseilEtComiteScientifiqueVo) {
        this.communauteSavoirConseilEtComiteScientifiqueService.selectedCommunauteSavoirConseilEtComiteScientifique = value;
       }
  
  get editCommunauteSavoirConseilEtComiteScientifiqueDialog():boolean {
           return this.communauteSavoirConseilEtComiteScientifiqueService.editCommunauteSavoirConseilEtComiteScientifiqueDialog;
       }
  set editCommunauteSavoirConseilEtComiteScientifiqueDialog(value: boolean) {
        this.communauteSavoirConseilEtComiteScientifiqueService.editCommunauteSavoirConseilEtComiteScientifiqueDialog= value;
       }


}