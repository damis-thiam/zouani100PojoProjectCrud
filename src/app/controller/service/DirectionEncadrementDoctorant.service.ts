import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {DirectionEncadrementDoctorantVo} from '../model/DirectionEncadrementDoctorant.model';
import {FinancementDoctorantVo} from '../model/FinancementDoctorant.model';
import {ProjetActiviteRechercheVo} from '../model/ProjetActiviteRecherche.model';
import {DoctorantVo} from '../model/Doctorant.model';
import {ResponsabiliteDirectionEncadrementDoctorantVo} from '../model/ResponsabiliteDirectionEncadrementDoctorant.model';
import {EtablissementVo} from '../model/Etablissement.model';
import {ChercheurVo} from '../model/Chercheur.model';
import {PaysVo} from '../model/Pays.model';


@Injectable({
  providedIn: 'root'
})
export class DirectionEncadrementDoctorantService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/directionEncadrementDoctorant/';
        })
    }
     private _directionEncadrementDoctorants: Array<DirectionEncadrementDoctorantVo> = [];
     private _selectedDirectionEncadrementDoctorant: DirectionEncadrementDoctorantVo = new DirectionEncadrementDoctorantVo();
     private _directionEncadrementDoctorantSelections: Array<DirectionEncadrementDoctorantVo>;
     private _createDirectionEncadrementDoctorantDialog: boolean;
     private _editDirectionEncadrementDoctorantDialog: boolean;
     private _viewDirectionEncadrementDoctorantDialog: boolean;
     public editDirectionEncadrementDoctorant$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchDirectionEncadrementDoctorant:DirectionEncadrementDoctorantVo = new DirectionEncadrementDoctorantVo();


    // getters and setters


    get directionEncadrementDoctorants(): Array<DirectionEncadrementDoctorantVo> {
        return this._directionEncadrementDoctorants == null ? this._directionEncadrementDoctorants =   new Array<DirectionEncadrementDoctorantVo>() : this._directionEncadrementDoctorants;
       }
    set directionEncadrementDoctorants(value: Array<DirectionEncadrementDoctorantVo>) {
        this._directionEncadrementDoctorants = value;
       }
    get selectedDirectionEncadrementDoctorant(): DirectionEncadrementDoctorantVo {
           return this._selectedDirectionEncadrementDoctorant;
       }
    set selectedDirectionEncadrementDoctorant(value: DirectionEncadrementDoctorantVo) {
        this._selectedDirectionEncadrementDoctorant = value;
       }
    get directionEncadrementDoctorantSelections(): Array<DirectionEncadrementDoctorantVo> {
        return this._directionEncadrementDoctorantSelections;
       }
    set directionEncadrementDoctorantSelections(value: Array<DirectionEncadrementDoctorantVo>) {
        this._directionEncadrementDoctorantSelections = value;
       }
    get createDirectionEncadrementDoctorantDialog(): boolean {
        return this._createDirectionEncadrementDoctorantDialog;
       }
    set createDirectionEncadrementDoctorantDialog(value: boolean) {
        this._createDirectionEncadrementDoctorantDialog = value;
       }

    get editDirectionEncadrementDoctorantDialog(): boolean {
        return this._editDirectionEncadrementDoctorantDialog;
       }
    set editDirectionEncadrementDoctorantDialog(value: boolean) {
        this._editDirectionEncadrementDoctorantDialog = value;
       }

    get viewDirectionEncadrementDoctorantDialog(): boolean {
        return this._viewDirectionEncadrementDoctorantDialog;
       }
    set viewDirectionEncadrementDoctorantDialog(value: boolean) {
        this._viewDirectionEncadrementDoctorantDialog = value;
       }
     get searchDirectionEncadrementDoctorant(): DirectionEncadrementDoctorantVo {
        return this._searchDirectionEncadrementDoctorant;
       }
    set searchDirectionEncadrementDoctorant(value: DirectionEncadrementDoctorantVo) {
        this._searchDirectionEncadrementDoctorant = value;
       }

    // methods

    public findAll(){
     return this.http.get<Array<DirectionEncadrementDoctorantVo>>(this.API);
    }

    public save(): Observable<DirectionEncadrementDoctorantVo> {
           return this.http.post<DirectionEncadrementDoctorantVo>(this.API, {...this.selectedDirectionEncadrementDoctorant,datePrevuSoutenanceThese: moment(this.selectedDirectionEncadrementDoctorant.datePrevuSoutenanceThese).format("YYYY-MM-DD")});
    }

    delete(directionEncadrementDoctorant: DirectionEncadrementDoctorantVo) {
         return this.http.delete<number>(this.API+"id/"+directionEncadrementDoctorant.id);
    }


    public edit(): Observable<DirectionEncadrementDoctorantVo> {
        return this.http.put<DirectionEncadrementDoctorantVo>(this.API, this.selectedDirectionEncadrementDoctorant);
    }


     public findByCriteria(directionEncadrementDoctorant:DirectionEncadrementDoctorantVo):Observable<Array<DirectionEncadrementDoctorantVo>>{
           return this.http.post<Array<DirectionEncadrementDoctorantVo>>(this.API+"search",directionEncadrementDoctorant);
    }



}
