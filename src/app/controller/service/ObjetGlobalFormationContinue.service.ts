import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {ObjetGlobalFormationContinueVo} from '../model/ObjetGlobalFormationContinue.model';
import {FormationContinueVo} from '../model/FormationContinue.model';
import {ObjetGlobalVo} from '../model/ObjetGlobal.model';


@Injectable({
  providedIn: 'root'
})
export class ObjetGlobalFormationContinueService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/objetGlobalFormationContinue/';
        })
    }
     private _objetGlobalFormationContinues: Array<ObjetGlobalFormationContinueVo> = [];
     private _selectedObjetGlobalFormationContinue: ObjetGlobalFormationContinueVo = new ObjetGlobalFormationContinueVo();
     private _objetGlobalFormationContinueSelections: Array<ObjetGlobalFormationContinueVo>;
     private _createObjetGlobalFormationContinueDialog: boolean;
     private _editObjetGlobalFormationContinueDialog: boolean;
     private _viewObjetGlobalFormationContinueDialog: boolean;
     public editObjetGlobalFormationContinue$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchObjetGlobalFormationContinue:ObjetGlobalFormationContinueVo = new ObjetGlobalFormationContinueVo();


    // getters and setters


    get objetGlobalFormationContinues(): Array<ObjetGlobalFormationContinueVo> {
        return this._objetGlobalFormationContinues == null ? this._objetGlobalFormationContinues =   new Array<ObjetGlobalFormationContinueVo>() : this._objetGlobalFormationContinues;
       }
    set objetGlobalFormationContinues(value: Array<ObjetGlobalFormationContinueVo>) {
        this._objetGlobalFormationContinues = value;
       }
    get selectedObjetGlobalFormationContinue(): ObjetGlobalFormationContinueVo {
           return this._selectedObjetGlobalFormationContinue;
       }
    set selectedObjetGlobalFormationContinue(value: ObjetGlobalFormationContinueVo) {
        this._selectedObjetGlobalFormationContinue = value;
       }
    get objetGlobalFormationContinueSelections(): Array<ObjetGlobalFormationContinueVo> {
        return this._objetGlobalFormationContinueSelections;
       }
    set objetGlobalFormationContinueSelections(value: Array<ObjetGlobalFormationContinueVo>) {
        this._objetGlobalFormationContinueSelections = value;
       }
    get createObjetGlobalFormationContinueDialog(): boolean {
        return this._createObjetGlobalFormationContinueDialog;
       }
    set createObjetGlobalFormationContinueDialog(value: boolean) {
        this._createObjetGlobalFormationContinueDialog = value;
       }

    get editObjetGlobalFormationContinueDialog(): boolean {
        return this._editObjetGlobalFormationContinueDialog;
       }
    set editObjetGlobalFormationContinueDialog(value: boolean) {
        this._editObjetGlobalFormationContinueDialog = value;
       }

    get viewObjetGlobalFormationContinueDialog(): boolean {
        return this._viewObjetGlobalFormationContinueDialog;
       }
    set viewObjetGlobalFormationContinueDialog(value: boolean) {
        this._viewObjetGlobalFormationContinueDialog = value;
       }
     get searchObjetGlobalFormationContinue(): ObjetGlobalFormationContinueVo {
        return this._searchObjetGlobalFormationContinue;
       }
    set searchObjetGlobalFormationContinue(value: ObjetGlobalFormationContinueVo) {
        this._searchObjetGlobalFormationContinue = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<ObjetGlobalFormationContinueVo>>(this.API);
    }
    
    public save(): Observable<ObjetGlobalFormationContinueVo> {
         return this.http.post<ObjetGlobalFormationContinueVo>(this.API, this.selectedObjetGlobalFormationContinue);
    }
    
    delete(objetGlobalFormationContinue: ObjetGlobalFormationContinueVo) {
         return this.http.delete<number>(this.API+"id/"+objetGlobalFormationContinue.id);
    }


    public edit(): Observable<ObjetGlobalFormationContinueVo> {
        return this.http.put<ObjetGlobalFormationContinueVo>(this.API, this.selectedObjetGlobalFormationContinue);
    }
    

     public findByCriteria(objetGlobalFormationContinue:ObjetGlobalFormationContinueVo):Observable<Array<ObjetGlobalFormationContinueVo>>{
           return this.http.post<Array<ObjetGlobalFormationContinueVo>>(this.API+"search",objetGlobalFormationContinue);
    }



}