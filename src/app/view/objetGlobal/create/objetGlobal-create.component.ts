import {Component, OnInit} from '@angular/core';
import {ObjetGlobalService} from '../../../controller/service/ObjetGlobal.service';
import {ObjetGlobalVo} from '../../../controller/model/ObjetGlobal.model';

@Component({
  selector: 'app-objetGlobal-create',
  templateUrl: './objetGlobal-create.component.html',
  styleUrls: ['./objetGlobal-create.component.css']
})
export class ObjetGlobalCreateComponent implements OnInit {

constructor(private objetGlobalService: ObjetGlobalService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.objetGlobalService.save().subscribe(objetGlobal=>{
          
       this.objetGlobals.push({...objetGlobal});
       this.createObjetGlobalDialog = false;
       this.selectedObjetGlobal = new ObjetGlobalVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createObjetGlobalDialog  = false;
}

// getters and setters 

get objetGlobals(): Array<ObjetGlobalVo> {
    return this.objetGlobalService.objetGlobals;
       }
set objetGlobals(value: Array<ObjetGlobalVo>) {
        this.objetGlobalService.objetGlobals = value;
       } 

 get selectedObjetGlobal():ObjetGlobalVo {
           return this.objetGlobalService.selectedObjetGlobal;
       }
    set selectedObjetGlobal(value: ObjetGlobalVo) {
        this.objetGlobalService.selectedObjetGlobal = value;
       }
  
   get createObjetGlobalDialog():boolean {
           return this.objetGlobalService.createObjetGlobalDialog;
       }
    set createObjetGlobalDialog(value: boolean) {
        this.objetGlobalService.createObjetGlobalDialog= value;
       }


}