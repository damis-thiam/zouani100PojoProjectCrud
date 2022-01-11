import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {ZoneActiviteInteractionRechercheService} from '../../../controller/service/ZoneActiviteInteractionRecherche.service';
import {ZoneActiviteInteractionRechercheVo} from '../../../controller/model/ZoneActiviteInteractionRecherche.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-zoneActiviteInteractionRecherche-edit',
  templateUrl: './zoneActiviteInteractionRecherche-edit.component.html',
  styleUrls: ['./zoneActiviteInteractionRecherche-edit.component.css']
})
export class ZoneActiviteInteractionRechercheEditComponent implements OnInit {
// declarations
 editZoneActiviteInteractionRechercheForm = new FormGroup({
      pays: new FormControl("", [Validators.required]),
  }); 
constructor(private zoneActiviteInteractionRechercheService: ZoneActiviteInteractionRechercheService) { }
// methods 


  ngOnInit(): void {
    this.zoneActiviteInteractionRechercheService.editZoneActiviteInteractionRecherche$.subscribe(value=>{
    if(value){
     this.editZoneActiviteInteractionRechercheForm.setValue({
          pays: this.selectedZoneActiviteInteractionRecherche.pays,
    });
    }
  });
  }



public edit(){ 
    this.zoneActiviteInteractionRechercheService.edit().subscribe(updatedZoneActiviteInteractionRecherche => {
          const indexOfUpdated = this.zoneActiviteInteractionRecherches.findIndex(
           (ZoneActiviteInteractionRecherche) => ZoneActiviteInteractionRecherche.id === updatedZoneActiviteInteractionRecherche.id
            );
            indexOfUpdated > -1 ? this.zoneActiviteInteractionRecherches[indexOfUpdated] = updatedZoneActiviteInteractionRecherche : false;
                });
                  this.editZoneActiviteInteractionRechercheDialog = false;
    this.selectedZoneActiviteInteractionRecherche = new ZoneActiviteInteractionRechercheVo();
            }

  hideEditDialog(){
    this.editZoneActiviteInteractionRechercheDialog = false;
  }
   submit(){
                this.selectedZoneActiviteInteractionRecherche.pays = this.pays.value;
    this.zoneActiviteInteractionRechercheService.edit().subscribe(result=>{
        this.editZoneActiviteInteractionRechercheDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get pays() {
                 return this.editZoneActiviteInteractionRechercheForm.get('pays');
            }
 
  get zoneActiviteInteractionRecherches(): Array<ZoneActiviteInteractionRechercheVo> {
    return this.zoneActiviteInteractionRechercheService.zoneActiviteInteractionRecherches;
       }
  set zoneActiviteInteractionRecherches(value: Array<ZoneActiviteInteractionRechercheVo>) {
        this.zoneActiviteInteractionRechercheService.zoneActiviteInteractionRecherches = value;
       } 

  get selectedZoneActiviteInteractionRecherche():ZoneActiviteInteractionRechercheVo {
           return this.zoneActiviteInteractionRechercheService.selectedZoneActiviteInteractionRecherche;
       }
  set selectedZoneActiviteInteractionRecherche(value: ZoneActiviteInteractionRechercheVo) {
        this.zoneActiviteInteractionRechercheService.selectedZoneActiviteInteractionRecherche = value;
       }
  
  get editZoneActiviteInteractionRechercheDialog():boolean {
           return this.zoneActiviteInteractionRechercheService.editZoneActiviteInteractionRechercheDialog;
       }
  set editZoneActiviteInteractionRechercheDialog(value: boolean) {
        this.zoneActiviteInteractionRechercheService.editZoneActiviteInteractionRechercheDialog= value;
       }


}