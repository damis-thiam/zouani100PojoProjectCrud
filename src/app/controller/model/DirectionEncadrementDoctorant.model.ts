import {FinancementDoctorantVo} from './FinancementDoctorant.model';
import {ProjetActiviteRechercheVo} from './ProjetActiviteRecherche.model';
import {DoctorantVo} from './Doctorant.model';
import {ResponsabiliteDirectionEncadrementDoctorantVo} from './ResponsabiliteDirectionEncadrementDoctorant.model';
import {EtablissementVo} from './Etablissement.model';
import {ChercheurVo} from './Chercheur.model';
import {PaysVo} from './Pays.model';
import {CommunauteSavoirDirectionEncadrementDoctorantVo} from './CommunauteSavoirDirectionEncadrementDoctorant.model';
import {DisciplineScientifiqueDirectionEncadrementDoctorantVo} from './DisciplineScientifiqueDirectionEncadrementDoctorant.model';

export class DirectionEncadrementDoctorantVo {
    public id: number;
    public annee: number;
    public tempsEstimePourCetteAnnne: number;
    public sujetThese: string;
    public dateDebutThese: string;
    public datePrevuSoutenanceThese: string;
    public codirectionInternationale: boolean;
    public intituleEd: string;
    public numeroEd: string;
                public anneeMax: string ;
                public anneeMin: string ;
                public tempsEstimePourCetteAnnneMax: string ;
                public tempsEstimePourCetteAnnneMin: string ;
                public dateDebutTheseMax: string ;
                public dateDebutTheseMin: string ;
                public datePrevuSoutenanceTheseMax: string ;
                public datePrevuSoutenanceTheseMin: string ;
    public doctorantVo: DoctorantVo = new DoctorantVo();
        
    public responsabiliteVo: ResponsabiliteDirectionEncadrementDoctorantVo = new ResponsabiliteDirectionEncadrementDoctorantVo();
        
    public financementDoctorantVo: FinancementDoctorantVo = new FinancementDoctorantVo();
        
    public directeurTheseVo: ChercheurVo = new ChercheurVo();
        
    public paysEtablissementInscriptionDoctorantVo: PaysVo = new PaysVo();
        
    public etablissementInscriptionVo: EtablissementVo = new EtablissementVo();
        
    public projetActiviteRechercheVo: ProjetActiviteRechercheVo = new ProjetActiviteRechercheVo();
        
    public communauteSavoirDirectionEncadrementDoctorantsVo: Array<CommunauteSavoirDirectionEncadrementDoctorantVo>;
    public disciplineScientifiqueDirectionEncadrementDoctorantVo: Array<DisciplineScientifiqueDirectionEncadrementDoctorantVo>;


}
