import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {BourseService} from '../../../controller/service/Bourse.service';
import {BourseVo} from '../../../controller/model/Bourse.model';
import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
import {TypeParticipationVo} from '../../../controller/model/TypeParticipation.model';

@Component({
  selector: 'app-bourse-edit',
  templateUrl: './bourse-edit.component.html',
  styleUrls: ['./bourse-edit.component.css']
})
export class BourseEditComponent implements OnInit {
// declarations
 editBourseForm = new FormGroup({
      dateObtention: new FormControl(new Date(), [Validators.required]),
      intitule: new FormControl("", [Validators.required]),
          montant:new FormControl(0,[Validators.required]),
          dureeEnMois:new FormControl(0,[Validators.required]),
  }); 
constructor(private bourseService: BourseService) { }
// methods 


  ngOnInit(): void {
    this.bourseService.editBourse$.subscribe(value=>{
    if(value){
     this.editBourseForm.setValue({
         dateObtention: moment(this.selectedBourse.dateObtention).toDate(),
          intitule: this.selectedBourse.intitule,
          montant: this.selectedBourse.montant,
          dureeEnMois: this.selectedBourse.dureeEnMois,
    });
    }
  });
  }



public edit(){ 
    this.bourseService.edit().subscribe(updatedBourse => {
          const indexOfUpdated = this.bourses.findIndex(
           (Bourse) => Bourse.id === updatedBourse.id
            );
            indexOfUpdated > -1 ? this.bourses[indexOfUpdated] = updatedBourse : false;
                });
                  this.editBourseDialog = false;
    this.selectedBourse = new BourseVo();
            }

  hideEditDialog(){
    this.editBourseDialog = false;
  }
   submit(){
                this.selectedBourse.dateObtention = moment(this.dateObtention.value).format("YYYY-MM-DD");
                this.selectedBourse.intitule = this.intitule.value;
                this.selectedBourse.montant = this.montant.value;
                this.selectedBourse.dureeEnMois = this.dureeEnMois.value;
    this.bourseService.edit().subscribe(result=>{
        this.editBourseDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get dateObtention() {
                 return this.editBourseForm.get('dateObtention');
            }
            get intitule() {
                 return this.editBourseForm.get('intitule');
            }
            get montant() {
                 return this.editBourseForm.get('montant');
            }
            get dureeEnMois() {
                 return this.editBourseForm.get('dureeEnMois');
            }
 
  get bourses(): Array<BourseVo> {
    return this.bourseService.bourses;
       }
  set bourses(value: Array<BourseVo>) {
        this.bourseService.bourses = value;
       } 

  get selectedBourse():BourseVo {
           return this.bourseService.selectedBourse;
       }
  set selectedBourse(value: BourseVo) {
        this.bourseService.selectedBourse = value;
       }
  
  get editBourseDialog():boolean {
           return this.bourseService.editBourseDialog;
       }
  set editBourseDialog(value: boolean) {
        this.bourseService.editBourseDialog= value;
       }


}