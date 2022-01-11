import {Component, OnInit} from '@angular/core';
import {StatutEcoleDoctoraleService} from '../../../controller/service/StatutEcoleDoctorale.service';
import {StatutEcoleDoctoraleVo} from '../../../controller/model/StatutEcoleDoctorale.model';

@Component({
  selector: 'app-statutEcoleDoctorale-create',
  templateUrl: './statutEcoleDoctorale-create.component.html',
  styleUrls: ['./statutEcoleDoctorale-create.component.css']
})
export class StatutEcoleDoctoraleCreateComponent implements OnInit {

constructor(private statutEcoleDoctoraleService: StatutEcoleDoctoraleService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.statutEcoleDoctoraleService.save().subscribe(statutEcoleDoctorale=>{
          
       this.statutEcoleDoctorales.push({...statutEcoleDoctorale});
       this.createStatutEcoleDoctoraleDialog = false;
       this.selectedStatutEcoleDoctorale = new StatutEcoleDoctoraleVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createStatutEcoleDoctoraleDialog  = false;
}

// getters and setters 

get statutEcoleDoctorales(): Array<StatutEcoleDoctoraleVo> {
    return this.statutEcoleDoctoraleService.statutEcoleDoctorales;
       }
set statutEcoleDoctorales(value: Array<StatutEcoleDoctoraleVo>) {
        this.statutEcoleDoctoraleService.statutEcoleDoctorales = value;
       } 

 get selectedStatutEcoleDoctorale():StatutEcoleDoctoraleVo {
           return this.statutEcoleDoctoraleService.selectedStatutEcoleDoctorale;
       }
    set selectedStatutEcoleDoctorale(value: StatutEcoleDoctoraleVo) {
        this.statutEcoleDoctoraleService.selectedStatutEcoleDoctorale = value;
       }
  
   get createStatutEcoleDoctoraleDialog():boolean {
           return this.statutEcoleDoctoraleService.createStatutEcoleDoctoraleDialog;
       }
    set createStatutEcoleDoctoraleDialog(value: boolean) {
        this.statutEcoleDoctoraleService.createStatutEcoleDoctoraleDialog= value;
       }


}