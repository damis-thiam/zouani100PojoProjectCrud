import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {CaracterisationVo} from '../model/Caracterisation.model';


@Injectable({
  providedIn: 'root'
})
export class CaracterisationService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/caracterisation/';
        })
    }
     private _caracterisations: Array<CaracterisationVo> = [];
     private _selectedCaracterisation: CaracterisationVo = new CaracterisationVo();
     private _caracterisationSelections: Array<CaracterisationVo>;
     private _createCaracterisationDialog: boolean;
     private _editCaracterisationDialog: boolean;
     private _viewCaracterisationDialog: boolean;
     public editCaracterisation$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchCaracterisation:CaracterisationVo = new CaracterisationVo();


    // getters and setters


    get caracterisations(): Array<CaracterisationVo> {
        return this._caracterisations == null ? this._caracterisations =   new Array<CaracterisationVo>() : this._caracterisations;
       }
    set caracterisations(value: Array<CaracterisationVo>) {
        this._caracterisations = value;
       }
    get selectedCaracterisation(): CaracterisationVo {
           return this._selectedCaracterisation;
       }
    set selectedCaracterisation(value: CaracterisationVo) {
        this._selectedCaracterisation = value;
       }
    get caracterisationSelections(): Array<CaracterisationVo> {
        return this._caracterisationSelections;
       }
    set caracterisationSelections(value: Array<CaracterisationVo>) {
        this._caracterisationSelections = value;
       }
    get createCaracterisationDialog(): boolean {
        return this._createCaracterisationDialog;
       }
    set createCaracterisationDialog(value: boolean) {
        this._createCaracterisationDialog = value;
       }

    get editCaracterisationDialog(): boolean {
        return this._editCaracterisationDialog;
       }
    set editCaracterisationDialog(value: boolean) {
        this._editCaracterisationDialog = value;
       }

    get viewCaracterisationDialog(): boolean {
        return this._viewCaracterisationDialog;
       }
    set viewCaracterisationDialog(value: boolean) {
        this._viewCaracterisationDialog = value;
       }
     get searchCaracterisation(): CaracterisationVo {
        return this._searchCaracterisation;
       }
    set searchCaracterisation(value: CaracterisationVo) {
        this._searchCaracterisation = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<CaracterisationVo>>(this.API);
    }
    
    public save(): Observable<CaracterisationVo> {
         return this.http.post<CaracterisationVo>(this.API, this.selectedCaracterisation);
    }
    
    delete(caracterisation: CaracterisationVo) {
         return this.http.delete<number>(this.API+"id/"+caracterisation.id);
    }


    public edit(): Observable<CaracterisationVo> {
        return this.http.put<CaracterisationVo>(this.API, this.selectedCaracterisation);
    }
    

     public findByCriteria(caracterisation:CaracterisationVo):Observable<Array<CaracterisationVo>>{
           return this.http.post<Array<CaracterisationVo>>(this.API+"search",caracterisation);
    }



}