import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {ContexteVo} from '../model/Contexte.model';


@Injectable({
  providedIn: 'root'
})
export class ContexteService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/contexte/';
        })
    }
     private _contextes: Array<ContexteVo> = [];
     private _selectedContexte: ContexteVo = new ContexteVo();
     private _contexteSelections: Array<ContexteVo>;
     private _createContexteDialog: boolean;
     private _editContexteDialog: boolean;
     private _viewContexteDialog: boolean;
     public editContexte$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchContexte:ContexteVo = new ContexteVo();


    // getters and setters


    get contextes(): Array<ContexteVo> {
        return this._contextes == null ? this._contextes =   new Array<ContexteVo>() : this._contextes;
       }
    set contextes(value: Array<ContexteVo>) {
        this._contextes = value;
       }
    get selectedContexte(): ContexteVo {
           return this._selectedContexte;
       }
    set selectedContexte(value: ContexteVo) {
        this._selectedContexte = value;
       }
    get contexteSelections(): Array<ContexteVo> {
        return this._contexteSelections;
       }
    set contexteSelections(value: Array<ContexteVo>) {
        this._contexteSelections = value;
       }
    get createContexteDialog(): boolean {
        return this._createContexteDialog;
       }
    set createContexteDialog(value: boolean) {
        this._createContexteDialog = value;
       }

    get editContexteDialog(): boolean {
        return this._editContexteDialog;
       }
    set editContexteDialog(value: boolean) {
        this._editContexteDialog = value;
       }

    get viewContexteDialog(): boolean {
        return this._viewContexteDialog;
       }
    set viewContexteDialog(value: boolean) {
        this._viewContexteDialog = value;
       }
     get searchContexte(): ContexteVo {
        return this._searchContexte;
       }
    set searchContexte(value: ContexteVo) {
        this._searchContexte = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<ContexteVo>>(this.API);
    }
    
    public save(): Observable<ContexteVo> {
         return this.http.post<ContexteVo>(this.API, this.selectedContexte);
    }
    
    delete(contexte: ContexteVo) {
         return this.http.delete<number>(this.API+"id/"+contexte.id);
    }


    public edit(): Observable<ContexteVo> {
        return this.http.put<ContexteVo>(this.API, this.selectedContexte);
    }
    

     public findByCriteria(contexte:ContexteVo):Observable<Array<ContexteVo>>{
           return this.http.post<Array<ContexteVo>>(this.API+"search",contexte);
    }



}