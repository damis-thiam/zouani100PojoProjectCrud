import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {ModaliteVo} from '../model/Modalite.model';


@Injectable({
  providedIn: 'root'
})
export class ModaliteService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/modalite/';
        })
    }
     private _modalites: Array<ModaliteVo> = [];
     private _selectedModalite: ModaliteVo = new ModaliteVo();
     private _modaliteSelections: Array<ModaliteVo>;
     private _createModaliteDialog: boolean;
     private _editModaliteDialog: boolean;
     private _viewModaliteDialog: boolean;
     public editModalite$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchModalite:ModaliteVo = new ModaliteVo();


    // getters and setters


    get modalites(): Array<ModaliteVo> {
        return this._modalites == null ? this._modalites =   new Array<ModaliteVo>() : this._modalites;
       }
    set modalites(value: Array<ModaliteVo>) {
        this._modalites = value;
       }
    get selectedModalite(): ModaliteVo {
           return this._selectedModalite;
       }
    set selectedModalite(value: ModaliteVo) {
        this._selectedModalite = value;
       }
    get modaliteSelections(): Array<ModaliteVo> {
        return this._modaliteSelections;
       }
    set modaliteSelections(value: Array<ModaliteVo>) {
        this._modaliteSelections = value;
       }
    get createModaliteDialog(): boolean {
        return this._createModaliteDialog;
       }
    set createModaliteDialog(value: boolean) {
        this._createModaliteDialog = value;
       }

    get editModaliteDialog(): boolean {
        return this._editModaliteDialog;
       }
    set editModaliteDialog(value: boolean) {
        this._editModaliteDialog = value;
       }

    get viewModaliteDialog(): boolean {
        return this._viewModaliteDialog;
       }
    set viewModaliteDialog(value: boolean) {
        this._viewModaliteDialog = value;
       }
     get searchModalite(): ModaliteVo {
        return this._searchModalite;
       }
    set searchModalite(value: ModaliteVo) {
        this._searchModalite = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<ModaliteVo>>(this.API);
    }
    
    public save(): Observable<ModaliteVo> {
         return this.http.post<ModaliteVo>(this.API, this.selectedModalite);
    }
    
    delete(modalite: ModaliteVo) {
         return this.http.delete<number>(this.API+"id/"+modalite.id);
    }


    public edit(): Observable<ModaliteVo> {
        return this.http.put<ModaliteVo>(this.API, this.selectedModalite);
    }
    

     public findByCriteria(modalite:ModaliteVo):Observable<Array<ModaliteVo>>{
           return this.http.post<Array<ModaliteVo>>(this.API+"search",modalite);
    }



}