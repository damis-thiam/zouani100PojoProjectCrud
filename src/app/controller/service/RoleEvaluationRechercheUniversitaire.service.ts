import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {RoleEvaluationRechercheUniversitaireVo} from '../model/RoleEvaluationRechercheUniversitaire.model';


@Injectable({
  providedIn: 'root'
})
export class RoleEvaluationRechercheUniversitaireService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/roleEvaluationRechercheUniversitaire/';
        })
    }
     private _roleEvaluationRechercheUniversitaires: Array<RoleEvaluationRechercheUniversitaireVo> = [];
     private _selectedRoleEvaluationRechercheUniversitaire: RoleEvaluationRechercheUniversitaireVo = new RoleEvaluationRechercheUniversitaireVo();
     private _roleEvaluationRechercheUniversitaireSelections: Array<RoleEvaluationRechercheUniversitaireVo>;
     private _createRoleEvaluationRechercheUniversitaireDialog: boolean;
     private _editRoleEvaluationRechercheUniversitaireDialog: boolean;
     private _viewRoleEvaluationRechercheUniversitaireDialog: boolean;
     public editRoleEvaluationRechercheUniversitaire$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchRoleEvaluationRechercheUniversitaire:RoleEvaluationRechercheUniversitaireVo = new RoleEvaluationRechercheUniversitaireVo();


    // getters and setters


    get roleEvaluationRechercheUniversitaires(): Array<RoleEvaluationRechercheUniversitaireVo> {
        return this._roleEvaluationRechercheUniversitaires == null ? this._roleEvaluationRechercheUniversitaires =   new Array<RoleEvaluationRechercheUniversitaireVo>() : this._roleEvaluationRechercheUniversitaires;
       }
    set roleEvaluationRechercheUniversitaires(value: Array<RoleEvaluationRechercheUniversitaireVo>) {
        this._roleEvaluationRechercheUniversitaires = value;
       }
    get selectedRoleEvaluationRechercheUniversitaire(): RoleEvaluationRechercheUniversitaireVo {
           return this._selectedRoleEvaluationRechercheUniversitaire;
       }
    set selectedRoleEvaluationRechercheUniversitaire(value: RoleEvaluationRechercheUniversitaireVo) {
        this._selectedRoleEvaluationRechercheUniversitaire = value;
       }
    get roleEvaluationRechercheUniversitaireSelections(): Array<RoleEvaluationRechercheUniversitaireVo> {
        return this._roleEvaluationRechercheUniversitaireSelections;
       }
    set roleEvaluationRechercheUniversitaireSelections(value: Array<RoleEvaluationRechercheUniversitaireVo>) {
        this._roleEvaluationRechercheUniversitaireSelections = value;
       }
    get createRoleEvaluationRechercheUniversitaireDialog(): boolean {
        return this._createRoleEvaluationRechercheUniversitaireDialog;
       }
    set createRoleEvaluationRechercheUniversitaireDialog(value: boolean) {
        this._createRoleEvaluationRechercheUniversitaireDialog = value;
       }

    get editRoleEvaluationRechercheUniversitaireDialog(): boolean {
        return this._editRoleEvaluationRechercheUniversitaireDialog;
       }
    set editRoleEvaluationRechercheUniversitaireDialog(value: boolean) {
        this._editRoleEvaluationRechercheUniversitaireDialog = value;
       }

    get viewRoleEvaluationRechercheUniversitaireDialog(): boolean {
        return this._viewRoleEvaluationRechercheUniversitaireDialog;
       }
    set viewRoleEvaluationRechercheUniversitaireDialog(value: boolean) {
        this._viewRoleEvaluationRechercheUniversitaireDialog = value;
       }
     get searchRoleEvaluationRechercheUniversitaire(): RoleEvaluationRechercheUniversitaireVo {
        return this._searchRoleEvaluationRechercheUniversitaire;
       }
    set searchRoleEvaluationRechercheUniversitaire(value: RoleEvaluationRechercheUniversitaireVo) {
        this._searchRoleEvaluationRechercheUniversitaire = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<RoleEvaluationRechercheUniversitaireVo>>(this.API);
    }
    
    public save(): Observable<RoleEvaluationRechercheUniversitaireVo> {
         return this.http.post<RoleEvaluationRechercheUniversitaireVo>(this.API, this.selectedRoleEvaluationRechercheUniversitaire);
    }
    
    delete(roleEvaluationRechercheUniversitaire: RoleEvaluationRechercheUniversitaireVo) {
         return this.http.delete<number>(this.API+"id/"+roleEvaluationRechercheUniversitaire.id);
    }


    public edit(): Observable<RoleEvaluationRechercheUniversitaireVo> {
        return this.http.put<RoleEvaluationRechercheUniversitaireVo>(this.API, this.selectedRoleEvaluationRechercheUniversitaire);
    }
    

     public findByCriteria(roleEvaluationRechercheUniversitaire:RoleEvaluationRechercheUniversitaireVo):Observable<Array<RoleEvaluationRechercheUniversitaireVo>>{
           return this.http.post<Array<RoleEvaluationRechercheUniversitaireVo>>(this.API+"search",roleEvaluationRechercheUniversitaire);
    }



}