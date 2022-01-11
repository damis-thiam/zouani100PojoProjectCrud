import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {EntiteAdministrativeVo} from '../model/EntiteAdministrative.model';
import {TypeEntiteAdministrativeVo} from '../model/TypeEntiteAdministrative.model';


@Injectable({
  providedIn: 'root'
})
export class EntiteAdministrativeService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/entiteAdministrative/';
        })
    }
     private _entiteAdministratives: Array<EntiteAdministrativeVo> = [];
     private _selectedEntiteAdministrative: EntiteAdministrativeVo = new EntiteAdministrativeVo();
     private _entiteAdministrativeSelections: Array<EntiteAdministrativeVo>;
     private _createEntiteAdministrativeDialog: boolean;
     private _editEntiteAdministrativeDialog: boolean;
     private _viewEntiteAdministrativeDialog: boolean;
     public editEntiteAdministrative$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchEntiteAdministrative:EntiteAdministrativeVo = new EntiteAdministrativeVo();


    // getters and setters


    get entiteAdministratives(): Array<EntiteAdministrativeVo> {
        return this._entiteAdministratives == null ? this._entiteAdministratives =   new Array<EntiteAdministrativeVo>() : this._entiteAdministratives;
       }
    set entiteAdministratives(value: Array<EntiteAdministrativeVo>) {
        this._entiteAdministratives = value;
       }
    get selectedEntiteAdministrative(): EntiteAdministrativeVo {
           return this._selectedEntiteAdministrative;
       }
    set selectedEntiteAdministrative(value: EntiteAdministrativeVo) {
        this._selectedEntiteAdministrative = value;
       }
    get entiteAdministrativeSelections(): Array<EntiteAdministrativeVo> {
        return this._entiteAdministrativeSelections;
       }
    set entiteAdministrativeSelections(value: Array<EntiteAdministrativeVo>) {
        this._entiteAdministrativeSelections = value;
       }
    get createEntiteAdministrativeDialog(): boolean {
        return this._createEntiteAdministrativeDialog;
       }
    set createEntiteAdministrativeDialog(value: boolean) {
        this._createEntiteAdministrativeDialog = value;
       }

    get editEntiteAdministrativeDialog(): boolean {
        return this._editEntiteAdministrativeDialog;
       }
    set editEntiteAdministrativeDialog(value: boolean) {
        this._editEntiteAdministrativeDialog = value;
       }

    get viewEntiteAdministrativeDialog(): boolean {
        return this._viewEntiteAdministrativeDialog;
       }
    set viewEntiteAdministrativeDialog(value: boolean) {
        this._viewEntiteAdministrativeDialog = value;
       }
     get searchEntiteAdministrative(): EntiteAdministrativeVo {
        return this._searchEntiteAdministrative;
       }
    set searchEntiteAdministrative(value: EntiteAdministrativeVo) {
        this._searchEntiteAdministrative = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<EntiteAdministrativeVo>>(this.API);
    }
    
    public save(): Observable<EntiteAdministrativeVo> {
         return this.http.post<EntiteAdministrativeVo>(this.API, this.selectedEntiteAdministrative);
    }
    
    delete(entiteAdministrative: EntiteAdministrativeVo) {
         return this.http.delete<number>(this.API+"id/"+entiteAdministrative.id);
    }


    public edit(): Observable<EntiteAdministrativeVo> {
        return this.http.put<EntiteAdministrativeVo>(this.API, this.selectedEntiteAdministrative);
    }
    

     public findByCriteria(entiteAdministrative:EntiteAdministrativeVo):Observable<Array<EntiteAdministrativeVo>>{
           return this.http.post<Array<EntiteAdministrativeVo>>(this.API+"search",entiteAdministrative);
    }



}