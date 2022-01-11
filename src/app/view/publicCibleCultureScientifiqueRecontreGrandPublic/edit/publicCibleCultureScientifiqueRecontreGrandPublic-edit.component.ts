import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {PublicCibleCultureScientifiqueRecontreGrandPublicService} from '../../../controller/service/PublicCibleCultureScientifiqueRecontreGrandPublic.service';
import {PublicCibleCultureScientifiqueRecontreGrandPublicVo} from '../../../controller/model/PublicCibleCultureScientifiqueRecontreGrandPublic.model';
import {PublicCibleVo} from '../../../controller/model/PublicCible.model';
import {CultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/CultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-publicCibleCultureScientifiqueRecontreGrandPublic-edit',
  templateUrl: './publicCibleCultureScientifiqueRecontreGrandPublic-edit.component.html',
  styleUrls: ['./publicCibleCultureScientifiqueRecontreGrandPublic-edit.component.css']
})
export class PublicCibleCultureScientifiqueRecontreGrandPublicEditComponent implements OnInit {
// declarations
 editPublicCibleCultureScientifiqueRecontreGrandPublicForm = new FormGroup({
  }); 
constructor(private publicCibleCultureScientifiqueRecontreGrandPublicService: PublicCibleCultureScientifiqueRecontreGrandPublicService) { }
// methods 


  ngOnInit(): void {
    this.publicCibleCultureScientifiqueRecontreGrandPublicService.editPublicCibleCultureScientifiqueRecontreGrandPublic$.subscribe(value=>{
    if(value){
     this.editPublicCibleCultureScientifiqueRecontreGrandPublicForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.publicCibleCultureScientifiqueRecontreGrandPublicService.edit().subscribe(updatedPublicCibleCultureScientifiqueRecontreGrandPublic => {
          const indexOfUpdated = this.publicCibleCultureScientifiqueRecontreGrandPublics.findIndex(
           (PublicCibleCultureScientifiqueRecontreGrandPublic) => PublicCibleCultureScientifiqueRecontreGrandPublic.id === updatedPublicCibleCultureScientifiqueRecontreGrandPublic.id
            );
            indexOfUpdated > -1 ? this.publicCibleCultureScientifiqueRecontreGrandPublics[indexOfUpdated] = updatedPublicCibleCultureScientifiqueRecontreGrandPublic : false;
                });
                  this.editPublicCibleCultureScientifiqueRecontreGrandPublicDialog = false;
    this.selectedPublicCibleCultureScientifiqueRecontreGrandPublic = new PublicCibleCultureScientifiqueRecontreGrandPublicVo();
            }

  hideEditDialog(){
    this.editPublicCibleCultureScientifiqueRecontreGrandPublicDialog = false;
  }
   submit(){
    this.publicCibleCultureScientifiqueRecontreGrandPublicService.edit().subscribe(result=>{
        this.editPublicCibleCultureScientifiqueRecontreGrandPublicDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get publicCibleCultureScientifiqueRecontreGrandPublics(): Array<PublicCibleCultureScientifiqueRecontreGrandPublicVo> {
    return this.publicCibleCultureScientifiqueRecontreGrandPublicService.publicCibleCultureScientifiqueRecontreGrandPublics;
       }
  set publicCibleCultureScientifiqueRecontreGrandPublics(value: Array<PublicCibleCultureScientifiqueRecontreGrandPublicVo>) {
        this.publicCibleCultureScientifiqueRecontreGrandPublicService.publicCibleCultureScientifiqueRecontreGrandPublics = value;
       } 

  get selectedPublicCibleCultureScientifiqueRecontreGrandPublic():PublicCibleCultureScientifiqueRecontreGrandPublicVo {
           return this.publicCibleCultureScientifiqueRecontreGrandPublicService.selectedPublicCibleCultureScientifiqueRecontreGrandPublic;
       }
  set selectedPublicCibleCultureScientifiqueRecontreGrandPublic(value: PublicCibleCultureScientifiqueRecontreGrandPublicVo) {
        this.publicCibleCultureScientifiqueRecontreGrandPublicService.selectedPublicCibleCultureScientifiqueRecontreGrandPublic = value;
       }
  
  get editPublicCibleCultureScientifiqueRecontreGrandPublicDialog():boolean {
           return this.publicCibleCultureScientifiqueRecontreGrandPublicService.editPublicCibleCultureScientifiqueRecontreGrandPublicDialog;
       }
  set editPublicCibleCultureScientifiqueRecontreGrandPublicDialog(value: boolean) {
        this.publicCibleCultureScientifiqueRecontreGrandPublicService.editPublicCibleCultureScientifiqueRecontreGrandPublicDialog= value;
       }


}