import {Component, OnInit} from '@angular/core';
import {EvenementColloqueScienntifiqueService} from '../../../controller/service/EvenementColloqueScienntifique.service';
import {EvenementColloqueScienntifiqueVo} from '../../../controller/model/EvenementColloqueScienntifique.model';
      import {ModaliteVo} from '../../../controller/model/Modalite.model';
      import {PaysVo} from '../../../controller/model/Pays.model';
import {CommunauteSavoirEvenementColloqueScientifiquesVo} from '../../../controller/model/CommunauteSavoirEvenementColloqueScientifiques.model';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';
import {CommunauteSavoirService} from '../../../controller/service/CommunauteSavoir.service';
import {DisciplineScientifiqueEvenementColloqueScientifiquesVo} from '../../../controller/model/DisciplineScientifiqueEvenementColloqueScientifiques.model';
import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';
import {DisciplineScientifiqueService} from '../../../controller/service/DisciplineScientifique.service';

@Component({
  selector: 'app-evenementColloqueScienntifique-create',
  templateUrl: './evenementColloqueScienntifique-create.component.html',
  styleUrls: ['./evenementColloqueScienntifique-create.component.css']
})
export class EvenementColloqueScienntifiqueCreateComponent implements OnInit {

constructor(private evenementColloqueScienntifiqueService: EvenementColloqueScienntifiqueService
            ,private communauteSavoirService: CommunauteSavoirService
            ,private disciplineScientifiqueService: DisciplineScientifiqueService
            ) { }
// methods 
ngOnInit(): void {
                this.selectedCommunauteSavoirEvenementColloqueScientifiques.communauteSavoirVo = new CommunauteSavoirVo();
                this.communauteSavoirService.findAll().subscribe((data) => this.mycommunauteSavoirs = data);
                this.selectedDisciplineScientifiqueEvenementColloqueScientifiques.communauteSavoirVo = new CommunauteSavoirVo();
                this.communauteSavoirService.findAll().subscribe((data) => this.mycommunauteSavoirs = data);
                this.selectedDisciplineScientifiqueEvenementColloqueScientifiques.disciplineScientifiqueVo = new DisciplineScientifiqueVo();
                this.disciplineScientifiqueService.findAll().subscribe((data) => this.mydisciplineScientifiques = data);
    }
        selectedCommunauteSavoirEvenementColloqueScientifiques: CommunauteSavoirEvenementColloqueScientifiquesVo = new CommunauteSavoirEvenementColloqueScientifiquesVo();
        communauteSavoirEvenementColloqueScientifiquesListe: Array<CommunauteSavoirEvenementColloqueScientifiquesVo> = [];
        mycommunauteSavoirs: Array<CommunauteSavoirVo> = [];

        addCommunauteSavoirEvenementColloqueScientifiques() {
            this.selectedCommunauteSavoirEvenementColloqueScientifiques.evenementColloqueScienntifiqueVo = this.selectedEvenementColloqueScienntifique
          this.communauteSavoirEvenementColloqueScientifiquesListe.push(this.selectedCommunauteSavoirEvenementColloqueScientifiques);
          this.selectedCommunauteSavoirEvenementColloqueScientifiques = new CommunauteSavoirEvenementColloqueScientifiquesVo();
        }

        deleteCommunauteSavoirEvenementColloqueScientifiques(p: CommunauteSavoirEvenementColloqueScientifiquesVo) {
        this.communauteSavoirEvenementColloqueScientifiquesListe.forEach((element, index) => {
            if (element === p) { this.communauteSavoirEvenementColloqueScientifiquesListe.splice(index, 1); }
        });
    }
        selectedDisciplineScientifiqueEvenementColloqueScientifiques: DisciplineScientifiqueEvenementColloqueScientifiquesVo = new DisciplineScientifiqueEvenementColloqueScientifiquesVo();
        disciplineScientifiqueEvenementColloqueScientifiquesListe: Array<DisciplineScientifiqueEvenementColloqueScientifiquesVo> = [];
        mydisciplineScientifiques: Array<DisciplineScientifiqueVo> = [];

        addDisciplineScientifiqueEvenementColloqueScientifiques() {
          this.disciplineScientifiqueEvenementColloqueScientifiquesListe.push(this.selectedDisciplineScientifiqueEvenementColloqueScientifiques);
          this.selectedDisciplineScientifiqueEvenementColloqueScientifiques = new DisciplineScientifiqueEvenementColloqueScientifiquesVo();
        }

        deleteDisciplineScientifiqueEvenementColloqueScientifiques(p: DisciplineScientifiqueEvenementColloqueScientifiquesVo) {
        this.disciplineScientifiqueEvenementColloqueScientifiquesListe.forEach((element, index) => {
            if (element === p) { this.disciplineScientifiqueEvenementColloqueScientifiquesListe.splice(index, 1); }
        });
    }

public save(){
            this.selectedEvenementColloqueScienntifique.communauteSavoirEvenementColloqueScientifiquesVo = this.communauteSavoirEvenementColloqueScientifiquesListe;
            this.selectedEvenementColloqueScienntifique.disciplineScientifiqueEvenementColloqueScientifiquesVo = this.disciplineScientifiqueEvenementColloqueScientifiquesListe;
    this.evenementColloqueScienntifiqueService.save().subscribe(evenementColloqueScienntifique=>{
          
       this.evenementColloqueScienntifiques.push({...evenementColloqueScienntifique});
       this.createEvenementColloqueScienntifiqueDialog = false;
       this.selectedEvenementColloqueScienntifique = new EvenementColloqueScienntifiqueVo();
    },error=>{
        console.log(error);
    })
            this.selectedCommunauteSavoirEvenementColloqueScientifiques = new CommunauteSavoirEvenementColloqueScientifiquesVo();
            this.communauteSavoirEvenementColloqueScientifiquesListe = [];
            this.selectedDisciplineScientifiqueEvenementColloqueScientifiques = new DisciplineScientifiqueEvenementColloqueScientifiquesVo();
            this.disciplineScientifiqueEvenementColloqueScientifiquesListe = [];
}
// methods 

hideCreateDialog(){
    this.createEvenementColloqueScienntifiqueDialog  = false;
}

// getters and setters 

get evenementColloqueScienntifiques(): Array<EvenementColloqueScienntifiqueVo> {
    return this.evenementColloqueScienntifiqueService.evenementColloqueScienntifiques;
       }
set evenementColloqueScienntifiques(value: Array<EvenementColloqueScienntifiqueVo>) {
        this.evenementColloqueScienntifiqueService.evenementColloqueScienntifiques = value;
       } 

 get selectedEvenementColloqueScienntifique():EvenementColloqueScienntifiqueVo {
           return this.evenementColloqueScienntifiqueService.selectedEvenementColloqueScienntifique;
       }
    set selectedEvenementColloqueScienntifique(value: EvenementColloqueScienntifiqueVo) {
        this.evenementColloqueScienntifiqueService.selectedEvenementColloqueScienntifique = value;
       }
  
   get createEvenementColloqueScienntifiqueDialog():boolean {
           return this.evenementColloqueScienntifiqueService.createEvenementColloqueScienntifiqueDialog;
       }
    set createEvenementColloqueScienntifiqueDialog(value: boolean) {
        this.evenementColloqueScienntifiqueService.createEvenementColloqueScienntifiqueDialog= value;
       }


}