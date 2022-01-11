import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {CommunauteSavoirEvenementColloqueScientifiquesVo} from '../model/CommunauteSavoirEvenementColloqueScientifiques.model';
import {EvenementColloqueScienntifiqueVo} from '../model/EvenementColloqueScienntifique.model';
import {CommunauteSavoirVo} from '../model/CommunauteSavoir.model';


@Injectable({
  providedIn: 'root'
})
export class CommunauteSavoirEvenementColloqueScientifiquesService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/communauteSavoirEvenementColloqueScientifiques/';
        })
    }
     private _communauteSavoirEvenementColloqueScientifiquess: Array<CommunauteSavoirEvenementColloqueScientifiquesVo> = [];
     private _selectedCommunauteSavoirEvenementColloqueScientifiques: CommunauteSavoirEvenementColloqueScientifiquesVo = new CommunauteSavoirEvenementColloqueScientifiquesVo();
     private _communauteSavoirEvenementColloqueScientifiquesSelections: Array<CommunauteSavoirEvenementColloqueScientifiquesVo>;
     private _createCommunauteSavoirEvenementColloqueScientifiquesDialog: boolean;
     private _editCommunauteSavoirEvenementColloqueScientifiquesDialog: boolean;
     private _viewCommunauteSavoirEvenementColloqueScientifiquesDialog: boolean;
     public editCommunauteSavoirEvenementColloqueScientifiques$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchCommunauteSavoirEvenementColloqueScientifiques:CommunauteSavoirEvenementColloqueScientifiquesVo = new CommunauteSavoirEvenementColloqueScientifiquesVo();


    // getters and setters


    get communauteSavoirEvenementColloqueScientifiquess(): Array<CommunauteSavoirEvenementColloqueScientifiquesVo> {
        return this._communauteSavoirEvenementColloqueScientifiquess == null ? this._communauteSavoirEvenementColloqueScientifiquess =   new Array<CommunauteSavoirEvenementColloqueScientifiquesVo>() : this._communauteSavoirEvenementColloqueScientifiquess;
       }
    set communauteSavoirEvenementColloqueScientifiquess(value: Array<CommunauteSavoirEvenementColloqueScientifiquesVo>) {
        this._communauteSavoirEvenementColloqueScientifiquess = value;
       }
    get selectedCommunauteSavoirEvenementColloqueScientifiques(): CommunauteSavoirEvenementColloqueScientifiquesVo {
           return this._selectedCommunauteSavoirEvenementColloqueScientifiques;
       }
    set selectedCommunauteSavoirEvenementColloqueScientifiques(value: CommunauteSavoirEvenementColloqueScientifiquesVo) {
        this._selectedCommunauteSavoirEvenementColloqueScientifiques = value;
       }
    get communauteSavoirEvenementColloqueScientifiquesSelections(): Array<CommunauteSavoirEvenementColloqueScientifiquesVo> {
        return this._communauteSavoirEvenementColloqueScientifiquesSelections;
       }
    set communauteSavoirEvenementColloqueScientifiquesSelections(value: Array<CommunauteSavoirEvenementColloqueScientifiquesVo>) {
        this._communauteSavoirEvenementColloqueScientifiquesSelections = value;
       }
    get createCommunauteSavoirEvenementColloqueScientifiquesDialog(): boolean {
        return this._createCommunauteSavoirEvenementColloqueScientifiquesDialog;
       }
    set createCommunauteSavoirEvenementColloqueScientifiquesDialog(value: boolean) {
        this._createCommunauteSavoirEvenementColloqueScientifiquesDialog = value;
       }

    get editCommunauteSavoirEvenementColloqueScientifiquesDialog(): boolean {
        return this._editCommunauteSavoirEvenementColloqueScientifiquesDialog;
       }
    set editCommunauteSavoirEvenementColloqueScientifiquesDialog(value: boolean) {
        this._editCommunauteSavoirEvenementColloqueScientifiquesDialog = value;
       }

    get viewCommunauteSavoirEvenementColloqueScientifiquesDialog(): boolean {
        return this._viewCommunauteSavoirEvenementColloqueScientifiquesDialog;
       }
    set viewCommunauteSavoirEvenementColloqueScientifiquesDialog(value: boolean) {
        this._viewCommunauteSavoirEvenementColloqueScientifiquesDialog = value;
       }
     get searchCommunauteSavoirEvenementColloqueScientifiques(): CommunauteSavoirEvenementColloqueScientifiquesVo {
        return this._searchCommunauteSavoirEvenementColloqueScientifiques;
       }
    set searchCommunauteSavoirEvenementColloqueScientifiques(value: CommunauteSavoirEvenementColloqueScientifiquesVo) {
        this._searchCommunauteSavoirEvenementColloqueScientifiques = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<CommunauteSavoirEvenementColloqueScientifiquesVo>>(this.API);
    }
    
    public save(): Observable<CommunauteSavoirEvenementColloqueScientifiquesVo> {
         return this.http.post<CommunauteSavoirEvenementColloqueScientifiquesVo>(this.API, this.selectedCommunauteSavoirEvenementColloqueScientifiques);
    }
    
    delete(communauteSavoirEvenementColloqueScientifiques: CommunauteSavoirEvenementColloqueScientifiquesVo) {
         return this.http.delete<number>(this.API+"id/"+communauteSavoirEvenementColloqueScientifiques.id);
    }


    public edit(): Observable<CommunauteSavoirEvenementColloqueScientifiquesVo> {
        return this.http.put<CommunauteSavoirEvenementColloqueScientifiquesVo>(this.API, this.selectedCommunauteSavoirEvenementColloqueScientifiques);
    }
    

     public findByCriteria(communauteSavoirEvenementColloqueScientifiques:CommunauteSavoirEvenementColloqueScientifiquesVo):Observable<Array<CommunauteSavoirEvenementColloqueScientifiquesVo>>{
           return this.http.post<Array<CommunauteSavoirEvenementColloqueScientifiquesVo>>(this.API+"search",communauteSavoirEvenementColloqueScientifiques);
    }



}