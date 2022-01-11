import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {EtudiantService} from '../../../controller/service/Etudiant.service';
import {EtudiantVo} from '../../../controller/model/Etudiant.model';
import {SexeVo} from '../../../controller/model/Sexe.model';
import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-etudiant-edit',
  templateUrl: './etudiant-edit.component.html',
  styleUrls: ['./etudiant-edit.component.css']
})
export class EtudiantEditComponent implements OnInit {
// declarations
 editEtudiantForm = new FormGroup({
      nom: new FormControl("", [Validators.required]),
      prenom: new FormControl("", [Validators.required]),
          anneeNaissance:new FormControl(0,[Validators.required]),
  }); 
constructor(private etudiantService: EtudiantService) { }
// methods 


  ngOnInit(): void {
    this.etudiantService.editEtudiant$.subscribe(value=>{
    if(value){
     this.editEtudiantForm.setValue({
          nom: this.selectedEtudiant.nom,
          prenom: this.selectedEtudiant.prenom,
          anneeNaissance: this.selectedEtudiant.anneeNaissance,
    });
    }
  });
  }



public edit(){ 
    this.etudiantService.edit().subscribe(updatedEtudiant => {
          const indexOfUpdated = this.etudiants.findIndex(
           (Etudiant) => Etudiant.id === updatedEtudiant.id
            );
            indexOfUpdated > -1 ? this.etudiants[indexOfUpdated] = updatedEtudiant : false;
                });
                  this.editEtudiantDialog = false;
    this.selectedEtudiant = new EtudiantVo();
            }

  hideEditDialog(){
    this.editEtudiantDialog = false;
  }
   submit(){
                this.selectedEtudiant.nom = this.nom.value;
                this.selectedEtudiant.prenom = this.prenom.value;
                this.selectedEtudiant.anneeNaissance = this.anneeNaissance.value;
    this.etudiantService.edit().subscribe(result=>{
        this.editEtudiantDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get nom() {
                 return this.editEtudiantForm.get('nom');
            }
            get prenom() {
                 return this.editEtudiantForm.get('prenom');
            }
            get anneeNaissance() {
                 return this.editEtudiantForm.get('anneeNaissance');
            }
 
  get etudiants(): Array<EtudiantVo> {
    return this.etudiantService.etudiants;
       }
  set etudiants(value: Array<EtudiantVo>) {
        this.etudiantService.etudiants = value;
       } 

  get selectedEtudiant():EtudiantVo {
           return this.etudiantService.selectedEtudiant;
       }
  set selectedEtudiant(value: EtudiantVo) {
        this.etudiantService.selectedEtudiant = value;
       }
  
  get editEtudiantDialog():boolean {
           return this.etudiantService.editEtudiantDialog;
       }
  set editEtudiantDialog(value: boolean) {
        this.etudiantService.editEtudiantDialog= value;
       }


}