import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {ZoneActiviteInteractionRechercheVo} from '../model/ZoneActiviteInteractionRecherche.model';
import {ChercheurVo} from '../model/Chercheur.model';


@Injectable({
  providedIn: 'root'
})
export class ZoneActiviteInteractionRechercheService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/zoneActiviteInteractionRecherche/';
        })
    }
     private _zoneActiviteInteractionRecherches: Array<ZoneActiviteInteractionRechercheVo> = [];
     private _selectedZoneActiviteInteractionRecherche: ZoneActiviteInteractionRechercheVo = new ZoneActiviteInteractionRechercheVo();
     private _zoneActiviteInteractionRechercheSelections: Array<ZoneActiviteInteractionRechercheVo>;
     private _createZoneActiviteInteractionRechercheDialog: boolean;
     private _editZoneActiviteInteractionRechercheDialog: boolean;
     private _viewZoneActiviteInteractionRechercheDialog: boolean;
     public editZoneActiviteInteractionRecherche$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchZoneActiviteInteractionRecherche:ZoneActiviteInteractionRechercheVo = new ZoneActiviteInteractionRechercheVo();


    // getters and setters


    get zoneActiviteInteractionRecherches(): Array<ZoneActiviteInteractionRechercheVo> {
        return this._zoneActiviteInteractionRecherches == null ? this._zoneActiviteInteractionRecherches =   new Array<ZoneActiviteInteractionRechercheVo>() : this._zoneActiviteInteractionRecherches;
       }
    set zoneActiviteInteractionRecherches(value: Array<ZoneActiviteInteractionRechercheVo>) {
        this._zoneActiviteInteractionRecherches = value;
       }
    get selectedZoneActiviteInteractionRecherche(): ZoneActiviteInteractionRechercheVo {
           return this._selectedZoneActiviteInteractionRecherche;
       }
    set selectedZoneActiviteInteractionRecherche(value: ZoneActiviteInteractionRechercheVo) {
        this._selectedZoneActiviteInteractionRecherche = value;
       }
    get zoneActiviteInteractionRechercheSelections(): Array<ZoneActiviteInteractionRechercheVo> {
        return this._zoneActiviteInteractionRechercheSelections;
       }
    set zoneActiviteInteractionRechercheSelections(value: Array<ZoneActiviteInteractionRechercheVo>) {
        this._zoneActiviteInteractionRechercheSelections = value;
       }
    get createZoneActiviteInteractionRechercheDialog(): boolean {
        return this._createZoneActiviteInteractionRechercheDialog;
       }
    set createZoneActiviteInteractionRechercheDialog(value: boolean) {
        this._createZoneActiviteInteractionRechercheDialog = value;
       }

    get editZoneActiviteInteractionRechercheDialog(): boolean {
        return this._editZoneActiviteInteractionRechercheDialog;
       }
    set editZoneActiviteInteractionRechercheDialog(value: boolean) {
        this._editZoneActiviteInteractionRechercheDialog = value;
       }

    get viewZoneActiviteInteractionRechercheDialog(): boolean {
        return this._viewZoneActiviteInteractionRechercheDialog;
       }
    set viewZoneActiviteInteractionRechercheDialog(value: boolean) {
        this._viewZoneActiviteInteractionRechercheDialog = value;
       }
     get searchZoneActiviteInteractionRecherche(): ZoneActiviteInteractionRechercheVo {
        return this._searchZoneActiviteInteractionRecherche;
       }
    set searchZoneActiviteInteractionRecherche(value: ZoneActiviteInteractionRechercheVo) {
        this._searchZoneActiviteInteractionRecherche = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<ZoneActiviteInteractionRechercheVo>>(this.API);
    }
    
    public save(): Observable<ZoneActiviteInteractionRechercheVo> {
         return this.http.post<ZoneActiviteInteractionRechercheVo>(this.API, this.selectedZoneActiviteInteractionRecherche);
    }
    
    delete(zoneActiviteInteractionRecherche: ZoneActiviteInteractionRechercheVo) {
         return this.http.delete<number>(this.API+"id/"+zoneActiviteInteractionRecherche.id);
    }


    public edit(): Observable<ZoneActiviteInteractionRechercheVo> {
        return this.http.put<ZoneActiviteInteractionRechercheVo>(this.API, this.selectedZoneActiviteInteractionRecherche);
    }
    

     public findByCriteria(zoneActiviteInteractionRecherche:ZoneActiviteInteractionRechercheVo):Observable<Array<ZoneActiviteInteractionRechercheVo>>{
           return this.http.post<Array<ZoneActiviteInteractionRechercheVo>>(this.API+"search",zoneActiviteInteractionRecherche);
    }



}