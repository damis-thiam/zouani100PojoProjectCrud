import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {BourseVo} from '../model/Bourse.model';
import {ProjetActiviteRechercheVo} from '../model/ProjetActiviteRecherche.model';
import {TypeParticipationVo} from '../model/TypeParticipation.model';


@Injectable({
  providedIn: 'root'
})
export class BourseService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/bourse/';
        })
    }
     private _bourses: Array<BourseVo> = [];
     private _selectedBourse: BourseVo = new BourseVo();
     private _bourseSelections: Array<BourseVo>;
     private _createBourseDialog: boolean;
     private _editBourseDialog: boolean;
     private _viewBourseDialog: boolean;
     public editBourse$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchBourse:BourseVo = new BourseVo();


    // getters and setters


    get bourses(): Array<BourseVo> {
        return this._bourses == null ? this._bourses =   new Array<BourseVo>() : this._bourses;
       }
    set bourses(value: Array<BourseVo>) {
        this._bourses = value;
       }
    get selectedBourse(): BourseVo {
           return this._selectedBourse;
       }
    set selectedBourse(value: BourseVo) {
        this._selectedBourse = value;
       }
    get bourseSelections(): Array<BourseVo> {
        return this._bourseSelections;
       }
    set bourseSelections(value: Array<BourseVo>) {
        this._bourseSelections = value;
       }
    get createBourseDialog(): boolean {
        return this._createBourseDialog;
       }
    set createBourseDialog(value: boolean) {
        this._createBourseDialog = value;
       }

    get editBourseDialog(): boolean {
        return this._editBourseDialog;
       }
    set editBourseDialog(value: boolean) {
        this._editBourseDialog = value;
       }

    get viewBourseDialog(): boolean {
        return this._viewBourseDialog;
       }
    set viewBourseDialog(value: boolean) {
        this._viewBourseDialog = value;
       }
     get searchBourse(): BourseVo {
        return this._searchBourse;
       }
    set searchBourse(value: BourseVo) {
        this._searchBourse = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<BourseVo>>(this.API);
    }
    
    public save(): Observable<BourseVo> {
           return this.http.post<BourseVo>(this.API, {...this.selectedBourse,dateObtention: moment(this.selectedBourse.dateObtention).format("YYYY-MM-DD")});
    }
    
    delete(bourse: BourseVo) {
         return this.http.delete<number>(this.API+"id/"+bourse.id);
    }


    public edit(): Observable<BourseVo> {
        return this.http.put<BourseVo>(this.API, this.selectedBourse);
    }
    

     public findByCriteria(bourse:BourseVo):Observable<Array<BourseVo>>{
           return this.http.post<Array<BourseVo>>(this.API+"search",bourse);
    }



}