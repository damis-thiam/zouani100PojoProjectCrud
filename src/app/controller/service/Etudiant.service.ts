import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {EtudiantVo} from '../model/Etudiant.model';
import {SexeVo} from '../model/Sexe.model';
import {PaysVo} from '../model/Pays.model';


@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/etudiant/';
        })
    }
     private _etudiants: Array<EtudiantVo> = [];
     private _selectedEtudiant: EtudiantVo = new EtudiantVo();
     private _etudiantSelections: Array<EtudiantVo>;
     private _createEtudiantDialog: boolean;
     private _editEtudiantDialog: boolean;
     private _viewEtudiantDialog: boolean;
     public editEtudiant$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchEtudiant:EtudiantVo = new EtudiantVo();


    // getters and setters


    get etudiants(): Array<EtudiantVo> {
        return this._etudiants == null ? this._etudiants =   new Array<EtudiantVo>() : this._etudiants;
       }
    set etudiants(value: Array<EtudiantVo>) {
        this._etudiants = value;
       }
    get selectedEtudiant(): EtudiantVo {
           return this._selectedEtudiant;
       }
    set selectedEtudiant(value: EtudiantVo) {
        this._selectedEtudiant = value;
       }
    get etudiantSelections(): Array<EtudiantVo> {
        return this._etudiantSelections;
       }
    set etudiantSelections(value: Array<EtudiantVo>) {
        this._etudiantSelections = value;
       }
    get createEtudiantDialog(): boolean {
        return this._createEtudiantDialog;
       }
    set createEtudiantDialog(value: boolean) {
        this._createEtudiantDialog = value;
       }

    get editEtudiantDialog(): boolean {
        return this._editEtudiantDialog;
       }
    set editEtudiantDialog(value: boolean) {
        this._editEtudiantDialog = value;
       }

    get viewEtudiantDialog(): boolean {
        return this._viewEtudiantDialog;
       }
    set viewEtudiantDialog(value: boolean) {
        this._viewEtudiantDialog = value;
       }
     get searchEtudiant(): EtudiantVo {
        return this._searchEtudiant;
       }
    set searchEtudiant(value: EtudiantVo) {
        this._searchEtudiant = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<EtudiantVo>>(this.API);
    }
    
    public save(): Observable<EtudiantVo> {
         return this.http.post<EtudiantVo>(this.API, this.selectedEtudiant);
    }
    
    delete(etudiant: EtudiantVo) {
         return this.http.delete<number>(this.API+"id/"+etudiant.id);
    }


    public edit(): Observable<EtudiantVo> {
        return this.http.put<EtudiantVo>(this.API, this.selectedEtudiant);
    }
    

     public findByCriteria(etudiant:EtudiantVo):Observable<Array<EtudiantVo>>{
           return this.http.post<Array<EtudiantVo>>(this.API+"search",etudiant);
    }



}