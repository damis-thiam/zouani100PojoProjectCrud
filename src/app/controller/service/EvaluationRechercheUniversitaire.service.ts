import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {EvaluationRechercheUniversitaireVo} from '../model/EvaluationRechercheUniversitaire.model';
import {RoleEvaluationRechercheUniversitaireVo} from '../model/RoleEvaluationRechercheUniversitaire.model';
import {TypeExpertVo} from '../model/TypeExpert.model';
import {EtablissementVo} from '../model/Etablissement.model';
import {PaysVo} from '../model/Pays.model';
import {ChercheurVo} from '../model/Chercheur.model';


@Injectable({
  providedIn: 'root'
})
export class EvaluationRechercheUniversitaireService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/evaluationRechercheUniversitaire/';
        })
    }
     private _evaluationRechercheUniversitaires: Array<EvaluationRechercheUniversitaireVo> = [];
     private _selectedEvaluationRechercheUniversitaire: EvaluationRechercheUniversitaireVo = new EvaluationRechercheUniversitaireVo();
     private _evaluationRechercheUniversitaireSelections: Array<EvaluationRechercheUniversitaireVo>;
     private _createEvaluationRechercheUniversitaireDialog: boolean;
     private _editEvaluationRechercheUniversitaireDialog: boolean;
     private _viewEvaluationRechercheUniversitaireDialog: boolean;
     public editEvaluationRechercheUniversitaire$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchEvaluationRechercheUniversitaire:EvaluationRechercheUniversitaireVo = new EvaluationRechercheUniversitaireVo();


    // getters and setters


    get evaluationRechercheUniversitaires(): Array<EvaluationRechercheUniversitaireVo> {
        return this._evaluationRechercheUniversitaires == null ? this._evaluationRechercheUniversitaires =   new Array<EvaluationRechercheUniversitaireVo>() : this._evaluationRechercheUniversitaires;
       }
    set evaluationRechercheUniversitaires(value: Array<EvaluationRechercheUniversitaireVo>) {
        this._evaluationRechercheUniversitaires = value;
       }
    get selectedEvaluationRechercheUniversitaire(): EvaluationRechercheUniversitaireVo {
           return this._selectedEvaluationRechercheUniversitaire;
       }
    set selectedEvaluationRechercheUniversitaire(value: EvaluationRechercheUniversitaireVo) {
        this._selectedEvaluationRechercheUniversitaire = value;
       }
    get evaluationRechercheUniversitaireSelections(): Array<EvaluationRechercheUniversitaireVo> {
        return this._evaluationRechercheUniversitaireSelections;
       }
    set evaluationRechercheUniversitaireSelections(value: Array<EvaluationRechercheUniversitaireVo>) {
        this._evaluationRechercheUniversitaireSelections = value;
       }
    get createEvaluationRechercheUniversitaireDialog(): boolean {
        return this._createEvaluationRechercheUniversitaireDialog;
       }
    set createEvaluationRechercheUniversitaireDialog(value: boolean) {
        this._createEvaluationRechercheUniversitaireDialog = value;
       }

    get editEvaluationRechercheUniversitaireDialog(): boolean {
        return this._editEvaluationRechercheUniversitaireDialog;
       }
    set editEvaluationRechercheUniversitaireDialog(value: boolean) {
        this._editEvaluationRechercheUniversitaireDialog = value;
       }

    get viewEvaluationRechercheUniversitaireDialog(): boolean {
        return this._viewEvaluationRechercheUniversitaireDialog;
       }
    set viewEvaluationRechercheUniversitaireDialog(value: boolean) {
        this._viewEvaluationRechercheUniversitaireDialog = value;
       }
     get searchEvaluationRechercheUniversitaire(): EvaluationRechercheUniversitaireVo {
        return this._searchEvaluationRechercheUniversitaire;
       }
    set searchEvaluationRechercheUniversitaire(value: EvaluationRechercheUniversitaireVo) {
        this._searchEvaluationRechercheUniversitaire = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<EvaluationRechercheUniversitaireVo>>(this.API);
    }
    
    public save(): Observable<EvaluationRechercheUniversitaireVo> {
         return this.http.post<EvaluationRechercheUniversitaireVo>(this.API, this.selectedEvaluationRechercheUniversitaire);
    }
    
    delete(evaluationRechercheUniversitaire: EvaluationRechercheUniversitaireVo) {
         return this.http.delete<number>(this.API+"id/"+evaluationRechercheUniversitaire.id);
    }


    public edit(): Observable<EvaluationRechercheUniversitaireVo> {
        return this.http.put<EvaluationRechercheUniversitaireVo>(this.API, this.selectedEvaluationRechercheUniversitaire);
    }
    

     public findByCriteria(evaluationRechercheUniversitaire:EvaluationRechercheUniversitaireVo):Observable<Array<EvaluationRechercheUniversitaireVo>>{
           return this.http.post<Array<EvaluationRechercheUniversitaireVo>>(this.API+"search",evaluationRechercheUniversitaire);
    }



}