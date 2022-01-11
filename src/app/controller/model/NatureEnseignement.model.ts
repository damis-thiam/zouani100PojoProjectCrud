import {EnseignementVo} from './Enseignement.model';
import {NatureEtudeVo} from './NatureEtude.model';

export class NatureEnseignementVo {
    public id: number;
    public natureEtudeVo: NatureEtudeVo = new NatureEtudeVo();
        
    public enseignementVo: EnseignementVo = new EnseignementVo();
        


}
