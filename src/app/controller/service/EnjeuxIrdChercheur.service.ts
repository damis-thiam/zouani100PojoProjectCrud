import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {EnjeuxIrdChercheurVo} from '../model/EnjeuxIrdChercheur.model';
import {EnjeuxIrdVo} from '../model/EnjeuxIrd.model';
import {ChercheurVo} from '../model/Chercheur.model';


@Injectable({
  providedIn: 'root'
})
export class EnjeuxIrdChercheurService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/enjeuxIrdChercheur/';
        })
    }
     private _enjeuxIrdChercheurs: Array<EnjeuxIrdChercheurVo> = [];
     private _selectedEnjeuxIrdChercheur: EnjeuxIrdChercheurVo = new EnjeuxIrdChercheurVo();
     private _enjeuxIrdChercheurSelections: Array<EnjeuxIrdChercheurVo>;
     private _createEnjeuxIrdChercheurDialog: boolean;
     private _editEnjeuxIrdChercheurDialog: boolean;
     private _viewEnjeuxIrdChercheurDialog: boolean;
     public editEnjeuxIrdChercheur$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchEnjeuxIrdChercheur:EnjeuxIrdChercheurVo = new EnjeuxIrdChercheurVo();


    // getters and setters


    get enjeuxIrdChercheurs(): Array<EnjeuxIrdChercheurVo> {
        return this._enjeuxIrdChercheurs == null ? this._enjeuxIrdChercheurs =   new Array<EnjeuxIrdChercheurVo>() : this._enjeuxIrdChercheurs;
       }
    set enjeuxIrdChercheurs(value: Array<EnjeuxIrdChercheurVo>) {
        this._enjeuxIrdChercheurs = value;
       }
    get selectedEnjeuxIrdChercheur(): EnjeuxIrdChercheurVo {
           return this._selectedEnjeuxIrdChercheur;
       }
    set selectedEnjeuxIrdChercheur(value: EnjeuxIrdChercheurVo) {
        this._selectedEnjeuxIrdChercheur = value;
       }
    get enjeuxIrdChercheurSelections(): Array<EnjeuxIrdChercheurVo> {
        return this._enjeuxIrdChercheurSelections;
       }
    set enjeuxIrdChercheurSelections(value: Array<EnjeuxIrdChercheurVo>) {
        this._enjeuxIrdChercheurSelections = value;
       }
    get createEnjeuxIrdChercheurDialog(): boolean {
        return this._createEnjeuxIrdChercheurDialog;
       }
    set createEnjeuxIrdChercheurDialog(value: boolean) {
        this._createEnjeuxIrdChercheurDialog = value;
       }

    get editEnjeuxIrdChercheurDialog(): boolean {
        return this._editEnjeuxIrdChercheurDialog;
       }
    set editEnjeuxIrdChercheurDialog(value: boolean) {
        this._editEnjeuxIrdChercheurDialog = value;
       }

    get viewEnjeuxIrdChercheurDialog(): boolean {
        return this._viewEnjeuxIrdChercheurDialog;
       }
    set viewEnjeuxIrdChercheurDialog(value: boolean) {
        this._viewEnjeuxIrdChercheurDialog = value;
       }
     get searchEnjeuxIrdChercheur(): EnjeuxIrdChercheurVo {
        return this._searchEnjeuxIrdChercheur;
       }
    set searchEnjeuxIrdChercheur(value: EnjeuxIrdChercheurVo) {
        this._searchEnjeuxIrdChercheur = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<EnjeuxIrdChercheurVo>>(this.API);
    }
    
    public save(): Observable<EnjeuxIrdChercheurVo> {
         return this.http.post<EnjeuxIrdChercheurVo>(this.API, this.selectedEnjeuxIrdChercheur);
    }
    
    delete(enjeuxIrdChercheur: EnjeuxIrdChercheurVo) {
         return this.http.delete<number>(this.API+"id/"+enjeuxIrdChercheur.id);
    }


    public edit(): Observable<EnjeuxIrdChercheurVo> {
        return this.http.put<EnjeuxIrdChercheurVo>(this.API, this.selectedEnjeuxIrdChercheur);
    }
    

     public findByCriteria(enjeuxIrdChercheur:EnjeuxIrdChercheurVo):Observable<Array<EnjeuxIrdChercheurVo>>{
           return this.http.post<Array<EnjeuxIrdChercheurVo>>(this.API+"search",enjeuxIrdChercheur);
    }



}