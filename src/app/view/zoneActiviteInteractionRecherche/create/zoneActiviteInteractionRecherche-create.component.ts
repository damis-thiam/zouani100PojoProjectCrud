import {Component, OnInit} from '@angular/core';
import {ZoneActiviteInteractionRechercheService} from '../../../controller/service/ZoneActiviteInteractionRecherche.service';
import {ZoneActiviteInteractionRechercheVo} from '../../../controller/model/ZoneActiviteInteractionRecherche.model';
      import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-zoneActiviteInteractionRecherche-create',
  templateUrl: './zoneActiviteInteractionRecherche-create.component.html',
  styleUrls: ['./zoneActiviteInteractionRecherche-create.component.css']
})
export class ZoneActiviteInteractionRechercheCreateComponent implements OnInit {

constructor(private zoneActiviteInteractionRechercheService: ZoneActiviteInteractionRechercheService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.zoneActiviteInteractionRechercheService.save().subscribe(zoneActiviteInteractionRecherche=>{
          
       this.zoneActiviteInteractionRecherches.push({...zoneActiviteInteractionRecherche});
       this.createZoneActiviteInteractionRechercheDialog = false;
       this.selectedZoneActiviteInteractionRecherche = new ZoneActiviteInteractionRechercheVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createZoneActiviteInteractionRechercheDialog  = false;
}

// getters and setters 

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
  
   get createZoneActiviteInteractionRechercheDialog():boolean {
           return this.zoneActiviteInteractionRechercheService.createZoneActiviteInteractionRechercheDialog;
       }
    set createZoneActiviteInteractionRechercheDialog(value: boolean) {
        this.zoneActiviteInteractionRechercheService.createZoneActiviteInteractionRechercheDialog= value;
       }


}