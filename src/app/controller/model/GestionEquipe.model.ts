import {ChercheurVo} from './Chercheur.model';

export class GestionEquipeVo {
    public id: number;
    public annee: number;
    public tempsEstimePourCetteAnnne: number;
    public nombrePersonneHorsEtudiantEtDoctorant: number;
    public nombrePersonneMemeNonIrd: number;
    public nombrePersonneMemeSousConventionsOuContratProjet: number;
                public anneeMax: string ;
                public anneeMin: string ;
                public tempsEstimePourCetteAnnneMax: string ;
                public tempsEstimePourCetteAnnneMin: string ;
                public nombrePersonneHorsEtudiantEtDoctorantMax: string ;
                public nombrePersonneHorsEtudiantEtDoctorantMin: string ;
                public nombrePersonneMemeNonIrdMax: string ;
                public nombrePersonneMemeNonIrdMin: string ;
                public nombrePersonneMemeSousConventionsOuContratProjetMax: string ;
                public nombrePersonneMemeSousConventionsOuContratProjetMin: string ;
    public chercheurVo: ChercheurVo = new ChercheurVo();
        


}
