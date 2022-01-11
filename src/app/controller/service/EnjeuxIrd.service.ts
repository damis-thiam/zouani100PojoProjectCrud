import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {EnjeuxIrdVo} from '../model/EnjeuxIrd.model';


@Injectable({
  providedIn: 'root'
})
export class EnjeuxIrdService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/enjeuxIrd/';
        })
    }
     private _enjeuxIrds: Array<EnjeuxIrdVo> = [];
     private _selectedEnjeuxIrd: EnjeuxIrdVo = new EnjeuxIrdVo();
     private _enjeuxIrdSelections: Array<EnjeuxIrdVo>;
     private _createEnjeuxIrdDialog: boolean;
     private _editEnjeuxIrdDialog: boolean;
     private _viewEnjeuxIrdDialog: boolean;
     public editEnjeuxIrd$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchEnjeuxIrd:EnjeuxIrdVo = new EnjeuxIrdVo();


    // getters and setters


    get enjeuxIrds(): Array<EnjeuxIrdVo> {
        return this._enjeuxIrds == null ? this._enjeuxIrds =   new Array<EnjeuxIrdVo>() : this._enjeuxIrds;
       }
    set enjeuxIrds(value: Array<EnjeuxIrdVo>) {
        this._enjeuxIrds = value;
       }
    get selectedEnjeuxIrd(): EnjeuxIrdVo {
           return this._selectedEnjeuxIrd;
       }
    set selectedEnjeuxIrd(value: EnjeuxIrdVo) {
        this._selectedEnjeuxIrd = value;
       }
    get enjeuxIrdSelections(): Array<EnjeuxIrdVo> {
        return this._enjeuxIrdSelections;
       }
    set enjeuxIrdSelections(value: Array<EnjeuxIrdVo>) {
        this._enjeuxIrdSelections = value;
       }
    get createEnjeuxIrdDialog(): boolean {
        return this._createEnjeuxIrdDialog;
       }
    set createEnjeuxIrdDialog(value: boolean) {
        this._createEnjeuxIrdDialog = value;
       }

    get editEnjeuxIrdDialog(): boolean {
        return this._editEnjeuxIrdDialog;
       }
    set editEnjeuxIrdDialog(value: boolean) {
        this._editEnjeuxIrdDialog = value;
       }

    get viewEnjeuxIrdDialog(): boolean {
        return this._viewEnjeuxIrdDialog;
       }
    set viewEnjeuxIrdDialog(value: boolean) {
        this._viewEnjeuxIrdDialog = value;
       }
     get searchEnjeuxIrd(): EnjeuxIrdVo {
        return this._searchEnjeuxIrd;
       }
    set searchEnjeuxIrd(value: EnjeuxIrdVo) {
        this._searchEnjeuxIrd = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<EnjeuxIrdVo>>(this.API);
    }
    
    public save(): Observable<EnjeuxIrdVo> {
         return this.http.post<EnjeuxIrdVo>(this.API, this.selectedEnjeuxIrd);
    }
    
    delete(enjeuxIrd: EnjeuxIrdVo) {
         return this.http.delete<number>(this.API+"id/"+enjeuxIrd.id);
    }


    public edit(): Observable<EnjeuxIrdVo> {
        return this.http.put<EnjeuxIrdVo>(this.API, this.selectedEnjeuxIrd);
    }
    

     public findByCriteria(enjeuxIrd:EnjeuxIrdVo):Observable<Array<EnjeuxIrdVo>>{
           return this.http.post<Array<EnjeuxIrdVo>>(this.API+"search",enjeuxIrd);
    }



}