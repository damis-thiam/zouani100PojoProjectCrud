import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {CorpsService} from '../../../controller/service/Corps.service';
import {CorpsVo} from '../../../controller/model/Corps.model';

@Component({
  selector: 'app-corps-edit',
  templateUrl: './corps-edit.component.html',
  styleUrls: ['./corps-edit.component.css']
})
export class CorpsEditComponent implements OnInit {
// declarations
 editCorpsForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
  }); 
constructor(private corpsService: CorpsService) { }
// methods 


  ngOnInit(): void {
    this.corpsService.editCorps$.subscribe(value=>{
    if(value){
     this.editCorpsForm.setValue({
          libelle: this.selectedCorps.libelle,
          code: this.selectedCorps.code,
          description: this.selectedCorps.description,
    });
    }
  });
  }



public edit(){ 
    this.corpsService.edit().subscribe(updatedCorps => {
          const indexOfUpdated = this.corpss.findIndex(
           (Corps) => Corps.id === updatedCorps.id
            );
            indexOfUpdated > -1 ? this.corpss[indexOfUpdated] = updatedCorps : false;
                });
                  this.editCorpsDialog = false;
    this.selectedCorps = new CorpsVo();
            }

  hideEditDialog(){
    this.editCorpsDialog = false;
  }
   submit(){
                this.selectedCorps.libelle = this.libelle.value;
                this.selectedCorps.code = this.code.value;
                this.selectedCorps.description = this.description.value;
    this.corpsService.edit().subscribe(result=>{
        this.editCorpsDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editCorpsForm.get('libelle');
            }
            get code() {
                 return this.editCorpsForm.get('code');
            }
            get description() {
                 return this.editCorpsForm.get('description');
            }
 
  get corpss(): Array<CorpsVo> {
    return this.corpsService.corpss;
       }
  set corpss(value: Array<CorpsVo>) {
        this.corpsService.corpss = value;
       } 

  get selectedCorps():CorpsVo {
           return this.corpsService.selectedCorps;
       }
  set selectedCorps(value: CorpsVo) {
        this.corpsService.selectedCorps = value;
       }
  
  get editCorpsDialog():boolean {
           return this.corpsService.editCorpsDialog;
       }
  set editCorpsDialog(value: boolean) {
        this.corpsService.editCorpsDialog= value;
       }


}