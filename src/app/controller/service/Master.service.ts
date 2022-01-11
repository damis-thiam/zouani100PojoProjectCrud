import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {MasterVo} from '../model/Master.model';
import {PaysVo} from '../model/Pays.model';


@Injectable({
  providedIn: 'root'
})
export class MasterService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/master/';
        })
    }
     private _masters: Array<MasterVo> = [];
     private _selectedMaster: MasterVo = new MasterVo();
     private _masterSelections: Array<MasterVo>;
     private _createMasterDialog: boolean;
     private _editMasterDialog: boolean;
     private _viewMasterDialog: boolean;
     public editMaster$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchMaster:MasterVo = new MasterVo();


    // getters and setters


    get masters(): Array<MasterVo> {
        return this._masters == null ? this._masters =   new Array<MasterVo>() : this._masters;
       }
    set masters(value: Array<MasterVo>) {
        this._masters = value;
       }
    get selectedMaster(): MasterVo {
           return this._selectedMaster;
       }
    set selectedMaster(value: MasterVo) {
        this._selectedMaster = value;
       }
    get masterSelections(): Array<MasterVo> {
        return this._masterSelections;
       }
    set masterSelections(value: Array<MasterVo>) {
        this._masterSelections = value;
       }
    get createMasterDialog(): boolean {
        return this._createMasterDialog;
       }
    set createMasterDialog(value: boolean) {
        this._createMasterDialog = value;
       }

    get editMasterDialog(): boolean {
        return this._editMasterDialog;
       }
    set editMasterDialog(value: boolean) {
        this._editMasterDialog = value;
       }

    get viewMasterDialog(): boolean {
        return this._viewMasterDialog;
       }
    set viewMasterDialog(value: boolean) {
        this._viewMasterDialog = value;
       }
     get searchMaster(): MasterVo {
        return this._searchMaster;
       }
    set searchMaster(value: MasterVo) {
        this._searchMaster = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<MasterVo>>(this.API);
    }
    
    public save(): Observable<MasterVo> {
         return this.http.post<MasterVo>(this.API, this.selectedMaster);
    }
    
    delete(master: MasterVo) {
         return this.http.delete<number>(this.API+"id/"+master.id);
    }


    public edit(): Observable<MasterVo> {
        return this.http.put<MasterVo>(this.API, this.selectedMaster);
    }
    

     public findByCriteria(master:MasterVo):Observable<Array<MasterVo>>{
           return this.http.post<Array<MasterVo>>(this.API+"search",master);
    }



}