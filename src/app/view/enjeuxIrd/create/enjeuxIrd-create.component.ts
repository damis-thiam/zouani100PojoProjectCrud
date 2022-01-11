import {Component, OnInit} from '@angular/core';
import {EnjeuxIrdService} from '../../../controller/service/EnjeuxIrd.service';
import {EnjeuxIrdVo} from '../../../controller/model/EnjeuxIrd.model';

@Component({
  selector: 'app-enjeuxIrd-create',
  templateUrl: './enjeuxIrd-create.component.html',
  styleUrls: ['./enjeuxIrd-create.component.css']
})
export class EnjeuxIrdCreateComponent implements OnInit {

constructor(private enjeuxIrdService: EnjeuxIrdService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.enjeuxIrdService.save().subscribe(enjeuxIrd=>{
          
       this.enjeuxIrds.push({...enjeuxIrd});
       this.createEnjeuxIrdDialog = false;
       this.selectedEnjeuxIrd = new EnjeuxIrdVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createEnjeuxIrdDialog  = false;
}

// getters and setters 

get enjeuxIrds(): Array<EnjeuxIrdVo> {
    return this.enjeuxIrdService.enjeuxIrds;
       }
set enjeuxIrds(value: Array<EnjeuxIrdVo>) {
        this.enjeuxIrdService.enjeuxIrds = value;
       } 

 get selectedEnjeuxIrd():EnjeuxIrdVo {
           return this.enjeuxIrdService.selectedEnjeuxIrd;
       }
    set selectedEnjeuxIrd(value: EnjeuxIrdVo) {
        this.enjeuxIrdService.selectedEnjeuxIrd = value;
       }
  
   get createEnjeuxIrdDialog():boolean {
           return this.enjeuxIrdService.createEnjeuxIrdDialog;
       }
    set createEnjeuxIrdDialog(value: boolean) {
        this.enjeuxIrdService.createEnjeuxIrdDialog= value;
       }


}