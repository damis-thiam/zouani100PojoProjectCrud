import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {FinancementDoctorantService} from '../../../controller/service/FinancementDoctorant.service';
import {FinancementDoctorantVo} from '../../../controller/model/FinancementDoctorant.model';

@Component({
  selector: 'app-financementDoctorant-edit',
  templateUrl: './financementDoctorant-edit.component.html',
  styleUrls: ['./financementDoctorant-edit.component.css']
})
export class FinancementDoctorantEditComponent implements OnInit {
// declarations
 editFinancementDoctorantForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private financementDoctorantService: FinancementDoctorantService) { }
// methods 


  ngOnInit(): void {
    this.financementDoctorantService.editFinancementDoctorant$.subscribe(value=>{
    if(value){
     this.editFinancementDoctorantForm.setValue({
          libelle: this.selectedFinancementDoctorant.libelle,
          code: this.selectedFinancementDoctorant.code,
    });
    }
  });
  }



public edit(){ 
    this.financementDoctorantService.edit().subscribe(updatedFinancementDoctorant => {
          const indexOfUpdated = this.financementDoctorants.findIndex(
           (FinancementDoctorant) => FinancementDoctorant.id === updatedFinancementDoctorant.id
            );
            indexOfUpdated > -1 ? this.financementDoctorants[indexOfUpdated] = updatedFinancementDoctorant : false;
                });
                  this.editFinancementDoctorantDialog = false;
    this.selectedFinancementDoctorant = new FinancementDoctorantVo();
            }

  hideEditDialog(){
    this.editFinancementDoctorantDialog = false;
  }
   submit(){
                this.selectedFinancementDoctorant.libelle = this.libelle.value;
                this.selectedFinancementDoctorant.code = this.code.value;
    this.financementDoctorantService.edit().subscribe(result=>{
        this.editFinancementDoctorantDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editFinancementDoctorantForm.get('libelle');
            }
            get code() {
                 return this.editFinancementDoctorantForm.get('code');
            }
 
  get financementDoctorants(): Array<FinancementDoctorantVo> {
    return this.financementDoctorantService.financementDoctorants;
       }
  set financementDoctorants(value: Array<FinancementDoctorantVo>) {
        this.financementDoctorantService.financementDoctorants = value;
       } 

  get selectedFinancementDoctorant():FinancementDoctorantVo {
           return this.financementDoctorantService.selectedFinancementDoctorant;
       }
  set selectedFinancementDoctorant(value: FinancementDoctorantVo) {
        this.financementDoctorantService.selectedFinancementDoctorant = value;
       }
  
  get editFinancementDoctorantDialog():boolean {
           return this.financementDoctorantService.editFinancementDoctorantDialog;
       }
  set editFinancementDoctorantDialog(value: boolean) {
        this.financementDoctorantService.editFinancementDoctorantDialog= value;
       }


}