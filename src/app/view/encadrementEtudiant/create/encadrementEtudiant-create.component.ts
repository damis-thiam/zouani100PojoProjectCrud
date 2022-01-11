import {Component, OnInit} from '@angular/core';
import {EncadrementEtudiantService} from '../../../controller/service/EncadrementEtudiant.service';
import {EncadrementEtudiantVo} from '../../../controller/model/EncadrementEtudiant.model';
      import {EvaluationEncadrementVo} from '../../../controller/model/EvaluationEncadrement.model';
      import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
      import {EtudiantVo} from '../../../controller/model/Etudiant.model';
      import {ResponsabiliteEncadrementEtudiantVo} from '../../../controller/model/ResponsabiliteEncadrementEtudiant.model';
      import {EtablissementVo} from '../../../controller/model/Etablissement.model';
      import {PaysVo} from '../../../controller/model/Pays.model';
      import {EtablissementPartenaireVo} from '../../../controller/model/EtablissementPartenaire.model';
import {CommunauteSavoirEncadrementEtudiantVo} from '../../../controller/model/CommunauteSavoirEncadrementEtudiant.model';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';
import {CommunauteSavoirService} from '../../../controller/service/CommunauteSavoir.service';
import {DisciplineScientifiqueEncadrementEtudiantVo} from '../../../controller/model/DisciplineScientifiqueEncadrementEtudiant.model';
import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';
import {DisciplineScientifiqueService} from '../../../controller/service/DisciplineScientifique.service';

@Component({
  selector: 'app-encadrementEtudiant-create',
  templateUrl: './encadrementEtudiant-create.component.html',
  styleUrls: ['./encadrementEtudiant-create.component.css']
})
export class EncadrementEtudiantCreateComponent implements OnInit {

constructor(private encadrementEtudiantService: EncadrementEtudiantService
            ,private communauteSavoirService: CommunauteSavoirService
            ,private disciplineScientifiqueService: DisciplineScientifiqueService
            ) { }
// methods 
ngOnInit(): void {
                this.selectedCommunauteSavoirEncadrementEtudiant.communauteSavoirVo = new CommunauteSavoirVo();
                this.communauteSavoirService.findAll().subscribe((data) => this.mycommunauteSavoirs = data);
                this.selectedDisciplineScientifiqueEncadrementEtudiant.disciplineScientifiqueVo = new DisciplineScientifiqueVo();
                this.disciplineScientifiqueService.findAll().subscribe((data) => this.mydisciplineScientifiques = data);
    }
        selectedCommunauteSavoirEncadrementEtudiant: CommunauteSavoirEncadrementEtudiantVo = new CommunauteSavoirEncadrementEtudiantVo();
        communauteSavoirEncadrementEtudiantListe: Array<CommunauteSavoirEncadrementEtudiantVo> = [];
        mycommunauteSavoirs: Array<CommunauteSavoirVo> = [];

        addCommunauteSavoirEncadrementEtudiant() {
            this.selectedCommunauteSavoirEncadrementEtudiant.encadrementEtudiantVo = this.selectedEncadrementEtudiant
          this.communauteSavoirEncadrementEtudiantListe.push(this.selectedCommunauteSavoirEncadrementEtudiant);
          this.selectedCommunauteSavoirEncadrementEtudiant = new CommunauteSavoirEncadrementEtudiantVo();
        }

        deleteCommunauteSavoirEncadrementEtudiant(p: CommunauteSavoirEncadrementEtudiantVo) {
        this.communauteSavoirEncadrementEtudiantListe.forEach((element, index) => {
            if (element === p) { this.communauteSavoirEncadrementEtudiantListe.splice(index, 1); }
        });
    }
        selectedDisciplineScientifiqueEncadrementEtudiant: DisciplineScientifiqueEncadrementEtudiantVo = new DisciplineScientifiqueEncadrementEtudiantVo();
        disciplineScientifiqueEncadrementEtudiantListe: Array<DisciplineScientifiqueEncadrementEtudiantVo> = [];
        mydisciplineScientifiques: Array<DisciplineScientifiqueVo> = [];

        addDisciplineScientifiqueEncadrementEtudiant() {
            this.selectedDisciplineScientifiqueEncadrementEtudiant.encadrementEtudiantVo = this.selectedEncadrementEtudiant
          this.disciplineScientifiqueEncadrementEtudiantListe.push(this.selectedDisciplineScientifiqueEncadrementEtudiant);
          this.selectedDisciplineScientifiqueEncadrementEtudiant = new DisciplineScientifiqueEncadrementEtudiantVo();
        }

        deleteDisciplineScientifiqueEncadrementEtudiant(p: DisciplineScientifiqueEncadrementEtudiantVo) {
        this.disciplineScientifiqueEncadrementEtudiantListe.forEach((element, index) => {
            if (element === p) { this.disciplineScientifiqueEncadrementEtudiantListe.splice(index, 1); }
        });
    }

public save(){
            this.selectedEncadrementEtudiant.communauteSavoirEncadrementsVo = this.communauteSavoirEncadrementEtudiantListe;
            this.selectedEncadrementEtudiant.disciplineScientifiqueEncadrementEtudiantVo = this.disciplineScientifiqueEncadrementEtudiantListe;
    this.encadrementEtudiantService.save().subscribe(encadrementEtudiant=>{
          
       this.encadrementEtudiants.push({...encadrementEtudiant});
       this.createEncadrementEtudiantDialog = false;
       this.selectedEncadrementEtudiant = new EncadrementEtudiantVo();
    },error=>{
        console.log(error);
    })
            this.selectedCommunauteSavoirEncadrementEtudiant = new CommunauteSavoirEncadrementEtudiantVo();
            this.communauteSavoirEncadrementEtudiantListe = [];
            this.selectedDisciplineScientifiqueEncadrementEtudiant = new DisciplineScientifiqueEncadrementEtudiantVo();
            this.disciplineScientifiqueEncadrementEtudiantListe = [];
}
// methods 

hideCreateDialog(){
    this.createEncadrementEtudiantDialog  = false;
}

// getters and setters 

get encadrementEtudiants(): Array<EncadrementEtudiantVo> {
    return this.encadrementEtudiantService.encadrementEtudiants;
       }
set encadrementEtudiants(value: Array<EncadrementEtudiantVo>) {
        this.encadrementEtudiantService.encadrementEtudiants = value;
       } 

 get selectedEncadrementEtudiant():EncadrementEtudiantVo {
           return this.encadrementEtudiantService.selectedEncadrementEtudiant;
       }
    set selectedEncadrementEtudiant(value: EncadrementEtudiantVo) {
        this.encadrementEtudiantService.selectedEncadrementEtudiant = value;
       }
  
   get createEncadrementEtudiantDialog():boolean {
           return this.encadrementEtudiantService.createEncadrementEtudiantDialog;
       }
    set createEncadrementEtudiantDialog(value: boolean) {
        this.encadrementEtudiantService.createEncadrementEtudiantDialog= value;
       }


}