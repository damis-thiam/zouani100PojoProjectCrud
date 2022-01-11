import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {MasterService} from '../../../controller/service/Master.service';
import {MasterVo} from '../../../controller/model/Master.model';
import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-master-edit',
  templateUrl: './master-edit.component.html',
  styleUrls: ['./master-edit.component.css']
})
export class MasterEditComponent implements OnInit {
// declarations
 editMasterForm = new FormGroup({
      intitule: new FormControl("", [Validators.required]),
          international:new FormControl(0,[Validators.required]),
  }); 
constructor(private masterService: MasterService) { }
// methods 


  ngOnInit(): void {
    this.masterService.editMaster$.subscribe(value=>{
    if(value){
     this.editMasterForm.setValue({
          intitule: this.selectedMaster.intitule,
          international: this.selectedMaster.international,
    });
    }
  });
  }



public edit(){ 
    this.masterService.edit().subscribe(updatedMaster => {
          const indexOfUpdated = this.masters.findIndex(
           (Master) => Master.id === updatedMaster.id
            );
            indexOfUpdated > -1 ? this.masters[indexOfUpdated] = updatedMaster : false;
                });
                  this.editMasterDialog = false;
    this.selectedMaster = new MasterVo();
            }

  hideEditDialog(){
    this.editMasterDialog = false;
  }
   submit(){
                this.selectedMaster.intitule = this.intitule.value;
                this.selectedMaster.international = this.international.value;
    this.masterService.edit().subscribe(result=>{
        this.editMasterDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get intitule() {
                 return this.editMasterForm.get('intitule');
            }
            get international() {
                 return this.editMasterForm.get('international');
            }
 
  get masters(): Array<MasterVo> {
    return this.masterService.masters;
       }
  set masters(value: Array<MasterVo>) {
        this.masterService.masters = value;
       } 

  get selectedMaster():MasterVo {
           return this.masterService.selectedMaster;
       }
  set selectedMaster(value: MasterVo) {
        this.masterService.selectedMaster = value;
       }
  
  get editMasterDialog():boolean {
           return this.masterService.editMasterDialog;
       }
  set editMasterDialog(value: boolean) {
        this.masterService.editMasterDialog= value;
       }


}