import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {TypeExpertVo} from '../model/TypeExpert.model';


@Injectable({
  providedIn: 'root'
})
export class TypeExpertService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/typeExpert/';
        })
    }
     private _typeExperts: Array<TypeExpertVo> = [];
     private _selectedTypeExpert: TypeExpertVo = new TypeExpertVo();
     private _typeExpertSelections: Array<TypeExpertVo>;
     private _createTypeExpertDialog: boolean;
     private _editTypeExpertDialog: boolean;
     private _viewTypeExpertDialog: boolean;
     public editTypeExpert$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchTypeExpert:TypeExpertVo = new TypeExpertVo();


    // getters and setters


    get typeExperts(): Array<TypeExpertVo> {
        return this._typeExperts == null ? this._typeExperts =   new Array<TypeExpertVo>() : this._typeExperts;
       }
    set typeExperts(value: Array<TypeExpertVo>) {
        this._typeExperts = value;
       }
    get selectedTypeExpert(): TypeExpertVo {
           return this._selectedTypeExpert;
       }
    set selectedTypeExpert(value: TypeExpertVo) {
        this._selectedTypeExpert = value;
       }
    get typeExpertSelections(): Array<TypeExpertVo> {
        return this._typeExpertSelections;
       }
    set typeExpertSelections(value: Array<TypeExpertVo>) {
        this._typeExpertSelections = value;
       }
    get createTypeExpertDialog(): boolean {
        return this._createTypeExpertDialog;
       }
    set createTypeExpertDialog(value: boolean) {
        this._createTypeExpertDialog = value;
       }

    get editTypeExpertDialog(): boolean {
        return this._editTypeExpertDialog;
       }
    set editTypeExpertDialog(value: boolean) {
        this._editTypeExpertDialog = value;
       }

    get viewTypeExpertDialog(): boolean {
        return this._viewTypeExpertDialog;
       }
    set viewTypeExpertDialog(value: boolean) {
        this._viewTypeExpertDialog = value;
       }
     get searchTypeExpert(): TypeExpertVo {
        return this._searchTypeExpert;
       }
    set searchTypeExpert(value: TypeExpertVo) {
        this._searchTypeExpert = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<TypeExpertVo>>(this.API);
    }
    
    public save(): Observable<TypeExpertVo> {
         return this.http.post<TypeExpertVo>(this.API, this.selectedTypeExpert);
    }
    
    delete(typeExpert: TypeExpertVo) {
         return this.http.delete<number>(this.API+"id/"+typeExpert.id);
    }


    public edit(): Observable<TypeExpertVo> {
        return this.http.put<TypeExpertVo>(this.API, this.selectedTypeExpert);
    }
    

     public findByCriteria(typeExpert:TypeExpertVo):Observable<Array<TypeExpertVo>>{
           return this.http.post<Array<TypeExpertVo>>(this.API+"search",typeExpert);
    }



}