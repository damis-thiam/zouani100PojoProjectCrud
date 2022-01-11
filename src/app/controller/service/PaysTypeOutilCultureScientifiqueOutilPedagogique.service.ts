import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo} from '../model/PaysTypeOutilCultureScientifiqueOutilPedagogique.model';
import {CultureScientifiqueOutilPedagogiqueVo} from '../model/CultureScientifiqueOutilPedagogique.model';
import {PaysVo} from '../model/Pays.model';


@Injectable({
  providedIn: 'root'
})
export class PaysTypeOutilCultureScientifiqueOutilPedagogiqueService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/paysTypeOutilCultureScientifiqueOutilPedagogique/';
        })
    }
     private _paysTypeOutilCultureScientifiqueOutilPedagogiques: Array<PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo> = [];
     private _selectedPaysTypeOutilCultureScientifiqueOutilPedagogique: PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo = new PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo();
     private _paysTypeOutilCultureScientifiqueOutilPedagogiqueSelections: Array<PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo>;
     private _createPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog: boolean;
     private _editPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog: boolean;
     private _viewPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog: boolean;
     public editPaysTypeOutilCultureScientifiqueOutilPedagogique$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchPaysTypeOutilCultureScientifiqueOutilPedagogique:PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo = new PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo();


    // getters and setters


    get paysTypeOutilCultureScientifiqueOutilPedagogiques(): Array<PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo> {
        return this._paysTypeOutilCultureScientifiqueOutilPedagogiques == null ? this._paysTypeOutilCultureScientifiqueOutilPedagogiques =   new Array<PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo>() : this._paysTypeOutilCultureScientifiqueOutilPedagogiques;
       }
    set paysTypeOutilCultureScientifiqueOutilPedagogiques(value: Array<PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo>) {
        this._paysTypeOutilCultureScientifiqueOutilPedagogiques = value;
       }
    get selectedPaysTypeOutilCultureScientifiqueOutilPedagogique(): PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo {
           return this._selectedPaysTypeOutilCultureScientifiqueOutilPedagogique;
       }
    set selectedPaysTypeOutilCultureScientifiqueOutilPedagogique(value: PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo) {
        this._selectedPaysTypeOutilCultureScientifiqueOutilPedagogique = value;
       }
    get paysTypeOutilCultureScientifiqueOutilPedagogiqueSelections(): Array<PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo> {
        return this._paysTypeOutilCultureScientifiqueOutilPedagogiqueSelections;
       }
    set paysTypeOutilCultureScientifiqueOutilPedagogiqueSelections(value: Array<PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo>) {
        this._paysTypeOutilCultureScientifiqueOutilPedagogiqueSelections = value;
       }
    get createPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog(): boolean {
        return this._createPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog;
       }
    set createPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this._createPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog = value;
       }

    get editPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog(): boolean {
        return this._editPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog;
       }
    set editPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this._editPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog = value;
       }

    get viewPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog(): boolean {
        return this._viewPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog;
       }
    set viewPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this._viewPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog = value;
       }
     get searchPaysTypeOutilCultureScientifiqueOutilPedagogique(): PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo {
        return this._searchPaysTypeOutilCultureScientifiqueOutilPedagogique;
       }
    set searchPaysTypeOutilCultureScientifiqueOutilPedagogique(value: PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo) {
        this._searchPaysTypeOutilCultureScientifiqueOutilPedagogique = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo>>(this.API);
    }
    
    public save(): Observable<PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo> {
         return this.http.post<PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo>(this.API, this.selectedPaysTypeOutilCultureScientifiqueOutilPedagogique);
    }
    
    delete(paysTypeOutilCultureScientifiqueOutilPedagogique: PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo) {
         return this.http.delete<number>(this.API+"id/"+paysTypeOutilCultureScientifiqueOutilPedagogique.id);
    }


    public edit(): Observable<PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo> {
        return this.http.put<PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo>(this.API, this.selectedPaysTypeOutilCultureScientifiqueOutilPedagogique);
    }
    

     public findByCriteria(paysTypeOutilCultureScientifiqueOutilPedagogique:PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo):Observable<Array<PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo>>{
           return this.http.post<Array<PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo>>(this.API+"search",paysTypeOutilCultureScientifiqueOutilPedagogique);
    }



}