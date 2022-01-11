import {MasterVo} from './Master.model';
import {StatutMasterVo} from './StatutMaster.model';
import {EtablissementVo} from './Etablissement.model';
import {ChercheurVo} from './Chercheur.model';

export class ResponsabilitePedagogiqueMasterVo {
    public id: number;
    public annee: number;
    public tempsEstimePourCetteAnnne: number;
    public appelServiceRenforcementCapaciteSud: boolean;
    public masterInternational: boolean;
                public anneeMax: string ;
                public anneeMin: string ;
                public tempsEstimePourCetteAnnneMax: string ;
                public tempsEstimePourCetteAnnneMin: string ;
    public statutMasterVo: StatutMasterVo = new StatutMasterVo();
        
    public masterVo: MasterVo = new MasterVo();
        
    public etablissementVo: EtablissementVo = new EtablissementVo();
        
    public chercheurVo: ChercheurVo = new ChercheurVo();
        


}
