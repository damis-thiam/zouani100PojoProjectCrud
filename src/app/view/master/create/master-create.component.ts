import {Component, OnInit} from '@angular/core';
import {MasterService} from '../../../controller/service/Master.service';
import {MasterVo} from '../../../controller/model/Master.model';
      import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-master-create',
  templateUrl: './master-create.component.html',
  styleUrls: ['./master-create.component.css']
})
export class MasterCreateComponent implements OnInit {

constructor(private masterService: MasterService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.masterService.save().subscribe(master=>{
          
       this.masters.push({...master});
       this.createMasterDialog = false;
       this.selectedMaster = new MasterVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createMasterDialog  = false;
}

// getters and setters 

get masters(): Array<MasterVo> {
    return this.masterService.masters;
       }
set masters(value: Array<MasterVo>) {
        this.masterService.masters = value;
       } 

 get selectedMaster():MasterVo {
           return this.masterService.selectedMaster;
       }
    set selectedMaster(value: MasterVo) {
        this.masterService.selectedMaster = value;
       }
  
   get createMasterDialog():boolean {
           return this.masterService.createMasterDialog;
       }
    set createMasterDialog(value: boolean) {
        this.masterService.createMasterDialog= value;
       }


}