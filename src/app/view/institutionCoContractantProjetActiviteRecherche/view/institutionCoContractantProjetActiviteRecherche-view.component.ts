import {Component, OnInit} from '@angular/core';
import {InstitutionCoContractantProjetActiviteRechercheService} from '../../../controller/service/InstitutionCoContractantProjetActiviteRecherche.service';
import {InstitutionCoContractantProjetActiviteRechercheVo} from '../../../controller/model/InstitutionCoContractantProjetActiviteRecherche.model';
import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
import {InstitutionCoContractantVo} from '../../../controller/model/InstitutionCoContractant.model';

@Component({
  selector: 'app-institutionCoContractantProjetActiviteRecherche-view',
  templateUrl: './institutionCoContractantProjetActiviteRecherche-view.component.html',
  styleUrls: ['./institutionCoContractantProjetActiviteRecherche-view.component.css']
})
export class InstitutionCoContractantProjetActiviteRechercheViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private institutionCoContractantProjetActiviteRechercheService: InstitutionCoContractantProjetActiviteRechercheService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewInstitutionCoContractantProjetActiviteRechercheDialog = false;
    } 



   // getters and setters
    get viewInstitutionCoContractantProjetActiviteRechercheDialog():boolean {
        return this.institutionCoContractantProjetActiviteRechercheService.viewInstitutionCoContractantProjetActiviteRechercheDialog;
        }
    set viewInstitutionCoContractantProjetActiviteRechercheDialog(value: boolean) {
        this.institutionCoContractantProjetActiviteRechercheService.viewInstitutionCoContractantProjetActiviteRechercheDialog= value;
        }
    
    get selectedInstitutionCoContractantProjetActiviteRecherche():InstitutionCoContractantProjetActiviteRechercheVo {
           return this.institutionCoContractantProjetActiviteRechercheService.selectedInstitutionCoContractantProjetActiviteRecherche;
       }
    set selectedInstitutionCoContractantProjetActiviteRecherche(value: InstitutionCoContractantProjetActiviteRechercheVo) {
        this.institutionCoContractantProjetActiviteRechercheService.selectedInstitutionCoContractantProjetActiviteRecherche = value;
       }





}