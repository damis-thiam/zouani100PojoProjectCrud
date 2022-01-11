import {Component, OnInit} from '@angular/core';
import {CommunauteSavoirProjetActiviteRechercheService} from '../../../controller/service/CommunauteSavoirProjetActiviteRecherche.service';
import {CommunauteSavoirProjetActiviteRechercheVo} from '../../../controller/model/CommunauteSavoirProjetActiviteRecherche.model';
import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';

@Component({
  selector: 'app-communauteSavoirProjetActiviteRecherche-view',
  templateUrl: './communauteSavoirProjetActiviteRecherche-view.component.html',
  styleUrls: ['./communauteSavoirProjetActiviteRecherche-view.component.css']
})
export class CommunauteSavoirProjetActiviteRechercheViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private communauteSavoirProjetActiviteRechercheService: CommunauteSavoirProjetActiviteRechercheService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewCommunauteSavoirProjetActiviteRechercheDialog = false;
    } 



   // getters and setters
    get viewCommunauteSavoirProjetActiviteRechercheDialog():boolean {
        return this.communauteSavoirProjetActiviteRechercheService.viewCommunauteSavoirProjetActiviteRechercheDialog;
        }
    set viewCommunauteSavoirProjetActiviteRechercheDialog(value: boolean) {
        this.communauteSavoirProjetActiviteRechercheService.viewCommunauteSavoirProjetActiviteRechercheDialog= value;
        }
    
    get selectedCommunauteSavoirProjetActiviteRecherche():CommunauteSavoirProjetActiviteRechercheVo {
           return this.communauteSavoirProjetActiviteRechercheService.selectedCommunauteSavoirProjetActiviteRecherche;
       }
    set selectedCommunauteSavoirProjetActiviteRecherche(value: CommunauteSavoirProjetActiviteRechercheVo) {
        this.communauteSavoirProjetActiviteRechercheService.selectedCommunauteSavoirProjetActiviteRecherche = value;
       }





}