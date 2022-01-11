import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {ModeDiffusionVo} from '../model/ModeDiffusion.model';
import {TypeSavoirVo} from '../model/TypeSavoir.model';


@Injectable({
  providedIn: 'root'
})
export class ModeDiffusionService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/modeDiffusion/';
        })
    }
     private _modeDiffusions: Array<ModeDiffusionVo> = [];
     private _selectedModeDiffusion: ModeDiffusionVo = new ModeDiffusionVo();
     private _modeDiffusionSelections: Array<ModeDiffusionVo>;
     private _createModeDiffusionDialog: boolean;
     private _editModeDiffusionDialog: boolean;
     private _viewModeDiffusionDialog: boolean;
     public editModeDiffusion$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchModeDiffusion:ModeDiffusionVo = new ModeDiffusionVo();


    // getters and setters


    get modeDiffusions(): Array<ModeDiffusionVo> {
        return this._modeDiffusions == null ? this._modeDiffusions =   new Array<ModeDiffusionVo>() : this._modeDiffusions;
       }
    set modeDiffusions(value: Array<ModeDiffusionVo>) {
        this._modeDiffusions = value;
       }
    get selectedModeDiffusion(): ModeDiffusionVo {
           return this._selectedModeDiffusion;
       }
    set selectedModeDiffusion(value: ModeDiffusionVo) {
        this._selectedModeDiffusion = value;
       }
    get modeDiffusionSelections(): Array<ModeDiffusionVo> {
        return this._modeDiffusionSelections;
       }
    set modeDiffusionSelections(value: Array<ModeDiffusionVo>) {
        this._modeDiffusionSelections = value;
       }
    get createModeDiffusionDialog(): boolean {
        return this._createModeDiffusionDialog;
       }
    set createModeDiffusionDialog(value: boolean) {
        this._createModeDiffusionDialog = value;
       }

    get editModeDiffusionDialog(): boolean {
        return this._editModeDiffusionDialog;
       }
    set editModeDiffusionDialog(value: boolean) {
        this._editModeDiffusionDialog = value;
       }

    get viewModeDiffusionDialog(): boolean {
        return this._viewModeDiffusionDialog;
       }
    set viewModeDiffusionDialog(value: boolean) {
        this._viewModeDiffusionDialog = value;
       }
     get searchModeDiffusion(): ModeDiffusionVo {
        return this._searchModeDiffusion;
       }
    set searchModeDiffusion(value: ModeDiffusionVo) {
        this._searchModeDiffusion = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<ModeDiffusionVo>>(this.API);
    }
    
    public save(): Observable<ModeDiffusionVo> {
         return this.http.post<ModeDiffusionVo>(this.API, this.selectedModeDiffusion);
    }
    
    delete(modeDiffusion: ModeDiffusionVo) {
         return this.http.delete<number>(this.API+"id/"+modeDiffusion.id);
    }


    public edit(): Observable<ModeDiffusionVo> {
        return this.http.put<ModeDiffusionVo>(this.API, this.selectedModeDiffusion);
    }
    

     public findByCriteria(modeDiffusion:ModeDiffusionVo):Observable<Array<ModeDiffusionVo>>{
           return this.http.post<Array<ModeDiffusionVo>>(this.API+"search",modeDiffusion);
    }



}