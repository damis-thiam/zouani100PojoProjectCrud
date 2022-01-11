import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {InstitutionCoContractantVo} from '../model/InstitutionCoContractant.model';
import {InstitutionVo} from '../model/Institution.model';
import {ChercheurVo} from '../model/Chercheur.model';


@Injectable({
  providedIn: 'root'
})
export class InstitutionCoContractantService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/institutionCoContractant/';
        })
    }
     private _institutionCoContractants: Array<InstitutionCoContractantVo> = [];
     private _selectedInstitutionCoContractant: InstitutionCoContractantVo = new InstitutionCoContractantVo();
     private _institutionCoContractantSelections: Array<InstitutionCoContractantVo>;
     private _createInstitutionCoContractantDialog: boolean;
     private _editInstitutionCoContractantDialog: boolean;
     private _viewInstitutionCoContractantDialog: boolean;
     public editInstitutionCoContractant$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchInstitutionCoContractant:InstitutionCoContractantVo = new InstitutionCoContractantVo();


    // getters and setters


    get institutionCoContractants(): Array<InstitutionCoContractantVo> {
        return this._institutionCoContractants == null ? this._institutionCoContractants =   new Array<InstitutionCoContractantVo>() : this._institutionCoContractants;
       }
    set institutionCoContractants(value: Array<InstitutionCoContractantVo>) {
        this._institutionCoContractants = value;
       }
    get selectedInstitutionCoContractant(): InstitutionCoContractantVo {
           return this._selectedInstitutionCoContractant;
       }
    set selectedInstitutionCoContractant(value: InstitutionCoContractantVo) {
        this._selectedInstitutionCoContractant = value;
       }
    get institutionCoContractantSelections(): Array<InstitutionCoContractantVo> {
        return this._institutionCoContractantSelections;
       }
    set institutionCoContractantSelections(value: Array<InstitutionCoContractantVo>) {
        this._institutionCoContractantSelections = value;
       }
    get createInstitutionCoContractantDialog(): boolean {
        return this._createInstitutionCoContractantDialog;
       }
    set createInstitutionCoContractantDialog(value: boolean) {
        this._createInstitutionCoContractantDialog = value;
       }

    get editInstitutionCoContractantDialog(): boolean {
        return this._editInstitutionCoContractantDialog;
       }
    set editInstitutionCoContractantDialog(value: boolean) {
        this._editInstitutionCoContractantDialog = value;
       }

    get viewInstitutionCoContractantDialog(): boolean {
        return this._viewInstitutionCoContractantDialog;
       }
    set viewInstitutionCoContractantDialog(value: boolean) {
        this._viewInstitutionCoContractantDialog = value;
       }
     get searchInstitutionCoContractant(): InstitutionCoContractantVo {
        return this._searchInstitutionCoContractant;
       }
    set searchInstitutionCoContractant(value: InstitutionCoContractantVo) {
        this._searchInstitutionCoContractant = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<InstitutionCoContractantVo>>(this.API);
    }
    
    public save(): Observable<InstitutionCoContractantVo> {
         return this.http.post<InstitutionCoContractantVo>(this.API, this.selectedInstitutionCoContractant);
    }
    
    delete(institutionCoContractant: InstitutionCoContractantVo) {
         return this.http.delete<number>(this.API+"id/"+institutionCoContractant.id);
    }


    public edit(): Observable<InstitutionCoContractantVo> {
        return this.http.put<InstitutionCoContractantVo>(this.API, this.selectedInstitutionCoContractant);
    }
    

     public findByCriteria(institutionCoContractant:InstitutionCoContractantVo):Observable<Array<InstitutionCoContractantVo>>{
           return this.http.post<Array<InstitutionCoContractantVo>>(this.API+"search",institutionCoContractant);
    }



}