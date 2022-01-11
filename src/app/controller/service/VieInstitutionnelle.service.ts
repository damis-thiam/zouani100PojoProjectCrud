import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {VieInstitutionnelleVo} from '../model/VieInstitutionnelle.model';
import {TypeInstanceVo} from '../model/TypeInstance.model';
import {EtablissementVo} from '../model/Etablissement.model';
import {PaysVo} from '../model/Pays.model';
import {ChercheurVo} from '../model/Chercheur.model';


@Injectable({
  providedIn: 'root'
})
export class VieInstitutionnelleService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/vieInstitutionnelle/';
        })
    }
     private _vieInstitutionnelles: Array<VieInstitutionnelleVo> = [];
     private _selectedVieInstitutionnelle: VieInstitutionnelleVo = new VieInstitutionnelleVo();
     private _vieInstitutionnelleSelections: Array<VieInstitutionnelleVo>;
     private _createVieInstitutionnelleDialog: boolean;
     private _editVieInstitutionnelleDialog: boolean;
     private _viewVieInstitutionnelleDialog: boolean;
     public editVieInstitutionnelle$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchVieInstitutionnelle:VieInstitutionnelleVo = new VieInstitutionnelleVo();


    // getters and setters


    get vieInstitutionnelles(): Array<VieInstitutionnelleVo> {
        return this._vieInstitutionnelles == null ? this._vieInstitutionnelles =   new Array<VieInstitutionnelleVo>() : this._vieInstitutionnelles;
       }
    set vieInstitutionnelles(value: Array<VieInstitutionnelleVo>) {
        this._vieInstitutionnelles = value;
       }
    get selectedVieInstitutionnelle(): VieInstitutionnelleVo {
           return this._selectedVieInstitutionnelle;
       }
    set selectedVieInstitutionnelle(value: VieInstitutionnelleVo) {
        this._selectedVieInstitutionnelle = value;
       }
    get vieInstitutionnelleSelections(): Array<VieInstitutionnelleVo> {
        return this._vieInstitutionnelleSelections;
       }
    set vieInstitutionnelleSelections(value: Array<VieInstitutionnelleVo>) {
        this._vieInstitutionnelleSelections = value;
       }
    get createVieInstitutionnelleDialog(): boolean {
        return this._createVieInstitutionnelleDialog;
       }
    set createVieInstitutionnelleDialog(value: boolean) {
        this._createVieInstitutionnelleDialog = value;
       }

    get editVieInstitutionnelleDialog(): boolean {
        return this._editVieInstitutionnelleDialog;
       }
    set editVieInstitutionnelleDialog(value: boolean) {
        this._editVieInstitutionnelleDialog = value;
       }

    get viewVieInstitutionnelleDialog(): boolean {
        return this._viewVieInstitutionnelleDialog;
       }
    set viewVieInstitutionnelleDialog(value: boolean) {
        this._viewVieInstitutionnelleDialog = value;
       }
     get searchVieInstitutionnelle(): VieInstitutionnelleVo {
        return this._searchVieInstitutionnelle;
       }
    set searchVieInstitutionnelle(value: VieInstitutionnelleVo) {
        this._searchVieInstitutionnelle = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<VieInstitutionnelleVo>>(this.API);
    }
    
    public save(): Observable<VieInstitutionnelleVo> {
         return this.http.post<VieInstitutionnelleVo>(this.API, this.selectedVieInstitutionnelle);
    }
    
    delete(vieInstitutionnelle: VieInstitutionnelleVo) {
         return this.http.delete<number>(this.API+"id/"+vieInstitutionnelle.id);
    }


    public edit(): Observable<VieInstitutionnelleVo> {
        return this.http.put<VieInstitutionnelleVo>(this.API, this.selectedVieInstitutionnelle);
    }
    

     public findByCriteria(vieInstitutionnelle:VieInstitutionnelleVo):Observable<Array<VieInstitutionnelleVo>>{
           return this.http.post<Array<VieInstitutionnelleVo>>(this.API+"search",vieInstitutionnelle);
    }



}