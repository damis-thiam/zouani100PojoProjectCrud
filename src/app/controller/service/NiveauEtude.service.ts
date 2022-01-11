import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {NiveauEtudeVo} from '../model/NiveauEtude.model';


@Injectable({
  providedIn: 'root'
})
export class NiveauEtudeService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/niveauEtude/';
        })
    }
     private _niveauEtudes: Array<NiveauEtudeVo> = [];
     private _selectedNiveauEtude: NiveauEtudeVo = new NiveauEtudeVo();
     private _niveauEtudeSelections: Array<NiveauEtudeVo>;
     private _createNiveauEtudeDialog: boolean;
     private _editNiveauEtudeDialog: boolean;
     private _viewNiveauEtudeDialog: boolean;
     public editNiveauEtude$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchNiveauEtude:NiveauEtudeVo = new NiveauEtudeVo();


    // getters and setters


    get niveauEtudes(): Array<NiveauEtudeVo> {
        return this._niveauEtudes == null ? this._niveauEtudes =   new Array<NiveauEtudeVo>() : this._niveauEtudes;
       }
    set niveauEtudes(value: Array<NiveauEtudeVo>) {
        this._niveauEtudes = value;
       }
    get selectedNiveauEtude(): NiveauEtudeVo {
           return this._selectedNiveauEtude;
       }
    set selectedNiveauEtude(value: NiveauEtudeVo) {
        this._selectedNiveauEtude = value;
       }
    get niveauEtudeSelections(): Array<NiveauEtudeVo> {
        return this._niveauEtudeSelections;
       }
    set niveauEtudeSelections(value: Array<NiveauEtudeVo>) {
        this._niveauEtudeSelections = value;
       }
    get createNiveauEtudeDialog(): boolean {
        return this._createNiveauEtudeDialog;
       }
    set createNiveauEtudeDialog(value: boolean) {
        this._createNiveauEtudeDialog = value;
       }

    get editNiveauEtudeDialog(): boolean {
        return this._editNiveauEtudeDialog;
       }
    set editNiveauEtudeDialog(value: boolean) {
        this._editNiveauEtudeDialog = value;
       }

    get viewNiveauEtudeDialog(): boolean {
        return this._viewNiveauEtudeDialog;
       }
    set viewNiveauEtudeDialog(value: boolean) {
        this._viewNiveauEtudeDialog = value;
       }
     get searchNiveauEtude(): NiveauEtudeVo {
        return this._searchNiveauEtude;
       }
    set searchNiveauEtude(value: NiveauEtudeVo) {
        this._searchNiveauEtude = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<NiveauEtudeVo>>(this.API);
    }
    
    public save(): Observable<NiveauEtudeVo> {
         return this.http.post<NiveauEtudeVo>(this.API, this.selectedNiveauEtude);
    }
    
    delete(niveauEtude: NiveauEtudeVo) {
         return this.http.delete<number>(this.API+"id/"+niveauEtude.id);
    }


    public edit(): Observable<NiveauEtudeVo> {
        return this.http.put<NiveauEtudeVo>(this.API, this.selectedNiveauEtude);
    }
    

     public findByCriteria(niveauEtude:NiveauEtudeVo):Observable<Array<NiveauEtudeVo>>{
           return this.http.post<Array<NiveauEtudeVo>>(this.API+"search",niveauEtude);
    }



}