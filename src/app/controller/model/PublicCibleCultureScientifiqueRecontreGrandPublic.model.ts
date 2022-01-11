import {PublicCibleVo} from './PublicCible.model';
import {CultureScientifiqueRecontreGrandPublicJeunePublicVo} from './CultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {PaysVo} from './Pays.model';

export class PublicCibleCultureScientifiqueRecontreGrandPublicVo {
    public id: number;
    public publicCibleVo: PublicCibleVo = new PublicCibleVo();
        
    public paysVo: PaysVo = new PaysVo();
        
    public cultureScientifiqueRecontreGrandPublicVo: CultureScientifiqueRecontreGrandPublicJeunePublicVo = new CultureScientifiqueRecontreGrandPublicJeunePublicVo();
        


}
