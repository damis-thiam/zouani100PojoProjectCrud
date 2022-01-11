import {RoleProjetVo} from './RoleProjet.model';
import {StatusProjetVo} from './StatusProjet.model';
import {FournisseurAppelProjetRechercheVo} from './FournisseurAppelProjetRecherche.model';
import {EtablissementProjetVo} from './EtablissementProjet.model';
import {PaysVo} from './Pays.model';
import {ChercheurVo} from './Chercheur.model';
import {PaysProjetRechercheVo} from './PaysProjetRecherche.model';
import {InstitutionCoContractantProjetActiviteRechercheVo} from './InstitutionCoContractantProjetActiviteRecherche.model';
import {CommunauteSavoirProjetActiviteRechercheVo} from './CommunauteSavoirProjetActiviteRecherche.model';
import {InstrumentsEtDispositifsIrdProjetActiviteRechercheVo} from './InstrumentsEtDispositifsIrdProjetActiviteRecherche.model';
import {BourseVo} from './Bourse.model';
import {EncadrementEtudiantVo} from './EncadrementEtudiant.model';
import {DirectionEncadrementDoctorantVo} from './DirectionEncadrementDoctorant.model';

export class ProjetActiviteRechercheVo {
    public id: number;
    public annee: number;
    public tempsEstimePourCetteAnnne: number;
    public IntituleSujetReponse: string;
    public dureeFinancementPrevuEnMois: number;
    public montantFinancementPrevu: number;
    public dureeFinancementAccordeEnMois: number;
    public montantFinancementAccorde: number;
                public anneeMax: string ;
                public anneeMin: string ;
                public tempsEstimePourCetteAnnneMax: string ;
                public tempsEstimePourCetteAnnneMin: string ;
                public dureeFinancementPrevuEnMoisMax: string ;
                public dureeFinancementPrevuEnMoisMin: string ;
                public montantFinancementPrevuMax: string ;
                public montantFinancementPrevuMin: string ;
                public dureeFinancementAccordeEnMoisMax: string ;
                public dureeFinancementAccordeEnMoisMin: string ;
                public montantFinancementAccordeMax: string ;
                public montantFinancementAccordeMin: string ;
    public statusProjetVo: StatusProjetVo = new StatusProjetVo();
        
    public roleJoueVo: RoleProjetVo = new RoleProjetVo();
        
    public etablissementProjetVo: EtablissementProjetVo = new EtablissementProjetVo();
        
    public lanceurAppelProjetRechercheVo: FournisseurAppelProjetRechercheVo = new FournisseurAppelProjetRechercheVo();
        
    public bailleurAppelProjetRechercheVo: FournisseurAppelProjetRechercheVo = new FournisseurAppelProjetRechercheVo();
        
    public paysBailleurAppelProjetRechercheVo: PaysVo = new PaysVo();
        
    public chercheurVo: ChercheurVo = new ChercheurVo();
        
    public paysPrincipaleInterventionProjetRecherchesVo: Array<PaysProjetRechercheVo>;
    public institutionCoContractantsVo: Array<InstitutionCoContractantProjetActiviteRechercheVo>;
    public communauteSavoirProjetActiviteRecherchesVo: Array<CommunauteSavoirProjetActiviteRechercheVo>;
    public instrumentsEtDispositifsIrdProjetActiviteRecherchesVo: Array<InstrumentsEtDispositifsIrdProjetActiviteRechercheVo>;
    public boursesVo: Array<BourseVo>;
    public encadrementEtudiantsVo: Array<EncadrementEtudiantVo>;
    public directionEncadrementDoctorantsVo: Array<DirectionEncadrementDoctorantVo>;


}
