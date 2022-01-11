import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {CommunauteSavoirExpertiseScientifiqueVo} from '../model/CommunauteSavoirExpertiseScientifique.model';
import {ExpertiseScientifiqueVo} from '../model/ExpertiseScientifique.model';
import {CommunauteSavoirVo} from '../model/CommunauteSavoir.model';


@Injectable({
  providedIn: 'root'
})
export class CommunauteSavoirExpertiseScientifiqueService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/communauteSavoirExpertiseScientifique/';
        })
    }
     private _communauteSavoirExpertiseScientifiques: Array<CommunauteSavoirExpertiseScientifiqueVo> = [];
     private _selectedCommunauteSavoirExpertiseScientifique: CommunauteSavoirExpertiseScientifiqueVo = new CommunauteSavoirExpertiseScientifiqueVo();
     private _communauteSavoirExpertiseScientifiqueSelections: Array<CommunauteSavoirExpertiseScientifiqueVo>;
     private _createCommunauteSavoirExpertiseScientifiqueDialog: boolean;
     private _editCommunauteSavoirExpertiseScientifiqueDialog: boolean;
     private _viewCommunauteSavoirExpertiseScientifiqueDialog: boolean;
     public editCommunauteSavoirExpertiseScientifique$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchCommunauteSavoirExpertiseScientifique:CommunauteSavoirExpertiseScientifiqueVo = new CommunauteSavoirExpertiseScientifiqueVo();


    // getters and setters


    get communauteSavoirExpertiseScientifiques(): Array<CommunauteSavoirExpertiseScientifiqueVo> {
        return this._communauteSavoirExpertiseScientifiques == null ? this._communauteSavoirExpertiseScientifiques =   new Array<CommunauteSavoirExpertiseScientifiqueVo>() : this._communauteSavoirExpertiseScientifiques;
       }
    set communauteSavoirExpertiseScientifiques(value: Array<CommunauteSavoirExpertiseScientifiqueVo>) {
        this._communauteSavoirExpertiseScientifiques = value;
       }
    get selectedCommunauteSavoirExpertiseScientifique(): CommunauteSavoirExpertiseScientifiqueVo {
           return this._selectedCommunauteSavoirExpertiseScientifique;
       }
    set selectedCommunauteSavoirExpertiseScientifique(value: CommunauteSavoirExpertiseScientifiqueVo) {
        this._selectedCommunauteSavoirExpertiseScientifique = value;
       }
    get communauteSavoirExpertiseScientifiqueSelections(): Array<CommunauteSavoirExpertiseScientifiqueVo> {
        return this._communauteSavoirExpertiseScientifiqueSelections;
       }
    set communauteSavoirExpertiseScientifiqueSelections(value: Array<CommunauteSavoirExpertiseScientifiqueVo>) {
        this._communauteSavoirExpertiseScientifiqueSelections = value;
       }
    get createCommunauteSavoirExpertiseScientifiqueDialog(): boolean {
        return this._createCommunauteSavoirExpertiseScientifiqueDialog;
       }
    set createCommunauteSavoirExpertiseScientifiqueDialog(value: boolean) {
        this._createCommunauteSavoirExpertiseScientifiqueDialog = value;
       }

    get editCommunauteSavoirExpertiseScientifiqueDialog(): boolean {
        return this._editCommunauteSavoirExpertiseScientifiqueDialog;
       }
    set editCommunauteSavoirExpertiseScientifiqueDialog(value: boolean) {
        this._editCommunauteSavoirExpertiseScientifiqueDialog = value;
       }

    get viewCommunauteSavoirExpertiseScientifiqueDialog(): boolean {
        return this._viewCommunauteSavoirExpertiseScientifiqueDialog;
       }
    set viewCommunauteSavoirExpertiseScientifiqueDialog(value: boolean) {
        this._viewCommunauteSavoirExpertiseScientifiqueDialog = value;
       }
     get searchCommunauteSavoirExpertiseScientifique(): CommunauteSavoirExpertiseScientifiqueVo {
        return this._searchCommunauteSavoirExpertiseScientifique;
       }
    set searchCommunauteSavoirExpertiseScientifique(value: CommunauteSavoirExpertiseScientifiqueVo) {
        this._searchCommunauteSavoirExpertiseScientifique = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<CommunauteSavoirExpertiseScientifiqueVo>>(this.API);
    }
    
    public save(): Observable<CommunauteSavoirExpertiseScientifiqueVo> {
         return this.http.post<CommunauteSavoirExpertiseScientifiqueVo>(this.API, this.selectedCommunauteSavoirExpertiseScientifique);
    }
    
    delete(communauteSavoirExpertiseScientifique: CommunauteSavoirExpertiseScientifiqueVo) {
         return this.http.delete<number>(this.API+"id/"+communauteSavoirExpertiseScientifique.id);
    }


    public edit(): Observable<CommunauteSavoirExpertiseScientifiqueVo> {
        return this.http.put<CommunauteSavoirExpertiseScientifiqueVo>(this.API, this.selectedCommunauteSavoirExpertiseScientifique);
    }
    

     public findByCriteria(communauteSavoirExpertiseScientifique:CommunauteSavoirExpertiseScientifiqueVo):Observable<Array<CommunauteSavoirExpertiseScientifiqueVo>>{
           return this.http.post<Array<CommunauteSavoirExpertiseScientifiqueVo>>(this.API+"search",communauteSavoirExpertiseScientifique);
    }



}