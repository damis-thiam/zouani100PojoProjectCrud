import {PaysVo} from './Pays.model';

export class MasterVo {
    public id: number;
    public intitule: string;
    public international: boolean;
    public paysEtablissementVo: PaysVo = new PaysVo();
        


}
