import {Component, OnInit} from '@angular/core';
import {MasterService} from '../../../controller/service/Master.service';
import {MasterVo} from '../../../controller/model/Master.model';
import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.css']
})
export class MasterViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private masterService: MasterService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewMasterDialog = false;
    } 



   // getters and setters
    get viewMasterDialog():boolean {
        return this.masterService.viewMasterDialog;
        }
    set viewMasterDialog(value: boolean) {
        this.masterService.viewMasterDialog= value;
        }
    
    get selectedMaster():MasterVo {
           return this.masterService.selectedMaster;
       }
    set selectedMaster(value: MasterVo) {
        this.masterService.selectedMaster = value;
       }





}