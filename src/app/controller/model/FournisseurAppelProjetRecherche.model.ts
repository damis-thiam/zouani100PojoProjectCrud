import {PaysVo} from './Pays.model';

export class FournisseurAppelProjetRechercheVo {
    public id: number;
    public libelle: string;
    public code: string;
    public description: string;
    public paysVo: PaysVo = new PaysVo();
        


}
