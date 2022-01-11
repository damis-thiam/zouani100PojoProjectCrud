import {FormatRencontreVo} from './FormatRencontre.model';
import {PublicCibleCultureScientifiqueRecontreGrandPublicVo} from './PublicCibleCultureScientifiqueRecontreGrandPublic.model';
import {ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo} from './ContexteCultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo} from './EtablissementCultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo} from './PaysCultureScientifiqueRecontreGrandPublicJeunePublic.model';

export class CultureScientifiqueRecontreGrandPublicJeunePublicVo {
    public id: number;
    public tempsEstimePourCetteAnnne: number;
    public intituleSujet: string;
    public periodeAnnee: number;
    public periodeMois: number;
    public evenementGrandPublic: boolean;
    public volumePublic: number;
    public lienWeb: string;
                public tempsEstimePourCetteAnnneMax: string ;
                public tempsEstimePourCetteAnnneMin: string ;
                public periodeAnneeMax: string ;
                public periodeAnneeMin: string ;
                public periodeMoisMax: string ;
                public periodeMoisMin: string ;
                public volumePublicMax: string ;
                public volumePublicMin: string ;
    public formatRencontreVo: FormatRencontreVo = new FormatRencontreVo();
        
    public publicCibleCultureScientifiqueRecontresGrandPublicJeunePublicsVo: Array<PublicCibleCultureScientifiqueRecontreGrandPublicVo>;
    public contexteCultureScientifiqueRecontreGrandPublicJeunePublicsVo: Array<ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo>;
    public etablisementOrganisateurEvenementsVo: Array<EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo>;
    public paysCultureScientifiqueRecontreGrandPublicJeunePublicsVo: Array<PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo>;


}
