import {ProjetActiviteRechercheVo} from './ProjetActiviteRecherche.model';
import {TypeParticipationVo} from './TypeParticipation.model';

export class BourseVo {
    public id: number;
    public dateObtention: string;
    public intitule: string;
    public montant: number;
    public dureeEnMois: number;
                public dateObtentionMax: string ;
                public dateObtentionMin: string ;
                public montantMax: string ;
                public montantMin: string ;
                public dureeEnMoisMax: string ;
                public dureeEnMoisMin: string ;
    public typeParticipationVo: TypeParticipationVo = new TypeParticipationVo();
        
    public projetActiviteRechercheVo: ProjetActiviteRechercheVo = new ProjetActiviteRechercheVo();
        


}
