import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {ResponsabilitePedagogiqueMasterVo} from '../model/ResponsabilitePedagogiqueMaster.model';
import {MasterVo} from '../model/Master.model';
import {StatutMasterVo} from '../model/StatutMaster.model';
import {EtablissementVo} from '../model/Etablissement.model';
import {ChercheurVo} from '../model/Chercheur.model';


@Injectable({
  providedIn: 'root'
})
export class ResponsabilitePedagogiqueMasterService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/responsabilitePedagogiqueMaster/';
        })
    }
     private _responsabilitePedagogiqueMasters: Array<ResponsabilitePedagogiqueMasterVo> = [];
     private _selectedResponsabilitePedagogiqueMaster: ResponsabilitePedagogiqueMasterVo = new ResponsabilitePedagogiqueMasterVo();
     private _responsabilitePedagogiqueMasterSelections: Array<ResponsabilitePedagogiqueMasterVo>;
     private _createResponsabilitePedagogiqueMasterDialog: boolean;
     private _editResponsabilitePedagogiqueMasterDialog: boolean;
     private _viewResponsabilitePedagogiqueMasterDialog: boolean;
     public editResponsabilitePedagogiqueMaster$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchResponsabilitePedagogiqueMaster:ResponsabilitePedagogiqueMasterVo = new ResponsabilitePedagogiqueMasterVo();


    // getters and setters


    get responsabilitePedagogiqueMasters(): Array<ResponsabilitePedagogiqueMasterVo> {
        return this._responsabilitePedagogiqueMasters == null ? this._responsabilitePedagogiqueMasters =   new Array<ResponsabilitePedagogiqueMasterVo>() : this._responsabilitePedagogiqueMasters;
       }
    set responsabilitePedagogiqueMasters(value: Array<ResponsabilitePedagogiqueMasterVo>) {
        this._responsabilitePedagogiqueMasters = value;
       }
    get selectedResponsabilitePedagogiqueMaster(): ResponsabilitePedagogiqueMasterVo {
           return this._selectedResponsabilitePedagogiqueMaster;
       }
    set selectedResponsabilitePedagogiqueMaster(value: ResponsabilitePedagogiqueMasterVo) {
        this._selectedResponsabilitePedagogiqueMaster = value;
       }
    get responsabilitePedagogiqueMasterSelections(): Array<ResponsabilitePedagogiqueMasterVo> {
        return this._responsabilitePedagogiqueMasterSelections;
       }
    set responsabilitePedagogiqueMasterSelections(value: Array<ResponsabilitePedagogiqueMasterVo>) {
        this._responsabilitePedagogiqueMasterSelections = value;
       }
    get createResponsabilitePedagogiqueMasterDialog(): boolean {
        return this._createResponsabilitePedagogiqueMasterDialog;
       }
    set createResponsabilitePedagogiqueMasterDialog(value: boolean) {
        this._createResponsabilitePedagogiqueMasterDialog = value;
       }

    get editResponsabilitePedagogiqueMasterDialog(): boolean {
        return this._editResponsabilitePedagogiqueMasterDialog;
       }
    set editResponsabilitePedagogiqueMasterDialog(value: boolean) {
        this._editResponsabilitePedagogiqueMasterDialog = value;
       }

    get viewResponsabilitePedagogiqueMasterDialog(): boolean {
        return this._viewResponsabilitePedagogiqueMasterDialog;
       }
    set viewResponsabilitePedagogiqueMasterDialog(value: boolean) {
        this._viewResponsabilitePedagogiqueMasterDialog = value;
       }
     get searchResponsabilitePedagogiqueMaster(): ResponsabilitePedagogiqueMasterVo {
        return this._searchResponsabilitePedagogiqueMaster;
       }
    set searchResponsabilitePedagogiqueMaster(value: ResponsabilitePedagogiqueMasterVo) {
        this._searchResponsabilitePedagogiqueMaster = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<ResponsabilitePedagogiqueMasterVo>>(this.API);
    }
    
    public save(): Observable<ResponsabilitePedagogiqueMasterVo> {
         return this.http.post<ResponsabilitePedagogiqueMasterVo>(this.API, this.selectedResponsabilitePedagogiqueMaster);
    }
    
    delete(responsabilitePedagogiqueMaster: ResponsabilitePedagogiqueMasterVo) {
         return this.http.delete<number>(this.API+"id/"+responsabilitePedagogiqueMaster.id);
    }


    public edit(): Observable<ResponsabilitePedagogiqueMasterVo> {
        return this.http.put<ResponsabilitePedagogiqueMasterVo>(this.API, this.selectedResponsabilitePedagogiqueMaster);
    }
    

     public findByCriteria(responsabilitePedagogiqueMaster:ResponsabilitePedagogiqueMasterVo):Observable<Array<ResponsabilitePedagogiqueMasterVo>>{
           return this.http.post<Array<ResponsabilitePedagogiqueMasterVo>>(this.API+"search",responsabilitePedagogiqueMaster);
    }



}