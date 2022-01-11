import {TypeEntiteAdministrativeVo} from './TypeEntiteAdministrative.model';

export class EntiteAdministrativeVo {
    public id: number;
    public libelle: string;
    public code: string;
    public description: string;
    public entiteAdministrativeSuperieureVo: EntiteAdministrativeVo = new EntiteAdministrativeVo();
        
    public typeEntiteAdministrativeVo: TypeEntiteAdministrativeVo = new TypeEntiteAdministrativeVo();
        


}
