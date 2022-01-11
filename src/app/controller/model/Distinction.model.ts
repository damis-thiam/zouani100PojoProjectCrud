import {TypeParticipationVo} from './TypeParticipation.model';
import {OrganismeVo} from './Organisme.model';
import {ChercheurVo} from './Chercheur.model';

export class DistinctionVo {
    public id: number;
    public dateObtention: string;
    public intitule: string;
                public dateObtentionMax: string ;
                public dateObtentionMin: string ;
    public organismeVo: OrganismeVo = new OrganismeVo();
        
    public typeParticipationVo: TypeParticipationVo = new TypeParticipationVo();
        
    public chercheurVo: ChercheurVo = new ChercheurVo();
        


}
