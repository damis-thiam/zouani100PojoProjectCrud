import {EnseignementVo} from './Enseignement.model';
import {EtablissementVo} from './Etablissement.model';

export class EtablissementEnseignementVo {
    public id: number;
    public etablissementVo: EtablissementVo = new EtablissementVo();
        
    public enseignementVo: EnseignementVo = new EnseignementVo();
        


}
