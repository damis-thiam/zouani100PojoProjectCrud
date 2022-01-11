import {Component, OnInit} from '@angular/core';
import {NatureEtudeService} from '../../../controller/service/NatureEtude.service';
import {NatureEtudeVo} from '../../../controller/model/NatureEtude.model';

@Component({
  selector: 'app-natureEtude-create',
  templateUrl: './natureEtude-create.component.html',
  styleUrls: ['./natureEtude-create.component.css']
})
export class NatureEtudeCreateComponent implements OnInit {

constructor(private natureEtudeService: NatureEtudeService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.natureEtudeService.save().subscribe(natureEtude=>{
          
       this.natureEtudes.push({...natureEtude});
       this.createNatureEtudeDialog = false;
       this.selectedNatureEtude = new NatureEtudeVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createNatureEtudeDialog  = false;
}

// getters and setters 

get natureEtudes(): Array<NatureEtudeVo> {
    return this.natureEtudeService.natureEtudes;
       }
set natureEtudes(value: Array<NatureEtudeVo>) {
        this.natureEtudeService.natureEtudes = value;
       } 

 get selectedNatureEtude():NatureEtudeVo {
           return this.natureEtudeService.selectedNatureEtude;
       }
    set selectedNatureEtude(value: NatureEtudeVo) {
        this.natureEtudeService.selectedNatureEtude = value;
       }
  
   get createNatureEtudeDialog():boolean {
           return this.natureEtudeService.createNatureEtudeDialog;
       }
    set createNatureEtudeDialog(value: boolean) {
        this.natureEtudeService.createNatureEtudeDialog= value;
       }


}