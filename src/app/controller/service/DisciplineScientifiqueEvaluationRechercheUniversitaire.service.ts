import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {DisciplineScientifiqueEvaluationRechercheUniversitaireVo} from '../model/DisciplineScientifiqueEvaluationRechercheUniversitaire.model';
import {DisciplineScientifiqueVo} from '../model/DisciplineScientifique.model';
import {EvaluationRechercheUniversitaireVo} from '../model/EvaluationRechercheUniversitaire.model';


@Injectable({
  providedIn: 'root'
})
export class DisciplineScientifiqueEvaluationRechercheUniversitaireService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/disciplineScientifiqueEvaluationRechercheUniversitaire/';
        })
    }
     private _disciplineScientifiqueEvaluationRechercheUniversitaires: Array<DisciplineScientifiqueEvaluationRechercheUniversitaireVo> = [];
     private _selectedDisciplineScientifiqueEvaluationRechercheUniversitaire: DisciplineScientifiqueEvaluationRechercheUniversitaireVo = new DisciplineScientifiqueEvaluationRechercheUniversitaireVo();
     private _disciplineScientifiqueEvaluationRechercheUniversitaireSelections: Array<DisciplineScientifiqueEvaluationRechercheUniversitaireVo>;
     private _createDisciplineScientifiqueEvaluationRechercheUniversitaireDialog: boolean;
     private _editDisciplineScientifiqueEvaluationRechercheUniversitaireDialog: boolean;
     private _viewDisciplineScientifiqueEvaluationRechercheUniversitaireDialog: boolean;
     public editDisciplineScientifiqueEvaluationRechercheUniversitaire$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchDisciplineScientifiqueEvaluationRechercheUniversitaire:DisciplineScientifiqueEvaluationRechercheUniversitaireVo = new DisciplineScientifiqueEvaluationRechercheUniversitaireVo();


    // getters and setters


    get disciplineScientifiqueEvaluationRechercheUniversitaires(): Array<DisciplineScientifiqueEvaluationRechercheUniversitaireVo> {
        return this._disciplineScientifiqueEvaluationRechercheUniversitaires == null ? this._disciplineScientifiqueEvaluationRechercheUniversitaires =   new Array<DisciplineScientifiqueEvaluationRechercheUniversitaireVo>() : this._disciplineScientifiqueEvaluationRechercheUniversitaires;
       }
    set disciplineScientifiqueEvaluationRechercheUniversitaires(value: Array<DisciplineScientifiqueEvaluationRechercheUniversitaireVo>) {
        this._disciplineScientifiqueEvaluationRechercheUniversitaires = value;
       }
    get selectedDisciplineScientifiqueEvaluationRechercheUniversitaire(): DisciplineScientifiqueEvaluationRechercheUniversitaireVo {
           return this._selectedDisciplineScientifiqueEvaluationRechercheUniversitaire;
       }
    set selectedDisciplineScientifiqueEvaluationRechercheUniversitaire(value: DisciplineScientifiqueEvaluationRechercheUniversitaireVo) {
        this._selectedDisciplineScientifiqueEvaluationRechercheUniversitaire = value;
       }
    get disciplineScientifiqueEvaluationRechercheUniversitaireSelections(): Array<DisciplineScientifiqueEvaluationRechercheUniversitaireVo> {
        return this._disciplineScientifiqueEvaluationRechercheUniversitaireSelections;
       }
    set disciplineScientifiqueEvaluationRechercheUniversitaireSelections(value: Array<DisciplineScientifiqueEvaluationRechercheUniversitaireVo>) {
        this._disciplineScientifiqueEvaluationRechercheUniversitaireSelections = value;
       }
    get createDisciplineScientifiqueEvaluationRechercheUniversitaireDialog(): boolean {
        return this._createDisciplineScientifiqueEvaluationRechercheUniversitaireDialog;
       }
    set createDisciplineScientifiqueEvaluationRechercheUniversitaireDialog(value: boolean) {
        this._createDisciplineScientifiqueEvaluationRechercheUniversitaireDialog = value;
       }

    get editDisciplineScientifiqueEvaluationRechercheUniversitaireDialog(): boolean {
        return this._editDisciplineScientifiqueEvaluationRechercheUniversitaireDialog;
       }
    set editDisciplineScientifiqueEvaluationRechercheUniversitaireDialog(value: boolean) {
        this._editDisciplineScientifiqueEvaluationRechercheUniversitaireDialog = value;
       }

    get viewDisciplineScientifiqueEvaluationRechercheUniversitaireDialog(): boolean {
        return this._viewDisciplineScientifiqueEvaluationRechercheUniversitaireDialog;
       }
    set viewDisciplineScientifiqueEvaluationRechercheUniversitaireDialog(value: boolean) {
        this._viewDisciplineScientifiqueEvaluationRechercheUniversitaireDialog = value;
       }
     get searchDisciplineScientifiqueEvaluationRechercheUniversitaire(): DisciplineScientifiqueEvaluationRechercheUniversitaireVo {
        return this._searchDisciplineScientifiqueEvaluationRechercheUniversitaire;
       }
    set searchDisciplineScientifiqueEvaluationRechercheUniversitaire(value: DisciplineScientifiqueEvaluationRechercheUniversitaireVo) {
        this._searchDisciplineScientifiqueEvaluationRechercheUniversitaire = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<DisciplineScientifiqueEvaluationRechercheUniversitaireVo>>(this.API);
    }
    
    public save(): Observable<DisciplineScientifiqueEvaluationRechercheUniversitaireVo> {
         return this.http.post<DisciplineScientifiqueEvaluationRechercheUniversitaireVo>(this.API, this.selectedDisciplineScientifiqueEvaluationRechercheUniversitaire);
    }
    
    delete(disciplineScientifiqueEvaluationRechercheUniversitaire: DisciplineScientifiqueEvaluationRechercheUniversitaireVo) {
         return this.http.delete<number>(this.API+"id/"+disciplineScientifiqueEvaluationRechercheUniversitaire.id);
    }


    public edit(): Observable<DisciplineScientifiqueEvaluationRechercheUniversitaireVo> {
        return this.http.put<DisciplineScientifiqueEvaluationRechercheUniversitaireVo>(this.API, this.selectedDisciplineScientifiqueEvaluationRechercheUniversitaire);
    }
    

     public findByCriteria(disciplineScientifiqueEvaluationRechercheUniversitaire:DisciplineScientifiqueEvaluationRechercheUniversitaireVo):Observable<Array<DisciplineScientifiqueEvaluationRechercheUniversitaireVo>>{
           return this.http.post<Array<DisciplineScientifiqueEvaluationRechercheUniversitaireVo>>(this.API+"search",disciplineScientifiqueEvaluationRechercheUniversitaire);
    }



}