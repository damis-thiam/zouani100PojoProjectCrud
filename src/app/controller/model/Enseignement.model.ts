import {TypeEnseignementDispenseVo} from './TypeEnseignementDispense.model';
import {PaysVo} from './Pays.model';
import {ChercheurVo} from './Chercheur.model';
import {NiveauEtudeEnseignementVo} from './NiveauEtudeEnseignement.model';
import {ModaliteEtudeEnseignementVo} from './ModaliteEtudeEnseignement.model';
import {EtablissementEnseignementVo} from './EtablissementEnseignement.model';
import {NatureEnseignementVo} from './NatureEnseignement.model';

export class EnseignementVo {
    public id: number;
    public annee: number;
    public tempsEstimePourCetteAnnne: number;
    public nombreHeureDispenseesDansAnnee: number;
    public denominationEnseignement: string;
                public anneeMax: string ;
                public anneeMin: string ;
                public tempsEstimePourCetteAnnneMax: string ;
                public tempsEstimePourCetteAnnneMin: string ;
                public nombreHeureDispenseesDansAnneeMax: string ;
                public nombreHeureDispenseesDansAnneeMin: string ;
    public typeEnseignementDispenseVo: TypeEnseignementDispenseVo = new TypeEnseignementDispenseVo();
        
    public paysEtablissementEnseignementVo: PaysVo = new PaysVo();
        
    public chercheurVo: ChercheurVo = new ChercheurVo();
        
    public niveauEtudeEnseignementsVo: Array<NiveauEtudeEnseignementVo>;
    public modaliteEtudeEnseignementsVo: Array<ModaliteEtudeEnseignementVo>;
    public etablissementEnseignementsVo: Array<EtablissementEnseignementVo>;
    public natureEnseignementsVo: Array<NatureEnseignementVo>;


}
