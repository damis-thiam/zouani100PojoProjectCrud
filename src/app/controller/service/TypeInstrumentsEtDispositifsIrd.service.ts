import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {TypeInstrumentsEtDispositifsIrdVo} from '../model/TypeInstrumentsEtDispositifsIrd.model';


@Injectable({
  providedIn: 'root'
})
export class TypeInstrumentsEtDispositifsIrdService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/typeInstrumentsEtDispositifsIrd/';
        })
    }
     private _typeInstrumentsEtDispositifsIrds: Array<TypeInstrumentsEtDispositifsIrdVo> = [];
     private _selectedTypeInstrumentsEtDispositifsIrd: TypeInstrumentsEtDispositifsIrdVo = new TypeInstrumentsEtDispositifsIrdVo();
     private _typeInstrumentsEtDispositifsIrdSelections: Array<TypeInstrumentsEtDispositifsIrdVo>;
     private _createTypeInstrumentsEtDispositifsIrdDialog: boolean;
     private _editTypeInstrumentsEtDispositifsIrdDialog: boolean;
     private _viewTypeInstrumentsEtDispositifsIrdDialog: boolean;
     public editTypeInstrumentsEtDispositifsIrd$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchTypeInstrumentsEtDispositifsIrd:TypeInstrumentsEtDispositifsIrdVo = new TypeInstrumentsEtDispositifsIrdVo();


    // getters and setters


    get typeInstrumentsEtDispositifsIrds(): Array<TypeInstrumentsEtDispositifsIrdVo> {
        return this._typeInstrumentsEtDispositifsIrds == null ? this._typeInstrumentsEtDispositifsIrds =   new Array<TypeInstrumentsEtDispositifsIrdVo>() : this._typeInstrumentsEtDispositifsIrds;
       }
    set typeInstrumentsEtDispositifsIrds(value: Array<TypeInstrumentsEtDispositifsIrdVo>) {
        this._typeInstrumentsEtDispositifsIrds = value;
       }
    get selectedTypeInstrumentsEtDispositifsIrd(): TypeInstrumentsEtDispositifsIrdVo {
           return this._selectedTypeInstrumentsEtDispositifsIrd;
       }
    set selectedTypeInstrumentsEtDispositifsIrd(value: TypeInstrumentsEtDispositifsIrdVo) {
        this._selectedTypeInstrumentsEtDispositifsIrd = value;
       }
    get typeInstrumentsEtDispositifsIrdSelections(): Array<TypeInstrumentsEtDispositifsIrdVo> {
        return this._typeInstrumentsEtDispositifsIrdSelections;
       }
    set typeInstrumentsEtDispositifsIrdSelections(value: Array<TypeInstrumentsEtDispositifsIrdVo>) {
        this._typeInstrumentsEtDispositifsIrdSelections = value;
       }
    get createTypeInstrumentsEtDispositifsIrdDialog(): boolean {
        return this._createTypeInstrumentsEtDispositifsIrdDialog;
       }
    set createTypeInstrumentsEtDispositifsIrdDialog(value: boolean) {
        this._createTypeInstrumentsEtDispositifsIrdDialog = value;
       }

    get editTypeInstrumentsEtDispositifsIrdDialog(): boolean {
        return this._editTypeInstrumentsEtDispositifsIrdDialog;
       }
    set editTypeInstrumentsEtDispositifsIrdDialog(value: boolean) {
        this._editTypeInstrumentsEtDispositifsIrdDialog = value;
       }

    get viewTypeInstrumentsEtDispositifsIrdDialog(): boolean {
        return this._viewTypeInstrumentsEtDispositifsIrdDialog;
       }
    set viewTypeInstrumentsEtDispositifsIrdDialog(value: boolean) {
        this._viewTypeInstrumentsEtDispositifsIrdDialog = value;
       }
     get searchTypeInstrumentsEtDispositifsIrd(): TypeInstrumentsEtDispositifsIrdVo {
        return this._searchTypeInstrumentsEtDispositifsIrd;
       }
    set searchTypeInstrumentsEtDispositifsIrd(value: TypeInstrumentsEtDispositifsIrdVo) {
        this._searchTypeInstrumentsEtDispositifsIrd = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<TypeInstrumentsEtDispositifsIrdVo>>(this.API);
    }
    
    public save(): Observable<TypeInstrumentsEtDispositifsIrdVo> {
         return this.http.post<TypeInstrumentsEtDispositifsIrdVo>(this.API, this.selectedTypeInstrumentsEtDispositifsIrd);
    }
    
    delete(typeInstrumentsEtDispositifsIrd: TypeInstrumentsEtDispositifsIrdVo) {
         return this.http.delete<number>(this.API+"id/"+typeInstrumentsEtDispositifsIrd.id);
    }


    public edit(): Observable<TypeInstrumentsEtDispositifsIrdVo> {
        return this.http.put<TypeInstrumentsEtDispositifsIrdVo>(this.API, this.selectedTypeInstrumentsEtDispositifsIrd);
    }
    

     public findByCriteria(typeInstrumentsEtDispositifsIrd:TypeInstrumentsEtDispositifsIrdVo):Observable<Array<TypeInstrumentsEtDispositifsIrdVo>>{
           return this.http.post<Array<TypeInstrumentsEtDispositifsIrdVo>>(this.API+"search",typeInstrumentsEtDispositifsIrd);
    }



}