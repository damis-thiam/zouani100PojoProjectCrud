import {Component, OnInit} from '@angular/core';
import {PaysProjetRechercheService} from '../../../controller/service/PaysProjetRecherche.service';
import {PaysProjetRechercheVo} from '../../../controller/model/PaysProjetRecherche.model';
import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-paysProjetRecherche-view',
  templateUrl: './paysProjetRecherche-view.component.html',
  styleUrls: ['./paysProjetRecherche-view.component.css']
})
export class PaysProjetRechercheViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private paysProjetRechercheService: PaysProjetRechercheService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewPaysProjetRechercheDialog = false;
    } 



   // getters and setters
    get viewPaysProjetRechercheDialog():boolean {
        return this.paysProjetRechercheService.viewPaysProjetRechercheDialog;
        }
    set viewPaysProjetRechercheDialog(value: boolean) {
        this.paysProjetRechercheService.viewPaysProjetRechercheDialog= value;
        }
    
    get selectedPaysProjetRecherche():PaysProjetRechercheVo {
           return this.paysProjetRechercheService.selectedPaysProjetRecherche;
       }
    set selectedPaysProjetRecherche(value: PaysProjetRechercheVo) {
        this.paysProjetRechercheService.selectedPaysProjetRecherche = value;
       }





}