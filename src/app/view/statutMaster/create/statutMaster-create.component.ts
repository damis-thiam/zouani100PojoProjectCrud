import {Component, OnInit} from '@angular/core';
import {StatutMasterService} from '../../../controller/service/StatutMaster.service';
import {StatutMasterVo} from '../../../controller/model/StatutMaster.model';

@Component({
  selector: 'app-statutMaster-create',
  templateUrl: './statutMaster-create.component.html',
  styleUrls: ['./statutMaster-create.component.css']
})
export class StatutMasterCreateComponent implements OnInit {

constructor(private statutMasterService: StatutMasterService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.statutMasterService.save().subscribe(statutMaster=>{
          
       this.statutMasters.push({...statutMaster});
       this.createStatutMasterDialog = false;
       this.selectedStatutMaster = new StatutMasterVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createStatutMasterDialog  = false;
}

// getters and setters 

get statutMasters(): Array<StatutMasterVo> {
    return this.statutMasterService.statutMasters;
       }
set statutMasters(value: Array<StatutMasterVo>) {
        this.statutMasterService.statutMasters = value;
       } 

 get selectedStatutMaster():StatutMasterVo {
           return this.statutMasterService.selectedStatutMaster;
       }
    set selectedStatutMaster(value: StatutMasterVo) {
        this.statutMasterService.selectedStatutMaster = value;
       }
  
   get createStatutMasterDialog():boolean {
           return this.statutMasterService.createStatutMasterDialog;
       }
    set createStatutMasterDialog(value: boolean) {
        this.statutMasterService.createStatutMasterDialog= value;
       }


}