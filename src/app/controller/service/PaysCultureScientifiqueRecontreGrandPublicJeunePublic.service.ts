import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../model/PaysCultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {CultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../model/CultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {PaysVo} from '../model/Pays.model';


@Injectable({
  providedIn: 'root'
})
export class PaysCultureScientifiqueRecontreGrandPublicJeunePublicService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/paysCultureScientifiqueRecontreGrandPublicJeunePublic/';
        })
    }
     private _paysCultureScientifiqueRecontreGrandPublicJeunePublics: Array<PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo> = [];
     private _selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic: PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo = new PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo();
     private _paysCultureScientifiqueRecontreGrandPublicJeunePublicSelections: Array<PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo>;
     private _createPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog: boolean;
     private _editPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog: boolean;
     private _viewPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog: boolean;
     public editPaysCultureScientifiqueRecontreGrandPublicJeunePublic$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchPaysCultureScientifiqueRecontreGrandPublicJeunePublic:PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo = new PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo();


    // getters and setters


    get paysCultureScientifiqueRecontreGrandPublicJeunePublics(): Array<PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo> {
        return this._paysCultureScientifiqueRecontreGrandPublicJeunePublics == null ? this._paysCultureScientifiqueRecontreGrandPublicJeunePublics =   new Array<PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo>() : this._paysCultureScientifiqueRecontreGrandPublicJeunePublics;
       }
    set paysCultureScientifiqueRecontreGrandPublicJeunePublics(value: Array<PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo>) {
        this._paysCultureScientifiqueRecontreGrandPublicJeunePublics = value;
       }
    get selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic(): PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo {
           return this._selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic;
       }
    set selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic(value: PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo) {
        this._selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic = value;
       }
    get paysCultureScientifiqueRecontreGrandPublicJeunePublicSelections(): Array<PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo> {
        return this._paysCultureScientifiqueRecontreGrandPublicJeunePublicSelections;
       }
    set paysCultureScientifiqueRecontreGrandPublicJeunePublicSelections(value: Array<PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo>) {
        this._paysCultureScientifiqueRecontreGrandPublicJeunePublicSelections = value;
       }
    get createPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog(): boolean {
        return this._createPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
    set createPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this._createPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog = value;
       }

    get editPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog(): boolean {
        return this._editPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
    set editPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this._editPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog = value;
       }

    get viewPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog(): boolean {
        return this._viewPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
    set viewPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this._viewPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog = value;
       }
     get searchPaysCultureScientifiqueRecontreGrandPublicJeunePublic(): PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo {
        return this._searchPaysCultureScientifiqueRecontreGrandPublicJeunePublic;
       }
    set searchPaysCultureScientifiqueRecontreGrandPublicJeunePublic(value: PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo) {
        this._searchPaysCultureScientifiqueRecontreGrandPublicJeunePublic = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo>>(this.API);
    }
    
    public save(): Observable<PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo> {
         return this.http.post<PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo>(this.API, this.selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic);
    }
    
    delete(paysCultureScientifiqueRecontreGrandPublicJeunePublic: PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo) {
         return this.http.delete<number>(this.API+"id/"+paysCultureScientifiqueRecontreGrandPublicJeunePublic.id);
    }


    public edit(): Observable<PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo> {
        return this.http.put<PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo>(this.API, this.selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic);
    }
    

     public findByCriteria(paysCultureScientifiqueRecontreGrandPublicJeunePublic:PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo):Observable<Array<PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo>>{
           return this.http.post<Array<PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo>>(this.API+"search",paysCultureScientifiqueRecontreGrandPublicJeunePublic);
    }



}