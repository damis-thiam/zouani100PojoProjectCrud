import {ConseilEtComiteScientifiqueVo} from './ConseilEtComiteScientifique.model';
import {CommunauteSavoirVo} from './CommunauteSavoir.model';

export class CommunauteSavoirConseilEtComiteScientifiqueVo {
    public id: number;
    public communauteSavoirVo: CommunauteSavoirVo = new CommunauteSavoirVo();
        
    public conseilEtComiteScientifiqueVo: ConseilEtComiteScientifiqueVo = new ConseilEtComiteScientifiqueVo();
        


}
