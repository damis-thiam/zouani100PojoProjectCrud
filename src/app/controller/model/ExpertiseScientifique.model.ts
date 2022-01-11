import {TypeExpertiseVo} from './TypeExpertise.model';
import {EtablissementVo} from './Etablissement.model';
import {PaysVo} from './Pays.model';
import {ChercheurVo} from './Chercheur.model';
import {CommunauteSavoirExpertiseScientifiqueVo} from './CommunauteSavoirExpertiseScientifique.model';
import {DisciplineScientifiqueExpertiseScientifiqueVo} from './DisciplineScientifiqueExpertiseScientifique.model';

export class ExpertiseScientifiqueVo {
    public id: number;
    public annee: number;
    public intitule: string;
    public nombreJourConsacrePourCetteAnnee: number;
    public periodeRemiseRapportMois: number;
    public periodeRemiseRapportAnnee: number;
    public commentairesEventuels: string;
                public anneeMax: string ;
                public anneeMin: string ;
                public nombreJourConsacrePourCetteAnneeMax: string ;
                public nombreJourConsacrePourCetteAnneeMin: string ;
                public periodeRemiseRapportMoisMax: string ;
                public periodeRemiseRapportMoisMin: string ;
                public periodeRemiseRapportAnneeMax: string ;
                public periodeRemiseRapportAnneeMin: string ;
    public typeExpertiseVo: TypeExpertiseVo = new TypeExpertiseVo();
        
    public paysVo: PaysVo = new PaysVo();
        
    public etablisementPartenaireVo: EtablissementVo = new EtablissementVo();
        
    public chercheurVo: ChercheurVo = new ChercheurVo();
        
    public communauteSavoirExpertiseScientifiquesVo: Array<CommunauteSavoirExpertiseScientifiqueVo>;
    public disciplineScientifiqueExpertiseScientifiquesVo: Array<DisciplineScientifiqueExpertiseScientifiqueVo>;


}
