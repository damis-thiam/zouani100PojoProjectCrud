import {Component, OnInit} from '@angular/core';
import {ObjetGlobalFormationContinueService} from '../../../controller/service/ObjetGlobalFormationContinue.service';
import {ObjetGlobalFormationContinueVo} from '../../../controller/model/ObjetGlobalFormationContinue.model';
import {FormationContinueVo} from '../../../controller/model/FormationContinue.model';
import {ObjetGlobalVo} from '../../../controller/model/ObjetGlobal.model';

@Component({
  selector: 'app-objetGlobalFormationContinue-view',
  templateUrl: './objetGlobalFormationContinue-view.component.html',
  styleUrls: ['./objetGlobalFormationContinue-view.component.css']
})
export class ObjetGlobalFormationContinueViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private objetGlobalFormationContinueService: ObjetGlobalFormationContinueService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewObjetGlobalFormationContinueDialog = false;
    } 



   // getters and setters
    get viewObjetGlobalFormationContinueDialog():boolean {
        return this.objetGlobalFormationContinueService.viewObjetGlobalFormationContinueDialog;
        }
    set viewObjetGlobalFormationContinueDialog(value: boolean) {
        this.objetGlobalFormationContinueService.viewObjetGlobalFormationContinueDialog= value;
        }
    
    get selectedObjetGlobalFormationContinue():ObjetGlobalFormationContinueVo {
           return this.objetGlobalFormationContinueService.selectedObjetGlobalFormationContinue;
       }
    set selectedObjetGlobalFormationContinue(value: ObjetGlobalFormationContinueVo) {
        this.objetGlobalFormationContinueService.selectedObjetGlobalFormationContinue = value;
       }





}