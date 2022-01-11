import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {CommunauteSavoirEvaluationRechercheUniversitaireVo} from '../model/CommunauteSavoirEvaluationRechercheUniversitaire.model';
import {EvaluationRechercheUniversitaireVo} from '../model/EvaluationRechercheUniversitaire.model';
import {CommunauteSavoirVo} from '../model/CommunauteSavoir.model';


@Injectable({
  providedIn: 'root'
})
export class CommunauteSavoirEvaluationRechercheUniversitaireService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/communauteSavoirEvaluationRechercheUniversitaire/';
        })
    }
     private _communauteSavoirEvaluationRechercheUniversitaires: Array<CommunauteSavoirEvaluationRechercheUniversitaireVo> = [];
     private _selectedCommunauteSavoirEvaluationRechercheUniversitaire: CommunauteSavoirEvaluationRechercheUniversitaireVo = new CommunauteSavoirEvaluationRechercheUniversitaireVo();
     private _communauteSavoirEvaluationRechercheUniversitaireSelections: Array<CommunauteSavoirEvaluationRechercheUniversitaireVo>;
     private _createCommunauteSavoirEvaluationRechercheUniversitaireDialog: boolean;
     private _editCommunauteSavoirEvaluationRechercheUniversitaireDialog: boolean;
     private _viewCommunauteSavoirEvaluationRechercheUniversitaireDialog: boolean;
     public editCommunauteSavoirEvaluationRechercheUniversitaire$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchCommunauteSavoirEvaluationRechercheUniversitaire:CommunauteSavoirEvaluationRechercheUniversitaireVo = new CommunauteSavoirEvaluationRechercheUniversitaireVo();


    // getters and setters


    get communauteSavoirEvaluationRechercheUniversitaires(): Array<CommunauteSavoirEvaluationRechercheUniversitaireVo> {
        return this._communauteSavoirEvaluationRechercheUniversitaires == null ? this._communauteSavoirEvaluationRechercheUniversitaires =   new Array<CommunauteSavoirEvaluationRechercheUniversitaireVo>() : this._communauteSavoirEvaluationRechercheUniversitaires;
       }
    set communauteSavoirEvaluationRechercheUniversitaires(value: Array<CommunauteSavoirEvaluationRechercheUniversitaireVo>) {
        this._communauteSavoirEvaluationRechercheUniversitaires = value;
       }
    get selectedCommunauteSavoirEvaluationRechercheUniversitaire(): CommunauteSavoirEvaluationRechercheUniversitaireVo {
           return this._selectedCommunauteSavoirEvaluationRechercheUniversitaire;
       }
    set selectedCommunauteSavoirEvaluationRechercheUniversitaire(value: CommunauteSavoirEvaluationRechercheUniversitaireVo) {
        this._selectedCommunauteSavoirEvaluationRechercheUniversitaire = value;
       }
    get communauteSavoirEvaluationRechercheUniversitaireSelections(): Array<CommunauteSavoirEvaluationRechercheUniversitaireVo> {
        return this._communauteSavoirEvaluationRechercheUniversitaireSelections;
       }
    set communauteSavoirEvaluationRechercheUniversitaireSelections(value: Array<CommunauteSavoirEvaluationRechercheUniversitaireVo>) {
        this._communauteSavoirEvaluationRechercheUniversitaireSelections = value;
       }
    get createCommunauteSavoirEvaluationRechercheUniversitaireDialog(): boolean {
        return this._createCommunauteSavoirEvaluationRechercheUniversitaireDialog;
       }
    set createCommunauteSavoirEvaluationRechercheUniversitaireDialog(value: boolean) {
        this._createCommunauteSavoirEvaluationRechercheUniversitaireDialog = value;
       }

    get editCommunauteSavoirEvaluationRechercheUniversitaireDialog(): boolean {
        return this._editCommunauteSavoirEvaluationRechercheUniversitaireDialog;
       }
    set editCommunauteSavoirEvaluationRechercheUniversitaireDialog(value: boolean) {
        this._editCommunauteSavoirEvaluationRechercheUniversitaireDialog = value;
       }

    get viewCommunauteSavoirEvaluationRechercheUniversitaireDialog(): boolean {
        return this._viewCommunauteSavoirEvaluationRechercheUniversitaireDialog;
       }
    set viewCommunauteSavoirEvaluationRechercheUniversitaireDialog(value: boolean) {
        this._viewCommunauteSavoirEvaluationRechercheUniversitaireDialog = value;
       }
     get searchCommunauteSavoirEvaluationRechercheUniversitaire(): CommunauteSavoirEvaluationRechercheUniversitaireVo {
        return this._searchCommunauteSavoirEvaluationRechercheUniversitaire;
       }
    set searchCommunauteSavoirEvaluationRechercheUniversitaire(value: CommunauteSavoirEvaluationRechercheUniversitaireVo) {
        this._searchCommunauteSavoirEvaluationRechercheUniversitaire = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<CommunauteSavoirEvaluationRechercheUniversitaireVo>>(this.API);
    }
    
    public save(): Observable<CommunauteSavoirEvaluationRechercheUniversitaireVo> {
         return this.http.post<CommunauteSavoirEvaluationRechercheUniversitaireVo>(this.API, this.selectedCommunauteSavoirEvaluationRechercheUniversitaire);
    }
    
    delete(communauteSavoirEvaluationRechercheUniversitaire: CommunauteSavoirEvaluationRechercheUniversitaireVo) {
         return this.http.delete<number>(this.API+"id/"+communauteSavoirEvaluationRechercheUniversitaire.id);
    }


    public edit(): Observable<CommunauteSavoirEvaluationRechercheUniversitaireVo> {
        return this.http.put<CommunauteSavoirEvaluationRechercheUniversitaireVo>(this.API, this.selectedCommunauteSavoirEvaluationRechercheUniversitaire);
    }
    

     public findByCriteria(communauteSavoirEvaluationRechercheUniversitaire:CommunauteSavoirEvaluationRechercheUniversitaireVo):Observable<Array<CommunauteSavoirEvaluationRechercheUniversitaireVo>>{
           return this.http.post<Array<CommunauteSavoirEvaluationRechercheUniversitaireVo>>(this.API+"search",communauteSavoirEvaluationRechercheUniversitaire);
    }



}