import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {TypeParticipationVo} from '../model/TypeParticipation.model';


@Injectable({
  providedIn: 'root'
})
export class TypeParticipationService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/typeParticipation/';
        })
    }
     private _typeParticipations: Array<TypeParticipationVo> = [];
     private _selectedTypeParticipation: TypeParticipationVo = new TypeParticipationVo();
     private _typeParticipationSelections: Array<TypeParticipationVo>;
     private _createTypeParticipationDialog: boolean;
     private _editTypeParticipationDialog: boolean;
     private _viewTypeParticipationDialog: boolean;
     public editTypeParticipation$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchTypeParticipation:TypeParticipationVo = new TypeParticipationVo();


    // getters and setters


    get typeParticipations(): Array<TypeParticipationVo> {
        return this._typeParticipations == null ? this._typeParticipations =   new Array<TypeParticipationVo>() : this._typeParticipations;
       }
    set typeParticipations(value: Array<TypeParticipationVo>) {
        this._typeParticipations = value;
       }
    get selectedTypeParticipation(): TypeParticipationVo {
           return this._selectedTypeParticipation;
       }
    set selectedTypeParticipation(value: TypeParticipationVo) {
        this._selectedTypeParticipation = value;
       }
    get typeParticipationSelections(): Array<TypeParticipationVo> {
        return this._typeParticipationSelections;
       }
    set typeParticipationSelections(value: Array<TypeParticipationVo>) {
        this._typeParticipationSelections = value;
       }
    get createTypeParticipationDialog(): boolean {
        return this._createTypeParticipationDialog;
       }
    set createTypeParticipationDialog(value: boolean) {
        this._createTypeParticipationDialog = value;
       }

    get editTypeParticipationDialog(): boolean {
        return this._editTypeParticipationDialog;
       }
    set editTypeParticipationDialog(value: boolean) {
        this._editTypeParticipationDialog = value;
       }

    get viewTypeParticipationDialog(): boolean {
        return this._viewTypeParticipationDialog;
       }
    set viewTypeParticipationDialog(value: boolean) {
        this._viewTypeParticipationDialog = value;
       }
     get searchTypeParticipation(): TypeParticipationVo {
        return this._searchTypeParticipation;
       }
    set searchTypeParticipation(value: TypeParticipationVo) {
        this._searchTypeParticipation = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<TypeParticipationVo>>(this.API);
    }
    
    public save(): Observable<TypeParticipationVo> {
         return this.http.post<TypeParticipationVo>(this.API, this.selectedTypeParticipation);
    }
    
    delete(typeParticipation: TypeParticipationVo) {
         return this.http.delete<number>(this.API+"id/"+typeParticipation.id);
    }


    public edit(): Observable<TypeParticipationVo> {
        return this.http.put<TypeParticipationVo>(this.API, this.selectedTypeParticipation);
    }
    

     public findByCriteria(typeParticipation:TypeParticipationVo):Observable<Array<TypeParticipationVo>>{
           return this.http.post<Array<TypeParticipationVo>>(this.API+"search",typeParticipation);
    }



}