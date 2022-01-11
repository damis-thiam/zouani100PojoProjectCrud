import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {ResponsabiliteEncadrementEtudiantVo} from '../model/ResponsabiliteEncadrementEtudiant.model';


@Injectable({
  providedIn: 'root'
})
export class ResponsabiliteEncadrementEtudiantService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/responsabiliteEncadrementEtudiant/';
        })
    }
     private _responsabiliteEncadrementEtudiants: Array<ResponsabiliteEncadrementEtudiantVo> = [];
     private _selectedResponsabiliteEncadrementEtudiant: ResponsabiliteEncadrementEtudiantVo = new ResponsabiliteEncadrementEtudiantVo();
     private _responsabiliteEncadrementEtudiantSelections: Array<ResponsabiliteEncadrementEtudiantVo>;
     private _createResponsabiliteEncadrementEtudiantDialog: boolean;
     private _editResponsabiliteEncadrementEtudiantDialog: boolean;
     private _viewResponsabiliteEncadrementEtudiantDialog: boolean;
     public editResponsabiliteEncadrementEtudiant$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchResponsabiliteEncadrementEtudiant:ResponsabiliteEncadrementEtudiantVo = new ResponsabiliteEncadrementEtudiantVo();


    // getters and setters


    get responsabiliteEncadrementEtudiants(): Array<ResponsabiliteEncadrementEtudiantVo> {
        return this._responsabiliteEncadrementEtudiants == null ? this._responsabiliteEncadrementEtudiants =   new Array<ResponsabiliteEncadrementEtudiantVo>() : this._responsabiliteEncadrementEtudiants;
       }
    set responsabiliteEncadrementEtudiants(value: Array<ResponsabiliteEncadrementEtudiantVo>) {
        this._responsabiliteEncadrementEtudiants = value;
       }
    get selectedResponsabiliteEncadrementEtudiant(): ResponsabiliteEncadrementEtudiantVo {
           return this._selectedResponsabiliteEncadrementEtudiant;
       }
    set selectedResponsabiliteEncadrementEtudiant(value: ResponsabiliteEncadrementEtudiantVo) {
        this._selectedResponsabiliteEncadrementEtudiant = value;
       }
    get responsabiliteEncadrementEtudiantSelections(): Array<ResponsabiliteEncadrementEtudiantVo> {
        return this._responsabiliteEncadrementEtudiantSelections;
       }
    set responsabiliteEncadrementEtudiantSelections(value: Array<ResponsabiliteEncadrementEtudiantVo>) {
        this._responsabiliteEncadrementEtudiantSelections = value;
       }
    get createResponsabiliteEncadrementEtudiantDialog(): boolean {
        return this._createResponsabiliteEncadrementEtudiantDialog;
       }
    set createResponsabiliteEncadrementEtudiantDialog(value: boolean) {
        this._createResponsabiliteEncadrementEtudiantDialog = value;
       }

    get editResponsabiliteEncadrementEtudiantDialog(): boolean {
        return this._editResponsabiliteEncadrementEtudiantDialog;
       }
    set editResponsabiliteEncadrementEtudiantDialog(value: boolean) {
        this._editResponsabiliteEncadrementEtudiantDialog = value;
       }

    get viewResponsabiliteEncadrementEtudiantDialog(): boolean {
        return this._viewResponsabiliteEncadrementEtudiantDialog;
       }
    set viewResponsabiliteEncadrementEtudiantDialog(value: boolean) {
        this._viewResponsabiliteEncadrementEtudiantDialog = value;
       }
     get searchResponsabiliteEncadrementEtudiant(): ResponsabiliteEncadrementEtudiantVo {
        return this._searchResponsabiliteEncadrementEtudiant;
       }
    set searchResponsabiliteEncadrementEtudiant(value: ResponsabiliteEncadrementEtudiantVo) {
        this._searchResponsabiliteEncadrementEtudiant = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<ResponsabiliteEncadrementEtudiantVo>>(this.API);
    }
    
    public save(): Observable<ResponsabiliteEncadrementEtudiantVo> {
         return this.http.post<ResponsabiliteEncadrementEtudiantVo>(this.API, this.selectedResponsabiliteEncadrementEtudiant);
    }
    
    delete(responsabiliteEncadrementEtudiant: ResponsabiliteEncadrementEtudiantVo) {
         return this.http.delete<number>(this.API+"id/"+responsabiliteEncadrementEtudiant.id);
    }


    public edit(): Observable<ResponsabiliteEncadrementEtudiantVo> {
        return this.http.put<ResponsabiliteEncadrementEtudiantVo>(this.API, this.selectedResponsabiliteEncadrementEtudiant);
    }
    

     public findByCriteria(responsabiliteEncadrementEtudiant:ResponsabiliteEncadrementEtudiantVo):Observable<Array<ResponsabiliteEncadrementEtudiantVo>>{
           return this.http.post<Array<ResponsabiliteEncadrementEtudiantVo>>(this.API+"search",responsabiliteEncadrementEtudiant);
    }



}