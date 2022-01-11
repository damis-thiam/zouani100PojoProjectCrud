import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {DoctorantService} from '../../../controller/service/Doctorant.service';
import {DoctorantVo} from '../../../controller/model/Doctorant.model';
import {SexeVo} from '../../../controller/model/Sexe.model';
import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-doctorant-edit',
  templateUrl: './doctorant-edit.component.html',
  styleUrls: ['./doctorant-edit.component.css']
})
export class DoctorantEditComponent implements OnInit {
// declarations
 editDoctorantForm = new FormGroup({
      nom: new FormControl("", [Validators.required]),
      prenom: new FormControl("", [Validators.required]),
          anneeNaissance:new FormControl(0,[Validators.required]),
  }); 
constructor(private doctorantService: DoctorantService) { }
// methods 


  ngOnInit(): void {
    this.doctorantService.editDoctorant$.subscribe(value=>{
    if(value){
     this.editDoctorantForm.setValue({
          nom: this.selectedDoctorant.nom,
          prenom: this.selectedDoctorant.prenom,
          anneeNaissance: this.selectedDoctorant.anneeNaissance,
    });
    }
  });
  }



public edit(){ 
    this.doctorantService.edit().subscribe(updatedDoctorant => {
          const indexOfUpdated = this.doctorants.findIndex(
           (Doctorant) => Doctorant.id === updatedDoctorant.id
            );
            indexOfUpdated > -1 ? this.doctorants[indexOfUpdated] = updatedDoctorant : false;
                });
                  this.editDoctorantDialog = false;
    this.selectedDoctorant = new DoctorantVo();
            }

  hideEditDialog(){
    this.editDoctorantDialog = false;
  }
   submit(){
                this.selectedDoctorant.nom = this.nom.value;
                this.selectedDoctorant.prenom = this.prenom.value;
                this.selectedDoctorant.anneeNaissance = this.anneeNaissance.value;
    this.doctorantService.edit().subscribe(result=>{
        this.editDoctorantDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get nom() {
                 return this.editDoctorantForm.get('nom');
            }
            get prenom() {
                 return this.editDoctorantForm.get('prenom');
            }
            get anneeNaissance() {
                 return this.editDoctorantForm.get('anneeNaissance');
            }
 
  get doctorants(): Array<DoctorantVo> {
    return this.doctorantService.doctorants;
       }
  set doctorants(value: Array<DoctorantVo>) {
        this.doctorantService.doctorants = value;
       } 

  get selectedDoctorant():DoctorantVo {
           return this.doctorantService.selectedDoctorant;
       }
  set selectedDoctorant(value: DoctorantVo) {
        this.doctorantService.selectedDoctorant = value;
       }
  
  get editDoctorantDialog():boolean {
           return this.doctorantService.editDoctorantDialog;
       }
  set editDoctorantDialog(value: boolean) {
        this.doctorantService.editDoctorantDialog= value;
       }


}