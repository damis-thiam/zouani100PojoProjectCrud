import {EvaluationEncadrementVo} from './EvaluationEncadrement.model';
import {ProjetActiviteRechercheVo} from './ProjetActiviteRecherche.model';
import {EtudiantVo} from './Etudiant.model';
import {ResponsabiliteEncadrementEtudiantVo} from './ResponsabiliteEncadrementEtudiant.model';
import {EtablissementVo} from './Etablissement.model';
import {PaysVo} from './Pays.model';
import {EtablissementPartenaireVo} from './EtablissementPartenaire.model';
import {CommunauteSavoirEncadrementEtudiantVo} from './CommunauteSavoirEncadrementEtudiant.model';
import {DisciplineScientifiqueEncadrementEtudiantVo} from './DisciplineScientifiqueEncadrementEtudiant.model';

export class EncadrementEtudiantVo {
    public id: number;
    public annee: number;
    public tempsEstimePourCetteAnnne: number;
    public sujetEtude: string;
    public codirectionInternationale: boolean;
    public cursus: string;
                public anneeMax: string ;
                public anneeMin: string ;
                public tempsEstimePourCetteAnnneMax: string ;
                public tempsEstimePourCetteAnnneMin: string ;
    public etudiantVo: EtudiantVo = new EtudiantVo();
        
    public responsabiliteEncadrementEtudiantVo: ResponsabiliteEncadrementEtudiantVo = new ResponsabiliteEncadrementEtudiantVo();
        
    public paysInscriptionVo: PaysVo = new PaysVo();
        
    public etablissementPartenaireVo: EtablissementPartenaireVo = new EtablissementPartenaireVo();
        
    public etablissementInscriptionVo: EtablissementVo = new EtablissementVo();
        
    public evaluationEncadrementVo: EvaluationEncadrementVo = new EvaluationEncadrementVo();
        
    public projetActiviteRechercheVo: ProjetActiviteRechercheVo = new ProjetActiviteRechercheVo();
        
    public communauteSavoirEncadrementsVo: Array<CommunauteSavoirEncadrementEtudiantVo>;
    public disciplineScientifiqueEncadrementEtudiantVo: Array<DisciplineScientifiqueEncadrementEtudiantVo>;


}
