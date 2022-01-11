import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {MasterInternationalVo} from '../model/MasterInternational.model';


@Injectable({
  providedIn: 'root'
})
export class MasterInternationalService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/masterInternational/';
        })
    }
     private _masterInternationals: Array<MasterInternationalVo> = [];
     private _selectedMasterInternational: MasterInternationalVo = new MasterInternationalVo();
     private _masterInternationalSelections: Array<MasterInternationalVo>;
     private _createMasterInternationalDialog: boolean;
     private _editMasterInternationalDialog: boolean;
     private _viewMasterInternationalDialog: boolean;
     public editMasterInternational$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchMasterInternational:MasterInternationalVo = new MasterInternationalVo();


    // getters and setters


    get masterInternationals(): Array<MasterInternationalVo> {
        return this._masterInternationals == null ? this._masterInternationals =   new Array<MasterInternationalVo>() : this._masterInternationals;
       }
    set masterInternationals(value: Array<MasterInternationalVo>) {
        this._masterInternationals = value;
       }
    get selectedMasterInternational(): MasterInternationalVo {
           return this._selectedMasterInternational;
       }
    set selectedMasterInternational(value: MasterInternationalVo) {
        this._selectedMasterInternational = value;
       }
    get masterInternationalSelections(): Array<MasterInternationalVo> {
        return this._masterInternationalSelections;
       }
    set masterInternationalSelections(value: Array<MasterInternationalVo>) {
        this._masterInternationalSelections = value;
       }
    get createMasterInternationalDialog(): boolean {
        return this._createMasterInternationalDialog;
       }
    set createMasterInternationalDialog(value: boolean) {
        this._createMasterInternationalDialog = value;
       }

    get editMasterInternationalDialog(): boolean {
        return this._editMasterInternationalDialog;
       }
    set editMasterInternationalDialog(value: boolean) {
        this._editMasterInternationalDialog = value;
       }

    get viewMasterInternationalDialog(): boolean {
        return this._viewMasterInternationalDialog;
       }
    set viewMasterInternationalDialog(value: boolean) {
        this._viewMasterInternationalDialog = value;
       }
     get searchMasterInternational(): MasterInternationalVo {
        return this._searchMasterInternational;
       }
    set searchMasterInternational(value: MasterInternationalVo) {
        this._searchMasterInternational = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<MasterInternationalVo>>(this.API);
    }
    
    public save(): Observable<MasterInternationalVo> {
         return this.http.post<MasterInternationalVo>(this.API, this.selectedMasterInternational);
    }
    
    delete(masterInternational: MasterInternationalVo) {
         return this.http.delete<number>(this.API+"id/"+masterInternational.id);
    }


    public edit(): Observable<MasterInternationalVo> {
        return this.http.put<MasterInternationalVo>(this.API, this.selectedMasterInternational);
    }
    

     public findByCriteria(masterInternational:MasterInternationalVo):Observable<Array<MasterInternationalVo>>{
           return this.http.post<Array<MasterInternationalVo>>(this.API+"search",masterInternational);
    }



}