import {ExpertiseScientifiqueVo} from './ExpertiseScientifique.model';
import {DisciplineScientifiqueVo} from './DisciplineScientifique.model';

export class DisciplineScientifiqueExpertiseScientifiqueVo {
    public id: number;
    public disciplineScientifiqueVo: DisciplineScientifiqueVo = new DisciplineScientifiqueVo();
        
    public experiseScientifiqueVo: ExpertiseScientifiqueVo = new ExpertiseScientifiqueVo();
        


}
