import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {InstitutionVo} from '../model/Institution.model';


@Injectable({
  providedIn: 'root'
})
export class InstitutionService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/institution/';
        })
    }
     private _institutions: Array<InstitutionVo> = [];
     private _selectedInstitution: InstitutionVo = new InstitutionVo();
     private _institutionSelections: Array<InstitutionVo>;
     private _createInstitutionDialog: boolean;
     private _editInstitutionDialog: boolean;
     private _viewInstitutionDialog: boolean;
     public editInstitution$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchInstitution:InstitutionVo = new InstitutionVo();


    // getters and setters


    get institutions(): Array<InstitutionVo> {
        return this._institutions == null ? this._institutions =   new Array<InstitutionVo>() : this._institutions;
       }
    set institutions(value: Array<InstitutionVo>) {
        this._institutions = value;
       }
    get selectedInstitution(): InstitutionVo {
           return this._selectedInstitution;
       }
    set selectedInstitution(value: InstitutionVo) {
        this._selectedInstitution = value;
       }
    get institutionSelections(): Array<InstitutionVo> {
        return this._institutionSelections;
       }
    set institutionSelections(value: Array<InstitutionVo>) {
        this._institutionSelections = value;
       }
    get createInstitutionDialog(): boolean {
        return this._createInstitutionDialog;
       }
    set createInstitutionDialog(value: boolean) {
        this._createInstitutionDialog = value;
       }

    get editInstitutionDialog(): boolean {
        return this._editInstitutionDialog;
       }
    set editInstitutionDialog(value: boolean) {
        this._editInstitutionDialog = value;
       }

    get viewInstitutionDialog(): boolean {
        return this._viewInstitutionDialog;
       }
    set viewInstitutionDialog(value: boolean) {
        this._viewInstitutionDialog = value;
       }
     get searchInstitution(): InstitutionVo {
        return this._searchInstitution;
       }
    set searchInstitution(value: InstitutionVo) {
        this._searchInstitution = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<InstitutionVo>>(this.API);
    }
    
    public save(): Observable<InstitutionVo> {
         return this.http.post<InstitutionVo>(this.API, this.selectedInstitution);
    }
    
    delete(institution: InstitutionVo) {
         return this.http.delete<number>(this.API+"id/"+institution.id);
    }


    public edit(): Observable<InstitutionVo> {
        return this.http.put<InstitutionVo>(this.API, this.selectedInstitution);
    }
    

     public findByCriteria(institution:InstitutionVo):Observable<Array<InstitutionVo>>{
           return this.http.post<Array<InstitutionVo>>(this.API+"search",institution);
    }



}