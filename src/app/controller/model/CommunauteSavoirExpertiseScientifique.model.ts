import {ExpertiseScientifiqueVo} from './ExpertiseScientifique.model';
import {CommunauteSavoirVo} from './CommunauteSavoir.model';

export class CommunauteSavoirExpertiseScientifiqueVo {
    public id: number;
    public communauteSavoirVo: CommunauteSavoirVo = new CommunauteSavoirVo();
        
    public experiseScientifiqueVo: ExpertiseScientifiqueVo = new ExpertiseScientifiqueVo();
        


}
