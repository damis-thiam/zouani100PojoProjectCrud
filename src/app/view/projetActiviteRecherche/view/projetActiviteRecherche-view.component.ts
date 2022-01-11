import {Component, OnInit} from '@angular/core';
import {ProjetActiviteRechercheService} from '../../../controller/service/ProjetActiviteRecherche.service';
import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
import {RoleProjetVo} from '../../../controller/model/RoleProjet.model';
import {StatusProjetVo} from '../../../controller/model/StatusProjet.model';
import {FournisseurAppelProjetRechercheVo} from '../../../controller/model/FournisseurAppelProjetRecherche.model';
import {EtablissementProjetVo} from '../../../controller/model/EtablissementProjet.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-projetActiviteRecherche-view',
  templateUrl: './projetActiviteRecherche-view.component.html',
  styleUrls: ['./projetActiviteRecherche-view.component.css']
})
export class ProjetActiviteRechercheViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private projetActiviteRechercheService: ProjetActiviteRechercheService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewProjetActiviteRechercheDialog = false;
    } 



   // getters and setters
    get viewProjetActiviteRechercheDialog():boolean {
        return this.projetActiviteRechercheService.viewProjetActiviteRechercheDialog;
        }
    set viewProjetActiviteRechercheDialog(value: boolean) {
        this.projetActiviteRechercheService.viewProjetActiviteRechercheDialog= value;
        }
    
    get selectedProjetActiviteRecherche():ProjetActiviteRechercheVo {
           return this.projetActiviteRechercheService.selectedProjetActiviteRecherche;
       }
    set selectedProjetActiviteRecherche(value: ProjetActiviteRechercheVo) {
        this.projetActiviteRechercheService.selectedProjetActiviteRecherche = value;
       }





}