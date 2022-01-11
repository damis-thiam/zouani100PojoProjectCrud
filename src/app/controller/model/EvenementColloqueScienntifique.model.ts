import {ModaliteVo} from './Modalite.model';
import {PaysVo} from './Pays.model';
import {CommunauteSavoirEvenementColloqueScientifiquesVo} from './CommunauteSavoirEvenementColloqueScientifiques.model';
import {DisciplineScientifiqueEvenementColloqueScientifiquesVo} from './DisciplineScientifiqueEvenementColloqueScientifiques.model';

export class EvenementColloqueScienntifiqueVo {
    public id: number;
    public tempsEstime: number;
    public typeDeParticipation: string;
    public intitule: string;
    public periodeEvenementAnnee: number;
    public periodeEvenementMois: number;
    public diplomatieScientifiques: boolean;
    public volumeParticipant: number;
    public financementEvenement: string;
    public typeEvenement: string;
    public partIrd: string;
                public tempsEstimeMax: string ;
                public tempsEstimeMin: string ;
                public periodeEvenementAnneeMax: string ;
                public periodeEvenementAnneeMin: string ;
                public periodeEvenementMoisMax: string ;
                public periodeEvenementMoisMin: string ;
                public volumeParticipantMax: string ;
                public volumeParticipantMin: string ;
    public modaliteVo: ModaliteVo = new ModaliteVo();
        
    public paysEvenementVo: PaysVo = new PaysVo();
        
    public communauteSavoirEvenementColloqueScientifiquesVo: Array<CommunauteSavoirEvenementColloqueScientifiquesVo>;
    public disciplineScientifiqueEvenementColloqueScientifiquesVo: Array<DisciplineScientifiqueEvenementColloqueScientifiquesVo>;


}
