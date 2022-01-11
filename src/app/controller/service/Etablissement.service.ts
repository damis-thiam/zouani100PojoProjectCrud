import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {EtablissementVo} from '../model/Etablissement.model';


@Injectable({
  providedIn: 'root'
})
export class EtablissementService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/etablissement/';
        })
    }
     private _etablissements: Array<EtablissementVo> = [];
     private _selectedEtablissement: EtablissementVo = new EtablissementVo();
     private _etablissementSelections: Array<EtablissementVo>;
     private _createEtablissementDialog: boolean;
     private _editEtablissementDialog: boolean;
     private _viewEtablissementDialog: boolean;
     public editEtablissement$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchEtablissement:EtablissementVo = new EtablissementVo();


    // getters and setters


    get etablissements(): Array<EtablissementVo> {
        return this._etablissements == null ? this._etablissements =   new Array<EtablissementVo>() : this._etablissements;
       }
    set etablissements(value: Array<EtablissementVo>) {
        this._etablissements = value;
       }
    get selectedEtablissement(): EtablissementVo {
           return this._selectedEtablissement;
       }
    set selectedEtablissement(value: EtablissementVo) {
        this._selectedEtablissement = value;
       }
    get etablissementSelections(): Array<EtablissementVo> {
        return this._etablissementSelections;
       }
    set etablissementSelections(value: Array<EtablissementVo>) {
        this._etablissementSelections = value;
       }
    get createEtablissementDialog(): boolean {
        return this._createEtablissementDialog;
       }
    set createEtablissementDialog(value: boolean) {
        this._createEtablissementDialog = value;
       }

    get editEtablissementDialog(): boolean {
        return this._editEtablissementDialog;
       }
    set editEtablissementDialog(value: boolean) {
        this._editEtablissementDialog = value;
       }

    get viewEtablissementDialog(): boolean {
        return this._viewEtablissementDialog;
       }
    set viewEtablissementDialog(value: boolean) {
        this._viewEtablissementDialog = value;
       }
     get searchEtablissement(): EtablissementVo {
        return this._searchEtablissement;
       }
    set searchEtablissement(value: EtablissementVo) {
        this._searchEtablissement = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<EtablissementVo>>(this.API);
    }
    
    public save(): Observable<EtablissementVo> {
         return this.http.post<EtablissementVo>(this.API, this.selectedEtablissement);
    }
    
    delete(etablissement: EtablissementVo) {
         return this.http.delete<number>(this.API+"id/"+etablissement.id);
    }


    public edit(): Observable<EtablissementVo> {
        return this.http.put<EtablissementVo>(this.API, this.selectedEtablissement);
    }
    

     public findByCriteria(etablissement:EtablissementVo):Observable<Array<EtablissementVo>>{
           return this.http.post<Array<EtablissementVo>>(this.API+"search",etablissement);
    }



}