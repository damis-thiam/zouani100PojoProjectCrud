import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {EnseignementVo} from '../model/Enseignement.model';
import {TypeEnseignementDispenseVo} from '../model/TypeEnseignementDispense.model';
import {PaysVo} from '../model/Pays.model';
import {ChercheurVo} from '../model/Chercheur.model';


@Injectable({
  providedIn: 'root'
})
export class EnseignementService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/enseignement/';
        })
    }
     private _enseignements: Array<EnseignementVo> = [];
     private _selectedEnseignement: EnseignementVo = new EnseignementVo();
     private _enseignementSelections: Array<EnseignementVo>;
     private _createEnseignementDialog: boolean;
     private _editEnseignementDialog: boolean;
     private _viewEnseignementDialog: boolean;
     public editEnseignement$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchEnseignement:EnseignementVo = new EnseignementVo();


    // getters and setters


    get enseignements(): Array<EnseignementVo> {
        return this._enseignements == null ? this._enseignements =   new Array<EnseignementVo>() : this._enseignements;
       }
    set enseignements(value: Array<EnseignementVo>) {
        this._enseignements = value;
       }
    get selectedEnseignement(): EnseignementVo {
           return this._selectedEnseignement;
       }
    set selectedEnseignement(value: EnseignementVo) {
        this._selectedEnseignement = value;
       }
    get enseignementSelections(): Array<EnseignementVo> {
        return this._enseignementSelections;
       }
    set enseignementSelections(value: Array<EnseignementVo>) {
        this._enseignementSelections = value;
       }
    get createEnseignementDialog(): boolean {
        return this._createEnseignementDialog;
       }
    set createEnseignementDialog(value: boolean) {
        this._createEnseignementDialog = value;
       }

    get editEnseignementDialog(): boolean {
        return this._editEnseignementDialog;
       }
    set editEnseignementDialog(value: boolean) {
        this._editEnseignementDialog = value;
       }

    get viewEnseignementDialog(): boolean {
        return this._viewEnseignementDialog;
       }
    set viewEnseignementDialog(value: boolean) {
        this._viewEnseignementDialog = value;
       }
     get searchEnseignement(): EnseignementVo {
        return this._searchEnseignement;
       }
    set searchEnseignement(value: EnseignementVo) {
        this._searchEnseignement = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<EnseignementVo>>(this.API);
    }
    
    public save(): Observable<EnseignementVo> {
         return this.http.post<EnseignementVo>(this.API, this.selectedEnseignement);
    }
    
    delete(enseignement: EnseignementVo) {
         return this.http.delete<number>(this.API+"id/"+enseignement.id);
    }


    public edit(): Observable<EnseignementVo> {
        return this.http.put<EnseignementVo>(this.API, this.selectedEnseignement);
    }
    

     public findByCriteria(enseignement:EnseignementVo):Observable<Array<EnseignementVo>>{
           return this.http.post<Array<EnseignementVo>>(this.API+"search",enseignement);
    }



}