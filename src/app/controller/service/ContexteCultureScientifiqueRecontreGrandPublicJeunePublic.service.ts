import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../model/ContexteCultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {ContexteVo} from '../model/Contexte.model';
import {CultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../model/CultureScientifiqueRecontreGrandPublicJeunePublic.model';


@Injectable({
  providedIn: 'root'
})
export class ContexteCultureScientifiqueRecontreGrandPublicJeunePublicService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/contexteCultureScientifiqueRecontreGrandPublicJeunePublic/';
        })
    }
     private _contexteCultureScientifiqueRecontreGrandPublicJeunePublics: Array<ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo> = [];
     private _selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic: ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo = new ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo();
     private _contexteCultureScientifiqueRecontreGrandPublicJeunePublicSelections: Array<ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo>;
     private _createContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog: boolean;
     private _editContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog: boolean;
     private _viewContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog: boolean;
     public editContexteCultureScientifiqueRecontreGrandPublicJeunePublic$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchContexteCultureScientifiqueRecontreGrandPublicJeunePublic:ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo = new ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo();


    // getters and setters


    get contexteCultureScientifiqueRecontreGrandPublicJeunePublics(): Array<ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo> {
        return this._contexteCultureScientifiqueRecontreGrandPublicJeunePublics == null ? this._contexteCultureScientifiqueRecontreGrandPublicJeunePublics =   new Array<ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo>() : this._contexteCultureScientifiqueRecontreGrandPublicJeunePublics;
       }
    set contexteCultureScientifiqueRecontreGrandPublicJeunePublics(value: Array<ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo>) {
        this._contexteCultureScientifiqueRecontreGrandPublicJeunePublics = value;
       }
    get selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic(): ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo {
           return this._selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic;
       }
    set selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic(value: ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo) {
        this._selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic = value;
       }
    get contexteCultureScientifiqueRecontreGrandPublicJeunePublicSelections(): Array<ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo> {
        return this._contexteCultureScientifiqueRecontreGrandPublicJeunePublicSelections;
       }
    set contexteCultureScientifiqueRecontreGrandPublicJeunePublicSelections(value: Array<ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo>) {
        this._contexteCultureScientifiqueRecontreGrandPublicJeunePublicSelections = value;
       }
    get createContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog(): boolean {
        return this._createContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
    set createContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this._createContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog = value;
       }

    get editContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog(): boolean {
        return this._editContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
    set editContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this._editContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog = value;
       }

    get viewContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog(): boolean {
        return this._viewContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
    set viewContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this._viewContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog = value;
       }
     get searchContexteCultureScientifiqueRecontreGrandPublicJeunePublic(): ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo {
        return this._searchContexteCultureScientifiqueRecontreGrandPublicJeunePublic;
       }
    set searchContexteCultureScientifiqueRecontreGrandPublicJeunePublic(value: ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo) {
        this._searchContexteCultureScientifiqueRecontreGrandPublicJeunePublic = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo>>(this.API);
    }
    
    public save(): Observable<ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo> {
         return this.http.post<ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo>(this.API, this.selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic);
    }
    
    delete(contexteCultureScientifiqueRecontreGrandPublicJeunePublic: ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo) {
         return this.http.delete<number>(this.API+"id/"+contexteCultureScientifiqueRecontreGrandPublicJeunePublic.id);
    }


    public edit(): Observable<ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo> {
        return this.http.put<ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo>(this.API, this.selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic);
    }
    

     public findByCriteria(contexteCultureScientifiqueRecontreGrandPublicJeunePublic:ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo):Observable<Array<ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo>>{
           return this.http.post<Array<ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo>>(this.API+"search",contexteCultureScientifiqueRecontreGrandPublicJeunePublic);
    }



}