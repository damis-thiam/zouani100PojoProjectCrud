import {Component, OnInit} from '@angular/core';
import {ResponsabilitePedagogiqueEcoleDoctoraleService} from '../../../controller/service/ResponsabilitePedagogiqueEcoleDoctorale.service';
import {ResponsabilitePedagogiqueEcoleDoctoraleVo} from '../../../controller/model/ResponsabilitePedagogiqueEcoleDoctorale.model';
      import {EcoleDoctoraleVo} from '../../../controller/model/EcoleDoctorale.model';
      import {StatutEcoleDoctoraleVo} from '../../../controller/model/StatutEcoleDoctorale.model';
      import {EtablissementVo} from '../../../controller/model/Etablissement.model';
      import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-responsabilitePedagogiqueEcoleDoctorale-create',
  templateUrl: './responsabilitePedagogiqueEcoleDoctorale-create.component.html',
  styleUrls: ['./responsabilitePedagogiqueEcoleDoctorale-create.component.css']
})
export class ResponsabilitePedagogiqueEcoleDoctoraleCreateComponent implements OnInit {

constructor(private responsabilitePedagogiqueEcoleDoctoraleService: ResponsabilitePedagogiqueEcoleDoctoraleService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.responsabilitePedagogiqueEcoleDoctoraleService.save().subscribe(responsabilitePedagogiqueEcoleDoctorale=>{
          
       this.responsabilitePedagogiqueEcoleDoctorales.push({...responsabilitePedagogiqueEcoleDoctorale});
       this.createResponsabilitePedagogiqueEcoleDoctoraleDialog = false;
       this.selectedResponsabilitePedagogiqueEcoleDoctorale = new ResponsabilitePedagogiqueEcoleDoctoraleVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createResponsabilitePedagogiqueEcoleDoctoraleDialog  = false;
}

// getters and setters 

get responsabilitePedagogiqueEcoleDoctorales(): Array<ResponsabilitePedagogiqueEcoleDoctoraleVo> {
    return this.responsabilitePedagogiqueEcoleDoctoraleService.responsabilitePedagogiqueEcoleDoctorales;
       }
set responsabilitePedagogiqueEcoleDoctorales(value: Array<ResponsabilitePedagogiqueEcoleDoctoraleVo>) {
        this.responsabilitePedagogiqueEcoleDoctoraleService.responsabilitePedagogiqueEcoleDoctorales = value;
       } 

 get selectedResponsabilitePedagogiqueEcoleDoctorale():ResponsabilitePedagogiqueEcoleDoctoraleVo {
           return this.responsabilitePedagogiqueEcoleDoctoraleService.selectedResponsabilitePedagogiqueEcoleDoctorale;
       }
    set selectedResponsabilitePedagogiqueEcoleDoctorale(value: ResponsabilitePedagogiqueEcoleDoctoraleVo) {
        this.responsabilitePedagogiqueEcoleDoctoraleService.selectedResponsabilitePedagogiqueEcoleDoctorale = value;
       }
  
   get createResponsabilitePedagogiqueEcoleDoctoraleDialog():boolean {
           return this.responsabilitePedagogiqueEcoleDoctoraleService.createResponsabilitePedagogiqueEcoleDoctoraleDialog;
       }
    set createResponsabilitePedagogiqueEcoleDoctoraleDialog(value: boolean) {
        this.responsabilitePedagogiqueEcoleDoctoraleService.createResponsabilitePedagogiqueEcoleDoctoraleDialog= value;
       }


}