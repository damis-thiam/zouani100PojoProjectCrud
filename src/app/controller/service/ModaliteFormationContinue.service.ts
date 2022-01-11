import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {ModaliteFormationContinueVo} from '../model/ModaliteFormationContinue.model';


@Injectable({
  providedIn: 'root'
})
export class ModaliteFormationContinueService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/modaliteFormationContinue/';
        })
    }
     private _modaliteFormationContinues: Array<ModaliteFormationContinueVo> = [];
     private _selectedModaliteFormationContinue: ModaliteFormationContinueVo = new ModaliteFormationContinueVo();
     private _modaliteFormationContinueSelections: Array<ModaliteFormationContinueVo>;
     private _createModaliteFormationContinueDialog: boolean;
     private _editModaliteFormationContinueDialog: boolean;
     private _viewModaliteFormationContinueDialog: boolean;
     public editModaliteFormationContinue$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchModaliteFormationContinue:ModaliteFormationContinueVo = new ModaliteFormationContinueVo();


    // getters and setters


    get modaliteFormationContinues(): Array<ModaliteFormationContinueVo> {
        return this._modaliteFormationContinues == null ? this._modaliteFormationContinues =   new Array<ModaliteFormationContinueVo>() : this._modaliteFormationContinues;
       }
    set modaliteFormationContinues(value: Array<ModaliteFormationContinueVo>) {
        this._modaliteFormationContinues = value;
       }
    get selectedModaliteFormationContinue(): ModaliteFormationContinueVo {
           return this._selectedModaliteFormationContinue;
       }
    set selectedModaliteFormationContinue(value: ModaliteFormationContinueVo) {
        this._selectedModaliteFormationContinue = value;
       }
    get modaliteFormationContinueSelections(): Array<ModaliteFormationContinueVo> {
        return this._modaliteFormationContinueSelections;
       }
    set modaliteFormationContinueSelections(value: Array<ModaliteFormationContinueVo>) {
        this._modaliteFormationContinueSelections = value;
       }
    get createModaliteFormationContinueDialog(): boolean {
        return this._createModaliteFormationContinueDialog;
       }
    set createModaliteFormationContinueDialog(value: boolean) {
        this._createModaliteFormationContinueDialog = value;
       }

    get editModaliteFormationContinueDialog(): boolean {
        return this._editModaliteFormationContinueDialog;
       }
    set editModaliteFormationContinueDialog(value: boolean) {
        this._editModaliteFormationContinueDialog = value;
       }

    get viewModaliteFormationContinueDialog(): boolean {
        return this._viewModaliteFormationContinueDialog;
       }
    set viewModaliteFormationContinueDialog(value: boolean) {
        this._viewModaliteFormationContinueDialog = value;
       }
     get searchModaliteFormationContinue(): ModaliteFormationContinueVo {
        return this._searchModaliteFormationContinue;
       }
    set searchModaliteFormationContinue(value: ModaliteFormationContinueVo) {
        this._searchModaliteFormationContinue = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<ModaliteFormationContinueVo>>(this.API);
    }
    
    public save(): Observable<ModaliteFormationContinueVo> {
         return this.http.post<ModaliteFormationContinueVo>(this.API, this.selectedModaliteFormationContinue);
    }
    
    delete(modaliteFormationContinue: ModaliteFormationContinueVo) {
         return this.http.delete<number>(this.API+"id/"+modaliteFormationContinue.id);
    }


    public edit(): Observable<ModaliteFormationContinueVo> {
        return this.http.put<ModaliteFormationContinueVo>(this.API, this.selectedModaliteFormationContinue);
    }
    

     public findByCriteria(modaliteFormationContinue:ModaliteFormationContinueVo):Observable<Array<ModaliteFormationContinueVo>>{
           return this.http.post<Array<ModaliteFormationContinueVo>>(this.API+"search",modaliteFormationContinue);
    }



}