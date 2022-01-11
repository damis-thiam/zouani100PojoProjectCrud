import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {ContexteCultureScientifiqueRecontreGrandPublicJeunePublicService} from '../../../controller/service/ContexteCultureScientifiqueRecontreGrandPublicJeunePublic.service';
import {ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/ContexteCultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {ContexteVo} from '../../../controller/model/Contexte.model';
import {CultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/CultureScientifiqueRecontreGrandPublicJeunePublic.model';

@Component({
  selector: 'app-contexteCultureScientifiqueRecontreGrandPublicJeunePublic-edit',
  templateUrl: './contexteCultureScientifiqueRecontreGrandPublicJeunePublic-edit.component.html',
  styleUrls: ['./contexteCultureScientifiqueRecontreGrandPublicJeunePublic-edit.component.css']
})
export class ContexteCultureScientifiqueRecontreGrandPublicJeunePublicEditComponent implements OnInit {
// declarations
 editContexteCultureScientifiqueRecontreGrandPublicJeunePublicForm = new FormGroup({
  }); 
constructor(private contexteCultureScientifiqueRecontreGrandPublicJeunePublicService: ContexteCultureScientifiqueRecontreGrandPublicJeunePublicService) { }
// methods 


  ngOnInit(): void {
    this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.editContexteCultureScientifiqueRecontreGrandPublicJeunePublic$.subscribe(value=>{
    if(value){
     this.editContexteCultureScientifiqueRecontreGrandPublicJeunePublicForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.edit().subscribe(updatedContexteCultureScientifiqueRecontreGrandPublicJeunePublic => {
          const indexOfUpdated = this.contexteCultureScientifiqueRecontreGrandPublicJeunePublics.findIndex(
           (ContexteCultureScientifiqueRecontreGrandPublicJeunePublic) => ContexteCultureScientifiqueRecontreGrandPublicJeunePublic.id === updatedContexteCultureScientifiqueRecontreGrandPublicJeunePublic.id
            );
            indexOfUpdated > -1 ? this.contexteCultureScientifiqueRecontreGrandPublicJeunePublics[indexOfUpdated] = updatedContexteCultureScientifiqueRecontreGrandPublicJeunePublic : false;
                });
                  this.editContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog = false;
    this.selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic = new ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo();
            }

  hideEditDialog(){
    this.editContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog = false;
  }
   submit(){
    this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.edit().subscribe(result=>{
        this.editContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get contexteCultureScientifiqueRecontreGrandPublicJeunePublics(): Array<ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo> {
    return this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.contexteCultureScientifiqueRecontreGrandPublicJeunePublics;
       }
  set contexteCultureScientifiqueRecontreGrandPublicJeunePublics(value: Array<ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo>) {
        this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.contexteCultureScientifiqueRecontreGrandPublicJeunePublics = value;
       } 

  get selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic():ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo {
           return this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic;
       }
  set selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic(value: ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo) {
        this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic = value;
       }
  
  get editContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog():boolean {
           return this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.editContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
  set editContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.editContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog= value;
       }


}