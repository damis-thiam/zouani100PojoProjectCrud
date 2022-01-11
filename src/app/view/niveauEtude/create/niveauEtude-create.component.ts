import {Component, OnInit} from '@angular/core';
import {NiveauEtudeService} from '../../../controller/service/NiveauEtude.service';
import {NiveauEtudeVo} from '../../../controller/model/NiveauEtude.model';

@Component({
  selector: 'app-niveauEtude-create',
  templateUrl: './niveauEtude-create.component.html',
  styleUrls: ['./niveauEtude-create.component.css']
})
export class NiveauEtudeCreateComponent implements OnInit {

constructor(private niveauEtudeService: NiveauEtudeService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.niveauEtudeService.save().subscribe(niveauEtude=>{
          
       this.niveauEtudes.push({...niveauEtude});
       this.createNiveauEtudeDialog = false;
       this.selectedNiveauEtude = new NiveauEtudeVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createNiveauEtudeDialog  = false;
}

// getters and setters 

get niveauEtudes(): Array<NiveauEtudeVo> {
    return this.niveauEtudeService.niveauEtudes;
       }
set niveauEtudes(value: Array<NiveauEtudeVo>) {
        this.niveauEtudeService.niveauEtudes = value;
       } 

 get selectedNiveauEtude():NiveauEtudeVo {
           return this.niveauEtudeService.selectedNiveauEtude;
       }
    set selectedNiveauEtude(value: NiveauEtudeVo) {
        this.niveauEtudeService.selectedNiveauEtude = value;
       }
  
   get createNiveauEtudeDialog():boolean {
           return this.niveauEtudeService.createNiveauEtudeDialog;
       }
    set createNiveauEtudeDialog(value: boolean) {
        this.niveauEtudeService.createNiveauEtudeDialog= value;
       }


}