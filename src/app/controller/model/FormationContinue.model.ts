import {OutilFormationContinueVo} from './OutilFormationContinue.model';
import {ModaliteFormationContinueVo} from './ModaliteFormationContinue.model';
import {EtablissementVo} from './Etablissement.model';
import {PaysVo} from './Pays.model';
import {ChercheurVo} from './Chercheur.model';
import {ObjetGlobalDeFormationContinueVo} from './ObjetGlobalDeFormationContinue.model';
import {PubliquePrincipalConcemeFormationContinueVo} from './PubliquePrincipalConcemeFormationContinue.model';
import {PaysFormationContinueVo} from './PaysFormationContinue.model';

export class FormationContinueVo {
    public id: number;
    public annee: number;
    public tempsEstimePourCetteAnnne: number;
    public intituleExact: string;
    public nombreHeuresDispenseesDansAnnee: number;
                public anneeMax: string ;
                public anneeMin: string ;
                public tempsEstimePourCetteAnnneMax: string ;
                public tempsEstimePourCetteAnnneMin: string ;
                public nombreHeuresDispenseesDansAnneeMax: string ;
                public nombreHeuresDispenseesDansAnneeMin: string ;
    public modaliteFormationContinueVo: ModaliteFormationContinueVo = new ModaliteFormationContinueVo();
        
    public outilFormationContinueVo: OutilFormationContinueVo = new OutilFormationContinueVo();
        
    public paysCommanditaireVo: PaysVo = new PaysVo();
        
    public etablissementCommanditaireVo: EtablissementVo = new EtablissementVo();
        
    public chercheurVo: ChercheurVo = new ChercheurVo();
        
    public objetGlobalDeFormationContinuesVo: Array<ObjetGlobalDeFormationContinueVo>;
    public publiquePrinciplaeConcernerFormationContinuesVo: Array<PubliquePrincipalConcemeFormationContinueVo>;
    public paysFormationContinuesVo: Array<PaysFormationContinueVo>;


}
