import {Component, OnInit} from '@angular/core';
import {PubliquePrincipalConcemeFormationContinueService} from '../../../controller/service/PubliquePrincipalConcemeFormationContinue.service';
import {PubliquePrincipalConcemeFormationContinueVo} from '../../../controller/model/PubliquePrincipalConcemeFormationContinue.model';
      import {PubliquePrincipalVo} from '../../../controller/model/PubliquePrincipal.model';
      import {FormationContinueVo} from '../../../controller/model/FormationContinue.model';

@Component({
  selector: 'app-publiquePrincipalConcemeFormationContinue-create',
  templateUrl: './publiquePrincipalConcemeFormationContinue-create.component.html',
  styleUrls: ['./publiquePrincipalConcemeFormationContinue-create.component.css']
})
export class PubliquePrincipalConcemeFormationContinueCreateComponent implements OnInit {

constructor(private publiquePrincipalConcemeFormationContinueService: PubliquePrincipalConcemeFormationContinueService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.publiquePrincipalConcemeFormationContinueService.save().subscribe(publiquePrincipalConcemeFormationContinue=>{
          
       this.publiquePrincipalConcemeFormationContinues.push({...publiquePrincipalConcemeFormationContinue});
       this.createPubliquePrincipalConcemeFormationContinueDialog = false;
       this.selectedPubliquePrincipalConcemeFormationContinue = new PubliquePrincipalConcemeFormationContinueVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createPubliquePrincipalConcemeFormationContinueDialog  = false;
}

// getters and setters 

get publiquePrincipalConcemeFormationContinues(): Array<PubliquePrincipalConcemeFormationContinueVo> {
    return this.publiquePrincipalConcemeFormationContinueService.publiquePrincipalConcemeFormationContinues;
       }
set publiquePrincipalConcemeFormationContinues(value: Array<PubliquePrincipalConcemeFormationContinueVo>) {
        this.publiquePrincipalConcemeFormationContinueService.publiquePrincipalConcemeFormationContinues = value;
       } 

 get selectedPubliquePrincipalConcemeFormationContinue():PubliquePrincipalConcemeFormationContinueVo {
           return this.publiquePrincipalConcemeFormationContinueService.selectedPubliquePrincipalConcemeFormationContinue;
       }
    set selectedPubliquePrincipalConcemeFormationContinue(value: PubliquePrincipalConcemeFormationContinueVo) {
        this.publiquePrincipalConcemeFormationContinueService.selectedPubliquePrincipalConcemeFormationContinue = value;
       }
  
   get createPubliquePrincipalConcemeFormationContinueDialog():boolean {
           return this.publiquePrincipalConcemeFormationContinueService.createPubliquePrincipalConcemeFormationContinueDialog;
       }
    set createPubliquePrincipalConcemeFormationContinueDialog(value: boolean) {
        this.publiquePrincipalConcemeFormationContinueService.createPubliquePrincipalConcemeFormationContinueDialog= value;
       }


}