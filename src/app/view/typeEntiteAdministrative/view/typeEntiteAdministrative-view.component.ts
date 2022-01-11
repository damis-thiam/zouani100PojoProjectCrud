import {Component, OnInit} from '@angular/core';
import {TypeEntiteAdministrativeService} from '../../../controller/service/TypeEntiteAdministrative.service';
import {TypeEntiteAdministrativeVo} from '../../../controller/model/TypeEntiteAdministrative.model';

@Component({
  selector: 'app-typeEntiteAdministrative-view',
  templateUrl: './typeEntiteAdministrative-view.component.html',
  styleUrls: ['./typeEntiteAdministrative-view.component.css']
})
export class TypeEntiteAdministrativeViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private typeEntiteAdministrativeService: TypeEntiteAdministrativeService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewTypeEntiteAdministrativeDialog = false;
    } 



   // getters and setters
    get viewTypeEntiteAdministrativeDialog():boolean {
        return this.typeEntiteAdministrativeService.viewTypeEntiteAdministrativeDialog;
        }
    set viewTypeEntiteAdministrativeDialog(value: boolean) {
        this.typeEntiteAdministrativeService.viewTypeEntiteAdministrativeDialog= value;
        }
    
    get selectedTypeEntiteAdministrative():TypeEntiteAdministrativeVo {
           return this.typeEntiteAdministrativeService.selectedTypeEntiteAdministrative;
       }
    set selectedTypeEntiteAdministrative(value: TypeEntiteAdministrativeVo) {
        this.typeEntiteAdministrativeService.selectedTypeEntiteAdministrative = value;
       }





}