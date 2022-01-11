import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {StatutMasterVo} from '../model/StatutMaster.model';


@Injectable({
  providedIn: 'root'
})
export class StatutMasterService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/statutMaster/';
        })
    }
     private _statutMasters: Array<StatutMasterVo> = [];
     private _selectedStatutMaster: StatutMasterVo = new StatutMasterVo();
     private _statutMasterSelections: Array<StatutMasterVo>;
     private _createStatutMasterDialog: boolean;
     private _editStatutMasterDialog: boolean;
     private _viewStatutMasterDialog: boolean;
     public editStatutMaster$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchStatutMaster:StatutMasterVo = new StatutMasterVo();


    // getters and setters


    get statutMasters(): Array<StatutMasterVo> {
        return this._statutMasters == null ? this._statutMasters =   new Array<StatutMasterVo>() : this._statutMasters;
       }
    set statutMasters(value: Array<StatutMasterVo>) {
        this._statutMasters = value;
       }
    get selectedStatutMaster(): StatutMasterVo {
           return this._selectedStatutMaster;
       }
    set selectedStatutMaster(value: StatutMasterVo) {
        this._selectedStatutMaster = value;
       }
    get statutMasterSelections(): Array<StatutMasterVo> {
        return this._statutMasterSelections;
       }
    set statutMasterSelections(value: Array<StatutMasterVo>) {
        this._statutMasterSelections = value;
       }
    get createStatutMasterDialog(): boolean {
        return this._createStatutMasterDialog;
       }
    set createStatutMasterDialog(value: boolean) {
        this._createStatutMasterDialog = value;
       }

    get editStatutMasterDialog(): boolean {
        return this._editStatutMasterDialog;
       }
    set editStatutMasterDialog(value: boolean) {
        this._editStatutMasterDialog = value;
       }

    get viewStatutMasterDialog(): boolean {
        return this._viewStatutMasterDialog;
       }
    set viewStatutMasterDialog(value: boolean) {
        this._viewStatutMasterDialog = value;
       }
     get searchStatutMaster(): StatutMasterVo {
        return this._searchStatutMaster;
       }
    set searchStatutMaster(value: StatutMasterVo) {
        this._searchStatutMaster = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<StatutMasterVo>>(this.API);
    }
    
    public save(): Observable<StatutMasterVo> {
         return this.http.post<StatutMasterVo>(this.API, this.selectedStatutMaster);
    }
    
    delete(statutMaster: StatutMasterVo) {
         return this.http.delete<number>(this.API+"id/"+statutMaster.id);
    }


    public edit(): Observable<StatutMasterVo> {
        return this.http.put<StatutMasterVo>(this.API, this.selectedStatutMaster);
    }
    

     public findByCriteria(statutMaster:StatutMasterVo):Observable<Array<StatutMasterVo>>{
           return this.http.post<Array<StatutMasterVo>>(this.API+"search",statutMaster);
    }



}