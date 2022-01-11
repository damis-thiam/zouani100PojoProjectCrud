import {FormationContinueVo} from './FormationContinue.model';
import {PaysVo} from './Pays.model';

export class PaysFormationContinueVo {
    public id: number;
    public paysNationnaliteVo: PaysVo = new PaysVo();
        
    public formationContinueVo: FormationContinueVo = new FormationContinueVo();
        


}
