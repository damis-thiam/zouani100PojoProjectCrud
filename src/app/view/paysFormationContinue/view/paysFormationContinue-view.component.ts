import {Component, OnInit} from '@angular/core';
import {PaysFormationContinueService} from '../../../controller/service/PaysFormationContinue.service';
import {PaysFormationContinueVo} from '../../../controller/model/PaysFormationContinue.model';
import {FormationContinueVo} from '../../../controller/model/FormationContinue.model';
import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-paysFormationContinue-view',
  templateUrl: './paysFormationContinue-view.component.html',
  styleUrls: ['./paysFormationContinue-view.component.css']
})
export class PaysFormationContinueViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private paysFormationContinueService: PaysFormationContinueService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewPaysFormationContinueDialog = false;
    } 



   // getters and setters
    get viewPaysFormationContinueDialog():boolean {
        return this.paysFormationContinueService.viewPaysFormationContinueDialog;
        }
    set viewPaysFormationContinueDialog(value: boolean) {
        this.paysFormationContinueService.viewPaysFormationContinueDialog= value;
        }
    
    get selectedPaysFormationContinue():PaysFormationContinueVo {
           return this.paysFormationContinueService.selectedPaysFormationContinue;
       }
    set selectedPaysFormationContinue(value: PaysFormationContinueVo) {
        this.paysFormationContinueService.selectedPaysFormationContinue = value;
       }





}