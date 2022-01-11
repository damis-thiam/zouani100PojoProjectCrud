import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {EvaluationEncadrementVo} from '../model/EvaluationEncadrement.model';


@Injectable({
  providedIn: 'root'
})
export class EvaluationEncadrementService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/evaluationEncadrement/';
        })
    }
     private _evaluationEncadrements: Array<EvaluationEncadrementVo> = [];
     private _selectedEvaluationEncadrement: EvaluationEncadrementVo = new EvaluationEncadrementVo();
     private _evaluationEncadrementSelections: Array<EvaluationEncadrementVo>;
     private _createEvaluationEncadrementDialog: boolean;
     private _editEvaluationEncadrementDialog: boolean;
     private _viewEvaluationEncadrementDialog: boolean;
     public editEvaluationEncadrement$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchEvaluationEncadrement:EvaluationEncadrementVo = new EvaluationEncadrementVo();


    // getters and setters


    get evaluationEncadrements(): Array<EvaluationEncadrementVo> {
        return this._evaluationEncadrements == null ? this._evaluationEncadrements =   new Array<EvaluationEncadrementVo>() : this._evaluationEncadrements;
       }
    set evaluationEncadrements(value: Array<EvaluationEncadrementVo>) {
        this._evaluationEncadrements = value;
       }
    get selectedEvaluationEncadrement(): EvaluationEncadrementVo {
           return this._selectedEvaluationEncadrement;
       }
    set selectedEvaluationEncadrement(value: EvaluationEncadrementVo) {
        this._selectedEvaluationEncadrement = value;
       }
    get evaluationEncadrementSelections(): Array<EvaluationEncadrementVo> {
        return this._evaluationEncadrementSelections;
       }
    set evaluationEncadrementSelections(value: Array<EvaluationEncadrementVo>) {
        this._evaluationEncadrementSelections = value;
       }
    get createEvaluationEncadrementDialog(): boolean {
        return this._createEvaluationEncadrementDialog;
       }
    set createEvaluationEncadrementDialog(value: boolean) {
        this._createEvaluationEncadrementDialog = value;
       }

    get editEvaluationEncadrementDialog(): boolean {
        return this._editEvaluationEncadrementDialog;
       }
    set editEvaluationEncadrementDialog(value: boolean) {
        this._editEvaluationEncadrementDialog = value;
       }

    get viewEvaluationEncadrementDialog(): boolean {
        return this._viewEvaluationEncadrementDialog;
       }
    set viewEvaluationEncadrementDialog(value: boolean) {
        this._viewEvaluationEncadrementDialog = value;
       }
     get searchEvaluationEncadrement(): EvaluationEncadrementVo {
        return this._searchEvaluationEncadrement;
       }
    set searchEvaluationEncadrement(value: EvaluationEncadrementVo) {
        this._searchEvaluationEncadrement = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<EvaluationEncadrementVo>>(this.API);
    }
    
    public save(): Observable<EvaluationEncadrementVo> {
         return this.http.post<EvaluationEncadrementVo>(this.API, this.selectedEvaluationEncadrement);
    }
    
    delete(evaluationEncadrement: EvaluationEncadrementVo) {
         return this.http.delete<number>(this.API+"id/"+evaluationEncadrement.id);
    }


    public edit(): Observable<EvaluationEncadrementVo> {
        return this.http.put<EvaluationEncadrementVo>(this.API, this.selectedEvaluationEncadrement);
    }
    

     public findByCriteria(evaluationEncadrement:EvaluationEncadrementVo):Observable<Array<EvaluationEncadrementVo>>{
           return this.http.post<Array<EvaluationEncadrementVo>>(this.API+"search",evaluationEncadrement);
    }



}