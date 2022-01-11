import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {PublicCibleVo} from '../model/PublicCible.model';


@Injectable({
  providedIn: 'root'
})
export class PublicCibleService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/publicCible/';
        })
    }
     private _publicCibles: Array<PublicCibleVo> = [];
     private _selectedPublicCible: PublicCibleVo = new PublicCibleVo();
     private _publicCibleSelections: Array<PublicCibleVo>;
     private _createPublicCibleDialog: boolean;
     private _editPublicCibleDialog: boolean;
     private _viewPublicCibleDialog: boolean;
     public editPublicCible$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchPublicCible:PublicCibleVo = new PublicCibleVo();


    // getters and setters


    get publicCibles(): Array<PublicCibleVo> {
        return this._publicCibles == null ? this._publicCibles =   new Array<PublicCibleVo>() : this._publicCibles;
       }
    set publicCibles(value: Array<PublicCibleVo>) {
        this._publicCibles = value;
       }
    get selectedPublicCible(): PublicCibleVo {
           return this._selectedPublicCible;
       }
    set selectedPublicCible(value: PublicCibleVo) {
        this._selectedPublicCible = value;
       }
    get publicCibleSelections(): Array<PublicCibleVo> {
        return this._publicCibleSelections;
       }
    set publicCibleSelections(value: Array<PublicCibleVo>) {
        this._publicCibleSelections = value;
       }
    get createPublicCibleDialog(): boolean {
        return this._createPublicCibleDialog;
       }
    set createPublicCibleDialog(value: boolean) {
        this._createPublicCibleDialog = value;
       }

    get editPublicCibleDialog(): boolean {
        return this._editPublicCibleDialog;
       }
    set editPublicCibleDialog(value: boolean) {
        this._editPublicCibleDialog = value;
       }

    get viewPublicCibleDialog(): boolean {
        return this._viewPublicCibleDialog;
       }
    set viewPublicCibleDialog(value: boolean) {
        this._viewPublicCibleDialog = value;
       }
     get searchPublicCible(): PublicCibleVo {
        return this._searchPublicCible;
       }
    set searchPublicCible(value: PublicCibleVo) {
        this._searchPublicCible = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<PublicCibleVo>>(this.API);
    }
    
    public save(): Observable<PublicCibleVo> {
         return this.http.post<PublicCibleVo>(this.API, this.selectedPublicCible);
    }
    
    delete(publicCible: PublicCibleVo) {
         return this.http.delete<number>(this.API+"id/"+publicCible.id);
    }


    public edit(): Observable<PublicCibleVo> {
        return this.http.put<PublicCibleVo>(this.API, this.selectedPublicCible);
    }
    

     public findByCriteria(publicCible:PublicCibleVo):Observable<Array<PublicCibleVo>>{
           return this.http.post<Array<PublicCibleVo>>(this.API+"search",publicCible);
    }



}