import {EcoleDoctoraleVo} from './EcoleDoctorale.model';
import {StatutEcoleDoctoraleVo} from './StatutEcoleDoctorale.model';
import {EtablissementVo} from './Etablissement.model';
import {ChercheurVo} from './Chercheur.model';

export class ResponsabilitePedagogiqueEcoleDoctoraleVo {
    public id: number;
    public annee: number;
    public tempsEstimePourCetteAnnne: number;
    public appelServiceRenforcementCapaciteSud: boolean;
    public ecoleDoctoraleInternational: boolean;
                public anneeMax: string ;
                public anneeMin: string ;
                public tempsEstimePourCetteAnnneMax: string ;
                public tempsEstimePourCetteAnnneMin: string ;
    public statutEcoleDoctoraleVo: StatutEcoleDoctoraleVo = new StatutEcoleDoctoraleVo();
        
    public ecoleDoctoraleVo: EcoleDoctoraleVo = new EcoleDoctoraleVo();
        
    public etablissementVo: EtablissementVo = new EtablissementVo();
        
    public chercheurVo: ChercheurVo = new ChercheurVo();
        


}
