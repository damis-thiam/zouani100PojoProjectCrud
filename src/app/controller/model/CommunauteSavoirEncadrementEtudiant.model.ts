import {EncadrementEtudiantVo} from './EncadrementEtudiant.model';
import {CommunauteSavoirVo} from './CommunauteSavoir.model';

export class CommunauteSavoirEncadrementEtudiantVo {
    public id: number;
    public communauteSavoirVo: CommunauteSavoirVo = new CommunauteSavoirVo();
        
    public encadrementEtudiantVo: EncadrementEtudiantVo = new EncadrementEtudiantVo();
        


}
