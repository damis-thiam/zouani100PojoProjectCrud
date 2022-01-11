import {ContinentVo} from './Continent.model';

export class PaysVo {
    public id: number;
    public libelle: string;
    public code: string;
    public continentVo: ContinentVo = new ContinentVo();
        


}
