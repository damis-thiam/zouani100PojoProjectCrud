import {Component, OnInit} from '@angular/core';
import {SexeService} from '../../../controller/service/Sexe.service';
import {SexeVo} from '../../../controller/model/Sexe.model';

@Component({
  selector: 'app-sexe-create',
  templateUrl: './sexe-create.component.html',
  styleUrls: ['./sexe-create.component.css']
})
export class SexeCreateComponent implements OnInit {

constructor(private sexeService: SexeService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.sexeService.save().subscribe(sexe=>{
          
       this.sexes.push({...sexe});
       this.createSexeDialog = false;
       this.selectedSexe = new SexeVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createSexeDialog  = false;
}

// getters and setters 

get sexes(): Array<SexeVo> {
    return this.sexeService.sexes;
       }
set sexes(value: Array<SexeVo>) {
        this.sexeService.sexes = value;
       } 

 get selectedSexe():SexeVo {
           return this.sexeService.selectedSexe;
       }
    set selectedSexe(value: SexeVo) {
        this.sexeService.selectedSexe = value;
       }
  
   get createSexeDialog():boolean {
           return this.sexeService.createSexeDialog;
       }
    set createSexeDialog(value: boolean) {
        this.sexeService.createSexeDialog= value;
       }


}