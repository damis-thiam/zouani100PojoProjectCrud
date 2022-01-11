import {PaysVo} from './Pays.model';
import {TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo} from './TypeSavoirDeveloppementDeSavoirEtInnovationScientifique.model';
import {ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo} from './ModeDiffusionDeveloppementDeSavoirEtInnovationScientifique.model';
import {CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo} from './CaracterisationDeveloppementDeSavoirEtInnovationScientifique.model';

export class DeveloppementDeSavoirEtInnovationScientifiqueVo {
    public id: number;
    public titreInstrument: string;
    public role: string;
    public anneeMiseEnOeuvre: number;
    public codeveloppeurs: string;
    public lienWeb: string;
                public anneeMiseEnOeuvreMax: string ;
                public anneeMiseEnOeuvreMin: string ;
    public paysDiffusionVo: PaysVo = new PaysVo();
        
    public typeSavoirDeveloppementDeSavoirEtInnovationScientifiquesVo: Array<TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo>;
    public modeDiffusionsVo: Array<ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo>;
    public caracterisationUtilisateursVo: Array<CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo>;


}
