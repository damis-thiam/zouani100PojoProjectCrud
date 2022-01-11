import {EtablissementVo} from './Etablissement.model';
import {PaysVo} from './Pays.model';
import {ChercheurVo} from './Chercheur.model';
import {CommunauteSavoirConseilEtComiteScientifiqueVo} from './CommunauteSavoirConseilEtComiteScientifique.model';
import {DisciplineScientifiqueConseilEtComiteScientifiqueVo} from './DisciplineScientifiqueConseilEtComiteScientifique.model';

export class ConseilEtComiteScientifiqueVo {
    public id: number;
    public annee: number;
    public tempsEstimePourCetteAnnne: number;
    public intitule: string;
    public nombreJoursParAnnee: number;
                public anneeMax: string ;
                public anneeMin: string ;
                public tempsEstimePourCetteAnnneMax: string ;
                public tempsEstimePourCetteAnnneMin: string ;
                public nombreJoursParAnneeMax: string ;
                public nombreJoursParAnneeMin: string ;
    public paysEtablissementVo: PaysVo = new PaysVo();
        
    public etablissementVo: EtablissementVo = new EtablissementVo();
        
    public chercheurVo: ChercheurVo = new ChercheurVo();
        
    public communauteSavoirConseilEtComiteScientifiquesVo: Array<CommunauteSavoirConseilEtComiteScientifiqueVo>;
    public disciplineScientifiqueConseilEtComiteScientifiquesVo: Array<DisciplineScientifiqueConseilEtComiteScientifiqueVo>;


}
