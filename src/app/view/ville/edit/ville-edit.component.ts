import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {VilleService} from '../../../controller/service/Ville.service';
import {VilleVo} from '../../../controller/model/Ville.model';
import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-ville-edit',
  templateUrl: './ville-edit.component.html',
  styleUrls: ['./ville-edit.component.css']
})
export class VilleEditComponent implements OnInit {
// declarations
 editVilleForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private villeService: VilleService) { }
// methods 


  ngOnInit(): void {
    this.villeService.editVille$.subscribe(value=>{
    if(value){
     this.editVilleForm.setValue({
          libelle: this.selectedVille.libelle,
          code: this.selectedVille.code,
    });
    }
  });
  }



public edit(){ 
    this.villeService.edit().subscribe(updatedVille => {
          const indexOfUpdated = this.villes.findIndex(
           (Ville) => Ville.id === updatedVille.id
            );
            indexOfUpdated > -1 ? this.villes[indexOfUpdated] = updatedVille : false;
                });
                  this.editVilleDialog = false;
    this.selectedVille = new VilleVo();
            }

  hideEditDialog(){
    this.editVilleDialog = false;
  }
   submit(){
                this.selectedVille.libelle = this.libelle.value;
                this.selectedVille.code = this.code.value;
    this.villeService.edit().subscribe(result=>{
        this.editVilleDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editVilleForm.get('libelle');
            }
            get code() {
                 return this.editVilleForm.get('code');
            }
 
  get villes(): Array<VilleVo> {
    return this.villeService.villes;
       }
  set villes(value: Array<VilleVo>) {
        this.villeService.villes = value;
       } 

  get selectedVille():VilleVo {
           return this.villeService.selectedVille;
       }
  set selectedVille(value: VilleVo) {
        this.villeService.selectedVille = value;
       }
  
  get editVilleDialog():boolean {
           return this.villeService.editVilleDialog;
       }
  set editVilleDialog(value: boolean) {
        this.villeService.editVilleDialog= value;
       }


}