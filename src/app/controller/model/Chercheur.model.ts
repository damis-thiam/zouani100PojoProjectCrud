import {TypeEntiteAdministrativeVo} from './TypeEntiteAdministrative.model';
import {EntiteAdministrativeVo} from './EntiteAdministrative.model';
import {DepartementScientifiqueVo} from './DepartementScientifique.model';
import {SexeVo} from './Sexe.model';
import {GradeVo} from './Grade.model';
import {CorpsVo} from './Corps.model';
import {CommissionScientifiqueVo} from './CommissionScientifique.model';
import {DomaineScientifiqueChercheurVo} from './DomaineScientifiqueChercheur.model';
import {EnjeuxIrdChercheurVo} from './EnjeuxIrdChercheur.model';
import {ZoneActiviteInteractionRechercheVo} from './ZoneActiviteInteractionRecherche.model';
import {CommunauteSavoirChercheurVo} from './CommunauteSavoirChercheur.model';
import {InstrumentsEtDispositifsIrdChercheurVo} from './InstrumentsEtDispositifsIrdChercheur.model';
import {IdentifiantAuteurExpertVo} from './IdentifiantAuteurExpert.model';
import {DistinctionVo} from './Distinction.model';

export class ChercheurVo {
    public id: number;
    public numeroMatricule: string;
    public email: string;
    public nom: string;
    public prenom: string;
    public affectationGeographiquePays: string;
    public affectationGeographiqueVille: string;
    public natureImplication: string;
    public resume: string;
    public formationEnManagement: boolean;
    public typeAffectationStructurelleVo: TypeEntiteAdministrativeVo = new TypeEntiteAdministrativeVo();
        
    public affectationStructurelleVo: EntiteAdministrativeVo = new EntiteAdministrativeVo();
        
    public departementScientifiqueRattachementOuAffectationVo: DepartementScientifiqueVo = new DepartementScientifiqueVo();
        
    public commissionScientifiqueRattachementVo: CommissionScientifiqueVo = new CommissionScientifiqueVo();
        
    public gradeVo: GradeVo = new GradeVo();
        
    public corpsVo: CorpsVo = new CorpsVo();
        
    public sexeVo: SexeVo = new SexeVo();
        
    public domaineScientifiqueChercheursVo: Array<DomaineScientifiqueChercheurVo>;
    public enjeuxIrdChercheursVo: Array<EnjeuxIrdChercheurVo>;
    public zoneActiviteInteractionRecherchesVo: Array<ZoneActiviteInteractionRechercheVo>;
    public communauteSavoirChercheursVo: Array<CommunauteSavoirChercheurVo>;
    public instrumentsEtDispositifsIrdChercheursVo: Array<InstrumentsEtDispositifsIrdChercheurVo>;
    public identifiantAuteurExpertsVo: Array<IdentifiantAuteurExpertVo>;
    public distinctionsVo: Array<DistinctionVo>;


}
