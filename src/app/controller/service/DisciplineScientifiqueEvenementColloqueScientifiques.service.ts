import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {DisciplineScientifiqueEvenementColloqueScientifiquesVo} from '../model/DisciplineScientifiqueEvenementColloqueScientifiques.model';
import {DisciplineScientifiqueVo} from '../model/DisciplineScientifique.model';
import {CommunauteSavoirVo} from '../model/CommunauteSavoir.model';


@Injectable({
  providedIn: 'root'
})
export class DisciplineScientifiqueEvenementColloqueScientifiquesService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/disciplineScientifiqueEvenementColloqueScientifiques/';
        })
    }
     private _disciplineScientifiqueEvenementColloqueScientifiquess: Array<DisciplineScientifiqueEvenementColloqueScientifiquesVo> = [];
     private _selectedDisciplineScientifiqueEvenementColloqueScientifiques: DisciplineScientifiqueEvenementColloqueScientifiquesVo = new DisciplineScientifiqueEvenementColloqueScientifiquesVo();
     private _disciplineScientifiqueEvenementColloqueScientifiquesSelections: Array<DisciplineScientifiqueEvenementColloqueScientifiquesVo>;
     private _createDisciplineScientifiqueEvenementColloqueScientifiquesDialog: boolean;
     private _editDisciplineScientifiqueEvenementColloqueScientifiquesDialog: boolean;
     private _viewDisciplineScientifiqueEvenementColloqueScientifiquesDialog: boolean;
     public editDisciplineScientifiqueEvenementColloqueScientifiques$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchDisciplineScientifiqueEvenementColloqueScientifiques:DisciplineScientifiqueEvenementColloqueScientifiquesVo = new DisciplineScientifiqueEvenementColloqueScientifiquesVo();


    // getters and setters


    get disciplineScientifiqueEvenementColloqueScientifiquess(): Array<DisciplineScientifiqueEvenementColloqueScientifiquesVo> {
        return this._disciplineScientifiqueEvenementColloqueScientifiquess == null ? this._disciplineScientifiqueEvenementColloqueScientifiquess =   new Array<DisciplineScientifiqueEvenementColloqueScientifiquesVo>() : this._disciplineScientifiqueEvenementColloqueScientifiquess;
       }
    set disciplineScientifiqueEvenementColloqueScientifiquess(value: Array<DisciplineScientifiqueEvenementColloqueScientifiquesVo>) {
        this._disciplineScientifiqueEvenementColloqueScientifiquess = value;
       }
    get selectedDisciplineScientifiqueEvenementColloqueScientifiques(): DisciplineScientifiqueEvenementColloqueScientifiquesVo {
           return this._selectedDisciplineScientifiqueEvenementColloqueScientifiques;
       }
    set selectedDisciplineScientifiqueEvenementColloqueScientifiques(value: DisciplineScientifiqueEvenementColloqueScientifiquesVo) {
        this._selectedDisciplineScientifiqueEvenementColloqueScientifiques = value;
       }
    get disciplineScientifiqueEvenementColloqueScientifiquesSelections(): Array<DisciplineScientifiqueEvenementColloqueScientifiquesVo> {
        return this._disciplineScientifiqueEvenementColloqueScientifiquesSelections;
       }
    set disciplineScientifiqueEvenementColloqueScientifiquesSelections(value: Array<DisciplineScientifiqueEvenementColloqueScientifiquesVo>) {
        this._disciplineScientifiqueEvenementColloqueScientifiquesSelections = value;
       }
    get createDisciplineScientifiqueEvenementColloqueScientifiquesDialog(): boolean {
        return this._createDisciplineScientifiqueEvenementColloqueScientifiquesDialog;
       }
    set createDisciplineScientifiqueEvenementColloqueScientifiquesDialog(value: boolean) {
        this._createDisciplineScientifiqueEvenementColloqueScientifiquesDialog = value;
       }

    get editDisciplineScientifiqueEvenementColloqueScientifiquesDialog(): boolean {
        return this._editDisciplineScientifiqueEvenementColloqueScientifiquesDialog;
       }
    set editDisciplineScientifiqueEvenementColloqueScientifiquesDialog(value: boolean) {
        this._editDisciplineScientifiqueEvenementColloqueScientifiquesDialog = value;
       }

    get viewDisciplineScientifiqueEvenementColloqueScientifiquesDialog(): boolean {
        return this._viewDisciplineScientifiqueEvenementColloqueScientifiquesDialog;
       }
    set viewDisciplineScientifiqueEvenementColloqueScientifiquesDialog(value: boolean) {
        this._viewDisciplineScientifiqueEvenementColloqueScientifiquesDialog = value;
       }
     get searchDisciplineScientifiqueEvenementColloqueScientifiques(): DisciplineScientifiqueEvenementColloqueScientifiquesVo {
        return this._searchDisciplineScientifiqueEvenementColloqueScientifiques;
       }
    set searchDisciplineScientifiqueEvenementColloqueScientifiques(value: DisciplineScientifiqueEvenementColloqueScientifiquesVo) {
        this._searchDisciplineScientifiqueEvenementColloqueScientifiques = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<DisciplineScientifiqueEvenementColloqueScientifiquesVo>>(this.API);
    }
    
    public save(): Observable<DisciplineScientifiqueEvenementColloqueScientifiquesVo> {
         return this.http.post<DisciplineScientifiqueEvenementColloqueScientifiquesVo>(this.API, this.selectedDisciplineScientifiqueEvenementColloqueScientifiques);
    }
    
    delete(disciplineScientifiqueEvenementColloqueScientifiques: DisciplineScientifiqueEvenementColloqueScientifiquesVo) {
         return this.http.delete<number>(this.API+"id/"+disciplineScientifiqueEvenementColloqueScientifiques.id);
    }


    public edit(): Observable<DisciplineScientifiqueEvenementColloqueScientifiquesVo> {
        return this.http.put<DisciplineScientifiqueEvenementColloqueScientifiquesVo>(this.API, this.selectedDisciplineScientifiqueEvenementColloqueScientifiques);
    }
    

     public findByCriteria(disciplineScientifiqueEvenementColloqueScientifiques:DisciplineScientifiqueEvenementColloqueScientifiquesVo):Observable<Array<DisciplineScientifiqueEvenementColloqueScientifiquesVo>>{
           return this.http.post<Array<DisciplineScientifiqueEvenementColloqueScientifiquesVo>>(this.API+"search",disciplineScientifiqueEvenementColloqueScientifiques);
    }



}