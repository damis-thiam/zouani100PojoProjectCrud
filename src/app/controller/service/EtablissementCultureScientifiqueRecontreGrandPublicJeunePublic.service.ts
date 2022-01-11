import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../model/EtablissementCultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {CultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../model/CultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {EtablissementVo} from '../model/Etablissement.model';


@Injectable({
  providedIn: 'root'
})
export class EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/etablissementCultureScientifiqueRecontreGrandPublicJeunePublic/';
        })
    }
     private _etablissementCultureScientifiqueRecontreGrandPublicJeunePublics: Array<EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo> = [];
     private _selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic: EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo = new EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo();
     private _etablissementCultureScientifiqueRecontreGrandPublicJeunePublicSelections: Array<EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo>;
     private _createEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog: boolean;
     private _editEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog: boolean;
     private _viewEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog: boolean;
     public editEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic:EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo = new EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo();


    // getters and setters


    get etablissementCultureScientifiqueRecontreGrandPublicJeunePublics(): Array<EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo> {
        return this._etablissementCultureScientifiqueRecontreGrandPublicJeunePublics == null ? this._etablissementCultureScientifiqueRecontreGrandPublicJeunePublics =   new Array<EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo>() : this._etablissementCultureScientifiqueRecontreGrandPublicJeunePublics;
       }
    set etablissementCultureScientifiqueRecontreGrandPublicJeunePublics(value: Array<EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo>) {
        this._etablissementCultureScientifiqueRecontreGrandPublicJeunePublics = value;
       }
    get selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic(): EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo {
           return this._selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic;
       }
    set selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic(value: EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo) {
        this._selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic = value;
       }
    get etablissementCultureScientifiqueRecontreGrandPublicJeunePublicSelections(): Array<EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo> {
        return this._etablissementCultureScientifiqueRecontreGrandPublicJeunePublicSelections;
       }
    set etablissementCultureScientifiqueRecontreGrandPublicJeunePublicSelections(value: Array<EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo>) {
        this._etablissementCultureScientifiqueRecontreGrandPublicJeunePublicSelections = value;
       }
    get createEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog(): boolean {
        return this._createEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
    set createEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this._createEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog = value;
       }

    get editEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog(): boolean {
        return this._editEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
    set editEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this._editEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog = value;
       }

    get viewEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog(): boolean {
        return this._viewEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
    set viewEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this._viewEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog = value;
       }
     get searchEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic(): EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo {
        return this._searchEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic;
       }
    set searchEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic(value: EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo) {
        this._searchEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo>>(this.API);
    }
    
    public save(): Observable<EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo> {
         return this.http.post<EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo>(this.API, this.selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic);
    }
    
    delete(etablissementCultureScientifiqueRecontreGrandPublicJeunePublic: EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo) {
         return this.http.delete<number>(this.API+"id/"+etablissementCultureScientifiqueRecontreGrandPublicJeunePublic.id);
    }


    public edit(): Observable<EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo> {
        return this.http.put<EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo>(this.API, this.selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic);
    }
    

     public findByCriteria(etablissementCultureScientifiqueRecontreGrandPublicJeunePublic:EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo):Observable<Array<EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo>>{
           return this.http.post<Array<EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo>>(this.API+"search",etablissementCultureScientifiqueRecontreGrandPublicJeunePublic);
    }



}