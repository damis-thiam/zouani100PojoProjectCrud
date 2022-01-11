import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {NatureEnseignementVo} from '../model/NatureEnseignement.model';
import {EnseignementVo} from '../model/Enseignement.model';
import {NatureEtudeVo} from '../model/NatureEtude.model';


@Injectable({
  providedIn: 'root'
})
export class NatureEnseignementService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/natureEnseignement/';
        })
    }
     private _natureEnseignements: Array<NatureEnseignementVo> = [];
     private _selectedNatureEnseignement: NatureEnseignementVo = new NatureEnseignementVo();
     private _natureEnseignementSelections: Array<NatureEnseignementVo>;
     private _createNatureEnseignementDialog: boolean;
     private _editNatureEnseignementDialog: boolean;
     private _viewNatureEnseignementDialog: boolean;
     public editNatureEnseignement$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchNatureEnseignement:NatureEnseignementVo = new NatureEnseignementVo();


    // getters and setters


    get natureEnseignements(): Array<NatureEnseignementVo> {
        return this._natureEnseignements == null ? this._natureEnseignements =   new Array<NatureEnseignementVo>() : this._natureEnseignements;
       }
    set natureEnseignements(value: Array<NatureEnseignementVo>) {
        this._natureEnseignements = value;
       }
    get selectedNatureEnseignement(): NatureEnseignementVo {
           return this._selectedNatureEnseignement;
       }
    set selectedNatureEnseignement(value: NatureEnseignementVo) {
        this._selectedNatureEnseignement = value;
       }
    get natureEnseignementSelections(): Array<NatureEnseignementVo> {
        return this._natureEnseignementSelections;
       }
    set natureEnseignementSelections(value: Array<NatureEnseignementVo>) {
        this._natureEnseignementSelections = value;
       }
    get createNatureEnseignementDialog(): boolean {
        return this._createNatureEnseignementDialog;
       }
    set createNatureEnseignementDialog(value: boolean) {
        this._createNatureEnseignementDialog = value;
       }

    get editNatureEnseignementDialog(): boolean {
        return this._editNatureEnseignementDialog;
       }
    set editNatureEnseignementDialog(value: boolean) {
        this._editNatureEnseignementDialog = value;
       }

    get viewNatureEnseignementDialog(): boolean {
        return this._viewNatureEnseignementDialog;
       }
    set viewNatureEnseignementDialog(value: boolean) {
        this._viewNatureEnseignementDialog = value;
       }
     get searchNatureEnseignement(): NatureEnseignementVo {
        return this._searchNatureEnseignement;
       }
    set searchNatureEnseignement(value: NatureEnseignementVo) {
        this._searchNatureEnseignement = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<NatureEnseignementVo>>(this.API);
    }
    
    public save(): Observable<NatureEnseignementVo> {
         return this.http.post<NatureEnseignementVo>(this.API, this.selectedNatureEnseignement);
    }
    
    delete(natureEnseignement: NatureEnseignementVo) {
         return this.http.delete<number>(this.API+"id/"+natureEnseignement.id);
    }


    public edit(): Observable<NatureEnseignementVo> {
        return this.http.put<NatureEnseignementVo>(this.API, this.selectedNatureEnseignement);
    }
    

     public findByCriteria(natureEnseignement:NatureEnseignementVo):Observable<Array<NatureEnseignementVo>>{
           return this.http.post<Array<NatureEnseignementVo>>(this.API+"search",natureEnseignement);
    }



}