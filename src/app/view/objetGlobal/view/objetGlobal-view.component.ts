import {Component, OnInit} from '@angular/core';
import {ObjetGlobalService} from '../../../controller/service/ObjetGlobal.service';
import {ObjetGlobalVo} from '../../../controller/model/ObjetGlobal.model';

@Component({
  selector: 'app-objetGlobal-view',
  templateUrl: './objetGlobal-view.component.html',
  styleUrls: ['./objetGlobal-view.component.css']
})
export class ObjetGlobalViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private objetGlobalService: ObjetGlobalService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewObjetGlobalDialog = false;
    } 



   // getters and setters
    get viewObjetGlobalDialog():boolean {
        return this.objetGlobalService.viewObjetGlobalDialog;
        }
    set viewObjetGlobalDialog(value: boolean) {
        this.objetGlobalService.viewObjetGlobalDialog= value;
        }
    
    get selectedObjetGlobal():ObjetGlobalVo {
           return this.objetGlobalService.selectedObjetGlobal;
       }
    set selectedObjetGlobal(value: ObjetGlobalVo) {
        this.objetGlobalService.selectedObjetGlobal = value;
       }





}