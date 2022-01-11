import {ConseilEtComiteScientifiqueVo} from './ConseilEtComiteScientifique.model';
import {DisciplineScientifiqueVo} from './DisciplineScientifique.model';

export class DisciplineScientifiqueConseilEtComiteScientifiqueVo {
    public id: number;
    public disciplineScientifiqueVo: DisciplineScientifiqueVo = new DisciplineScientifiqueVo();
        
    public conseilEtComiteScientifiqueVo: ConseilEtComiteScientifiqueVo = new ConseilEtComiteScientifiqueVo();
        


}
