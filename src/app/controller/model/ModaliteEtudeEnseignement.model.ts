import {EnseignementVo} from './Enseignement.model';
import {ModaliteEtudeVo} from './ModaliteEtude.model';

export class ModaliteEtudeEnseignementVo {
    public id: number;
    public modaliteEtudeVo: ModaliteEtudeVo = new ModaliteEtudeVo();
        
    public enseignementVo: EnseignementVo = new EnseignementVo();
        


}
