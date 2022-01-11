import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo} from '../model/ModeDiffusionDeveloppementDeSavoirEtInnovationScientifique.model';
import {ModeDiffusionVo} from '../model/ModeDiffusion.model';
import {DeveloppementDeSavoirEtInnovationScientifiqueVo} from '../model/DeveloppementDeSavoirEtInnovationScientifique.model';


@Injectable({
  providedIn: 'root'
})
export class ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/modeDiffusionDeveloppementDeSavoirEtInnovationScientifique/';
        })
    }
     private _modeDiffusionDeveloppementDeSavoirEtInnovationScientifiques: Array<ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo> = [];
     private _selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique: ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo = new ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo();
     private _modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueSelections: Array<ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo>;
     private _createModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog: boolean;
     private _editModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog: boolean;
     private _viewModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog: boolean;
     public editModeDiffusionDeveloppementDeSavoirEtInnovationScientifique$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchModeDiffusionDeveloppementDeSavoirEtInnovationScientifique:ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo = new ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo();


    // getters and setters


    get modeDiffusionDeveloppementDeSavoirEtInnovationScientifiques(): Array<ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo> {
        return this._modeDiffusionDeveloppementDeSavoirEtInnovationScientifiques == null ? this._modeDiffusionDeveloppementDeSavoirEtInnovationScientifiques =   new Array<ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo>() : this._modeDiffusionDeveloppementDeSavoirEtInnovationScientifiques;
       }
    set modeDiffusionDeveloppementDeSavoirEtInnovationScientifiques(value: Array<ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo>) {
        this._modeDiffusionDeveloppementDeSavoirEtInnovationScientifiques = value;
       }
    get selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique(): ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo {
           return this._selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique;
       }
    set selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique(value: ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo) {
        this._selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique = value;
       }
    get modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueSelections(): Array<ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo> {
        return this._modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueSelections;
       }
    set modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueSelections(value: Array<ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo>) {
        this._modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueSelections = value;
       }
    get createModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog(): boolean {
        return this._createModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog;
       }
    set createModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog(value: boolean) {
        this._createModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog = value;
       }

    get editModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog(): boolean {
        return this._editModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog;
       }
    set editModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog(value: boolean) {
        this._editModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog = value;
       }

    get viewModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog(): boolean {
        return this._viewModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog;
       }
    set viewModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog(value: boolean) {
        this._viewModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog = value;
       }
     get searchModeDiffusionDeveloppementDeSavoirEtInnovationScientifique(): ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo {
        return this._searchModeDiffusionDeveloppementDeSavoirEtInnovationScientifique;
       }
    set searchModeDiffusionDeveloppementDeSavoirEtInnovationScientifique(value: ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo) {
        this._searchModeDiffusionDeveloppementDeSavoirEtInnovationScientifique = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo>>(this.API);
    }
    
    public save(): Observable<ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo> {
         return this.http.post<ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo>(this.API, this.selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique);
    }
    
    delete(modeDiffusionDeveloppementDeSavoirEtInnovationScientifique: ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo) {
         return this.http.delete<number>(this.API+"id/"+modeDiffusionDeveloppementDeSavoirEtInnovationScientifique.id);
    }


    public edit(): Observable<ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo> {
        return this.http.put<ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo>(this.API, this.selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique);
    }
    

     public findByCriteria(modeDiffusionDeveloppementDeSavoirEtInnovationScientifique:ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo):Observable<Array<ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo>>{
           return this.http.post<Array<ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo>>(this.API+"search",modeDiffusionDeveloppementDeSavoirEtInnovationScientifique);
    }



}