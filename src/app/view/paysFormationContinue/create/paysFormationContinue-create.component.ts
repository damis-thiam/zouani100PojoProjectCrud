import {Component, OnInit} from '@angular/core';
import {PaysFormationContinueService} from '../../../controller/service/PaysFormationContinue.service';
import {PaysFormationContinueVo} from '../../../controller/model/PaysFormationContinue.model';
      import {FormationContinueVo} from '../../../controller/model/FormationContinue.model';
      import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-paysFormationContinue-create',
  templateUrl: './paysFormationContinue-create.component.html',
  styleUrls: ['./paysFormationContinue-create.component.css']
})
export class PaysFormationContinueCreateComponent implements OnInit {

constructor(private paysFormationContinueService: PaysFormationContinueService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.paysFormationContinueService.save().subscribe(paysFormationContinue=>{
          
       this.paysFormationContinues.push({...paysFormationContinue});
       this.createPaysFormationContinueDialog = false;
       this.selectedPaysFormationContinue = new PaysFormationContinueVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createPaysFormationContinueDialog  = false;
}

// getters and setters 

get paysFormationContinues(): Array<PaysFormationContinueVo> {
    return this.paysFormationContinueService.paysFormationContinues;
       }
set paysFormationContinues(value: Array<PaysFormationContinueVo>) {
        this.paysFormationContinueService.paysFormationContinues = value;
       } 

 get selectedPaysFormationContinue():PaysFormationContinueVo {
           return this.paysFormationContinueService.selectedPaysFormationContinue;
       }
    set selectedPaysFormationContinue(value: PaysFormationContinueVo) {
        this.paysFormationContinueService.selectedPaysFormationContinue = value;
       }
  
   get createPaysFormationContinueDialog():boolean {
           return this.paysFormationContinueService.createPaysFormationContinueDialog;
       }
    set createPaysFormationContinueDialog(value: boolean) {
        this.paysFormationContinueService.createPaysFormationContinueDialog= value;
       }


}