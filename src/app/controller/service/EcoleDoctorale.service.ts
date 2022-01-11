import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {EcoleDoctoraleVo} from '../model/EcoleDoctorale.model';
import {PaysVo} from '../model/Pays.model';


@Injectable({
  providedIn: 'root'
})
export class EcoleDoctoraleService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/ecoleDoctorale/';
        })
    }
     private _ecoleDoctorales: Array<EcoleDoctoraleVo> = [];
     private _selectedEcoleDoctorale: EcoleDoctoraleVo = new EcoleDoctoraleVo();
     private _ecoleDoctoraleSelections: Array<EcoleDoctoraleVo>;
     private _createEcoleDoctoraleDialog: boolean;
     private _editEcoleDoctoraleDialog: boolean;
     private _viewEcoleDoctoraleDialog: boolean;
     public editEcoleDoctorale$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchEcoleDoctorale:EcoleDoctoraleVo = new EcoleDoctoraleVo();


    // getters and setters


    get ecoleDoctorales(): Array<EcoleDoctoraleVo> {
        return this._ecoleDoctorales == null ? this._ecoleDoctorales =   new Array<EcoleDoctoraleVo>() : this._ecoleDoctorales;
       }
    set ecoleDoctorales(value: Array<EcoleDoctoraleVo>) {
        this._ecoleDoctorales = value;
       }
    get selectedEcoleDoctorale(): EcoleDoctoraleVo {
           return this._selectedEcoleDoctorale;
       }
    set selectedEcoleDoctorale(value: EcoleDoctoraleVo) {
        this._selectedEcoleDoctorale = value;
       }
    get ecoleDoctoraleSelections(): Array<EcoleDoctoraleVo> {
        return this._ecoleDoctoraleSelections;
       }
    set ecoleDoctoraleSelections(value: Array<EcoleDoctoraleVo>) {
        this._ecoleDoctoraleSelections = value;
       }
    get createEcoleDoctoraleDialog(): boolean {
        return this._createEcoleDoctoraleDialog;
       }
    set createEcoleDoctoraleDialog(value: boolean) {
        this._createEcoleDoctoraleDialog = value;
       }

    get editEcoleDoctoraleDialog(): boolean {
        return this._editEcoleDoctoraleDialog;
       }
    set editEcoleDoctoraleDialog(value: boolean) {
        this._editEcoleDoctoraleDialog = value;
       }

    get viewEcoleDoctoraleDialog(): boolean {
        return this._viewEcoleDoctoraleDialog;
       }
    set viewEcoleDoctoraleDialog(value: boolean) {
        this._viewEcoleDoctoraleDialog = value;
       }
     get searchEcoleDoctorale(): EcoleDoctoraleVo {
        return this._searchEcoleDoctorale;
       }
    set searchEcoleDoctorale(value: EcoleDoctoraleVo) {
        this._searchEcoleDoctorale = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<EcoleDoctoraleVo>>(this.API);
    }
    
    public save(): Observable<EcoleDoctoraleVo> {
         return this.http.post<EcoleDoctoraleVo>(this.API, this.selectedEcoleDoctorale);
    }
    
    delete(ecoleDoctorale: EcoleDoctoraleVo) {
         return this.http.delete<number>(this.API+"id/"+ecoleDoctorale.id);
    }


    public edit(): Observable<EcoleDoctoraleVo> {
        return this.http.put<EcoleDoctoraleVo>(this.API, this.selectedEcoleDoctorale);
    }
    

     public findByCriteria(ecoleDoctorale:EcoleDoctoraleVo):Observable<Array<EcoleDoctoraleVo>>{
           return this.http.post<Array<EcoleDoctoraleVo>>(this.API+"search",ecoleDoctorale);
    }



}