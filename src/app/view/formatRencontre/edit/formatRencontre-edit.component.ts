import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {FormatRencontreService} from '../../../controller/service/FormatRencontre.service';
import {FormatRencontreVo} from '../../../controller/model/FormatRencontre.model';

@Component({
  selector: 'app-formatRencontre-edit',
  templateUrl: './formatRencontre-edit.component.html',
  styleUrls: ['./formatRencontre-edit.component.css']
})
export class FormatRencontreEditComponent implements OnInit {
// declarations
 editFormatRencontreForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private formatRencontreService: FormatRencontreService) { }
// methods 


  ngOnInit(): void {
    this.formatRencontreService.editFormatRencontre$.subscribe(value=>{
    if(value){
     this.editFormatRencontreForm.setValue({
          libelle: this.selectedFormatRencontre.libelle,
          code: this.selectedFormatRencontre.code,
    });
    }
  });
  }



public edit(){ 
    this.formatRencontreService.edit().subscribe(updatedFormatRencontre => {
          const indexOfUpdated = this.formatRencontres.findIndex(
           (FormatRencontre) => FormatRencontre.id === updatedFormatRencontre.id
            );
            indexOfUpdated > -1 ? this.formatRencontres[indexOfUpdated] = updatedFormatRencontre : false;
                });
                  this.editFormatRencontreDialog = false;
    this.selectedFormatRencontre = new FormatRencontreVo();
            }

  hideEditDialog(){
    this.editFormatRencontreDialog = false;
  }
   submit(){
                this.selectedFormatRencontre.libelle = this.libelle.value;
                this.selectedFormatRencontre.code = this.code.value;
    this.formatRencontreService.edit().subscribe(result=>{
        this.editFormatRencontreDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editFormatRencontreForm.get('libelle');
            }
            get code() {
                 return this.editFormatRencontreForm.get('code');
            }
 
  get formatRencontres(): Array<FormatRencontreVo> {
    return this.formatRencontreService.formatRencontres;
       }
  set formatRencontres(value: Array<FormatRencontreVo>) {
        this.formatRencontreService.formatRencontres = value;
       } 

  get selectedFormatRencontre():FormatRencontreVo {
           return this.formatRencontreService.selectedFormatRencontre;
       }
  set selectedFormatRencontre(value: FormatRencontreVo) {
        this.formatRencontreService.selectedFormatRencontre = value;
       }
  
  get editFormatRencontreDialog():boolean {
           return this.formatRencontreService.editFormatRencontreDialog;
       }
  set editFormatRencontreDialog(value: boolean) {
        this.formatRencontreService.editFormatRencontreDialog= value;
       }


}