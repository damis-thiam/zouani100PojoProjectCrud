import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {DomaineScientifiqueVo} from '../model/DomaineScientifique.model';


@Injectable({
  providedIn: 'root'
})
export class DomaineScientifiqueService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/domaineScientifique/';
        })
    }
     private _domaineScientifiques: Array<DomaineScientifiqueVo> = [];
     private _selectedDomaineScientifique: DomaineScientifiqueVo = new DomaineScientifiqueVo();
     private _domaineScientifiqueSelections: Array<DomaineScientifiqueVo>;
     private _createDomaineScientifiqueDialog: boolean;
     private _editDomaineScientifiqueDialog: boolean;
     private _viewDomaineScientifiqueDialog: boolean;
     public editDomaineScientifique$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchDomaineScientifique:DomaineScientifiqueVo = new DomaineScientifiqueVo();


    // getters and setters


    get domaineScientifiques(): Array<DomaineScientifiqueVo> {
        return this._domaineScientifiques == null ? this._domaineScientifiques =   new Array<DomaineScientifiqueVo>() : this._domaineScientifiques;
       }
    set domaineScientifiques(value: Array<DomaineScientifiqueVo>) {
        this._domaineScientifiques = value;
       }
    get selectedDomaineScientifique(): DomaineScientifiqueVo {
           return this._selectedDomaineScientifique;
       }
    set selectedDomaineScientifique(value: DomaineScientifiqueVo) {
        this._selectedDomaineScientifique = value;
       }
    get domaineScientifiqueSelections(): Array<DomaineScientifiqueVo> {
        return this._domaineScientifiqueSelections;
       }
    set domaineScientifiqueSelections(value: Array<DomaineScientifiqueVo>) {
        this._domaineScientifiqueSelections = value;
       }
    get createDomaineScientifiqueDialog(): boolean {
        return this._createDomaineScientifiqueDialog;
       }
    set createDomaineScientifiqueDialog(value: boolean) {
        this._createDomaineScientifiqueDialog = value;
       }

    get editDomaineScientifiqueDialog(): boolean {
        return this._editDomaineScientifiqueDialog;
       }
    set editDomaineScientifiqueDialog(value: boolean) {
        this._editDomaineScientifiqueDialog = value;
       }

    get viewDomaineScientifiqueDialog(): boolean {
        return this._viewDomaineScientifiqueDialog;
       }
    set viewDomaineScientifiqueDialog(value: boolean) {
        this._viewDomaineScientifiqueDialog = value;
       }
     get searchDomaineScientifique(): DomaineScientifiqueVo {
        return this._searchDomaineScientifique;
       }
    set searchDomaineScientifique(value: DomaineScientifiqueVo) {
        this._searchDomaineScientifique = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<DomaineScientifiqueVo>>(this.API);
    }
    
    public save(): Observable<DomaineScientifiqueVo> {
         return this.http.post<DomaineScientifiqueVo>(this.API, this.selectedDomaineScientifique);
    }
    
    delete(domaineScientifique: DomaineScientifiqueVo) {
         return this.http.delete<number>(this.API+"id/"+domaineScientifique.id);
    }


    public edit(): Observable<DomaineScientifiqueVo> {
        return this.http.put<DomaineScientifiqueVo>(this.API, this.selectedDomaineScientifique);
    }
    

     public findByCriteria(domaineScientifique:DomaineScientifiqueVo):Observable<Array<DomaineScientifiqueVo>>{
           return this.http.post<Array<DomaineScientifiqueVo>>(this.API+"search",domaineScientifique);
    }



}