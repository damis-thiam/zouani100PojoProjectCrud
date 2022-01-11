import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {PublicCibleCultureScientifiqueRecontreGrandPublicVo} from '../model/PublicCibleCultureScientifiqueRecontreGrandPublic.model';
import {PublicCibleVo} from '../model/PublicCible.model';
import {CultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../model/CultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {PaysVo} from '../model/Pays.model';


@Injectable({
  providedIn: 'root'
})
export class PublicCibleCultureScientifiqueRecontreGrandPublicService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/publicCibleCultureScientifiqueRecontreGrandPublic/';
        })
    }
     private _publicCibleCultureScientifiqueRecontreGrandPublics: Array<PublicCibleCultureScientifiqueRecontreGrandPublicVo> = [];
     private _selectedPublicCibleCultureScientifiqueRecontreGrandPublic: PublicCibleCultureScientifiqueRecontreGrandPublicVo = new PublicCibleCultureScientifiqueRecontreGrandPublicVo();
     private _publicCibleCultureScientifiqueRecontreGrandPublicSelections: Array<PublicCibleCultureScientifiqueRecontreGrandPublicVo>;
     private _createPublicCibleCultureScientifiqueRecontreGrandPublicDialog: boolean;
     private _editPublicCibleCultureScientifiqueRecontreGrandPublicDialog: boolean;
     private _viewPublicCibleCultureScientifiqueRecontreGrandPublicDialog: boolean;
     public editPublicCibleCultureScientifiqueRecontreGrandPublic$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchPublicCibleCultureScientifiqueRecontreGrandPublic:PublicCibleCultureScientifiqueRecontreGrandPublicVo = new PublicCibleCultureScientifiqueRecontreGrandPublicVo();


    // getters and setters


    get publicCibleCultureScientifiqueRecontreGrandPublics(): Array<PublicCibleCultureScientifiqueRecontreGrandPublicVo> {
        return this._publicCibleCultureScientifiqueRecontreGrandPublics == null ? this._publicCibleCultureScientifiqueRecontreGrandPublics =   new Array<PublicCibleCultureScientifiqueRecontreGrandPublicVo>() : this._publicCibleCultureScientifiqueRecontreGrandPublics;
       }
    set publicCibleCultureScientifiqueRecontreGrandPublics(value: Array<PublicCibleCultureScientifiqueRecontreGrandPublicVo>) {
        this._publicCibleCultureScientifiqueRecontreGrandPublics = value;
       }
    get selectedPublicCibleCultureScientifiqueRecontreGrandPublic(): PublicCibleCultureScientifiqueRecontreGrandPublicVo {
           return this._selectedPublicCibleCultureScientifiqueRecontreGrandPublic;
       }
    set selectedPublicCibleCultureScientifiqueRecontreGrandPublic(value: PublicCibleCultureScientifiqueRecontreGrandPublicVo) {
        this._selectedPublicCibleCultureScientifiqueRecontreGrandPublic = value;
       }
    get publicCibleCultureScientifiqueRecontreGrandPublicSelections(): Array<PublicCibleCultureScientifiqueRecontreGrandPublicVo> {
        return this._publicCibleCultureScientifiqueRecontreGrandPublicSelections;
       }
    set publicCibleCultureScientifiqueRecontreGrandPublicSelections(value: Array<PublicCibleCultureScientifiqueRecontreGrandPublicVo>) {
        this._publicCibleCultureScientifiqueRecontreGrandPublicSelections = value;
       }
    get createPublicCibleCultureScientifiqueRecontreGrandPublicDialog(): boolean {
        return this._createPublicCibleCultureScientifiqueRecontreGrandPublicDialog;
       }
    set createPublicCibleCultureScientifiqueRecontreGrandPublicDialog(value: boolean) {
        this._createPublicCibleCultureScientifiqueRecontreGrandPublicDialog = value;
       }

    get editPublicCibleCultureScientifiqueRecontreGrandPublicDialog(): boolean {
        return this._editPublicCibleCultureScientifiqueRecontreGrandPublicDialog;
       }
    set editPublicCibleCultureScientifiqueRecontreGrandPublicDialog(value: boolean) {
        this._editPublicCibleCultureScientifiqueRecontreGrandPublicDialog = value;
       }

    get viewPublicCibleCultureScientifiqueRecontreGrandPublicDialog(): boolean {
        return this._viewPublicCibleCultureScientifiqueRecontreGrandPublicDialog;
       }
    set viewPublicCibleCultureScientifiqueRecontreGrandPublicDialog(value: boolean) {
        this._viewPublicCibleCultureScientifiqueRecontreGrandPublicDialog = value;
       }
     get searchPublicCibleCultureScientifiqueRecontreGrandPublic(): PublicCibleCultureScientifiqueRecontreGrandPublicVo {
        return this._searchPublicCibleCultureScientifiqueRecontreGrandPublic;
       }
    set searchPublicCibleCultureScientifiqueRecontreGrandPublic(value: PublicCibleCultureScientifiqueRecontreGrandPublicVo) {
        this._searchPublicCibleCultureScientifiqueRecontreGrandPublic = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<PublicCibleCultureScientifiqueRecontreGrandPublicVo>>(this.API);
    }
    
    public save(): Observable<PublicCibleCultureScientifiqueRecontreGrandPublicVo> {
         return this.http.post<PublicCibleCultureScientifiqueRecontreGrandPublicVo>(this.API, this.selectedPublicCibleCultureScientifiqueRecontreGrandPublic);
    }
    
    delete(publicCibleCultureScientifiqueRecontreGrandPublic: PublicCibleCultureScientifiqueRecontreGrandPublicVo) {
         return this.http.delete<number>(this.API+"id/"+publicCibleCultureScientifiqueRecontreGrandPublic.id);
    }


    public edit(): Observable<PublicCibleCultureScientifiqueRecontreGrandPublicVo> {
        return this.http.put<PublicCibleCultureScientifiqueRecontreGrandPublicVo>(this.API, this.selectedPublicCibleCultureScientifiqueRecontreGrandPublic);
    }
    

     public findByCriteria(publicCibleCultureScientifiqueRecontreGrandPublic:PublicCibleCultureScientifiqueRecontreGrandPublicVo):Observable<Array<PublicCibleCultureScientifiqueRecontreGrandPublicVo>>{
           return this.http.post<Array<PublicCibleCultureScientifiqueRecontreGrandPublicVo>>(this.API+"search",publicCibleCultureScientifiqueRecontreGrandPublic);
    }



}