import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {PaysFormationContinueVo} from '../model/PaysFormationContinue.model';
import {FormationContinueVo} from '../model/FormationContinue.model';
import {PaysVo} from '../model/Pays.model';


@Injectable({
  providedIn: 'root'
})
export class PaysFormationContinueService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/paysFormationContinue/';
        })
    }
     private _paysFormationContinues: Array<PaysFormationContinueVo> = [];
     private _selectedPaysFormationContinue: PaysFormationContinueVo = new PaysFormationContinueVo();
     private _paysFormationContinueSelections: Array<PaysFormationContinueVo>;
     private _createPaysFormationContinueDialog: boolean;
     private _editPaysFormationContinueDialog: boolean;
     private _viewPaysFormationContinueDialog: boolean;
     public editPaysFormationContinue$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchPaysFormationContinue:PaysFormationContinueVo = new PaysFormationContinueVo();


    // getters and setters


    get paysFormationContinues(): Array<PaysFormationContinueVo> {
        return this._paysFormationContinues == null ? this._paysFormationContinues =   new Array<PaysFormationContinueVo>() : this._paysFormationContinues;
       }
    set paysFormationContinues(value: Array<PaysFormationContinueVo>) {
        this._paysFormationContinues = value;
       }
    get selectedPaysFormationContinue(): PaysFormationContinueVo {
           return this._selectedPaysFormationContinue;
       }
    set selectedPaysFormationContinue(value: PaysFormationContinueVo) {
        this._selectedPaysFormationContinue = value;
       }
    get paysFormationContinueSelections(): Array<PaysFormationContinueVo> {
        return this._paysFormationContinueSelections;
       }
    set paysFormationContinueSelections(value: Array<PaysFormationContinueVo>) {
        this._paysFormationContinueSelections = value;
       }
    get createPaysFormationContinueDialog(): boolean {
        return this._createPaysFormationContinueDialog;
       }
    set createPaysFormationContinueDialog(value: boolean) {
        this._createPaysFormationContinueDialog = value;
       }

    get editPaysFormationContinueDialog(): boolean {
        return this._editPaysFormationContinueDialog;
       }
    set editPaysFormationContinueDialog(value: boolean) {
        this._editPaysFormationContinueDialog = value;
       }

    get viewPaysFormationContinueDialog(): boolean {
        return this._viewPaysFormationContinueDialog;
       }
    set viewPaysFormationContinueDialog(value: boolean) {
        this._viewPaysFormationContinueDialog = value;
       }
     get searchPaysFormationContinue(): PaysFormationContinueVo {
        return this._searchPaysFormationContinue;
       }
    set searchPaysFormationContinue(value: PaysFormationContinueVo) {
        this._searchPaysFormationContinue = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<PaysFormationContinueVo>>(this.API);
    }
    
    public save(): Observable<PaysFormationContinueVo> {
         return this.http.post<PaysFormationContinueVo>(this.API, this.selectedPaysFormationContinue);
    }
    
    delete(paysFormationContinue: PaysFormationContinueVo) {
         return this.http.delete<number>(this.API+"id/"+paysFormationContinue.id);
    }


    public edit(): Observable<PaysFormationContinueVo> {
        return this.http.put<PaysFormationContinueVo>(this.API, this.selectedPaysFormationContinue);
    }
    

     public findByCriteria(paysFormationContinue:PaysFormationContinueVo):Observable<Array<PaysFormationContinueVo>>{
           return this.http.post<Array<PaysFormationContinueVo>>(this.API+"search",paysFormationContinue);
    }



}