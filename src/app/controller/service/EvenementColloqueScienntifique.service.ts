import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {EvenementColloqueScienntifiqueVo} from '../model/EvenementColloqueScienntifique.model';
import {ModaliteVo} from '../model/Modalite.model';
import {PaysVo} from '../model/Pays.model';


@Injectable({
  providedIn: 'root'
})
export class EvenementColloqueScienntifiqueService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/evenementColloqueScienntifique/';
        })
    }
     private _evenementColloqueScienntifiques: Array<EvenementColloqueScienntifiqueVo> = [];
     private _selectedEvenementColloqueScienntifique: EvenementColloqueScienntifiqueVo = new EvenementColloqueScienntifiqueVo();
     private _evenementColloqueScienntifiqueSelections: Array<EvenementColloqueScienntifiqueVo>;
     private _createEvenementColloqueScienntifiqueDialog: boolean;
     private _editEvenementColloqueScienntifiqueDialog: boolean;
     private _viewEvenementColloqueScienntifiqueDialog: boolean;
     public editEvenementColloqueScienntifique$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchEvenementColloqueScienntifique:EvenementColloqueScienntifiqueVo = new EvenementColloqueScienntifiqueVo();


    // getters and setters


    get evenementColloqueScienntifiques(): Array<EvenementColloqueScienntifiqueVo> {
        return this._evenementColloqueScienntifiques == null ? this._evenementColloqueScienntifiques =   new Array<EvenementColloqueScienntifiqueVo>() : this._evenementColloqueScienntifiques;
       }
    set evenementColloqueScienntifiques(value: Array<EvenementColloqueScienntifiqueVo>) {
        this._evenementColloqueScienntifiques = value;
       }
    get selectedEvenementColloqueScienntifique(): EvenementColloqueScienntifiqueVo {
           return this._selectedEvenementColloqueScienntifique;
       }
    set selectedEvenementColloqueScienntifique(value: EvenementColloqueScienntifiqueVo) {
        this._selectedEvenementColloqueScienntifique = value;
       }
    get evenementColloqueScienntifiqueSelections(): Array<EvenementColloqueScienntifiqueVo> {
        return this._evenementColloqueScienntifiqueSelections;
       }
    set evenementColloqueScienntifiqueSelections(value: Array<EvenementColloqueScienntifiqueVo>) {
        this._evenementColloqueScienntifiqueSelections = value;
       }
    get createEvenementColloqueScienntifiqueDialog(): boolean {
        return this._createEvenementColloqueScienntifiqueDialog;
       }
    set createEvenementColloqueScienntifiqueDialog(value: boolean) {
        this._createEvenementColloqueScienntifiqueDialog = value;
       }

    get editEvenementColloqueScienntifiqueDialog(): boolean {
        return this._editEvenementColloqueScienntifiqueDialog;
       }
    set editEvenementColloqueScienntifiqueDialog(value: boolean) {
        this._editEvenementColloqueScienntifiqueDialog = value;
       }

    get viewEvenementColloqueScienntifiqueDialog(): boolean {
        return this._viewEvenementColloqueScienntifiqueDialog;
       }
    set viewEvenementColloqueScienntifiqueDialog(value: boolean) {
        this._viewEvenementColloqueScienntifiqueDialog = value;
       }
     get searchEvenementColloqueScienntifique(): EvenementColloqueScienntifiqueVo {
        return this._searchEvenementColloqueScienntifique;
       }
    set searchEvenementColloqueScienntifique(value: EvenementColloqueScienntifiqueVo) {
        this._searchEvenementColloqueScienntifique = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<EvenementColloqueScienntifiqueVo>>(this.API);
    }
    
    public save(): Observable<EvenementColloqueScienntifiqueVo> {
         return this.http.post<EvenementColloqueScienntifiqueVo>(this.API, this.selectedEvenementColloqueScienntifique);
    }
    
    delete(evenementColloqueScienntifique: EvenementColloqueScienntifiqueVo) {
         return this.http.delete<number>(this.API+"id/"+evenementColloqueScienntifique.id);
    }


    public edit(): Observable<EvenementColloqueScienntifiqueVo> {
        return this.http.put<EvenementColloqueScienntifiqueVo>(this.API, this.selectedEvenementColloqueScienntifique);
    }
    

     public findByCriteria(evenementColloqueScienntifique:EvenementColloqueScienntifiqueVo):Observable<Array<EvenementColloqueScienntifiqueVo>>{
           return this.http.post<Array<EvenementColloqueScienntifiqueVo>>(this.API+"search",evenementColloqueScienntifique);
    }



}