import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {InstitutionCoContractantProjetActiviteRechercheVo} from '../model/InstitutionCoContractantProjetActiviteRecherche.model';
import {ProjetActiviteRechercheVo} from '../model/ProjetActiviteRecherche.model';
import {InstitutionCoContractantVo} from '../model/InstitutionCoContractant.model';


@Injectable({
  providedIn: 'root'
})
export class InstitutionCoContractantProjetActiviteRechercheService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/institutionCoContractantProjetActiviteRecherche/';
        })
    }
     private _institutionCoContractantProjetActiviteRecherches: Array<InstitutionCoContractantProjetActiviteRechercheVo> = [];
     private _selectedInstitutionCoContractantProjetActiviteRecherche: InstitutionCoContractantProjetActiviteRechercheVo = new InstitutionCoContractantProjetActiviteRechercheVo();
     private _institutionCoContractantProjetActiviteRechercheSelections: Array<InstitutionCoContractantProjetActiviteRechercheVo>;
     private _createInstitutionCoContractantProjetActiviteRechercheDialog: boolean;
     private _editInstitutionCoContractantProjetActiviteRechercheDialog: boolean;
     private _viewInstitutionCoContractantProjetActiviteRechercheDialog: boolean;
     public editInstitutionCoContractantProjetActiviteRecherche$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchInstitutionCoContractantProjetActiviteRecherche:InstitutionCoContractantProjetActiviteRechercheVo = new InstitutionCoContractantProjetActiviteRechercheVo();


    // getters and setters


    get institutionCoContractantProjetActiviteRecherches(): Array<InstitutionCoContractantProjetActiviteRechercheVo> {
        return this._institutionCoContractantProjetActiviteRecherches == null ? this._institutionCoContractantProjetActiviteRecherches =   new Array<InstitutionCoContractantProjetActiviteRechercheVo>() : this._institutionCoContractantProjetActiviteRecherches;
       }
    set institutionCoContractantProjetActiviteRecherches(value: Array<InstitutionCoContractantProjetActiviteRechercheVo>) {
        this._institutionCoContractantProjetActiviteRecherches = value;
       }
    get selectedInstitutionCoContractantProjetActiviteRecherche(): InstitutionCoContractantProjetActiviteRechercheVo {
           return this._selectedInstitutionCoContractantProjetActiviteRecherche;
       }
    set selectedInstitutionCoContractantProjetActiviteRecherche(value: InstitutionCoContractantProjetActiviteRechercheVo) {
        this._selectedInstitutionCoContractantProjetActiviteRecherche = value;
       }
    get institutionCoContractantProjetActiviteRechercheSelections(): Array<InstitutionCoContractantProjetActiviteRechercheVo> {
        return this._institutionCoContractantProjetActiviteRechercheSelections;
       }
    set institutionCoContractantProjetActiviteRechercheSelections(value: Array<InstitutionCoContractantProjetActiviteRechercheVo>) {
        this._institutionCoContractantProjetActiviteRechercheSelections = value;
       }
    get createInstitutionCoContractantProjetActiviteRechercheDialog(): boolean {
        return this._createInstitutionCoContractantProjetActiviteRechercheDialog;
       }
    set createInstitutionCoContractantProjetActiviteRechercheDialog(value: boolean) {
        this._createInstitutionCoContractantProjetActiviteRechercheDialog = value;
       }

    get editInstitutionCoContractantProjetActiviteRechercheDialog(): boolean {
        return this._editInstitutionCoContractantProjetActiviteRechercheDialog;
       }
    set editInstitutionCoContractantProjetActiviteRechercheDialog(value: boolean) {
        this._editInstitutionCoContractantProjetActiviteRechercheDialog = value;
       }

    get viewInstitutionCoContractantProjetActiviteRechercheDialog(): boolean {
        return this._viewInstitutionCoContractantProjetActiviteRechercheDialog;
       }
    set viewInstitutionCoContractantProjetActiviteRechercheDialog(value: boolean) {
        this._viewInstitutionCoContractantProjetActiviteRechercheDialog = value;
       }
     get searchInstitutionCoContractantProjetActiviteRecherche(): InstitutionCoContractantProjetActiviteRechercheVo {
        return this._searchInstitutionCoContractantProjetActiviteRecherche;
       }
    set searchInstitutionCoContractantProjetActiviteRecherche(value: InstitutionCoContractantProjetActiviteRechercheVo) {
        this._searchInstitutionCoContractantProjetActiviteRecherche = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<InstitutionCoContractantProjetActiviteRechercheVo>>(this.API);
    }
    
    public save(): Observable<InstitutionCoContractantProjetActiviteRechercheVo> {
         return this.http.post<InstitutionCoContractantProjetActiviteRechercheVo>(this.API, this.selectedInstitutionCoContractantProjetActiviteRecherche);
    }
    
    delete(institutionCoContractantProjetActiviteRecherche: InstitutionCoContractantProjetActiviteRechercheVo) {
         return this.http.delete<number>(this.API+"id/"+institutionCoContractantProjetActiviteRecherche.id);
    }


    public edit(): Observable<InstitutionCoContractantProjetActiviteRechercheVo> {
        return this.http.put<InstitutionCoContractantProjetActiviteRechercheVo>(this.API, this.selectedInstitutionCoContractantProjetActiviteRecherche);
    }
    

     public findByCriteria(institutionCoContractantProjetActiviteRecherche:InstitutionCoContractantProjetActiviteRechercheVo):Observable<Array<InstitutionCoContractantProjetActiviteRechercheVo>>{
           return this.http.post<Array<InstitutionCoContractantProjetActiviteRechercheVo>>(this.API+"search",institutionCoContractantProjetActiviteRecherche);
    }



}