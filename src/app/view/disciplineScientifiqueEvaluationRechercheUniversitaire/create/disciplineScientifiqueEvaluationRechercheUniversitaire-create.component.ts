import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueEvaluationRechercheUniversitaireService} from '../../../controller/service/DisciplineScientifiqueEvaluationRechercheUniversitaire.service';
import {DisciplineScientifiqueEvaluationRechercheUniversitaireVo} from '../../../controller/model/DisciplineScientifiqueEvaluationRechercheUniversitaire.model';
      import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';
      import {EvaluationRechercheUniversitaireVo} from '../../../controller/model/EvaluationRechercheUniversitaire.model';

@Component({
  selector: 'app-disciplineScientifiqueEvaluationRechercheUniversitaire-create',
  templateUrl: './disciplineScientifiqueEvaluationRechercheUniversitaire-create.component.html',
  styleUrls: ['./disciplineScientifiqueEvaluationRechercheUniversitaire-create.component.css']
})
export class DisciplineScientifiqueEvaluationRechercheUniversitaireCreateComponent implements OnInit {

constructor(private disciplineScientifiqueEvaluationRechercheUniversitaireService: DisciplineScientifiqueEvaluationRechercheUniversitaireService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.disciplineScientifiqueEvaluationRechercheUniversitaireService.save().subscribe(disciplineScientifiqueEvaluationRechercheUniversitaire=>{
          
       this.disciplineScientifiqueEvaluationRechercheUniversitaires.push({...disciplineScientifiqueEvaluationRechercheUniversitaire});
       this.createDisciplineScientifiqueEvaluationRechercheUniversitaireDialog = false;
       this.selectedDisciplineScientifiqueEvaluationRechercheUniversitaire = new DisciplineScientifiqueEvaluationRechercheUniversitaireVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createDisciplineScientifiqueEvaluationRechercheUniversitaireDialog  = false;
}

// getters and setters 

get disciplineScientifiqueEvaluationRechercheUniversitaires(): Array<DisciplineScientifiqueEvaluationRechercheUniversitaireVo> {
    return this.disciplineScientifiqueEvaluationRechercheUniversitaireService.disciplineScientifiqueEvaluationRechercheUniversitaires;
       }
set disciplineScientifiqueEvaluationRechercheUniversitaires(value: Array<DisciplineScientifiqueEvaluationRechercheUniversitaireVo>) {
        this.disciplineScientifiqueEvaluationRechercheUniversitaireService.disciplineScientifiqueEvaluationRechercheUniversitaires = value;
       } 

 get selectedDisciplineScientifiqueEvaluationRechercheUniversitaire():DisciplineScientifiqueEvaluationRechercheUniversitaireVo {
           return this.disciplineScientifiqueEvaluationRechercheUniversitaireService.selectedDisciplineScientifiqueEvaluationRechercheUniversitaire;
       }
    set selectedDisciplineScientifiqueEvaluationRechercheUniversitaire(value: DisciplineScientifiqueEvaluationRechercheUniversitaireVo) {
        this.disciplineScientifiqueEvaluationRechercheUniversitaireService.selectedDisciplineScientifiqueEvaluationRechercheUniversitaire = value;
       }
  
   get createDisciplineScientifiqueEvaluationRechercheUniversitaireDialog():boolean {
           return this.disciplineScientifiqueEvaluationRechercheUniversitaireService.createDisciplineScientifiqueEvaluationRechercheUniversitaireDialog;
       }
    set createDisciplineScientifiqueEvaluationRechercheUniversitaireDialog(value: boolean) {
        this.disciplineScientifiqueEvaluationRechercheUniversitaireService.createDisciplineScientifiqueEvaluationRechercheUniversitaireDialog= value;
       }


}