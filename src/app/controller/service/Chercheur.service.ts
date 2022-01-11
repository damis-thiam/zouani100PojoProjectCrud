import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {ChercheurVo} from '../model/Chercheur.model';
import {TypeEntiteAdministrativeVo} from '../model/TypeEntiteAdministrative.model';
import {EntiteAdministrativeVo} from '../model/EntiteAdministrative.model';
import {DepartementScientifiqueVo} from '../model/DepartementScientifique.model';
import {SexeVo} from '../model/Sexe.model';
import {GradeVo} from '../model/Grade.model';
import {CorpsVo} from '../model/Corps.model';
import {CommissionScientifiqueVo} from '../model/CommissionScientifique.model';


@Injectable({
  providedIn: 'root'
})
export class ChercheurService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/chercheur/';
        })
    }
     private _chercheurs: Array<ChercheurVo> = [];
     private _selectedChercheur: ChercheurVo = new ChercheurVo();
     private _chercheurSelections: Array<ChercheurVo>;
     private _createChercheurDialog: boolean;
     private _editChercheurDialog: boolean;
     private _viewChercheurDialog: boolean;
     public editChercheur$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchChercheur:ChercheurVo = new ChercheurVo();


    // getters and setters


    get chercheurs(): Array<ChercheurVo> {
        return this._chercheurs == null ? this._chercheurs =   new Array<ChercheurVo>() : this._chercheurs;
       }
    set chercheurs(value: Array<ChercheurVo>) {
        this._chercheurs = value;
       }
    get selectedChercheur(): ChercheurVo {
           return this._selectedChercheur;
       }
    set selectedChercheur(value: ChercheurVo) {
        this._selectedChercheur = value;
       }
    get chercheurSelections(): Array<ChercheurVo> {
        return this._chercheurSelections;
       }
    set chercheurSelections(value: Array<ChercheurVo>) {
        this._chercheurSelections = value;
       }
    get createChercheurDialog(): boolean {
        return this._createChercheurDialog;
       }
    set createChercheurDialog(value: boolean) {
        this._createChercheurDialog = value;
       }

    get editChercheurDialog(): boolean {
        return this._editChercheurDialog;
       }
    set editChercheurDialog(value: boolean) {
        this._editChercheurDialog = value;
       }

    get viewChercheurDialog(): boolean {
        return this._viewChercheurDialog;
       }
    set viewChercheurDialog(value: boolean) {
        this._viewChercheurDialog = value;
       }
     get searchChercheur(): ChercheurVo {
        return this._searchChercheur;
       }
    set searchChercheur(value: ChercheurVo) {
        this._searchChercheur = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<ChercheurVo>>(this.API);
    }
    
    public save(): Observable<ChercheurVo> {
         return this.http.post<ChercheurVo>(this.API, this.selectedChercheur);
    }
    
    delete(chercheur: ChercheurVo) {
         return this.http.delete<number>(this.API+"id/"+chercheur.id);
    }


    public edit(): Observable<ChercheurVo> {
        return this.http.put<ChercheurVo>(this.API, this.selectedChercheur);
    }
    

     public findByCriteria(chercheur:ChercheurVo):Observable<Array<ChercheurVo>>{
           return this.http.post<Array<ChercheurVo>>(this.API+"search",chercheur);
    }



}