import {Component, OnInit} from '@angular/core';
import {ZoneActiviteInteractionRechercheService} from '../../../controller/service/ZoneActiviteInteractionRecherche.service';
import {ZoneActiviteInteractionRechercheVo} from '../../../controller/model/ZoneActiviteInteractionRecherche.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-zoneActiviteInteractionRecherche-view',
  templateUrl: './zoneActiviteInteractionRecherche-view.component.html',
  styleUrls: ['./zoneActiviteInteractionRecherche-view.component.css']
})
export class ZoneActiviteInteractionRechercheViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private zoneActiviteInteractionRechercheService: ZoneActiviteInteractionRechercheService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewZoneActiviteInteractionRechercheDialog = false;
    } 



   // getters and setters
    get viewZoneActiviteInteractionRechercheDialog():boolean {
        return this.zoneActiviteInteractionRechercheService.viewZoneActiviteInteractionRechercheDialog;
        }
    set viewZoneActiviteInteractionRechercheDialog(value: boolean) {
        this.zoneActiviteInteractionRechercheService.viewZoneActiviteInteractionRechercheDialog= value;
        }
    
    get selectedZoneActiviteInteractionRecherche():ZoneActiviteInteractionRechercheVo {
           return this.zoneActiviteInteractionRechercheService.selectedZoneActiviteInteractionRecherche;
       }
    set selectedZoneActiviteInteractionRecherche(value: ZoneActiviteInteractionRechercheVo) {
        this.zoneActiviteInteractionRechercheService.selectedZoneActiviteInteractionRecherche = value;
       }





}