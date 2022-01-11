import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {FormatRencontreVo} from '../model/FormatRencontre.model';


@Injectable({
  providedIn: 'root'
})
export class FormatRencontreService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/formatRencontre/';
        })
    }
     private _formatRencontres: Array<FormatRencontreVo> = [];
     private _selectedFormatRencontre: FormatRencontreVo = new FormatRencontreVo();
     private _formatRencontreSelections: Array<FormatRencontreVo>;
     private _createFormatRencontreDialog: boolean;
     private _editFormatRencontreDialog: boolean;
     private _viewFormatRencontreDialog: boolean;
     public editFormatRencontre$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchFormatRencontre:FormatRencontreVo = new FormatRencontreVo();


    // getters and setters


    get formatRencontres(): Array<FormatRencontreVo> {
        return this._formatRencontres == null ? this._formatRencontres =   new Array<FormatRencontreVo>() : this._formatRencontres;
       }
    set formatRencontres(value: Array<FormatRencontreVo>) {
        this._formatRencontres = value;
       }
    get selectedFormatRencontre(): FormatRencontreVo {
           return this._selectedFormatRencontre;
       }
    set selectedFormatRencontre(value: FormatRencontreVo) {
        this._selectedFormatRencontre = value;
       }
    get formatRencontreSelections(): Array<FormatRencontreVo> {
        return this._formatRencontreSelections;
       }
    set formatRencontreSelections(value: Array<FormatRencontreVo>) {
        this._formatRencontreSelections = value;
       }
    get createFormatRencontreDialog(): boolean {
        return this._createFormatRencontreDialog;
       }
    set createFormatRencontreDialog(value: boolean) {
        this._createFormatRencontreDialog = value;
       }

    get editFormatRencontreDialog(): boolean {
        return this._editFormatRencontreDialog;
       }
    set editFormatRencontreDialog(value: boolean) {
        this._editFormatRencontreDialog = value;
       }

    get viewFormatRencontreDialog(): boolean {
        return this._viewFormatRencontreDialog;
       }
    set viewFormatRencontreDialog(value: boolean) {
        this._viewFormatRencontreDialog = value;
       }
     get searchFormatRencontre(): FormatRencontreVo {
        return this._searchFormatRencontre;
       }
    set searchFormatRencontre(value: FormatRencontreVo) {
        this._searchFormatRencontre = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<FormatRencontreVo>>(this.API);
    }
    
    public save(): Observable<FormatRencontreVo> {
         return this.http.post<FormatRencontreVo>(this.API, this.selectedFormatRencontre);
    }
    
    delete(formatRencontre: FormatRencontreVo) {
         return this.http.delete<number>(this.API+"id/"+formatRencontre.id);
    }


    public edit(): Observable<FormatRencontreVo> {
        return this.http.put<FormatRencontreVo>(this.API, this.selectedFormatRencontre);
    }
    

     public findByCriteria(formatRencontre:FormatRencontreVo):Observable<Array<FormatRencontreVo>>{
           return this.http.post<Array<FormatRencontreVo>>(this.API+"search",formatRencontre);
    }



}