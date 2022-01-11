import {Component, OnInit} from '@angular/core';
import {ObjetGlobalDeFormationContinueService} from '../../../controller/service/ObjetGlobalDeFormationContinue.service';
import {ObjetGlobalDeFormationContinueVo} from '../../../controller/model/ObjetGlobalDeFormationContinue.model';
      import {FormationContinueVo} from '../../../controller/model/FormationContinue.model';
      import {ObjetGlobalVo} from '../../../controller/model/ObjetGlobal.model';

@Component({
  selector: 'app-objetGlobalDeFormationContinue-create',
  templateUrl: './objetGlobalDeFormationContinue-create.component.html',
  styleUrls: ['./objetGlobalDeFormationContinue-create.component.css']
})
export class ObjetGlobalDeFormationContinueCreateComponent implements OnInit {

constructor(private objetGlobalDeFormationContinueService: ObjetGlobalDeFormationContinueService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.objetGlobalDeFormationContinueService.save().subscribe(objetGlobalDeFormationContinue=>{
          
       this.objetGlobalDeFormationContinues.push({...objetGlobalDeFormationContinue});
       this.createObjetGlobalDeFormationContinueDialog = false;
       this.selectedObjetGlobalDeFormationContinue = new ObjetGlobalDeFormationContinueVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createObjetGlobalDeFormationContinueDialog  = false;
}

// getters and setters 

get objetGlobalDeFormationContinues(): Array<ObjetGlobalDeFormationContinueVo> {
    return this.objetGlobalDeFormationContinueService.objetGlobalDeFormationContinues;
       }
set objetGlobalDeFormationContinues(value: Array<ObjetGlobalDeFormationContinueVo>) {
        this.objetGlobalDeFormationContinueService.objetGlobalDeFormationContinues = value;
       } 

 get selectedObjetGlobalDeFormationContinue():ObjetGlobalDeFormationContinueVo {
           return this.objetGlobalDeFormationContinueService.selectedObjetGlobalDeFormationContinue;
       }
    set selectedObjetGlobalDeFormationContinue(value: ObjetGlobalDeFormationContinueVo) {
        this.objetGlobalDeFormationContinueService.selectedObjetGlobalDeFormationContinue = value;
       }
  
   get createObjetGlobalDeFormationContinueDialog():boolean {
           return this.objetGlobalDeFormationContinueService.createObjetGlobalDeFormationContinueDialog;
       }
    set createObjetGlobalDeFormationContinueDialog(value: boolean) {
        this.objetGlobalDeFormationContinueService.createObjetGlobalDeFormationContinueDialog= value;
       }


}