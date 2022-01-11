import {Component, OnInit} from '@angular/core';
import {OutilFormationContinueService} from '../../../controller/service/OutilFormationContinue.service';
import {OutilFormationContinueVo} from '../../../controller/model/OutilFormationContinue.model';

@Component({
  selector: 'app-outilFormationContinue-view',
  templateUrl: './outilFormationContinue-view.component.html',
  styleUrls: ['./outilFormationContinue-view.component.css']
})
export class OutilFormationContinueViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private outilFormationContinueService: OutilFormationContinueService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewOutilFormationContinueDialog = false;
    } 



   // getters and setters
    get viewOutilFormationContinueDialog():boolean {
        return this.outilFormationContinueService.viewOutilFormationContinueDialog;
        }
    set viewOutilFormationContinueDialog(value: boolean) {
        this.outilFormationContinueService.viewOutilFormationContinueDialog= value;
        }
    
    get selectedOutilFormationContinue():OutilFormationContinueVo {
           return this.outilFormationContinueService.selectedOutilFormationContinue;
       }
    set selectedOutilFormationContinue(value: OutilFormationContinueVo) {
        this.outilFormationContinueService.selectedOutilFormationContinue = value;
       }





}