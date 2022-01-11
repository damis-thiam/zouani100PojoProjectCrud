import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {EtablissementCultureScientifiqueOutilPedagogiqueVo} from '../model/EtablissementCultureScientifiqueOutilPedagogique.model';
import {CultureScientifiqueOutilPedagogiqueVo} from '../model/CultureScientifiqueOutilPedagogique.model';
import {EtablissementVo} from '../model/Etablissement.model';


@Injectable({
  providedIn: 'root'
})
export class EtablissementCultureScientifiqueOutilPedagogiqueService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/etablissementCultureScientifiqueOutilPedagogique/';
        })
    }
     private _etablissementCultureScientifiqueOutilPedagogiques: Array<EtablissementCultureScientifiqueOutilPedagogiqueVo> = [];
     private _selectedEtablissementCultureScientifiqueOutilPedagogique: EtablissementCultureScientifiqueOutilPedagogiqueVo = new EtablissementCultureScientifiqueOutilPedagogiqueVo();
     private _etablissementCultureScientifiqueOutilPedagogiqueSelections: Array<EtablissementCultureScientifiqueOutilPedagogiqueVo>;
     private _createEtablissementCultureScientifiqueOutilPedagogiqueDialog: boolean;
     private _editEtablissementCultureScientifiqueOutilPedagogiqueDialog: boolean;
     private _viewEtablissementCultureScientifiqueOutilPedagogiqueDialog: boolean;
     public editEtablissementCultureScientifiqueOutilPedagogique$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchEtablissementCultureScientifiqueOutilPedagogique:EtablissementCultureScientifiqueOutilPedagogiqueVo = new EtablissementCultureScientifiqueOutilPedagogiqueVo();


    // getters and setters


    get etablissementCultureScientifiqueOutilPedagogiques(): Array<EtablissementCultureScientifiqueOutilPedagogiqueVo> {
        return this._etablissementCultureScientifiqueOutilPedagogiques == null ? this._etablissementCultureScientifiqueOutilPedagogiques =   new Array<EtablissementCultureScientifiqueOutilPedagogiqueVo>() : this._etablissementCultureScientifiqueOutilPedagogiques;
       }
    set etablissementCultureScientifiqueOutilPedagogiques(value: Array<EtablissementCultureScientifiqueOutilPedagogiqueVo>) {
        this._etablissementCultureScientifiqueOutilPedagogiques = value;
       }
    get selectedEtablissementCultureScientifiqueOutilPedagogique(): EtablissementCultureScientifiqueOutilPedagogiqueVo {
           return this._selectedEtablissementCultureScientifiqueOutilPedagogique;
       }
    set selectedEtablissementCultureScientifiqueOutilPedagogique(value: EtablissementCultureScientifiqueOutilPedagogiqueVo) {
        this._selectedEtablissementCultureScientifiqueOutilPedagogique = value;
       }
    get etablissementCultureScientifiqueOutilPedagogiqueSelections(): Array<EtablissementCultureScientifiqueOutilPedagogiqueVo> {
        return this._etablissementCultureScientifiqueOutilPedagogiqueSelections;
       }
    set etablissementCultureScientifiqueOutilPedagogiqueSelections(value: Array<EtablissementCultureScientifiqueOutilPedagogiqueVo>) {
        this._etablissementCultureScientifiqueOutilPedagogiqueSelections = value;
       }
    get createEtablissementCultureScientifiqueOutilPedagogiqueDialog(): boolean {
        return this._createEtablissementCultureScientifiqueOutilPedagogiqueDialog;
       }
    set createEtablissementCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this._createEtablissementCultureScientifiqueOutilPedagogiqueDialog = value;
       }

    get editEtablissementCultureScientifiqueOutilPedagogiqueDialog(): boolean {
        return this._editEtablissementCultureScientifiqueOutilPedagogiqueDialog;
       }
    set editEtablissementCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this._editEtablissementCultureScientifiqueOutilPedagogiqueDialog = value;
       }

    get viewEtablissementCultureScientifiqueOutilPedagogiqueDialog(): boolean {
        return this._viewEtablissementCultureScientifiqueOutilPedagogiqueDialog;
       }
    set viewEtablissementCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this._viewEtablissementCultureScientifiqueOutilPedagogiqueDialog = value;
       }
     get searchEtablissementCultureScientifiqueOutilPedagogique(): EtablissementCultureScientifiqueOutilPedagogiqueVo {
        return this._searchEtablissementCultureScientifiqueOutilPedagogique;
       }
    set searchEtablissementCultureScientifiqueOutilPedagogique(value: EtablissementCultureScientifiqueOutilPedagogiqueVo) {
        this._searchEtablissementCultureScientifiqueOutilPedagogique = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<EtablissementCultureScientifiqueOutilPedagogiqueVo>>(this.API);
    }
    
    public save(): Observable<EtablissementCultureScientifiqueOutilPedagogiqueVo> {
         return this.http.post<EtablissementCultureScientifiqueOutilPedagogiqueVo>(this.API, this.selectedEtablissementCultureScientifiqueOutilPedagogique);
    }
    
    delete(etablissementCultureScientifiqueOutilPedagogique: EtablissementCultureScientifiqueOutilPedagogiqueVo) {
         return this.http.delete<number>(this.API+"id/"+etablissementCultureScientifiqueOutilPedagogique.id);
    }


    public edit(): Observable<EtablissementCultureScientifiqueOutilPedagogiqueVo> {
        return this.http.put<EtablissementCultureScientifiqueOutilPedagogiqueVo>(this.API, this.selectedEtablissementCultureScientifiqueOutilPedagogique);
    }
    

     public findByCriteria(etablissementCultureScientifiqueOutilPedagogique:EtablissementCultureScientifiqueOutilPedagogiqueVo):Observable<Array<EtablissementCultureScientifiqueOutilPedagogiqueVo>>{
           return this.http.post<Array<EtablissementCultureScientifiqueOutilPedagogiqueVo>>(this.API+"search",etablissementCultureScientifiqueOutilPedagogique);
    }



}