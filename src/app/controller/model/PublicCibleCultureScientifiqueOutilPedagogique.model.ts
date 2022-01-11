import {PublicCibleVo} from './PublicCible.model';
import {CultureScientifiqueOutilPedagogiqueVo} from './CultureScientifiqueOutilPedagogique.model';
import {PaysVo} from './Pays.model';

export class PublicCibleCultureScientifiqueOutilPedagogiqueVo {
    public id: number;
    public publicCibleVo: PublicCibleVo = new PublicCibleVo();
        
    public cultureScientifiqueOutilPedagogiqueVo: CultureScientifiqueOutilPedagogiqueVo = new CultureScientifiqueOutilPedagogiqueVo();
        
    public paysVo: PaysVo = new PaysVo();
        


}
