import {Component, OnInit} from '@angular/core';
import {MasterInternationalService} from '../../../controller/service/MasterInternational.service';
import {MasterInternationalVo} from '../../../controller/model/MasterInternational.model';

@Component({
  selector: 'app-masterInternational-view',
  templateUrl: './masterInternational-view.component.html',
  styleUrls: ['./masterInternational-view.component.css']
})
export class MasterInternationalViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private masterInternationalService: MasterInternationalService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewMasterInternationalDialog = false;
    } 



   // getters and setters
    get viewMasterInternationalDialog():boolean {
        return this.masterInternationalService.viewMasterInternationalDialog;
        }
    set viewMasterInternationalDialog(value: boolean) {
        this.masterInternationalService.viewMasterInternationalDialog= value;
        }
    
    get selectedMasterInternational():MasterInternationalVo {
           return this.masterInternationalService.selectedMasterInternational;
       }
    set selectedMasterInternational(value: MasterInternationalVo) {
        this.masterInternationalService.selectedMasterInternational = value;
       }





}