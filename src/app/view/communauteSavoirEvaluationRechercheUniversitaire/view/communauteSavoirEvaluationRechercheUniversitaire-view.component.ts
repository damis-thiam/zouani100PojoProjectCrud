import {Component, OnInit} from '@angular/core';
import {CommunauteSavoirEvaluationRechercheUniversitaireService} from '../../../controller/service/CommunauteSavoirEvaluationRechercheUniversitaire.service';
import {CommunauteSavoirEvaluationRechercheUniversitaireVo} from '../../../controller/model/CommunauteSavoirEvaluationRechercheUniversitaire.model';
import {EvaluationRechercheUniversitaireVo} from '../../../controller/model/EvaluationRechercheUniversitaire.model';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';

@Component({
  selector: 'app-communauteSavoirEvaluationRechercheUniversitaire-view',
  templateUrl: './communauteSavoirEvaluationRechercheUniversitaire-view.component.html',
  styleUrls: ['./communauteSavoirEvaluationRechercheUniversitaire-view.component.css']
})
export class CommunauteSavoirEvaluationRechercheUniversitaireViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private communauteSavoirEvaluationRechercheUniversitaireService: CommunauteSavoirEvaluationRechercheUniversitaireService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewCommunauteSavoirEvaluationRechercheUniversitaireDialog = false;
    } 



   // getters and setters
    get viewCommunauteSavoirEvaluationRechercheUniversitaireDialog():boolean {
        return this.communauteSavoirEvaluationRechercheUniversitaireService.viewCommunauteSavoirEvaluationRechercheUniversitaireDialog;
        }
    set viewCommunauteSavoirEvaluationRechercheUniversitaireDialog(value: boolean) {
        this.communauteSavoirEvaluationRechercheUniversitaireService.viewCommunauteSavoirEvaluationRechercheUniversitaireDialog= value;
        }
    
    get selectedCommunauteSavoirEvaluationRechercheUniversitaire():CommunauteSavoirEvaluationRechercheUniversitaireVo {
           return this.communauteSavoirEvaluationRechercheUniversitaireService.selectedCommunauteSavoirEvaluationRechercheUniversitaire;
       }
    set selectedCommunauteSavoirEvaluationRechercheUniversitaire(value: CommunauteSavoirEvaluationRechercheUniversitaireVo) {
        this.communauteSavoirEvaluationRechercheUniversitaireService.selectedCommunauteSavoirEvaluationRechercheUniversitaire = value;
       }





}