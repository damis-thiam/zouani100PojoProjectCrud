import {Component, OnInit} from '@angular/core';
import {DirectionEncadrementDoctorantService} from '../../../controller/service/DirectionEncadrementDoctorant.service';
import {DirectionEncadrementDoctorantVo} from '../../../controller/model/DirectionEncadrementDoctorant.model';
      import {FinancementDoctorantVo} from '../../../controller/model/FinancementDoctorant.model';
      import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
      import {DoctorantVo} from '../../../controller/model/Doctorant.model';
      import {ResponsabiliteDirectionEncadrementDoctorantVo} from '../../../controller/model/ResponsabiliteDirectionEncadrementDoctorant.model';
      import {EtablissementVo} from '../../../controller/model/Etablissement.model';
      import {ChercheurVo} from '../../../controller/model/Chercheur.model';
      import {PaysVo} from '../../../controller/model/Pays.model';
import {CommunauteSavoirDirectionEncadrementDoctorantVo} from '../../../controller/model/CommunauteSavoirDirectionEncadrementDoctorant.model';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';
import {CommunauteSavoirService} from '../../../controller/service/CommunauteSavoir.service';
import {DisciplineScientifiqueDirectionEncadrementDoctorantVo} from '../../../controller/model/DisciplineScientifiqueDirectionEncadrementDoctorant.model';
import {DomaineScientifiqueVo} from '../../../controller/model/DomaineScientifique.model';
import {DomaineScientifiqueService} from '../../../controller/service/DomaineScientifique.service';
import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';
import {DisciplineScientifiqueService} from '../../../controller/service/DisciplineScientifique.service';

@Component({
  selector: 'app-directionEncadrementDoctorant-create',
  templateUrl: './directionEncadrementDoctorant-create.component.html',
  styleUrls: ['./directionEncadrementDoctorant-create.component.css']
})
export class DirectionEncadrementDoctorantCreateComponent implements OnInit {

constructor(private directionEncadrementDoctorantService: DirectionEncadrementDoctorantService
            ,private communauteSavoirService: CommunauteSavoirService
            ,private domaineScientifiqueService: DomaineScientifiqueService
            ,private disciplineScientifiqueService: DisciplineScientifiqueService
            ) { }
// methods 
ngOnInit(): void {
                this.selectedCommunauteSavoirDirectionEncadrementDoctorant.communauteSavoirVo = new CommunauteSavoirVo();
                this.communauteSavoirService.findAll().subscribe((data) => this.mycommunauteSavoirs = data);
                this.selectedDisciplineScientifiqueDirectionEncadrementDoctorant.domaineScientifiqueVo = new DomaineScientifiqueVo();
                this.domaineScientifiqueService.findAll().subscribe((data) => this.mydomaineScientifiques = data);
                this.selectedDisciplineScientifiqueDirectionEncadrementDoctorant.disciplineScientifiqueVo = new DisciplineScientifiqueVo();
                this.disciplineScientifiqueService.findAll().subscribe((data) => this.mydisciplineScientifiques = data);
    }
        selectedCommunauteSavoirDirectionEncadrementDoctorant: CommunauteSavoirDirectionEncadrementDoctorantVo = new CommunauteSavoirDirectionEncadrementDoctorantVo();
        communauteSavoirDirectionEncadrementDoctorantListe: Array<CommunauteSavoirDirectionEncadrementDoctorantVo> = [];
        mycommunauteSavoirs: Array<CommunauteSavoirVo> = [];

        addCommunauteSavoirDirectionEncadrementDoctorant() {
            this.selectedCommunauteSavoirDirectionEncadrementDoctorant.directionEncadrementDoctorantVo = this.selectedDirectionEncadrementDoctorant
          this.communauteSavoirDirectionEncadrementDoctorantListe.push(this.selectedCommunauteSavoirDirectionEncadrementDoctorant);
          this.selectedCommunauteSavoirDirectionEncadrementDoctorant = new CommunauteSavoirDirectionEncadrementDoctorantVo();
        }

        deleteCommunauteSavoirDirectionEncadrementDoctorant(p: CommunauteSavoirDirectionEncadrementDoctorantVo) {
        this.communauteSavoirDirectionEncadrementDoctorantListe.forEach((element, index) => {
            if (element === p) { this.communauteSavoirDirectionEncadrementDoctorantListe.splice(index, 1); }
        });
    }
        selectedDisciplineScientifiqueDirectionEncadrementDoctorant: DisciplineScientifiqueDirectionEncadrementDoctorantVo = new DisciplineScientifiqueDirectionEncadrementDoctorantVo();
        disciplineScientifiqueDirectionEncadrementDoctorantListe: Array<DisciplineScientifiqueDirectionEncadrementDoctorantVo> = [];
        mydomaineScientifiques: Array<DomaineScientifiqueVo> = [];
        mydisciplineScientifiques: Array<DisciplineScientifiqueVo> = [];

        addDisciplineScientifiqueDirectionEncadrementDoctorant() {
          this.disciplineScientifiqueDirectionEncadrementDoctorantListe.push(this.selectedDisciplineScientifiqueDirectionEncadrementDoctorant);
          this.selectedDisciplineScientifiqueDirectionEncadrementDoctorant = new DisciplineScientifiqueDirectionEncadrementDoctorantVo();
        }

        deleteDisciplineScientifiqueDirectionEncadrementDoctorant(p: DisciplineScientifiqueDirectionEncadrementDoctorantVo) {
        this.disciplineScientifiqueDirectionEncadrementDoctorantListe.forEach((element, index) => {
            if (element === p) { this.disciplineScientifiqueDirectionEncadrementDoctorantListe.splice(index, 1); }
        });
    }

public save(){
            this.selectedDirectionEncadrementDoctorant.communauteSavoirDirectionEncadrementDoctorantsVo = this.communauteSavoirDirectionEncadrementDoctorantListe;
            this.selectedDirectionEncadrementDoctorant.disciplineScientifiqueDirectionEncadrementDoctorantVo = this.disciplineScientifiqueDirectionEncadrementDoctorantListe;
    this.directionEncadrementDoctorantService.save().subscribe(directionEncadrementDoctorant=>{
          
       this.directionEncadrementDoctorants.push({...directionEncadrementDoctorant});
       this.createDirectionEncadrementDoctorantDialog = false;
       this.selectedDirectionEncadrementDoctorant = new DirectionEncadrementDoctorantVo();
    },error=>{
        console.log(error);
    })
            this.selectedCommunauteSavoirDirectionEncadrementDoctorant = new CommunauteSavoirDirectionEncadrementDoctorantVo();
            this.communauteSavoirDirectionEncadrementDoctorantListe = [];
            this.selectedDisciplineScientifiqueDirectionEncadrementDoctorant = new DisciplineScientifiqueDirectionEncadrementDoctorantVo();
            this.disciplineScientifiqueDirectionEncadrementDoctorantListe = [];
}
// methods 

hideCreateDialog(){
    this.createDirectionEncadrementDoctorantDialog  = false;
}

// getters and setters 

get directionEncadrementDoctorants(): Array<DirectionEncadrementDoctorantVo> {
    return this.directionEncadrementDoctorantService.directionEncadrementDoctorants;
       }
set directionEncadrementDoctorants(value: Array<DirectionEncadrementDoctorantVo>) {
        this.directionEncadrementDoctorantService.directionEncadrementDoctorants = value;
       } 

 get selectedDirectionEncadrementDoctorant():DirectionEncadrementDoctorantVo {
           return this.directionEncadrementDoctorantService.selectedDirectionEncadrementDoctorant;
       }
    set selectedDirectionEncadrementDoctorant(value: DirectionEncadrementDoctorantVo) {
        this.directionEncadrementDoctorantService.selectedDirectionEncadrementDoctorant = value;
       }
  
   get createDirectionEncadrementDoctorantDialog():boolean {
           return this.directionEncadrementDoctorantService.createDirectionEncadrementDoctorantDialog;
       }
    set createDirectionEncadrementDoctorantDialog(value: boolean) {
        this.directionEncadrementDoctorantService.createDirectionEncadrementDoctorantDialog= value;
       }


}