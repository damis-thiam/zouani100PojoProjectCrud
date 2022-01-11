import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {ResponsabilitePedagogiqueEcoleDoctoraleVo} from '../model/ResponsabilitePedagogiqueEcoleDoctorale.model';
import {EcoleDoctoraleVo} from '../model/EcoleDoctorale.model';
import {StatutEcoleDoctoraleVo} from '../model/StatutEcoleDoctorale.model';
import {EtablissementVo} from '../model/Etablissement.model';
import {ChercheurVo} from '../model/Chercheur.model';


@Injectable({
  providedIn: 'root'
})
export class ResponsabilitePedagogiqueEcoleDoctoraleService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/responsabilitePedagogiqueEcoleDoctorale/';
        })
    }
     private _responsabilitePedagogiqueEcoleDoctorales: Array<ResponsabilitePedagogiqueEcoleDoctoraleVo> = [];
     private _selectedResponsabilitePedagogiqueEcoleDoctorale: ResponsabilitePedagogiqueEcoleDoctoraleVo = new ResponsabilitePedagogiqueEcoleDoctoraleVo();
     private _responsabilitePedagogiqueEcoleDoctoraleSelections: Array<ResponsabilitePedagogiqueEcoleDoctoraleVo>;
     private _createResponsabilitePedagogiqueEcoleDoctoraleDialog: boolean;
     private _editResponsabilitePedagogiqueEcoleDoctoraleDialog: boolean;
     private _viewResponsabilitePedagogiqueEcoleDoctoraleDialog: boolean;
     public editResponsabilitePedagogiqueEcoleDoctorale$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchResponsabilitePedagogiqueEcoleDoctorale:ResponsabilitePedagogiqueEcoleDoctoraleVo = new ResponsabilitePedagogiqueEcoleDoctoraleVo();


    // getters and setters


    get responsabilitePedagogiqueEcoleDoctorales(): Array<ResponsabilitePedagogiqueEcoleDoctoraleVo> {
        return this._responsabilitePedagogiqueEcoleDoctorales == null ? this._responsabilitePedagogiqueEcoleDoctorales =   new Array<ResponsabilitePedagogiqueEcoleDoctoraleVo>() : this._responsabilitePedagogiqueEcoleDoctorales;
       }
    set responsabilitePedagogiqueEcoleDoctorales(value: Array<ResponsabilitePedagogiqueEcoleDoctoraleVo>) {
        this._responsabilitePedagogiqueEcoleDoctorales = value;
       }
    get selectedResponsabilitePedagogiqueEcoleDoctorale(): ResponsabilitePedagogiqueEcoleDoctoraleVo {
           return this._selectedResponsabilitePedagogiqueEcoleDoctorale;
       }
    set selectedResponsabilitePedagogiqueEcoleDoctorale(value: ResponsabilitePedagogiqueEcoleDoctoraleVo) {
        this._selectedResponsabilitePedagogiqueEcoleDoctorale = value;
       }
    get responsabilitePedagogiqueEcoleDoctoraleSelections(): Array<ResponsabilitePedagogiqueEcoleDoctoraleVo> {
        return this._responsabilitePedagogiqueEcoleDoctoraleSelections;
       }
    set responsabilitePedagogiqueEcoleDoctoraleSelections(value: Array<ResponsabilitePedagogiqueEcoleDoctoraleVo>) {
        this._responsabilitePedagogiqueEcoleDoctoraleSelections = value;
       }
    get createResponsabilitePedagogiqueEcoleDoctoraleDialog(): boolean {
        return this._createResponsabilitePedagogiqueEcoleDoctoraleDialog;
       }
    set createResponsabilitePedagogiqueEcoleDoctoraleDialog(value: boolean) {
        this._createResponsabilitePedagogiqueEcoleDoctoraleDialog = value;
       }

    get editResponsabilitePedagogiqueEcoleDoctoraleDialog(): boolean {
        return this._editResponsabilitePedagogiqueEcoleDoctoraleDialog;
       }
    set editResponsabilitePedagogiqueEcoleDoctoraleDialog(value: boolean) {
        this._editResponsabilitePedagogiqueEcoleDoctoraleDialog = value;
       }

    get viewResponsabilitePedagogiqueEcoleDoctoraleDialog(): boolean {
        return this._viewResponsabilitePedagogiqueEcoleDoctoraleDialog;
       }
    set viewResponsabilitePedagogiqueEcoleDoctoraleDialog(value: boolean) {
        this._viewResponsabilitePedagogiqueEcoleDoctoraleDialog = value;
       }
     get searchResponsabilitePedagogiqueEcoleDoctorale(): ResponsabilitePedagogiqueEcoleDoctoraleVo {
        return this._searchResponsabilitePedagogiqueEcoleDoctorale;
       }
    set searchResponsabilitePedagogiqueEcoleDoctorale(value: ResponsabilitePedagogiqueEcoleDoctoraleVo) {
        this._searchResponsabilitePedagogiqueEcoleDoctorale = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<ResponsabilitePedagogiqueEcoleDoctoraleVo>>(this.API);
    }
    
    public save(): Observable<ResponsabilitePedagogiqueEcoleDoctoraleVo> {
         return this.http.post<ResponsabilitePedagogiqueEcoleDoctoraleVo>(this.API, this.selectedResponsabilitePedagogiqueEcoleDoctorale);
    }
    
    delete(responsabilitePedagogiqueEcoleDoctorale: ResponsabilitePedagogiqueEcoleDoctoraleVo) {
         return this.http.delete<number>(this.API+"id/"+responsabilitePedagogiqueEcoleDoctorale.id);
    }


    public edit(): Observable<ResponsabilitePedagogiqueEcoleDoctoraleVo> {
        return this.http.put<ResponsabilitePedagogiqueEcoleDoctoraleVo>(this.API, this.selectedResponsabilitePedagogiqueEcoleDoctorale);
    }
    

     public findByCriteria(responsabilitePedagogiqueEcoleDoctorale:ResponsabilitePedagogiqueEcoleDoctoraleVo):Observable<Array<ResponsabilitePedagogiqueEcoleDoctoraleVo>>{
           return this.http.post<Array<ResponsabilitePedagogiqueEcoleDoctoraleVo>>(this.API+"search",responsabilitePedagogiqueEcoleDoctorale);
    }



}