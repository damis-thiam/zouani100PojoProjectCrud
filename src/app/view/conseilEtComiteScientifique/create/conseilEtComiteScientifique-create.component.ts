import {Component, OnInit} from '@angular/core';
import {ConseilEtComiteScientifiqueService} from '../../../controller/service/ConseilEtComiteScientifique.service';
import {ConseilEtComiteScientifiqueVo} from '../../../controller/model/ConseilEtComiteScientifique.model';
      import {EtablissementVo} from '../../../controller/model/Etablissement.model';
      import {PaysVo} from '../../../controller/model/Pays.model';
      import {ChercheurVo} from '../../../controller/model/Chercheur.model';
import {CommunauteSavoirConseilEtComiteScientifiqueVo} from '../../../controller/model/CommunauteSavoirConseilEtComiteScientifique.model';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';
import {CommunauteSavoirService} from '../../../controller/service/CommunauteSavoir.service';
import {DisciplineScientifiqueConseilEtComiteScientifiqueVo} from '../../../controller/model/DisciplineScientifiqueConseilEtComiteScientifique.model';
import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';
import {DisciplineScientifiqueService} from '../../../controller/service/DisciplineScientifique.service';

@Component({
  selector: 'app-conseilEtComiteScientifique-create',
  templateUrl: './conseilEtComiteScientifique-create.component.html',
  styleUrls: ['./conseilEtComiteScientifique-create.component.css']
})
export class ConseilEtComiteScientifiqueCreateComponent implements OnInit {

constructor(private conseilEtComiteScientifiqueService: ConseilEtComiteScientifiqueService
            ,private communauteSavoirService: CommunauteSavoirService
            ,private disciplineScientifiqueService: DisciplineScientifiqueService
            ) { }
// methods 
ngOnInit(): void {
                this.selectedCommunauteSavoirConseilEtComiteScientifique.communauteSavoirVo = new CommunauteSavoirVo();
                this.communauteSavoirService.findAll().subscribe((data) => this.mycommunauteSavoirs = data);
                this.selectedDisciplineScientifiqueConseilEtComiteScientifique.disciplineScientifiqueVo = new DisciplineScientifiqueVo();
                this.disciplineScientifiqueService.findAll().subscribe((data) => this.mydisciplineScientifiques = data);
    }
        selectedCommunauteSavoirConseilEtComiteScientifique: CommunauteSavoirConseilEtComiteScientifiqueVo = new CommunauteSavoirConseilEtComiteScientifiqueVo();
        communauteSavoirConseilEtComiteScientifiqueListe: Array<CommunauteSavoirConseilEtComiteScientifiqueVo> = [];
        mycommunauteSavoirs: Array<CommunauteSavoirVo> = [];

        addCommunauteSavoirConseilEtComiteScientifique() {
            this.selectedCommunauteSavoirConseilEtComiteScientifique.conseilEtComiteScientifiqueVo = this.selectedConseilEtComiteScientifique
          this.communauteSavoirConseilEtComiteScientifiqueListe.push(this.selectedCommunauteSavoirConseilEtComiteScientifique);
          this.selectedCommunauteSavoirConseilEtComiteScientifique = new CommunauteSavoirConseilEtComiteScientifiqueVo();
        }

        deleteCommunauteSavoirConseilEtComiteScientifique(p: CommunauteSavoirConseilEtComiteScientifiqueVo) {
        this.communauteSavoirConseilEtComiteScientifiqueListe.forEach((element, index) => {
            if (element === p) { this.communauteSavoirConseilEtComiteScientifiqueListe.splice(index, 1); }
        });
    }
        selectedDisciplineScientifiqueConseilEtComiteScientifique: DisciplineScientifiqueConseilEtComiteScientifiqueVo = new DisciplineScientifiqueConseilEtComiteScientifiqueVo();
        disciplineScientifiqueConseilEtComiteScientifiqueListe: Array<DisciplineScientifiqueConseilEtComiteScientifiqueVo> = [];
        mydisciplineScientifiques: Array<DisciplineScientifiqueVo> = [];

        addDisciplineScientifiqueConseilEtComiteScientifique() {
            this.selectedDisciplineScientifiqueConseilEtComiteScientifique.conseilEtComiteScientifiqueVo = this.selectedConseilEtComiteScientifique
          this.disciplineScientifiqueConseilEtComiteScientifiqueListe.push(this.selectedDisciplineScientifiqueConseilEtComiteScientifique);
          this.selectedDisciplineScientifiqueConseilEtComiteScientifique = new DisciplineScientifiqueConseilEtComiteScientifiqueVo();
        }

        deleteDisciplineScientifiqueConseilEtComiteScientifique(p: DisciplineScientifiqueConseilEtComiteScientifiqueVo) {
        this.disciplineScientifiqueConseilEtComiteScientifiqueListe.forEach((element, index) => {
            if (element === p) { this.disciplineScientifiqueConseilEtComiteScientifiqueListe.splice(index, 1); }
        });
    }

public save(){
            this.selectedConseilEtComiteScientifique.communauteSavoirConseilEtComiteScientifiquesVo = this.communauteSavoirConseilEtComiteScientifiqueListe;
            this.selectedConseilEtComiteScientifique.disciplineScientifiqueConseilEtComiteScientifiquesVo = this.disciplineScientifiqueConseilEtComiteScientifiqueListe;
    this.conseilEtComiteScientifiqueService.save().subscribe(conseilEtComiteScientifique=>{
          
       this.conseilEtComiteScientifiques.push({...conseilEtComiteScientifique});
       this.createConseilEtComiteScientifiqueDialog = false;
       this.selectedConseilEtComiteScientifique = new ConseilEtComiteScientifiqueVo();
    },error=>{
        console.log(error);
    })
            this.selectedCommunauteSavoirConseilEtComiteScientifique = new CommunauteSavoirConseilEtComiteScientifiqueVo();
            this.communauteSavoirConseilEtComiteScientifiqueListe = [];
            this.selectedDisciplineScientifiqueConseilEtComiteScientifique = new DisciplineScientifiqueConseilEtComiteScientifiqueVo();
            this.disciplineScientifiqueConseilEtComiteScientifiqueListe = [];
}
// methods 

hideCreateDialog(){
    this.createConseilEtComiteScientifiqueDialog  = false;
}

// getters and setters 

get conseilEtComiteScientifiques(): Array<ConseilEtComiteScientifiqueVo> {
    return this.conseilEtComiteScientifiqueService.conseilEtComiteScientifiques;
       }
set conseilEtComiteScientifiques(value: Array<ConseilEtComiteScientifiqueVo>) {
        this.conseilEtComiteScientifiqueService.conseilEtComiteScientifiques = value;
       } 

 get selectedConseilEtComiteScientifique():ConseilEtComiteScientifiqueVo {
           return this.conseilEtComiteScientifiqueService.selectedConseilEtComiteScientifique;
       }
    set selectedConseilEtComiteScientifique(value: ConseilEtComiteScientifiqueVo) {
        this.conseilEtComiteScientifiqueService.selectedConseilEtComiteScientifique = value;
       }
  
   get createConseilEtComiteScientifiqueDialog():boolean {
           return this.conseilEtComiteScientifiqueService.createConseilEtComiteScientifiqueDialog;
       }
    set createConseilEtComiteScientifiqueDialog(value: boolean) {
        this.conseilEtComiteScientifiqueService.createConseilEtComiteScientifiqueDialog= value;
       }


}