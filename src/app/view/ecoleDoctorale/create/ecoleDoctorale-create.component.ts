import {Component, OnInit} from '@angular/core';
import {EcoleDoctoraleService} from '../../../controller/service/EcoleDoctorale.service';
import {EcoleDoctoraleVo} from '../../../controller/model/EcoleDoctorale.model';
      import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-ecoleDoctorale-create',
  templateUrl: './ecoleDoctorale-create.component.html',
  styleUrls: ['./ecoleDoctorale-create.component.css']
})
export class EcoleDoctoraleCreateComponent implements OnInit {

constructor(private ecoleDoctoraleService: EcoleDoctoraleService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.ecoleDoctoraleService.save().subscribe(ecoleDoctorale=>{
          
       this.ecoleDoctorales.push({...ecoleDoctorale});
       this.createEcoleDoctoraleDialog = false;
       this.selectedEcoleDoctorale = new EcoleDoctoraleVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createEcoleDoctoraleDialog  = false;
}

// getters and setters 

get ecoleDoctorales(): Array<EcoleDoctoraleVo> {
    return this.ecoleDoctoraleService.ecoleDoctorales;
       }
set ecoleDoctorales(value: Array<EcoleDoctoraleVo>) {
        this.ecoleDoctoraleService.ecoleDoctorales = value;
       } 

 get selectedEcoleDoctorale():EcoleDoctoraleVo {
           return this.ecoleDoctoraleService.selectedEcoleDoctorale;
       }
    set selectedEcoleDoctorale(value: EcoleDoctoraleVo) {
        this.ecoleDoctoraleService.selectedEcoleDoctorale = value;
       }
  
   get createEcoleDoctoraleDialog():boolean {
           return this.ecoleDoctoraleService.createEcoleDoctoraleDialog;
       }
    set createEcoleDoctoraleDialog(value: boolean) {
        this.ecoleDoctoraleService.createEcoleDoctoraleDialog= value;
       }


}