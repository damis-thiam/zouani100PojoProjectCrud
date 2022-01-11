import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {PublicCibleCultureScientifiqueOutilPedagogiqueVo} from '../model/PublicCibleCultureScientifiqueOutilPedagogique.model';
import {PublicCibleVo} from '../model/PublicCible.model';
import {CultureScientifiqueOutilPedagogiqueVo} from '../model/CultureScientifiqueOutilPedagogique.model';
import {PaysVo} from '../model/Pays.model';


@Injectable({
  providedIn: 'root'
})
export class PublicCibleCultureScientifiqueOutilPedagogiqueService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/publicCibleCultureScientifiqueOutilPedagogique/';
        })
    }
     private _publicCibleCultureScientifiqueOutilPedagogiques: Array<PublicCibleCultureScientifiqueOutilPedagogiqueVo> = [];
     private _selectedPublicCibleCultureScientifiqueOutilPedagogique: PublicCibleCultureScientifiqueOutilPedagogiqueVo = new PublicCibleCultureScientifiqueOutilPedagogiqueVo();
     private _publicCibleCultureScientifiqueOutilPedagogiqueSelections: Array<PublicCibleCultureScientifiqueOutilPedagogiqueVo>;
     private _createPublicCibleCultureScientifiqueOutilPedagogiqueDialog: boolean;
     private _editPublicCibleCultureScientifiqueOutilPedagogiqueDialog: boolean;
     private _viewPublicCibleCultureScientifiqueOutilPedagogiqueDialog: boolean;
     public editPublicCibleCultureScientifiqueOutilPedagogique$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchPublicCibleCultureScientifiqueOutilPedagogique:PublicCibleCultureScientifiqueOutilPedagogiqueVo = new PublicCibleCultureScientifiqueOutilPedagogiqueVo();


    // getters and setters


    get publicCibleCultureScientifiqueOutilPedagogiques(): Array<PublicCibleCultureScientifiqueOutilPedagogiqueVo> {
        return this._publicCibleCultureScientifiqueOutilPedagogiques == null ? this._publicCibleCultureScientifiqueOutilPedagogiques =   new Array<PublicCibleCultureScientifiqueOutilPedagogiqueVo>() : this._publicCibleCultureScientifiqueOutilPedagogiques;
       }
    set publicCibleCultureScientifiqueOutilPedagogiques(value: Array<PublicCibleCultureScientifiqueOutilPedagogiqueVo>) {
        this._publicCibleCultureScientifiqueOutilPedagogiques = value;
       }
    get selectedPublicCibleCultureScientifiqueOutilPedagogique(): PublicCibleCultureScientifiqueOutilPedagogiqueVo {
           return this._selectedPublicCibleCultureScientifiqueOutilPedagogique;
       }
    set selectedPublicCibleCultureScientifiqueOutilPedagogique(value: PublicCibleCultureScientifiqueOutilPedagogiqueVo) {
        this._selectedPublicCibleCultureScientifiqueOutilPedagogique = value;
       }
    get publicCibleCultureScientifiqueOutilPedagogiqueSelections(): Array<PublicCibleCultureScientifiqueOutilPedagogiqueVo> {
        return this._publicCibleCultureScientifiqueOutilPedagogiqueSelections;
       }
    set publicCibleCultureScientifiqueOutilPedagogiqueSelections(value: Array<PublicCibleCultureScientifiqueOutilPedagogiqueVo>) {
        this._publicCibleCultureScientifiqueOutilPedagogiqueSelections = value;
       }
    get createPublicCibleCultureScientifiqueOutilPedagogiqueDialog(): boolean {
        return this._createPublicCibleCultureScientifiqueOutilPedagogiqueDialog;
       }
    set createPublicCibleCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this._createPublicCibleCultureScientifiqueOutilPedagogiqueDialog = value;
       }

    get editPublicCibleCultureScientifiqueOutilPedagogiqueDialog(): boolean {
        return this._editPublicCibleCultureScientifiqueOutilPedagogiqueDialog;
       }
    set editPublicCibleCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this._editPublicCibleCultureScientifiqueOutilPedagogiqueDialog = value;
       }

    get viewPublicCibleCultureScientifiqueOutilPedagogiqueDialog(): boolean {
        return this._viewPublicCibleCultureScientifiqueOutilPedagogiqueDialog;
       }
    set viewPublicCibleCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this._viewPublicCibleCultureScientifiqueOutilPedagogiqueDialog = value;
       }
     get searchPublicCibleCultureScientifiqueOutilPedagogique(): PublicCibleCultureScientifiqueOutilPedagogiqueVo {
        return this._searchPublicCibleCultureScientifiqueOutilPedagogique;
       }
    set searchPublicCibleCultureScientifiqueOutilPedagogique(value: PublicCibleCultureScientifiqueOutilPedagogiqueVo) {
        this._searchPublicCibleCultureScientifiqueOutilPedagogique = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<PublicCibleCultureScientifiqueOutilPedagogiqueVo>>(this.API);
    }
    
    public save(): Observable<PublicCibleCultureScientifiqueOutilPedagogiqueVo> {
         return this.http.post<PublicCibleCultureScientifiqueOutilPedagogiqueVo>(this.API, this.selectedPublicCibleCultureScientifiqueOutilPedagogique);
    }
    
    delete(publicCibleCultureScientifiqueOutilPedagogique: PublicCibleCultureScientifiqueOutilPedagogiqueVo) {
         return this.http.delete<number>(this.API+"id/"+publicCibleCultureScientifiqueOutilPedagogique.id);
    }


    public edit(): Observable<PublicCibleCultureScientifiqueOutilPedagogiqueVo> {
        return this.http.put<PublicCibleCultureScientifiqueOutilPedagogiqueVo>(this.API, this.selectedPublicCibleCultureScientifiqueOutilPedagogique);
    }
    

     public findByCriteria(publicCibleCultureScientifiqueOutilPedagogique:PublicCibleCultureScientifiqueOutilPedagogiqueVo):Observable<Array<PublicCibleCultureScientifiqueOutilPedagogiqueVo>>{
           return this.http.post<Array<PublicCibleCultureScientifiqueOutilPedagogiqueVo>>(this.API+"search",publicCibleCultureScientifiqueOutilPedagogique);
    }



}