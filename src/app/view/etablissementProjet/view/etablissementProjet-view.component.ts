import {Component, OnInit} from '@angular/core';
import {EtablissementProjetService} from '../../../controller/service/EtablissementProjet.service';
import {EtablissementProjetVo} from '../../../controller/model/EtablissementProjet.model';

@Component({
  selector: 'app-etablissementProjet-view',
  templateUrl: './etablissementProjet-view.component.html',
  styleUrls: ['./etablissementProjet-view.component.css']
})
export class EtablissementProjetViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private etablissementProjetService: EtablissementProjetService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewEtablissementProjetDialog = false;
    } 



   // getters and setters
    get viewEtablissementProjetDialog():boolean {
        return this.etablissementProjetService.viewEtablissementProjetDialog;
        }
    set viewEtablissementProjetDialog(value: boolean) {
        this.etablissementProjetService.viewEtablissementProjetDialog= value;
        }
    
    get selectedEtablissementProjet():EtablissementProjetVo {
           return this.etablissementProjetService.selectedEtablissementProjet;
       }
    set selectedEtablissementProjet(value: EtablissementProjetVo) {
        this.etablissementProjetService.selectedEtablissementProjet = value;
       }





}