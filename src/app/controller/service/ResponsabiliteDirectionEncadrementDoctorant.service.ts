import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {ResponsabiliteDirectionEncadrementDoctorantVo} from '../model/ResponsabiliteDirectionEncadrementDoctorant.model';


@Injectable({
  providedIn: 'root'
})
export class ResponsabiliteDirectionEncadrementDoctorantService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/responsabiliteDirectionEncadrementDoctorant/';
        })
    }
     private _responsabiliteDirectionEncadrementDoctorants: Array<ResponsabiliteDirectionEncadrementDoctorantVo> = [];
     private _selectedResponsabiliteDirectionEncadrementDoctorant: ResponsabiliteDirectionEncadrementDoctorantVo = new ResponsabiliteDirectionEncadrementDoctorantVo();
     private _responsabiliteDirectionEncadrementDoctorantSelections: Array<ResponsabiliteDirectionEncadrementDoctorantVo>;
     private _createResponsabiliteDirectionEncadrementDoctorantDialog: boolean;
     private _editResponsabiliteDirectionEncadrementDoctorantDialog: boolean;
     private _viewResponsabiliteDirectionEncadrementDoctorantDialog: boolean;
     public editResponsabiliteDirectionEncadrementDoctorant$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchResponsabiliteDirectionEncadrementDoctorant:ResponsabiliteDirectionEncadrementDoctorantVo = new ResponsabiliteDirectionEncadrementDoctorantVo();


    // getters and setters


    get responsabiliteDirectionEncadrementDoctorants(): Array<ResponsabiliteDirectionEncadrementDoctorantVo> {
        return this._responsabiliteDirectionEncadrementDoctorants == null ? this._responsabiliteDirectionEncadrementDoctorants =   new Array<ResponsabiliteDirectionEncadrementDoctorantVo>() : this._responsabiliteDirectionEncadrementDoctorants;
       }
    set responsabiliteDirectionEncadrementDoctorants(value: Array<ResponsabiliteDirectionEncadrementDoctorantVo>) {
        this._responsabiliteDirectionEncadrementDoctorants = value;
       }
    get selectedResponsabiliteDirectionEncadrementDoctorant(): ResponsabiliteDirectionEncadrementDoctorantVo {
           return this._selectedResponsabiliteDirectionEncadrementDoctorant;
       }
    set selectedResponsabiliteDirectionEncadrementDoctorant(value: ResponsabiliteDirectionEncadrementDoctorantVo) {
        this._selectedResponsabiliteDirectionEncadrementDoctorant = value;
       }
    get responsabiliteDirectionEncadrementDoctorantSelections(): Array<ResponsabiliteDirectionEncadrementDoctorantVo> {
        return this._responsabiliteDirectionEncadrementDoctorantSelections;
       }
    set responsabiliteDirectionEncadrementDoctorantSelections(value: Array<ResponsabiliteDirectionEncadrementDoctorantVo>) {
        this._responsabiliteDirectionEncadrementDoctorantSelections = value;
       }
    get createResponsabiliteDirectionEncadrementDoctorantDialog(): boolean {
        return this._createResponsabiliteDirectionEncadrementDoctorantDialog;
       }
    set createResponsabiliteDirectionEncadrementDoctorantDialog(value: boolean) {
        this._createResponsabiliteDirectionEncadrementDoctorantDialog = value;
       }

    get editResponsabiliteDirectionEncadrementDoctorantDialog(): boolean {
        return this._editResponsabiliteDirectionEncadrementDoctorantDialog;
       }
    set editResponsabiliteDirectionEncadrementDoctorantDialog(value: boolean) {
        this._editResponsabiliteDirectionEncadrementDoctorantDialog = value;
       }

    get viewResponsabiliteDirectionEncadrementDoctorantDialog(): boolean {
        return this._viewResponsabiliteDirectionEncadrementDoctorantDialog;
       }
    set viewResponsabiliteDirectionEncadrementDoctorantDialog(value: boolean) {
        this._viewResponsabiliteDirectionEncadrementDoctorantDialog = value;
       }
     get searchResponsabiliteDirectionEncadrementDoctorant(): ResponsabiliteDirectionEncadrementDoctorantVo {
        return this._searchResponsabiliteDirectionEncadrementDoctorant;
       }
    set searchResponsabiliteDirectionEncadrementDoctorant(value: ResponsabiliteDirectionEncadrementDoctorantVo) {
        this._searchResponsabiliteDirectionEncadrementDoctorant = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<ResponsabiliteDirectionEncadrementDoctorantVo>>(this.API);
    }
    
    public save(): Observable<ResponsabiliteDirectionEncadrementDoctorantVo> {
         return this.http.post<ResponsabiliteDirectionEncadrementDoctorantVo>(this.API, this.selectedResponsabiliteDirectionEncadrementDoctorant);
    }
    
    delete(responsabiliteDirectionEncadrementDoctorant: ResponsabiliteDirectionEncadrementDoctorantVo) {
         return this.http.delete<number>(this.API+"id/"+responsabiliteDirectionEncadrementDoctorant.id);
    }


    public edit(): Observable<ResponsabiliteDirectionEncadrementDoctorantVo> {
        return this.http.put<ResponsabiliteDirectionEncadrementDoctorantVo>(this.API, this.selectedResponsabiliteDirectionEncadrementDoctorant);
    }
    

     public findByCriteria(responsabiliteDirectionEncadrementDoctorant:ResponsabiliteDirectionEncadrementDoctorantVo):Observable<Array<ResponsabiliteDirectionEncadrementDoctorantVo>>{
           return this.http.post<Array<ResponsabiliteDirectionEncadrementDoctorantVo>>(this.API+"search",responsabiliteDirectionEncadrementDoctorant);
    }



}