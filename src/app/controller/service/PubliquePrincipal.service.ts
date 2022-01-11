import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {PubliquePrincipalVo} from '../model/PubliquePrincipal.model';


@Injectable({
  providedIn: 'root'
})
export class PubliquePrincipalService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/publiquePrincipal/';
        })
    }
     private _publiquePrincipals: Array<PubliquePrincipalVo> = [];
     private _selectedPubliquePrincipal: PubliquePrincipalVo = new PubliquePrincipalVo();
     private _publiquePrincipalSelections: Array<PubliquePrincipalVo>;
     private _createPubliquePrincipalDialog: boolean;
     private _editPubliquePrincipalDialog: boolean;
     private _viewPubliquePrincipalDialog: boolean;
     public editPubliquePrincipal$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchPubliquePrincipal:PubliquePrincipalVo = new PubliquePrincipalVo();


    // getters and setters


    get publiquePrincipals(): Array<PubliquePrincipalVo> {
        return this._publiquePrincipals == null ? this._publiquePrincipals =   new Array<PubliquePrincipalVo>() : this._publiquePrincipals;
       }
    set publiquePrincipals(value: Array<PubliquePrincipalVo>) {
        this._publiquePrincipals = value;
       }
    get selectedPubliquePrincipal(): PubliquePrincipalVo {
           return this._selectedPubliquePrincipal;
       }
    set selectedPubliquePrincipal(value: PubliquePrincipalVo) {
        this._selectedPubliquePrincipal = value;
       }
    get publiquePrincipalSelections(): Array<PubliquePrincipalVo> {
        return this._publiquePrincipalSelections;
       }
    set publiquePrincipalSelections(value: Array<PubliquePrincipalVo>) {
        this._publiquePrincipalSelections = value;
       }
    get createPubliquePrincipalDialog(): boolean {
        return this._createPubliquePrincipalDialog;
       }
    set createPubliquePrincipalDialog(value: boolean) {
        this._createPubliquePrincipalDialog = value;
       }

    get editPubliquePrincipalDialog(): boolean {
        return this._editPubliquePrincipalDialog;
       }
    set editPubliquePrincipalDialog(value: boolean) {
        this._editPubliquePrincipalDialog = value;
       }

    get viewPubliquePrincipalDialog(): boolean {
        return this._viewPubliquePrincipalDialog;
       }
    set viewPubliquePrincipalDialog(value: boolean) {
        this._viewPubliquePrincipalDialog = value;
       }
     get searchPubliquePrincipal(): PubliquePrincipalVo {
        return this._searchPubliquePrincipal;
       }
    set searchPubliquePrincipal(value: PubliquePrincipalVo) {
        this._searchPubliquePrincipal = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<PubliquePrincipalVo>>(this.API);
    }
    
    public save(): Observable<PubliquePrincipalVo> {
         return this.http.post<PubliquePrincipalVo>(this.API, this.selectedPubliquePrincipal);
    }
    
    delete(publiquePrincipal: PubliquePrincipalVo) {
         return this.http.delete<number>(this.API+"id/"+publiquePrincipal.id);
    }


    public edit(): Observable<PubliquePrincipalVo> {
        return this.http.put<PubliquePrincipalVo>(this.API, this.selectedPubliquePrincipal);
    }
    

     public findByCriteria(publiquePrincipal:PubliquePrincipalVo):Observable<Array<PubliquePrincipalVo>>{
           return this.http.post<Array<PubliquePrincipalVo>>(this.API+"search",publiquePrincipal);
    }



}