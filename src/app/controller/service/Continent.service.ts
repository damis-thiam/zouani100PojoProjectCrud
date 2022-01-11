import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {ContinentVo} from '../model/Continent.model';


@Injectable({
  providedIn: 'root'
})
export class ContinentService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/continent/';
        })
    }
     private _continents: Array<ContinentVo> = [];
     private _selectedContinent: ContinentVo = new ContinentVo();
     private _continentSelections: Array<ContinentVo>;
     private _createContinentDialog: boolean;
     private _editContinentDialog: boolean;
     private _viewContinentDialog: boolean;
     public editContinent$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchContinent:ContinentVo = new ContinentVo();


    // getters and setters


    get continents(): Array<ContinentVo> {
        return this._continents == null ? this._continents =   new Array<ContinentVo>() : this._continents;
       }
    set continents(value: Array<ContinentVo>) {
        this._continents = value;
       }
    get selectedContinent(): ContinentVo {
           return this._selectedContinent;
       }
    set selectedContinent(value: ContinentVo) {
        this._selectedContinent = value;
       }
    get continentSelections(): Array<ContinentVo> {
        return this._continentSelections;
       }
    set continentSelections(value: Array<ContinentVo>) {
        this._continentSelections = value;
       }
    get createContinentDialog(): boolean {
        return this._createContinentDialog;
       }
    set createContinentDialog(value: boolean) {
        this._createContinentDialog = value;
       }

    get editContinentDialog(): boolean {
        return this._editContinentDialog;
       }
    set editContinentDialog(value: boolean) {
        this._editContinentDialog = value;
       }

    get viewContinentDialog(): boolean {
        return this._viewContinentDialog;
       }
    set viewContinentDialog(value: boolean) {
        this._viewContinentDialog = value;
       }
     get searchContinent(): ContinentVo {
        return this._searchContinent;
       }
    set searchContinent(value: ContinentVo) {
        this._searchContinent = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<ContinentVo>>(this.API);
    }
    
    public save(): Observable<ContinentVo> {
         return this.http.post<ContinentVo>(this.API, this.selectedContinent);
    }
    
    delete(continent: ContinentVo) {
         return this.http.delete<number>(this.API+"id/"+continent.id);
    }


    public edit(): Observable<ContinentVo> {
        return this.http.put<ContinentVo>(this.API, this.selectedContinent);
    }
    

     public findByCriteria(continent:ContinentVo):Observable<Array<ContinentVo>>{
           return this.http.post<Array<ContinentVo>>(this.API+"search",continent);
    }



}