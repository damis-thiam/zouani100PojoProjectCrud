import {InstitutionVo} from './Institution.model';
import {ChercheurVo} from './Chercheur.model';

export class InstitutionCoContractantVo {
    public id: number;
    public chercheurVo: ChercheurVo = new ChercheurVo();
        
    public institutionVo: InstitutionVo = new InstitutionVo();
        


}
