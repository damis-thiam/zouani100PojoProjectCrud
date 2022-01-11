import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {PublicCibleService} from '../../../controller/service/PublicCible.service';
import {PublicCibleVo} from '../../../controller/model/PublicCible.model';

@Component({
  selector: 'app-publicCible-edit',
  templateUrl: './publicCible-edit.component.html',
  styleUrls: ['./publicCible-edit.component.css']
})
export class PublicCibleEditComponent implements OnInit {
// declarations
 editPublicCibleForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private publicCibleService: PublicCibleService) { }
// methods 


  ngOnInit(): void {
    this.publicCibleService.editPublicCible$.subscribe(value=>{
    if(value){
     this.editPublicCibleForm.setValue({
          libelle: this.selectedPublicCible.libelle,
          code: this.selectedPublicCible.code,
    });
    }
  });
  }



public edit(){ 
    this.publicCibleService.edit().subscribe(updatedPublicCible => {
          const indexOfUpdated = this.publicCibles.findIndex(
           (PublicCible) => PublicCible.id === updatedPublicCible.id
            );
            indexOfUpdated > -1 ? this.publicCibles[indexOfUpdated] = updatedPublicCible : false;
                });
                  this.editPublicCibleDialog = false;
    this.selectedPublicCible = new PublicCibleVo();
            }

  hideEditDialog(){
    this.editPublicCibleDialog = false;
  }
   submit(){
                this.selectedPublicCible.libelle = this.libelle.value;
                this.selectedPublicCible.code = this.code.value;
    this.publicCibleService.edit().subscribe(result=>{
        this.editPublicCibleDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editPublicCibleForm.get('libelle');
            }
            get code() {
                 return this.editPublicCibleForm.get('code');
            }
 
  get publicCibles(): Array<PublicCibleVo> {
    return this.publicCibleService.publicCibles;
       }
  set publicCibles(value: Array<PublicCibleVo>) {
        this.publicCibleService.publicCibles = value;
       } 

  get selectedPublicCible():PublicCibleVo {
           return this.publicCibleService.selectedPublicCible;
       }
  set selectedPublicCible(value: PublicCibleVo) {
        this.publicCibleService.selectedPublicCible = value;
       }
  
  get editPublicCibleDialog():boolean {
           return this.publicCibleService.editPublicCibleDialog;
       }
  set editPublicCibleDialog(value: boolean) {
        this.publicCibleService.editPublicCibleDialog= value;
       }


}