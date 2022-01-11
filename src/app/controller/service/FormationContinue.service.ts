import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {FormationContinueVo} from '../model/FormationContinue.model';
import {OutilFormationContinueVo} from '../model/OutilFormationContinue.model';
import {ModaliteFormationContinueVo} from '../model/ModaliteFormationContinue.model';
import {EtablissementVo} from '../model/Etablissement.model';
import {PaysVo} from '../model/Pays.model';
import {ChercheurVo} from '../model/Chercheur.model';


@Injectable({
  providedIn: 'root'
})
export class FormationContinueService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/formationContinue/';
        })
    }
     private _formationContinues: Array<FormationContinueVo> = [];
     private _selectedFormationContinue: FormationContinueVo = new FormationContinueVo();
     private _formationContinueSelections: Array<FormationContinueVo>;
     private _createFormationContinueDialog: boolean;
     private _editFormationContinueDialog: boolean;
     private _viewFormationContinueDialog: boolean;
     public editFormationContinue$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchFormationContinue:FormationContinueVo = new FormationContinueVo();


    // getters and setters


    get formationContinues(): Array<FormationContinueVo> {
        return this._formationContinues == null ? this._formationContinues =   new Array<FormationContinueVo>() : this._formationContinues;
       }
    set formationContinues(value: Array<FormationContinueVo>) {
        this._formationContinues = value;
       }
    get selectedFormationContinue(): FormationContinueVo {
           return this._selectedFormationContinue;
       }
    set selectedFormationContinue(value: FormationContinueVo) {
        this._selectedFormationContinue = value;
       }
    get formationContinueSelections(): Array<FormationContinueVo> {
        return this._formationContinueSelections;
       }
    set formationContinueSelections(value: Array<FormationContinueVo>) {
        this._formationContinueSelections = value;
       }
    get createFormationContinueDialog(): boolean {
        return this._createFormationContinueDialog;
       }
    set createFormationContinueDialog(value: boolean) {
        this._createFormationContinueDialog = value;
       }

    get editFormationContinueDialog(): boolean {
        return this._editFormationContinueDialog;
       }
    set editFormationContinueDialog(value: boolean) {
        this._editFormationContinueDialog = value;
       }

    get viewFormationContinueDialog(): boolean {
        return this._viewFormationContinueDialog;
       }
    set viewFormationContinueDialog(value: boolean) {
        this._viewFormationContinueDialog = value;
       }
     get searchFormationContinue(): FormationContinueVo {
        return this._searchFormationContinue;
       }
    set searchFormationContinue(value: FormationContinueVo) {
        this._searchFormationContinue = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<FormationContinueVo>>(this.API);
    }
    
    public save(): Observable<FormationContinueVo> {
         return this.http.post<FormationContinueVo>(this.API, this.selectedFormationContinue);
    }
    
    delete(formationContinue: FormationContinueVo) {
         return this.http.delete<number>(this.API+"id/"+formationContinue.id);
    }


    public edit(): Observable<FormationContinueVo> {
        return this.http.put<FormationContinueVo>(this.API, this.selectedFormationContinue);
    }
    

     public findByCriteria(formationContinue:FormationContinueVo):Observable<Array<FormationContinueVo>>{
           return this.http.post<Array<FormationContinueVo>>(this.API+"search",formationContinue);
    }



}