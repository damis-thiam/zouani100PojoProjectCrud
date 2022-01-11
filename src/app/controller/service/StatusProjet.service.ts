import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {StatusProjetVo} from '../model/StatusProjet.model';


@Injectable({
  providedIn: 'root'
})
export class StatusProjetService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/statusProjet/';
        })
    }
     private _statusProjets: Array<StatusProjetVo> = [];
     private _selectedStatusProjet: StatusProjetVo = new StatusProjetVo();
     private _statusProjetSelections: Array<StatusProjetVo>;
     private _createStatusProjetDialog: boolean;
     private _editStatusProjetDialog: boolean;
     private _viewStatusProjetDialog: boolean;
     public editStatusProjet$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchStatusProjet:StatusProjetVo = new StatusProjetVo();


    // getters and setters


    get statusProjets(): Array<StatusProjetVo> {
        return this._statusProjets == null ? this._statusProjets =   new Array<StatusProjetVo>() : this._statusProjets;
       }
    set statusProjets(value: Array<StatusProjetVo>) {
        this._statusProjets = value;
       }
    get selectedStatusProjet(): StatusProjetVo {
           return this._selectedStatusProjet;
       }
    set selectedStatusProjet(value: StatusProjetVo) {
        this._selectedStatusProjet = value;
       }
    get statusProjetSelections(): Array<StatusProjetVo> {
        return this._statusProjetSelections;
       }
    set statusProjetSelections(value: Array<StatusProjetVo>) {
        this._statusProjetSelections = value;
       }
    get createStatusProjetDialog(): boolean {
        return this._createStatusProjetDialog;
       }
    set createStatusProjetDialog(value: boolean) {
        this._createStatusProjetDialog = value;
       }

    get editStatusProjetDialog(): boolean {
        return this._editStatusProjetDialog;
       }
    set editStatusProjetDialog(value: boolean) {
        this._editStatusProjetDialog = value;
       }

    get viewStatusProjetDialog(): boolean {
        return this._viewStatusProjetDialog;
       }
    set viewStatusProjetDialog(value: boolean) {
        this._viewStatusProjetDialog = value;
       }
     get searchStatusProjet(): StatusProjetVo {
        return this._searchStatusProjet;
       }
    set searchStatusProjet(value: StatusProjetVo) {
        this._searchStatusProjet = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<StatusProjetVo>>(this.API);
    }
    
    public save(): Observable<StatusProjetVo> {
         return this.http.post<StatusProjetVo>(this.API, this.selectedStatusProjet);
    }
    
    delete(statusProjet: StatusProjetVo) {
         return this.http.delete<number>(this.API+"id/"+statusProjet.id);
    }


    public edit(): Observable<StatusProjetVo> {
        return this.http.put<StatusProjetVo>(this.API, this.selectedStatusProjet);
    }
    

     public findByCriteria(statusProjet:StatusProjetVo):Observable<Array<StatusProjetVo>>{
           return this.http.post<Array<StatusProjetVo>>(this.API+"search",statusProjet);
    }



}