import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {PubliquePrincipalConcemeFormationContinueVo} from '../model/PubliquePrincipalConcemeFormationContinue.model';
import {PubliquePrincipalVo} from '../model/PubliquePrincipal.model';
import {FormationContinueVo} from '../model/FormationContinue.model';


@Injectable({
  providedIn: 'root'
})
export class PubliquePrincipalConcemeFormationContinueService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/publiquePrincipalConcemeFormationContinue/';
        })
    }
     private _publiquePrincipalConcemeFormationContinues: Array<PubliquePrincipalConcemeFormationContinueVo> = [];
     private _selectedPubliquePrincipalConcemeFormationContinue: PubliquePrincipalConcemeFormationContinueVo = new PubliquePrincipalConcemeFormationContinueVo();
     private _publiquePrincipalConcemeFormationContinueSelections: Array<PubliquePrincipalConcemeFormationContinueVo>;
     private _createPubliquePrincipalConcemeFormationContinueDialog: boolean;
     private _editPubliquePrincipalConcemeFormationContinueDialog: boolean;
     private _viewPubliquePrincipalConcemeFormationContinueDialog: boolean;
     public editPubliquePrincipalConcemeFormationContinue$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchPubliquePrincipalConcemeFormationContinue:PubliquePrincipalConcemeFormationContinueVo = new PubliquePrincipalConcemeFormationContinueVo();


    // getters and setters


    get publiquePrincipalConcemeFormationContinues(): Array<PubliquePrincipalConcemeFormationContinueVo> {
        return this._publiquePrincipalConcemeFormationContinues == null ? this._publiquePrincipalConcemeFormationContinues =   new Array<PubliquePrincipalConcemeFormationContinueVo>() : this._publiquePrincipalConcemeFormationContinues;
       }
    set publiquePrincipalConcemeFormationContinues(value: Array<PubliquePrincipalConcemeFormationContinueVo>) {
        this._publiquePrincipalConcemeFormationContinues = value;
       }
    get selectedPubliquePrincipalConcemeFormationContinue(): PubliquePrincipalConcemeFormationContinueVo {
           return this._selectedPubliquePrincipalConcemeFormationContinue;
       }
    set selectedPubliquePrincipalConcemeFormationContinue(value: PubliquePrincipalConcemeFormationContinueVo) {
        this._selectedPubliquePrincipalConcemeFormationContinue = value;
       }
    get publiquePrincipalConcemeFormationContinueSelections(): Array<PubliquePrincipalConcemeFormationContinueVo> {
        return this._publiquePrincipalConcemeFormationContinueSelections;
       }
    set publiquePrincipalConcemeFormationContinueSelections(value: Array<PubliquePrincipalConcemeFormationContinueVo>) {
        this._publiquePrincipalConcemeFormationContinueSelections = value;
       }
    get createPubliquePrincipalConcemeFormationContinueDialog(): boolean {
        return this._createPubliquePrincipalConcemeFormationContinueDialog;
       }
    set createPubliquePrincipalConcemeFormationContinueDialog(value: boolean) {
        this._createPubliquePrincipalConcemeFormationContinueDialog = value;
       }

    get editPubliquePrincipalConcemeFormationContinueDialog(): boolean {
        return this._editPubliquePrincipalConcemeFormationContinueDialog;
       }
    set editPubliquePrincipalConcemeFormationContinueDialog(value: boolean) {
        this._editPubliquePrincipalConcemeFormationContinueDialog = value;
       }

    get viewPubliquePrincipalConcemeFormationContinueDialog(): boolean {
        return this._viewPubliquePrincipalConcemeFormationContinueDialog;
       }
    set viewPubliquePrincipalConcemeFormationContinueDialog(value: boolean) {
        this._viewPubliquePrincipalConcemeFormationContinueDialog = value;
       }
     get searchPubliquePrincipalConcemeFormationContinue(): PubliquePrincipalConcemeFormationContinueVo {
        return this._searchPubliquePrincipalConcemeFormationContinue;
       }
    set searchPubliquePrincipalConcemeFormationContinue(value: PubliquePrincipalConcemeFormationContinueVo) {
        this._searchPubliquePrincipalConcemeFormationContinue = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<PubliquePrincipalConcemeFormationContinueVo>>(this.API);
    }
    
    public save(): Observable<PubliquePrincipalConcemeFormationContinueVo> {
         return this.http.post<PubliquePrincipalConcemeFormationContinueVo>(this.API, this.selectedPubliquePrincipalConcemeFormationContinue);
    }
    
    delete(publiquePrincipalConcemeFormationContinue: PubliquePrincipalConcemeFormationContinueVo) {
         return this.http.delete<number>(this.API+"id/"+publiquePrincipalConcemeFormationContinue.id);
    }


    public edit(): Observable<PubliquePrincipalConcemeFormationContinueVo> {
        return this.http.put<PubliquePrincipalConcemeFormationContinueVo>(this.API, this.selectedPubliquePrincipalConcemeFormationContinue);
    }
    

     public findByCriteria(publiquePrincipalConcemeFormationContinue:PubliquePrincipalConcemeFormationContinueVo):Observable<Array<PubliquePrincipalConcemeFormationContinueVo>>{
           return this.http.post<Array<PubliquePrincipalConcemeFormationContinueVo>>(this.API+"search",publiquePrincipalConcemeFormationContinue);
    }



}