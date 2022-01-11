import {Component, OnInit} from '@angular/core';
import {OutilFormationContinueService} from '../../../controller/service/OutilFormationContinue.service';
import {OutilFormationContinueVo} from '../../../controller/model/OutilFormationContinue.model';

@Component({
  selector: 'app-outilFormationContinue-create',
  templateUrl: './outilFormationContinue-create.component.html',
  styleUrls: ['./outilFormationContinue-create.component.css']
})
export class OutilFormationContinueCreateComponent implements OnInit {

constructor(private outilFormationContinueService: OutilFormationContinueService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.outilFormationContinueService.save().subscribe(outilFormationContinue=>{
          
       this.outilFormationContinues.push({...outilFormationContinue});
       this.createOutilFormationContinueDialog = false;
       this.selectedOutilFormationContinue = new OutilFormationContinueVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createOutilFormationContinueDialog  = false;
}

// getters and setters 

get outilFormationContinues(): Array<OutilFormationContinueVo> {
    return this.outilFormationContinueService.outilFormationContinues;
       }
set outilFormationContinues(value: Array<OutilFormationContinueVo>) {
        this.outilFormationContinueService.outilFormationContinues = value;
       } 

 get selectedOutilFormationContinue():OutilFormationContinueVo {
           return this.outilFormationContinueService.selectedOutilFormationContinue;
       }
    set selectedOutilFormationContinue(value: OutilFormationContinueVo) {
        this.outilFormationContinueService.selectedOutilFormationContinue = value;
       }
  
   get createOutilFormationContinueDialog():boolean {
           return this.outilFormationContinueService.createOutilFormationContinueDialog;
       }
    set createOutilFormationContinueDialog(value: boolean) {
        this.outilFormationContinueService.createOutilFormationContinueDialog= value;
       }


}