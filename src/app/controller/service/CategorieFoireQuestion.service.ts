import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {CategorieFoireQuestionVo} from '../model/CategorieFoireQuestion.model';


@Injectable({
  providedIn: 'root'
})
export class CategorieFoireQuestionService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/categorieFoireQuestion/';
        })
    }
     private _categorieFoireQuestions: Array<CategorieFoireQuestionVo> = [];
     private _selectedCategorieFoireQuestion: CategorieFoireQuestionVo = new CategorieFoireQuestionVo();
     private _categorieFoireQuestionSelections: Array<CategorieFoireQuestionVo>;
     private _createCategorieFoireQuestionDialog: boolean;
     private _editCategorieFoireQuestionDialog: boolean;
     private _viewCategorieFoireQuestionDialog: boolean;
     public editCategorieFoireQuestion$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchCategorieFoireQuestion:CategorieFoireQuestionVo = new CategorieFoireQuestionVo();


    // getters and setters


    get categorieFoireQuestions(): Array<CategorieFoireQuestionVo> {
        return this._categorieFoireQuestions == null ? this._categorieFoireQuestions =   new Array<CategorieFoireQuestionVo>() : this._categorieFoireQuestions;
       }
    set categorieFoireQuestions(value: Array<CategorieFoireQuestionVo>) {
        this._categorieFoireQuestions = value;
       }
    get selectedCategorieFoireQuestion(): CategorieFoireQuestionVo {
           return this._selectedCategorieFoireQuestion;
       }
    set selectedCategorieFoireQuestion(value: CategorieFoireQuestionVo) {
        this._selectedCategorieFoireQuestion = value;
       }
    get categorieFoireQuestionSelections(): Array<CategorieFoireQuestionVo> {
        return this._categorieFoireQuestionSelections;
       }
    set categorieFoireQuestionSelections(value: Array<CategorieFoireQuestionVo>) {
        this._categorieFoireQuestionSelections = value;
       }
    get createCategorieFoireQuestionDialog(): boolean {
        return this._createCategorieFoireQuestionDialog;
       }
    set createCategorieFoireQuestionDialog(value: boolean) {
        this._createCategorieFoireQuestionDialog = value;
       }

    get editCategorieFoireQuestionDialog(): boolean {
        return this._editCategorieFoireQuestionDialog;
       }
    set editCategorieFoireQuestionDialog(value: boolean) {
        this._editCategorieFoireQuestionDialog = value;
       }

    get viewCategorieFoireQuestionDialog(): boolean {
        return this._viewCategorieFoireQuestionDialog;
       }
    set viewCategorieFoireQuestionDialog(value: boolean) {
        this._viewCategorieFoireQuestionDialog = value;
       }
     get searchCategorieFoireQuestion(): CategorieFoireQuestionVo {
        return this._searchCategorieFoireQuestion;
       }
    set searchCategorieFoireQuestion(value: CategorieFoireQuestionVo) {
        this._searchCategorieFoireQuestion = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<CategorieFoireQuestionVo>>(this.API);
    }
    
    public save(): Observable<CategorieFoireQuestionVo> {
         return this.http.post<CategorieFoireQuestionVo>(this.API, this.selectedCategorieFoireQuestion);
    }
    
    delete(categorieFoireQuestion: CategorieFoireQuestionVo) {
         return this.http.delete<number>(this.API+"id/"+categorieFoireQuestion.id);
    }


    public edit(): Observable<CategorieFoireQuestionVo> {
        return this.http.put<CategorieFoireQuestionVo>(this.API, this.selectedCategorieFoireQuestion);
    }
    

     public findByCriteria(categorieFoireQuestion:CategorieFoireQuestionVo):Observable<Array<CategorieFoireQuestionVo>>{
           return this.http.post<Array<CategorieFoireQuestionVo>>(this.API+"search",categorieFoireQuestion);
    }



}