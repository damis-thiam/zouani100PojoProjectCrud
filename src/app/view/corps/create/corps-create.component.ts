import {Component, OnInit} from '@angular/core';
import {CorpsService} from '../../../controller/service/Corps.service';
import {CorpsVo} from '../../../controller/model/Corps.model';

@Component({
  selector: 'app-corps-create',
  templateUrl: './corps-create.component.html',
  styleUrls: ['./corps-create.component.css']
})
export class CorpsCreateComponent implements OnInit {

constructor(private corpsService: CorpsService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.corpsService.save().subscribe(corps=>{
          
       this.corpss.push({...corps});
       this.createCorpsDialog = false;
       this.selectedCorps = new CorpsVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createCorpsDialog  = false;
}

// getters and setters 

get corpss(): Array<CorpsVo> {
    return this.corpsService.corpss;
       }
set corpss(value: Array<CorpsVo>) {
        this.corpsService.corpss = value;
       } 

 get selectedCorps():CorpsVo {
           return this.corpsService.selectedCorps;
       }
    set selectedCorps(value: CorpsVo) {
        this.corpsService.selectedCorps = value;
       }
  
   get createCorpsDialog():boolean {
           return this.corpsService.createCorpsDialog;
       }
    set createCorpsDialog(value: boolean) {
        this.corpsService.createCorpsDialog= value;
       }


}