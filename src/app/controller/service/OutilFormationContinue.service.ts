import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {OutilFormationContinueVo} from '../model/OutilFormationContinue.model';


@Injectable({
  providedIn: 'root'
})
export class OutilFormationContinueService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/outilFormationContinue/';
        })
    }
     private _outilFormationContinues: Array<OutilFormationContinueVo> = [];
     private _selectedOutilFormationContinue: OutilFormationContinueVo = new OutilFormationContinueVo();
     private _outilFormationContinueSelections: Array<OutilFormationContinueVo>;
     private _createOutilFormationContinueDialog: boolean;
     private _editOutilFormationContinueDialog: boolean;
     private _viewOutilFormationContinueDialog: boolean;
     public editOutilFormationContinue$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchOutilFormationContinue:OutilFormationContinueVo = new OutilFormationContinueVo();


    // getters and setters


    get outilFormationContinues(): Array<OutilFormationContinueVo> {
        return this._outilFormationContinues == null ? this._outilFormationContinues =   new Array<OutilFormationContinueVo>() : this._outilFormationContinues;
       }
    set outilFormationContinues(value: Array<OutilFormationContinueVo>) {
        this._outilFormationContinues = value;
       }
    get selectedOutilFormationContinue(): OutilFormationContinueVo {
           return this._selectedOutilFormationContinue;
       }
    set selectedOutilFormationContinue(value: OutilFormationContinueVo) {
        this._selectedOutilFormationContinue = value;
       }
    get outilFormationContinueSelections(): Array<OutilFormationContinueVo> {
        return this._outilFormationContinueSelections;
       }
    set outilFormationContinueSelections(value: Array<OutilFormationContinueVo>) {
        this._outilFormationContinueSelections = value;
       }
    get createOutilFormationContinueDialog(): boolean {
        return this._createOutilFormationContinueDialog;
       }
    set createOutilFormationContinueDialog(value: boolean) {
        this._createOutilFormationContinueDialog = value;
       }

    get editOutilFormationContinueDialog(): boolean {
        return this._editOutilFormationContinueDialog;
       }
    set editOutilFormationContinueDialog(value: boolean) {
        this._editOutilFormationContinueDialog = value;
       }

    get viewOutilFormationContinueDialog(): boolean {
        return this._viewOutilFormationContinueDialog;
       }
    set viewOutilFormationContinueDialog(value: boolean) {
        this._viewOutilFormationContinueDialog = value;
       }
     get searchOutilFormationContinue(): OutilFormationContinueVo {
        return this._searchOutilFormationContinue;
       }
    set searchOutilFormationContinue(value: OutilFormationContinueVo) {
        this._searchOutilFormationContinue = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<OutilFormationContinueVo>>(this.API);
    }
    
    public save(): Observable<OutilFormationContinueVo> {
         return this.http.post<OutilFormationContinueVo>(this.API, this.selectedOutilFormationContinue);
    }
    
    delete(outilFormationContinue: OutilFormationContinueVo) {
         return this.http.delete<number>(this.API+"id/"+outilFormationContinue.id);
    }


    public edit(): Observable<OutilFormationContinueVo> {
        return this.http.put<OutilFormationContinueVo>(this.API, this.selectedOutilFormationContinue);
    }
    

     public findByCriteria(outilFormationContinue:OutilFormationContinueVo):Observable<Array<OutilFormationContinueVo>>{
           return this.http.post<Array<OutilFormationContinueVo>>(this.API+"search",outilFormationContinue);
    }



}