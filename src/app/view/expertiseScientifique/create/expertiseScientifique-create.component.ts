import {Component, OnInit} from '@angular/core';
import {ExpertiseScientifiqueService} from '../../../controller/service/ExpertiseScientifique.service';
import {ExpertiseScientifiqueVo} from '../../../controller/model/ExpertiseScientifique.model';
      import {TypeExpertiseVo} from '../../../controller/model/TypeExpertise.model';
      import {EtablissementVo} from '../../../controller/model/Etablissement.model';
      import {PaysVo} from '../../../controller/model/Pays.model';
      import {ChercheurVo} from '../../../controller/model/Chercheur.model';
import {CommunauteSavoirExpertiseScientifiqueVo} from '../../../controller/model/CommunauteSavoirExpertiseScientifique.model';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';
import {CommunauteSavoirService} from '../../../controller/service/CommunauteSavoir.service';
import {DisciplineScientifiqueExpertiseScientifiqueVo} from '../../../controller/model/DisciplineScientifiqueExpertiseScientifique.model';
import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';
import {DisciplineScientifiqueService} from '../../../controller/service/DisciplineScientifique.service';

@Component({
  selector: 'app-expertiseScientifique-create',
  templateUrl: './expertiseScientifique-create.component.html',
  styleUrls: ['./expertiseScientifique-create.component.css']
})
export class ExpertiseScientifiqueCreateComponent implements OnInit {

constructor(private expertiseScientifiqueService: ExpertiseScientifiqueService
            ,private communauteSavoirService: CommunauteSavoirService
            ,private disciplineScientifiqueService: DisciplineScientifiqueService
            ) { }
// methods 
ngOnInit(): void {
                this.selectedCommunauteSavoirExpertiseScientifique.communauteSavoirVo = new CommunauteSavoirVo();
                this.communauteSavoirService.findAll().subscribe((data) => this.mycommunauteSavoirs = data);
                this.selectedDisciplineScientifiqueExpertiseScientifique.disciplineScientifiqueVo = new DisciplineScientifiqueVo();
                this.disciplineScientifiqueService.findAll().subscribe((data) => this.mydisciplineScientifiques = data);
    }
        selectedCommunauteSavoirExpertiseScientifique: CommunauteSavoirExpertiseScientifiqueVo = new CommunauteSavoirExpertiseScientifiqueVo();
        communauteSavoirExpertiseScientifiqueListe: Array<CommunauteSavoirExpertiseScientifiqueVo> = [];
        mycommunauteSavoirs: Array<CommunauteSavoirVo> = [];

        addCommunauteSavoirExpertiseScientifique() {
            this.selectedCommunauteSavoirExpertiseScientifique.experiseScientifiqueVo = this.selectedExpertiseScientifique
          this.communauteSavoirExpertiseScientifiqueListe.push(this.selectedCommunauteSavoirExpertiseScientifique);
          this.selectedCommunauteSavoirExpertiseScientifique = new CommunauteSavoirExpertiseScientifiqueVo();
        }

        deleteCommunauteSavoirExpertiseScientifique(p: CommunauteSavoirExpertiseScientifiqueVo) {
        this.communauteSavoirExpertiseScientifiqueListe.forEach((element, index) => {
            if (element === p) { this.communauteSavoirExpertiseScientifiqueListe.splice(index, 1); }
        });
    }
        selectedDisciplineScientifiqueExpertiseScientifique: DisciplineScientifiqueExpertiseScientifiqueVo = new DisciplineScientifiqueExpertiseScientifiqueVo();
        disciplineScientifiqueExpertiseScientifiqueListe: Array<DisciplineScientifiqueExpertiseScientifiqueVo> = [];
        mydisciplineScientifiques: Array<DisciplineScientifiqueVo> = [];

        addDisciplineScientifiqueExpertiseScientifique() {
            this.selectedDisciplineScientifiqueExpertiseScientifique.experiseScientifiqueVo = this.selectedExpertiseScientifique
          this.disciplineScientifiqueExpertiseScientifiqueListe.push(this.selectedDisciplineScientifiqueExpertiseScientifique);
          this.selectedDisciplineScientifiqueExpertiseScientifique = new DisciplineScientifiqueExpertiseScientifiqueVo();
        }

        deleteDisciplineScientifiqueExpertiseScientifique(p: DisciplineScientifiqueExpertiseScientifiqueVo) {
        this.disciplineScientifiqueExpertiseScientifiqueListe.forEach((element, index) => {
            if (element === p) { this.disciplineScientifiqueExpertiseScientifiqueListe.splice(index, 1); }
        });
    }

public save(){
            this.selectedExpertiseScientifique.communauteSavoirExpertiseScientifiquesVo = this.communauteSavoirExpertiseScientifiqueListe;
            this.selectedExpertiseScientifique.disciplineScientifiqueExpertiseScientifiquesVo = this.disciplineScientifiqueExpertiseScientifiqueListe;
    this.expertiseScientifiqueService.save().subscribe(expertiseScientifique=>{
          
       this.expertiseScientifiques.push({...expertiseScientifique});
       this.createExpertiseScientifiqueDialog = false;
       this.selectedExpertiseScientifique = new ExpertiseScientifiqueVo();
    },error=>{
        console.log(error);
    })
            this.selectedCommunauteSavoirExpertiseScientifique = new CommunauteSavoirExpertiseScientifiqueVo();
            this.communauteSavoirExpertiseScientifiqueListe = [];
            this.selectedDisciplineScientifiqueExpertiseScientifique = new DisciplineScientifiqueExpertiseScientifiqueVo();
            this.disciplineScientifiqueExpertiseScientifiqueListe = [];
}
// methods 

hideCreateDialog(){
    this.createExpertiseScientifiqueDialog  = false;
}

// getters and setters 

get expertiseScientifiques(): Array<ExpertiseScientifiqueVo> {
    return this.expertiseScientifiqueService.expertiseScientifiques;
       }
set expertiseScientifiques(value: Array<ExpertiseScientifiqueVo>) {
        this.expertiseScientifiqueService.expertiseScientifiques = value;
       } 

 get selectedExpertiseScientifique():ExpertiseScientifiqueVo {
           return this.expertiseScientifiqueService.selectedExpertiseScientifique;
       }
    set selectedExpertiseScientifique(value: ExpertiseScientifiqueVo) {
        this.expertiseScientifiqueService.selectedExpertiseScientifique = value;
       }
  
   get createExpertiseScientifiqueDialog():boolean {
           return this.expertiseScientifiqueService.createExpertiseScientifiqueDialog;
       }
    set createExpertiseScientifiqueDialog(value: boolean) {
        this.expertiseScientifiqueService.createExpertiseScientifiqueDialog= value;
       }


}