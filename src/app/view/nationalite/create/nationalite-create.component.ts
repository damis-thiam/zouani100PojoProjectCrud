import {Component, OnInit} from '@angular/core';
import {NationaliteService} from '../../../controller/service/Nationalite.service';
import {NationaliteVo} from '../../../controller/model/Nationalite.model';

@Component({
  selector: 'app-nationalite-create',
  templateUrl: './nationalite-create.component.html',
  styleUrls: ['./nationalite-create.component.css']
})
export class NationaliteCreateComponent implements OnInit {

constructor(private nationaliteService: NationaliteService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.nationaliteService.save().subscribe(nationalite=>{
          
       this.nationalites.push({...nationalite});
       this.createNationaliteDialog = false;
       this.selectedNationalite = new NationaliteVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createNationaliteDialog  = false;
}

// getters and setters 

get nationalites(): Array<NationaliteVo> {
    return this.nationaliteService.nationalites;
       }
set nationalites(value: Array<NationaliteVo>) {
        this.nationaliteService.nationalites = value;
       } 

 get selectedNationalite():NationaliteVo {
           return this.nationaliteService.selectedNationalite;
       }
    set selectedNationalite(value: NationaliteVo) {
        this.nationaliteService.selectedNationalite = value;
       }
  
   get createNationaliteDialog():boolean {
           return this.nationaliteService.createNationaliteDialog;
       }
    set createNationaliteDialog(value: boolean) {
        this.nationaliteService.createNationaliteDialog= value;
       }


}