import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {ProjetActiviteRechercheVo} from '../model/ProjetActiviteRecherche.model';
import {RoleProjetVo} from '../model/RoleProjet.model';
import {StatusProjetVo} from '../model/StatusProjet.model';
import {FournisseurAppelProjetRechercheVo} from '../model/FournisseurAppelProjetRecherche.model';
import {EtablissementProjetVo} from '../model/EtablissementProjet.model';
import {PaysVo} from '../model/Pays.model';
import {ChercheurVo} from '../model/Chercheur.model';


@Injectable({
  providedIn: 'root'
})
export class ProjetActiviteRechercheService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/projetActiviteRecherche/';
        })
    }
     private _projetActiviteRecherches: Array<ProjetActiviteRechercheVo> = [];
     private _selectedProjetActiviteRecherche: ProjetActiviteRechercheVo = new ProjetActiviteRechercheVo();
     private _projetActiviteRechercheSelections: Array<ProjetActiviteRechercheVo>;
     private _createProjetActiviteRechercheDialog: boolean;
     private _editProjetActiviteRechercheDialog: boolean;
     private _viewProjetActiviteRechercheDialog: boolean;
     public editProjetActiviteRecherche$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchProjetActiviteRecherche:ProjetActiviteRechercheVo = new ProjetActiviteRechercheVo();


    // getters and setters


    get projetActiviteRecherches(): Array<ProjetActiviteRechercheVo> {
        return this._projetActiviteRecherches == null ? this._projetActiviteRecherches =   new Array<ProjetActiviteRechercheVo>() : this._projetActiviteRecherches;
       }
    set projetActiviteRecherches(value: Array<ProjetActiviteRechercheVo>) {
        this._projetActiviteRecherches = value;
       }
    get selectedProjetActiviteRecherche(): ProjetActiviteRechercheVo {
           return this._selectedProjetActiviteRecherche;
       }
    set selectedProjetActiviteRecherche(value: ProjetActiviteRechercheVo) {
        this._selectedProjetActiviteRecherche = value;
       }
    get projetActiviteRechercheSelections(): Array<ProjetActiviteRechercheVo> {
        return this._projetActiviteRechercheSelections;
       }
    set projetActiviteRechercheSelections(value: Array<ProjetActiviteRechercheVo>) {
        this._projetActiviteRechercheSelections = value;
       }
    get createProjetActiviteRechercheDialog(): boolean {
        return this._createProjetActiviteRechercheDialog;
       }
    set createProjetActiviteRechercheDialog(value: boolean) {
        this._createProjetActiviteRechercheDialog = value;
       }

    get editProjetActiviteRechercheDialog(): boolean {
        return this._editProjetActiviteRechercheDialog;
       }
    set editProjetActiviteRechercheDialog(value: boolean) {
        this._editProjetActiviteRechercheDialog = value;
       }

    get viewProjetActiviteRechercheDialog(): boolean {
        return this._viewProjetActiviteRechercheDialog;
       }
    set viewProjetActiviteRechercheDialog(value: boolean) {
        this._viewProjetActiviteRechercheDialog = value;
       }
     get searchProjetActiviteRecherche(): ProjetActiviteRechercheVo {
        return this._searchProjetActiviteRecherche;
       }
    set searchProjetActiviteRecherche(value: ProjetActiviteRechercheVo) {
        this._searchProjetActiviteRecherche = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<ProjetActiviteRechercheVo>>(this.API);
    }
    
    public save(): Observable<ProjetActiviteRechercheVo> {
         return this.http.post<ProjetActiviteRechercheVo>(this.API, this.selectedProjetActiviteRecherche);
    }
    
    delete(projetActiviteRecherche: ProjetActiviteRechercheVo) {
         return this.http.delete<number>(this.API+"id/"+projetActiviteRecherche.id);
    }


    public edit(): Observable<ProjetActiviteRechercheVo> {
        return this.http.put<ProjetActiviteRechercheVo>(this.API, this.selectedProjetActiviteRecherche);
    }
    

     public findByCriteria(projetActiviteRecherche:ProjetActiviteRechercheVo):Observable<Array<ProjetActiviteRechercheVo>>{
           return this.http.post<Array<ProjetActiviteRechercheVo>>(this.API+"search",projetActiviteRecherche);
    }



}