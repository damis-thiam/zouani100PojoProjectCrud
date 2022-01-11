import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {CultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../model/CultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {FormatRencontreVo} from '../model/FormatRencontre.model';


@Injectable({
  providedIn: 'root'
})
export class CultureScientifiqueRecontreGrandPublicJeunePublicService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/cultureScientifiqueRecontreGrandPublicJeunePublic/';
        })
    }
     private _cultureScientifiqueRecontreGrandPublicJeunePublics: Array<CultureScientifiqueRecontreGrandPublicJeunePublicVo> = [];
     private _selectedCultureScientifiqueRecontreGrandPublicJeunePublic: CultureScientifiqueRecontreGrandPublicJeunePublicVo = new CultureScientifiqueRecontreGrandPublicJeunePublicVo();
     private _cultureScientifiqueRecontreGrandPublicJeunePublicSelections: Array<CultureScientifiqueRecontreGrandPublicJeunePublicVo>;
     private _createCultureScientifiqueRecontreGrandPublicJeunePublicDialog: boolean;
     private _editCultureScientifiqueRecontreGrandPublicJeunePublicDialog: boolean;
     private _viewCultureScientifiqueRecontreGrandPublicJeunePublicDialog: boolean;
     public editCultureScientifiqueRecontreGrandPublicJeunePublic$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchCultureScientifiqueRecontreGrandPublicJeunePublic:CultureScientifiqueRecontreGrandPublicJeunePublicVo = new CultureScientifiqueRecontreGrandPublicJeunePublicVo();


    // getters and setters


    get cultureScientifiqueRecontreGrandPublicJeunePublics(): Array<CultureScientifiqueRecontreGrandPublicJeunePublicVo> {
        return this._cultureScientifiqueRecontreGrandPublicJeunePublics == null ? this._cultureScientifiqueRecontreGrandPublicJeunePublics =   new Array<CultureScientifiqueRecontreGrandPublicJeunePublicVo>() : this._cultureScientifiqueRecontreGrandPublicJeunePublics;
       }
    set cultureScientifiqueRecontreGrandPublicJeunePublics(value: Array<CultureScientifiqueRecontreGrandPublicJeunePublicVo>) {
        this._cultureScientifiqueRecontreGrandPublicJeunePublics = value;
       }
    get selectedCultureScientifiqueRecontreGrandPublicJeunePublic(): CultureScientifiqueRecontreGrandPublicJeunePublicVo {
           return this._selectedCultureScientifiqueRecontreGrandPublicJeunePublic;
       }
    set selectedCultureScientifiqueRecontreGrandPublicJeunePublic(value: CultureScientifiqueRecontreGrandPublicJeunePublicVo) {
        this._selectedCultureScientifiqueRecontreGrandPublicJeunePublic = value;
       }
    get cultureScientifiqueRecontreGrandPublicJeunePublicSelections(): Array<CultureScientifiqueRecontreGrandPublicJeunePublicVo> {
        return this._cultureScientifiqueRecontreGrandPublicJeunePublicSelections;
       }
    set cultureScientifiqueRecontreGrandPublicJeunePublicSelections(value: Array<CultureScientifiqueRecontreGrandPublicJeunePublicVo>) {
        this._cultureScientifiqueRecontreGrandPublicJeunePublicSelections = value;
       }
    get createCultureScientifiqueRecontreGrandPublicJeunePublicDialog(): boolean {
        return this._createCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
    set createCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this._createCultureScientifiqueRecontreGrandPublicJeunePublicDialog = value;
       }

    get editCultureScientifiqueRecontreGrandPublicJeunePublicDialog(): boolean {
        return this._editCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
    set editCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this._editCultureScientifiqueRecontreGrandPublicJeunePublicDialog = value;
       }

    get viewCultureScientifiqueRecontreGrandPublicJeunePublicDialog(): boolean {
        return this._viewCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
    set viewCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this._viewCultureScientifiqueRecontreGrandPublicJeunePublicDialog = value;
       }
     get searchCultureScientifiqueRecontreGrandPublicJeunePublic(): CultureScientifiqueRecontreGrandPublicJeunePublicVo {
        return this._searchCultureScientifiqueRecontreGrandPublicJeunePublic;
       }
    set searchCultureScientifiqueRecontreGrandPublicJeunePublic(value: CultureScientifiqueRecontreGrandPublicJeunePublicVo) {
        this._searchCultureScientifiqueRecontreGrandPublicJeunePublic = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<CultureScientifiqueRecontreGrandPublicJeunePublicVo>>(this.API);
    }
    
    public save(): Observable<CultureScientifiqueRecontreGrandPublicJeunePublicVo> {
         return this.http.post<CultureScientifiqueRecontreGrandPublicJeunePublicVo>(this.API, this.selectedCultureScientifiqueRecontreGrandPublicJeunePublic);
    }
    
    delete(cultureScientifiqueRecontreGrandPublicJeunePublic: CultureScientifiqueRecontreGrandPublicJeunePublicVo) {
         return this.http.delete<number>(this.API+"id/"+cultureScientifiqueRecontreGrandPublicJeunePublic.id);
    }


    public edit(): Observable<CultureScientifiqueRecontreGrandPublicJeunePublicVo> {
        return this.http.put<CultureScientifiqueRecontreGrandPublicJeunePublicVo>(this.API, this.selectedCultureScientifiqueRecontreGrandPublicJeunePublic);
    }
    

     public findByCriteria(cultureScientifiqueRecontreGrandPublicJeunePublic:CultureScientifiqueRecontreGrandPublicJeunePublicVo):Observable<Array<CultureScientifiqueRecontreGrandPublicJeunePublicVo>>{
           return this.http.post<Array<CultureScientifiqueRecontreGrandPublicJeunePublicVo>>(this.API+"search",cultureScientifiqueRecontreGrandPublicJeunePublic);
    }



}