import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {CommunauteSavoirProjetActiviteRechercheVo} from '../model/CommunauteSavoirProjetActiviteRecherche.model';
import {ProjetActiviteRechercheVo} from '../model/ProjetActiviteRecherche.model';
import {CommunauteSavoirVo} from '../model/CommunauteSavoir.model';


@Injectable({
  providedIn: 'root'
})
export class CommunauteSavoirProjetActiviteRechercheService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/communauteSavoirProjetActiviteRecherche/';
        })
    }
     private _communauteSavoirProjetActiviteRecherches: Array<CommunauteSavoirProjetActiviteRechercheVo> = [];
     private _selectedCommunauteSavoirProjetActiviteRecherche: CommunauteSavoirProjetActiviteRechercheVo = new CommunauteSavoirProjetActiviteRechercheVo();
     private _communauteSavoirProjetActiviteRechercheSelections: Array<CommunauteSavoirProjetActiviteRechercheVo>;
     private _createCommunauteSavoirProjetActiviteRechercheDialog: boolean;
     private _editCommunauteSavoirProjetActiviteRechercheDialog: boolean;
     private _viewCommunauteSavoirProjetActiviteRechercheDialog: boolean;
     public editCommunauteSavoirProjetActiviteRecherche$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchCommunauteSavoirProjetActiviteRecherche:CommunauteSavoirProjetActiviteRechercheVo = new CommunauteSavoirProjetActiviteRechercheVo();


    // getters and setters


    get communauteSavoirProjetActiviteRecherches(): Array<CommunauteSavoirProjetActiviteRechercheVo> {
        return this._communauteSavoirProjetActiviteRecherches == null ? this._communauteSavoirProjetActiviteRecherches =   new Array<CommunauteSavoirProjetActiviteRechercheVo>() : this._communauteSavoirProjetActiviteRecherches;
       }
    set communauteSavoirProjetActiviteRecherches(value: Array<CommunauteSavoirProjetActiviteRechercheVo>) {
        this._communauteSavoirProjetActiviteRecherches = value;
       }
    get selectedCommunauteSavoirProjetActiviteRecherche(): CommunauteSavoirProjetActiviteRechercheVo {
           return this._selectedCommunauteSavoirProjetActiviteRecherche;
       }
    set selectedCommunauteSavoirProjetActiviteRecherche(value: CommunauteSavoirProjetActiviteRechercheVo) {
        this._selectedCommunauteSavoirProjetActiviteRecherche = value;
       }
    get communauteSavoirProjetActiviteRechercheSelections(): Array<CommunauteSavoirProjetActiviteRechercheVo> {
        return this._communauteSavoirProjetActiviteRechercheSelections;
       }
    set communauteSavoirProjetActiviteRechercheSelections(value: Array<CommunauteSavoirProjetActiviteRechercheVo>) {
        this._communauteSavoirProjetActiviteRechercheSelections = value;
       }
    get createCommunauteSavoirProjetActiviteRechercheDialog(): boolean {
        return this._createCommunauteSavoirProjetActiviteRechercheDialog;
       }
    set createCommunauteSavoirProjetActiviteRechercheDialog(value: boolean) {
        this._createCommunauteSavoirProjetActiviteRechercheDialog = value;
       }

    get editCommunauteSavoirProjetActiviteRechercheDialog(): boolean {
        return this._editCommunauteSavoirProjetActiviteRechercheDialog;
       }
    set editCommunauteSavoirProjetActiviteRechercheDialog(value: boolean) {
        this._editCommunauteSavoirProjetActiviteRechercheDialog = value;
       }

    get viewCommunauteSavoirProjetActiviteRechercheDialog(): boolean {
        return this._viewCommunauteSavoirProjetActiviteRechercheDialog;
       }
    set viewCommunauteSavoirProjetActiviteRechercheDialog(value: boolean) {
        this._viewCommunauteSavoirProjetActiviteRechercheDialog = value;
       }
     get searchCommunauteSavoirProjetActiviteRecherche(): CommunauteSavoirProjetActiviteRechercheVo {
        return this._searchCommunauteSavoirProjetActiviteRecherche;
       }
    set searchCommunauteSavoirProjetActiviteRecherche(value: CommunauteSavoirProjetActiviteRechercheVo) {
        this._searchCommunauteSavoirProjetActiviteRecherche = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<CommunauteSavoirProjetActiviteRechercheVo>>(this.API);
    }
    
    public save(): Observable<CommunauteSavoirProjetActiviteRechercheVo> {
         return this.http.post<CommunauteSavoirProjetActiviteRechercheVo>(this.API, this.selectedCommunauteSavoirProjetActiviteRecherche);
    }
    
    delete(communauteSavoirProjetActiviteRecherche: CommunauteSavoirProjetActiviteRechercheVo) {
         return this.http.delete<number>(this.API+"id/"+communauteSavoirProjetActiviteRecherche.id);
    }


    public edit(): Observable<CommunauteSavoirProjetActiviteRechercheVo> {
        return this.http.put<CommunauteSavoirProjetActiviteRechercheVo>(this.API, this.selectedCommunauteSavoirProjetActiviteRecherche);
    }
    

     public findByCriteria(communauteSavoirProjetActiviteRecherche:CommunauteSavoirProjetActiviteRechercheVo):Observable<Array<CommunauteSavoirProjetActiviteRechercheVo>>{
           return this.http.post<Array<CommunauteSavoirProjetActiviteRechercheVo>>(this.API+"search",communauteSavoirProjetActiviteRecherche);
    }



}