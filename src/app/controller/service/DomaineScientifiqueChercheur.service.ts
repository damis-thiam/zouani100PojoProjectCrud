import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {DomaineScientifiqueChercheurVo} from '../model/DomaineScientifiqueChercheur.model';
import {DomaineScientifiqueVo} from '../model/DomaineScientifique.model';
import {ChercheurVo} from '../model/Chercheur.model';


@Injectable({
  providedIn: 'root'
})
export class DomaineScientifiqueChercheurService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/domaineScientifiqueChercheur/';
        })
    }
     private _domaineScientifiqueChercheurs: Array<DomaineScientifiqueChercheurVo> = [];
     private _selectedDomaineScientifiqueChercheur: DomaineScientifiqueChercheurVo = new DomaineScientifiqueChercheurVo();
     private _domaineScientifiqueChercheurSelections: Array<DomaineScientifiqueChercheurVo>;
     private _createDomaineScientifiqueChercheurDialog: boolean;
     private _editDomaineScientifiqueChercheurDialog: boolean;
     private _viewDomaineScientifiqueChercheurDialog: boolean;
     public editDomaineScientifiqueChercheur$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchDomaineScientifiqueChercheur:DomaineScientifiqueChercheurVo = new DomaineScientifiqueChercheurVo();


    // getters and setters


    get domaineScientifiqueChercheurs(): Array<DomaineScientifiqueChercheurVo> {
        return this._domaineScientifiqueChercheurs == null ? this._domaineScientifiqueChercheurs =   new Array<DomaineScientifiqueChercheurVo>() : this._domaineScientifiqueChercheurs;
       }
    set domaineScientifiqueChercheurs(value: Array<DomaineScientifiqueChercheurVo>) {
        this._domaineScientifiqueChercheurs = value;
       }
    get selectedDomaineScientifiqueChercheur(): DomaineScientifiqueChercheurVo {
           return this._selectedDomaineScientifiqueChercheur;
       }
    set selectedDomaineScientifiqueChercheur(value: DomaineScientifiqueChercheurVo) {
        this._selectedDomaineScientifiqueChercheur = value;
       }
    get domaineScientifiqueChercheurSelections(): Array<DomaineScientifiqueChercheurVo> {
        return this._domaineScientifiqueChercheurSelections;
       }
    set domaineScientifiqueChercheurSelections(value: Array<DomaineScientifiqueChercheurVo>) {
        this._domaineScientifiqueChercheurSelections = value;
       }
    get createDomaineScientifiqueChercheurDialog(): boolean {
        return this._createDomaineScientifiqueChercheurDialog;
       }
    set createDomaineScientifiqueChercheurDialog(value: boolean) {
        this._createDomaineScientifiqueChercheurDialog = value;
       }

    get editDomaineScientifiqueChercheurDialog(): boolean {
        return this._editDomaineScientifiqueChercheurDialog;
       }
    set editDomaineScientifiqueChercheurDialog(value: boolean) {
        this._editDomaineScientifiqueChercheurDialog = value;
       }

    get viewDomaineScientifiqueChercheurDialog(): boolean {
        return this._viewDomaineScientifiqueChercheurDialog;
       }
    set viewDomaineScientifiqueChercheurDialog(value: boolean) {
        this._viewDomaineScientifiqueChercheurDialog = value;
       }
     get searchDomaineScientifiqueChercheur(): DomaineScientifiqueChercheurVo {
        return this._searchDomaineScientifiqueChercheur;
       }
    set searchDomaineScientifiqueChercheur(value: DomaineScientifiqueChercheurVo) {
        this._searchDomaineScientifiqueChercheur = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<DomaineScientifiqueChercheurVo>>(this.API);
    }
    
    public save(): Observable<DomaineScientifiqueChercheurVo> {
         return this.http.post<DomaineScientifiqueChercheurVo>(this.API, this.selectedDomaineScientifiqueChercheur);
    }
    
    delete(domaineScientifiqueChercheur: DomaineScientifiqueChercheurVo) {
         return this.http.delete<number>(this.API+"id/"+domaineScientifiqueChercheur.id);
    }


    public edit(): Observable<DomaineScientifiqueChercheurVo> {
        return this.http.put<DomaineScientifiqueChercheurVo>(this.API, this.selectedDomaineScientifiqueChercheur);
    }
    

     public findByCriteria(domaineScientifiqueChercheur:DomaineScientifiqueChercheurVo):Observable<Array<DomaineScientifiqueChercheurVo>>{
           return this.http.post<Array<DomaineScientifiqueChercheurVo>>(this.API+"search",domaineScientifiqueChercheur);
    }



}