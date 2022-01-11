import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {InstrumentsEtDispositifsIrdChercheurVo} from '../model/InstrumentsEtDispositifsIrdChercheur.model';
import {TypeInstrumentsEtDispositifsIrdVo} from '../model/TypeInstrumentsEtDispositifsIrd.model';
import {ChercheurVo} from '../model/Chercheur.model';


@Injectable({
  providedIn: 'root'
})
export class InstrumentsEtDispositifsIrdChercheurService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/instrumentsEtDispositifsIrdChercheur/';
        })
    }
     private _instrumentsEtDispositifsIrdChercheurs: Array<InstrumentsEtDispositifsIrdChercheurVo> = [];
     private _selectedInstrumentsEtDispositifsIrdChercheur: InstrumentsEtDispositifsIrdChercheurVo = new InstrumentsEtDispositifsIrdChercheurVo();
     private _instrumentsEtDispositifsIrdChercheurSelections: Array<InstrumentsEtDispositifsIrdChercheurVo>;
     private _createInstrumentsEtDispositifsIrdChercheurDialog: boolean;
     private _editInstrumentsEtDispositifsIrdChercheurDialog: boolean;
     private _viewInstrumentsEtDispositifsIrdChercheurDialog: boolean;
     public editInstrumentsEtDispositifsIrdChercheur$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchInstrumentsEtDispositifsIrdChercheur:InstrumentsEtDispositifsIrdChercheurVo = new InstrumentsEtDispositifsIrdChercheurVo();


    // getters and setters


    get instrumentsEtDispositifsIrdChercheurs(): Array<InstrumentsEtDispositifsIrdChercheurVo> {
        return this._instrumentsEtDispositifsIrdChercheurs == null ? this._instrumentsEtDispositifsIrdChercheurs =   new Array<InstrumentsEtDispositifsIrdChercheurVo>() : this._instrumentsEtDispositifsIrdChercheurs;
       }
    set instrumentsEtDispositifsIrdChercheurs(value: Array<InstrumentsEtDispositifsIrdChercheurVo>) {
        this._instrumentsEtDispositifsIrdChercheurs = value;
       }
    get selectedInstrumentsEtDispositifsIrdChercheur(): InstrumentsEtDispositifsIrdChercheurVo {
           return this._selectedInstrumentsEtDispositifsIrdChercheur;
       }
    set selectedInstrumentsEtDispositifsIrdChercheur(value: InstrumentsEtDispositifsIrdChercheurVo) {
        this._selectedInstrumentsEtDispositifsIrdChercheur = value;
       }
    get instrumentsEtDispositifsIrdChercheurSelections(): Array<InstrumentsEtDispositifsIrdChercheurVo> {
        return this._instrumentsEtDispositifsIrdChercheurSelections;
       }
    set instrumentsEtDispositifsIrdChercheurSelections(value: Array<InstrumentsEtDispositifsIrdChercheurVo>) {
        this._instrumentsEtDispositifsIrdChercheurSelections = value;
       }
    get createInstrumentsEtDispositifsIrdChercheurDialog(): boolean {
        return this._createInstrumentsEtDispositifsIrdChercheurDialog;
       }
    set createInstrumentsEtDispositifsIrdChercheurDialog(value: boolean) {
        this._createInstrumentsEtDispositifsIrdChercheurDialog = value;
       }

    get editInstrumentsEtDispositifsIrdChercheurDialog(): boolean {
        return this._editInstrumentsEtDispositifsIrdChercheurDialog;
       }
    set editInstrumentsEtDispositifsIrdChercheurDialog(value: boolean) {
        this._editInstrumentsEtDispositifsIrdChercheurDialog = value;
       }

    get viewInstrumentsEtDispositifsIrdChercheurDialog(): boolean {
        return this._viewInstrumentsEtDispositifsIrdChercheurDialog;
       }
    set viewInstrumentsEtDispositifsIrdChercheurDialog(value: boolean) {
        this._viewInstrumentsEtDispositifsIrdChercheurDialog = value;
       }
     get searchInstrumentsEtDispositifsIrdChercheur(): InstrumentsEtDispositifsIrdChercheurVo {
        return this._searchInstrumentsEtDispositifsIrdChercheur;
       }
    set searchInstrumentsEtDispositifsIrdChercheur(value: InstrumentsEtDispositifsIrdChercheurVo) {
        this._searchInstrumentsEtDispositifsIrdChercheur = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<InstrumentsEtDispositifsIrdChercheurVo>>(this.API);
    }
    
    public save(): Observable<InstrumentsEtDispositifsIrdChercheurVo> {
         return this.http.post<InstrumentsEtDispositifsIrdChercheurVo>(this.API, this.selectedInstrumentsEtDispositifsIrdChercheur);
    }
    
    delete(instrumentsEtDispositifsIrdChercheur: InstrumentsEtDispositifsIrdChercheurVo) {
         return this.http.delete<number>(this.API+"id/"+instrumentsEtDispositifsIrdChercheur.id);
    }


    public edit(): Observable<InstrumentsEtDispositifsIrdChercheurVo> {
        return this.http.put<InstrumentsEtDispositifsIrdChercheurVo>(this.API, this.selectedInstrumentsEtDispositifsIrdChercheur);
    }
    

     public findByCriteria(instrumentsEtDispositifsIrdChercheur:InstrumentsEtDispositifsIrdChercheurVo):Observable<Array<InstrumentsEtDispositifsIrdChercheurVo>>{
           return this.http.post<Array<InstrumentsEtDispositifsIrdChercheurVo>>(this.API+"search",instrumentsEtDispositifsIrdChercheur);
    }



}