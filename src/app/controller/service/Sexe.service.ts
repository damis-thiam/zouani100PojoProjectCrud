import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {SexeVo} from '../model/Sexe.model';


@Injectable({
  providedIn: 'root'
})
export class SexeService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/sexe/';
        })
    }
     private _sexes: Array<SexeVo> = [];
     private _selectedSexe: SexeVo = new SexeVo();
     private _sexeSelections: Array<SexeVo>;
     private _createSexeDialog: boolean;
     private _editSexeDialog: boolean;
     private _viewSexeDialog: boolean;
     public editSexe$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchSexe:SexeVo = new SexeVo();


    // getters and setters


    get sexes(): Array<SexeVo> {
        return this._sexes == null ? this._sexes =   new Array<SexeVo>() : this._sexes;
       }
    set sexes(value: Array<SexeVo>) {
        this._sexes = value;
       }
    get selectedSexe(): SexeVo {
           return this._selectedSexe;
       }
    set selectedSexe(value: SexeVo) {
        this._selectedSexe = value;
       }
    get sexeSelections(): Array<SexeVo> {
        return this._sexeSelections;
       }
    set sexeSelections(value: Array<SexeVo>) {
        this._sexeSelections = value;
       }
    get createSexeDialog(): boolean {
        return this._createSexeDialog;
       }
    set createSexeDialog(value: boolean) {
        this._createSexeDialog = value;
       }

    get editSexeDialog(): boolean {
        return this._editSexeDialog;
       }
    set editSexeDialog(value: boolean) {
        this._editSexeDialog = value;
       }

    get viewSexeDialog(): boolean {
        return this._viewSexeDialog;
       }
    set viewSexeDialog(value: boolean) {
        this._viewSexeDialog = value;
       }
     get searchSexe(): SexeVo {
        return this._searchSexe;
       }
    set searchSexe(value: SexeVo) {
        this._searchSexe = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<SexeVo>>(this.API);
    }
    
    public save(): Observable<SexeVo> {
         return this.http.post<SexeVo>(this.API, this.selectedSexe);
    }
    
    delete(sexe: SexeVo) {
         return this.http.delete<number>(this.API+"id/"+sexe.id);
    }


    public edit(): Observable<SexeVo> {
        return this.http.put<SexeVo>(this.API, this.selectedSexe);
    }
    

     public findByCriteria(sexe:SexeVo):Observable<Array<SexeVo>>{
           return this.http.post<Array<SexeVo>>(this.API+"search",sexe);
    }



}