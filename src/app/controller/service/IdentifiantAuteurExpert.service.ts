import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {IdentifiantAuteurExpertVo} from '../model/IdentifiantAuteurExpert.model';
import {IdentifiantRechercheVo} from '../model/IdentifiantRecherche.model';
import {ChercheurVo} from '../model/Chercheur.model';


@Injectable({
  providedIn: 'root'
})
export class IdentifiantAuteurExpertService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/identifiantAuteurExpert/';
        })
    }
     private _identifiantAuteurExperts: Array<IdentifiantAuteurExpertVo> = [];
     private _selectedIdentifiantAuteurExpert: IdentifiantAuteurExpertVo = new IdentifiantAuteurExpertVo();
     private _identifiantAuteurExpertSelections: Array<IdentifiantAuteurExpertVo>;
     private _createIdentifiantAuteurExpertDialog: boolean;
     private _editIdentifiantAuteurExpertDialog: boolean;
     private _viewIdentifiantAuteurExpertDialog: boolean;
     public editIdentifiantAuteurExpert$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchIdentifiantAuteurExpert:IdentifiantAuteurExpertVo = new IdentifiantAuteurExpertVo();


    // getters and setters


    get identifiantAuteurExperts(): Array<IdentifiantAuteurExpertVo> {
        return this._identifiantAuteurExperts == null ? this._identifiantAuteurExperts =   new Array<IdentifiantAuteurExpertVo>() : this._identifiantAuteurExperts;
       }
    set identifiantAuteurExperts(value: Array<IdentifiantAuteurExpertVo>) {
        this._identifiantAuteurExperts = value;
       }
    get selectedIdentifiantAuteurExpert(): IdentifiantAuteurExpertVo {
           return this._selectedIdentifiantAuteurExpert;
       }
    set selectedIdentifiantAuteurExpert(value: IdentifiantAuteurExpertVo) {
        this._selectedIdentifiantAuteurExpert = value;
       }
    get identifiantAuteurExpertSelections(): Array<IdentifiantAuteurExpertVo> {
        return this._identifiantAuteurExpertSelections;
       }
    set identifiantAuteurExpertSelections(value: Array<IdentifiantAuteurExpertVo>) {
        this._identifiantAuteurExpertSelections = value;
       }
    get createIdentifiantAuteurExpertDialog(): boolean {
        return this._createIdentifiantAuteurExpertDialog;
       }
    set createIdentifiantAuteurExpertDialog(value: boolean) {
        this._createIdentifiantAuteurExpertDialog = value;
       }

    get editIdentifiantAuteurExpertDialog(): boolean {
        return this._editIdentifiantAuteurExpertDialog;
       }
    set editIdentifiantAuteurExpertDialog(value: boolean) {
        this._editIdentifiantAuteurExpertDialog = value;
       }

    get viewIdentifiantAuteurExpertDialog(): boolean {
        return this._viewIdentifiantAuteurExpertDialog;
       }
    set viewIdentifiantAuteurExpertDialog(value: boolean) {
        this._viewIdentifiantAuteurExpertDialog = value;
       }
     get searchIdentifiantAuteurExpert(): IdentifiantAuteurExpertVo {
        return this._searchIdentifiantAuteurExpert;
       }
    set searchIdentifiantAuteurExpert(value: IdentifiantAuteurExpertVo) {
        this._searchIdentifiantAuteurExpert = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<IdentifiantAuteurExpertVo>>(this.API);
    }
    
    public save(): Observable<IdentifiantAuteurExpertVo> {
         return this.http.post<IdentifiantAuteurExpertVo>(this.API, this.selectedIdentifiantAuteurExpert);
    }
    
    delete(identifiantAuteurExpert: IdentifiantAuteurExpertVo) {
         return this.http.delete<number>(this.API+"id/"+identifiantAuteurExpert.id);
    }


    public edit(): Observable<IdentifiantAuteurExpertVo> {
        return this.http.put<IdentifiantAuteurExpertVo>(this.API, this.selectedIdentifiantAuteurExpert);
    }
    

     public findByCriteria(identifiantAuteurExpert:IdentifiantAuteurExpertVo):Observable<Array<IdentifiantAuteurExpertVo>>{
           return this.http.post<Array<IdentifiantAuteurExpertVo>>(this.API+"search",identifiantAuteurExpert);
    }



}