import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from './controller/interceptors/jwt.interceptor';

import { AccordionModule } from "primeng/accordion";
import { AutoCompleteModule } from "primeng/autocomplete";
import { AvatarModule } from "primeng/avatar";
import { AvatarGroupModule } from "primeng/avatargroup";
import { BadgeModule } from "primeng/badge";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { CardModule } from "primeng/card";
import { CarouselModule } from "primeng/carousel";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { ChartModule } from "primeng/chart";
import { CheckboxModule } from "primeng/checkbox";
import { ChipModule } from "primeng/chip";
import { ChipsModule } from "primeng/chips";
import { CodeHighlighterModule } from "primeng/codehighlighter";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { ColorPickerModule } from "primeng/colorpicker";
import { ContextMenuModule } from "primeng/contextmenu";
import { DataViewModule } from "primeng/dataview";
import { DialogModule } from "primeng/dialog";
import { DividerModule } from "primeng/divider";
import { DropdownModule } from "primeng/dropdown";
import { FieldsetModule } from "primeng/fieldset";
import { FileUploadModule } from "primeng/fileupload";
import { FullCalendarModule } from "primeng/fullcalendar";
import { GalleriaModule } from "primeng/galleria";
import { InplaceModule } from "primeng/inplace";
import { InputNumberModule } from "primeng/inputnumber";
import { InputMaskModule } from "primeng/inputmask";
import { InputSwitchModule } from "primeng/inputswitch";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { KnobModule } from "primeng/knob";
import { LightboxModule } from "primeng/lightbox";
import { ListboxModule } from "primeng/listbox";
import { MegaMenuModule } from "primeng/megamenu";
import { MenuModule } from "primeng/menu";
import { MenubarModule } from "primeng/menubar";
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import { MultiSelectModule } from "primeng/multiselect";
import { OrderListModule } from "primeng/orderlist";
import { OrganizationChartModule } from "primeng/organizationchart";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { PaginatorModule } from "primeng/paginator";
import { PanelModule } from "primeng/panel";
import { PanelMenuModule } from "primeng/panelmenu";
import { PasswordModule } from "primeng/password";
import { PickListModule } from "primeng/picklist";
import { ProgressBarModule } from "primeng/progressbar";
import { RadioButtonModule } from "primeng/radiobutton";
import { RatingModule } from "primeng/rating";
import { RippleModule } from "primeng/ripple";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { ScrollTopModule } from "primeng/scrolltop";
import { SelectButtonModule } from "primeng/selectbutton";
import { SidebarModule } from "primeng/sidebar";
import { SkeletonModule } from "primeng/skeleton";
import { SlideMenuModule } from "primeng/slidemenu";
import { SliderModule } from "primeng/slider";
import { SplitButtonModule } from "primeng/splitbutton";
import { SplitterModule } from "primeng/splitter";
import { StepsModule } from "primeng/steps";
import { TabMenuModule } from "primeng/tabmenu";
import { TableModule } from "primeng/table";
import { TabViewModule } from "primeng/tabview";
import { TagModule } from "primeng/tag";
import { TerminalModule } from "primeng/terminal";
import { TieredMenuModule } from "primeng/tieredmenu";
import { TimelineModule } from "primeng/timeline";
import { ToastModule } from "primeng/toast";
import { ToggleButtonModule } from "primeng/togglebutton";
import { ToolbarModule } from "primeng/toolbar";
import { TooltipModule } from "primeng/tooltip";
import { TreeModule } from "primeng/tree";
import { TreeTableModule } from "primeng/treetable";
import { VirtualScrollerModule } from "primeng/virtualscroller";
import { AppComponent } from "./app.component";
import { AppCodeModule } from "./app.code.component";
import { AppMainComponent } from "./app.main.component";
import { AppConfigComponent } from "./app.config.component";
import { AppCrudComponent } from "./pages/app.crud.component";
import { AppCalendarComponent } from "./pages/app.calendar.component";
import { AppTimelineDemoComponent } from "./pages/app.timelinedemo.component";
import { AppNotfoundComponent } from "./pages/app.notfound.component";
import { AppErrorComponent } from "./pages/app.error.component";
import { AppAccessdeniedComponent } from "./pages/app.accessdenied.component";
import { AppLoginComponent } from "./pages/app.login.component";
import { AppMenuComponent } from "./app.menu.component";
import { AppMenuitemComponent } from "./app.menuitem.component";
import { AppRightMenuComponent } from "./app.right-menu.component";
import { AppTopBarComponent } from "./app.topbar.component";
import { AppFooterComponent } from "./app.footer.component";
import { FloatLabelDemoComponent } from "./demo/view/floatlabeldemo.component";
import { InvalidStateDemoComponent } from "./demo/view/invalidstatedemo.component";
import { InputDemoComponent } from "./demo/view/inputdemo.component";
import { ButtonDemoComponent } from "./demo/view/buttondemo.component";
import { EmptyDemoComponent } from "./demo/view/emptydemo.component";
import { ChartsDemoComponent } from "./demo/view/chartsdemo.component";
import { FileDemoComponent } from "./demo/view/filedemo.component";
import { DashboardDemoComponent } from "./demo/view/dashboarddemo.component";
import { DocumentationComponent } from "./demo/view/documentation.component";
import { CountryService } from "./demo/service/countryservice";
import { EventService } from "./demo/service/eventservice";
import { NodeService } from "./demo/service/nodeservice";
import { MenuService } from "./app.menu.service";
import { CustomerService } from "./demo/service/customerservice";
import { PhotoService } from "./demo/service/photoservice";
import { ProductService } from "./demo/service/productservice";
import { IconService } from "./demo/service/iconservice";
import { ConfirmationService, MessageService, SharedModule } from "primeng/api";
import { CodeEditorModule } from "@ngstack/code-editor";
import { EtablissementEnseignementCreateComponent } from './view/etablissementEnseignement/create/etablissementEnseignement-create.component';
import { EtablissementEnseignementListComponent } from './view/etablissementEnseignement/list/etablissementEnseignement-list.component';
import { EtablissementEnseignementViewComponent } from './view/etablissementEnseignement/view/etablissementEnseignement-view.component';
import { EtablissementEnseignementEditComponent } from './view/etablissementEnseignement/edit/etablissementEnseignement-edit.component';
import { EtablissementEnseignementComponent } from './view/etablissementEnseignement/etablissementEnseignement.component';
import { VieInstitutionnelleCreateComponent } from './view/vieInstitutionnelle/create/vieInstitutionnelle-create.component';
import { VieInstitutionnelleListComponent } from './view/vieInstitutionnelle/list/vieInstitutionnelle-list.component';
import { VieInstitutionnelleViewComponent } from './view/vieInstitutionnelle/view/vieInstitutionnelle-view.component';
import { VieInstitutionnelleEditComponent } from './view/vieInstitutionnelle/edit/vieInstitutionnelle-edit.component';
import { VieInstitutionnelleComponent } from './view/vieInstitutionnelle/vieInstitutionnelle.component';
import { RoleProjetCreateComponent } from './view/roleProjet/create/roleProjet-create.component';
import { RoleProjetListComponent } from './view/roleProjet/list/roleProjet-list.component';
import { RoleProjetViewComponent } from './view/roleProjet/view/roleProjet-view.component';
import { RoleProjetEditComponent } from './view/roleProjet/edit/roleProjet-edit.component';
import { RoleProjetComponent } from './view/roleProjet/roleProjet.component';
import { DisciplineScientifiqueCreateComponent } from './view/disciplineScientifique/create/disciplineScientifique-create.component';
import { DisciplineScientifiqueListComponent } from './view/disciplineScientifique/list/disciplineScientifique-list.component';
import { DisciplineScientifiqueViewComponent } from './view/disciplineScientifique/view/disciplineScientifique-view.component';
import { DisciplineScientifiqueEditComponent } from './view/disciplineScientifique/edit/disciplineScientifique-edit.component';
import { DisciplineScientifiqueComponent } from './view/disciplineScientifique/disciplineScientifique.component';
import { ContexteCultureScientifiqueRecontreGrandPublicJeunePublicCreateComponent } from './view/contexteCultureScientifiqueRecontreGrandPublicJeunePublic/create/contexteCultureScientifiqueRecontreGrandPublicJeunePublic-create.component';
import { ContexteCultureScientifiqueRecontreGrandPublicJeunePublicListComponent } from './view/contexteCultureScientifiqueRecontreGrandPublicJeunePublic/list/contexteCultureScientifiqueRecontreGrandPublicJeunePublic-list.component';
import { ContexteCultureScientifiqueRecontreGrandPublicJeunePublicViewComponent } from './view/contexteCultureScientifiqueRecontreGrandPublicJeunePublic/view/contexteCultureScientifiqueRecontreGrandPublicJeunePublic-view.component';
import { ContexteCultureScientifiqueRecontreGrandPublicJeunePublicEditComponent } from './view/contexteCultureScientifiqueRecontreGrandPublicJeunePublic/edit/contexteCultureScientifiqueRecontreGrandPublicJeunePublic-edit.component';
import { ContexteCultureScientifiqueRecontreGrandPublicJeunePublicComponent } from './view/contexteCultureScientifiqueRecontreGrandPublicJeunePublic/contexteCultureScientifiqueRecontreGrandPublicJeunePublic.component';
import { InstitutionCreateComponent } from './view/institution/create/institution-create.component';
import { InstitutionListComponent } from './view/institution/list/institution-list.component';
import { InstitutionViewComponent } from './view/institution/view/institution-view.component';
import { InstitutionEditComponent } from './view/institution/edit/institution-edit.component';
import { InstitutionComponent } from './view/institution/institution.component';
import { CorpsCreateComponent } from './view/corps/create/corps-create.component';
import { CorpsListComponent } from './view/corps/list/corps-list.component';
import { CorpsViewComponent } from './view/corps/view/corps-view.component';
import { CorpsEditComponent } from './view/corps/edit/corps-edit.component';
import { CorpsComponent } from './view/corps/corps.component';
import { CommunauteSavoirConseilEtComiteScientifiqueCreateComponent } from './view/communauteSavoirConseilEtComiteScientifique/create/communauteSavoirConseilEtComiteScientifique-create.component';
import { CommunauteSavoirConseilEtComiteScientifiqueListComponent } from './view/communauteSavoirConseilEtComiteScientifique/list/communauteSavoirConseilEtComiteScientifique-list.component';
import { CommunauteSavoirConseilEtComiteScientifiqueViewComponent } from './view/communauteSavoirConseilEtComiteScientifique/view/communauteSavoirConseilEtComiteScientifique-view.component';
import { CommunauteSavoirConseilEtComiteScientifiqueEditComponent } from './view/communauteSavoirConseilEtComiteScientifique/edit/communauteSavoirConseilEtComiteScientifique-edit.component';
import { CommunauteSavoirConseilEtComiteScientifiqueComponent } from './view/communauteSavoirConseilEtComiteScientifique/communauteSavoirConseilEtComiteScientifique.component';
import { TypeSavoirCreateComponent } from './view/typeSavoir/create/typeSavoir-create.component';
import { TypeSavoirListComponent } from './view/typeSavoir/list/typeSavoir-list.component';
import { TypeSavoirViewComponent } from './view/typeSavoir/view/typeSavoir-view.component';
import { TypeSavoirEditComponent } from './view/typeSavoir/edit/typeSavoir-edit.component';
import { TypeSavoirComponent } from './view/typeSavoir/typeSavoir.component';
import { StatusProjetCreateComponent } from './view/statusProjet/create/statusProjet-create.component';
import { StatusProjetListComponent } from './view/statusProjet/list/statusProjet-list.component';
import { StatusProjetViewComponent } from './view/statusProjet/view/statusProjet-view.component';
import { StatusProjetEditComponent } from './view/statusProjet/edit/statusProjet-edit.component';
import { StatusProjetComponent } from './view/statusProjet/statusProjet.component';
import { InstitutionCoContractantCreateComponent } from './view/institutionCoContractant/create/institutionCoContractant-create.component';
import { InstitutionCoContractantListComponent } from './view/institutionCoContractant/list/institutionCoContractant-list.component';
import { InstitutionCoContractantViewComponent } from './view/institutionCoContractant/view/institutionCoContractant-view.component';
import { InstitutionCoContractantEditComponent } from './view/institutionCoContractant/edit/institutionCoContractant-edit.component';
import { InstitutionCoContractantComponent } from './view/institutionCoContractant/institutionCoContractant.component';
import { DistinctionCreateComponent } from './view/distinction/create/distinction-create.component';
import { DistinctionListComponent } from './view/distinction/list/distinction-list.component';
import { DistinctionViewComponent } from './view/distinction/view/distinction-view.component';
import { DistinctionEditComponent } from './view/distinction/edit/distinction-edit.component';
import { DistinctionComponent } from './view/distinction/distinction.component';
import { EtudiantCreateComponent } from './view/etudiant/create/etudiant-create.component';
import { EtudiantListComponent } from './view/etudiant/list/etudiant-list.component';
import { EtudiantViewComponent } from './view/etudiant/view/etudiant-view.component';
import { EtudiantEditComponent } from './view/etudiant/edit/etudiant-edit.component';
import { EtudiantComponent } from './view/etudiant/etudiant.component';
import { RoleEvaluationRechercheUniversitaireCreateComponent } from './view/roleEvaluationRechercheUniversitaire/create/roleEvaluationRechercheUniversitaire-create.component';
import { RoleEvaluationRechercheUniversitaireListComponent } from './view/roleEvaluationRechercheUniversitaire/list/roleEvaluationRechercheUniversitaire-list.component';
import { RoleEvaluationRechercheUniversitaireViewComponent } from './view/roleEvaluationRechercheUniversitaire/view/roleEvaluationRechercheUniversitaire-view.component';
import { RoleEvaluationRechercheUniversitaireEditComponent } from './view/roleEvaluationRechercheUniversitaire/edit/roleEvaluationRechercheUniversitaire-edit.component';
import { RoleEvaluationRechercheUniversitaireComponent } from './view/roleEvaluationRechercheUniversitaire/roleEvaluationRechercheUniversitaire.component';
import { NiveauFormationCreateComponent } from './view/niveauFormation/create/niveauFormation-create.component';
import { NiveauFormationListComponent } from './view/niveauFormation/list/niveauFormation-list.component';
import { NiveauFormationViewComponent } from './view/niveauFormation/view/niveauFormation-view.component';
import { NiveauFormationEditComponent } from './view/niveauFormation/edit/niveauFormation-edit.component';
import { NiveauFormationComponent } from './view/niveauFormation/niveauFormation.component';
import { ConseilEtComiteScientifiqueCreateComponent } from './view/conseilEtComiteScientifique/create/conseilEtComiteScientifique-create.component';
import { ConseilEtComiteScientifiqueListComponent } from './view/conseilEtComiteScientifique/list/conseilEtComiteScientifique-list.component';
import { ConseilEtComiteScientifiqueViewComponent } from './view/conseilEtComiteScientifique/view/conseilEtComiteScientifique-view.component';
import { ConseilEtComiteScientifiqueEditComponent } from './view/conseilEtComiteScientifique/edit/conseilEtComiteScientifique-edit.component';
import { ConseilEtComiteScientifiqueComponent } from './view/conseilEtComiteScientifique/conseilEtComiteScientifique.component';
import { CommunauteSavoirEvenementColloqueScientifiquesCreateComponent } from './view/communauteSavoirEvenementColloqueScientifiques/create/communauteSavoirEvenementColloqueScientifiques-create.component';
import { CommunauteSavoirEvenementColloqueScientifiquesListComponent } from './view/communauteSavoirEvenementColloqueScientifiques/list/communauteSavoirEvenementColloqueScientifiques-list.component';
import { CommunauteSavoirEvenementColloqueScientifiquesViewComponent } from './view/communauteSavoirEvenementColloqueScientifiques/view/communauteSavoirEvenementColloqueScientifiques-view.component';
import { CommunauteSavoirEvenementColloqueScientifiquesEditComponent } from './view/communauteSavoirEvenementColloqueScientifiques/edit/communauteSavoirEvenementColloqueScientifiques-edit.component';
import { CommunauteSavoirEvenementColloqueScientifiquesComponent } from './view/communauteSavoirEvenementColloqueScientifiques/communauteSavoirEvenementColloqueScientifiques.component';
import { DeveloppementDeSavoirEtInnovationScientifiqueCreateComponent } from './view/developpementDeSavoirEtInnovationScientifique/create/developpementDeSavoirEtInnovationScientifique-create.component';
import { DeveloppementDeSavoirEtInnovationScientifiqueListComponent } from './view/developpementDeSavoirEtInnovationScientifique/list/developpementDeSavoirEtInnovationScientifique-list.component';
import { DeveloppementDeSavoirEtInnovationScientifiqueViewComponent } from './view/developpementDeSavoirEtInnovationScientifique/view/developpementDeSavoirEtInnovationScientifique-view.component';
import { DeveloppementDeSavoirEtInnovationScientifiqueEditComponent } from './view/developpementDeSavoirEtInnovationScientifique/edit/developpementDeSavoirEtInnovationScientifique-edit.component';
import { DeveloppementDeSavoirEtInnovationScientifiqueComponent } from './view/developpementDeSavoirEtInnovationScientifique/developpementDeSavoirEtInnovationScientifique.component';
import { CategorieFoireQuestionCreateComponent } from './view/categorieFoireQuestion/create/categorieFoireQuestion-create.component';
import { CategorieFoireQuestionListComponent } from './view/categorieFoireQuestion/list/categorieFoireQuestion-list.component';
import { CategorieFoireQuestionViewComponent } from './view/categorieFoireQuestion/view/categorieFoireQuestion-view.component';
import { CategorieFoireQuestionEditComponent } from './view/categorieFoireQuestion/edit/categorieFoireQuestion-edit.component';
import { CategorieFoireQuestionComponent } from './view/categorieFoireQuestion/categorieFoireQuestion.component';
import { DisciplineScientifiqueEvenementColloqueScientifiquesCreateComponent } from './view/disciplineScientifiqueEvenementColloqueScientifiques/create/disciplineScientifiqueEvenementColloqueScientifiques-create.component';
import { DisciplineScientifiqueEvenementColloqueScientifiquesListComponent } from './view/disciplineScientifiqueEvenementColloqueScientifiques/list/disciplineScientifiqueEvenementColloqueScientifiques-list.component';
import { DisciplineScientifiqueEvenementColloqueScientifiquesViewComponent } from './view/disciplineScientifiqueEvenementColloqueScientifiques/view/disciplineScientifiqueEvenementColloqueScientifiques-view.component';
import { DisciplineScientifiqueEvenementColloqueScientifiquesEditComponent } from './view/disciplineScientifiqueEvenementColloqueScientifiques/edit/disciplineScientifiqueEvenementColloqueScientifiques-edit.component';
import { DisciplineScientifiqueEvenementColloqueScientifiquesComponent } from './view/disciplineScientifiqueEvenementColloqueScientifiques/disciplineScientifiqueEvenementColloqueScientifiques.component';
import { TypeOutilCreateComponent } from './view/typeOutil/create/typeOutil-create.component';
import { TypeOutilListComponent } from './view/typeOutil/list/typeOutil-list.component';
import { TypeOutilViewComponent } from './view/typeOutil/view/typeOutil-view.component';
import { TypeOutilEditComponent } from './view/typeOutil/edit/typeOutil-edit.component';
import { TypeOutilComponent } from './view/typeOutil/typeOutil.component';
import { IdentifiantAuteurExpertCreateComponent } from './view/identifiantAuteurExpert/create/identifiantAuteurExpert-create.component';
import { IdentifiantAuteurExpertListComponent } from './view/identifiantAuteurExpert/list/identifiantAuteurExpert-list.component';
import { IdentifiantAuteurExpertViewComponent } from './view/identifiantAuteurExpert/view/identifiantAuteurExpert-view.component';
import { IdentifiantAuteurExpertEditComponent } from './view/identifiantAuteurExpert/edit/identifiantAuteurExpert-edit.component';
import { IdentifiantAuteurExpertComponent } from './view/identifiantAuteurExpert/identifiantAuteurExpert.component';
import { InstrumentsEtDispositifsIrdProjetActiviteRechercheCreateComponent } from './view/instrumentsEtDispositifsIrdProjetActiviteRecherche/create/instrumentsEtDispositifsIrdProjetActiviteRecherche-create.component';
import { InstrumentsEtDispositifsIrdProjetActiviteRechercheListComponent } from './view/instrumentsEtDispositifsIrdProjetActiviteRecherche/list/instrumentsEtDispositifsIrdProjetActiviteRecherche-list.component';
import { InstrumentsEtDispositifsIrdProjetActiviteRechercheViewComponent } from './view/instrumentsEtDispositifsIrdProjetActiviteRecherche/view/instrumentsEtDispositifsIrdProjetActiviteRecherche-view.component';
import { InstrumentsEtDispositifsIrdProjetActiviteRechercheEditComponent } from './view/instrumentsEtDispositifsIrdProjetActiviteRecherche/edit/instrumentsEtDispositifsIrdProjetActiviteRecherche-edit.component';
import { InstrumentsEtDispositifsIrdProjetActiviteRechercheComponent } from './view/instrumentsEtDispositifsIrdProjetActiviteRecherche/instrumentsEtDispositifsIrdProjetActiviteRecherche.component';
import { ProjetActiviteRechercheCreateComponent } from './view/projetActiviteRecherche/create/projetActiviteRecherche-create.component';
import { ProjetActiviteRechercheListComponent } from './view/projetActiviteRecherche/list/projetActiviteRecherche-list.component';
import { ProjetActiviteRechercheViewComponent } from './view/projetActiviteRecherche/view/projetActiviteRecherche-view.component';
import { ProjetActiviteRechercheEditComponent } from './view/projetActiviteRecherche/edit/projetActiviteRecherche-edit.component';
import { ProjetActiviteRechercheComponent } from './view/projetActiviteRecherche/projetActiviteRecherche.component';
import { EnjeuxIrdChercheurCreateComponent } from './view/enjeuxIrdChercheur/create/enjeuxIrdChercheur-create.component';
import { EnjeuxIrdChercheurListComponent } from './view/enjeuxIrdChercheur/list/enjeuxIrdChercheur-list.component';
import { EnjeuxIrdChercheurViewComponent } from './view/enjeuxIrdChercheur/view/enjeuxIrdChercheur-view.component';
import { EnjeuxIrdChercheurEditComponent } from './view/enjeuxIrdChercheur/edit/enjeuxIrdChercheur-edit.component';
import { EnjeuxIrdChercheurComponent } from './view/enjeuxIrdChercheur/enjeuxIrdChercheur.component';
import { ZoneActiviteInteractionRechercheCreateComponent } from './view/zoneActiviteInteractionRecherche/create/zoneActiviteInteractionRecherche-create.component';
import { ZoneActiviteInteractionRechercheListComponent } from './view/zoneActiviteInteractionRecherche/list/zoneActiviteInteractionRecherche-list.component';
import { ZoneActiviteInteractionRechercheViewComponent } from './view/zoneActiviteInteractionRecherche/view/zoneActiviteInteractionRecherche-view.component';
import { ZoneActiviteInteractionRechercheEditComponent } from './view/zoneActiviteInteractionRecherche/edit/zoneActiviteInteractionRecherche-edit.component';
import { ZoneActiviteInteractionRechercheComponent } from './view/zoneActiviteInteractionRecherche/zoneActiviteInteractionRecherche.component';
import { ModaliteEtudeCreateComponent } from './view/modaliteEtude/create/modaliteEtude-create.component';
import { ModaliteEtudeListComponent } from './view/modaliteEtude/list/modaliteEtude-list.component';
import { ModaliteEtudeViewComponent } from './view/modaliteEtude/view/modaliteEtude-view.component';
import { ModaliteEtudeEditComponent } from './view/modaliteEtude/edit/modaliteEtude-edit.component';
import { ModaliteEtudeComponent } from './view/modaliteEtude/modaliteEtude.component';
import { InstitutionCoContractantProjetActiviteRechercheCreateComponent } from './view/institutionCoContractantProjetActiviteRecherche/create/institutionCoContractantProjetActiviteRecherche-create.component';
import { InstitutionCoContractantProjetActiviteRechercheListComponent } from './view/institutionCoContractantProjetActiviteRecherche/list/institutionCoContractantProjetActiviteRecherche-list.component';
import { InstitutionCoContractantProjetActiviteRechercheViewComponent } from './view/institutionCoContractantProjetActiviteRecherche/view/institutionCoContractantProjetActiviteRecherche-view.component';
import { InstitutionCoContractantProjetActiviteRechercheEditComponent } from './view/institutionCoContractantProjetActiviteRecherche/edit/institutionCoContractantProjetActiviteRecherche-edit.component';
import { InstitutionCoContractantProjetActiviteRechercheComponent } from './view/institutionCoContractantProjetActiviteRecherche/institutionCoContractantProjetActiviteRecherche.component';
import { CultureScientifiqueOutilPedagogiqueCreateComponent } from './view/cultureScientifiqueOutilPedagogique/create/cultureScientifiqueOutilPedagogique-create.component';
import { CultureScientifiqueOutilPedagogiqueListComponent } from './view/cultureScientifiqueOutilPedagogique/list/cultureScientifiqueOutilPedagogique-list.component';
import { CultureScientifiqueOutilPedagogiqueViewComponent } from './view/cultureScientifiqueOutilPedagogique/view/cultureScientifiqueOutilPedagogique-view.component';
import { CultureScientifiqueOutilPedagogiqueEditComponent } from './view/cultureScientifiqueOutilPedagogique/edit/cultureScientifiqueOutilPedagogique-edit.component';
import { CultureScientifiqueOutilPedagogiqueComponent } from './view/cultureScientifiqueOutilPedagogique/cultureScientifiqueOutilPedagogique.component';
import { CommunauteSavoirChercheurCreateComponent } from './view/communauteSavoirChercheur/create/communauteSavoirChercheur-create.component';
import { CommunauteSavoirChercheurListComponent } from './view/communauteSavoirChercheur/list/communauteSavoirChercheur-list.component';
import { CommunauteSavoirChercheurViewComponent } from './view/communauteSavoirChercheur/view/communauteSavoirChercheur-view.component';
import { CommunauteSavoirChercheurEditComponent } from './view/communauteSavoirChercheur/edit/communauteSavoirChercheur-edit.component';
import { CommunauteSavoirChercheurComponent } from './view/communauteSavoirChercheur/communauteSavoirChercheur.component';
import { ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueCreateComponent } from './view/modeDiffusionDeveloppementDeSavoirEtInnovationScientifique/create/modeDiffusionDeveloppementDeSavoirEtInnovationScientifique-create.component';
import { ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueListComponent } from './view/modeDiffusionDeveloppementDeSavoirEtInnovationScientifique/list/modeDiffusionDeveloppementDeSavoirEtInnovationScientifique-list.component';
import { ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueViewComponent } from './view/modeDiffusionDeveloppementDeSavoirEtInnovationScientifique/view/modeDiffusionDeveloppementDeSavoirEtInnovationScientifique-view.component';
import { ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueEditComponent } from './view/modeDiffusionDeveloppementDeSavoirEtInnovationScientifique/edit/modeDiffusionDeveloppementDeSavoirEtInnovationScientifique-edit.component';
import { ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueComponent } from './view/modeDiffusionDeveloppementDeSavoirEtInnovationScientifique/modeDiffusionDeveloppementDeSavoirEtInnovationScientifique.component';
import { EvaluationEncadrementCreateComponent } from './view/evaluationEncadrement/create/evaluationEncadrement-create.component';
import { EvaluationEncadrementListComponent } from './view/evaluationEncadrement/list/evaluationEncadrement-list.component';
import { EvaluationEncadrementViewComponent } from './view/evaluationEncadrement/view/evaluationEncadrement-view.component';
import { EvaluationEncadrementEditComponent } from './view/evaluationEncadrement/edit/evaluationEncadrement-edit.component';
import { EvaluationEncadrementComponent } from './view/evaluationEncadrement/evaluationEncadrement.component';
import { CommunauteSavoirEncadrementEtudiantCreateComponent } from './view/communauteSavoirEncadrementEtudiant/create/communauteSavoirEncadrementEtudiant-create.component';
import { CommunauteSavoirEncadrementEtudiantListComponent } from './view/communauteSavoirEncadrementEtudiant/list/communauteSavoirEncadrementEtudiant-list.component';
import { CommunauteSavoirEncadrementEtudiantViewComponent } from './view/communauteSavoirEncadrementEtudiant/view/communauteSavoirEncadrementEtudiant-view.component';
import { CommunauteSavoirEncadrementEtudiantEditComponent } from './view/communauteSavoirEncadrementEtudiant/edit/communauteSavoirEncadrementEtudiant-edit.component';
import { CommunauteSavoirEncadrementEtudiantComponent } from './view/communauteSavoirEncadrementEtudiant/communauteSavoirEncadrementEtudiant.component';
import { EvenementColloqueScienntifiqueCreateComponent } from './view/evenementColloqueScienntifique/create/evenementColloqueScienntifique-create.component';
import { EvenementColloqueScienntifiqueListComponent } from './view/evenementColloqueScienntifique/list/evenementColloqueScienntifique-list.component';
import { EvenementColloqueScienntifiqueViewComponent } from './view/evenementColloqueScienntifique/view/evenementColloqueScienntifique-view.component';
import { EvenementColloqueScienntifiqueEditComponent } from './view/evenementColloqueScienntifique/edit/evenementColloqueScienntifique-edit.component';
import { EvenementColloqueScienntifiqueComponent } from './view/evenementColloqueScienntifique/evenementColloqueScienntifique.component';
import { InstrumentsEtDispositifsIrdCreateComponent } from './view/instrumentsEtDispositifsIrd/create/instrumentsEtDispositifsIrd-create.component';
import { InstrumentsEtDispositifsIrdListComponent } from './view/instrumentsEtDispositifsIrd/list/instrumentsEtDispositifsIrd-list.component';
import { InstrumentsEtDispositifsIrdViewComponent } from './view/instrumentsEtDispositifsIrd/view/instrumentsEtDispositifsIrd-view.component';
import { InstrumentsEtDispositifsIrdEditComponent } from './view/instrumentsEtDispositifsIrd/edit/instrumentsEtDispositifsIrd-edit.component';
import { InstrumentsEtDispositifsIrdComponent } from './view/instrumentsEtDispositifsIrd/instrumentsEtDispositifsIrd.component';
import { ResponsabiliteDirectionEncadrementDoctorantCreateComponent } from './view/responsabiliteDirectionEncadrementDoctorant/create/responsabiliteDirectionEncadrementDoctorant-create.component';
import { ResponsabiliteDirectionEncadrementDoctorantListComponent } from './view/responsabiliteDirectionEncadrementDoctorant/list/responsabiliteDirectionEncadrementDoctorant-list.component';
import { ResponsabiliteDirectionEncadrementDoctorantViewComponent } from './view/responsabiliteDirectionEncadrementDoctorant/view/responsabiliteDirectionEncadrementDoctorant-view.component';
import { ResponsabiliteDirectionEncadrementDoctorantEditComponent } from './view/responsabiliteDirectionEncadrementDoctorant/edit/responsabiliteDirectionEncadrementDoctorant-edit.component';
import { ResponsabiliteDirectionEncadrementDoctorantComponent } from './view/responsabiliteDirectionEncadrementDoctorant/responsabiliteDirectionEncadrementDoctorant.component';
import { FormationContinueCreateComponent } from './view/formationContinue/create/formationContinue-create.component';
import { FormationContinueListComponent } from './view/formationContinue/list/formationContinue-list.component';
import { FormationContinueViewComponent } from './view/formationContinue/view/formationContinue-view.component';
import { FormationContinueEditComponent } from './view/formationContinue/edit/formationContinue-edit.component';
import { FormationContinueComponent } from './view/formationContinue/formationContinue.component';
import { EtablissementPartenaireCreateComponent } from './view/etablissementPartenaire/create/etablissementPartenaire-create.component';
import { EtablissementPartenaireListComponent } from './view/etablissementPartenaire/list/etablissementPartenaire-list.component';
import { EtablissementPartenaireViewComponent } from './view/etablissementPartenaire/view/etablissementPartenaire-view.component';
import { EtablissementPartenaireEditComponent } from './view/etablissementPartenaire/edit/etablissementPartenaire-edit.component';
import { EtablissementPartenaireComponent } from './view/etablissementPartenaire/etablissementPartenaire.component';
import { ModaliteCreateComponent } from './view/modalite/create/modalite-create.component';
import { ModaliteListComponent } from './view/modalite/list/modalite-list.component';
import { ModaliteViewComponent } from './view/modalite/view/modalite-view.component';
import { ModaliteEditComponent } from './view/modalite/edit/modalite-edit.component';
import { ModaliteComponent } from './view/modalite/modalite.component';
import { DoctorantCreateComponent } from './view/doctorant/create/doctorant-create.component';
import { DoctorantListComponent } from './view/doctorant/list/doctorant-list.component';
import { DoctorantViewComponent } from './view/doctorant/view/doctorant-view.component';
import { DoctorantEditComponent } from './view/doctorant/edit/doctorant-edit.component';
import { DoctorantComponent } from './view/doctorant/doctorant.component';
import { PublicCibleCreateComponent } from './view/publicCible/create/publicCible-create.component';
import { PublicCibleListComponent } from './view/publicCible/list/publicCible-list.component';
import { PublicCibleViewComponent } from './view/publicCible/view/publicCible-view.component';
import { PublicCibleEditComponent } from './view/publicCible/edit/publicCible-edit.component';
import { PublicCibleComponent } from './view/publicCible/publicCible.component';
import { CommunauteSavoirEvaluationRechercheUniversitaireCreateComponent } from './view/communauteSavoirEvaluationRechercheUniversitaire/create/communauteSavoirEvaluationRechercheUniversitaire-create.component';
import { CommunauteSavoirEvaluationRechercheUniversitaireListComponent } from './view/communauteSavoirEvaluationRechercheUniversitaire/list/communauteSavoirEvaluationRechercheUniversitaire-list.component';
import { CommunauteSavoirEvaluationRechercheUniversitaireViewComponent } from './view/communauteSavoirEvaluationRechercheUniversitaire/view/communauteSavoirEvaluationRechercheUniversitaire-view.component';
import { CommunauteSavoirEvaluationRechercheUniversitaireEditComponent } from './view/communauteSavoirEvaluationRechercheUniversitaire/edit/communauteSavoirEvaluationRechercheUniversitaire-edit.component';
import { CommunauteSavoirEvaluationRechercheUniversitaireComponent } from './view/communauteSavoirEvaluationRechercheUniversitaire/communauteSavoirEvaluationRechercheUniversitaire.component';
import { TypeExpertiseCreateComponent } from './view/typeExpertise/create/typeExpertise-create.component';
import { TypeExpertiseListComponent } from './view/typeExpertise/list/typeExpertise-list.component';
import { TypeExpertiseViewComponent } from './view/typeExpertise/view/typeExpertise-view.component';
import { TypeExpertiseEditComponent } from './view/typeExpertise/edit/typeExpertise-edit.component';
import { TypeExpertiseComponent } from './view/typeExpertise/typeExpertise.component';
import { CommunauteSavoirCreateComponent } from './view/communauteSavoir/create/communauteSavoir-create.component';
import { CommunauteSavoirListComponent } from './view/communauteSavoir/list/communauteSavoir-list.component';
import { CommunauteSavoirViewComponent } from './view/communauteSavoir/view/communauteSavoir-view.component';
import { CommunauteSavoirEditComponent } from './view/communauteSavoir/edit/communauteSavoir-edit.component';
import { CommunauteSavoirComponent } from './view/communauteSavoir/communauteSavoir.component';
import { GestionEquipeCreateComponent } from './view/gestionEquipe/create/gestionEquipe-create.component';
import { GestionEquipeListComponent } from './view/gestionEquipe/list/gestionEquipe-list.component';
import { GestionEquipeViewComponent } from './view/gestionEquipe/view/gestionEquipe-view.component';
import { GestionEquipeEditComponent } from './view/gestionEquipe/edit/gestionEquipe-edit.component';
import { GestionEquipeComponent } from './view/gestionEquipe/gestionEquipe.component';
import { FoireQuestionCreateComponent } from './view/foireQuestion/create/foireQuestion-create.component';
import { FoireQuestionListComponent } from './view/foireQuestion/list/foireQuestion-list.component';
import { FoireQuestionViewComponent } from './view/foireQuestion/view/foireQuestion-view.component';
import { FoireQuestionEditComponent } from './view/foireQuestion/edit/foireQuestion-edit.component';
import { FoireQuestionComponent } from './view/foireQuestion/foireQuestion.component';
import { TypeEntiteAdministrativeCreateComponent } from './view/typeEntiteAdministrative/create/typeEntiteAdministrative-create.component';
import { TypeEntiteAdministrativeListComponent } from './view/typeEntiteAdministrative/list/typeEntiteAdministrative-list.component';
import { TypeEntiteAdministrativeViewComponent } from './view/typeEntiteAdministrative/view/typeEntiteAdministrative-view.component';
import { TypeEntiteAdministrativeEditComponent } from './view/typeEntiteAdministrative/edit/typeEntiteAdministrative-edit.component';
import { TypeEntiteAdministrativeComponent } from './view/typeEntiteAdministrative/typeEntiteAdministrative.component';
import { StatutEcoleDoctoraleCreateComponent } from './view/statutEcoleDoctorale/create/statutEcoleDoctorale-create.component';
import { StatutEcoleDoctoraleListComponent } from './view/statutEcoleDoctorale/list/statutEcoleDoctorale-list.component';
import { StatutEcoleDoctoraleViewComponent } from './view/statutEcoleDoctorale/view/statutEcoleDoctorale-view.component';
import { StatutEcoleDoctoraleEditComponent } from './view/statutEcoleDoctorale/edit/statutEcoleDoctorale-edit.component';
import { StatutEcoleDoctoraleComponent } from './view/statutEcoleDoctorale/statutEcoleDoctorale.component';
import { TypeEnseignementDispenseCreateComponent } from './view/typeEnseignementDispense/create/typeEnseignementDispense-create.component';
import { TypeEnseignementDispenseListComponent } from './view/typeEnseignementDispense/list/typeEnseignementDispense-list.component';
import { TypeEnseignementDispenseViewComponent } from './view/typeEnseignementDispense/view/typeEnseignementDispense-view.component';
import { TypeEnseignementDispenseEditComponent } from './view/typeEnseignementDispense/edit/typeEnseignementDispense-edit.component';
import { TypeEnseignementDispenseComponent } from './view/typeEnseignementDispense/typeEnseignementDispense.component';
import { NatureEnseignementCreateComponent } from './view/natureEnseignement/create/natureEnseignement-create.component';
import { NatureEnseignementListComponent } from './view/natureEnseignement/list/natureEnseignement-list.component';
import { NatureEnseignementViewComponent } from './view/natureEnseignement/view/natureEnseignement-view.component';
import { NatureEnseignementEditComponent } from './view/natureEnseignement/edit/natureEnseignement-edit.component';
import { NatureEnseignementComponent } from './view/natureEnseignement/natureEnseignement.component';
import { StatutMasterCreateComponent } from './view/statutMaster/create/statutMaster-create.component';
import { StatutMasterListComponent } from './view/statutMaster/list/statutMaster-list.component';
import { StatutMasterViewComponent } from './view/statutMaster/view/statutMaster-view.component';
import { StatutMasterEditComponent } from './view/statutMaster/edit/statutMaster-edit.component';
import { StatutMasterComponent } from './view/statutMaster/statutMaster.component';
import { BourseCreateComponent } from './view/bourse/create/bourse-create.component';
import { BourseListComponent } from './view/bourse/list/bourse-list.component';
import { BourseViewComponent } from './view/bourse/view/bourse-view.component';
import { BourseEditComponent } from './view/bourse/edit/bourse-edit.component';
import { BourseComponent } from './view/bourse/bourse.component';
import { CommunauteSavoirExpertiseScientifiqueCreateComponent } from './view/communauteSavoirExpertiseScientifique/create/communauteSavoirExpertiseScientifique-create.component';
import { CommunauteSavoirExpertiseScientifiqueListComponent } from './view/communauteSavoirExpertiseScientifique/list/communauteSavoirExpertiseScientifique-list.component';
import { CommunauteSavoirExpertiseScientifiqueViewComponent } from './view/communauteSavoirExpertiseScientifique/view/communauteSavoirExpertiseScientifique-view.component';
import { CommunauteSavoirExpertiseScientifiqueEditComponent } from './view/communauteSavoirExpertiseScientifique/edit/communauteSavoirExpertiseScientifique-edit.component';
import { CommunauteSavoirExpertiseScientifiqueComponent } from './view/communauteSavoirExpertiseScientifique/communauteSavoirExpertiseScientifique.component';
import { NatureEtudeCreateComponent } from './view/natureEtude/create/natureEtude-create.component';
import { NatureEtudeListComponent } from './view/natureEtude/list/natureEtude-list.component';
import { NatureEtudeViewComponent } from './view/natureEtude/view/natureEtude-view.component';
import { NatureEtudeEditComponent } from './view/natureEtude/edit/natureEtude-edit.component';
import { NatureEtudeComponent } from './view/natureEtude/natureEtude.component';
import { MasterCreateComponent } from './view/master/create/master-create.component';
import { MasterListComponent } from './view/master/list/master-list.component';
import { MasterViewComponent } from './view/master/view/master-view.component';
import { MasterEditComponent } from './view/master/edit/master-edit.component';
import { MasterComponent } from './view/master/master.component';
import { ObjetGlobalCreateComponent } from './view/objetGlobal/create/objetGlobal-create.component';
import { ObjetGlobalListComponent } from './view/objetGlobal/list/objetGlobal-list.component';
import { ObjetGlobalViewComponent } from './view/objetGlobal/view/objetGlobal-view.component';
import { ObjetGlobalEditComponent } from './view/objetGlobal/edit/objetGlobal-edit.component';
import { ObjetGlobalComponent } from './view/objetGlobal/objetGlobal.component';
import { TypeInstrumentsEtDispositifsIrdCreateComponent } from './view/typeInstrumentsEtDispositifsIrd/create/typeInstrumentsEtDispositifsIrd-create.component';
import { TypeInstrumentsEtDispositifsIrdListComponent } from './view/typeInstrumentsEtDispositifsIrd/list/typeInstrumentsEtDispositifsIrd-list.component';
import { TypeInstrumentsEtDispositifsIrdViewComponent } from './view/typeInstrumentsEtDispositifsIrd/view/typeInstrumentsEtDispositifsIrd-view.component';
import { TypeInstrumentsEtDispositifsIrdEditComponent } from './view/typeInstrumentsEtDispositifsIrd/edit/typeInstrumentsEtDispositifsIrd-edit.component';
import { TypeInstrumentsEtDispositifsIrdComponent } from './view/typeInstrumentsEtDispositifsIrd/typeInstrumentsEtDispositifsIrd.component';
import { CaracterisationCreateComponent } from './view/caracterisation/create/caracterisation-create.component';
import { CaracterisationListComponent } from './view/caracterisation/list/caracterisation-list.component';
import { CaracterisationViewComponent } from './view/caracterisation/view/caracterisation-view.component';
import { CaracterisationEditComponent } from './view/caracterisation/edit/caracterisation-edit.component';
import { CaracterisationComponent } from './view/caracterisation/caracterisation.component';
import { OrganismeCreateComponent } from './view/organisme/create/organisme-create.component';
import { OrganismeListComponent } from './view/organisme/list/organisme-list.component';
import { OrganismeViewComponent } from './view/organisme/view/organisme-view.component';
import { OrganismeEditComponent } from './view/organisme/edit/organisme-edit.component';
import { OrganismeComponent } from './view/organisme/organisme.component';
import { EvaluationRechercheUniversitaireCreateComponent } from './view/evaluationRechercheUniversitaire/create/evaluationRechercheUniversitaire-create.component';
import { EvaluationRechercheUniversitaireListComponent } from './view/evaluationRechercheUniversitaire/list/evaluationRechercheUniversitaire-list.component';
import { EvaluationRechercheUniversitaireViewComponent } from './view/evaluationRechercheUniversitaire/view/evaluationRechercheUniversitaire-view.component';
import { EvaluationRechercheUniversitaireEditComponent } from './view/evaluationRechercheUniversitaire/edit/evaluationRechercheUniversitaire-edit.component';
import { EvaluationRechercheUniversitaireComponent } from './view/evaluationRechercheUniversitaire/evaluationRechercheUniversitaire.component';
import { TypeInstanceCreateComponent } from './view/typeInstance/create/typeInstance-create.component';
import { TypeInstanceListComponent } from './view/typeInstance/list/typeInstance-list.component';
import { TypeInstanceViewComponent } from './view/typeInstance/view/typeInstance-view.component';
import { TypeInstanceEditComponent } from './view/typeInstance/edit/typeInstance-edit.component';
import { TypeInstanceComponent } from './view/typeInstance/typeInstance.component';
import { NationaliteCreateComponent } from './view/nationalite/create/nationalite-create.component';
import { NationaliteListComponent } from './view/nationalite/list/nationalite-list.component';
import { NationaliteViewComponent } from './view/nationalite/view/nationalite-view.component';
import { NationaliteEditComponent } from './view/nationalite/edit/nationalite-edit.component';
import { NationaliteComponent } from './view/nationalite/nationalite.component';
import { TypeExpertCreateComponent } from './view/typeExpert/create/typeExpert-create.component';
import { TypeExpertListComponent } from './view/typeExpert/list/typeExpert-list.component';
import { TypeExpertViewComponent } from './view/typeExpert/view/typeExpert-view.component';
import { TypeExpertEditComponent } from './view/typeExpert/edit/typeExpert-edit.component';
import { TypeExpertComponent } from './view/typeExpert/typeExpert.component';
import { DisciplineScientifiqueDirectionEncadrementDoctorantCreateComponent } from './view/disciplineScientifiqueDirectionEncadrementDoctorant/create/disciplineScientifiqueDirectionEncadrementDoctorant-create.component';
import { DisciplineScientifiqueDirectionEncadrementDoctorantListComponent } from './view/disciplineScientifiqueDirectionEncadrementDoctorant/list/disciplineScientifiqueDirectionEncadrementDoctorant-list.component';
import { DisciplineScientifiqueDirectionEncadrementDoctorantViewComponent } from './view/disciplineScientifiqueDirectionEncadrementDoctorant/view/disciplineScientifiqueDirectionEncadrementDoctorant-view.component';
import { DisciplineScientifiqueDirectionEncadrementDoctorantEditComponent } from './view/disciplineScientifiqueDirectionEncadrementDoctorant/edit/disciplineScientifiqueDirectionEncadrementDoctorant-edit.component';
import { DisciplineScientifiqueDirectionEncadrementDoctorantComponent } from './view/disciplineScientifiqueDirectionEncadrementDoctorant/disciplineScientifiqueDirectionEncadrementDoctorant.component';
import { FournisseurAppelProjetRechercheCreateComponent } from './view/fournisseurAppelProjetRecherche/create/fournisseurAppelProjetRecherche-create.component';
import { FournisseurAppelProjetRechercheListComponent } from './view/fournisseurAppelProjetRecherche/list/fournisseurAppelProjetRecherche-list.component';
import { FournisseurAppelProjetRechercheViewComponent } from './view/fournisseurAppelProjetRecherche/view/fournisseurAppelProjetRecherche-view.component';
import { FournisseurAppelProjetRechercheEditComponent } from './view/fournisseurAppelProjetRecherche/edit/fournisseurAppelProjetRecherche-edit.component';
import { FournisseurAppelProjetRechercheComponent } from './view/fournisseurAppelProjetRecherche/fournisseurAppelProjetRecherche.component';
import { ObjetGlobalFormationContinueCreateComponent } from './view/objetGlobalFormationContinue/create/objetGlobalFormationContinue-create.component';
import { ObjetGlobalFormationContinueListComponent } from './view/objetGlobalFormationContinue/list/objetGlobalFormationContinue-list.component';
import { ObjetGlobalFormationContinueViewComponent } from './view/objetGlobalFormationContinue/view/objetGlobalFormationContinue-view.component';
import { ObjetGlobalFormationContinueEditComponent } from './view/objetGlobalFormationContinue/edit/objetGlobalFormationContinue-edit.component';
import { ObjetGlobalFormationContinueComponent } from './view/objetGlobalFormationContinue/objetGlobalFormationContinue.component';
import { FinancementDoctorantCreateComponent } from './view/financementDoctorant/create/financementDoctorant-create.component';
import { FinancementDoctorantListComponent } from './view/financementDoctorant/list/financementDoctorant-list.component';
import { FinancementDoctorantViewComponent } from './view/financementDoctorant/view/financementDoctorant-view.component';
import { FinancementDoctorantEditComponent } from './view/financementDoctorant/edit/financementDoctorant-edit.component';
import { FinancementDoctorantComponent } from './view/financementDoctorant/financementDoctorant.component';
import { PaysFormationContinueCreateComponent } from './view/paysFormationContinue/create/paysFormationContinue-create.component';
import { PaysFormationContinueListComponent } from './view/paysFormationContinue/list/paysFormationContinue-list.component';
import { PaysFormationContinueViewComponent } from './view/paysFormationContinue/view/paysFormationContinue-view.component';
import { PaysFormationContinueEditComponent } from './view/paysFormationContinue/edit/paysFormationContinue-edit.component';
import { PaysFormationContinueComponent } from './view/paysFormationContinue/paysFormationContinue.component';
import { EnseignementCreateComponent } from './view/enseignement/create/enseignement-create.component';
import { EnseignementListComponent } from './view/enseignement/list/enseignement-list.component';
import { EnseignementViewComponent } from './view/enseignement/view/enseignement-view.component';
import { EnseignementEditComponent } from './view/enseignement/edit/enseignement-edit.component';
import { EnseignementComponent } from './view/enseignement/enseignement.component';
import { DisciplineScientifiqueExpertiseScientifiqueCreateComponent } from './view/disciplineScientifiqueExpertiseScientifique/create/disciplineScientifiqueExpertiseScientifique-create.component';
import { DisciplineScientifiqueExpertiseScientifiqueListComponent } from './view/disciplineScientifiqueExpertiseScientifique/list/disciplineScientifiqueExpertiseScientifique-list.component';
import { DisciplineScientifiqueExpertiseScientifiqueViewComponent } from './view/disciplineScientifiqueExpertiseScientifique/view/disciplineScientifiqueExpertiseScientifique-view.component';
import { DisciplineScientifiqueExpertiseScientifiqueEditComponent } from './view/disciplineScientifiqueExpertiseScientifique/edit/disciplineScientifiqueExpertiseScientifique-edit.component';
import { DisciplineScientifiqueExpertiseScientifiqueComponent } from './view/disciplineScientifiqueExpertiseScientifique/disciplineScientifiqueExpertiseScientifique.component';
import { ResponsabilitePedagogiqueMasterCreateComponent } from './view/responsabilitePedagogiqueMaster/create/responsabilitePedagogiqueMaster-create.component';
import { ResponsabilitePedagogiqueMasterListComponent } from './view/responsabilitePedagogiqueMaster/list/responsabilitePedagogiqueMaster-list.component';
import { ResponsabilitePedagogiqueMasterViewComponent } from './view/responsabilitePedagogiqueMaster/view/responsabilitePedagogiqueMaster-view.component';
import { ResponsabilitePedagogiqueMasterEditComponent } from './view/responsabilitePedagogiqueMaster/edit/responsabilitePedagogiqueMaster-edit.component';
import { ResponsabilitePedagogiqueMasterComponent } from './view/responsabilitePedagogiqueMaster/responsabilitePedagogiqueMaster.component';
import { EntiteAdministrativeCreateComponent } from './view/entiteAdministrative/create/entiteAdministrative-create.component';
import { EntiteAdministrativeListComponent } from './view/entiteAdministrative/list/entiteAdministrative-list.component';
import { EntiteAdministrativeViewComponent } from './view/entiteAdministrative/view/entiteAdministrative-view.component';
import { EntiteAdministrativeEditComponent } from './view/entiteAdministrative/edit/entiteAdministrative-edit.component';
import { EntiteAdministrativeComponent } from './view/entiteAdministrative/entiteAdministrative.component';
import { EcoleDoctoraleCreateComponent } from './view/ecoleDoctorale/create/ecoleDoctorale-create.component';
import { EcoleDoctoraleListComponent } from './view/ecoleDoctorale/list/ecoleDoctorale-list.component';
import { EcoleDoctoraleViewComponent } from './view/ecoleDoctorale/view/ecoleDoctorale-view.component';
import { EcoleDoctoraleEditComponent } from './view/ecoleDoctorale/edit/ecoleDoctorale-edit.component';
import { EcoleDoctoraleComponent } from './view/ecoleDoctorale/ecoleDoctorale.component';
import { ResponsabilitePedagogiqueEcoleDoctoraleCreateComponent } from './view/responsabilitePedagogiqueEcoleDoctorale/create/responsabilitePedagogiqueEcoleDoctorale-create.component';
import { ResponsabilitePedagogiqueEcoleDoctoraleListComponent } from './view/responsabilitePedagogiqueEcoleDoctorale/list/responsabilitePedagogiqueEcoleDoctorale-list.component';
import { ResponsabilitePedagogiqueEcoleDoctoraleViewComponent } from './view/responsabilitePedagogiqueEcoleDoctorale/view/responsabilitePedagogiqueEcoleDoctorale-view.component';
import { ResponsabilitePedagogiqueEcoleDoctoraleEditComponent } from './view/responsabilitePedagogiqueEcoleDoctorale/edit/responsabilitePedagogiqueEcoleDoctorale-edit.component';
import { ResponsabilitePedagogiqueEcoleDoctoraleComponent } from './view/responsabilitePedagogiqueEcoleDoctorale/responsabilitePedagogiqueEcoleDoctorale.component';
import { EtablissementCultureScientifiqueOutilPedagogiqueCreateComponent } from './view/etablissementCultureScientifiqueOutilPedagogique/create/etablissementCultureScientifiqueOutilPedagogique-create.component';
import { EtablissementCultureScientifiqueOutilPedagogiqueListComponent } from './view/etablissementCultureScientifiqueOutilPedagogique/list/etablissementCultureScientifiqueOutilPedagogique-list.component';
import { EtablissementCultureScientifiqueOutilPedagogiqueViewComponent } from './view/etablissementCultureScientifiqueOutilPedagogique/view/etablissementCultureScientifiqueOutilPedagogique-view.component';
import { EtablissementCultureScientifiqueOutilPedagogiqueEditComponent } from './view/etablissementCultureScientifiqueOutilPedagogique/edit/etablissementCultureScientifiqueOutilPedagogique-edit.component';
import { EtablissementCultureScientifiqueOutilPedagogiqueComponent } from './view/etablissementCultureScientifiqueOutilPedagogique/etablissementCultureScientifiqueOutilPedagogique.component';
import { EncadrementEtudiantCreateComponent } from './view/encadrementEtudiant/create/encadrementEtudiant-create.component';
import { EncadrementEtudiantListComponent } from './view/encadrementEtudiant/list/encadrementEtudiant-list.component';
import { EncadrementEtudiantViewComponent } from './view/encadrementEtudiant/view/encadrementEtudiant-view.component';
import { EncadrementEtudiantEditComponent } from './view/encadrementEtudiant/edit/encadrementEtudiant-edit.component';
import { EncadrementEtudiantComponent } from './view/encadrementEtudiant/encadrementEtudiant.component';
import { OutilFormationContinueCreateComponent } from './view/outilFormationContinue/create/outilFormationContinue-create.component';
import { OutilFormationContinueListComponent } from './view/outilFormationContinue/list/outilFormationContinue-list.component';
import { OutilFormationContinueViewComponent } from './view/outilFormationContinue/view/outilFormationContinue-view.component';
import { OutilFormationContinueEditComponent } from './view/outilFormationContinue/edit/outilFormationContinue-edit.component';
import { OutilFormationContinueComponent } from './view/outilFormationContinue/outilFormationContinue.component';
import { IdentifiantRechercheCreateComponent } from './view/identifiantRecherche/create/identifiantRecherche-create.component';
import { IdentifiantRechercheListComponent } from './view/identifiantRecherche/list/identifiantRecherche-list.component';
import { IdentifiantRechercheViewComponent } from './view/identifiantRecherche/view/identifiantRecherche-view.component';
import { IdentifiantRechercheEditComponent } from './view/identifiantRecherche/edit/identifiantRecherche-edit.component';
import { IdentifiantRechercheComponent } from './view/identifiantRecherche/identifiantRecherche.component';
import { DirectionEncadrementDoctorantCreateComponent } from './view/directionEncadrementDoctorant/create/directionEncadrementDoctorant-create.component';
import { DirectionEncadrementDoctorantListComponent } from './view/directionEncadrementDoctorant/list/directionEncadrementDoctorant-list.component';
import { DirectionEncadrementDoctorantViewComponent } from './view/directionEncadrementDoctorant/view/directionEncadrementDoctorant-view.component';
import { DirectionEncadrementDoctorantEditComponent } from './view/directionEncadrementDoctorant/edit/directionEncadrementDoctorant-edit.component';
import { DirectionEncadrementDoctorantComponent } from './view/directionEncadrementDoctorant/directionEncadrementDoctorant.component';
import { GradeCreateComponent } from './view/grade/create/grade-create.component';
import { GradeListComponent } from './view/grade/list/grade-list.component';
import { GradeViewComponent } from './view/grade/view/grade-view.component';
import { GradeEditComponent } from './view/grade/edit/grade-edit.component';
import { GradeComponent } from './view/grade/grade.component';
import { DisciplineScientifiqueEvaluationRechercheUniversitaireCreateComponent } from './view/disciplineScientifiqueEvaluationRechercheUniversitaire/create/disciplineScientifiqueEvaluationRechercheUniversitaire-create.component';
import { DisciplineScientifiqueEvaluationRechercheUniversitaireListComponent } from './view/disciplineScientifiqueEvaluationRechercheUniversitaire/list/disciplineScientifiqueEvaluationRechercheUniversitaire-list.component';
import { DisciplineScientifiqueEvaluationRechercheUniversitaireViewComponent } from './view/disciplineScientifiqueEvaluationRechercheUniversitaire/view/disciplineScientifiqueEvaluationRechercheUniversitaire-view.component';
import { DisciplineScientifiqueEvaluationRechercheUniversitaireEditComponent } from './view/disciplineScientifiqueEvaluationRechercheUniversitaire/edit/disciplineScientifiqueEvaluationRechercheUniversitaire-edit.component';
import { DisciplineScientifiqueEvaluationRechercheUniversitaireComponent } from './view/disciplineScientifiqueEvaluationRechercheUniversitaire/disciplineScientifiqueEvaluationRechercheUniversitaire.component';
import { CommissionScientifiqueCreateComponent } from './view/commissionScientifique/create/commissionScientifique-create.component';
import { CommissionScientifiqueListComponent } from './view/commissionScientifique/list/commissionScientifique-list.component';
import { CommissionScientifiqueViewComponent } from './view/commissionScientifique/view/commissionScientifique-view.component';
import { CommissionScientifiqueEditComponent } from './view/commissionScientifique/edit/commissionScientifique-edit.component';
import { CommissionScientifiqueComponent } from './view/commissionScientifique/commissionScientifique.component';
import { EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicCreateComponent } from './view/etablissementCultureScientifiqueRecontreGrandPublicJeunePublic/create/etablissementCultureScientifiqueRecontreGrandPublicJeunePublic-create.component';
import { EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicListComponent } from './view/etablissementCultureScientifiqueRecontreGrandPublicJeunePublic/list/etablissementCultureScientifiqueRecontreGrandPublicJeunePublic-list.component';
import { EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicViewComponent } from './view/etablissementCultureScientifiqueRecontreGrandPublicJeunePublic/view/etablissementCultureScientifiqueRecontreGrandPublicJeunePublic-view.component';
import { EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicEditComponent } from './view/etablissementCultureScientifiqueRecontreGrandPublicJeunePublic/edit/etablissementCultureScientifiqueRecontreGrandPublicJeunePublic-edit.component';
import { EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicComponent } from './view/etablissementCultureScientifiqueRecontreGrandPublicJeunePublic/etablissementCultureScientifiqueRecontreGrandPublicJeunePublic.component';
import { EtablissementCreateComponent } from './view/etablissement/create/etablissement-create.component';
import { EtablissementListComponent } from './view/etablissement/list/etablissement-list.component';
import { EtablissementViewComponent } from './view/etablissement/view/etablissement-view.component';
import { EtablissementEditComponent } from './view/etablissement/edit/etablissement-edit.component';
import { EtablissementComponent } from './view/etablissement/etablissement.component';
import { CommunauteSavoirDirectionEncadrementDoctorantCreateComponent } from './view/communauteSavoirDirectionEncadrementDoctorant/create/communauteSavoirDirectionEncadrementDoctorant-create.component';
import { CommunauteSavoirDirectionEncadrementDoctorantListComponent } from './view/communauteSavoirDirectionEncadrementDoctorant/list/communauteSavoirDirectionEncadrementDoctorant-list.component';
import { CommunauteSavoirDirectionEncadrementDoctorantViewComponent } from './view/communauteSavoirDirectionEncadrementDoctorant/view/communauteSavoirDirectionEncadrementDoctorant-view.component';
import { CommunauteSavoirDirectionEncadrementDoctorantEditComponent } from './view/communauteSavoirDirectionEncadrementDoctorant/edit/communauteSavoirDirectionEncadrementDoctorant-edit.component';
import { CommunauteSavoirDirectionEncadrementDoctorantComponent } from './view/communauteSavoirDirectionEncadrementDoctorant/communauteSavoirDirectionEncadrementDoctorant.component';
import { PublicCibleCultureScientifiqueRecontreGrandPublicCreateComponent } from './view/publicCibleCultureScientifiqueRecontreGrandPublic/create/publicCibleCultureScientifiqueRecontreGrandPublic-create.component';
import { PublicCibleCultureScientifiqueRecontreGrandPublicListComponent } from './view/publicCibleCultureScientifiqueRecontreGrandPublic/list/publicCibleCultureScientifiqueRecontreGrandPublic-list.component';
import { PublicCibleCultureScientifiqueRecontreGrandPublicViewComponent } from './view/publicCibleCultureScientifiqueRecontreGrandPublic/view/publicCibleCultureScientifiqueRecontreGrandPublic-view.component';
import { PublicCibleCultureScientifiqueRecontreGrandPublicEditComponent } from './view/publicCibleCultureScientifiqueRecontreGrandPublic/edit/publicCibleCultureScientifiqueRecontreGrandPublic-edit.component';
import { PublicCibleCultureScientifiqueRecontreGrandPublicComponent } from './view/publicCibleCultureScientifiqueRecontreGrandPublic/publicCibleCultureScientifiqueRecontreGrandPublic.component';
import { CommunauteSavoirProjetActiviteRechercheCreateComponent } from './view/communauteSavoirProjetActiviteRecherche/create/communauteSavoirProjetActiviteRecherche-create.component';
import { CommunauteSavoirProjetActiviteRechercheListComponent } from './view/communauteSavoirProjetActiviteRecherche/list/communauteSavoirProjetActiviteRecherche-list.component';
import { CommunauteSavoirProjetActiviteRechercheViewComponent } from './view/communauteSavoirProjetActiviteRecherche/view/communauteSavoirProjetActiviteRecherche-view.component';
import { CommunauteSavoirProjetActiviteRechercheEditComponent } from './view/communauteSavoirProjetActiviteRecherche/edit/communauteSavoirProjetActiviteRecherche-edit.component';
import { CommunauteSavoirProjetActiviteRechercheComponent } from './view/communauteSavoirProjetActiviteRecherche/communauteSavoirProjetActiviteRecherche.component';
import { PaysProjetRechercheCreateComponent } from './view/paysProjetRecherche/create/paysProjetRecherche-create.component';
import { PaysProjetRechercheListComponent } from './view/paysProjetRecherche/list/paysProjetRecherche-list.component';
import { PaysProjetRechercheViewComponent } from './view/paysProjetRecherche/view/paysProjetRecherche-view.component';
import { PaysProjetRechercheEditComponent } from './view/paysProjetRecherche/edit/paysProjetRecherche-edit.component';
import { PaysProjetRechercheComponent } from './view/paysProjetRecherche/paysProjetRecherche.component';
import { DomaineScientifiqueChercheurCreateComponent } from './view/domaineScientifiqueChercheur/create/domaineScientifiqueChercheur-create.component';
import { DomaineScientifiqueChercheurListComponent } from './view/domaineScientifiqueChercheur/list/domaineScientifiqueChercheur-list.component';
import { DomaineScientifiqueChercheurViewComponent } from './view/domaineScientifiqueChercheur/view/domaineScientifiqueChercheur-view.component';
import { DomaineScientifiqueChercheurEditComponent } from './view/domaineScientifiqueChercheur/edit/domaineScientifiqueChercheur-edit.component';
import { DomaineScientifiqueChercheurComponent } from './view/domaineScientifiqueChercheur/domaineScientifiqueChercheur.component';
import { InstrumentsEtDispositifsIrdChercheurCreateComponent } from './view/instrumentsEtDispositifsIrdChercheur/create/instrumentsEtDispositifsIrdChercheur-create.component';
import { InstrumentsEtDispositifsIrdChercheurListComponent } from './view/instrumentsEtDispositifsIrdChercheur/list/instrumentsEtDispositifsIrdChercheur-list.component';
import { InstrumentsEtDispositifsIrdChercheurViewComponent } from './view/instrumentsEtDispositifsIrdChercheur/view/instrumentsEtDispositifsIrdChercheur-view.component';
import { InstrumentsEtDispositifsIrdChercheurEditComponent } from './view/instrumentsEtDispositifsIrdChercheur/edit/instrumentsEtDispositifsIrdChercheur-edit.component';
import { InstrumentsEtDispositifsIrdChercheurComponent } from './view/instrumentsEtDispositifsIrdChercheur/instrumentsEtDispositifsIrdChercheur.component';
import { PubliquePrincipalConcemeFormationContinueCreateComponent } from './view/publiquePrincipalConcemeFormationContinue/create/publiquePrincipalConcemeFormationContinue-create.component';
import { PubliquePrincipalConcemeFormationContinueListComponent } from './view/publiquePrincipalConcemeFormationContinue/list/publiquePrincipalConcemeFormationContinue-list.component';
import { PubliquePrincipalConcemeFormationContinueViewComponent } from './view/publiquePrincipalConcemeFormationContinue/view/publiquePrincipalConcemeFormationContinue-view.component';
import { PubliquePrincipalConcemeFormationContinueEditComponent } from './view/publiquePrincipalConcemeFormationContinue/edit/publiquePrincipalConcemeFormationContinue-edit.component';
import { PubliquePrincipalConcemeFormationContinueComponent } from './view/publiquePrincipalConcemeFormationContinue/publiquePrincipalConcemeFormationContinue.component';
import { TypeOutilCultureScientifiqueOutilPedagogiqueCreateComponent } from './view/typeOutilCultureScientifiqueOutilPedagogique/create/typeOutilCultureScientifiqueOutilPedagogique-create.component';
import { TypeOutilCultureScientifiqueOutilPedagogiqueListComponent } from './view/typeOutilCultureScientifiqueOutilPedagogique/list/typeOutilCultureScientifiqueOutilPedagogique-list.component';
import { TypeOutilCultureScientifiqueOutilPedagogiqueViewComponent } from './view/typeOutilCultureScientifiqueOutilPedagogique/view/typeOutilCultureScientifiqueOutilPedagogique-view.component';
import { TypeOutilCultureScientifiqueOutilPedagogiqueEditComponent } from './view/typeOutilCultureScientifiqueOutilPedagogique/edit/typeOutilCultureScientifiqueOutilPedagogique-edit.component';
import { TypeOutilCultureScientifiqueOutilPedagogiqueComponent } from './view/typeOutilCultureScientifiqueOutilPedagogique/typeOutilCultureScientifiqueOutilPedagogique.component';
import { ContexteCreateComponent } from './view/contexte/create/contexte-create.component';
import { ContexteListComponent } from './view/contexte/list/contexte-list.component';
import { ContexteViewComponent } from './view/contexte/view/contexte-view.component';
import { ContexteEditComponent } from './view/contexte/edit/contexte-edit.component';
import { ContexteComponent } from './view/contexte/contexte.component';
import { ModaliteEtudeEnseignementCreateComponent } from './view/modaliteEtudeEnseignement/create/modaliteEtudeEnseignement-create.component';
import { ModaliteEtudeEnseignementListComponent } from './view/modaliteEtudeEnseignement/list/modaliteEtudeEnseignement-list.component';
import { ModaliteEtudeEnseignementViewComponent } from './view/modaliteEtudeEnseignement/view/modaliteEtudeEnseignement-view.component';
import { ModaliteEtudeEnseignementEditComponent } from './view/modaliteEtudeEnseignement/edit/modaliteEtudeEnseignement-edit.component';
import { ModaliteEtudeEnseignementComponent } from './view/modaliteEtudeEnseignement/modaliteEtudeEnseignement.component';
import { TypeParticipationCreateComponent } from './view/typeParticipation/create/typeParticipation-create.component';
import { TypeParticipationListComponent } from './view/typeParticipation/list/typeParticipation-list.component';
import { TypeParticipationViewComponent } from './view/typeParticipation/view/typeParticipation-view.component';
import { TypeParticipationEditComponent } from './view/typeParticipation/edit/typeParticipation-edit.component';
import { TypeParticipationComponent } from './view/typeParticipation/typeParticipation.component';
import { ResponsabiliteEncadrementEtudiantCreateComponent } from './view/responsabiliteEncadrementEtudiant/create/responsabiliteEncadrementEtudiant-create.component';
import { ResponsabiliteEncadrementEtudiantListComponent } from './view/responsabiliteEncadrementEtudiant/list/responsabiliteEncadrementEtudiant-list.component';
import { ResponsabiliteEncadrementEtudiantViewComponent } from './view/responsabiliteEncadrementEtudiant/view/responsabiliteEncadrementEtudiant-view.component';
import { ResponsabiliteEncadrementEtudiantEditComponent } from './view/responsabiliteEncadrementEtudiant/edit/responsabiliteEncadrementEtudiant-edit.component';
import { ResponsabiliteEncadrementEtudiantComponent } from './view/responsabiliteEncadrementEtudiant/responsabiliteEncadrementEtudiant.component';
import { PaysCreateComponent } from './view/pays/create/pays-create.component';
import { PaysListComponent } from './view/pays/list/pays-list.component';
import { PaysViewComponent } from './view/pays/view/pays-view.component';
import { PaysEditComponent } from './view/pays/edit/pays-edit.component';
import { PaysComponent } from './view/pays/pays.component';
import { DisciplineScientifiqueConseilEtComiteScientifiqueCreateComponent } from './view/disciplineScientifiqueConseilEtComiteScientifique/create/disciplineScientifiqueConseilEtComiteScientifique-create.component';
import { DisciplineScientifiqueConseilEtComiteScientifiqueListComponent } from './view/disciplineScientifiqueConseilEtComiteScientifique/list/disciplineScientifiqueConseilEtComiteScientifique-list.component';
import { DisciplineScientifiqueConseilEtComiteScientifiqueViewComponent } from './view/disciplineScientifiqueConseilEtComiteScientifique/view/disciplineScientifiqueConseilEtComiteScientifique-view.component';
import { DisciplineScientifiqueConseilEtComiteScientifiqueEditComponent } from './view/disciplineScientifiqueConseilEtComiteScientifique/edit/disciplineScientifiqueConseilEtComiteScientifique-edit.component';
import { DisciplineScientifiqueConseilEtComiteScientifiqueComponent } from './view/disciplineScientifiqueConseilEtComiteScientifique/disciplineScientifiqueConseilEtComiteScientifique.component';
import { PaysCultureScientifiqueRecontreGrandPublicJeunePublicCreateComponent } from './view/paysCultureScientifiqueRecontreGrandPublicJeunePublic/create/paysCultureScientifiqueRecontreGrandPublicJeunePublic-create.component';
import { PaysCultureScientifiqueRecontreGrandPublicJeunePublicListComponent } from './view/paysCultureScientifiqueRecontreGrandPublicJeunePublic/list/paysCultureScientifiqueRecontreGrandPublicJeunePublic-list.component';
import { PaysCultureScientifiqueRecontreGrandPublicJeunePublicViewComponent } from './view/paysCultureScientifiqueRecontreGrandPublicJeunePublic/view/paysCultureScientifiqueRecontreGrandPublicJeunePublic-view.component';
import { PaysCultureScientifiqueRecontreGrandPublicJeunePublicEditComponent } from './view/paysCultureScientifiqueRecontreGrandPublicJeunePublic/edit/paysCultureScientifiqueRecontreGrandPublicJeunePublic-edit.component';
import { PaysCultureScientifiqueRecontreGrandPublicJeunePublicComponent } from './view/paysCultureScientifiqueRecontreGrandPublicJeunePublic/paysCultureScientifiqueRecontreGrandPublicJeunePublic.component';
import { DisciplineScientifiqueEncadrementEtudiantCreateComponent } from './view/disciplineScientifiqueEncadrementEtudiant/create/disciplineScientifiqueEncadrementEtudiant-create.component';
import { DisciplineScientifiqueEncadrementEtudiantListComponent } from './view/disciplineScientifiqueEncadrementEtudiant/list/disciplineScientifiqueEncadrementEtudiant-list.component';
import { DisciplineScientifiqueEncadrementEtudiantViewComponent } from './view/disciplineScientifiqueEncadrementEtudiant/view/disciplineScientifiqueEncadrementEtudiant-view.component';
import { DisciplineScientifiqueEncadrementEtudiantEditComponent } from './view/disciplineScientifiqueEncadrementEtudiant/edit/disciplineScientifiqueEncadrementEtudiant-edit.component';
import { DisciplineScientifiqueEncadrementEtudiantComponent } from './view/disciplineScientifiqueEncadrementEtudiant/disciplineScientifiqueEncadrementEtudiant.component';
import { CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueCreateComponent } from './view/caracterisationDeveloppementDeSavoirEtInnovationScientifique/create/caracterisationDeveloppementDeSavoirEtInnovationScientifique-create.component';
import { CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueListComponent } from './view/caracterisationDeveloppementDeSavoirEtInnovationScientifique/list/caracterisationDeveloppementDeSavoirEtInnovationScientifique-list.component';
import { CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueViewComponent } from './view/caracterisationDeveloppementDeSavoirEtInnovationScientifique/view/caracterisationDeveloppementDeSavoirEtInnovationScientifique-view.component';
import { CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueEditComponent } from './view/caracterisationDeveloppementDeSavoirEtInnovationScientifique/edit/caracterisationDeveloppementDeSavoirEtInnovationScientifique-edit.component';
import { CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueComponent } from './view/caracterisationDeveloppementDeSavoirEtInnovationScientifique/caracterisationDeveloppementDeSavoirEtInnovationScientifique.component';
import { NiveauEtudeCreateComponent } from './view/niveauEtude/create/niveauEtude-create.component';
import { NiveauEtudeListComponent } from './view/niveauEtude/list/niveauEtude-list.component';
import { NiveauEtudeViewComponent } from './view/niveauEtude/view/niveauEtude-view.component';
import { NiveauEtudeEditComponent } from './view/niveauEtude/edit/niveauEtude-edit.component';
import { NiveauEtudeComponent } from './view/niveauEtude/niveauEtude.component';
import { VilleCreateComponent } from './view/ville/create/ville-create.component';
import { VilleListComponent } from './view/ville/list/ville-list.component';
import { VilleViewComponent } from './view/ville/view/ville-view.component';
import { VilleEditComponent } from './view/ville/edit/ville-edit.component';
import { VilleComponent } from './view/ville/ville.component';
import { MasterInternationalCreateComponent } from './view/masterInternational/create/masterInternational-create.component';
import { MasterInternationalListComponent } from './view/masterInternational/list/masterInternational-list.component';
import { MasterInternationalViewComponent } from './view/masterInternational/view/masterInternational-view.component';
import { MasterInternationalEditComponent } from './view/masterInternational/edit/masterInternational-edit.component';
import { MasterInternationalComponent } from './view/masterInternational/masterInternational.component';
import { PubliquePrincipalCreateComponent } from './view/publiquePrincipal/create/publiquePrincipal-create.component';
import { PubliquePrincipalListComponent } from './view/publiquePrincipal/list/publiquePrincipal-list.component';
import { PubliquePrincipalViewComponent } from './view/publiquePrincipal/view/publiquePrincipal-view.component';
import { PubliquePrincipalEditComponent } from './view/publiquePrincipal/edit/publiquePrincipal-edit.component';
import { PubliquePrincipalComponent } from './view/publiquePrincipal/publiquePrincipal.component';
import { DepartementScientifiqueCreateComponent } from './view/departementScientifique/create/departementScientifique-create.component';
import { DepartementScientifiqueListComponent } from './view/departementScientifique/list/departementScientifique-list.component';
import { DepartementScientifiqueViewComponent } from './view/departementScientifique/view/departementScientifique-view.component';
import { DepartementScientifiqueEditComponent } from './view/departementScientifique/edit/departementScientifique-edit.component';
import { DepartementScientifiqueComponent } from './view/departementScientifique/departementScientifique.component';
import { FormatRencontreCreateComponent } from './view/formatRencontre/create/formatRencontre-create.component';
import { FormatRencontreListComponent } from './view/formatRencontre/list/formatRencontre-list.component';
import { FormatRencontreViewComponent } from './view/formatRencontre/view/formatRencontre-view.component';
import { FormatRencontreEditComponent } from './view/formatRencontre/edit/formatRencontre-edit.component';
import { FormatRencontreComponent } from './view/formatRencontre/formatRencontre.component';
import { ChercheurCreateComponent } from './view/chercheur/create/chercheur-create.component';
import { ChercheurListComponent } from './view/chercheur/list/chercheur-list.component';
import { ChercheurViewComponent } from './view/chercheur/view/chercheur-view.component';
import { ChercheurEditComponent } from './view/chercheur/edit/chercheur-edit.component';
import { ChercheurComponent } from './view/chercheur/chercheur.component';
import { ObjetGlobalDeFormationContinueCreateComponent } from './view/objetGlobalDeFormationContinue/create/objetGlobalDeFormationContinue-create.component';
import { ObjetGlobalDeFormationContinueListComponent } from './view/objetGlobalDeFormationContinue/list/objetGlobalDeFormationContinue-list.component';
import { ObjetGlobalDeFormationContinueViewComponent } from './view/objetGlobalDeFormationContinue/view/objetGlobalDeFormationContinue-view.component';
import { ObjetGlobalDeFormationContinueEditComponent } from './view/objetGlobalDeFormationContinue/edit/objetGlobalDeFormationContinue-edit.component';
import { ObjetGlobalDeFormationContinueComponent } from './view/objetGlobalDeFormationContinue/objetGlobalDeFormationContinue.component';
import { ExpertiseScientifiqueCreateComponent } from './view/expertiseScientifique/create/expertiseScientifique-create.component';
import { ExpertiseScientifiqueListComponent } from './view/expertiseScientifique/list/expertiseScientifique-list.component';
import { ExpertiseScientifiqueViewComponent } from './view/expertiseScientifique/view/expertiseScientifique-view.component';
import { ExpertiseScientifiqueEditComponent } from './view/expertiseScientifique/edit/expertiseScientifique-edit.component';
import { ExpertiseScientifiqueComponent } from './view/expertiseScientifique/expertiseScientifique.component';
import { PublicCibleCultureScientifiqueOutilPedagogiqueCreateComponent } from './view/publicCibleCultureScientifiqueOutilPedagogique/create/publicCibleCultureScientifiqueOutilPedagogique-create.component';
import { PublicCibleCultureScientifiqueOutilPedagogiqueListComponent } from './view/publicCibleCultureScientifiqueOutilPedagogique/list/publicCibleCultureScientifiqueOutilPedagogique-list.component';
import { PublicCibleCultureScientifiqueOutilPedagogiqueViewComponent } from './view/publicCibleCultureScientifiqueOutilPedagogique/view/publicCibleCultureScientifiqueOutilPedagogique-view.component';
import { PublicCibleCultureScientifiqueOutilPedagogiqueEditComponent } from './view/publicCibleCultureScientifiqueOutilPedagogique/edit/publicCibleCultureScientifiqueOutilPedagogique-edit.component';
import { PublicCibleCultureScientifiqueOutilPedagogiqueComponent } from './view/publicCibleCultureScientifiqueOutilPedagogique/publicCibleCultureScientifiqueOutilPedagogique.component';
import { ContinentCreateComponent } from './view/continent/create/continent-create.component';
import { ContinentListComponent } from './view/continent/list/continent-list.component';
import { ContinentViewComponent } from './view/continent/view/continent-view.component';
import { ContinentEditComponent } from './view/continent/edit/continent-edit.component';
import { ContinentComponent } from './view/continent/continent.component';
import { TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueCreateComponent } from './view/typeSavoirDeveloppementDeSavoirEtInnovationScientifique/create/typeSavoirDeveloppementDeSavoirEtInnovationScientifique-create.component';
import { TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueListComponent } from './view/typeSavoirDeveloppementDeSavoirEtInnovationScientifique/list/typeSavoirDeveloppementDeSavoirEtInnovationScientifique-list.component';
import { TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueViewComponent } from './view/typeSavoirDeveloppementDeSavoirEtInnovationScientifique/view/typeSavoirDeveloppementDeSavoirEtInnovationScientifique-view.component';
import { TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueEditComponent } from './view/typeSavoirDeveloppementDeSavoirEtInnovationScientifique/edit/typeSavoirDeveloppementDeSavoirEtInnovationScientifique-edit.component';
import { TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueComponent } from './view/typeSavoirDeveloppementDeSavoirEtInnovationScientifique/typeSavoirDeveloppementDeSavoirEtInnovationScientifique.component';
import { NiveauEtudeEnseignementCreateComponent } from './view/niveauEtudeEnseignement/create/niveauEtudeEnseignement-create.component';
import { NiveauEtudeEnseignementListComponent } from './view/niveauEtudeEnseignement/list/niveauEtudeEnseignement-list.component';
import { NiveauEtudeEnseignementViewComponent } from './view/niveauEtudeEnseignement/view/niveauEtudeEnseignement-view.component';
import { NiveauEtudeEnseignementEditComponent } from './view/niveauEtudeEnseignement/edit/niveauEtudeEnseignement-edit.component';
import { NiveauEtudeEnseignementComponent } from './view/niveauEtudeEnseignement/niveauEtudeEnseignement.component';
import { ModaliteFormationContinueCreateComponent } from './view/modaliteFormationContinue/create/modaliteFormationContinue-create.component';
import { ModaliteFormationContinueListComponent } from './view/modaliteFormationContinue/list/modaliteFormationContinue-list.component';
import { ModaliteFormationContinueViewComponent } from './view/modaliteFormationContinue/view/modaliteFormationContinue-view.component';
import { ModaliteFormationContinueEditComponent } from './view/modaliteFormationContinue/edit/modaliteFormationContinue-edit.component';
import { ModaliteFormationContinueComponent } from './view/modaliteFormationContinue/modaliteFormationContinue.component';
import { SexeCreateComponent } from './view/sexe/create/sexe-create.component';
import { SexeListComponent } from './view/sexe/list/sexe-list.component';
import { SexeViewComponent } from './view/sexe/view/sexe-view.component';
import { SexeEditComponent } from './view/sexe/edit/sexe-edit.component';
import { SexeComponent } from './view/sexe/sexe.component';
import { DomaineScientifiqueCreateComponent } from './view/domaineScientifique/create/domaineScientifique-create.component';
import { DomaineScientifiqueListComponent } from './view/domaineScientifique/list/domaineScientifique-list.component';
import { DomaineScientifiqueViewComponent } from './view/domaineScientifique/view/domaineScientifique-view.component';
import { DomaineScientifiqueEditComponent } from './view/domaineScientifique/edit/domaineScientifique-edit.component';
import { DomaineScientifiqueComponent } from './view/domaineScientifique/domaineScientifique.component';
import { ModeDiffusionCreateComponent } from './view/modeDiffusion/create/modeDiffusion-create.component';
import { ModeDiffusionListComponent } from './view/modeDiffusion/list/modeDiffusion-list.component';
import { ModeDiffusionViewComponent } from './view/modeDiffusion/view/modeDiffusion-view.component';
import { ModeDiffusionEditComponent } from './view/modeDiffusion/edit/modeDiffusion-edit.component';
import { ModeDiffusionComponent } from './view/modeDiffusion/modeDiffusion.component';
import { EtablissementProjetCreateComponent } from './view/etablissementProjet/create/etablissementProjet-create.component';
import { EtablissementProjetListComponent } from './view/etablissementProjet/list/etablissementProjet-list.component';
import { EtablissementProjetViewComponent } from './view/etablissementProjet/view/etablissementProjet-view.component';
import { EtablissementProjetEditComponent } from './view/etablissementProjet/edit/etablissementProjet-edit.component';
import { EtablissementProjetComponent } from './view/etablissementProjet/etablissementProjet.component';
import { EnjeuxIrdCreateComponent } from './view/enjeuxIrd/create/enjeuxIrd-create.component';
import { EnjeuxIrdListComponent } from './view/enjeuxIrd/list/enjeuxIrd-list.component';
import { EnjeuxIrdViewComponent } from './view/enjeuxIrd/view/enjeuxIrd-view.component';
import { EnjeuxIrdEditComponent } from './view/enjeuxIrd/edit/enjeuxIrd-edit.component';
import { EnjeuxIrdComponent } from './view/enjeuxIrd/enjeuxIrd.component';
import { CultureScientifiqueRecontreGrandPublicJeunePublicCreateComponent } from './view/cultureScientifiqueRecontreGrandPublicJeunePublic/create/cultureScientifiqueRecontreGrandPublicJeunePublic-create.component';
import { CultureScientifiqueRecontreGrandPublicJeunePublicListComponent } from './view/cultureScientifiqueRecontreGrandPublicJeunePublic/list/cultureScientifiqueRecontreGrandPublicJeunePublic-list.component';
import { CultureScientifiqueRecontreGrandPublicJeunePublicViewComponent } from './view/cultureScientifiqueRecontreGrandPublicJeunePublic/view/cultureScientifiqueRecontreGrandPublicJeunePublic-view.component';
import { CultureScientifiqueRecontreGrandPublicJeunePublicEditComponent } from './view/cultureScientifiqueRecontreGrandPublicJeunePublic/edit/cultureScientifiqueRecontreGrandPublicJeunePublic-edit.component';
import { CultureScientifiqueRecontreGrandPublicJeunePublicComponent } from './view/cultureScientifiqueRecontreGrandPublicJeunePublic/cultureScientifiqueRecontreGrandPublicJeunePublic.component';
import { PaysTypeOutilCultureScientifiqueOutilPedagogiqueCreateComponent } from './view/paysTypeOutilCultureScientifiqueOutilPedagogique/create/paysTypeOutilCultureScientifiqueOutilPedagogique-create.component';
import { PaysTypeOutilCultureScientifiqueOutilPedagogiqueListComponent } from './view/paysTypeOutilCultureScientifiqueOutilPedagogique/list/paysTypeOutilCultureScientifiqueOutilPedagogique-list.component';
import { PaysTypeOutilCultureScientifiqueOutilPedagogiqueViewComponent } from './view/paysTypeOutilCultureScientifiqueOutilPedagogique/view/paysTypeOutilCultureScientifiqueOutilPedagogique-view.component';
import { PaysTypeOutilCultureScientifiqueOutilPedagogiqueEditComponent } from './view/paysTypeOutilCultureScientifiqueOutilPedagogique/edit/paysTypeOutilCultureScientifiqueOutilPedagogique-edit.component';
import { PaysTypeOutilCultureScientifiqueOutilPedagogiqueComponent } from './view/paysTypeOutilCultureScientifiqueOutilPedagogique/paysTypeOutilCultureScientifiqueOutilPedagogique.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AccessDeniedComponent } from './auth/access-denied/access-denied.component';
import { UserListComponent } from './view/user-list/user-list.component';
import { UserService } from './controller/service/user.service';
import { RoleService } from './controller/service/role.service';
import { HomeComponent } from './demo/view/home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    InputSwitchModule,
    FormsModule,
    SharedModule,
    AppCodeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CodeEditorModule.forRoot(),
    AccordionModule,
    AutoCompleteModule,
    AvatarModule,
    AvatarGroupModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    CarouselModule,
    CascadeSelectModule,
    ChartModule,
    AppRoutingModule,
    CheckboxModule,
    ChipModule,
    ChipsModule,
    CodeHighlighterModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    ColorPickerModule,
    ContextMenuModule,
    DataViewModule,
    DialogModule,
    DividerModule,
    DropdownModule,
    FieldsetModule,
    FileUploadModule,
    FullCalendarModule,
    GalleriaModule,
    InplaceModule,
    InputNumberModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    KnobModule,
    LightboxModule,
    ListboxModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    MessageModule,
    MessagesModule,
    MultiSelectModule,
    OrderListModule,
    OrganizationChartModule,
    OverlayPanelModule,
    PaginatorModule,
    PanelModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    PasswordModule,
    PickListModule,
    ProgressBarModule,
    RadioButtonModule,
    ReactiveFormsModule,
    RatingModule,
    RippleModule,
    ScrollPanelModule,
    ScrollTopModule,
    SelectButtonModule,
    SidebarModule,
    SkeletonModule,
    SlideMenuModule,
    SliderModule,
    SplitButtonModule,
    SplitterModule,
    StepsModule,
    TableModule,
    TabMenuModule,
    TabViewModule,
    TagModule,
    TerminalModule,
    TimelineModule,
    TieredMenuModule,
    ToastModule,
    ToggleButtonModule,
    ToolbarModule,
    TooltipModule,
    TreeModule,
    TreeTableModule,
    VirtualScrollerModule,
    DynamicDialogModule,
  ],
  declarations: [
    EtablissementEnseignementCreateComponent,
    EtablissementEnseignementListComponent,
    EtablissementEnseignementViewComponent,
    EtablissementEnseignementEditComponent,
    EtablissementEnseignementComponent,
    VieInstitutionnelleCreateComponent,
    VieInstitutionnelleListComponent,
    VieInstitutionnelleViewComponent,
    VieInstitutionnelleEditComponent,
    VieInstitutionnelleComponent,
    RoleProjetCreateComponent,
    RoleProjetListComponent,
    RoleProjetViewComponent,
    RoleProjetEditComponent,
    RoleProjetComponent,
    DisciplineScientifiqueCreateComponent,
    DisciplineScientifiqueListComponent,
    DisciplineScientifiqueViewComponent,
    DisciplineScientifiqueEditComponent,
    DisciplineScientifiqueComponent,
    ContexteCultureScientifiqueRecontreGrandPublicJeunePublicCreateComponent,
    ContexteCultureScientifiqueRecontreGrandPublicJeunePublicListComponent,
    ContexteCultureScientifiqueRecontreGrandPublicJeunePublicViewComponent,
    ContexteCultureScientifiqueRecontreGrandPublicJeunePublicEditComponent,
    ContexteCultureScientifiqueRecontreGrandPublicJeunePublicComponent,
    InstitutionCreateComponent,
    InstitutionListComponent,
    InstitutionViewComponent,
    InstitutionEditComponent,
    InstitutionComponent,
    CorpsCreateComponent,
    CorpsListComponent,
    CorpsViewComponent,
    CorpsEditComponent,
    CorpsComponent,
    CommunauteSavoirConseilEtComiteScientifiqueCreateComponent,
    CommunauteSavoirConseilEtComiteScientifiqueListComponent,
    CommunauteSavoirConseilEtComiteScientifiqueViewComponent,
    CommunauteSavoirConseilEtComiteScientifiqueEditComponent,
    CommunauteSavoirConseilEtComiteScientifiqueComponent,
    TypeSavoirCreateComponent,
    TypeSavoirListComponent,
    TypeSavoirViewComponent,
    TypeSavoirEditComponent,
    TypeSavoirComponent,
    StatusProjetCreateComponent,
    StatusProjetListComponent,
    StatusProjetViewComponent,
    StatusProjetEditComponent,
    StatusProjetComponent,
    InstitutionCoContractantCreateComponent,
    InstitutionCoContractantListComponent,
    InstitutionCoContractantViewComponent,
    InstitutionCoContractantEditComponent,
    InstitutionCoContractantComponent,
    DistinctionCreateComponent,
    DistinctionListComponent,
    DistinctionViewComponent,
    DistinctionEditComponent,
    DistinctionComponent,
    EtudiantCreateComponent,
    EtudiantListComponent,
    EtudiantViewComponent,
    EtudiantEditComponent,
    EtudiantComponent,
    RoleEvaluationRechercheUniversitaireCreateComponent,
    RoleEvaluationRechercheUniversitaireListComponent,
    RoleEvaluationRechercheUniversitaireViewComponent,
    RoleEvaluationRechercheUniversitaireEditComponent,
    RoleEvaluationRechercheUniversitaireComponent,
    NiveauFormationCreateComponent,
    NiveauFormationListComponent,
    NiveauFormationViewComponent,
    NiveauFormationEditComponent,
    NiveauFormationComponent,
    ConseilEtComiteScientifiqueCreateComponent,
    ConseilEtComiteScientifiqueListComponent,
    ConseilEtComiteScientifiqueViewComponent,
    ConseilEtComiteScientifiqueEditComponent,
    ConseilEtComiteScientifiqueComponent,
    CommunauteSavoirEvenementColloqueScientifiquesCreateComponent,
    CommunauteSavoirEvenementColloqueScientifiquesListComponent,
    CommunauteSavoirEvenementColloqueScientifiquesViewComponent,
    CommunauteSavoirEvenementColloqueScientifiquesEditComponent,
    CommunauteSavoirEvenementColloqueScientifiquesComponent,
    DeveloppementDeSavoirEtInnovationScientifiqueCreateComponent,
    DeveloppementDeSavoirEtInnovationScientifiqueListComponent,
    DeveloppementDeSavoirEtInnovationScientifiqueViewComponent,
    DeveloppementDeSavoirEtInnovationScientifiqueEditComponent,
    DeveloppementDeSavoirEtInnovationScientifiqueComponent,
    CategorieFoireQuestionCreateComponent,
    CategorieFoireQuestionListComponent,
    CategorieFoireQuestionViewComponent,
    CategorieFoireQuestionEditComponent,
    CategorieFoireQuestionComponent,
    DisciplineScientifiqueEvenementColloqueScientifiquesCreateComponent,
    DisciplineScientifiqueEvenementColloqueScientifiquesListComponent,
    DisciplineScientifiqueEvenementColloqueScientifiquesViewComponent,
    DisciplineScientifiqueEvenementColloqueScientifiquesEditComponent,
    DisciplineScientifiqueEvenementColloqueScientifiquesComponent,
    TypeOutilCreateComponent,
    TypeOutilListComponent,
    TypeOutilViewComponent,
    TypeOutilEditComponent,
    TypeOutilComponent,
    IdentifiantAuteurExpertCreateComponent,
    IdentifiantAuteurExpertListComponent,
    IdentifiantAuteurExpertViewComponent,
    IdentifiantAuteurExpertEditComponent,
    IdentifiantAuteurExpertComponent,
    InstrumentsEtDispositifsIrdProjetActiviteRechercheCreateComponent,
    InstrumentsEtDispositifsIrdProjetActiviteRechercheListComponent,
    InstrumentsEtDispositifsIrdProjetActiviteRechercheViewComponent,
    InstrumentsEtDispositifsIrdProjetActiviteRechercheEditComponent,
    InstrumentsEtDispositifsIrdProjetActiviteRechercheComponent,
    ProjetActiviteRechercheCreateComponent,
    ProjetActiviteRechercheListComponent,
    ProjetActiviteRechercheViewComponent,
    ProjetActiviteRechercheEditComponent,
    ProjetActiviteRechercheComponent,
    EnjeuxIrdChercheurCreateComponent,
    EnjeuxIrdChercheurListComponent,
    EnjeuxIrdChercheurViewComponent,
    EnjeuxIrdChercheurEditComponent,
    EnjeuxIrdChercheurComponent,
    ZoneActiviteInteractionRechercheCreateComponent,
    ZoneActiviteInteractionRechercheListComponent,
    ZoneActiviteInteractionRechercheViewComponent,
    ZoneActiviteInteractionRechercheEditComponent,
    ZoneActiviteInteractionRechercheComponent,
    ModaliteEtudeCreateComponent,
    ModaliteEtudeListComponent,
    ModaliteEtudeViewComponent,
    ModaliteEtudeEditComponent,
    ModaliteEtudeComponent,
    InstitutionCoContractantProjetActiviteRechercheCreateComponent,
    InstitutionCoContractantProjetActiviteRechercheListComponent,
    InstitutionCoContractantProjetActiviteRechercheViewComponent,
    InstitutionCoContractantProjetActiviteRechercheEditComponent,
    InstitutionCoContractantProjetActiviteRechercheComponent,
    CultureScientifiqueOutilPedagogiqueCreateComponent,
    CultureScientifiqueOutilPedagogiqueListComponent,
    CultureScientifiqueOutilPedagogiqueViewComponent,
    CultureScientifiqueOutilPedagogiqueEditComponent,
    CultureScientifiqueOutilPedagogiqueComponent,
    CommunauteSavoirChercheurCreateComponent,
    CommunauteSavoirChercheurListComponent,
    CommunauteSavoirChercheurViewComponent,
    CommunauteSavoirChercheurEditComponent,
    CommunauteSavoirChercheurComponent,
    ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueCreateComponent,
    ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueListComponent,
    ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueViewComponent,
    ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueEditComponent,
    ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueComponent,
    EvaluationEncadrementCreateComponent,
    EvaluationEncadrementListComponent,
    EvaluationEncadrementViewComponent,
    EvaluationEncadrementEditComponent,
    EvaluationEncadrementComponent,
    CommunauteSavoirEncadrementEtudiantCreateComponent,
    CommunauteSavoirEncadrementEtudiantListComponent,
    CommunauteSavoirEncadrementEtudiantViewComponent,
    CommunauteSavoirEncadrementEtudiantEditComponent,
    CommunauteSavoirEncadrementEtudiantComponent,
    EvenementColloqueScienntifiqueCreateComponent,
    EvenementColloqueScienntifiqueListComponent,
    EvenementColloqueScienntifiqueViewComponent,
    EvenementColloqueScienntifiqueEditComponent,
    EvenementColloqueScienntifiqueComponent,
    InstrumentsEtDispositifsIrdCreateComponent,
    InstrumentsEtDispositifsIrdListComponent,
    InstrumentsEtDispositifsIrdViewComponent,
    InstrumentsEtDispositifsIrdEditComponent,
    InstrumentsEtDispositifsIrdComponent,
    ResponsabiliteDirectionEncadrementDoctorantCreateComponent,
    ResponsabiliteDirectionEncadrementDoctorantListComponent,
    ResponsabiliteDirectionEncadrementDoctorantViewComponent,
    ResponsabiliteDirectionEncadrementDoctorantEditComponent,
    ResponsabiliteDirectionEncadrementDoctorantComponent,
    FormationContinueCreateComponent,
    FormationContinueListComponent,
    FormationContinueViewComponent,
    FormationContinueEditComponent,
    FormationContinueComponent,
    EtablissementPartenaireCreateComponent,
    EtablissementPartenaireListComponent,
    EtablissementPartenaireViewComponent,
    EtablissementPartenaireEditComponent,
    EtablissementPartenaireComponent,
    ModaliteCreateComponent,
    ModaliteListComponent,
    ModaliteViewComponent,
    ModaliteEditComponent,
    ModaliteComponent,
    DoctorantCreateComponent,
    DoctorantListComponent,
    DoctorantViewComponent,
    DoctorantEditComponent,
    DoctorantComponent,
    PublicCibleCreateComponent,
    PublicCibleListComponent,
    PublicCibleViewComponent,
    PublicCibleEditComponent,
    PublicCibleComponent,
    CommunauteSavoirEvaluationRechercheUniversitaireCreateComponent,
    CommunauteSavoirEvaluationRechercheUniversitaireListComponent,
    CommunauteSavoirEvaluationRechercheUniversitaireViewComponent,
    CommunauteSavoirEvaluationRechercheUniversitaireEditComponent,
    CommunauteSavoirEvaluationRechercheUniversitaireComponent,
    TypeExpertiseCreateComponent,
    TypeExpertiseListComponent,
    TypeExpertiseViewComponent,
    TypeExpertiseEditComponent,
    TypeExpertiseComponent,
    CommunauteSavoirCreateComponent,
    CommunauteSavoirListComponent,
    CommunauteSavoirViewComponent,
    CommunauteSavoirEditComponent,
    CommunauteSavoirComponent,
    GestionEquipeCreateComponent,
    GestionEquipeListComponent,
    GestionEquipeViewComponent,
    GestionEquipeEditComponent,
    GestionEquipeComponent,
    FoireQuestionCreateComponent,
    FoireQuestionListComponent,
    FoireQuestionViewComponent,
    FoireQuestionEditComponent,
    FoireQuestionComponent,
    TypeEntiteAdministrativeCreateComponent,
    TypeEntiteAdministrativeListComponent,
    TypeEntiteAdministrativeViewComponent,
    TypeEntiteAdministrativeEditComponent,
    TypeEntiteAdministrativeComponent,
    StatutEcoleDoctoraleCreateComponent,
    StatutEcoleDoctoraleListComponent,
    StatutEcoleDoctoraleViewComponent,
    StatutEcoleDoctoraleEditComponent,
    StatutEcoleDoctoraleComponent,
    TypeEnseignementDispenseCreateComponent,
    TypeEnseignementDispenseListComponent,
    TypeEnseignementDispenseViewComponent,
    TypeEnseignementDispenseEditComponent,
    TypeEnseignementDispenseComponent,
    NatureEnseignementCreateComponent,
    NatureEnseignementListComponent,
    NatureEnseignementViewComponent,
    NatureEnseignementEditComponent,
    NatureEnseignementComponent,
    StatutMasterCreateComponent,
    StatutMasterListComponent,
    StatutMasterViewComponent,
    StatutMasterEditComponent,
    StatutMasterComponent,
    BourseCreateComponent,
    BourseListComponent,
    BourseViewComponent,
    BourseEditComponent,
    BourseComponent,
    CommunauteSavoirExpertiseScientifiqueCreateComponent,
    CommunauteSavoirExpertiseScientifiqueListComponent,
    CommunauteSavoirExpertiseScientifiqueViewComponent,
    CommunauteSavoirExpertiseScientifiqueEditComponent,
    CommunauteSavoirExpertiseScientifiqueComponent,
    NatureEtudeCreateComponent,
    NatureEtudeListComponent,
    NatureEtudeViewComponent,
    NatureEtudeEditComponent,
    NatureEtudeComponent,
    MasterCreateComponent,
    MasterListComponent,
    MasterViewComponent,
    MasterEditComponent,
    MasterComponent,
    ObjetGlobalCreateComponent,
    ObjetGlobalListComponent,
    ObjetGlobalViewComponent,
    ObjetGlobalEditComponent,
    ObjetGlobalComponent,
    TypeInstrumentsEtDispositifsIrdCreateComponent,
    TypeInstrumentsEtDispositifsIrdListComponent,
    TypeInstrumentsEtDispositifsIrdViewComponent,
    TypeInstrumentsEtDispositifsIrdEditComponent,
    TypeInstrumentsEtDispositifsIrdComponent,
    CaracterisationCreateComponent,
    CaracterisationListComponent,
    CaracterisationViewComponent,
    CaracterisationEditComponent,
    CaracterisationComponent,
    OrganismeCreateComponent,
    OrganismeListComponent,
    OrganismeViewComponent,
    OrganismeEditComponent,
    OrganismeComponent,
    EvaluationRechercheUniversitaireCreateComponent,
    EvaluationRechercheUniversitaireListComponent,
    EvaluationRechercheUniversitaireViewComponent,
    EvaluationRechercheUniversitaireEditComponent,
    EvaluationRechercheUniversitaireComponent,
    TypeInstanceCreateComponent,
    TypeInstanceListComponent,
    TypeInstanceViewComponent,
    TypeInstanceEditComponent,
    TypeInstanceComponent,
    NationaliteCreateComponent,
    NationaliteListComponent,
    NationaliteViewComponent,
    NationaliteEditComponent,
    NationaliteComponent,
    TypeExpertCreateComponent,
    TypeExpertListComponent,
    TypeExpertViewComponent,
    TypeExpertEditComponent,
    TypeExpertComponent,
    DisciplineScientifiqueDirectionEncadrementDoctorantCreateComponent,
    DisciplineScientifiqueDirectionEncadrementDoctorantListComponent,
    DisciplineScientifiqueDirectionEncadrementDoctorantViewComponent,
    DisciplineScientifiqueDirectionEncadrementDoctorantEditComponent,
    DisciplineScientifiqueDirectionEncadrementDoctorantComponent,
    FournisseurAppelProjetRechercheCreateComponent,
    FournisseurAppelProjetRechercheListComponent,
    FournisseurAppelProjetRechercheViewComponent,
    FournisseurAppelProjetRechercheEditComponent,
    FournisseurAppelProjetRechercheComponent,
    ObjetGlobalFormationContinueCreateComponent,
    ObjetGlobalFormationContinueListComponent,
    ObjetGlobalFormationContinueViewComponent,
    ObjetGlobalFormationContinueEditComponent,
    ObjetGlobalFormationContinueComponent,
    FinancementDoctorantCreateComponent,
    FinancementDoctorantListComponent,
    FinancementDoctorantViewComponent,
    FinancementDoctorantEditComponent,
    FinancementDoctorantComponent,
    PaysFormationContinueCreateComponent,
    PaysFormationContinueListComponent,
    PaysFormationContinueViewComponent,
    PaysFormationContinueEditComponent,
    PaysFormationContinueComponent,
    EnseignementCreateComponent,
    EnseignementListComponent,
    EnseignementViewComponent,
    EnseignementEditComponent,
    EnseignementComponent,
    DisciplineScientifiqueExpertiseScientifiqueCreateComponent,
    DisciplineScientifiqueExpertiseScientifiqueListComponent,
    DisciplineScientifiqueExpertiseScientifiqueViewComponent,
    DisciplineScientifiqueExpertiseScientifiqueEditComponent,
    DisciplineScientifiqueExpertiseScientifiqueComponent,
    ResponsabilitePedagogiqueMasterCreateComponent,
    ResponsabilitePedagogiqueMasterListComponent,
    ResponsabilitePedagogiqueMasterViewComponent,
    ResponsabilitePedagogiqueMasterEditComponent,
    ResponsabilitePedagogiqueMasterComponent,
    EntiteAdministrativeCreateComponent,
    EntiteAdministrativeListComponent,
    EntiteAdministrativeViewComponent,
    EntiteAdministrativeEditComponent,
    EntiteAdministrativeComponent,
    EcoleDoctoraleCreateComponent,
    EcoleDoctoraleListComponent,
    EcoleDoctoraleViewComponent,
    EcoleDoctoraleEditComponent,
    EcoleDoctoraleComponent,
    ResponsabilitePedagogiqueEcoleDoctoraleCreateComponent,
    ResponsabilitePedagogiqueEcoleDoctoraleListComponent,
    ResponsabilitePedagogiqueEcoleDoctoraleViewComponent,
    ResponsabilitePedagogiqueEcoleDoctoraleEditComponent,
    ResponsabilitePedagogiqueEcoleDoctoraleComponent,
    EtablissementCultureScientifiqueOutilPedagogiqueCreateComponent,
    EtablissementCultureScientifiqueOutilPedagogiqueListComponent,
    EtablissementCultureScientifiqueOutilPedagogiqueViewComponent,
    EtablissementCultureScientifiqueOutilPedagogiqueEditComponent,
    EtablissementCultureScientifiqueOutilPedagogiqueComponent,
    EncadrementEtudiantCreateComponent,
    EncadrementEtudiantListComponent,
    EncadrementEtudiantViewComponent,
    EncadrementEtudiantEditComponent,
    EncadrementEtudiantComponent,
    OutilFormationContinueCreateComponent,
    OutilFormationContinueListComponent,
    OutilFormationContinueViewComponent,
    OutilFormationContinueEditComponent,
    OutilFormationContinueComponent,
    IdentifiantRechercheCreateComponent,
    IdentifiantRechercheListComponent,
    IdentifiantRechercheViewComponent,
    IdentifiantRechercheEditComponent,
    IdentifiantRechercheComponent,
    DirectionEncadrementDoctorantCreateComponent,
    DirectionEncadrementDoctorantListComponent,
    DirectionEncadrementDoctorantViewComponent,
    DirectionEncadrementDoctorantEditComponent,
    DirectionEncadrementDoctorantComponent,
    GradeCreateComponent,
    GradeListComponent,
    GradeViewComponent,
    GradeEditComponent,
    GradeComponent,
    DisciplineScientifiqueEvaluationRechercheUniversitaireCreateComponent,
    DisciplineScientifiqueEvaluationRechercheUniversitaireListComponent,
    DisciplineScientifiqueEvaluationRechercheUniversitaireViewComponent,
    DisciplineScientifiqueEvaluationRechercheUniversitaireEditComponent,
    DisciplineScientifiqueEvaluationRechercheUniversitaireComponent,
    CommissionScientifiqueCreateComponent,
    CommissionScientifiqueListComponent,
    CommissionScientifiqueViewComponent,
    CommissionScientifiqueEditComponent,
    CommissionScientifiqueComponent,
    EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicCreateComponent,
    EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicListComponent,
    EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicViewComponent,
    EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicEditComponent,
    EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicComponent,
    EtablissementCreateComponent,
    EtablissementListComponent,
    EtablissementViewComponent,
    EtablissementEditComponent,
    EtablissementComponent,
    CommunauteSavoirDirectionEncadrementDoctorantCreateComponent,
    CommunauteSavoirDirectionEncadrementDoctorantListComponent,
    CommunauteSavoirDirectionEncadrementDoctorantViewComponent,
    CommunauteSavoirDirectionEncadrementDoctorantEditComponent,
    CommunauteSavoirDirectionEncadrementDoctorantComponent,
    PublicCibleCultureScientifiqueRecontreGrandPublicCreateComponent,
    PublicCibleCultureScientifiqueRecontreGrandPublicListComponent,
    PublicCibleCultureScientifiqueRecontreGrandPublicViewComponent,
    PublicCibleCultureScientifiqueRecontreGrandPublicEditComponent,
    PublicCibleCultureScientifiqueRecontreGrandPublicComponent,
    CommunauteSavoirProjetActiviteRechercheCreateComponent,
    CommunauteSavoirProjetActiviteRechercheListComponent,
    CommunauteSavoirProjetActiviteRechercheViewComponent,
    CommunauteSavoirProjetActiviteRechercheEditComponent,
    CommunauteSavoirProjetActiviteRechercheComponent,
    PaysProjetRechercheCreateComponent,
    PaysProjetRechercheListComponent,
    PaysProjetRechercheViewComponent,
    PaysProjetRechercheEditComponent,
    PaysProjetRechercheComponent,
    DomaineScientifiqueChercheurCreateComponent,
    DomaineScientifiqueChercheurListComponent,
    DomaineScientifiqueChercheurViewComponent,
    DomaineScientifiqueChercheurEditComponent,
    DomaineScientifiqueChercheurComponent,
    InstrumentsEtDispositifsIrdChercheurCreateComponent,
    InstrumentsEtDispositifsIrdChercheurListComponent,
    InstrumentsEtDispositifsIrdChercheurViewComponent,
    InstrumentsEtDispositifsIrdChercheurEditComponent,
    InstrumentsEtDispositifsIrdChercheurComponent,
    PubliquePrincipalConcemeFormationContinueCreateComponent,
    PubliquePrincipalConcemeFormationContinueListComponent,
    PubliquePrincipalConcemeFormationContinueViewComponent,
    PubliquePrincipalConcemeFormationContinueEditComponent,
    PubliquePrincipalConcemeFormationContinueComponent,
    TypeOutilCultureScientifiqueOutilPedagogiqueCreateComponent,
    TypeOutilCultureScientifiqueOutilPedagogiqueListComponent,
    TypeOutilCultureScientifiqueOutilPedagogiqueViewComponent,
    TypeOutilCultureScientifiqueOutilPedagogiqueEditComponent,
    TypeOutilCultureScientifiqueOutilPedagogiqueComponent,
    ContexteCreateComponent,
    ContexteListComponent,
    ContexteViewComponent,
    ContexteEditComponent,
    ContexteComponent,
    ModaliteEtudeEnseignementCreateComponent,
    ModaliteEtudeEnseignementListComponent,
    ModaliteEtudeEnseignementViewComponent,
    ModaliteEtudeEnseignementEditComponent,
    ModaliteEtudeEnseignementComponent,
    TypeParticipationCreateComponent,
    TypeParticipationListComponent,
    TypeParticipationViewComponent,
    TypeParticipationEditComponent,
    TypeParticipationComponent,
    ResponsabiliteEncadrementEtudiantCreateComponent,
    ResponsabiliteEncadrementEtudiantListComponent,
    ResponsabiliteEncadrementEtudiantViewComponent,
    ResponsabiliteEncadrementEtudiantEditComponent,
    ResponsabiliteEncadrementEtudiantComponent,
    PaysCreateComponent,
    PaysListComponent,
    PaysViewComponent,
    PaysEditComponent,
    PaysComponent,
    DisciplineScientifiqueConseilEtComiteScientifiqueCreateComponent,
    DisciplineScientifiqueConseilEtComiteScientifiqueListComponent,
    DisciplineScientifiqueConseilEtComiteScientifiqueViewComponent,
    DisciplineScientifiqueConseilEtComiteScientifiqueEditComponent,
    DisciplineScientifiqueConseilEtComiteScientifiqueComponent,
    PaysCultureScientifiqueRecontreGrandPublicJeunePublicCreateComponent,
    PaysCultureScientifiqueRecontreGrandPublicJeunePublicListComponent,
    PaysCultureScientifiqueRecontreGrandPublicJeunePublicViewComponent,
    PaysCultureScientifiqueRecontreGrandPublicJeunePublicEditComponent,
    PaysCultureScientifiqueRecontreGrandPublicJeunePublicComponent,
    DisciplineScientifiqueEncadrementEtudiantCreateComponent,
    DisciplineScientifiqueEncadrementEtudiantListComponent,
    DisciplineScientifiqueEncadrementEtudiantViewComponent,
    DisciplineScientifiqueEncadrementEtudiantEditComponent,
    DisciplineScientifiqueEncadrementEtudiantComponent,
    CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueCreateComponent,
    CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueListComponent,
    CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueViewComponent,
    CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueEditComponent,
    CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueComponent,
    NiveauEtudeCreateComponent,
    NiveauEtudeListComponent,
    NiveauEtudeViewComponent,
    NiveauEtudeEditComponent,
    NiveauEtudeComponent,
    VilleCreateComponent,
    VilleListComponent,
    VilleViewComponent,
    VilleEditComponent,
    VilleComponent,
    MasterInternationalCreateComponent,
    MasterInternationalListComponent,
    MasterInternationalViewComponent,
    MasterInternationalEditComponent,
    MasterInternationalComponent,
    PubliquePrincipalCreateComponent,
    PubliquePrincipalListComponent,
    PubliquePrincipalViewComponent,
    PubliquePrincipalEditComponent,
    PubliquePrincipalComponent,
    DepartementScientifiqueCreateComponent,
    DepartementScientifiqueListComponent,
    DepartementScientifiqueViewComponent,
    DepartementScientifiqueEditComponent,
    DepartementScientifiqueComponent,
    FormatRencontreCreateComponent,
    FormatRencontreListComponent,
    FormatRencontreViewComponent,
    FormatRencontreEditComponent,
    FormatRencontreComponent,
    ChercheurCreateComponent,
    ChercheurListComponent,
    ChercheurViewComponent,
    ChercheurEditComponent,
    ChercheurComponent,
    ObjetGlobalDeFormationContinueCreateComponent,
    ObjetGlobalDeFormationContinueListComponent,
    ObjetGlobalDeFormationContinueViewComponent,
    ObjetGlobalDeFormationContinueEditComponent,
    ObjetGlobalDeFormationContinueComponent,
    ExpertiseScientifiqueCreateComponent,
    ExpertiseScientifiqueListComponent,
    ExpertiseScientifiqueViewComponent,
    ExpertiseScientifiqueEditComponent,
    ExpertiseScientifiqueComponent,
    PublicCibleCultureScientifiqueOutilPedagogiqueCreateComponent,
    PublicCibleCultureScientifiqueOutilPedagogiqueListComponent,
    PublicCibleCultureScientifiqueOutilPedagogiqueViewComponent,
    PublicCibleCultureScientifiqueOutilPedagogiqueEditComponent,
    PublicCibleCultureScientifiqueOutilPedagogiqueComponent,
    ContinentCreateComponent,
    ContinentListComponent,
    ContinentViewComponent,
    ContinentEditComponent,
    ContinentComponent,
    TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueCreateComponent,
    TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueListComponent,
    TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueViewComponent,
    TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueEditComponent,
    TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueComponent,
    NiveauEtudeEnseignementCreateComponent,
    NiveauEtudeEnseignementListComponent,
    NiveauEtudeEnseignementViewComponent,
    NiveauEtudeEnseignementEditComponent,
    NiveauEtudeEnseignementComponent,
    ModaliteFormationContinueCreateComponent,
    ModaliteFormationContinueListComponent,
    ModaliteFormationContinueViewComponent,
    ModaliteFormationContinueEditComponent,
    ModaliteFormationContinueComponent,
    SexeCreateComponent,
    SexeListComponent,
    SexeViewComponent,
    SexeEditComponent,
    SexeComponent,
    DomaineScientifiqueCreateComponent,
    DomaineScientifiqueListComponent,
    DomaineScientifiqueViewComponent,
    DomaineScientifiqueEditComponent,
    DomaineScientifiqueComponent,
    ModeDiffusionCreateComponent,
    ModeDiffusionListComponent,
    ModeDiffusionViewComponent,
    ModeDiffusionEditComponent,
    ModeDiffusionComponent,
    EtablissementProjetCreateComponent,
    EtablissementProjetListComponent,
    EtablissementProjetViewComponent,
    EtablissementProjetEditComponent,
    EtablissementProjetComponent,
    EnjeuxIrdCreateComponent,
    EnjeuxIrdListComponent,
    EnjeuxIrdViewComponent,
    EnjeuxIrdEditComponent,
    EnjeuxIrdComponent,
    CultureScientifiqueRecontreGrandPublicJeunePublicCreateComponent,
    CultureScientifiqueRecontreGrandPublicJeunePublicListComponent,
    CultureScientifiqueRecontreGrandPublicJeunePublicViewComponent,
    CultureScientifiqueRecontreGrandPublicJeunePublicEditComponent,
    CultureScientifiqueRecontreGrandPublicJeunePublicComponent,
    PaysTypeOutilCultureScientifiqueOutilPedagogiqueCreateComponent,
    PaysTypeOutilCultureScientifiqueOutilPedagogiqueListComponent,
    PaysTypeOutilCultureScientifiqueOutilPedagogiqueViewComponent,
    PaysTypeOutilCultureScientifiqueOutilPedagogiqueEditComponent,
    PaysTypeOutilCultureScientifiqueOutilPedagogiqueComponent,
    AppComponent,
    AccessDeniedComponent,
    LoginComponent,
    RegisterComponent,
    
    AppMainComponent,
    AppMenuComponent,
    AppMenuitemComponent,
    AppConfigComponent,
    AppRightMenuComponent,
    AppTopBarComponent,
    AppFooterComponent,
    DashboardDemoComponent,
    FloatLabelDemoComponent,
    InvalidStateDemoComponent,
    InputDemoComponent,
    ButtonDemoComponent,
    ChartsDemoComponent,
    EmptyDemoComponent,
    FileDemoComponent,
    DocumentationComponent,
    AppCalendarComponent,
    AppTimelineDemoComponent,
    AppNotfoundComponent,
    AppErrorComponent,
    AppAccessdeniedComponent,
    AppLoginComponent,
    UserListComponent,
    HomeComponent
  ],
  providers: [
    /*    { provide: LocationStrategy, useClass: HashLocationStrategy }, */
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    CountryService,
    CustomerService,
    EventService,
    UserService,
    IconService,
    NodeService,
    PhotoService,
    ProductService,
    MenuService,
    RoleService,
    MessageService,
    ConfirmationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
