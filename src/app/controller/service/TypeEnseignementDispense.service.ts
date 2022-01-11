import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {TypeEnseignementDispenseVo} from '../model/TypeEnseignementDispense.model';


@Injectable({
  providedIn: 'root'
})
export class TypeEnseignementDispenseService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/typeEnseignementDispense/';
        })
    }
     private _typeEnseignementDispenses: Array<TypeEnseignementDispenseVo> = [];
     private _selectedTypeEnseignementDispense: TypeEnseignementDispenseVo = new TypeEnseignementDispenseVo();
     private _typeEnseignementDispenseSelections: Array<TypeEnseignementDispenseVo>;
     private _createTypeEnseignementDispenseDialog: boolean;
     private _editTypeEnseignementDispenseDialog: boolean;
     private _viewTypeEnseignementDispenseDialog: boolean;
     public editTypeEnseignementDispense$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchTypeEnseignementDispense:TypeEnseignementDispenseVo = new TypeEnseignementDispenseVo();


    // getters and setters


    get typeEnseignementDispenses(): Array<TypeEnseignementDispenseVo> {
        return this._typeEnseignementDispenses == null ? this._typeEnseignementDispenses =   new Array<TypeEnseignementDispenseVo>() : this._typeEnseignementDispenses;
       }
    set typeEnseignementDispenses(value: Array<TypeEnseignementDispenseVo>) {
        this._typeEnseignementDispenses = value;
       }
    get selectedTypeEnseignementDispense(): TypeEnseignementDispenseVo {
           return this._selectedTypeEnseignementDispense;
       }
    set selectedTypeEnseignementDispense(value: TypeEnseignementDispenseVo) {
        this._selectedTypeEnseignementDispense = value;
       }
    get typeEnseignementDispenseSelections(): Array<TypeEnseignementDispenseVo> {
        return this._typeEnseignementDispenseSelections;
       }
    set typeEnseignementDispenseSelections(value: Array<TypeEnseignementDispenseVo>) {
        this._typeEnseignementDispenseSelections = value;
       }
    get createTypeEnseignementDispenseDialog(): boolean {
        return this._createTypeEnseignementDispenseDialog;
       }
    set createTypeEnseignementDispenseDialog(value: boolean) {
        this._createTypeEnseignementDispenseDialog = value;
       }

    get editTypeEnseignementDispenseDialog(): boolean {
        return this._editTypeEnseignementDispenseDialog;
       }
    set editTypeEnseignementDispenseDialog(value: boolean) {
        this._editTypeEnseignementDispenseDialog = value;
       }

    get viewTypeEnseignementDispenseDialog(): boolean {
        return this._viewTypeEnseignementDispenseDialog;
       }
    set viewTypeEnseignementDispenseDialog(value: boolean) {
        this._viewTypeEnseignementDispenseDialog = value;
       }
     get searchTypeEnseignementDispense(): TypeEnseignementDispenseVo {
        return this._searchTypeEnseignementDispense;
       }
    set searchTypeEnseignementDispense(value: TypeEnseignementDispenseVo) {
        this._searchTypeEnseignementDispense = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<TypeEnseignementDispenseVo>>(this.API);
    }
    
    public save(): Observable<TypeEnseignementDispenseVo> {
         return this.http.post<TypeEnseignementDispenseVo>(this.API, this.selectedTypeEnseignementDispense);
    }
    
    delete(typeEnseignementDispense: TypeEnseignementDispenseVo) {
         return this.http.delete<number>(this.API+"id/"+typeEnseignementDispense.id);
    }


    public edit(): Observable<TypeEnseignementDispenseVo> {
        return this.http.put<TypeEnseignementDispenseVo>(this.API, this.selectedTypeEnseignementDispense);
    }
    

     public findByCriteria(typeEnseignementDispense:TypeEnseignementDispenseVo):Observable<Array<TypeEnseignementDispenseVo>>{
           return this.http.post<Array<TypeEnseignementDispenseVo>>(this.API+"search",typeEnseignementDispense);
    }



}