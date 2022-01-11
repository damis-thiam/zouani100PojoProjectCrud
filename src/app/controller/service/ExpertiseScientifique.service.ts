import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {ExpertiseScientifiqueVo} from '../model/ExpertiseScientifique.model';
import {TypeExpertiseVo} from '../model/TypeExpertise.model';
import {EtablissementVo} from '../model/Etablissement.model';
import {PaysVo} from '../model/Pays.model';
import {ChercheurVo} from '../model/Chercheur.model';


@Injectable({
  providedIn: 'root'
})
export class ExpertiseScientifiqueService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/expertiseScientifique/';
        })
    }
     private _expertiseScientifiques: Array<ExpertiseScientifiqueVo> = [];
     private _selectedExpertiseScientifique: ExpertiseScientifiqueVo = new ExpertiseScientifiqueVo();
     private _expertiseScientifiqueSelections: Array<ExpertiseScientifiqueVo>;
     private _createExpertiseScientifiqueDialog: boolean;
     private _editExpertiseScientifiqueDialog: boolean;
     private _viewExpertiseScientifiqueDialog: boolean;
     public editExpertiseScientifique$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchExpertiseScientifique:ExpertiseScientifiqueVo = new ExpertiseScientifiqueVo();


    // getters and setters


    get expertiseScientifiques(): Array<ExpertiseScientifiqueVo> {
        return this._expertiseScientifiques == null ? this._expertiseScientifiques =   new Array<ExpertiseScientifiqueVo>() : this._expertiseScientifiques;
       }
    set expertiseScientifiques(value: Array<ExpertiseScientifiqueVo>) {
        this._expertiseScientifiques = value;
       }
    get selectedExpertiseScientifique(): ExpertiseScientifiqueVo {
           return this._selectedExpertiseScientifique;
       }
    set selectedExpertiseScientifique(value: ExpertiseScientifiqueVo) {
        this._selectedExpertiseScientifique = value;
       }
    get expertiseScientifiqueSelections(): Array<ExpertiseScientifiqueVo> {
        return this._expertiseScientifiqueSelections;
       }
    set expertiseScientifiqueSelections(value: Array<ExpertiseScientifiqueVo>) {
        this._expertiseScientifiqueSelections = value;
       }
    get createExpertiseScientifiqueDialog(): boolean {
        return this._createExpertiseScientifiqueDialog;
       }
    set createExpertiseScientifiqueDialog(value: boolean) {
        this._createExpertiseScientifiqueDialog = value;
       }

    get editExpertiseScientifiqueDialog(): boolean {
        return this._editExpertiseScientifiqueDialog;
       }
    set editExpertiseScientifiqueDialog(value: boolean) {
        this._editExpertiseScientifiqueDialog = value;
       }

    get viewExpertiseScientifiqueDialog(): boolean {
        return this._viewExpertiseScientifiqueDialog;
       }
    set viewExpertiseScientifiqueDialog(value: boolean) {
        this._viewExpertiseScientifiqueDialog = value;
       }
     get searchExpertiseScientifique(): ExpertiseScientifiqueVo {
        return this._searchExpertiseScientifique;
       }
    set searchExpertiseScientifique(value: ExpertiseScientifiqueVo) {
        this._searchExpertiseScientifique = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<ExpertiseScientifiqueVo>>(this.API);
    }
    
    public save(): Observable<ExpertiseScientifiqueVo> {
         return this.http.post<ExpertiseScientifiqueVo>(this.API, this.selectedExpertiseScientifique);
    }
    
    delete(expertiseScientifique: ExpertiseScientifiqueVo) {
         return this.http.delete<number>(this.API+"id/"+expertiseScientifique.id);
    }


    public edit(): Observable<ExpertiseScientifiqueVo> {
        return this.http.put<ExpertiseScientifiqueVo>(this.API, this.selectedExpertiseScientifique);
    }
    

     public findByCriteria(expertiseScientifique:ExpertiseScientifiqueVo):Observable<Array<ExpertiseScientifiqueVo>>{
           return this.http.post<Array<ExpertiseScientifiqueVo>>(this.API+"search",expertiseScientifique);
    }



}