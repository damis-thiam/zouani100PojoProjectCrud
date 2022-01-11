import {RoleEvaluationRechercheUniversitaireVo} from './RoleEvaluationRechercheUniversitaire.model';
import {TypeExpertVo} from './TypeExpert.model';
import {EtablissementVo} from './Etablissement.model';
import {PaysVo} from './Pays.model';
import {ChercheurVo} from './Chercheur.model';
import {CommunauteSavoirEvaluationRechercheUniversitaireVo} from './CommunauteSavoirEvaluationRechercheUniversitaire.model';
import {DisciplineScientifiqueEvaluationRechercheUniversitaireVo} from './DisciplineScientifiqueEvaluationRechercheUniversitaire.model';

export class EvaluationRechercheUniversitaireVo {
    public id: number;
    public annee: number;
    public nombreJourConsacrePourCetteAnnee: number;
    public commentaire: string;
                public anneeMax: string ;
                public anneeMin: string ;
                public nombreJourConsacrePourCetteAnneeMax: string ;
                public nombreJourConsacrePourCetteAnneeMin: string ;
    public typeExpertVo: TypeExpertVo = new TypeExpertVo();
        
    public roleVo: RoleEvaluationRechercheUniversitaireVo = new RoleEvaluationRechercheUniversitaireVo();
        
    public paysCommanditaireVo: PaysVo = new PaysVo();
        
    public commanditaireVo: EtablissementVo = new EtablissementVo();
        
    public chercheurVo: ChercheurVo = new ChercheurVo();
        
    public communauteSavoirEvaluationRechercheUniversitairesVo: Array<CommunauteSavoirEvaluationRechercheUniversitaireVo>;
    public disciplineScientifiqueEvaluationRechercheUniversitairesVo: Array<DisciplineScientifiqueEvaluationRechercheUniversitaireVo>;


}
