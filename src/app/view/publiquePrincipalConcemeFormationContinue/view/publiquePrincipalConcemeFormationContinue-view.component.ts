import {Component, OnInit} from '@angular/core';
import {PubliquePrincipalConcemeFormationContinueService} from '../../../controller/service/PubliquePrincipalConcemeFormationContinue.service';
import {PubliquePrincipalConcemeFormationContinueVo} from '../../../controller/model/PubliquePrincipalConcemeFormationContinue.model';
import {PubliquePrincipalVo} from '../../../controller/model/PubliquePrincipal.model';
import {FormationContinueVo} from '../../../controller/model/FormationContinue.model';

@Component({
  selector: 'app-publiquePrincipalConcemeFormationContinue-view',
  templateUrl: './publiquePrincipalConcemeFormationContinue-view.component.html',
  styleUrls: ['./publiquePrincipalConcemeFormationContinue-view.component.css']
})
export class PubliquePrincipalConcemeFormationContinueViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private publiquePrincipalConcemeFormationContinueService: PubliquePrincipalConcemeFormationContinueService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewPubliquePrincipalConcemeFormationContinueDialog = false;
    } 



   // getters and setters
    get viewPubliquePrincipalConcemeFormationContinueDialog():boolean {
        return this.publiquePrincipalConcemeFormationContinueService.viewPubliquePrincipalConcemeFormationContinueDialog;
        }
    set viewPubliquePrincipalConcemeFormationContinueDialog(value: boolean) {
        this.publiquePrincipalConcemeFormationContinueService.viewPubliquePrincipalConcemeFormationContinueDialog= value;
        }
    
    get selectedPubliquePrincipalConcemeFormationContinue():PubliquePrincipalConcemeFormationContinueVo {
           return this.publiquePrincipalConcemeFormationContinueService.selectedPubliquePrincipalConcemeFormationContinue;
       }
    set selectedPubliquePrincipalConcemeFormationContinue(value: PubliquePrincipalConcemeFormationContinueVo) {
        this.publiquePrincipalConcemeFormationContinueService.selectedPubliquePrincipalConcemeFormationContinue = value;
       }





}