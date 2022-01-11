import {Component, OnInit} from '@angular/core';
import {EntiteAdministrativeService} from '../../../controller/service/EntiteAdministrative.service';
import {EntiteAdministrativeVo} from '../../../controller/model/EntiteAdministrative.model';
      import {TypeEntiteAdministrativeVo} from '../../../controller/model/TypeEntiteAdministrative.model';

@Component({
  selector: 'app-entiteAdministrative-create',
  templateUrl: './entiteAdministrative-create.component.html',
  styleUrls: ['./entiteAdministrative-create.component.css']
})
export class EntiteAdministrativeCreateComponent implements OnInit {

constructor(private entiteAdministrativeService: EntiteAdministrativeService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.entiteAdministrativeService.save().subscribe(entiteAdministrative=>{
          
       this.entiteAdministratives.push({...entiteAdministrative});
       this.createEntiteAdministrativeDialog = false;
       this.selectedEntiteAdministrative = new EntiteAdministrativeVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createEntiteAdministrativeDialog  = false;
}

// getters and setters 

get entiteAdministratives(): Array<EntiteAdministrativeVo> {
    return this.entiteAdministrativeService.entiteAdministratives;
       }
set entiteAdministratives(value: Array<EntiteAdministrativeVo>) {
        this.entiteAdministrativeService.entiteAdministratives = value;
       } 

 get selectedEntiteAdministrative():EntiteAdministrativeVo {
           return this.entiteAdministrativeService.selectedEntiteAdministrative;
       }
    set selectedEntiteAdministrative(value: EntiteAdministrativeVo) {
        this.entiteAdministrativeService.selectedEntiteAdministrative = value;
       }
  
   get createEntiteAdministrativeDialog():boolean {
           return this.entiteAdministrativeService.createEntiteAdministrativeDialog;
       }
    set createEntiteAdministrativeDialog(value: boolean) {
        this.entiteAdministrativeService.createEntiteAdministrativeDialog= value;
       }


}