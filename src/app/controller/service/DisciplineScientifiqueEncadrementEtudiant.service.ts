import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {DisciplineScientifiqueEncadrementEtudiantVo} from '../model/DisciplineScientifiqueEncadrementEtudiant.model';
import {EncadrementEtudiantVo} from '../model/EncadrementEtudiant.model';
import {DisciplineScientifiqueVo} from '../model/DisciplineScientifique.model';


@Injectable({
  providedIn: 'root'
})
export class DisciplineScientifiqueEncadrementEtudiantService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/disciplineScientifiqueEncadrementEtudiant/';
        })
    }
     private _disciplineScientifiqueEncadrementEtudiants: Array<DisciplineScientifiqueEncadrementEtudiantVo> = [];
     private _selectedDisciplineScientifiqueEncadrementEtudiant: DisciplineScientifiqueEncadrementEtudiantVo = new DisciplineScientifiqueEncadrementEtudiantVo();
     private _disciplineScientifiqueEncadrementEtudiantSelections: Array<DisciplineScientifiqueEncadrementEtudiantVo>;
     private _createDisciplineScientifiqueEncadrementEtudiantDialog: boolean;
     private _editDisciplineScientifiqueEncadrementEtudiantDialog: boolean;
     private _viewDisciplineScientifiqueEncadrementEtudiantDialog: boolean;
     public editDisciplineScientifiqueEncadrementEtudiant$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchDisciplineScientifiqueEncadrementEtudiant:DisciplineScientifiqueEncadrementEtudiantVo = new DisciplineScientifiqueEncadrementEtudiantVo();


    // getters and setters


    get disciplineScientifiqueEncadrementEtudiants(): Array<DisciplineScientifiqueEncadrementEtudiantVo> {
        return this._disciplineScientifiqueEncadrementEtudiants == null ? this._disciplineScientifiqueEncadrementEtudiants =   new Array<DisciplineScientifiqueEncadrementEtudiantVo>() : this._disciplineScientifiqueEncadrementEtudiants;
       }
    set disciplineScientifiqueEncadrementEtudiants(value: Array<DisciplineScientifiqueEncadrementEtudiantVo>) {
        this._disciplineScientifiqueEncadrementEtudiants = value;
       }
    get selectedDisciplineScientifiqueEncadrementEtudiant(): DisciplineScientifiqueEncadrementEtudiantVo {
           return this._selectedDisciplineScientifiqueEncadrementEtudiant;
       }
    set selectedDisciplineScientifiqueEncadrementEtudiant(value: DisciplineScientifiqueEncadrementEtudiantVo) {
        this._selectedDisciplineScientifiqueEncadrementEtudiant = value;
       }
    get disciplineScientifiqueEncadrementEtudiantSelections(): Array<DisciplineScientifiqueEncadrementEtudiantVo> {
        return this._disciplineScientifiqueEncadrementEtudiantSelections;
       }
    set disciplineScientifiqueEncadrementEtudiantSelections(value: Array<DisciplineScientifiqueEncadrementEtudiantVo>) {
        this._disciplineScientifiqueEncadrementEtudiantSelections = value;
       }
    get createDisciplineScientifiqueEncadrementEtudiantDialog(): boolean {
        return this._createDisciplineScientifiqueEncadrementEtudiantDialog;
       }
    set createDisciplineScientifiqueEncadrementEtudiantDialog(value: boolean) {
        this._createDisciplineScientifiqueEncadrementEtudiantDialog = value;
       }

    get editDisciplineScientifiqueEncadrementEtudiantDialog(): boolean {
        return this._editDisciplineScientifiqueEncadrementEtudiantDialog;
       }
    set editDisciplineScientifiqueEncadrementEtudiantDialog(value: boolean) {
        this._editDisciplineScientifiqueEncadrementEtudiantDialog = value;
       }

    get viewDisciplineScientifiqueEncadrementEtudiantDialog(): boolean {
        return this._viewDisciplineScientifiqueEncadrementEtudiantDialog;
       }
    set viewDisciplineScientifiqueEncadrementEtudiantDialog(value: boolean) {
        this._viewDisciplineScientifiqueEncadrementEtudiantDialog = value;
       }
     get searchDisciplineScientifiqueEncadrementEtudiant(): DisciplineScientifiqueEncadrementEtudiantVo {
        return this._searchDisciplineScientifiqueEncadrementEtudiant;
       }
    set searchDisciplineScientifiqueEncadrementEtudiant(value: DisciplineScientifiqueEncadrementEtudiantVo) {
        this._searchDisciplineScientifiqueEncadrementEtudiant = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<DisciplineScientifiqueEncadrementEtudiantVo>>(this.API);
    }
    
    public save(): Observable<DisciplineScientifiqueEncadrementEtudiantVo> {
         return this.http.post<DisciplineScientifiqueEncadrementEtudiantVo>(this.API, this.selectedDisciplineScientifiqueEncadrementEtudiant);
    }
    
    delete(disciplineScientifiqueEncadrementEtudiant: DisciplineScientifiqueEncadrementEtudiantVo) {
         return this.http.delete<number>(this.API+"id/"+disciplineScientifiqueEncadrementEtudiant.id);
    }


    public edit(): Observable<DisciplineScientifiqueEncadrementEtudiantVo> {
        return this.http.put<DisciplineScientifiqueEncadrementEtudiantVo>(this.API, this.selectedDisciplineScientifiqueEncadrementEtudiant);
    }
    

     public findByCriteria(disciplineScientifiqueEncadrementEtudiant:DisciplineScientifiqueEncadrementEtudiantVo):Observable<Array<DisciplineScientifiqueEncadrementEtudiantVo>>{
           return this.http.post<Array<DisciplineScientifiqueEncadrementEtudiantVo>>(this.API+"search",disciplineScientifiqueEncadrementEtudiant);
    }



}