import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {ResponsabiliteDirectionEncadrementDoctorantService} from '../../../controller/service/ResponsabiliteDirectionEncadrementDoctorant.service';
import {ResponsabiliteDirectionEncadrementDoctorantVo} from '../../../controller/model/ResponsabiliteDirectionEncadrementDoctorant.model';

@Component({
  selector: 'app-responsabiliteDirectionEncadrementDoctorant-edit',
  templateUrl: './responsabiliteDirectionEncadrementDoctorant-edit.component.html',
  styleUrls: ['./responsabiliteDirectionEncadrementDoctorant-edit.component.css']
})
export class ResponsabiliteDirectionEncadrementDoctorantEditComponent implements OnInit {
// declarations
 editResponsabiliteDirectionEncadrementDoctorantForm = new FormGroup({
      libelle: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
  }); 
constructor(private responsabiliteDirectionEncadrementDoctorantService: ResponsabiliteDirectionEncadrementDoctorantService) { }
// methods 


  ngOnInit(): void {
    this.responsabiliteDirectionEncadrementDoctorantService.editResponsabiliteDirectionEncadrementDoctorant$.subscribe(value=>{
    if(value){
     this.editResponsabiliteDirectionEncadrementDoctorantForm.setValue({
          libelle: this.selectedResponsabiliteDirectionEncadrementDoctorant.libelle,
          code: this.selectedResponsabiliteDirectionEncadrementDoctorant.code,
    });
    }
  });
  }



public edit(){ 
    this.responsabiliteDirectionEncadrementDoctorantService.edit().subscribe(updatedResponsabiliteDirectionEncadrementDoctorant => {
          const indexOfUpdated = this.responsabiliteDirectionEncadrementDoctorants.findIndex(
           (ResponsabiliteDirectionEncadrementDoctorant) => ResponsabiliteDirectionEncadrementDoctorant.id === updatedResponsabiliteDirectionEncadrementDoctorant.id
            );
            indexOfUpdated > -1 ? this.responsabiliteDirectionEncadrementDoctorants[indexOfUpdated] = updatedResponsabiliteDirectionEncadrementDoctorant : false;
                });
                  this.editResponsabiliteDirectionEncadrementDoctorantDialog = false;
    this.selectedResponsabiliteDirectionEncadrementDoctorant = new ResponsabiliteDirectionEncadrementDoctorantVo();
            }

  hideEditDialog(){
    this.editResponsabiliteDirectionEncadrementDoctorantDialog = false;
  }
   submit(){
                this.selectedResponsabiliteDirectionEncadrementDoctorant.libelle = this.libelle.value;
                this.selectedResponsabiliteDirectionEncadrementDoctorant.code = this.code.value;
    this.responsabiliteDirectionEncadrementDoctorantService.edit().subscribe(result=>{
        this.editResponsabiliteDirectionEncadrementDoctorantDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get libelle() {
                 return this.editResponsabiliteDirectionEncadrementDoctorantForm.get('libelle');
            }
            get code() {
                 return this.editResponsabiliteDirectionEncadrementDoctorantForm.get('code');
            }
 
  get responsabiliteDirectionEncadrementDoctorants(): Array<ResponsabiliteDirectionEncadrementDoctorantVo> {
    return this.responsabiliteDirectionEncadrementDoctorantService.responsabiliteDirectionEncadrementDoctorants;
       }
  set responsabiliteDirectionEncadrementDoctorants(value: Array<ResponsabiliteDirectionEncadrementDoctorantVo>) {
        this.responsabiliteDirectionEncadrementDoctorantService.responsabiliteDirectionEncadrementDoctorants = value;
       } 

  get selectedResponsabiliteDirectionEncadrementDoctorant():ResponsabiliteDirectionEncadrementDoctorantVo {
           return this.responsabiliteDirectionEncadrementDoctorantService.selectedResponsabiliteDirectionEncadrementDoctorant;
       }
  set selectedResponsabiliteDirectionEncadrementDoctorant(value: ResponsabiliteDirectionEncadrementDoctorantVo) {
        this.responsabiliteDirectionEncadrementDoctorantService.selectedResponsabiliteDirectionEncadrementDoctorant = value;
       }
  
  get editResponsabiliteDirectionEncadrementDoctorantDialog():boolean {
           return this.responsabiliteDirectionEncadrementDoctorantService.editResponsabiliteDirectionEncadrementDoctorantDialog;
       }
  set editResponsabiliteDirectionEncadrementDoctorantDialog(value: boolean) {
        this.responsabiliteDirectionEncadrementDoctorantService.editResponsabiliteDirectionEncadrementDoctorantDialog= value;
       }


}