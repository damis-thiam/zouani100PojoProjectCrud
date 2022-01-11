import {DirectionEncadrementDoctorantVo} from './DirectionEncadrementDoctorant.model';
import {CommunauteSavoirVo} from './CommunauteSavoir.model';

export class CommunauteSavoirDirectionEncadrementDoctorantVo {
    public id: number;
    public communauteSavoirVo: CommunauteSavoirVo = new CommunauteSavoirVo();
        
    public directionEncadrementDoctorantVo: DirectionEncadrementDoctorantVo = new DirectionEncadrementDoctorantVo();
        


}
