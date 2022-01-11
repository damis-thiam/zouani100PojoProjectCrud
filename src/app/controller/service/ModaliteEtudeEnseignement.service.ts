import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {ModaliteEtudeEnseignementVo} from '../model/ModaliteEtudeEnseignement.model';
import {EnseignementVo} from '../model/Enseignement.model';
import {ModaliteEtudeVo} from '../model/ModaliteEtude.model';


@Injectable({
  providedIn: 'root'
})
export class ModaliteEtudeEnseignementService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/modaliteEtudeEnseignement/';
        })
    }
     private _modaliteEtudeEnseignements: Array<ModaliteEtudeEnseignementVo> = [];
     private _selectedModaliteEtudeEnseignement: ModaliteEtudeEnseignementVo = new ModaliteEtudeEnseignementVo();
     private _modaliteEtudeEnseignementSelections: Array<ModaliteEtudeEnseignementVo>;
     private _createModaliteEtudeEnseignementDialog: boolean;
     private _editModaliteEtudeEnseignementDialog: boolean;
     private _viewModaliteEtudeEnseignementDialog: boolean;
     public editModaliteEtudeEnseignement$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchModaliteEtudeEnseignement:ModaliteEtudeEnseignementVo = new ModaliteEtudeEnseignementVo();


    // getters and setters


    get modaliteEtudeEnseignements(): Array<ModaliteEtudeEnseignementVo> {
        return this._modaliteEtudeEnseignements == null ? this._modaliteEtudeEnseignements =   new Array<ModaliteEtudeEnseignementVo>() : this._modaliteEtudeEnseignements;
       }
    set modaliteEtudeEnseignements(value: Array<ModaliteEtudeEnseignementVo>) {
        this._modaliteEtudeEnseignements = value;
       }
    get selectedModaliteEtudeEnseignement(): ModaliteEtudeEnseignementVo {
           return this._selectedModaliteEtudeEnseignement;
       }
    set selectedModaliteEtudeEnseignement(value: ModaliteEtudeEnseignementVo) {
        this._selectedModaliteEtudeEnseignement = value;
       }
    get modaliteEtudeEnseignementSelections(): Array<ModaliteEtudeEnseignementVo> {
        return this._modaliteEtudeEnseignementSelections;
       }
    set modaliteEtudeEnseignementSelections(value: Array<ModaliteEtudeEnseignementVo>) {
        this._modaliteEtudeEnseignementSelections = value;
       }
    get createModaliteEtudeEnseignementDialog(): boolean {
        return this._createModaliteEtudeEnseignementDialog;
       }
    set createModaliteEtudeEnseignementDialog(value: boolean) {
        this._createModaliteEtudeEnseignementDialog = value;
       }

    get editModaliteEtudeEnseignementDialog(): boolean {
        return this._editModaliteEtudeEnseignementDialog;
       }
    set editModaliteEtudeEnseignementDialog(value: boolean) {
        this._editModaliteEtudeEnseignementDialog = value;
       }

    get viewModaliteEtudeEnseignementDialog(): boolean {
        return this._viewModaliteEtudeEnseignementDialog;
       }
    set viewModaliteEtudeEnseignementDialog(value: boolean) {
        this._viewModaliteEtudeEnseignementDialog = value;
       }
     get searchModaliteEtudeEnseignement(): ModaliteEtudeEnseignementVo {
        return this._searchModaliteEtudeEnseignement;
       }
    set searchModaliteEtudeEnseignement(value: ModaliteEtudeEnseignementVo) {
        this._searchModaliteEtudeEnseignement = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<ModaliteEtudeEnseignementVo>>(this.API);
    }
    
    public save(): Observable<ModaliteEtudeEnseignementVo> {
         return this.http.post<ModaliteEtudeEnseignementVo>(this.API, this.selectedModaliteEtudeEnseignement);
    }
    
    delete(modaliteEtudeEnseignement: ModaliteEtudeEnseignementVo) {
         return this.http.delete<number>(this.API+"id/"+modaliteEtudeEnseignement.id);
    }


    public edit(): Observable<ModaliteEtudeEnseignementVo> {
        return this.http.put<ModaliteEtudeEnseignementVo>(this.API, this.selectedModaliteEtudeEnseignement);
    }
    

     public findByCriteria(modaliteEtudeEnseignement:ModaliteEtudeEnseignementVo):Observable<Array<ModaliteEtudeEnseignementVo>>{
           return this.http.post<Array<ModaliteEtudeEnseignementVo>>(this.API+"search",modaliteEtudeEnseignement);
    }



}