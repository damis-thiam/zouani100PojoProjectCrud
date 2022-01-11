import {CategorieFoireQuestionVo} from './CategorieFoireQuestion.model';

export class FoireQuestionVo {
    public id: number;
    public question: string;
    public reponse: string;
    public numeroOrdre: number;
                public numeroOrdreMax: string ;
                public numeroOrdreMin: string ;
    public categorieFoireQuestionVo: CategorieFoireQuestionVo = new CategorieFoireQuestionVo();
        


}
