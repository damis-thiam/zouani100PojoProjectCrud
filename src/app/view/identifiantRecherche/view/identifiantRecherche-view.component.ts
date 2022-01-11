import {Component, OnInit} from '@angular/core';
import {IdentifiantRechercheService} from '../../../controller/service/IdentifiantRecherche.service';
import {IdentifiantRechercheVo} from '../../../controller/model/IdentifiantRecherche.model';

@Component({
  selector: 'app-identifiantRecherche-view',
  templateUrl: './identifiantRecherche-view.component.html',
  styleUrls: ['./identifiantRecherche-view.component.css']
})
export class IdentifiantRechercheViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private identifiantRechercheService: IdentifiantRechercheService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewIdentifiantRechercheDialog = false;
    } 



   // getters and setters
    get viewIdentifiantRechercheDialog():boolean {
        return this.identifiantRechercheService.viewIdentifiantRechercheDialog;
        }
    set viewIdentifiantRechercheDialog(value: boolean) {
        this.identifiantRechercheService.viewIdentifiantRechercheDialog= value;
        }
    
    get selectedIdentifiantRecherche():IdentifiantRechercheVo {
           return this.identifiantRechercheService.selectedIdentifiantRecherche;
       }
    set selectedIdentifiantRecherche(value: IdentifiantRechercheVo) {
        this.identifiantRechercheService.selectedIdentifiantRecherche = value;
       }





}