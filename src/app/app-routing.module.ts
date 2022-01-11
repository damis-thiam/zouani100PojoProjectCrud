import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtablissementEnseignementComponent } from './view/etablissementEnseignement/etablissementEnseignement.component';
import { VieInstitutionnelleComponent } from './view/vieInstitutionnelle/vieInstitutionnelle.component';
import { RoleProjetComponent } from './view/roleProjet/roleProjet.component';
import { DisciplineScientifiqueComponent } from './view/disciplineScientifique/disciplineScientifique.component';
import { ContexteCultureScientifiqueRecontreGrandPublicJeunePublicComponent } from './view/contexteCultureScientifiqueRecontreGrandPublicJeunePublic/contexteCultureScientifiqueRecontreGrandPublicJeunePublic.component';
import { InstitutionComponent } from './view/institution/institution.component';
import { CorpsComponent } from './view/corps/corps.component';
import { CommunauteSavoirConseilEtComiteScientifiqueComponent } from './view/communauteSavoirConseilEtComiteScientifique/communauteSavoirConseilEtComiteScientifique.component';
import { TypeSavoirComponent } from './view/typeSavoir/typeSavoir.component';
import { StatusProjetComponent } from './view/statusProjet/statusProjet.component';
import { InstitutionCoContractantComponent } from './view/institutionCoContractant/institutionCoContractant.component';
import { DistinctionComponent } from './view/distinction/distinction.component';
import { EtudiantComponent } from './view/etudiant/etudiant.component';
import { RoleEvaluationRechercheUniversitaireComponent } from './view/roleEvaluationRechercheUniversitaire/roleEvaluationRechercheUniversitaire.component';
import { NiveauFormationComponent } from './view/niveauFormation/niveauFormation.component';
import { ConseilEtComiteScientifiqueComponent } from './view/conseilEtComiteScientifique/conseilEtComiteScientifique.component';
import { CommunauteSavoirEvenementColloqueScientifiquesComponent } from './view/communauteSavoirEvenementColloqueScientifiques/communauteSavoirEvenementColloqueScientifiques.component';
import { DeveloppementDeSavoirEtInnovationScientifiqueComponent } from './view/developpementDeSavoirEtInnovationScientifique/developpementDeSavoirEtInnovationScientifique.component';
import { CategorieFoireQuestionComponent } from './view/categorieFoireQuestion/categorieFoireQuestion.component';
import { DisciplineScientifiqueEvenementColloqueScientifiquesComponent } from './view/disciplineScientifiqueEvenementColloqueScientifiques/disciplineScientifiqueEvenementColloqueScientifiques.component';
import { TypeOutilComponent } from './view/typeOutil/typeOutil.component';
import { IdentifiantAuteurExpertComponent } from './view/identifiantAuteurExpert/identifiantAuteurExpert.component';
import { InstrumentsEtDispositifsIrdProjetActiviteRechercheComponent } from './view/instrumentsEtDispositifsIrdProjetActiviteRecherche/instrumentsEtDispositifsIrdProjetActiviteRecherche.component';
import { ProjetActiviteRechercheComponent } from './view/projetActiviteRecherche/projetActiviteRecherche.component';
import { EnjeuxIrdChercheurComponent } from './view/enjeuxIrdChercheur/enjeuxIrdChercheur.component';
import { ZoneActiviteInteractionRechercheComponent } from './view/zoneActiviteInteractionRecherche/zoneActiviteInteractionRecherche.component';
import { ModaliteEtudeComponent } from './view/modaliteEtude/modaliteEtude.component';
import { InstitutionCoContractantProjetActiviteRechercheComponent } from './view/institutionCoContractantProjetActiviteRecherche/institutionCoContractantProjetActiviteRecherche.component';
import { CultureScientifiqueOutilPedagogiqueComponent } from './view/cultureScientifiqueOutilPedagogique/cultureScientifiqueOutilPedagogique.component';
import { CommunauteSavoirChercheurComponent } from './view/communauteSavoirChercheur/communauteSavoirChercheur.component';
import { ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueComponent } from './view/modeDiffusionDeveloppementDeSavoirEtInnovationScientifique/modeDiffusionDeveloppementDeSavoirEtInnovationScientifique.component';
import { EvaluationEncadrementComponent } from './view/evaluationEncadrement/evaluationEncadrement.component';
import { CommunauteSavoirEncadrementEtudiantComponent } from './view/communauteSavoirEncadrementEtudiant/communauteSavoirEncadrementEtudiant.component';
import { EvenementColloqueScienntifiqueComponent } from './view/evenementColloqueScienntifique/evenementColloqueScienntifique.component';
import { InstrumentsEtDispositifsIrdComponent } from './view/instrumentsEtDispositifsIrd/instrumentsEtDispositifsIrd.component';
import { ResponsabiliteDirectionEncadrementDoctorantComponent } from './view/responsabiliteDirectionEncadrementDoctorant/responsabiliteDirectionEncadrementDoctorant.component';
import { FormationContinueComponent } from './view/formationContinue/formationContinue.component';
import { EtablissementPartenaireComponent } from './view/etablissementPartenaire/etablissementPartenaire.component';
import { ModaliteComponent } from './view/modalite/modalite.component';
import { DoctorantComponent } from './view/doctorant/doctorant.component';
import { PublicCibleComponent } from './view/publicCible/publicCible.component';
import { CommunauteSavoirEvaluationRechercheUniversitaireComponent } from './view/communauteSavoirEvaluationRechercheUniversitaire/communauteSavoirEvaluationRechercheUniversitaire.component';
import { TypeExpertiseComponent } from './view/typeExpertise/typeExpertise.component';
import { CommunauteSavoirComponent } from './view/communauteSavoir/communauteSavoir.component';
import { GestionEquipeComponent } from './view/gestionEquipe/gestionEquipe.component';
import { FoireQuestionComponent } from './view/foireQuestion/foireQuestion.component';
import { TypeEntiteAdministrativeComponent } from './view/typeEntiteAdministrative/typeEntiteAdministrative.component';
import { StatutEcoleDoctoraleComponent } from './view/statutEcoleDoctorale/statutEcoleDoctorale.component';
import { TypeEnseignementDispenseComponent } from './view/typeEnseignementDispense/typeEnseignementDispense.component';
import { NatureEnseignementComponent } from './view/natureEnseignement/natureEnseignement.component';
import { StatutMasterComponent } from './view/statutMaster/statutMaster.component';
import { BourseComponent } from './view/bourse/bourse.component';
import { CommunauteSavoirExpertiseScientifiqueComponent } from './view/communauteSavoirExpertiseScientifique/communauteSavoirExpertiseScientifique.component';
import { NatureEtudeComponent } from './view/natureEtude/natureEtude.component';
import { MasterComponent } from './view/master/master.component';
import { ObjetGlobalComponent } from './view/objetGlobal/objetGlobal.component';
import { TypeInstrumentsEtDispositifsIrdComponent } from './view/typeInstrumentsEtDispositifsIrd/typeInstrumentsEtDispositifsIrd.component';
import { CaracterisationComponent } from './view/caracterisation/caracterisation.component';
import { OrganismeComponent } from './view/organisme/organisme.component';
import { EvaluationRechercheUniversitaireComponent } from './view/evaluationRechercheUniversitaire/evaluationRechercheUniversitaire.component';
import { TypeInstanceComponent } from './view/typeInstance/typeInstance.component';
import { NationaliteComponent } from './view/nationalite/nationalite.component';
import { TypeExpertComponent } from './view/typeExpert/typeExpert.component';
import { DisciplineScientifiqueDirectionEncadrementDoctorantComponent } from './view/disciplineScientifiqueDirectionEncadrementDoctorant/disciplineScientifiqueDirectionEncadrementDoctorant.component';
import { FournisseurAppelProjetRechercheComponent } from './view/fournisseurAppelProjetRecherche/fournisseurAppelProjetRecherche.component';
import { ObjetGlobalFormationContinueComponent } from './view/objetGlobalFormationContinue/objetGlobalFormationContinue.component';
import { FinancementDoctorantComponent } from './view/financementDoctorant/financementDoctorant.component';
import { PaysFormationContinueComponent } from './view/paysFormationContinue/paysFormationContinue.component';
import { EnseignementComponent } from './view/enseignement/enseignement.component';
import { DisciplineScientifiqueExpertiseScientifiqueComponent } from './view/disciplineScientifiqueExpertiseScientifique/disciplineScientifiqueExpertiseScientifique.component';
import { ResponsabilitePedagogiqueMasterComponent } from './view/responsabilitePedagogiqueMaster/responsabilitePedagogiqueMaster.component';
import { EntiteAdministrativeComponent } from './view/entiteAdministrative/entiteAdministrative.component';
import { EcoleDoctoraleComponent } from './view/ecoleDoctorale/ecoleDoctorale.component';
import { ResponsabilitePedagogiqueEcoleDoctoraleComponent } from './view/responsabilitePedagogiqueEcoleDoctorale/responsabilitePedagogiqueEcoleDoctorale.component';
import { EtablissementCultureScientifiqueOutilPedagogiqueComponent } from './view/etablissementCultureScientifiqueOutilPedagogique/etablissementCultureScientifiqueOutilPedagogique.component';
import { EncadrementEtudiantComponent } from './view/encadrementEtudiant/encadrementEtudiant.component';
import { OutilFormationContinueComponent } from './view/outilFormationContinue/outilFormationContinue.component';
import { IdentifiantRechercheComponent } from './view/identifiantRecherche/identifiantRecherche.component';
import { DirectionEncadrementDoctorantComponent } from './view/directionEncadrementDoctorant/directionEncadrementDoctorant.component';
import { GradeComponent } from './view/grade/grade.component';
import { DisciplineScientifiqueEvaluationRechercheUniversitaireComponent } from './view/disciplineScientifiqueEvaluationRechercheUniversitaire/disciplineScientifiqueEvaluationRechercheUniversitaire.component';
import { CommissionScientifiqueComponent } from './view/commissionScientifique/commissionScientifique.component';
import { EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicComponent } from './view/etablissementCultureScientifiqueRecontreGrandPublicJeunePublic/etablissementCultureScientifiqueRecontreGrandPublicJeunePublic.component';
import { EtablissementComponent } from './view/etablissement/etablissement.component';
import { CommunauteSavoirDirectionEncadrementDoctorantComponent } from './view/communauteSavoirDirectionEncadrementDoctorant/communauteSavoirDirectionEncadrementDoctorant.component';
import { PublicCibleCultureScientifiqueRecontreGrandPublicComponent } from './view/publicCibleCultureScientifiqueRecontreGrandPublic/publicCibleCultureScientifiqueRecontreGrandPublic.component';
import { CommunauteSavoirProjetActiviteRechercheComponent } from './view/communauteSavoirProjetActiviteRecherche/communauteSavoirProjetActiviteRecherche.component';
import { PaysProjetRechercheComponent } from './view/paysProjetRecherche/paysProjetRecherche.component';
import { DomaineScientifiqueChercheurComponent } from './view/domaineScientifiqueChercheur/domaineScientifiqueChercheur.component';
import { InstrumentsEtDispositifsIrdChercheurComponent } from './view/instrumentsEtDispositifsIrdChercheur/instrumentsEtDispositifsIrdChercheur.component';
import { PubliquePrincipalConcemeFormationContinueComponent } from './view/publiquePrincipalConcemeFormationContinue/publiquePrincipalConcemeFormationContinue.component';
import { TypeOutilCultureScientifiqueOutilPedagogiqueComponent } from './view/typeOutilCultureScientifiqueOutilPedagogique/typeOutilCultureScientifiqueOutilPedagogique.component';
import { ContexteComponent } from './view/contexte/contexte.component';
import { ModaliteEtudeEnseignementComponent } from './view/modaliteEtudeEnseignement/modaliteEtudeEnseignement.component';
import { TypeParticipationComponent } from './view/typeParticipation/typeParticipation.component';
import { ResponsabiliteEncadrementEtudiantComponent } from './view/responsabiliteEncadrementEtudiant/responsabiliteEncadrementEtudiant.component';
import { PaysComponent } from './view/pays/pays.component';
import { DisciplineScientifiqueConseilEtComiteScientifiqueComponent } from './view/disciplineScientifiqueConseilEtComiteScientifique/disciplineScientifiqueConseilEtComiteScientifique.component';
import { PaysCultureScientifiqueRecontreGrandPublicJeunePublicComponent } from './view/paysCultureScientifiqueRecontreGrandPublicJeunePublic/paysCultureScientifiqueRecontreGrandPublicJeunePublic.component';
import { DisciplineScientifiqueEncadrementEtudiantComponent } from './view/disciplineScientifiqueEncadrementEtudiant/disciplineScientifiqueEncadrementEtudiant.component';
import { CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueComponent } from './view/caracterisationDeveloppementDeSavoirEtInnovationScientifique/caracterisationDeveloppementDeSavoirEtInnovationScientifique.component';
import { NiveauEtudeComponent } from './view/niveauEtude/niveauEtude.component';
import { VilleComponent } from './view/ville/ville.component';
import { MasterInternationalComponent } from './view/masterInternational/masterInternational.component';
import { PubliquePrincipalComponent } from './view/publiquePrincipal/publiquePrincipal.component';
import { DepartementScientifiqueComponent } from './view/departementScientifique/departementScientifique.component';
import { FormatRencontreComponent } from './view/formatRencontre/formatRencontre.component';
import { ChercheurComponent } from './view/chercheur/chercheur.component';
import { ObjetGlobalDeFormationContinueComponent } from './view/objetGlobalDeFormationContinue/objetGlobalDeFormationContinue.component';
import { ExpertiseScientifiqueComponent } from './view/expertiseScientifique/expertiseScientifique.component';
import { PublicCibleCultureScientifiqueOutilPedagogiqueComponent } from './view/publicCibleCultureScientifiqueOutilPedagogique/publicCibleCultureScientifiqueOutilPedagogique.component';
import { ContinentComponent } from './view/continent/continent.component';
import { TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueComponent } from './view/typeSavoirDeveloppementDeSavoirEtInnovationScientifique/typeSavoirDeveloppementDeSavoirEtInnovationScientifique.component';
import { NiveauEtudeEnseignementComponent } from './view/niveauEtudeEnseignement/niveauEtudeEnseignement.component';
import { ModaliteFormationContinueComponent } from './view/modaliteFormationContinue/modaliteFormationContinue.component';
import { SexeComponent } from './view/sexe/sexe.component';
import { DomaineScientifiqueComponent } from './view/domaineScientifique/domaineScientifique.component';
import { ModeDiffusionComponent } from './view/modeDiffusion/modeDiffusion.component';
import { EtablissementProjetComponent } from './view/etablissementProjet/etablissementProjet.component';
import { EnjeuxIrdComponent } from './view/enjeuxIrd/enjeuxIrd.component';
import { CultureScientifiqueRecontreGrandPublicJeunePublicComponent } from './view/cultureScientifiqueRecontreGrandPublicJeunePublic/cultureScientifiqueRecontreGrandPublicJeunePublic.component';
import { PaysTypeOutilCultureScientifiqueOutilPedagogiqueComponent } from './view/paysTypeOutilCultureScientifiqueOutilPedagogique/paysTypeOutilCultureScientifiqueOutilPedagogique.component';
import {AppComponent} from './app.component';
import { AppMainComponent } from './app.main.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './controller/guards/auth.guard';
import { RegisterComponent } from './auth/register/register.component';
import { AccessDeniedComponent } from './auth/access-denied/access-denied.component';
import { UserListComponent } from './view/user-list/user-list.component';
import { HomeComponent } from './demo/view/home/home.component';
@NgModule({
  imports: [
    RouterModule.forRoot(
      [
         { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: "login", component: LoginComponent },
        { path: "register", component: RegisterComponent },
        {
          path: "app",
          component: AppMainComponent,
          children: [
             { path: 'etablissementEnseignement', children: [{path: 'crud', component: EtablissementEnseignementComponent,canActivate:[AuthGuard]}]},
             { path: 'vieInstitutionnelle', children: [{path: 'crud', component: VieInstitutionnelleComponent,canActivate:[AuthGuard]}]},
             { path: 'roleProjet', children: [{path: 'crud', component: RoleProjetComponent,canActivate:[AuthGuard]}]},
             { path: 'disciplineScientifique', children: [{path: 'crud', component: DisciplineScientifiqueComponent,canActivate:[AuthGuard]}]},
             { path: 'contexteCultureScientifiqueRecontreGrandPublicJeunePublic', children: [{path: 'crud', component: ContexteCultureScientifiqueRecontreGrandPublicJeunePublicComponent,canActivate:[AuthGuard]}]},
             { path: 'institution', children: [{path: 'crud', component: InstitutionComponent,canActivate:[AuthGuard]}]},
             { path: 'corps', children: [{path: 'crud', component: CorpsComponent,canActivate:[AuthGuard]}]},
             { path: 'communauteSavoirConseilEtComiteScientifique', children: [{path: 'crud', component: CommunauteSavoirConseilEtComiteScientifiqueComponent,canActivate:[AuthGuard]}]},
             { path: 'typeSavoir', children: [{path: 'crud', component: TypeSavoirComponent,canActivate:[AuthGuard]}]},
             { path: 'statusProjet', children: [{path: 'crud', component: StatusProjetComponent,canActivate:[AuthGuard]}]},
             { path: 'institutionCoContractant', children: [{path: 'crud', component: InstitutionCoContractantComponent,canActivate:[AuthGuard]}]},
             { path: 'distinction', children: [{path: 'crud', component: DistinctionComponent,canActivate:[AuthGuard]}]},
             { path: 'etudiant', children: [{path: 'crud', component: EtudiantComponent,canActivate:[AuthGuard]}]},
             { path: 'roleEvaluationRechercheUniversitaire', children: [{path: 'crud', component: RoleEvaluationRechercheUniversitaireComponent,canActivate:[AuthGuard]}]},
             { path: 'niveauFormation', children: [{path: 'crud', component: NiveauFormationComponent,canActivate:[AuthGuard]}]},
             { path: 'conseilEtComiteScientifique', children: [{path: 'crud', component: ConseilEtComiteScientifiqueComponent,canActivate:[AuthGuard]}]},
             { path: 'communauteSavoirEvenementColloqueScientifiques', children: [{path: 'crud', component: CommunauteSavoirEvenementColloqueScientifiquesComponent,canActivate:[AuthGuard]}]},
             { path: 'developpementDeSavoirEtInnovationScientifique', children: [{path: 'crud', component: DeveloppementDeSavoirEtInnovationScientifiqueComponent,canActivate:[AuthGuard]}]},
             { path: 'categorieFoireQuestion', children: [{path: 'crud', component: CategorieFoireQuestionComponent,canActivate:[AuthGuard]}]},
             { path: 'disciplineScientifiqueEvenementColloqueScientifiques', children: [{path: 'crud', component: DisciplineScientifiqueEvenementColloqueScientifiquesComponent,canActivate:[AuthGuard]}]},
             { path: 'typeOutil', children: [{path: 'crud', component: TypeOutilComponent,canActivate:[AuthGuard]}]},
             { path: 'identifiantAuteurExpert', children: [{path: 'crud', component: IdentifiantAuteurExpertComponent,canActivate:[AuthGuard]}]},
             { path: 'instrumentsEtDispositifsIrdProjetActiviteRecherche', children: [{path: 'crud', component: InstrumentsEtDispositifsIrdProjetActiviteRechercheComponent,canActivate:[AuthGuard]}]},
             { path: 'projetActiviteRecherche', children: [{path: 'crud', component: ProjetActiviteRechercheComponent,canActivate:[AuthGuard]}]},
             { path: 'enjeuxIrdChercheur', children: [{path: 'crud', component: EnjeuxIrdChercheurComponent,canActivate:[AuthGuard]}]},
             { path: 'zoneActiviteInteractionRecherche', children: [{path: 'crud', component: ZoneActiviteInteractionRechercheComponent,canActivate:[AuthGuard]}]},
             { path: 'modaliteEtude', children: [{path: 'crud', component: ModaliteEtudeComponent,canActivate:[AuthGuard]}]},
             { path: 'institutionCoContractantProjetActiviteRecherche', children: [{path: 'crud', component: InstitutionCoContractantProjetActiviteRechercheComponent,canActivate:[AuthGuard]}]},
             { path: 'cultureScientifiqueOutilPedagogique', children: [{path: 'crud', component: CultureScientifiqueOutilPedagogiqueComponent,canActivate:[AuthGuard]}]},
             { path: 'communauteSavoirChercheur', children: [{path: 'crud', component: CommunauteSavoirChercheurComponent,canActivate:[AuthGuard]}]},
             { path: 'modeDiffusionDeveloppementDeSavoirEtInnovationScientifique', children: [{path: 'crud', component: ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueComponent,canActivate:[AuthGuard]}]},
             { path: 'evaluationEncadrement', children: [{path: 'crud', component: EvaluationEncadrementComponent,canActivate:[AuthGuard]}]},
             { path: 'communauteSavoirEncadrementEtudiant', children: [{path: 'crud', component: CommunauteSavoirEncadrementEtudiantComponent,canActivate:[AuthGuard]}]},
             { path: 'evenementColloqueScienntifique', children: [{path: 'crud', component: EvenementColloqueScienntifiqueComponent,canActivate:[AuthGuard]}]},
             { path: 'instrumentsEtDispositifsIrd', children: [{path: 'crud', component: InstrumentsEtDispositifsIrdComponent,canActivate:[AuthGuard]}]},
             { path: 'responsabiliteDirectionEncadrementDoctorant', children: [{path: 'crud', component: ResponsabiliteDirectionEncadrementDoctorantComponent,canActivate:[AuthGuard]}]},
             { path: 'formationContinue', children: [{path: 'crud', component: FormationContinueComponent,canActivate:[AuthGuard]}]},
             { path: 'etablissementPartenaire', children: [{path: 'crud', component: EtablissementPartenaireComponent,canActivate:[AuthGuard]}]},
             { path: 'modalite', children: [{path: 'crud', component: ModaliteComponent,canActivate:[AuthGuard]}]},
             { path: 'doctorant', children: [{path: 'crud', component: DoctorantComponent,canActivate:[AuthGuard]}]},
             { path: 'publicCible', children: [{path: 'crud', component: PublicCibleComponent,canActivate:[AuthGuard]}]},
             { path: 'communauteSavoirEvaluationRechercheUniversitaire', children: [{path: 'crud', component: CommunauteSavoirEvaluationRechercheUniversitaireComponent,canActivate:[AuthGuard]}]},
             { path: 'typeExpertise', children: [{path: 'crud', component: TypeExpertiseComponent,canActivate:[AuthGuard]}]},
             { path: 'communauteSavoir', children: [{path: 'crud', component: CommunauteSavoirComponent,canActivate:[AuthGuard]}]},
             { path: 'gestionEquipe', children: [{path: 'crud', component: GestionEquipeComponent,canActivate:[AuthGuard]}]},
             { path: 'foireQuestion', children: [{path: 'crud', component: FoireQuestionComponent,canActivate:[AuthGuard]}]},
             { path: 'typeEntiteAdministrative', children: [{path: 'crud', component: TypeEntiteAdministrativeComponent,canActivate:[AuthGuard]}]},
             { path: 'statutEcoleDoctorale', children: [{path: 'crud', component: StatutEcoleDoctoraleComponent,canActivate:[AuthGuard]}]},
             { path: 'typeEnseignementDispense', children: [{path: 'crud', component: TypeEnseignementDispenseComponent,canActivate:[AuthGuard]}]},
             { path: 'natureEnseignement', children: [{path: 'crud', component: NatureEnseignementComponent,canActivate:[AuthGuard]}]},
             { path: 'statutMaster', children: [{path: 'crud', component: StatutMasterComponent,canActivate:[AuthGuard]}]},
             { path: 'bourse', children: [{path: 'crud', component: BourseComponent,canActivate:[AuthGuard]}]},
             { path: 'communauteSavoirExpertiseScientifique', children: [{path: 'crud', component: CommunauteSavoirExpertiseScientifiqueComponent,canActivate:[AuthGuard]}]},
             { path: 'natureEtude', children: [{path: 'crud', component: NatureEtudeComponent,canActivate:[AuthGuard]}]},
             { path: 'master', children: [{path: 'crud', component: MasterComponent,canActivate:[AuthGuard]}]},
             { path: 'objetGlobal', children: [{path: 'crud', component: ObjetGlobalComponent,canActivate:[AuthGuard]}]},
             { path: 'typeInstrumentsEtDispositifsIrd', children: [{path: 'crud', component: TypeInstrumentsEtDispositifsIrdComponent,canActivate:[AuthGuard]}]},
             { path: 'caracterisation', children: [{path: 'crud', component: CaracterisationComponent,canActivate:[AuthGuard]}]},
             { path: 'organisme', children: [{path: 'crud', component: OrganismeComponent,canActivate:[AuthGuard]}]},
             { path: 'evaluationRechercheUniversitaire', children: [{path: 'crud', component: EvaluationRechercheUniversitaireComponent,canActivate:[AuthGuard]}]},
             { path: 'typeInstance', children: [{path: 'crud', component: TypeInstanceComponent,canActivate:[AuthGuard]}]},
             { path: 'nationalite', children: [{path: 'crud', component: NationaliteComponent,canActivate:[AuthGuard]}]},
             { path: 'typeExpert', children: [{path: 'crud', component: TypeExpertComponent,canActivate:[AuthGuard]}]},
             { path: 'disciplineScientifiqueDirectionEncadrementDoctorant', children: [{path: 'crud', component: DisciplineScientifiqueDirectionEncadrementDoctorantComponent,canActivate:[AuthGuard]}]},
             { path: 'fournisseurAppelProjetRecherche', children: [{path: 'crud', component: FournisseurAppelProjetRechercheComponent,canActivate:[AuthGuard]}]},
             { path: 'objetGlobalFormationContinue', children: [{path: 'crud', component: ObjetGlobalFormationContinueComponent,canActivate:[AuthGuard]}]},
             { path: 'financementDoctorant', children: [{path: 'crud', component: FinancementDoctorantComponent,canActivate:[AuthGuard]}]},
             { path: 'paysFormationContinue', children: [{path: 'crud', component: PaysFormationContinueComponent,canActivate:[AuthGuard]}]},
             { path: 'enseignement', children: [{path: 'crud', component: EnseignementComponent,canActivate:[AuthGuard]}]},
             { path: 'disciplineScientifiqueExpertiseScientifique', children: [{path: 'crud', component: DisciplineScientifiqueExpertiseScientifiqueComponent,canActivate:[AuthGuard]}]},
             { path: 'responsabilitePedagogiqueMaster', children: [{path: 'crud', component: ResponsabilitePedagogiqueMasterComponent,canActivate:[AuthGuard]}]},
             { path: 'entiteAdministrative', children: [{path: 'crud', component: EntiteAdministrativeComponent,canActivate:[AuthGuard]}]},
             { path: 'ecoleDoctorale', children: [{path: 'crud', component: EcoleDoctoraleComponent,canActivate:[AuthGuard]}]},
             { path: 'responsabilitePedagogiqueEcoleDoctorale', children: [{path: 'crud', component: ResponsabilitePedagogiqueEcoleDoctoraleComponent,canActivate:[AuthGuard]}]},
             { path: 'etablissementCultureScientifiqueOutilPedagogique', children: [{path: 'crud', component: EtablissementCultureScientifiqueOutilPedagogiqueComponent,canActivate:[AuthGuard]}]},
             { path: 'encadrementEtudiant', children: [{path: 'crud', component: EncadrementEtudiantComponent,canActivate:[AuthGuard]}]},
             { path: 'outilFormationContinue', children: [{path: 'crud', component: OutilFormationContinueComponent,canActivate:[AuthGuard]}]},
             { path: 'identifiantRecherche', children: [{path: 'crud', component: IdentifiantRechercheComponent,canActivate:[AuthGuard]}]},
             { path: 'directionEncadrementDoctorant', children: [{path: 'crud', component: DirectionEncadrementDoctorantComponent,canActivate:[AuthGuard]}]},
             { path: 'grade', children: [{path: 'crud', component: GradeComponent,canActivate:[AuthGuard]}]},
             { path: 'disciplineScientifiqueEvaluationRechercheUniversitaire', children: [{path: 'crud', component: DisciplineScientifiqueEvaluationRechercheUniversitaireComponent,canActivate:[AuthGuard]}]},
             { path: 'commissionScientifique', children: [{path: 'crud', component: CommissionScientifiqueComponent,canActivate:[AuthGuard]}]},
             { path: 'etablissementCultureScientifiqueRecontreGrandPublicJeunePublic', children: [{path: 'crud', component: EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicComponent,canActivate:[AuthGuard]}]},
             { path: 'etablissement', children: [{path: 'crud', component: EtablissementComponent,canActivate:[AuthGuard]}]},
             { path: 'communauteSavoirDirectionEncadrementDoctorant', children: [{path: 'crud', component: CommunauteSavoirDirectionEncadrementDoctorantComponent,canActivate:[AuthGuard]}]},
             { path: 'publicCibleCultureScientifiqueRecontreGrandPublic', children: [{path: 'crud', component: PublicCibleCultureScientifiqueRecontreGrandPublicComponent,canActivate:[AuthGuard]}]},
             { path: 'communauteSavoirProjetActiviteRecherche', children: [{path: 'crud', component: CommunauteSavoirProjetActiviteRechercheComponent,canActivate:[AuthGuard]}]},
             { path: 'paysProjetRecherche', children: [{path: 'crud', component: PaysProjetRechercheComponent,canActivate:[AuthGuard]}]},
             { path: 'domaineScientifiqueChercheur', children: [{path: 'crud', component: DomaineScientifiqueChercheurComponent,canActivate:[AuthGuard]}]},
             { path: 'instrumentsEtDispositifsIrdChercheur', children: [{path: 'crud', component: InstrumentsEtDispositifsIrdChercheurComponent,canActivate:[AuthGuard]}]},
             { path: 'publiquePrincipalConcemeFormationContinue', children: [{path: 'crud', component: PubliquePrincipalConcemeFormationContinueComponent,canActivate:[AuthGuard]}]},
             { path: 'typeOutilCultureScientifiqueOutilPedagogique', children: [{path: 'crud', component: TypeOutilCultureScientifiqueOutilPedagogiqueComponent,canActivate:[AuthGuard]}]},
             { path: 'contexte', children: [{path: 'crud', component: ContexteComponent,canActivate:[AuthGuard]}]},
             { path: 'modaliteEtudeEnseignement', children: [{path: 'crud', component: ModaliteEtudeEnseignementComponent,canActivate:[AuthGuard]}]},
             { path: 'typeParticipation', children: [{path: 'crud', component: TypeParticipationComponent,canActivate:[AuthGuard]}]},
             { path: 'responsabiliteEncadrementEtudiant', children: [{path: 'crud', component: ResponsabiliteEncadrementEtudiantComponent,canActivate:[AuthGuard]}]},
             { path: 'pays', children: [{path: 'crud', component: PaysComponent,canActivate:[AuthGuard]}]},
             { path: 'disciplineScientifiqueConseilEtComiteScientifique', children: [{path: 'crud', component: DisciplineScientifiqueConseilEtComiteScientifiqueComponent,canActivate:[AuthGuard]}]},
             { path: 'paysCultureScientifiqueRecontreGrandPublicJeunePublic', children: [{path: 'crud', component: PaysCultureScientifiqueRecontreGrandPublicJeunePublicComponent,canActivate:[AuthGuard]}]},
             { path: 'disciplineScientifiqueEncadrementEtudiant', children: [{path: 'crud', component: DisciplineScientifiqueEncadrementEtudiantComponent,canActivate:[AuthGuard]}]},
             { path: 'caracterisationDeveloppementDeSavoirEtInnovationScientifique', children: [{path: 'crud', component: CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueComponent,canActivate:[AuthGuard]}]},
             { path: 'niveauEtude', children: [{path: 'crud', component: NiveauEtudeComponent,canActivate:[AuthGuard]}]},
             { path: 'ville', children: [{path: 'crud', component: VilleComponent,canActivate:[AuthGuard]}]},
             { path: 'masterInternational', children: [{path: 'crud', component: MasterInternationalComponent,canActivate:[AuthGuard]}]},
             { path: 'publiquePrincipal', children: [{path: 'crud', component: PubliquePrincipalComponent,canActivate:[AuthGuard]}]},
             { path: 'departementScientifique', children: [{path: 'crud', component: DepartementScientifiqueComponent,canActivate:[AuthGuard]}]},
             { path: 'formatRencontre', children: [{path: 'crud', component: FormatRencontreComponent,canActivate:[AuthGuard]}]},
             { path: 'chercheur', children: [{path: 'crud', component: ChercheurComponent,canActivate:[AuthGuard]}]},
             { path: 'objetGlobalDeFormationContinue', children: [{path: 'crud', component: ObjetGlobalDeFormationContinueComponent,canActivate:[AuthGuard]}]},
             { path: 'expertiseScientifique', children: [{path: 'crud', component: ExpertiseScientifiqueComponent,canActivate:[AuthGuard]}]},
             { path: 'publicCibleCultureScientifiqueOutilPedagogique', children: [{path: 'crud', component: PublicCibleCultureScientifiqueOutilPedagogiqueComponent,canActivate:[AuthGuard]}]},
             { path: 'continent', children: [{path: 'crud', component: ContinentComponent,canActivate:[AuthGuard]}]},
             { path: 'typeSavoirDeveloppementDeSavoirEtInnovationScientifique', children: [{path: 'crud', component: TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueComponent,canActivate:[AuthGuard]}]},
             { path: 'niveauEtudeEnseignement', children: [{path: 'crud', component: NiveauEtudeEnseignementComponent,canActivate:[AuthGuard]}]},
             { path: 'modaliteFormationContinue', children: [{path: 'crud', component: ModaliteFormationContinueComponent,canActivate:[AuthGuard]}]},
             { path: 'sexe', children: [{path: 'crud', component: SexeComponent,canActivate:[AuthGuard]}]},
             { path: 'domaineScientifique', children: [{path: 'crud', component: DomaineScientifiqueComponent,canActivate:[AuthGuard]}]},
             { path: 'modeDiffusion', children: [{path: 'crud', component: ModeDiffusionComponent,canActivate:[AuthGuard]}]},
             { path: 'etablissementProjet', children: [{path: 'crud', component: EtablissementProjetComponent,canActivate:[AuthGuard]}]},
             { path: 'enjeuxIrd', children: [{path: 'crud', component: EnjeuxIrdComponent,canActivate:[AuthGuard]}]},
             { path: 'cultureScientifiqueRecontreGrandPublicJeunePublic', children: [{path: 'crud', component: CultureScientifiqueRecontreGrandPublicJeunePublicComponent,canActivate:[AuthGuard]}]},
             { path: 'paysTypeOutilCultureScientifiqueOutilPedagogique', children: [{path: 'crud', component: PaysTypeOutilCultureScientifiqueOutilPedagogiqueComponent,canActivate:[AuthGuard]}]},
             {path:'denied',component:AccessDeniedComponent},
             { path: 'user', children: [{path: 'crud', component: UserListComponent}]},
              { path: 'home', component: HomeComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
          ],
          canActivate:[AuthGuard]
        },
        {path:'**',redirectTo:'login',pathMatch:'full'}
      ],
      { scrollPositionRestoration: "enabled" }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }