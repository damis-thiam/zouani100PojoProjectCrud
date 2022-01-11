import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {ObjetGlobalVo} from '../model/ObjetGlobal.model';


@Injectable({
  providedIn: 'root'
})
export class ObjetGlobalService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/objetGlobal/';
        })
    }
     private _objetGlobals: Array<ObjetGlobalVo> = [];
     private _selectedObjetGlobal: ObjetGlobalVo = new ObjetGlobalVo();
     private _objetGlobalSelections: Array<ObjetGlobalVo>;
     private _createObjetGlobalDialog: boolean;
     private _editObjetGlobalDialog: boolean;
     private _viewObjetGlobalDialog: boolean;
     public editObjetGlobal$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchObjetGlobal:ObjetGlobalVo = new ObjetGlobalVo();


    // getters and setters


    get objetGlobals(): Array<ObjetGlobalVo> {
        return this._objetGlobals == null ? this._objetGlobals =   new Array<ObjetGlobalVo>() : this._objetGlobals;
       }
    set objetGlobals(value: Array<ObjetGlobalVo>) {
        this._objetGlobals = value;
       }
    get selectedObjetGlobal(): ObjetGlobalVo {
           return this._selectedObjetGlobal;
       }
    set selectedObjetGlobal(value: ObjetGlobalVo) {
        this._selectedObjetGlobal = value;
       }
    get objetGlobalSelections(): Array<ObjetGlobalVo> {
        return this._objetGlobalSelections;
       }
    set objetGlobalSelections(value: Array<ObjetGlobalVo>) {
        this._objetGlobalSelections = value;
       }
    get createObjetGlobalDialog(): boolean {
        return this._createObjetGlobalDialog;
       }
    set createObjetGlobalDialog(value: boolean) {
        this._createObjetGlobalDialog = value;
       }

    get editObjetGlobalDialog(): boolean {
        return this._editObjetGlobalDialog;
       }
    set editObjetGlobalDialog(value: boolean) {
        this._editObjetGlobalDialog = value;
       }

    get viewObjetGlobalDialog(): boolean {
        return this._viewObjetGlobalDialog;
       }
    set viewObjetGlobalDialog(value: boolean) {
        this._viewObjetGlobalDialog = value;
       }
     get searchObjetGlobal(): ObjetGlobalVo {
        return this._searchObjetGlobal;
       }
    set searchObjetGlobal(value: ObjetGlobalVo) {
        this._searchObjetGlobal = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<ObjetGlobalVo>>(this.API);
    }
    
    public save(): Observable<ObjetGlobalVo> {
         return this.http.post<ObjetGlobalVo>(this.API, this.selectedObjetGlobal);
    }
    
    delete(objetGlobal: ObjetGlobalVo) {
         return this.http.delete<number>(this.API+"id/"+objetGlobal.id);
    }


    public edit(): Observable<ObjetGlobalVo> {
        return this.http.put<ObjetGlobalVo>(this.API, this.selectedObjetGlobal);
    }
    

     public findByCriteria(objetGlobal:ObjetGlobalVo):Observable<Array<ObjetGlobalVo>>{
           return this.http.post<Array<ObjetGlobalVo>>(this.API+"search",objetGlobal);
    }



}