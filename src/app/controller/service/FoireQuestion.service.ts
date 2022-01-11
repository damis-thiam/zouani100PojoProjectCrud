import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {FoireQuestionVo} from '../model/FoireQuestion.model';
import {CategorieFoireQuestionVo} from '../model/CategorieFoireQuestion.model';


@Injectable({
  providedIn: 'root'
})
export class FoireQuestionService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/foireQuestion/';
        })
    }
     private _foireQuestions: Array<FoireQuestionVo> = [];
     private _selectedFoireQuestion: FoireQuestionVo = new FoireQuestionVo();
     private _foireQuestionSelections: Array<FoireQuestionVo>;
     private _createFoireQuestionDialog: boolean;
     private _editFoireQuestionDialog: boolean;
     private _viewFoireQuestionDialog: boolean;
     public editFoireQuestion$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchFoireQuestion:FoireQuestionVo = new FoireQuestionVo();


    // getters and setters


    get foireQuestions(): Array<FoireQuestionVo> {
        return this._foireQuestions == null ? this._foireQuestions =   new Array<FoireQuestionVo>() : this._foireQuestions;
       }
    set foireQuestions(value: Array<FoireQuestionVo>) {
        this._foireQuestions = value;
       }
    get selectedFoireQuestion(): FoireQuestionVo {
           return this._selectedFoireQuestion;
       }
    set selectedFoireQuestion(value: FoireQuestionVo) {
        this._selectedFoireQuestion = value;
       }
    get foireQuestionSelections(): Array<FoireQuestionVo> {
        return this._foireQuestionSelections;
       }
    set foireQuestionSelections(value: Array<FoireQuestionVo>) {
        this._foireQuestionSelections = value;
       }
    get createFoireQuestionDialog(): boolean {
        return this._createFoireQuestionDialog;
       }
    set createFoireQuestionDialog(value: boolean) {
        this._createFoireQuestionDialog = value;
       }

    get editFoireQuestionDialog(): boolean {
        return this._editFoireQuestionDialog;
       }
    set editFoireQuestionDialog(value: boolean) {
        this._editFoireQuestionDialog = value;
       }

    get viewFoireQuestionDialog(): boolean {
        return this._viewFoireQuestionDialog;
       }
    set viewFoireQuestionDialog(value: boolean) {
        this._viewFoireQuestionDialog = value;
       }
     get searchFoireQuestion(): FoireQuestionVo {
        return this._searchFoireQuestion;
       }
    set searchFoireQuestion(value: FoireQuestionVo) {
        this._searchFoireQuestion = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<FoireQuestionVo>>(this.API);
    }
    
    public save(): Observable<FoireQuestionVo> {
         return this.http.post<FoireQuestionVo>(this.API, this.selectedFoireQuestion);
    }
    
    delete(foireQuestion: FoireQuestionVo) {
         return this.http.delete<number>(this.API+"id/"+foireQuestion.id);
    }


    public edit(): Observable<FoireQuestionVo> {
        return this.http.put<FoireQuestionVo>(this.API, this.selectedFoireQuestion);
    }
    

     public findByCriteria(foireQuestion:FoireQuestionVo):Observable<Array<FoireQuestionVo>>{
           return this.http.post<Array<FoireQuestionVo>>(this.API+"search",foireQuestion);
    }



}