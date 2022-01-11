import {PublicCibleCultureScientifiqueOutilPedagogiqueVo} from './PublicCibleCultureScientifiqueOutilPedagogique.model';
import {TypeOutilCultureScientifiqueOutilPedagogiqueVo} from './TypeOutilCultureScientifiqueOutilPedagogique.model';
import {PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo} from './PaysTypeOutilCultureScientifiqueOutilPedagogique.model';
import {EtablissementCultureScientifiqueOutilPedagogiqueVo} from './EtablissementCultureScientifiqueOutilPedagogique.model';

export class CultureScientifiqueOutilPedagogiqueVo {
    public id: number;
    public role: string;
    public nomOutil: string;
    public sortieAnnee: number;
    public sortieMois: number;
    public lienWeb: string;
                public sortieAnneeMax: string ;
                public sortieAnneeMin: string ;
                public sortieMoisMax: string ;
                public sortieMoisMin: string ;
    public publicCibleCultureScientifiqueOutilPedagogiquesVo: Array<PublicCibleCultureScientifiqueOutilPedagogiqueVo>;
    public typeOutilCultureScientifiqueOutilPedagogiquesVo: Array<TypeOutilCultureScientifiqueOutilPedagogiqueVo>;
    public paysTypeOutilCultureScientifiqueOutilPedagogiquesVo: Array<PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo>;
    public partenaitresVo: Array<EtablissementCultureScientifiqueOutilPedagogiqueVo>;


}
