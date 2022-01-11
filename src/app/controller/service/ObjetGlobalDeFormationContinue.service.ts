import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {ObjetGlobalDeFormationContinueVo} from '../model/ObjetGlobalDeFormationContinue.model';
import {FormationContinueVo} from '../model/FormationContinue.model';
import {ObjetGlobalVo} from '../model/ObjetGlobal.model';


@Injectable({
  providedIn: 'root'
})
export class ObjetGlobalDeFormationContinueService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/objetGlobalDeFormationContinue/';
        })
    }
     private _objetGlobalDeFormationContinues: Array<ObjetGlobalDeFormationContinueVo> = [];
     private _selectedObjetGlobalDeFormationContinue: ObjetGlobalDeFormationContinueVo = new ObjetGlobalDeFormationContinueVo();
     private _objetGlobalDeFormationContinueSelections: Array<ObjetGlobalDeFormationContinueVo>;
     private _createObjetGlobalDeFormationContinueDialog: boolean;
     private _editObjetGlobalDeFormationContinueDialog: boolean;
     private _viewObjetGlobalDeFormationContinueDialog: boolean;
     public editObjetGlobalDeFormationContinue$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchObjetGlobalDeFormationContinue:ObjetGlobalDeFormationContinueVo = new ObjetGlobalDeFormationContinueVo();


    // getters and setters


    get objetGlobalDeFormationContinues(): Array<ObjetGlobalDeFormationContinueVo> {
        return this._objetGlobalDeFormationContinues == null ? this._objetGlobalDeFormationContinues =   new Array<ObjetGlobalDeFormationContinueVo>() : this._objetGlobalDeFormationContinues;
       }
    set objetGlobalDeFormationContinues(value: Array<ObjetGlobalDeFormationContinueVo>) {
        this._objetGlobalDeFormationContinues = value;
       }
    get selectedObjetGlobalDeFormationContinue(): ObjetGlobalDeFormationContinueVo {
           return this._selectedObjetGlobalDeFormationContinue;
       }
    set selectedObjetGlobalDeFormationContinue(value: ObjetGlobalDeFormationContinueVo) {
        this._selectedObjetGlobalDeFormationContinue = value;
       }
    get objetGlobalDeFormationContinueSelections(): Array<ObjetGlobalDeFormationContinueVo> {
        return this._objetGlobalDeFormationContinueSelections;
       }
    set objetGlobalDeFormationContinueSelections(value: Array<ObjetGlobalDeFormationContinueVo>) {
        this._objetGlobalDeFormationContinueSelections = value;
       }
    get createObjetGlobalDeFormationContinueDialog(): boolean {
        return this._createObjetGlobalDeFormationContinueDialog;
       }
    set createObjetGlobalDeFormationContinueDialog(value: boolean) {
        this._createObjetGlobalDeFormationContinueDialog = value;
       }

    get editObjetGlobalDeFormationContinueDialog(): boolean {
        return this._editObjetGlobalDeFormationContinueDialog;
       }
    set editObjetGlobalDeFormationContinueDialog(value: boolean) {
        this._editObjetGlobalDeFormationContinueDialog = value;
       }

    get viewObjetGlobalDeFormationContinueDialog(): boolean {
        return this._viewObjetGlobalDeFormationContinueDialog;
       }
    set viewObjetGlobalDeFormationContinueDialog(value: boolean) {
        this._viewObjetGlobalDeFormationContinueDialog = value;
       }
     get searchObjetGlobalDeFormationContinue(): ObjetGlobalDeFormationContinueVo {
        return this._searchObjetGlobalDeFormationContinue;
       }
    set searchObjetGlobalDeFormationContinue(value: ObjetGlobalDeFormationContinueVo) {
        this._searchObjetGlobalDeFormationContinue = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<ObjetGlobalDeFormationContinueVo>>(this.API);
    }
    
    public save(): Observable<ObjetGlobalDeFormationContinueVo> {
         return this.http.post<ObjetGlobalDeFormationContinueVo>(this.API, this.selectedObjetGlobalDeFormationContinue);
    }
    
    delete(objetGlobalDeFormationContinue: ObjetGlobalDeFormationContinueVo) {
         return this.http.delete<number>(this.API+"id/"+objetGlobalDeFormationContinue.id);
    }


    public edit(): Observable<ObjetGlobalDeFormationContinueVo> {
        return this.http.put<ObjetGlobalDeFormationContinueVo>(this.API, this.selectedObjetGlobalDeFormationContinue);
    }
    

     public findByCriteria(objetGlobalDeFormationContinue:ObjetGlobalDeFormationContinueVo):Observable<Array<ObjetGlobalDeFormationContinueVo>>{
           return this.http.post<Array<ObjetGlobalDeFormationContinueVo>>(this.API+"search",objetGlobalDeFormationContinue);
    }



}