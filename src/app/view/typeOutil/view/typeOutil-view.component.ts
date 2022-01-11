import {Component, OnInit} from '@angular/core';
import {TypeOutilService} from '../../../controller/service/TypeOutil.service';
import {TypeOutilVo} from '../../../controller/model/TypeOutil.model';

@Component({
  selector: 'app-typeOutil-view',
  templateUrl: './typeOutil-view.component.html',
  styleUrls: ['./typeOutil-view.component.css']
})
export class TypeOutilViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private typeOutilService: TypeOutilService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewTypeOutilDialog = false;
    } 



   // getters and setters
    get viewTypeOutilDialog():boolean {
        return this.typeOutilService.viewTypeOutilDialog;
        }
    set viewTypeOutilDialog(value: boolean) {
        this.typeOutilService.viewTypeOutilDialog= value;
        }
    
    get selectedTypeOutil():TypeOutilVo {
           return this.typeOutilService.selectedTypeOutil;
       }
    set selectedTypeOutil(value: TypeOutilVo) {
        this.typeOutilService.selectedTypeOutil = value;
       }





}