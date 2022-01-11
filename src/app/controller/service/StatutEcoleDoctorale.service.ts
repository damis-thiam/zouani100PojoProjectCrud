import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {StatutEcoleDoctoraleVo} from '../model/StatutEcoleDoctorale.model';


@Injectable({
  providedIn: 'root'
})
export class StatutEcoleDoctoraleService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/statutEcoleDoctorale/';
        })
    }
     private _statutEcoleDoctorales: Array<StatutEcoleDoctoraleVo> = [];
     private _selectedStatutEcoleDoctorale: StatutEcoleDoctoraleVo = new StatutEcoleDoctoraleVo();
     private _statutEcoleDoctoraleSelections: Array<StatutEcoleDoctoraleVo>;
     private _createStatutEcoleDoctoraleDialog: boolean;
     private _editStatutEcoleDoctoraleDialog: boolean;
     private _viewStatutEcoleDoctoraleDialog: boolean;
     public editStatutEcoleDoctorale$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchStatutEcoleDoctorale:StatutEcoleDoctoraleVo = new StatutEcoleDoctoraleVo();


    // getters and setters


    get statutEcoleDoctorales(): Array<StatutEcoleDoctoraleVo> {
        return this._statutEcoleDoctorales == null ? this._statutEcoleDoctorales =   new Array<StatutEcoleDoctoraleVo>() : this._statutEcoleDoctorales;
       }
    set statutEcoleDoctorales(value: Array<StatutEcoleDoctoraleVo>) {
        this._statutEcoleDoctorales = value;
       }
    get selectedStatutEcoleDoctorale(): StatutEcoleDoctoraleVo {
           return this._selectedStatutEcoleDoctorale;
       }
    set selectedStatutEcoleDoctorale(value: StatutEcoleDoctoraleVo) {
        this._selectedStatutEcoleDoctorale = value;
       }
    get statutEcoleDoctoraleSelections(): Array<StatutEcoleDoctoraleVo> {
        return this._statutEcoleDoctoraleSelections;
       }
    set statutEcoleDoctoraleSelections(value: Array<StatutEcoleDoctoraleVo>) {
        this._statutEcoleDoctoraleSelections = value;
       }
    get createStatutEcoleDoctoraleDialog(): boolean {
        return this._createStatutEcoleDoctoraleDialog;
       }
    set createStatutEcoleDoctoraleDialog(value: boolean) {
        this._createStatutEcoleDoctoraleDialog = value;
       }

    get editStatutEcoleDoctoraleDialog(): boolean {
        return this._editStatutEcoleDoctoraleDialog;
       }
    set editStatutEcoleDoctoraleDialog(value: boolean) {
        this._editStatutEcoleDoctoraleDialog = value;
       }

    get viewStatutEcoleDoctoraleDialog(): boolean {
        return this._viewStatutEcoleDoctoraleDialog;
       }
    set viewStatutEcoleDoctoraleDialog(value: boolean) {
        this._viewStatutEcoleDoctoraleDialog = value;
       }
     get searchStatutEcoleDoctorale(): StatutEcoleDoctoraleVo {
        return this._searchStatutEcoleDoctorale;
       }
    set searchStatutEcoleDoctorale(value: StatutEcoleDoctoraleVo) {
        this._searchStatutEcoleDoctorale = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<StatutEcoleDoctoraleVo>>(this.API);
    }
    
    public save(): Observable<StatutEcoleDoctoraleVo> {
         return this.http.post<StatutEcoleDoctoraleVo>(this.API, this.selectedStatutEcoleDoctorale);
    }
    
    delete(statutEcoleDoctorale: StatutEcoleDoctoraleVo) {
         return this.http.delete<number>(this.API+"id/"+statutEcoleDoctorale.id);
    }


    public edit(): Observable<StatutEcoleDoctoraleVo> {
        return this.http.put<StatutEcoleDoctoraleVo>(this.API, this.selectedStatutEcoleDoctorale);
    }
    

     public findByCriteria(statutEcoleDoctorale:StatutEcoleDoctoraleVo):Observable<Array<StatutEcoleDoctoraleVo>>{
           return this.http.post<Array<StatutEcoleDoctoraleVo>>(this.API+"search",statutEcoleDoctorale);
    }



}