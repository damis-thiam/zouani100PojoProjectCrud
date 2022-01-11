import {Component, OnInit} from '@angular/core';
import {EntiteAdministrativeService} from '../../../controller/service/EntiteAdministrative.service';
import {EntiteAdministrativeVo} from '../../../controller/model/EntiteAdministrative.model';
import {TypeEntiteAdministrativeVo} from '../../../controller/model/TypeEntiteAdministrative.model';

@Component({
  selector: 'app-entiteAdministrative-view',
  templateUrl: './entiteAdministrative-view.component.html',
  styleUrls: ['./entiteAdministrative-view.component.css']
})
export class EntiteAdministrativeViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private entiteAdministrativeService: EntiteAdministrativeService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewEntiteAdministrativeDialog = false;
    } 



   // getters and setters
    get viewEntiteAdministrativeDialog():boolean {
        return this.entiteAdministrativeService.viewEntiteAdministrativeDialog;
        }
    set viewEntiteAdministrativeDialog(value: boolean) {
        this.entiteAdministrativeService.viewEntiteAdministrativeDialog= value;
        }
    
    get selectedEntiteAdministrative():EntiteAdministrativeVo {
           return this.entiteAdministrativeService.selectedEntiteAdministrative;
       }
    set selectedEntiteAdministrative(value: EntiteAdministrativeVo) {
        this.entiteAdministrativeService.selectedEntiteAdministrative = value;
       }





}