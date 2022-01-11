import {Component, OnInit} from '@angular/core';
import {MasterInternationalService} from '../../../controller/service/MasterInternational.service';
import {MasterInternationalVo} from '../../../controller/model/MasterInternational.model';

@Component({
  selector: 'app-masterInternational-create',
  templateUrl: './masterInternational-create.component.html',
  styleUrls: ['./masterInternational-create.component.css']
})
export class MasterInternationalCreateComponent implements OnInit {

constructor(private masterInternationalService: MasterInternationalService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.masterInternationalService.save().subscribe(masterInternational=>{
          
       this.masterInternationals.push({...masterInternational});
       this.createMasterInternationalDialog = false;
       this.selectedMasterInternational = new MasterInternationalVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createMasterInternationalDialog  = false;
}

// getters and setters 

get masterInternationals(): Array<MasterInternationalVo> {
    return this.masterInternationalService.masterInternationals;
       }
set masterInternationals(value: Array<MasterInternationalVo>) {
        this.masterInternationalService.masterInternationals = value;
       } 

 get selectedMasterInternational():MasterInternationalVo {
           return this.masterInternationalService.selectedMasterInternational;
       }
    set selectedMasterInternational(value: MasterInternationalVo) {
        this.masterInternationalService.selectedMasterInternational = value;
       }
  
   get createMasterInternationalDialog():boolean {
           return this.masterInternationalService.createMasterInternationalDialog;
       }
    set createMasterInternationalDialog(value: boolean) {
        this.masterInternationalService.createMasterInternationalDialog= value;
       }


}