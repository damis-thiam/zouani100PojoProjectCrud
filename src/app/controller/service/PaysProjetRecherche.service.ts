import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {PaysProjetRechercheVo} from '../model/PaysProjetRecherche.model';
import {ProjetActiviteRechercheVo} from '../model/ProjetActiviteRecherche.model';
import {PaysVo} from '../model/Pays.model';


@Injectable({
  providedIn: 'root'
})
export class PaysProjetRechercheService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/paysProjetRecherche/';
        })
    }
     private _paysProjetRecherches: Array<PaysProjetRechercheVo> = [];
     private _selectedPaysProjetRecherche: PaysProjetRechercheVo = new PaysProjetRechercheVo();
     private _paysProjetRechercheSelections: Array<PaysProjetRechercheVo>;
     private _createPaysProjetRechercheDialog: boolean;
     private _editPaysProjetRechercheDialog: boolean;
     private _viewPaysProjetRechercheDialog: boolean;
     public editPaysProjetRecherche$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchPaysProjetRecherche:PaysProjetRechercheVo = new PaysProjetRechercheVo();


    // getters and setters


    get paysProjetRecherches(): Array<PaysProjetRechercheVo> {
        return this._paysProjetRecherches == null ? this._paysProjetRecherches =   new Array<PaysProjetRechercheVo>() : this._paysProjetRecherches;
       }
    set paysProjetRecherches(value: Array<PaysProjetRechercheVo>) {
        this._paysProjetRecherches = value;
       }
    get selectedPaysProjetRecherche(): PaysProjetRechercheVo {
           return this._selectedPaysProjetRecherche;
       }
    set selectedPaysProjetRecherche(value: PaysProjetRechercheVo) {
        this._selectedPaysProjetRecherche = value;
       }
    get paysProjetRechercheSelections(): Array<PaysProjetRechercheVo> {
        return this._paysProjetRechercheSelections;
       }
    set paysProjetRechercheSelections(value: Array<PaysProjetRechercheVo>) {
        this._paysProjetRechercheSelections = value;
       }
    get createPaysProjetRechercheDialog(): boolean {
        return this._createPaysProjetRechercheDialog;
       }
    set createPaysProjetRechercheDialog(value: boolean) {
        this._createPaysProjetRechercheDialog = value;
       }

    get editPaysProjetRechercheDialog(): boolean {
        return this._editPaysProjetRechercheDialog;
       }
    set editPaysProjetRechercheDialog(value: boolean) {
        this._editPaysProjetRechercheDialog = value;
       }

    get viewPaysProjetRechercheDialog(): boolean {
        return this._viewPaysProjetRechercheDialog;
       }
    set viewPaysProjetRechercheDialog(value: boolean) {
        this._viewPaysProjetRechercheDialog = value;
       }
     get searchPaysProjetRecherche(): PaysProjetRechercheVo {
        return this._searchPaysProjetRecherche;
       }
    set searchPaysProjetRecherche(value: PaysProjetRechercheVo) {
        this._searchPaysProjetRecherche = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<PaysProjetRechercheVo>>(this.API);
    }
    
    public save(): Observable<PaysProjetRechercheVo> {
         return this.http.post<PaysProjetRechercheVo>(this.API, this.selectedPaysProjetRecherche);
    }
    
    delete(paysProjetRecherche: PaysProjetRechercheVo) {
         return this.http.delete<number>(this.API+"id/"+paysProjetRecherche.id);
    }


    public edit(): Observable<PaysProjetRechercheVo> {
        return this.http.put<PaysProjetRechercheVo>(this.API, this.selectedPaysProjetRecherche);
    }
    

     public findByCriteria(paysProjetRecherche:PaysProjetRechercheVo):Observable<Array<PaysProjetRechercheVo>>{
           return this.http.post<Array<PaysProjetRechercheVo>>(this.API+"search",paysProjetRecherche);
    }



}