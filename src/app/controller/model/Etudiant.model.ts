import {SexeVo} from './Sexe.model';
import {PaysVo} from './Pays.model';

export class EtudiantVo {
    public id: number;
    public nom: string;
    public prenom: string;
    public anneeNaissance: number;
                public anneeNaissanceMax: string ;
                public anneeNaissanceMin: string ;
    public sexeVo: SexeVo = new SexeVo();
        
    public paysNationnaliteVo: PaysVo = new PaysVo();
        


}
