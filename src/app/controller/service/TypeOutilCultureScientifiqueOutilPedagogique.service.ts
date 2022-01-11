import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {TypeOutilCultureScientifiqueOutilPedagogiqueVo} from '../model/TypeOutilCultureScientifiqueOutilPedagogique.model';
import {TypeOutilVo} from '../model/TypeOutil.model';
import {CultureScientifiqueOutilPedagogiqueVo} from '../model/CultureScientifiqueOutilPedagogique.model';


@Injectable({
  providedIn: 'root'
})
export class TypeOutilCultureScientifiqueOutilPedagogiqueService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/typeOutilCultureScientifiqueOutilPedagogique/';
        })
    }
     private _typeOutilCultureScientifiqueOutilPedagogiques: Array<TypeOutilCultureScientifiqueOutilPedagogiqueVo> = [];
     private _selectedTypeOutilCultureScientifiqueOutilPedagogique: TypeOutilCultureScientifiqueOutilPedagogiqueVo = new TypeOutilCultureScientifiqueOutilPedagogiqueVo();
     private _typeOutilCultureScientifiqueOutilPedagogiqueSelections: Array<TypeOutilCultureScientifiqueOutilPedagogiqueVo>;
     private _createTypeOutilCultureScientifiqueOutilPedagogiqueDialog: boolean;
     private _editTypeOutilCultureScientifiqueOutilPedagogiqueDialog: boolean;
     private _viewTypeOutilCultureScientifiqueOutilPedagogiqueDialog: boolean;
     public editTypeOutilCultureScientifiqueOutilPedagogique$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchTypeOutilCultureScientifiqueOutilPedagogique:TypeOutilCultureScientifiqueOutilPedagogiqueVo = new TypeOutilCultureScientifiqueOutilPedagogiqueVo();


    // getters and setters


    get typeOutilCultureScientifiqueOutilPedagogiques(): Array<TypeOutilCultureScientifiqueOutilPedagogiqueVo> {
        return this._typeOutilCultureScientifiqueOutilPedagogiques == null ? this._typeOutilCultureScientifiqueOutilPedagogiques =   new Array<TypeOutilCultureScientifiqueOutilPedagogiqueVo>() : this._typeOutilCultureScientifiqueOutilPedagogiques;
       }
    set typeOutilCultureScientifiqueOutilPedagogiques(value: Array<TypeOutilCultureScientifiqueOutilPedagogiqueVo>) {
        this._typeOutilCultureScientifiqueOutilPedagogiques = value;
       }
    get selectedTypeOutilCultureScientifiqueOutilPedagogique(): TypeOutilCultureScientifiqueOutilPedagogiqueVo {
           return this._selectedTypeOutilCultureScientifiqueOutilPedagogique;
       }
    set selectedTypeOutilCultureScientifiqueOutilPedagogique(value: TypeOutilCultureScientifiqueOutilPedagogiqueVo) {
        this._selectedTypeOutilCultureScientifiqueOutilPedagogique = value;
       }
    get typeOutilCultureScientifiqueOutilPedagogiqueSelections(): Array<TypeOutilCultureScientifiqueOutilPedagogiqueVo> {
        return this._typeOutilCultureScientifiqueOutilPedagogiqueSelections;
       }
    set typeOutilCultureScientifiqueOutilPedagogiqueSelections(value: Array<TypeOutilCultureScientifiqueOutilPedagogiqueVo>) {
        this._typeOutilCultureScientifiqueOutilPedagogiqueSelections = value;
       }
    get createTypeOutilCultureScientifiqueOutilPedagogiqueDialog(): boolean {
        return this._createTypeOutilCultureScientifiqueOutilPedagogiqueDialog;
       }
    set createTypeOutilCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this._createTypeOutilCultureScientifiqueOutilPedagogiqueDialog = value;
       }

    get editTypeOutilCultureScientifiqueOutilPedagogiqueDialog(): boolean {
        return this._editTypeOutilCultureScientifiqueOutilPedagogiqueDialog;
       }
    set editTypeOutilCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this._editTypeOutilCultureScientifiqueOutilPedagogiqueDialog = value;
       }

    get viewTypeOutilCultureScientifiqueOutilPedagogiqueDialog(): boolean {
        return this._viewTypeOutilCultureScientifiqueOutilPedagogiqueDialog;
       }
    set viewTypeOutilCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this._viewTypeOutilCultureScientifiqueOutilPedagogiqueDialog = value;
       }
     get searchTypeOutilCultureScientifiqueOutilPedagogique(): TypeOutilCultureScientifiqueOutilPedagogiqueVo {
        return this._searchTypeOutilCultureScientifiqueOutilPedagogique;
       }
    set searchTypeOutilCultureScientifiqueOutilPedagogique(value: TypeOutilCultureScientifiqueOutilPedagogiqueVo) {
        this._searchTypeOutilCultureScientifiqueOutilPedagogique = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<TypeOutilCultureScientifiqueOutilPedagogiqueVo>>(this.API);
    }
    
    public save(): Observable<TypeOutilCultureScientifiqueOutilPedagogiqueVo> {
         return this.http.post<TypeOutilCultureScientifiqueOutilPedagogiqueVo>(this.API, this.selectedTypeOutilCultureScientifiqueOutilPedagogique);
    }
    
    delete(typeOutilCultureScientifiqueOutilPedagogique: TypeOutilCultureScientifiqueOutilPedagogiqueVo) {
         return this.http.delete<number>(this.API+"id/"+typeOutilCultureScientifiqueOutilPedagogique.id);
    }


    public edit(): Observable<TypeOutilCultureScientifiqueOutilPedagogiqueVo> {
        return this.http.put<TypeOutilCultureScientifiqueOutilPedagogiqueVo>(this.API, this.selectedTypeOutilCultureScientifiqueOutilPedagogique);
    }
    

     public findByCriteria(typeOutilCultureScientifiqueOutilPedagogique:TypeOutilCultureScientifiqueOutilPedagogiqueVo):Observable<Array<TypeOutilCultureScientifiqueOutilPedagogiqueVo>>{
           return this.http.post<Array<TypeOutilCultureScientifiqueOutilPedagogiqueVo>>(this.API+"search",typeOutilCultureScientifiqueOutilPedagogique);
    }



}