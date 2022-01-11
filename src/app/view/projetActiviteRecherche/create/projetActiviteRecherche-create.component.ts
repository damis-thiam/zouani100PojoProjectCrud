import {Component, OnInit} from '@angular/core';
import {ProjetActiviteRechercheService} from '../../../controller/service/ProjetActiviteRecherche.service';
import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
      import {RoleProjetVo} from '../../../controller/model/RoleProjet.model';
      import {StatusProjetVo} from '../../../controller/model/StatusProjet.model';
      import {FournisseurAppelProjetRechercheVo} from '../../../controller/model/FournisseurAppelProjetRecherche.model';
      import {EtablissementProjetVo} from '../../../controller/model/EtablissementProjet.model';
      import {PaysVo} from '../../../controller/model/Pays.model';
      import {ChercheurVo} from '../../../controller/model/Chercheur.model';
import {PaysProjetRechercheVo} from '../../../controller/model/PaysProjetRecherche.model';
import {PaysService} from '../../../controller/service/Pays.service';
import {InstitutionCoContractantProjetActiviteRechercheVo} from '../../../controller/model/InstitutionCoContractantProjetActiviteRecherche.model';
import {InstitutionCoContractantVo} from '../../../controller/model/InstitutionCoContractant.model';
import {InstitutionCoContractantService} from '../../../controller/service/InstitutionCoContractant.service';
import {CommunauteSavoirProjetActiviteRechercheVo} from '../../../controller/model/CommunauteSavoirProjetActiviteRecherche.model';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';
import {CommunauteSavoirService} from '../../../controller/service/CommunauteSavoir.service';
import {InstrumentsEtDispositifsIrdProjetActiviteRechercheVo} from '../../../controller/model/InstrumentsEtDispositifsIrdProjetActiviteRecherche.model';
import {InstrumentsEtDispositifsIrdVo} from '../../../controller/model/InstrumentsEtDispositifsIrd.model';
import {InstrumentsEtDispositifsIrdService} from '../../../controller/service/InstrumentsEtDispositifsIrd.service';
import {BourseVo} from '../../../controller/model/Bourse.model';
import {TypeParticipationVo} from '../../../controller/model/TypeParticipation.model';
import {TypeParticipationService} from '../../../controller/service/TypeParticipation.service';
import {EncadrementEtudiantVo} from '../../../controller/model/EncadrementEtudiant.model';
import {EtudiantVo} from '../../../controller/model/Etudiant.model';
import {EtudiantService} from '../../../controller/service/Etudiant.service';
import {ResponsabiliteEncadrementEtudiantVo} from '../../../controller/model/ResponsabiliteEncadrementEtudiant.model';
import {ResponsabiliteEncadrementEtudiantService} from '../../../controller/service/ResponsabiliteEncadrementEtudiant.service';
import {EtablissementPartenaireVo} from '../../../controller/model/EtablissementPartenaire.model';
import {EtablissementPartenaireService} from '../../../controller/service/EtablissementPartenaire.service';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import {EtablissementService} from '../../../controller/service/Etablissement.service';
import {EvaluationEncadrementVo} from '../../../controller/model/EvaluationEncadrement.model';
import {EvaluationEncadrementService} from '../../../controller/service/EvaluationEncadrement.service';
import {DirectionEncadrementDoctorantVo} from '../../../controller/model/DirectionEncadrementDoctorant.model';
import {DoctorantVo} from '../../../controller/model/Doctorant.model';
import {DoctorantService} from '../../../controller/service/Doctorant.service';
import {ResponsabiliteDirectionEncadrementDoctorantVo} from '../../../controller/model/ResponsabiliteDirectionEncadrementDoctorant.model';
import {ResponsabiliteDirectionEncadrementDoctorantService} from '../../../controller/service/ResponsabiliteDirectionEncadrementDoctorant.service';
import {FinancementDoctorantVo} from '../../../controller/model/FinancementDoctorant.model';
import {FinancementDoctorantService} from '../../../controller/service/FinancementDoctorant.service';
import {ChercheurService} from '../../../controller/service/Chercheur.service';

@Component({
  selector: 'app-projetActiviteRecherche-create',
  templateUrl: './projetActiviteRecherche-create.component.html',
  styleUrls: ['./projetActiviteRecherche-create.component.css']
})
export class ProjetActiviteRechercheCreateComponent implements OnInit {

constructor(private projetActiviteRechercheService: ProjetActiviteRechercheService
            ,private paysService: PaysService
            ,private institutionCoContractantService: InstitutionCoContractantService
            ,private communauteSavoirService: CommunauteSavoirService
            ,private instrumentsEtDispositifsIrdService: InstrumentsEtDispositifsIrdService
            ,private typeParticipationService: TypeParticipationService
            ,private etudiantService: EtudiantService
            ,private responsabiliteEncadrementEtudiantService: ResponsabiliteEncadrementEtudiantService
            ,private etablissementPartenaireService: EtablissementPartenaireService
            ,private etablissementService: EtablissementService
            ,private evaluationEncadrementService: EvaluationEncadrementService
            ,private doctorantService: DoctorantService
            ,private responsabiliteDirectionEncadrementDoctorantService: ResponsabiliteDirectionEncadrementDoctorantService
            ,private financementDoctorantService: FinancementDoctorantService
            ,private chercheurService: ChercheurService
            ) { }
// methods 
ngOnInit(): void {
                this.selectedPaysProjetRecherche.paysVo = new PaysVo();
                this.paysService.findAll().subscribe((data) => this.mypayss = data);
                this.selectedInstitutionCoContractantProjetActiviteRecherche.institutionCoContractantVo = new InstitutionCoContractantVo();
                this.institutionCoContractantService.findAll().subscribe((data) => this.myinstitutionCoContractants = data);
                this.selectedCommunauteSavoirProjetActiviteRecherche.communauteSavoirVo = new CommunauteSavoirVo();
                this.communauteSavoirService.findAll().subscribe((data) => this.mycommunauteSavoirs = data);
                this.selectedInstrumentsEtDispositifsIrdProjetActiviteRecherche.instrumentsEtDispositifsIrdVo = new InstrumentsEtDispositifsIrdVo();
                this.instrumentsEtDispositifsIrdService.findAll().subscribe((data) => this.myinstrumentsEtDispositifsIrds = data);
                this.selectedBourse.typeParticipationVo = new TypeParticipationVo();
                this.typeParticipationService.findAll().subscribe((data) => this.mytypeParticipations = data);
                this.selectedEncadrementEtudiant.etudiantVo = new EtudiantVo();
                this.etudiantService.findAll().subscribe((data) => this.myetudiants = data);
                this.selectedEncadrementEtudiant.responsabiliteEncadrementEtudiantVo = new ResponsabiliteEncadrementEtudiantVo();
                this.responsabiliteEncadrementEtudiantService.findAll().subscribe((data) => this.myresponsabiliteEncadrementEtudiants = data);
                this.selectedEncadrementEtudiant.paysInscriptionVo = new PaysVo();
                this.paysService.findAll().subscribe((data) => this.mypaysInscriptions = data);
                this.selectedEncadrementEtudiant.etablissementPartenaireVo = new EtablissementPartenaireVo();
                this.etablissementPartenaireService.findAll().subscribe((data) => this.myetablissementPartenaires = data);
                this.selectedEncadrementEtudiant.etablissementInscriptionVo = new EtablissementVo();
                this.etablissementService.findAll().subscribe((data) => this.myetablissementInscriptions = data);
                this.selectedEncadrementEtudiant.evaluationEncadrementVo = new EvaluationEncadrementVo();
                this.evaluationEncadrementService.findAll().subscribe((data) => this.myevaluationEncadrements = data);
                this.selectedDirectionEncadrementDoctorant.doctorantVo = new DoctorantVo();
                this.doctorantService.findAll().subscribe((data) => this.mydoctorants = data);
                this.selectedDirectionEncadrementDoctorant.responsabiliteVo = new ResponsabiliteDirectionEncadrementDoctorantVo();
                this.responsabiliteDirectionEncadrementDoctorantService.findAll().subscribe((data) => this.myresponsabilites = data);
                this.selectedDirectionEncadrementDoctorant.financementDoctorantVo = new FinancementDoctorantVo();
                this.financementDoctorantService.findAll().subscribe((data) => this.myfinancementDoctorants = data);
                this.selectedDirectionEncadrementDoctorant.directeurTheseVo = new ChercheurVo();
                this.chercheurService.findAll().subscribe((data) => this.mydirecteurTheses = data);
                this.selectedDirectionEncadrementDoctorant.paysEtablissementInscriptionDoctorantVo = new PaysVo();
                this.paysService.findAll().subscribe((data) => this.mypaysEtablissementInscriptionDoctorants = data);
                this.selectedDirectionEncadrementDoctorant.etablissementInscriptionVo = new EtablissementVo();
                this.etablissementService.findAll().subscribe((data) => this.myetablissementInscriptions = data);
    }
        selectedPaysProjetRecherche: PaysProjetRechercheVo = new PaysProjetRechercheVo();
        paysProjetRechercheListe: Array<PaysProjetRechercheVo> = [];
        mypayss: Array<PaysVo> = [];

        addPaysProjetRecherche() {
            this.selectedPaysProjetRecherche.projetActiviteRechercheVo = this.selectedProjetActiviteRecherche
          this.paysProjetRechercheListe.push(this.selectedPaysProjetRecherche);
          this.selectedPaysProjetRecherche = new PaysProjetRechercheVo();
        }

        deletePaysProjetRecherche(p: PaysProjetRechercheVo) {
        this.paysProjetRechercheListe.forEach((element, index) => {
            if (element === p) { this.paysProjetRechercheListe.splice(index, 1); }
        });
    }
        selectedInstitutionCoContractantProjetActiviteRecherche: InstitutionCoContractantProjetActiviteRechercheVo = new InstitutionCoContractantProjetActiviteRechercheVo();
        institutionCoContractantProjetActiviteRechercheListe: Array<InstitutionCoContractantProjetActiviteRechercheVo> = [];
        myinstitutionCoContractants: Array<InstitutionCoContractantVo> = [];

        addInstitutionCoContractantProjetActiviteRecherche() {
            this.selectedInstitutionCoContractantProjetActiviteRecherche.projetActiviteRechercheVo = this.selectedProjetActiviteRecherche
          this.institutionCoContractantProjetActiviteRechercheListe.push(this.selectedInstitutionCoContractantProjetActiviteRecherche);
          this.selectedInstitutionCoContractantProjetActiviteRecherche = new InstitutionCoContractantProjetActiviteRechercheVo();
        }

        deleteInstitutionCoContractantProjetActiviteRecherche(p: InstitutionCoContractantProjetActiviteRechercheVo) {
        this.institutionCoContractantProjetActiviteRechercheListe.forEach((element, index) => {
            if (element === p) { this.institutionCoContractantProjetActiviteRechercheListe.splice(index, 1); }
        });
    }
        selectedCommunauteSavoirProjetActiviteRecherche: CommunauteSavoirProjetActiviteRechercheVo = new CommunauteSavoirProjetActiviteRechercheVo();
        communauteSavoirProjetActiviteRechercheListe: Array<CommunauteSavoirProjetActiviteRechercheVo> = [];
        mycommunauteSavoirs: Array<CommunauteSavoirVo> = [];

        addCommunauteSavoirProjetActiviteRecherche() {
            this.selectedCommunauteSavoirProjetActiviteRecherche.projetActiviteRechercheVo = this.selectedProjetActiviteRecherche
          this.communauteSavoirProjetActiviteRechercheListe.push(this.selectedCommunauteSavoirProjetActiviteRecherche);
          this.selectedCommunauteSavoirProjetActiviteRecherche = new CommunauteSavoirProjetActiviteRechercheVo();
        }

        deleteCommunauteSavoirProjetActiviteRecherche(p: CommunauteSavoirProjetActiviteRechercheVo) {
        this.communauteSavoirProjetActiviteRechercheListe.forEach((element, index) => {
            if (element === p) { this.communauteSavoirProjetActiviteRechercheListe.splice(index, 1); }
        });
    }
        selectedInstrumentsEtDispositifsIrdProjetActiviteRecherche: InstrumentsEtDispositifsIrdProjetActiviteRechercheVo = new InstrumentsEtDispositifsIrdProjetActiviteRechercheVo();
        instrumentsEtDispositifsIrdProjetActiviteRechercheListe: Array<InstrumentsEtDispositifsIrdProjetActiviteRechercheVo> = [];
        myinstrumentsEtDispositifsIrds: Array<InstrumentsEtDispositifsIrdVo> = [];

        addInstrumentsEtDispositifsIrdProjetActiviteRecherche() {
            this.selectedInstrumentsEtDispositifsIrdProjetActiviteRecherche.projetActiviteRechercheVo = this.selectedProjetActiviteRecherche
          this.instrumentsEtDispositifsIrdProjetActiviteRechercheListe.push(this.selectedInstrumentsEtDispositifsIrdProjetActiviteRecherche);
          this.selectedInstrumentsEtDispositifsIrdProjetActiviteRecherche = new InstrumentsEtDispositifsIrdProjetActiviteRechercheVo();
        }

        deleteInstrumentsEtDispositifsIrdProjetActiviteRecherche(p: InstrumentsEtDispositifsIrdProjetActiviteRechercheVo) {
        this.instrumentsEtDispositifsIrdProjetActiviteRechercheListe.forEach((element, index) => {
            if (element === p) { this.instrumentsEtDispositifsIrdProjetActiviteRechercheListe.splice(index, 1); }
        });
    }
        selectedBourse: BourseVo = new BourseVo();
        bourseListe: Array<BourseVo> = [];
        mytypeParticipations: Array<TypeParticipationVo> = [];

        addBourse() {
            this.selectedBourse.projetActiviteRechercheVo = this.selectedProjetActiviteRecherche
          this.bourseListe.push(this.selectedBourse);
          this.selectedBourse = new BourseVo();
        }

        deleteBourse(p: BourseVo) {
        this.bourseListe.forEach((element, index) => {
            if (element === p) { this.bourseListe.splice(index, 1); }
        });
    }
        selectedEncadrementEtudiant: EncadrementEtudiantVo = new EncadrementEtudiantVo();
        encadrementEtudiantListe: Array<EncadrementEtudiantVo> = [];
        myetudiants: Array<EtudiantVo> = [];
        myresponsabiliteEncadrementEtudiants: Array<ResponsabiliteEncadrementEtudiantVo> = [];
        mypaysInscriptions: Array<PaysVo> = [];
        myetablissementPartenaires: Array<EtablissementPartenaireVo> = [];
        myetablissementInscriptions: Array<EtablissementVo> = [];
        myevaluationEncadrements: Array<EvaluationEncadrementVo> = [];

        addEncadrementEtudiant() {
            this.selectedEncadrementEtudiant.projetActiviteRechercheVo = this.selectedProjetActiviteRecherche
          this.encadrementEtudiantListe.push(this.selectedEncadrementEtudiant);
          this.selectedEncadrementEtudiant = new EncadrementEtudiantVo();
        }

        deleteEncadrementEtudiant(p: EncadrementEtudiantVo) {
        this.encadrementEtudiantListe.forEach((element, index) => {
            if (element === p) { this.encadrementEtudiantListe.splice(index, 1); }
        });
    }
        selectedDirectionEncadrementDoctorant: DirectionEncadrementDoctorantVo = new DirectionEncadrementDoctorantVo();
        directionEncadrementDoctorantListe: Array<DirectionEncadrementDoctorantVo> = [];
        mydoctorants: Array<DoctorantVo> = [];
        myresponsabilites: Array<ResponsabiliteDirectionEncadrementDoctorantVo> = [];
        myfinancementDoctorants: Array<FinancementDoctorantVo> = [];
        mydirecteurTheses: Array<ChercheurVo> = [];
        mypaysEtablissementInscriptionDoctorants: Array<PaysVo> = [];

        addDirectionEncadrementDoctorant() {
            this.selectedDirectionEncadrementDoctorant.projetActiviteRechercheVo = this.selectedProjetActiviteRecherche
          this.directionEncadrementDoctorantListe.push(this.selectedDirectionEncadrementDoctorant);
          this.selectedDirectionEncadrementDoctorant = new DirectionEncadrementDoctorantVo();
        }

        deleteDirectionEncadrementDoctorant(p: DirectionEncadrementDoctorantVo) {
        this.directionEncadrementDoctorantListe.forEach((element, index) => {
            if (element === p) { this.directionEncadrementDoctorantListe.splice(index, 1); }
        });
    }

public save(){
            this.selectedProjetActiviteRecherche.paysPrincipaleInterventionProjetRecherchesVo = this.paysProjetRechercheListe;
            this.selectedProjetActiviteRecherche.institutionCoContractantsVo = this.institutionCoContractantProjetActiviteRechercheListe;
            this.selectedProjetActiviteRecherche.communauteSavoirProjetActiviteRecherchesVo = this.communauteSavoirProjetActiviteRechercheListe;
            this.selectedProjetActiviteRecherche.instrumentsEtDispositifsIrdProjetActiviteRecherchesVo = this.instrumentsEtDispositifsIrdProjetActiviteRechercheListe;
            this.selectedProjetActiviteRecherche.boursesVo = this.bourseListe;
            this.selectedProjetActiviteRecherche.encadrementEtudiantsVo = this.encadrementEtudiantListe;
            this.selectedProjetActiviteRecherche.directionEncadrementDoctorantsVo = this.directionEncadrementDoctorantListe;
    this.projetActiviteRechercheService.save().subscribe(projetActiviteRecherche=>{
          
       this.projetActiviteRecherches.push({...projetActiviteRecherche});
       this.createProjetActiviteRechercheDialog = false;
       this.selectedProjetActiviteRecherche = new ProjetActiviteRechercheVo();
    },error=>{
        console.log(error);
    })
            this.selectedPaysProjetRecherche = new PaysProjetRechercheVo();
            this.paysProjetRechercheListe = [];
            this.selectedInstitutionCoContractantProjetActiviteRecherche = new InstitutionCoContractantProjetActiviteRechercheVo();
            this.institutionCoContractantProjetActiviteRechercheListe = [];
            this.selectedCommunauteSavoirProjetActiviteRecherche = new CommunauteSavoirProjetActiviteRechercheVo();
            this.communauteSavoirProjetActiviteRechercheListe = [];
            this.selectedInstrumentsEtDispositifsIrdProjetActiviteRecherche = new InstrumentsEtDispositifsIrdProjetActiviteRechercheVo();
            this.instrumentsEtDispositifsIrdProjetActiviteRechercheListe = [];
            this.selectedBourse = new BourseVo();
            this.bourseListe = [];
            this.selectedEncadrementEtudiant = new EncadrementEtudiantVo();
            this.encadrementEtudiantListe = [];
            this.selectedDirectionEncadrementDoctorant = new DirectionEncadrementDoctorantVo();
            this.directionEncadrementDoctorantListe = [];
}
// methods 

hideCreateDialog(){
    this.createProjetActiviteRechercheDialog  = false;
}

// getters and setters 

get projetActiviteRecherches(): Array<ProjetActiviteRechercheVo> {
    return this.projetActiviteRechercheService.projetActiviteRecherches;
       }
set projetActiviteRecherches(value: Array<ProjetActiviteRechercheVo>) {
        this.projetActiviteRechercheService.projetActiviteRecherches = value;
       } 

 get selectedProjetActiviteRecherche():ProjetActiviteRechercheVo {
           return this.projetActiviteRechercheService.selectedProjetActiviteRecherche;
       }
    set selectedProjetActiviteRecherche(value: ProjetActiviteRechercheVo) {
        this.projetActiviteRechercheService.selectedProjetActiviteRecherche = value;
       }
  
   get createProjetActiviteRechercheDialog():boolean {
           return this.projetActiviteRechercheService.createProjetActiviteRechercheDialog;
       }
    set createProjetActiviteRechercheDialog(value: boolean) {
        this.projetActiviteRechercheService.createProjetActiviteRechercheDialog= value;
       }


}