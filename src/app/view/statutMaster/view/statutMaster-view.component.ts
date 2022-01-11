import {Component, OnInit} from '@angular/core';
import {StatutMasterService} from '../../../controller/service/StatutMaster.service';
import {StatutMasterVo} from '../../../controller/model/StatutMaster.model';

@Component({
  selector: 'app-statutMaster-view',
  templateUrl: './statutMaster-view.component.html',
  styleUrls: ['./statutMaster-view.component.css']
})
export class StatutMasterViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private statutMasterService: StatutMasterService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewStatutMasterDialog = false;
    } 



   // getters and setters
    get viewStatutMasterDialog():boolean {
        return this.statutMasterService.viewStatutMasterDialog;
        }
    set viewStatutMasterDialog(value: boolean) {
        this.statutMasterService.viewStatutMasterDialog= value;
        }
    
    get selectedStatutMaster():StatutMasterVo {
           return this.statutMasterService.selectedStatutMaster;
       }
    set selectedStatutMaster(value: StatutMasterVo) {
        this.statutMasterService.selectedStatutMaster = value;
       }





}