import {Component, OnInit} from '@angular/core';
import {ObjetGlobalDeFormationContinueService} from '../../../controller/service/ObjetGlobalDeFormationContinue.service';
import {ObjetGlobalDeFormationContinueVo} from '../../../controller/model/ObjetGlobalDeFormationContinue.model';
import {FormationContinueVo} from '../../../controller/model/FormationContinue.model';
import {ObjetGlobalVo} from '../../../controller/model/ObjetGlobal.model';

@Component({
  selector: 'app-objetGlobalDeFormationContinue-view',
  templateUrl: './objetGlobalDeFormationContinue-view.component.html',
  styleUrls: ['./objetGlobalDeFormationContinue-view.component.css']
})
export class ObjetGlobalDeFormationContinueViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private objetGlobalDeFormationContinueService: ObjetGlobalDeFormationContinueService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewObjetGlobalDeFormationContinueDialog = false;
    } 



   // getters and setters
    get viewObjetGlobalDeFormationContinueDialog():boolean {
        return this.objetGlobalDeFormationContinueService.viewObjetGlobalDeFormationContinueDialog;
        }
    set viewObjetGlobalDeFormationContinueDialog(value: boolean) {
        this.objetGlobalDeFormationContinueService.viewObjetGlobalDeFormationContinueDialog= value;
        }
    
    get selectedObjetGlobalDeFormationContinue():ObjetGlobalDeFormationContinueVo {
           return this.objetGlobalDeFormationContinueService.selectedObjetGlobalDeFormationContinue;
       }
    set selectedObjetGlobalDeFormationContinue(value: ObjetGlobalDeFormationContinueVo) {
        this.objetGlobalDeFormationContinueService.selectedObjetGlobalDeFormationContinue = value;
       }





}