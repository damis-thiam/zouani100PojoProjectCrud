import {Component, OnInit} from '@angular/core';
import {ChercheurService} from '../../../controller/service/Chercheur.service';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';
      import {TypeEntiteAdministrativeVo} from '../../../controller/model/TypeEntiteAdministrative.model';
      import {EntiteAdministrativeVo} from '../../../controller/model/EntiteAdministrative.model';
      import {DepartementScientifiqueVo} from '../../../controller/model/DepartementScientifique.model';
      import {SexeVo} from '../../../controller/model/Sexe.model';
      import {GradeVo} from '../../../controller/model/Grade.model';
      import {CorpsVo} from '../../../controller/model/Corps.model';
      import {CommissionScientifiqueVo} from '../../../controller/model/CommissionScientifique.model';
import {DomaineScientifiqueChercheurVo} from '../../../controller/model/DomaineScientifiqueChercheur.model';
import {DomaineScientifiqueVo} from '../../../controller/model/DomaineScientifique.model';
import {DomaineScientifiqueService} from '../../../controller/service/DomaineScientifique.service';
import {EnjeuxIrdChercheurVo} from '../../../controller/model/EnjeuxIrdChercheur.model';
import {EnjeuxIrdVo} from '../../../controller/model/EnjeuxIrd.model';
import {EnjeuxIrdService} from '../../../controller/service/EnjeuxIrd.service';
import {ZoneActiviteInteractionRechercheVo} from '../../../controller/model/ZoneActiviteInteractionRecherche.model';
import {CommunauteSavoirChercheurVo} from '../../../controller/model/CommunauteSavoirChercheur.model';
import {InstrumentsEtDispositifsIrdChercheurVo} from '../../../controller/model/InstrumentsEtDispositifsIrdChercheur.model';
import {TypeInstrumentsEtDispositifsIrdVo} from '../../../controller/model/TypeInstrumentsEtDispositifsIrd.model';
import {TypeInstrumentsEtDispositifsIrdService} from '../../../controller/service/TypeInstrumentsEtDispositifsIrd.service';
import {IdentifiantAuteurExpertVo} from '../../../controller/model/IdentifiantAuteurExpert.model';
import {IdentifiantRechercheVo} from '../../../controller/model/IdentifiantRecherche.model';
import {IdentifiantRechercheService} from '../../../controller/service/IdentifiantRecherche.service';
import {DistinctionVo} from '../../../controller/model/Distinction.model';
import {OrganismeVo} from '../../../controller/model/Organisme.model';
import {OrganismeService} from '../../../controller/service/Organisme.service';
import {TypeParticipationVo} from '../../../controller/model/TypeParticipation.model';
import {TypeParticipationService} from '../../../controller/service/TypeParticipation.service';

@Component({
  selector: 'app-chercheur-create',
  templateUrl: './chercheur-create.component.html',
  styleUrls: ['./chercheur-create.component.css']
})
export class ChercheurCreateComponent implements OnInit {

constructor(private chercheurService: ChercheurService
            ,private domaineScientifiqueService: DomaineScientifiqueService
            ,private enjeuxIrdService: EnjeuxIrdService
            ,private typeInstrumentsEtDispositifsIrdService: TypeInstrumentsEtDispositifsIrdService
            ,private identifiantRechercheService: IdentifiantRechercheService
            ,private organismeService: OrganismeService
            ,private typeParticipationService: TypeParticipationService
            ) { }
// methods 
ngOnInit(): void {
                this.selectedDomaineScientifiqueChercheur.domaineScientifiqueVo = new DomaineScientifiqueVo();
                this.domaineScientifiqueService.findAll().subscribe((data) => this.mydomaineScientifiques = data);
                this.selectedEnjeuxIrdChercheur.enjeuxIrdVo = new EnjeuxIrdVo();
                this.enjeuxIrdService.findAll().subscribe((data) => this.myenjeuxIrds = data);
                this.selectedInstrumentsEtDispositifsIrdChercheur.typeInstrumentsEtDispositifsIrdVo = new TypeInstrumentsEtDispositifsIrdVo();
                this.typeInstrumentsEtDispositifsIrdService.findAll().subscribe((data) => this.mytypeInstrumentsEtDispositifsIrds = data);
                this.selectedIdentifiantAuteurExpert.identifiantRechercheVo = new IdentifiantRechercheVo();
                this.identifiantRechercheService.findAll().subscribe((data) => this.myidentifiantRecherches = data);
                this.selectedDistinction.organismeVo = new OrganismeVo();
                this.organismeService.findAll().subscribe((data) => this.myorganismes = data);
                this.selectedDistinction.typeParticipationVo = new TypeParticipationVo();
                this.typeParticipationService.findAll().subscribe((data) => this.mytypeParticipations = data);
    }
        selectedDomaineScientifiqueChercheur: DomaineScientifiqueChercheurVo = new DomaineScientifiqueChercheurVo();
        domaineScientifiqueChercheurListe: Array<DomaineScientifiqueChercheurVo> = [];
        mydomaineScientifiques: Array<DomaineScientifiqueVo> = [];

        addDomaineScientifiqueChercheur() {
            this.selectedDomaineScientifiqueChercheur.chercheurVo = this.selectedChercheur
          this.domaineScientifiqueChercheurListe.push(this.selectedDomaineScientifiqueChercheur);
          this.selectedDomaineScientifiqueChercheur = new DomaineScientifiqueChercheurVo();
        }

        deleteDomaineScientifiqueChercheur(p: DomaineScientifiqueChercheurVo) {
        this.domaineScientifiqueChercheurListe.forEach((element, index) => {
            if (element === p) { this.domaineScientifiqueChercheurListe.splice(index, 1); }
        });
    }
        selectedEnjeuxIrdChercheur: EnjeuxIrdChercheurVo = new EnjeuxIrdChercheurVo();
        enjeuxIrdChercheurListe: Array<EnjeuxIrdChercheurVo> = [];
        myenjeuxIrds: Array<EnjeuxIrdVo> = [];

        addEnjeuxIrdChercheur() {
            this.selectedEnjeuxIrdChercheur.chercheurVo = this.selectedChercheur
          this.enjeuxIrdChercheurListe.push(this.selectedEnjeuxIrdChercheur);
          this.selectedEnjeuxIrdChercheur = new EnjeuxIrdChercheurVo();
        }

        deleteEnjeuxIrdChercheur(p: EnjeuxIrdChercheurVo) {
        this.enjeuxIrdChercheurListe.forEach((element, index) => {
            if (element === p) { this.enjeuxIrdChercheurListe.splice(index, 1); }
        });
    }
        selectedZoneActiviteInteractionRecherche: ZoneActiviteInteractionRechercheVo = new ZoneActiviteInteractionRechercheVo();
        zoneActiviteInteractionRechercheListe: Array<ZoneActiviteInteractionRechercheVo> = [];

        addZoneActiviteInteractionRecherche() {
            this.selectedZoneActiviteInteractionRecherche.chercheurVo = this.selectedChercheur
          this.zoneActiviteInteractionRechercheListe.push(this.selectedZoneActiviteInteractionRecherche);
          this.selectedZoneActiviteInteractionRecherche = new ZoneActiviteInteractionRechercheVo();
        }

        deleteZoneActiviteInteractionRecherche(p: ZoneActiviteInteractionRechercheVo) {
        this.zoneActiviteInteractionRechercheListe.forEach((element, index) => {
            if (element === p) { this.zoneActiviteInteractionRechercheListe.splice(index, 1); }
        });
    }
        selectedCommunauteSavoirChercheur: CommunauteSavoirChercheurVo = new CommunauteSavoirChercheurVo();
        communauteSavoirChercheurListe: Array<CommunauteSavoirChercheurVo> = [];

        addCommunauteSavoirChercheur() {
            this.selectedCommunauteSavoirChercheur.chercheurVo = this.selectedChercheur
          this.communauteSavoirChercheurListe.push(this.selectedCommunauteSavoirChercheur);
          this.selectedCommunauteSavoirChercheur = new CommunauteSavoirChercheurVo();
        }

        deleteCommunauteSavoirChercheur(p: CommunauteSavoirChercheurVo) {
        this.communauteSavoirChercheurListe.forEach((element, index) => {
            if (element === p) { this.communauteSavoirChercheurListe.splice(index, 1); }
        });
    }
        selectedInstrumentsEtDispositifsIrdChercheur: InstrumentsEtDispositifsIrdChercheurVo = new InstrumentsEtDispositifsIrdChercheurVo();
        instrumentsEtDispositifsIrdChercheurListe: Array<InstrumentsEtDispositifsIrdChercheurVo> = [];
        mytypeInstrumentsEtDispositifsIrds: Array<TypeInstrumentsEtDispositifsIrdVo> = [];

        addInstrumentsEtDispositifsIrdChercheur() {
            this.selectedInstrumentsEtDispositifsIrdChercheur.chercheurVo = this.selectedChercheur
          this.instrumentsEtDispositifsIrdChercheurListe.push(this.selectedInstrumentsEtDispositifsIrdChercheur);
          this.selectedInstrumentsEtDispositifsIrdChercheur = new InstrumentsEtDispositifsIrdChercheurVo();
        }

        deleteInstrumentsEtDispositifsIrdChercheur(p: InstrumentsEtDispositifsIrdChercheurVo) {
        this.instrumentsEtDispositifsIrdChercheurListe.forEach((element, index) => {
            if (element === p) { this.instrumentsEtDispositifsIrdChercheurListe.splice(index, 1); }
        });
    }
        selectedIdentifiantAuteurExpert: IdentifiantAuteurExpertVo = new IdentifiantAuteurExpertVo();
        identifiantAuteurExpertListe: Array<IdentifiantAuteurExpertVo> = [];
        myidentifiantRecherches: Array<IdentifiantRechercheVo> = [];

        addIdentifiantAuteurExpert() {
            this.selectedIdentifiantAuteurExpert.chercheurVo = this.selectedChercheur
          this.identifiantAuteurExpertListe.push(this.selectedIdentifiantAuteurExpert);
          this.selectedIdentifiantAuteurExpert = new IdentifiantAuteurExpertVo();
        }

        deleteIdentifiantAuteurExpert(p: IdentifiantAuteurExpertVo) {
        this.identifiantAuteurExpertListe.forEach((element, index) => {
            if (element === p) { this.identifiantAuteurExpertListe.splice(index, 1); }
        });
    }
        selectedDistinction: DistinctionVo = new DistinctionVo();
        distinctionListe: Array<DistinctionVo> = [];
        myorganismes: Array<OrganismeVo> = [];
        mytypeParticipations: Array<TypeParticipationVo> = [];

        addDistinction() {
            this.selectedDistinction.chercheurVo = this.selectedChercheur
          this.distinctionListe.push(this.selectedDistinction);
          this.selectedDistinction = new DistinctionVo();
        }

        deleteDistinction(p: DistinctionVo) {
        this.distinctionListe.forEach((element, index) => {
            if (element === p) { this.distinctionListe.splice(index, 1); }
        });
    }

public save(){
            this.selectedChercheur.domaineScientifiqueChercheursVo = this.domaineScientifiqueChercheurListe;
            this.selectedChercheur.enjeuxIrdChercheursVo = this.enjeuxIrdChercheurListe;
            this.selectedChercheur.zoneActiviteInteractionRecherchesVo = this.zoneActiviteInteractionRechercheListe;
            this.selectedChercheur.communauteSavoirChercheursVo = this.communauteSavoirChercheurListe;
            this.selectedChercheur.instrumentsEtDispositifsIrdChercheursVo = this.instrumentsEtDispositifsIrdChercheurListe;
            this.selectedChercheur.identifiantAuteurExpertsVo = this.identifiantAuteurExpertListe;
            this.selectedChercheur.distinctionsVo = this.distinctionListe;
    this.chercheurService.save().subscribe(chercheur=>{
          
       this.chercheurs.push({...chercheur});
       this.createChercheurDialog = false;
       this.selectedChercheur = new ChercheurVo();
    },error=>{
        console.log(error);
    })
            this.selectedDomaineScientifiqueChercheur = new DomaineScientifiqueChercheurVo();
            this.domaineScientifiqueChercheurListe = [];
            this.selectedEnjeuxIrdChercheur = new EnjeuxIrdChercheurVo();
            this.enjeuxIrdChercheurListe = [];
            this.selectedZoneActiviteInteractionRecherche = new ZoneActiviteInteractionRechercheVo();
            this.zoneActiviteInteractionRechercheListe = [];
            this.selectedCommunauteSavoirChercheur = new CommunauteSavoirChercheurVo();
            this.communauteSavoirChercheurListe = [];
            this.selectedInstrumentsEtDispositifsIrdChercheur = new InstrumentsEtDispositifsIrdChercheurVo();
            this.instrumentsEtDispositifsIrdChercheurListe = [];
            this.selectedIdentifiantAuteurExpert = new IdentifiantAuteurExpertVo();
            this.identifiantAuteurExpertListe = [];
            this.selectedDistinction = new DistinctionVo();
            this.distinctionListe = [];
}
// methods 

hideCreateDialog(){
    this.createChercheurDialog  = false;
}

// getters and setters 

get chercheurs(): Array<ChercheurVo> {
    return this.chercheurService.chercheurs;
       }
set chercheurs(value: Array<ChercheurVo>) {
        this.chercheurService.chercheurs = value;
       } 

 get selectedChercheur():ChercheurVo {
           return this.chercheurService.selectedChercheur;
       }
    set selectedChercheur(value: ChercheurVo) {
        this.chercheurService.selectedChercheur = value;
       }
  
   get createChercheurDialog():boolean {
           return this.chercheurService.createChercheurDialog;
       }
    set createChercheurDialog(value: boolean) {
        this.chercheurService.createChercheurDialog= value;
       }


}