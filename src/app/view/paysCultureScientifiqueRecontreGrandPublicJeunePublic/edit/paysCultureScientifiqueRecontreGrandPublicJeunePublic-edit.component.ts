import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {PaysCultureScientifiqueRecontreGrandPublicJeunePublicService} from '../../../controller/service/PaysCultureScientifiqueRecontreGrandPublicJeunePublic.service';
import {PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/PaysCultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {CultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/CultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-paysCultureScientifiqueRecontreGrandPublicJeunePublic-edit',
  templateUrl: './paysCultureScientifiqueRecontreGrandPublicJeunePublic-edit.component.html',
  styleUrls: ['./paysCultureScientifiqueRecontreGrandPublicJeunePublic-edit.component.css']
})
export class PaysCultureScientifiqueRecontreGrandPublicJeunePublicEditComponent implements OnInit {
// declarations
 editPaysCultureScientifiqueRecontreGrandPublicJeunePublicForm = new FormGroup({
  }); 
constructor(private paysCultureScientifiqueRecontreGrandPublicJeunePublicService: PaysCultureScientifiqueRecontreGrandPublicJeunePublicService) { }
// methods 


  ngOnInit(): void {
    this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.editPaysCultureScientifiqueRecontreGrandPublicJeunePublic$.subscribe(value=>{
    if(value){
     this.editPaysCultureScientifiqueRecontreGrandPublicJeunePublicForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.edit().subscribe(updatedPaysCultureScientifiqueRecontreGrandPublicJeunePublic => {
          const indexOfUpdated = this.paysCultureScientifiqueRecontreGrandPublicJeunePublics.findIndex(
           (PaysCultureScientifiqueRecontreGrandPublicJeunePublic) => PaysCultureScientifiqueRecontreGrandPublicJeunePublic.id === updatedPaysCultureScientifiqueRecontreGrandPublicJeunePublic.id
            );
            indexOfUpdated > -1 ? this.paysCultureScientifiqueRecontreGrandPublicJeunePublics[indexOfUpdated] = updatedPaysCultureScientifiqueRecontreGrandPublicJeunePublic : false;
                });
                  this.editPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog = false;
    this.selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic = new PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo();
            }

  hideEditDialog(){
    this.editPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog = false;
  }
   submit(){
    this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.edit().subscribe(result=>{
        this.editPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get paysCultureScientifiqueRecontreGrandPublicJeunePublics(): Array<PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo> {
    return this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.paysCultureScientifiqueRecontreGrandPublicJeunePublics;
       }
  set paysCultureScientifiqueRecontreGrandPublicJeunePublics(value: Array<PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo>) {
        this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.paysCultureScientifiqueRecontreGrandPublicJeunePublics = value;
       } 

  get selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic():PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo {
           return this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic;
       }
  set selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic(value: PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo) {
        this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic = value;
       }
  
  get editPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog():boolean {
           return this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.editPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
  set editPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.editPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog= value;
       }


}