import {EncadrementEtudiantVo} from './EncadrementEtudiant.model';
import {DisciplineScientifiqueVo} from './DisciplineScientifique.model';

export class DisciplineScientifiqueEncadrementEtudiantVo {
    public id: number;
    public disciplineScientifiqueVo: DisciplineScientifiqueVo = new DisciplineScientifiqueVo();
        
    public encadrementEtudiantVo: EncadrementEtudiantVo = new EncadrementEtudiantVo();
        


}
