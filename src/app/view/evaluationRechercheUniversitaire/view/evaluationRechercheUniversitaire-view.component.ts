import {Component, OnInit} from '@angular/core';
import {EvaluationRechercheUniversitaireService} from '../../../controller/service/EvaluationRechercheUniversitaire.service';
import {EvaluationRechercheUniversitaireVo} from '../../../controller/model/EvaluationRechercheUniversitaire.model';
import {RoleEvaluationRechercheUniversitaireVo} from '../../../controller/model/RoleEvaluationRechercheUniversitaire.model';
import {TypeExpertVo} from '../../../controller/model/TypeExpert.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-evaluationRechercheUniversitaire-view',
  templateUrl: './evaluationRechercheUniversitaire-view.component.html',
  styleUrls: ['./evaluationRechercheUniversitaire-view.component.css']
})
export class EvaluationRechercheUniversitaireViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private evaluationRechercheUniversitaireService: EvaluationRechercheUniversitaireService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewEvaluationRechercheUniversitaireDialog = false;
    } 



   // getters and setters
    get viewEvaluationRechercheUniversitaireDialog():boolean {
        return this.evaluationRechercheUniversitaireService.viewEvaluationRechercheUniversitaireDialog;
        }
    set viewEvaluationRechercheUniversitaireDialog(value: boolean) {
        this.evaluationRechercheUniversitaireService.viewEvaluationRechercheUniversitaireDialog= value;
        }
    
    get selectedEvaluationRechercheUniversitaire():EvaluationRechercheUniversitaireVo {
           return this.evaluationRechercheUniversitaireService.selectedEvaluationRechercheUniversitaire;
       }
    set selectedEvaluationRechercheUniversitaire(value: EvaluationRechercheUniversitaireVo) {
        this.evaluationRechercheUniversitaireService.selectedEvaluationRechercheUniversitaire = value;
       }





}