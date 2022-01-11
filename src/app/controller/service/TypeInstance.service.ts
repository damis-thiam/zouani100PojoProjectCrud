import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {TypeInstanceVo} from '../model/TypeInstance.model';


@Injectable({
  providedIn: 'root'
})
export class TypeInstanceService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/typeInstance/';
        })
    }
     private _typeInstances: Array<TypeInstanceVo> = [];
     private _selectedTypeInstance: TypeInstanceVo = new TypeInstanceVo();
     private _typeInstanceSelections: Array<TypeInstanceVo>;
     private _createTypeInstanceDialog: boolean;
     private _editTypeInstanceDialog: boolean;
     private _viewTypeInstanceDialog: boolean;
     public editTypeInstance$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchTypeInstance:TypeInstanceVo = new TypeInstanceVo();


    // getters and setters


    get typeInstances(): Array<TypeInstanceVo> {
        return this._typeInstances == null ? this._typeInstances =   new Array<TypeInstanceVo>() : this._typeInstances;
       }
    set typeInstances(value: Array<TypeInstanceVo>) {
        this._typeInstances = value;
       }
    get selectedTypeInstance(): TypeInstanceVo {
           return this._selectedTypeInstance;
       }
    set selectedTypeInstance(value: TypeInstanceVo) {
        this._selectedTypeInstance = value;
       }
    get typeInstanceSelections(): Array<TypeInstanceVo> {
        return this._typeInstanceSelections;
       }
    set typeInstanceSelections(value: Array<TypeInstanceVo>) {
        this._typeInstanceSelections = value;
       }
    get createTypeInstanceDialog(): boolean {
        return this._createTypeInstanceDialog;
       }
    set createTypeInstanceDialog(value: boolean) {
        this._createTypeInstanceDialog = value;
       }

    get editTypeInstanceDialog(): boolean {
        return this._editTypeInstanceDialog;
       }
    set editTypeInstanceDialog(value: boolean) {
        this._editTypeInstanceDialog = value;
       }

    get viewTypeInstanceDialog(): boolean {
        return this._viewTypeInstanceDialog;
       }
    set viewTypeInstanceDialog(value: boolean) {
        this._viewTypeInstanceDialog = value;
       }
     get searchTypeInstance(): TypeInstanceVo {
        return this._searchTypeInstance;
       }
    set searchTypeInstance(value: TypeInstanceVo) {
        this._searchTypeInstance = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<TypeInstanceVo>>(this.API);
    }
    
    public save(): Observable<TypeInstanceVo> {
         return this.http.post<TypeInstanceVo>(this.API, this.selectedTypeInstance);
    }
    
    delete(typeInstance: TypeInstanceVo) {
         return this.http.delete<number>(this.API+"id/"+typeInstance.id);
    }


    public edit(): Observable<TypeInstanceVo> {
        return this.http.put<TypeInstanceVo>(this.API, this.selectedTypeInstance);
    }
    

     public findByCriteria(typeInstance:TypeInstanceVo):Observable<Array<TypeInstanceVo>>{
           return this.http.post<Array<TypeInstanceVo>>(this.API+"search",typeInstance);
    }



}