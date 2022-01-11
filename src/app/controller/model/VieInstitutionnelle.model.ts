import {TypeInstanceVo} from './TypeInstance.model';
import {EtablissementVo} from './Etablissement.model';
import {PaysVo} from './Pays.model';
import {ChercheurVo} from './Chercheur.model';

export class VieInstitutionnelleVo {
    public id: number;
    public tempsEstime: number;
    public libelleInstance: string;
                public tempsEstimeMax: string ;
                public tempsEstimeMin: string ;
    public typeInstanceVo: TypeInstanceVo = new TypeInstanceVo();
        
    public paysEtablissementVo: PaysVo = new PaysVo();
        
    public etablissementVo: EtablissementVo = new EtablissementVo();
        
    public chercheurVo: ChercheurVo = new ChercheurVo();
        


}
