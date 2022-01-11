import {Component, OnInit} from '@angular/core';
import {ModaliteFormationContinueService} from '../../../controller/service/ModaliteFormationContinue.service';
import {ModaliteFormationContinueVo} from '../../../controller/model/ModaliteFormationContinue.model';

@Component({
  selector: 'app-modaliteFormationContinue-create',
  templateUrl: './modaliteFormationContinue-create.component.html',
  styleUrls: ['./modaliteFormationContinue-create.component.css']
})
export class ModaliteFormationContinueCreateComponent implements OnInit {

constructor(private modaliteFormationContinueService: ModaliteFormationContinueService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.modaliteFormationContinueService.save().subscribe(modaliteFormationContinue=>{
          
       this.modaliteFormationContinues.push({...modaliteFormationContinue});
       this.createModaliteFormationContinueDialog = false;
       this.selectedModaliteFormationContinue = new ModaliteFormationContinueVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createModaliteFormationContinueDialog  = false;
}

// getters and setters 

get modaliteFormationContinues(): Array<ModaliteFormationContinueVo> {
    return this.modaliteFormationContinueService.modaliteFormationContinues;
       }
set modaliteFormationContinues(value: Array<ModaliteFormationContinueVo>) {
        this.modaliteFormationContinueService.modaliteFormationContinues = value;
       } 

 get selectedModaliteFormationContinue():ModaliteFormationContinueVo {
           return this.modaliteFormationContinueService.selectedModaliteFormationContinue;
       }
    set selectedModaliteFormationContinue(value: ModaliteFormationContinueVo) {
        this.modaliteFormationContinueService.selectedModaliteFormationContinue = value;
       }
  
   get createModaliteFormationContinueDialog():boolean {
           return this.modaliteFormationContinueService.createModaliteFormationContinueDialog;
       }
    set createModaliteFormationContinueDialog(value: boolean) {
        this.modaliteFormationContinueService.createModaliteFormationContinueDialog= value;
       }


}