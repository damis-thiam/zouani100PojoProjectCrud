import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {EtablissementPartenaireVo} from '../model/EtablissementPartenaire.model';


@Injectable({
  providedIn: 'root'
})
export class EtablissementPartenaireService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/etablissementPartenaire/';
        })
    }
     private _etablissementPartenaires: Array<EtablissementPartenaireVo> = [];
     private _selectedEtablissementPartenaire: EtablissementPartenaireVo = new EtablissementPartenaireVo();
     private _etablissementPartenaireSelections: Array<EtablissementPartenaireVo>;
     private _createEtablissementPartenaireDialog: boolean;
     private _editEtablissementPartenaireDialog: boolean;
     private _viewEtablissementPartenaireDialog: boolean;
     public editEtablissementPartenaire$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchEtablissementPartenaire:EtablissementPartenaireVo = new EtablissementPartenaireVo();


    // getters and setters


    get etablissementPartenaires(): Array<EtablissementPartenaireVo> {
        return this._etablissementPartenaires == null ? this._etablissementPartenaires =   new Array<EtablissementPartenaireVo>() : this._etablissementPartenaires;
       }
    set etablissementPartenaires(value: Array<EtablissementPartenaireVo>) {
        this._etablissementPartenaires = value;
       }
    get selectedEtablissementPartenaire(): EtablissementPartenaireVo {
           return this._selectedEtablissementPartenaire;
       }
    set selectedEtablissementPartenaire(value: EtablissementPartenaireVo) {
        this._selectedEtablissementPartenaire = value;
       }
    get etablissementPartenaireSelections(): Array<EtablissementPartenaireVo> {
        return this._etablissementPartenaireSelections;
       }
    set etablissementPartenaireSelections(value: Array<EtablissementPartenaireVo>) {
        this._etablissementPartenaireSelections = value;
       }
    get createEtablissementPartenaireDialog(): boolean {
        return this._createEtablissementPartenaireDialog;
       }
    set createEtablissementPartenaireDialog(value: boolean) {
        this._createEtablissementPartenaireDialog = value;
       }

    get editEtablissementPartenaireDialog(): boolean {
        return this._editEtablissementPartenaireDialog;
       }
    set editEtablissementPartenaireDialog(value: boolean) {
        this._editEtablissementPartenaireDialog = value;
       }

    get viewEtablissementPartenaireDialog(): boolean {
        return this._viewEtablissementPartenaireDialog;
       }
    set viewEtablissementPartenaireDialog(value: boolean) {
        this._viewEtablissementPartenaireDialog = value;
       }
     get searchEtablissementPartenaire(): EtablissementPartenaireVo {
        return this._searchEtablissementPartenaire;
       }
    set searchEtablissementPartenaire(value: EtablissementPartenaireVo) {
        this._searchEtablissementPartenaire = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<EtablissementPartenaireVo>>(this.API);
    }
    
    public save(): Observable<EtablissementPartenaireVo> {
         return this.http.post<EtablissementPartenaireVo>(this.API, this.selectedEtablissementPartenaire);
    }
    
    delete(etablissementPartenaire: EtablissementPartenaireVo) {
         return this.http.delete<number>(this.API+"id/"+etablissementPartenaire.id);
    }


    public edit(): Observable<EtablissementPartenaireVo> {
        return this.http.put<EtablissementPartenaireVo>(this.API, this.selectedEtablissementPartenaire);
    }
    

     public findByCriteria(etablissementPartenaire:EtablissementPartenaireVo):Observable<Array<EtablissementPartenaireVo>>{
           return this.http.post<Array<EtablissementPartenaireVo>>(this.API+"search",etablissementPartenaire);
    }



}