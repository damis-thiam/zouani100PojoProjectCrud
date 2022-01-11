import {Component, OnInit} from '@angular/core';
import {FournisseurAppelProjetRechercheService} from '../../../controller/service/FournisseurAppelProjetRecherche.service';
import {FournisseurAppelProjetRechercheVo} from '../../../controller/model/FournisseurAppelProjetRecherche.model';
import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-fournisseurAppelProjetRecherche-view',
  templateUrl: './fournisseurAppelProjetRecherche-view.component.html',
  styleUrls: ['./fournisseurAppelProjetRecherche-view.component.css']
})
export class FournisseurAppelProjetRechercheViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private fournisseurAppelProjetRechercheService: FournisseurAppelProjetRechercheService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewFournisseurAppelProjetRechercheDialog = false;
    } 



   // getters and setters
    get viewFournisseurAppelProjetRechercheDialog():boolean {
        return this.fournisseurAppelProjetRechercheService.viewFournisseurAppelProjetRechercheDialog;
        }
    set viewFournisseurAppelProjetRechercheDialog(value: boolean) {
        this.fournisseurAppelProjetRechercheService.viewFournisseurAppelProjetRechercheDialog= value;
        }
    
    get selectedFournisseurAppelProjetRecherche():FournisseurAppelProjetRechercheVo {
           return this.fournisseurAppelProjetRechercheService.selectedFournisseurAppelProjetRecherche;
       }
    set selectedFournisseurAppelProjetRecherche(value: FournisseurAppelProjetRechercheVo) {
        this.fournisseurAppelProjetRechercheService.selectedFournisseurAppelProjetRecherche = value;
       }





}