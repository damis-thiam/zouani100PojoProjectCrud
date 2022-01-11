import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {DeveloppementDeSavoirEtInnovationScientifiqueVo} from '../model/DeveloppementDeSavoirEtInnovationScientifique.model';
import {PaysVo} from '../model/Pays.model';


@Injectable({
  providedIn: 'root'
})
export class DeveloppementDeSavoirEtInnovationScientifiqueService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/developpementDeSavoirEtInnovationScientifique/';
        })
    }
     private _developpementDeSavoirEtInnovationScientifiques: Array<DeveloppementDeSavoirEtInnovationScientifiqueVo> = [];
     private _selectedDeveloppementDeSavoirEtInnovationScientifique: DeveloppementDeSavoirEtInnovationScientifiqueVo = new DeveloppementDeSavoirEtInnovationScientifiqueVo();
     private _developpementDeSavoirEtInnovationScientifiqueSelections: Array<DeveloppementDeSavoirEtInnovationScientifiqueVo>;
     private _createDeveloppementDeSavoirEtInnovationScientifiqueDialog: boolean;
     private _editDeveloppementDeSavoirEtInnovationScientifiqueDialog: boolean;
     private _viewDeveloppementDeSavoirEtInnovationScientifiqueDialog: boolean;
     public editDeveloppementDeSavoirEtInnovationScientifique$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchDeveloppementDeSavoirEtInnovationScientifique:DeveloppementDeSavoirEtInnovationScientifiqueVo = new DeveloppementDeSavoirEtInnovationScientifiqueVo();


    // getters and setters


    get developpementDeSavoirEtInnovationScientifiques(): Array<DeveloppementDeSavoirEtInnovationScientifiqueVo> {
        return this._developpementDeSavoirEtInnovationScientifiques == null ? this._developpementDeSavoirEtInnovationScientifiques =   new Array<DeveloppementDeSavoirEtInnovationScientifiqueVo>() : this._developpementDeSavoirEtInnovationScientifiques;
       }
    set developpementDeSavoirEtInnovationScientifiques(value: Array<DeveloppementDeSavoirEtInnovationScientifiqueVo>) {
        this._developpementDeSavoirEtInnovationScientifiques = value;
       }
    get selectedDeveloppementDeSavoirEtInnovationScientifique(): DeveloppementDeSavoirEtInnovationScientifiqueVo {
           return this._selectedDeveloppementDeSavoirEtInnovationScientifique;
       }
    set selectedDeveloppementDeSavoirEtInnovationScientifique(value: DeveloppementDeSavoirEtInnovationScientifiqueVo) {
        this._selectedDeveloppementDeSavoirEtInnovationScientifique = value;
       }
    get developpementDeSavoirEtInnovationScientifiqueSelections(): Array<DeveloppementDeSavoirEtInnovationScientifiqueVo> {
        return this._developpementDeSavoirEtInnovationScientifiqueSelections;
       }
    set developpementDeSavoirEtInnovationScientifiqueSelections(value: Array<DeveloppementDeSavoirEtInnovationScientifiqueVo>) {
        this._developpementDeSavoirEtInnovationScientifiqueSelections = value;
       }
    get createDeveloppementDeSavoirEtInnovationScientifiqueDialog(): boolean {
        return this._createDeveloppementDeSavoirEtInnovationScientifiqueDialog;
       }
    set createDeveloppementDeSavoirEtInnovationScientifiqueDialog(value: boolean) {
        this._createDeveloppementDeSavoirEtInnovationScientifiqueDialog = value;
       }

    get editDeveloppementDeSavoirEtInnovationScientifiqueDialog(): boolean {
        return this._editDeveloppementDeSavoirEtInnovationScientifiqueDialog;
       }
    set editDeveloppementDeSavoirEtInnovationScientifiqueDialog(value: boolean) {
        this._editDeveloppementDeSavoirEtInnovationScientifiqueDialog = value;
       }

    get viewDeveloppementDeSavoirEtInnovationScientifiqueDialog(): boolean {
        return this._viewDeveloppementDeSavoirEtInnovationScientifiqueDialog;
       }
    set viewDeveloppementDeSavoirEtInnovationScientifiqueDialog(value: boolean) {
        this._viewDeveloppementDeSavoirEtInnovationScientifiqueDialog = value;
       }
     get searchDeveloppementDeSavoirEtInnovationScientifique(): DeveloppementDeSavoirEtInnovationScientifiqueVo {
        return this._searchDeveloppementDeSavoirEtInnovationScientifique;
       }
    set searchDeveloppementDeSavoirEtInnovationScientifique(value: DeveloppementDeSavoirEtInnovationScientifiqueVo) {
        this._searchDeveloppementDeSavoirEtInnovationScientifique = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<DeveloppementDeSavoirEtInnovationScientifiqueVo>>(this.API);
    }
    
    public save(): Observable<DeveloppementDeSavoirEtInnovationScientifiqueVo> {
         return this.http.post<DeveloppementDeSavoirEtInnovationScientifiqueVo>(this.API, this.selectedDeveloppementDeSavoirEtInnovationScientifique);
    }
    
    delete(developpementDeSavoirEtInnovationScientifique: DeveloppementDeSavoirEtInnovationScientifiqueVo) {
         return this.http.delete<number>(this.API+"id/"+developpementDeSavoirEtInnovationScientifique.id);
    }


    public edit(): Observable<DeveloppementDeSavoirEtInnovationScientifiqueVo> {
        return this.http.put<DeveloppementDeSavoirEtInnovationScientifiqueVo>(this.API, this.selectedDeveloppementDeSavoirEtInnovationScientifique);
    }
    

     public findByCriteria(developpementDeSavoirEtInnovationScientifique:DeveloppementDeSavoirEtInnovationScientifiqueVo):Observable<Array<DeveloppementDeSavoirEtInnovationScientifiqueVo>>{
           return this.http.post<Array<DeveloppementDeSavoirEtInnovationScientifiqueVo>>(this.API+"search",developpementDeSavoirEtInnovationScientifique);
    }



}