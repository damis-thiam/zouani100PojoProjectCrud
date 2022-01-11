import {Component, OnInit} from '@angular/core';
import {EvaluationRechercheUniversitaireService} from '../../../controller/service/EvaluationRechercheUniversitaire.service';
import {EvaluationRechercheUniversitaireVo} from '../../../controller/model/EvaluationRechercheUniversitaire.model';
      import {RoleEvaluationRechercheUniversitaireVo} from '../../../controller/model/RoleEvaluationRechercheUniversitaire.model';
      import {TypeExpertVo} from '../../../controller/model/TypeExpert.model';
      import {EtablissementVo} from '../../../controller/model/Etablissement.model';
      import {PaysVo} from '../../../controller/model/Pays.model';
      import {ChercheurVo} from '../../../controller/model/Chercheur.model';
import {CommunauteSavoirEvaluationRechercheUniversitaireVo} from '../../../controller/model/CommunauteSavoirEvaluationRechercheUniversitaire.model';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';
import {CommunauteSavoirService} from '../../../controller/service/CommunauteSavoir.service';
import {DisciplineScientifiqueEvaluationRechercheUniversitaireVo} from '../../../controller/model/DisciplineScientifiqueEvaluationRechercheUniversitaire.model';
import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';
import {DisciplineScientifiqueService} from '../../../controller/service/DisciplineScientifique.service';

@Component({
  selector: 'app-evaluationRechercheUniversitaire-create',
  templateUrl: './evaluationRechercheUniversitaire-create.component.html',
  styleUrls: ['./evaluationRechercheUniversitaire-create.component.css']
})
export class EvaluationRechercheUniversitaireCreateComponent implements OnInit {

constructor(private evaluationRechercheUniversitaireService: EvaluationRechercheUniversitaireService
            ,private communauteSavoirService: CommunauteSavoirService
            ,private disciplineScientifiqueService: DisciplineScientifiqueService
            ) { }
// methods 
ngOnInit(): void {
                this.selectedCommunauteSavoirEvaluationRechercheUniversitaire.communauteSavoirVo = new CommunauteSavoirVo();
                this.communauteSavoirService.findAll().subscribe((data) => this.mycommunauteSavoirs = data);
                this.selectedDisciplineScientifiqueEvaluationRechercheUniversitaire.disciplineScientifiqueVo = new DisciplineScientifiqueVo();
                this.disciplineScientifiqueService.findAll().subscribe((data) => this.mydisciplineScientifiques = data);
    }
        selectedCommunauteSavoirEvaluationRechercheUniversitaire: CommunauteSavoirEvaluationRechercheUniversitaireVo = new CommunauteSavoirEvaluationRechercheUniversitaireVo();
        communauteSavoirEvaluationRechercheUniversitaireListe: Array<CommunauteSavoirEvaluationRechercheUniversitaireVo> = [];
        mycommunauteSavoirs: Array<CommunauteSavoirVo> = [];

        addCommunauteSavoirEvaluationRechercheUniversitaire() {
            this.selectedCommunauteSavoirEvaluationRechercheUniversitaire.evaluationRechercheUniversitaireVo = this.selectedEvaluationRechercheUniversitaire
          this.communauteSavoirEvaluationRechercheUniversitaireListe.push(this.selectedCommunauteSavoirEvaluationRechercheUniversitaire);
          this.selectedCommunauteSavoirEvaluationRechercheUniversitaire = new CommunauteSavoirEvaluationRechercheUniversitaireVo();
        }

        deleteCommunauteSavoirEvaluationRechercheUniversitaire(p: CommunauteSavoirEvaluationRechercheUniversitaireVo) {
        this.communauteSavoirEvaluationRechercheUniversitaireListe.forEach((element, index) => {
            if (element === p) { this.communauteSavoirEvaluationRechercheUniversitaireListe.splice(index, 1); }
        });
    }
        selectedDisciplineScientifiqueEvaluationRechercheUniversitaire: DisciplineScientifiqueEvaluationRechercheUniversitaireVo = new DisciplineScientifiqueEvaluationRechercheUniversitaireVo();
        disciplineScientifiqueEvaluationRechercheUniversitaireListe: Array<DisciplineScientifiqueEvaluationRechercheUniversitaireVo> = [];
        mydisciplineScientifiques: Array<DisciplineScientifiqueVo> = [];

        addDisciplineScientifiqueEvaluationRechercheUniversitaire() {
            this.selectedDisciplineScientifiqueEvaluationRechercheUniversitaire.evaluationRechercheUniversitaireVo = this.selectedEvaluationRechercheUniversitaire
          this.disciplineScientifiqueEvaluationRechercheUniversitaireListe.push(this.selectedDisciplineScientifiqueEvaluationRechercheUniversitaire);
          this.selectedDisciplineScientifiqueEvaluationRechercheUniversitaire = new DisciplineScientifiqueEvaluationRechercheUniversitaireVo();
        }

        deleteDisciplineScientifiqueEvaluationRechercheUniversitaire(p: DisciplineScientifiqueEvaluationRechercheUniversitaireVo) {
        this.disciplineScientifiqueEvaluationRechercheUniversitaireListe.forEach((element, index) => {
            if (element === p) { this.disciplineScientifiqueEvaluationRechercheUniversitaireListe.splice(index, 1); }
        });
    }

public save(){
            this.selectedEvaluationRechercheUniversitaire.communauteSavoirEvaluationRechercheUniversitairesVo = this.communauteSavoirEvaluationRechercheUniversitaireListe;
            this.selectedEvaluationRechercheUniversitaire.disciplineScientifiqueEvaluationRechercheUniversitairesVo = this.disciplineScientifiqueEvaluationRechercheUniversitaireListe;
    this.evaluationRechercheUniversitaireService.save().subscribe(evaluationRechercheUniversitaire=>{
          
       this.evaluationRechercheUniversitaires.push({...evaluationRechercheUniversitaire});
       this.createEvaluationRechercheUniversitaireDialog = false;
       this.selectedEvaluationRechercheUniversitaire = new EvaluationRechercheUniversitaireVo();
    },error=>{
        console.log(error);
    })
            this.selectedCommunauteSavoirEvaluationRechercheUniversitaire = new CommunauteSavoirEvaluationRechercheUniversitaireVo();
            this.communauteSavoirEvaluationRechercheUniversitaireListe = [];
            this.selectedDisciplineScientifiqueEvaluationRechercheUniversitaire = new DisciplineScientifiqueEvaluationRechercheUniversitaireVo();
            this.disciplineScientifiqueEvaluationRechercheUniversitaireListe = [];
}
// methods 

hideCreateDialog(){
    this.createEvaluationRechercheUniversitaireDialog  = false;
}

// getters and setters 

get evaluationRechercheUniversitaires(): Array<EvaluationRechercheUniversitaireVo> {
    return this.evaluationRechercheUniversitaireService.evaluationRechercheUniversitaires;
       }
set evaluationRechercheUniversitaires(value: Array<EvaluationRechercheUniversitaireVo>) {
        this.evaluationRechercheUniversitaireService.evaluationRechercheUniversitaires = value;
       } 

 get selectedEvaluationRechercheUniversitaire():EvaluationRechercheUniversitaireVo {
           return this.evaluationRechercheUniversitaireService.selectedEvaluationRechercheUniversitaire;
       }
    set selectedEvaluationRechercheUniversitaire(value: EvaluationRechercheUniversitaireVo) {
        this.evaluationRechercheUniversitaireService.selectedEvaluationRechercheUniversitaire = value;
       }
  
   get createEvaluationRechercheUniversitaireDialog():boolean {
           return this.evaluationRechercheUniversitaireService.createEvaluationRechercheUniversitaireDialog;
       }
    set createEvaluationRechercheUniversitaireDialog(value: boolean) {
        this.evaluationRechercheUniversitaireService.createEvaluationRechercheUniversitaireDialog= value;
       }


}