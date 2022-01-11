import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {CommunauteSavoirDirectionEncadrementDoctorantVo} from '../model/CommunauteSavoirDirectionEncadrementDoctorant.model';
import {DirectionEncadrementDoctorantVo} from '../model/DirectionEncadrementDoctorant.model';
import {CommunauteSavoirVo} from '../model/CommunauteSavoir.model';


@Injectable({
  providedIn: 'root'
})
export class CommunauteSavoirDirectionEncadrementDoctorantService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/communauteSavoirDirectionEncadrementDoctorant/';
        })
    }
     private _communauteSavoirDirectionEncadrementDoctorants: Array<CommunauteSavoirDirectionEncadrementDoctorantVo> = [];
     private _selectedCommunauteSavoirDirectionEncadrementDoctorant: CommunauteSavoirDirectionEncadrementDoctorantVo = new CommunauteSavoirDirectionEncadrementDoctorantVo();
     private _communauteSavoirDirectionEncadrementDoctorantSelections: Array<CommunauteSavoirDirectionEncadrementDoctorantVo>;
     private _createCommunauteSavoirDirectionEncadrementDoctorantDialog: boolean;
     private _editCommunauteSavoirDirectionEncadrementDoctorantDialog: boolean;
     private _viewCommunauteSavoirDirectionEncadrementDoctorantDialog: boolean;
     public editCommunauteSavoirDirectionEncadrementDoctorant$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchCommunauteSavoirDirectionEncadrementDoctorant:CommunauteSavoirDirectionEncadrementDoctorantVo = new CommunauteSavoirDirectionEncadrementDoctorantVo();


    // getters and setters


    get communauteSavoirDirectionEncadrementDoctorants(): Array<CommunauteSavoirDirectionEncadrementDoctorantVo> {
        return this._communauteSavoirDirectionEncadrementDoctorants == null ? this._communauteSavoirDirectionEncadrementDoctorants =   new Array<CommunauteSavoirDirectionEncadrementDoctorantVo>() : this._communauteSavoirDirectionEncadrementDoctorants;
       }
    set communauteSavoirDirectionEncadrementDoctorants(value: Array<CommunauteSavoirDirectionEncadrementDoctorantVo>) {
        this._communauteSavoirDirectionEncadrementDoctorants = value;
       }
    get selectedCommunauteSavoirDirectionEncadrementDoctorant(): CommunauteSavoirDirectionEncadrementDoctorantVo {
           return this._selectedCommunauteSavoirDirectionEncadrementDoctorant;
       }
    set selectedCommunauteSavoirDirectionEncadrementDoctorant(value: CommunauteSavoirDirectionEncadrementDoctorantVo) {
        this._selectedCommunauteSavoirDirectionEncadrementDoctorant = value;
       }
    get communauteSavoirDirectionEncadrementDoctorantSelections(): Array<CommunauteSavoirDirectionEncadrementDoctorantVo> {
        return this._communauteSavoirDirectionEncadrementDoctorantSelections;
       }
    set communauteSavoirDirectionEncadrementDoctorantSelections(value: Array<CommunauteSavoirDirectionEncadrementDoctorantVo>) {
        this._communauteSavoirDirectionEncadrementDoctorantSelections = value;
       }
    get createCommunauteSavoirDirectionEncadrementDoctorantDialog(): boolean {
        return this._createCommunauteSavoirDirectionEncadrementDoctorantDialog;
       }
    set createCommunauteSavoirDirectionEncadrementDoctorantDialog(value: boolean) {
        this._createCommunauteSavoirDirectionEncadrementDoctorantDialog = value;
       }

    get editCommunauteSavoirDirectionEncadrementDoctorantDialog(): boolean {
        return this._editCommunauteSavoirDirectionEncadrementDoctorantDialog;
       }
    set editCommunauteSavoirDirectionEncadrementDoctorantDialog(value: boolean) {
        this._editCommunauteSavoirDirectionEncadrementDoctorantDialog = value;
       }

    get viewCommunauteSavoirDirectionEncadrementDoctorantDialog(): boolean {
        return this._viewCommunauteSavoirDirectionEncadrementDoctorantDialog;
       }
    set viewCommunauteSavoirDirectionEncadrementDoctorantDialog(value: boolean) {
        this._viewCommunauteSavoirDirectionEncadrementDoctorantDialog = value;
       }
     get searchCommunauteSavoirDirectionEncadrementDoctorant(): CommunauteSavoirDirectionEncadrementDoctorantVo {
        return this._searchCommunauteSavoirDirectionEncadrementDoctorant;
       }
    set searchCommunauteSavoirDirectionEncadrementDoctorant(value: CommunauteSavoirDirectionEncadrementDoctorantVo) {
        this._searchCommunauteSavoirDirectionEncadrementDoctorant = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<CommunauteSavoirDirectionEncadrementDoctorantVo>>(this.API);
    }
    
    public save(): Observable<CommunauteSavoirDirectionEncadrementDoctorantVo> {
         return this.http.post<CommunauteSavoirDirectionEncadrementDoctorantVo>(this.API, this.selectedCommunauteSavoirDirectionEncadrementDoctorant);
    }
    
    delete(communauteSavoirDirectionEncadrementDoctorant: CommunauteSavoirDirectionEncadrementDoctorantVo) {
         return this.http.delete<number>(this.API+"id/"+communauteSavoirDirectionEncadrementDoctorant.id);
    }


    public edit(): Observable<CommunauteSavoirDirectionEncadrementDoctorantVo> {
        return this.http.put<CommunauteSavoirDirectionEncadrementDoctorantVo>(this.API, this.selectedCommunauteSavoirDirectionEncadrementDoctorant);
    }
    

     public findByCriteria(communauteSavoirDirectionEncadrementDoctorant:CommunauteSavoirDirectionEncadrementDoctorantVo):Observable<Array<CommunauteSavoirDirectionEncadrementDoctorantVo>>{
           return this.http.post<Array<CommunauteSavoirDirectionEncadrementDoctorantVo>>(this.API+"search",communauteSavoirDirectionEncadrementDoctorant);
    }



}