import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import {DisciplineScientifiqueDirectionEncadrementDoctorantVo} from '../model/DisciplineScientifiqueDirectionEncadrementDoctorant.model';
import {DomaineScientifiqueVo} from '../model/DomaineScientifique.model';
import {DisciplineScientifiqueVo} from '../model/DisciplineScientifique.model';


@Injectable({
  providedIn: 'root'
})
export class DisciplineScientifiqueDirectionEncadrementDoctorantService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = 'http://localhost:8036/api/' + role + '/disciplineScientifiqueDirectionEncadrementDoctorant/';
        })
    }
     private _disciplineScientifiqueDirectionEncadrementDoctorants: Array<DisciplineScientifiqueDirectionEncadrementDoctorantVo> = [];
     private _selectedDisciplineScientifiqueDirectionEncadrementDoctorant: DisciplineScientifiqueDirectionEncadrementDoctorantVo = new DisciplineScientifiqueDirectionEncadrementDoctorantVo();
     private _disciplineScientifiqueDirectionEncadrementDoctorantSelections: Array<DisciplineScientifiqueDirectionEncadrementDoctorantVo>;
     private _createDisciplineScientifiqueDirectionEncadrementDoctorantDialog: boolean;
     private _editDisciplineScientifiqueDirectionEncadrementDoctorantDialog: boolean;
     private _viewDisciplineScientifiqueDirectionEncadrementDoctorantDialog: boolean;
     public editDisciplineScientifiqueDirectionEncadrementDoctorant$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchDisciplineScientifiqueDirectionEncadrementDoctorant:DisciplineScientifiqueDirectionEncadrementDoctorantVo = new DisciplineScientifiqueDirectionEncadrementDoctorantVo();


    // getters and setters


    get disciplineScientifiqueDirectionEncadrementDoctorants(): Array<DisciplineScientifiqueDirectionEncadrementDoctorantVo> {
        return this._disciplineScientifiqueDirectionEncadrementDoctorants == null ? this._disciplineScientifiqueDirectionEncadrementDoctorants =   new Array<DisciplineScientifiqueDirectionEncadrementDoctorantVo>() : this._disciplineScientifiqueDirectionEncadrementDoctorants;
       }
    set disciplineScientifiqueDirectionEncadrementDoctorants(value: Array<DisciplineScientifiqueDirectionEncadrementDoctorantVo>) {
        this._disciplineScientifiqueDirectionEncadrementDoctorants = value;
       }
    get selectedDisciplineScientifiqueDirectionEncadrementDoctorant(): DisciplineScientifiqueDirectionEncadrementDoctorantVo {
           return this._selectedDisciplineScientifiqueDirectionEncadrementDoctorant;
       }
    set selectedDisciplineScientifiqueDirectionEncadrementDoctorant(value: DisciplineScientifiqueDirectionEncadrementDoctorantVo) {
        this._selectedDisciplineScientifiqueDirectionEncadrementDoctorant = value;
       }
    get disciplineScientifiqueDirectionEncadrementDoctorantSelections(): Array<DisciplineScientifiqueDirectionEncadrementDoctorantVo> {
        return this._disciplineScientifiqueDirectionEncadrementDoctorantSelections;
       }
    set disciplineScientifiqueDirectionEncadrementDoctorantSelections(value: Array<DisciplineScientifiqueDirectionEncadrementDoctorantVo>) {
        this._disciplineScientifiqueDirectionEncadrementDoctorantSelections = value;
       }
    get createDisciplineScientifiqueDirectionEncadrementDoctorantDialog(): boolean {
        return this._createDisciplineScientifiqueDirectionEncadrementDoctorantDialog;
       }
    set createDisciplineScientifiqueDirectionEncadrementDoctorantDialog(value: boolean) {
        this._createDisciplineScientifiqueDirectionEncadrementDoctorantDialog = value;
       }

    get editDisciplineScientifiqueDirectionEncadrementDoctorantDialog(): boolean {
        return this._editDisciplineScientifiqueDirectionEncadrementDoctorantDialog;
       }
    set editDisciplineScientifiqueDirectionEncadrementDoctorantDialog(value: boolean) {
        this._editDisciplineScientifiqueDirectionEncadrementDoctorantDialog = value;
       }

    get viewDisciplineScientifiqueDirectionEncadrementDoctorantDialog(): boolean {
        return this._viewDisciplineScientifiqueDirectionEncadrementDoctorantDialog;
       }
    set viewDisciplineScientifiqueDirectionEncadrementDoctorantDialog(value: boolean) {
        this._viewDisciplineScientifiqueDirectionEncadrementDoctorantDialog = value;
       }
     get searchDisciplineScientifiqueDirectionEncadrementDoctorant(): DisciplineScientifiqueDirectionEncadrementDoctorantVo {
        return this._searchDisciplineScientifiqueDirectionEncadrementDoctorant;
       }
    set searchDisciplineScientifiqueDirectionEncadrementDoctorant(value: DisciplineScientifiqueDirectionEncadrementDoctorantVo) {
        this._searchDisciplineScientifiqueDirectionEncadrementDoctorant = value;
       }

    // methods 

    public findAll(){
     return this.http.get<Array<DisciplineScientifiqueDirectionEncadrementDoctorantVo>>(this.API);
    }
    
    public save(): Observable<DisciplineScientifiqueDirectionEncadrementDoctorantVo> {
         return this.http.post<DisciplineScientifiqueDirectionEncadrementDoctorantVo>(this.API, this.selectedDisciplineScientifiqueDirectionEncadrementDoctorant);
    }
    
    delete(disciplineScientifiqueDirectionEncadrementDoctorant: DisciplineScientifiqueDirectionEncadrementDoctorantVo) {
         return this.http.delete<number>(this.API+"id/"+disciplineScientifiqueDirectionEncadrementDoctorant.id);
    }


    public edit(): Observable<DisciplineScientifiqueDirectionEncadrementDoctorantVo> {
        return this.http.put<DisciplineScientifiqueDirectionEncadrementDoctorantVo>(this.API, this.selectedDisciplineScientifiqueDirectionEncadrementDoctorant);
    }
    

     public findByCriteria(disciplineScientifiqueDirectionEncadrementDoctorant:DisciplineScientifiqueDirectionEncadrementDoctorantVo):Observable<Array<DisciplineScientifiqueDirectionEncadrementDoctorantVo>>{
           return this.http.post<Array<DisciplineScientifiqueDirectionEncadrementDoctorantVo>>(this.API+"search",disciplineScientifiqueDirectionEncadrementDoctorant);
    }



}