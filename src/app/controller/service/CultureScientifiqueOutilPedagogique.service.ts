import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {CultureScientifiqueOutilPedagogiqueVo} from '../model/CultureScientifiqueOutilPedagogique.model';


@Injectable({
  providedIn: 'root'
})
export class CultureScientifiqueOutilPedagogiqueService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/cultureScientifiqueOutilPedagogique/';
        })
    }
     private _cultureScientifiqueOutilPedagogiques: Array<CultureScientifiqueOutilPedagogiqueVo> = [];
     private _selectedCultureScientifiqueOutilPedagogique: CultureScientifiqueOutilPedagogiqueVo = new CultureScientifiqueOutilPedagogiqueVo();
     private _cultureScientifiqueOutilPedagogiqueSelections: Array<CultureScientifiqueOutilPedagogiqueVo>;
     private _createCultureScientifiqueOutilPedagogiqueDialog: boolean;
     private _editCultureScientifiqueOutilPedagogiqueDialog: boolean;
     private _viewCultureScientifiqueOutilPedagogiqueDialog: boolean;
     public editCultureScientifiqueOutilPedagogique$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchCultureScientifiqueOutilPedagogique:CultureScientifiqueOutilPedagogiqueVo = new CultureScientifiqueOutilPedagogiqueVo();


    // getters and setters


    get cultureScientifiqueOutilPedagogiques(): Array<CultureScientifiqueOutilPedagogiqueVo> {
        return this._cultureScientifiqueOutilPedagogiques == null ? this._cultureScientifiqueOutilPedagogiques =   new Array<CultureScientifiqueOutilPedagogiqueVo>() : this._cultureScientifiqueOutilPedagogiques;
       }
    set cultureScientifiqueOutilPedagogiques(value: Array<CultureScientifiqueOutilPedagogiqueVo>) {
        this._cultureScientifiqueOutilPedagogiques = value;
       }
    get selectedCultureScientifiqueOutilPedagogique(): CultureScientifiqueOutilPedagogiqueVo {
           return this._selectedCultureScientifiqueOutilPedagogique;
       }
    set selectedCultureScientifiqueOutilPedagogique(value: CultureScientifiqueOutilPedagogiqueVo) {
        this._selectedCultureScientifiqueOutilPedagogique = value;
       }
    get cultureScientifiqueOutilPedagogiqueSelections(): Array<CultureScientifiqueOutilPedagogiqueVo> {
        return this._cultureScientifiqueOutilPedagogiqueSelections;
       }
    set cultureScientifiqueOutilPedagogiqueSelections(value: Array<CultureScientifiqueOutilPedagogiqueVo>) {
        this._cultureScientifiqueOutilPedagogiqueSelections = value;
       }
    get createCultureScientifiqueOutilPedagogiqueDialog(): boolean {
        return this._createCultureScientifiqueOutilPedagogiqueDialog;
       }
    set createCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this._createCultureScientifiqueOutilPedagogiqueDialog = value;
       }

    get editCultureScientifiqueOutilPedagogiqueDialog(): boolean {
        return this._editCultureScientifiqueOutilPedagogiqueDialog;
       }
    set editCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this._editCultureScientifiqueOutilPedagogiqueDialog = value;
       }

    get viewCultureScientifiqueOutilPedagogiqueDialog(): boolean {
        return this._viewCultureScientifiqueOutilPedagogiqueDialog;
       }
    set viewCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this._viewCultureScientifiqueOutilPedagogiqueDialog = value;
       }
     get searchCultureScientifiqueOutilPedagogique(): CultureScientifiqueOutilPedagogiqueVo {
        return this._searchCultureScientifiqueOutilPedagogique;
       }
    set searchCultureScientifiqueOutilPedagogique(value: CultureScientifiqueOutilPedagogiqueVo) {
        this._searchCultureScientifiqueOutilPedagogique = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<CultureScientifiqueOutilPedagogiqueVo>>(this.API);
    }
    
    public save(): Observable<CultureScientifiqueOutilPedagogiqueVo> {
         return this.http.post<CultureScientifiqueOutilPedagogiqueVo>(this.API, this.selectedCultureScientifiqueOutilPedagogique);
    }
    
    delete(cultureScientifiqueOutilPedagogique: CultureScientifiqueOutilPedagogiqueVo) {
         return this.http.delete<number>(this.API+"id/"+cultureScientifiqueOutilPedagogique.id);
    }


    public edit(): Observable<CultureScientifiqueOutilPedagogiqueVo> {
        return this.http.put<CultureScientifiqueOutilPedagogiqueVo>(this.API, this.selectedCultureScientifiqueOutilPedagogique);
    }
    

     public findByCriteria(cultureScientifiqueOutilPedagogique:CultureScientifiqueOutilPedagogiqueVo):Observable<Array<CultureScientifiqueOutilPedagogiqueVo>>{
           return this.http.post<Array<CultureScientifiqueOutilPedagogiqueVo>>(this.API+"search",cultureScientifiqueOutilPedagogique);
    }



}