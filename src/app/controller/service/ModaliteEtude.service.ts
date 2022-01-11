import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {ModaliteEtudeVo} from '../model/ModaliteEtude.model';


@Injectable({
  providedIn: 'root'
})
export class ModaliteEtudeService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/modaliteEtude/';
        })
    }
     private _modaliteEtudes: Array<ModaliteEtudeVo> = [];
     private _selectedModaliteEtude: ModaliteEtudeVo = new ModaliteEtudeVo();
     private _modaliteEtudeSelections: Array<ModaliteEtudeVo>;
     private _createModaliteEtudeDialog: boolean;
     private _editModaliteEtudeDialog: boolean;
     private _viewModaliteEtudeDialog: boolean;
     public editModaliteEtude$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchModaliteEtude:ModaliteEtudeVo = new ModaliteEtudeVo();


    // getters and setters


    get modaliteEtudes(): Array<ModaliteEtudeVo> {
        return this._modaliteEtudes == null ? this._modaliteEtudes =   new Array<ModaliteEtudeVo>() : this._modaliteEtudes;
       }
    set modaliteEtudes(value: Array<ModaliteEtudeVo>) {
        this._modaliteEtudes = value;
       }
    get selectedModaliteEtude(): ModaliteEtudeVo {
           return this._selectedModaliteEtude;
       }
    set selectedModaliteEtude(value: ModaliteEtudeVo) {
        this._selectedModaliteEtude = value;
       }
    get modaliteEtudeSelections(): Array<ModaliteEtudeVo> {
        return this._modaliteEtudeSelections;
       }
    set modaliteEtudeSelections(value: Array<ModaliteEtudeVo>) {
        this._modaliteEtudeSelections = value;
       }
    get createModaliteEtudeDialog(): boolean {
        return this._createModaliteEtudeDialog;
       }
    set createModaliteEtudeDialog(value: boolean) {
        this._createModaliteEtudeDialog = value;
       }

    get editModaliteEtudeDialog(): boolean {
        return this._editModaliteEtudeDialog;
       }
    set editModaliteEtudeDialog(value: boolean) {
        this._editModaliteEtudeDialog = value;
       }

    get viewModaliteEtudeDialog(): boolean {
        return this._viewModaliteEtudeDialog;
       }
    set viewModaliteEtudeDialog(value: boolean) {
        this._viewModaliteEtudeDialog = value;
       }
     get searchModaliteEtude(): ModaliteEtudeVo {
        return this._searchModaliteEtude;
       }
    set searchModaliteEtude(value: ModaliteEtudeVo) {
        this._searchModaliteEtude = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<ModaliteEtudeVo>>(this.API);
    }
    
    public save(): Observable<ModaliteEtudeVo> {
         return this.http.post<ModaliteEtudeVo>(this.API, this.selectedModaliteEtude);
    }
    
    delete(modaliteEtude: ModaliteEtudeVo) {
         return this.http.delete<number>(this.API+"id/"+modaliteEtude.id);
    }


    public edit(): Observable<ModaliteEtudeVo> {
        return this.http.put<ModaliteEtudeVo>(this.API, this.selectedModaliteEtude);
    }
    

     public findByCriteria(modaliteEtude:ModaliteEtudeVo):Observable<Array<ModaliteEtudeVo>>{
           return this.http.post<Array<ModaliteEtudeVo>>(this.API+"search",modaliteEtude);
    }



}