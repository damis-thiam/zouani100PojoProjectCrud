import {Component, OnInit} from '@angular/core';
import {ObjetGlobalFormationContinueService} from '../../../controller/service/ObjetGlobalFormationContinue.service';
import {ObjetGlobalFormationContinueVo} from '../../../controller/model/ObjetGlobalFormationContinue.model';
      import {FormationContinueVo} from '../../../controller/model/FormationContinue.model';
      import {ObjetGlobalVo} from '../../../controller/model/ObjetGlobal.model';

@Component({
  selector: 'app-objetGlobalFormationContinue-create',
  templateUrl: './objetGlobalFormationContinue-create.component.html',
  styleUrls: ['./objetGlobalFormationContinue-create.component.css']
})
export class ObjetGlobalFormationContinueCreateComponent implements OnInit {

constructor(private objetGlobalFormationContinueService: ObjetGlobalFormationContinueService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.objetGlobalFormationContinueService.save().subscribe(objetGlobalFormationContinue=>{
          
       this.objetGlobalFormationContinues.push({...objetGlobalFormationContinue});
       this.createObjetGlobalFormationContinueDialog = false;
       this.selectedObjetGlobalFormationContinue = new ObjetGlobalFormationContinueVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createObjetGlobalFormationContinueDialog  = false;
}

// getters and setters 

get objetGlobalFormationContinues(): Array<ObjetGlobalFormationContinueVo> {
    return this.objetGlobalFormationContinueService.objetGlobalFormationContinues;
       }
set objetGlobalFormationContinues(value: Array<ObjetGlobalFormationContinueVo>) {
        this.objetGlobalFormationContinueService.objetGlobalFormationContinues = value;
       } 

 get selectedObjetGlobalFormationContinue():ObjetGlobalFormationContinueVo {
           return this.objetGlobalFormationContinueService.selectedObjetGlobalFormationContinue;
       }
    set selectedObjetGlobalFormationContinue(value: ObjetGlobalFormationContinueVo) {
        this.objetGlobalFormationContinueService.selectedObjetGlobalFormationContinue = value;
       }
  
   get createObjetGlobalFormationContinueDialog():boolean {
           return this.objetGlobalFormationContinueService.createObjetGlobalFormationContinueDialog;
       }
    set createObjetGlobalFormationContinueDialog(value: boolean) {
        this.objetGlobalFormationContinueService.createObjetGlobalFormationContinueDialog= value;
       }


}