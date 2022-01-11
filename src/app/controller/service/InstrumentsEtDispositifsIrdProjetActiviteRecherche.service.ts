import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {InstrumentsEtDispositifsIrdProjetActiviteRechercheVo} from '../model/InstrumentsEtDispositifsIrdProjetActiviteRecherche.model';
import {ProjetActiviteRechercheVo} from '../model/ProjetActiviteRecherche.model';
import {InstrumentsEtDispositifsIrdVo} from '../model/InstrumentsEtDispositifsIrd.model';


@Injectable({
  providedIn: 'root'
})
export class InstrumentsEtDispositifsIrdProjetActiviteRechercheService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/instrumentsEtDispositifsIrdProjetActiviteRecherche/';
        })
    }
     private _instrumentsEtDispositifsIrdProjetActiviteRecherches: Array<InstrumentsEtDispositifsIrdProjetActiviteRechercheVo> = [];
     private _selectedInstrumentsEtDispositifsIrdProjetActiviteRecherche: InstrumentsEtDispositifsIrdProjetActiviteRechercheVo = new InstrumentsEtDispositifsIrdProjetActiviteRechercheVo();
     private _instrumentsEtDispositifsIrdProjetActiviteRechercheSelections: Array<InstrumentsEtDispositifsIrdProjetActiviteRechercheVo>;
     private _createInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog: boolean;
     private _editInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog: boolean;
     private _viewInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog: boolean;
     public editInstrumentsEtDispositifsIrdProjetActiviteRecherche$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchInstrumentsEtDispositifsIrdProjetActiviteRecherche:InstrumentsEtDispositifsIrdProjetActiviteRechercheVo = new InstrumentsEtDispositifsIrdProjetActiviteRechercheVo();


    // getters and setters


    get instrumentsEtDispositifsIrdProjetActiviteRecherches(): Array<InstrumentsEtDispositifsIrdProjetActiviteRechercheVo> {
        return this._instrumentsEtDispositifsIrdProjetActiviteRecherches == null ? this._instrumentsEtDispositifsIrdProjetActiviteRecherches =   new Array<InstrumentsEtDispositifsIrdProjetActiviteRechercheVo>() : this._instrumentsEtDispositifsIrdProjetActiviteRecherches;
       }
    set instrumentsEtDispositifsIrdProjetActiviteRecherches(value: Array<InstrumentsEtDispositifsIrdProjetActiviteRechercheVo>) {
        this._instrumentsEtDispositifsIrdProjetActiviteRecherches = value;
       }
    get selectedInstrumentsEtDispositifsIrdProjetActiviteRecherche(): InstrumentsEtDispositifsIrdProjetActiviteRechercheVo {
           return this._selectedInstrumentsEtDispositifsIrdProjetActiviteRecherche;
       }
    set selectedInstrumentsEtDispositifsIrdProjetActiviteRecherche(value: InstrumentsEtDispositifsIrdProjetActiviteRechercheVo) {
        this._selectedInstrumentsEtDispositifsIrdProjetActiviteRecherche = value;
       }
    get instrumentsEtDispositifsIrdProjetActiviteRechercheSelections(): Array<InstrumentsEtDispositifsIrdProjetActiviteRechercheVo> {
        return this._instrumentsEtDispositifsIrdProjetActiviteRechercheSelections;
       }
    set instrumentsEtDispositifsIrdProjetActiviteRechercheSelections(value: Array<InstrumentsEtDispositifsIrdProjetActiviteRechercheVo>) {
        this._instrumentsEtDispositifsIrdProjetActiviteRechercheSelections = value;
       }
    get createInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog(): boolean {
        return this._createInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog;
       }
    set createInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog(value: boolean) {
        this._createInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog = value;
       }

    get editInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog(): boolean {
        return this._editInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog;
       }
    set editInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog(value: boolean) {
        this._editInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog = value;
       }

    get viewInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog(): boolean {
        return this._viewInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog;
       }
    set viewInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog(value: boolean) {
        this._viewInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog = value;
       }
     get searchInstrumentsEtDispositifsIrdProjetActiviteRecherche(): InstrumentsEtDispositifsIrdProjetActiviteRechercheVo {
        return this._searchInstrumentsEtDispositifsIrdProjetActiviteRecherche;
       }
    set searchInstrumentsEtDispositifsIrdProjetActiviteRecherche(value: InstrumentsEtDispositifsIrdProjetActiviteRechercheVo) {
        this._searchInstrumentsEtDispositifsIrdProjetActiviteRecherche = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<InstrumentsEtDispositifsIrdProjetActiviteRechercheVo>>(this.API);
    }
    
    public save(): Observable<InstrumentsEtDispositifsIrdProjetActiviteRechercheVo> {
         return this.http.post<InstrumentsEtDispositifsIrdProjetActiviteRechercheVo>(this.API, this.selectedInstrumentsEtDispositifsIrdProjetActiviteRecherche);
    }
    
    delete(instrumentsEtDispositifsIrdProjetActiviteRecherche: InstrumentsEtDispositifsIrdProjetActiviteRechercheVo) {
         return this.http.delete<number>(this.API+"id/"+instrumentsEtDispositifsIrdProjetActiviteRecherche.id);
    }


    public edit(): Observable<InstrumentsEtDispositifsIrdProjetActiviteRechercheVo> {
        return this.http.put<InstrumentsEtDispositifsIrdProjetActiviteRechercheVo>(this.API, this.selectedInstrumentsEtDispositifsIrdProjetActiviteRecherche);
    }
    

     public findByCriteria(instrumentsEtDispositifsIrdProjetActiviteRecherche:InstrumentsEtDispositifsIrdProjetActiviteRechercheVo):Observable<Array<InstrumentsEtDispositifsIrdProjetActiviteRechercheVo>>{
           return this.http.post<Array<InstrumentsEtDispositifsIrdProjetActiviteRechercheVo>>(this.API+"search",instrumentsEtDispositifsIrdProjetActiviteRecherche);
    }



}