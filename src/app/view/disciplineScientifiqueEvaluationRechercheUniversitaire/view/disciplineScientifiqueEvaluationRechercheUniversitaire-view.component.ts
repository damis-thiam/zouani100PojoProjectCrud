import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueEvaluationRechercheUniversitaireService} from '../../../controller/service/DisciplineScientifiqueEvaluationRechercheUniversitaire.service';
import {DisciplineScientifiqueEvaluationRechercheUniversitaireVo} from '../../../controller/model/DisciplineScientifiqueEvaluationRechercheUniversitaire.model';
import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';
import {EvaluationRechercheUniversitaireVo} from '../../../controller/model/EvaluationRechercheUniversitaire.model';

@Component({
  selector: 'app-disciplineScientifiqueEvaluationRechercheUniversitaire-view',
  templateUrl: './disciplineScientifiqueEvaluationRechercheUniversitaire-view.component.html',
  styleUrls: ['./disciplineScientifiqueEvaluationRechercheUniversitaire-view.component.css']
})
export class DisciplineScientifiqueEvaluationRechercheUniversitaireViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private disciplineScientifiqueEvaluationRechercheUniversitaireService: DisciplineScientifiqueEvaluationRechercheUniversitaireService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewDisciplineScientifiqueEvaluationRechercheUniversitaireDialog = false;
    } 



   // getters and setters
    get viewDisciplineScientifiqueEvaluationRechercheUniversitaireDialog():boolean {
        return this.disciplineScientifiqueEvaluationRechercheUniversitaireService.viewDisciplineScientifiqueEvaluationRechercheUniversitaireDialog;
        }
    set viewDisciplineScientifiqueEvaluationRechercheUniversitaireDialog(value: boolean) {
        this.disciplineScientifiqueEvaluationRechercheUniversitaireService.viewDisciplineScientifiqueEvaluationRechercheUniversitaireDialog= value;
        }
    
    get selectedDisciplineScientifiqueEvaluationRechercheUniversitaire():DisciplineScientifiqueEvaluationRechercheUniversitaireVo {
           return this.disciplineScientifiqueEvaluationRechercheUniversitaireService.selectedDisciplineScientifiqueEvaluationRechercheUniversitaire;
       }
    set selectedDisciplineScientifiqueEvaluationRechercheUniversitaire(value: DisciplineScientifiqueEvaluationRechercheUniversitaireVo) {
        this.disciplineScientifiqueEvaluationRechercheUniversitaireService.selectedDisciplineScientifiqueEvaluationRechercheUniversitaire = value;
       }





}