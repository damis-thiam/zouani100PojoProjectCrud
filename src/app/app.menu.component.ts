import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { AppComponent } from "./app.component";
import { AppMainComponent } from "./app.main.component";
import { AuthService } from "./controller/service/Auth.service";
import { RoleService } from "./controller/service/role.service";
@Component({
  selector: "app-menu",
  templateUrl: "./app.menu.component.html",
  animations: [
    trigger("inline", [
      state(
        "hidden",
        style({
          height: "0px",
          overflow: "hidden",
        })
      ),
      state(
        "visible",
        style({
          height: "*",
        })
      ),
      state(
        "hiddenAnimated",
        style({
          height: "0px",
          overflow: "hidden",
        })
      ),
      state(
        "visibleAnimated",
        style({
          height: "*",
        })
      ),
      transition(
        "visibleAnimated => hiddenAnimated",
        animate("400ms cubic-bezier(0.86, 0, 0.07, 1)")
      ),
      transition(
        "hiddenAnimated => visibleAnimated",
        animate("400ms cubic-bezier(0.86, 0, 0.07, 1)")
      ),
    ]),
  ],
})
export class AppMenuComponent implements OnInit {
  model: any[];
  modelsuperadmin:any[];
  modelanonymous: any[];
    modeladmin : any[];
  constructor(public app: AppComponent,
   public appMain: AppMainComponent,
   private roleService: RoleService,
   private authService:AuthService,
  private router: Router) {}

  ngOnInit() {

       this.modelanonymous = [
      {
        label: "Denied",
        icon: "pi pi-fw pi-home",
        routerLink: ["denied"]
      }
    ]
    this.modelsuperadmin = [
       {
        label: "Favorites",
        icon: "pi pi-fw pi-home",
        items:[
           {
            label: "EtablissementEnseignement",
            icon: "pi pi-fw pi-home",
            routerLink: ["etablissementEnseignement/crud"],
          },
           {
            label: "VieInstitutionnelle",
            icon: "pi pi-fw pi-home",
            routerLink: ["vieInstitutionnelle/crud"],
          },
           {
            label: "RoleProjet",
            icon: "pi pi-fw pi-home",
            routerLink: ["roleProjet/crud"],
          },
           {
            label: "DisciplineScientifique",
            icon: "pi pi-fw pi-home",
            routerLink: ["disciplineScientifique/crud"],
          },
           {
            label: "ContexteCultureScientifiqueRecontreGrandPublicJeunePublic",
            icon: "pi pi-fw pi-home",
            routerLink: ["contexteCultureScientifiqueRecontreGrandPublicJeunePublic/crud"],
          },
           {
            label: "Institution",
            icon: "pi pi-fw pi-home",
            routerLink: ["institution/crud"],
          },
           {
            label: "Corps",
            icon: "pi pi-fw pi-home",
            routerLink: ["corps/crud"],
          },
           {
            label: "CommunauteSavoirConseilEtComiteScientifique",
            icon: "pi pi-fw pi-home",
            routerLink: ["communauteSavoirConseilEtComiteScientifique/crud"],
          },
           {
            label: "TypeSavoir",
            icon: "pi pi-fw pi-home",
            routerLink: ["typeSavoir/crud"],
          },
           {
            label: "StatusProjet",
            icon: "pi pi-fw pi-home",
            routerLink: ["statusProjet/crud"],
          },
           {
            label: "InstitutionCoContractant",
            icon: "pi pi-fw pi-home",
            routerLink: ["institutionCoContractant/crud"],
          },
           {
            label: "Distinction",
            icon: "pi pi-fw pi-home",
            routerLink: ["distinction/crud"],
          },
           {
            label: "Etudiant",
            icon: "pi pi-fw pi-home",
            routerLink: ["etudiant/crud"],
          },
           {
            label: "RoleEvaluationRechercheUniversitaire",
            icon: "pi pi-fw pi-home",
            routerLink: ["roleEvaluationRechercheUniversitaire/crud"],
          },
           {
            label: "NiveauFormation",
            icon: "pi pi-fw pi-home",
            routerLink: ["niveauFormation/crud"],
          },
           {
            label: "ConseilEtComiteScientifique",
            icon: "pi pi-fw pi-home",
            routerLink: ["conseilEtComiteScientifique/crud"],
          },
           {
            label: "CommunauteSavoirEvenementColloqueScientifiques",
            icon: "pi pi-fw pi-home",
            routerLink: ["communauteSavoirEvenementColloqueScientifiques/crud"],
          },
           {
            label: "DeveloppementDeSavoirEtInnovationScientifique",
            icon: "pi pi-fw pi-home",
            routerLink: ["developpementDeSavoirEtInnovationScientifique/crud"],
          },
           {
            label: "CategorieFoireQuestion",
            icon: "pi pi-fw pi-home",
            routerLink: ["categorieFoireQuestion/crud"],
          },
           {
            label: "DisciplineScientifiqueEvenementColloqueScientifiques",
            icon: "pi pi-fw pi-home",
            routerLink: ["disciplineScientifiqueEvenementColloqueScientifiques/crud"],
          },
           {
            label: "TypeOutil",
            icon: "pi pi-fw pi-home",
            routerLink: ["typeOutil/crud"],
          },
           {
            label: "IdentifiantAuteurExpert",
            icon: "pi pi-fw pi-home",
            routerLink: ["identifiantAuteurExpert/crud"],
          },
           {
            label: "InstrumentsEtDispositifsIrdProjetActiviteRecherche",
            icon: "pi pi-fw pi-home",
            routerLink: ["instrumentsEtDispositifsIrdProjetActiviteRecherche/crud"],
          },
           {
            label: "ProjetActiviteRecherche",
            icon: "pi pi-fw pi-home",
            routerLink: ["projetActiviteRecherche/crud"],
          },
           {
            label: "EnjeuxIrdChercheur",
            icon: "pi pi-fw pi-home",
            routerLink: ["enjeuxIrdChercheur/crud"],
          },
           {
            label: "ZoneActiviteInteractionRecherche",
            icon: "pi pi-fw pi-home",
            routerLink: ["zoneActiviteInteractionRecherche/crud"],
          },
           {
            label: "ModaliteEtude",
            icon: "pi pi-fw pi-home",
            routerLink: ["modaliteEtude/crud"],
          },
           {
            label: "InstitutionCoContractantProjetActiviteRecherche",
            icon: "pi pi-fw pi-home",
            routerLink: ["institutionCoContractantProjetActiviteRecherche/crud"],
          },
           {
            label: "CultureScientifiqueOutilPedagogique",
            icon: "pi pi-fw pi-home",
            routerLink: ["cultureScientifiqueOutilPedagogique/crud"],
          },
           {
            label: "CommunauteSavoirChercheur",
            icon: "pi pi-fw pi-home",
            routerLink: ["communauteSavoirChercheur/crud"],
          },
           {
            label: "ModeDiffusionDeveloppementDeSavoirEtInnovationScientifique",
            icon: "pi pi-fw pi-home",
            routerLink: ["modeDiffusionDeveloppementDeSavoirEtInnovationScientifique/crud"],
          },
           {
            label: "EvaluationEncadrement",
            icon: "pi pi-fw pi-home",
            routerLink: ["evaluationEncadrement/crud"],
          },
           {
            label: "CommunauteSavoirEncadrementEtudiant",
            icon: "pi pi-fw pi-home",
            routerLink: ["communauteSavoirEncadrementEtudiant/crud"],
          },
           {
            label: "EvenementColloqueScienntifique",
            icon: "pi pi-fw pi-home",
            routerLink: ["evenementColloqueScienntifique/crud"],
          },
           {
            label: "InstrumentsEtDispositifsIrd",
            icon: "pi pi-fw pi-home",
            routerLink: ["instrumentsEtDispositifsIrd/crud"],
          },
           {
            label: "ResponsabiliteDirectionEncadrementDoctorant",
            icon: "pi pi-fw pi-home",
            routerLink: ["responsabiliteDirectionEncadrementDoctorant/crud"],
          },
           {
            label: "FormationContinue",
            icon: "pi pi-fw pi-home",
            routerLink: ["formationContinue/crud"],
          },
           {
            label: "EtablissementPartenaire",
            icon: "pi pi-fw pi-home",
            routerLink: ["etablissementPartenaire/crud"],
          },
           {
            label: "Modalite",
            icon: "pi pi-fw pi-home",
            routerLink: ["modalite/crud"],
          },
           {
            label: "Doctorant",
            icon: "pi pi-fw pi-home",
            routerLink: ["doctorant/crud"],
          },
           {
            label: "PublicCible",
            icon: "pi pi-fw pi-home",
            routerLink: ["publicCible/crud"],
          },
           {
            label: "CommunauteSavoirEvaluationRechercheUniversitaire",
            icon: "pi pi-fw pi-home",
            routerLink: ["communauteSavoirEvaluationRechercheUniversitaire/crud"],
          },
           {
            label: "TypeExpertise",
            icon: "pi pi-fw pi-home",
            routerLink: ["typeExpertise/crud"],
          },
           {
            label: "CommunauteSavoir",
            icon: "pi pi-fw pi-home",
            routerLink: ["communauteSavoir/crud"],
          },
           {
            label: "GestionEquipe",
            icon: "pi pi-fw pi-home",
            routerLink: ["gestionEquipe/crud"],
          },
           {
            label: "FoireQuestion",
            icon: "pi pi-fw pi-home",
            routerLink: ["foireQuestion/crud"],
          },
           {
            label: "TypeEntiteAdministrative",
            icon: "pi pi-fw pi-home",
            routerLink: ["typeEntiteAdministrative/crud"],
          },
           {
            label: "StatutEcoleDoctorale",
            icon: "pi pi-fw pi-home",
            routerLink: ["statutEcoleDoctorale/crud"],
          },
           {
            label: "TypeEnseignementDispense",
            icon: "pi pi-fw pi-home",
            routerLink: ["typeEnseignementDispense/crud"],
          },
           {
            label: "NatureEnseignement",
            icon: "pi pi-fw pi-home",
            routerLink: ["natureEnseignement/crud"],
          },
           {
            label: "StatutMaster",
            icon: "pi pi-fw pi-home",
            routerLink: ["statutMaster/crud"],
          },
           {
            label: "Bourse",
            icon: "pi pi-fw pi-home",
            routerLink: ["bourse/crud"],
          },
           {
            label: "CommunauteSavoirExpertiseScientifique",
            icon: "pi pi-fw pi-home",
            routerLink: ["communauteSavoirExpertiseScientifique/crud"],
          },
           {
            label: "NatureEtude",
            icon: "pi pi-fw pi-home",
            routerLink: ["natureEtude/crud"],
          },
           {
            label: "Master",
            icon: "pi pi-fw pi-home",
            routerLink: ["master/crud"],
          },
           {
            label: "ObjetGlobal",
            icon: "pi pi-fw pi-home",
            routerLink: ["objetGlobal/crud"],
          },
           {
            label: "TypeInstrumentsEtDispositifsIrd",
            icon: "pi pi-fw pi-home",
            routerLink: ["typeInstrumentsEtDispositifsIrd/crud"],
          },
           {
            label: "Caracterisation",
            icon: "pi pi-fw pi-home",
            routerLink: ["caracterisation/crud"],
          },
           {
            label: "Organisme",
            icon: "pi pi-fw pi-home",
            routerLink: ["organisme/crud"],
          },
           {
            label: "EvaluationRechercheUniversitaire",
            icon: "pi pi-fw pi-home",
            routerLink: ["evaluationRechercheUniversitaire/crud"],
          },
           {
            label: "TypeInstance",
            icon: "pi pi-fw pi-home",
            routerLink: ["typeInstance/crud"],
          },
           {
            label: "Nationalite",
            icon: "pi pi-fw pi-home",
            routerLink: ["nationalite/crud"],
          },
           {
            label: "TypeExpert",
            icon: "pi pi-fw pi-home",
            routerLink: ["typeExpert/crud"],
          },
           {
            label: "DisciplineScientifiqueDirectionEncadrementDoctorant",
            icon: "pi pi-fw pi-home",
            routerLink: ["disciplineScientifiqueDirectionEncadrementDoctorant/crud"],
          },
           {
            label: "FournisseurAppelProjetRecherche",
            icon: "pi pi-fw pi-home",
            routerLink: ["fournisseurAppelProjetRecherche/crud"],
          },
           {
            label: "ObjetGlobalFormationContinue",
            icon: "pi pi-fw pi-home",
            routerLink: ["objetGlobalFormationContinue/crud"],
          },
           {
            label: "FinancementDoctorant",
            icon: "pi pi-fw pi-home",
            routerLink: ["financementDoctorant/crud"],
          },
           {
            label: "PaysFormationContinue",
            icon: "pi pi-fw pi-home",
            routerLink: ["paysFormationContinue/crud"],
          },
           {
            label: "Enseignement",
            icon: "pi pi-fw pi-home",
            routerLink: ["enseignement/crud"],
          },
           {
            label: "DisciplineScientifiqueExpertiseScientifique",
            icon: "pi pi-fw pi-home",
            routerLink: ["disciplineScientifiqueExpertiseScientifique/crud"],
          },
           {
            label: "ResponsabilitePedagogiqueMaster",
            icon: "pi pi-fw pi-home",
            routerLink: ["responsabilitePedagogiqueMaster/crud"],
          },
           {
            label: "EntiteAdministrative",
            icon: "pi pi-fw pi-home",
            routerLink: ["entiteAdministrative/crud"],
          },
           {
            label: "EcoleDoctorale",
            icon: "pi pi-fw pi-home",
            routerLink: ["ecoleDoctorale/crud"],
          },
           {
            label: "ResponsabilitePedagogiqueEcoleDoctorale",
            icon: "pi pi-fw pi-home",
            routerLink: ["responsabilitePedagogiqueEcoleDoctorale/crud"],
          },
           {
            label: "EtablissementCultureScientifiqueOutilPedagogique",
            icon: "pi pi-fw pi-home",
            routerLink: ["etablissementCultureScientifiqueOutilPedagogique/crud"],
          },
           {
            label: "EncadrementEtudiant",
            icon: "pi pi-fw pi-home",
            routerLink: ["encadrementEtudiant/crud"],
          },
           {
            label: "OutilFormationContinue",
            icon: "pi pi-fw pi-home",
            routerLink: ["outilFormationContinue/crud"],
          },
           {
            label: "IdentifiantRecherche",
            icon: "pi pi-fw pi-home",
            routerLink: ["identifiantRecherche/crud"],
          },
           {
            label: "DirectionEncadrementDoctorant",
            icon: "pi pi-fw pi-home",
            routerLink: ["directionEncadrementDoctorant/crud"],
          },
           {
            label: "Grade",
            icon: "pi pi-fw pi-home",
            routerLink: ["grade/crud"],
          },
           {
            label: "DisciplineScientifiqueEvaluationRechercheUniversitaire",
            icon: "pi pi-fw pi-home",
            routerLink: ["disciplineScientifiqueEvaluationRechercheUniversitaire/crud"],
          },
           {
            label: "CommissionScientifique",
            icon: "pi pi-fw pi-home",
            routerLink: ["commissionScientifique/crud"],
          },
           {
            label: "EtablissementCultureScientifiqueRecontreGrandPublicJeunePublic",
            icon: "pi pi-fw pi-home",
            routerLink: ["etablissementCultureScientifiqueRecontreGrandPublicJeunePublic/crud"],
          },
           {
            label: "Etablissement",
            icon: "pi pi-fw pi-home",
            routerLink: ["etablissement/crud"],
          },
           {
            label: "CommunauteSavoirDirectionEncadrementDoctorant",
            icon: "pi pi-fw pi-home",
            routerLink: ["communauteSavoirDirectionEncadrementDoctorant/crud"],
          },
           {
            label: "PublicCibleCultureScientifiqueRecontreGrandPublic",
            icon: "pi pi-fw pi-home",
            routerLink: ["publicCibleCultureScientifiqueRecontreGrandPublic/crud"],
          },
           {
            label: "CommunauteSavoirProjetActiviteRecherche",
            icon: "pi pi-fw pi-home",
            routerLink: ["communauteSavoirProjetActiviteRecherche/crud"],
          },
           {
            label: "PaysProjetRecherche",
            icon: "pi pi-fw pi-home",
            routerLink: ["paysProjetRecherche/crud"],
          },
           {
            label: "DomaineScientifiqueChercheur",
            icon: "pi pi-fw pi-home",
            routerLink: ["domaineScientifiqueChercheur/crud"],
          },
           {
            label: "InstrumentsEtDispositifsIrdChercheur",
            icon: "pi pi-fw pi-home",
            routerLink: ["instrumentsEtDispositifsIrdChercheur/crud"],
          },
           {
            label: "PubliquePrincipalConcemeFormationContinue",
            icon: "pi pi-fw pi-home",
            routerLink: ["publiquePrincipalConcemeFormationContinue/crud"],
          },
           {
            label: "TypeOutilCultureScientifiqueOutilPedagogique",
            icon: "pi pi-fw pi-home",
            routerLink: ["typeOutilCultureScientifiqueOutilPedagogique/crud"],
          },
           {
            label: "Contexte",
            icon: "pi pi-fw pi-home",
            routerLink: ["contexte/crud"],
          },
           {
            label: "ModaliteEtudeEnseignement",
            icon: "pi pi-fw pi-home",
            routerLink: ["modaliteEtudeEnseignement/crud"],
          },
           {
            label: "TypeParticipation",
            icon: "pi pi-fw pi-home",
            routerLink: ["typeParticipation/crud"],
          },
           {
            label: "ResponsabiliteEncadrementEtudiant",
            icon: "pi pi-fw pi-home",
            routerLink: ["responsabiliteEncadrementEtudiant/crud"],
          },
           {
            label: "Pays",
            icon: "pi pi-fw pi-home",
            routerLink: ["pays/crud"],
          },
           {
            label: "DisciplineScientifiqueConseilEtComiteScientifique",
            icon: "pi pi-fw pi-home",
            routerLink: ["disciplineScientifiqueConseilEtComiteScientifique/crud"],
          },
           {
            label: "PaysCultureScientifiqueRecontreGrandPublicJeunePublic",
            icon: "pi pi-fw pi-home",
            routerLink: ["paysCultureScientifiqueRecontreGrandPublicJeunePublic/crud"],
          },
           {
            label: "DisciplineScientifiqueEncadrementEtudiant",
            icon: "pi pi-fw pi-home",
            routerLink: ["disciplineScientifiqueEncadrementEtudiant/crud"],
          },
           {
            label: "CaracterisationDeveloppementDeSavoirEtInnovationScientifique",
            icon: "pi pi-fw pi-home",
            routerLink: ["caracterisationDeveloppementDeSavoirEtInnovationScientifique/crud"],
          },
           {
            label: "NiveauEtude",
            icon: "pi pi-fw pi-home",
            routerLink: ["niveauEtude/crud"],
          },
           {
            label: "Ville",
            icon: "pi pi-fw pi-home",
            routerLink: ["ville/crud"],
          },
           {
            label: "MasterInternational",
            icon: "pi pi-fw pi-home",
            routerLink: ["masterInternational/crud"],
          },
           {
            label: "PubliquePrincipal",
            icon: "pi pi-fw pi-home",
            routerLink: ["publiquePrincipal/crud"],
          },
           {
            label: "DepartementScientifique",
            icon: "pi pi-fw pi-home",
            routerLink: ["departementScientifique/crud"],
          },
           {
            label: "FormatRencontre",
            icon: "pi pi-fw pi-home",
            routerLink: ["formatRencontre/crud"],
          },
           {
            label: "Chercheur",
            icon: "pi pi-fw pi-home",
            routerLink: ["chercheur/crud"],
          },
           {
            label: "ObjetGlobalDeFormationContinue",
            icon: "pi pi-fw pi-home",
            routerLink: ["objetGlobalDeFormationContinue/crud"],
          },
           {
            label: "ExpertiseScientifique",
            icon: "pi pi-fw pi-home",
            routerLink: ["expertiseScientifique/crud"],
          },
           {
            label: "PublicCibleCultureScientifiqueOutilPedagogique",
            icon: "pi pi-fw pi-home",
            routerLink: ["publicCibleCultureScientifiqueOutilPedagogique/crud"],
          },
           {
            label: "Continent",
            icon: "pi pi-fw pi-home",
            routerLink: ["continent/crud"],
          },
           {
            label: "TypeSavoirDeveloppementDeSavoirEtInnovationScientifique",
            icon: "pi pi-fw pi-home",
            routerLink: ["typeSavoirDeveloppementDeSavoirEtInnovationScientifique/crud"],
          },
           {
            label: "NiveauEtudeEnseignement",
            icon: "pi pi-fw pi-home",
            routerLink: ["niveauEtudeEnseignement/crud"],
          },
           {
            label: "ModaliteFormationContinue",
            icon: "pi pi-fw pi-home",
            routerLink: ["modaliteFormationContinue/crud"],
          },
           {
            label: "Sexe",
            icon: "pi pi-fw pi-home",
            routerLink: ["sexe/crud"],
          },
           {
            label: "DomaineScientifique",
            icon: "pi pi-fw pi-home",
            routerLink: ["domaineScientifique/crud"],
          },
           {
            label: "ModeDiffusion",
            icon: "pi pi-fw pi-home",
            routerLink: ["modeDiffusion/crud"],
          },
           {
            label: "EtablissementProjet",
            icon: "pi pi-fw pi-home",
            routerLink: ["etablissementProjet/crud"],
          },
           {
            label: "EnjeuxIrd",
            icon: "pi pi-fw pi-home",
            routerLink: ["enjeuxIrd/crud"],
          },
           {
            label: "CultureScientifiqueRecontreGrandPublicJeunePublic",
            icon: "pi pi-fw pi-home",
            routerLink: ["cultureScientifiqueRecontreGrandPublicJeunePublic/crud"],
          },
           {
            label: "PaysTypeOutilCultureScientifiqueOutilPedagogique",
            icon: "pi pi-fw pi-home",
            routerLink: ["paysTypeOutilCultureScientifiqueOutilPedagogique/crud"],
          },
           {
                      label: "User",
                      icon: "pi pi-user",
                      routerLink:["user/crud"],
                    },
             ]
       }
    ]
    this.modeladmin = 
      [
              {
                label: "admin",
                icon: 'pi pi-check',
                items:[
                ]
              }
    ]
        if (this.authService.authenticated) {
      if (this.authService.authenticatedUser.roles) {

        this.authService.authenticatedUser.roles.forEach(role => {
          const roleName: string = this.getRole(role);
          this.roleService._role.next(roleName.toUpperCase());
          eval("this.model = this.model" + this.getRole(role));
        })
      }

    }
  }
  getRole(text){
  const [role, ...rest] = text.split('_');
  return rest.join('').toLowerCase()
}
  onMenuClick(event) {
    this.appMain.onMenuClick(event);
  }
}
