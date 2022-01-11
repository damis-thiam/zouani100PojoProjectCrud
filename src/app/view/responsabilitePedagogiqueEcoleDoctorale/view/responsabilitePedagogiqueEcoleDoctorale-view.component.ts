import {Component, OnInit} from '@angular/core';
import {ResponsabilitePedagogiqueEcoleDoctoraleService} from '../../../controller/service/ResponsabilitePedagogiqueEcoleDoctorale.service';
import {ResponsabilitePedagogiqueEcoleDoctoraleVo} from '../../../controller/model/ResponsabilitePedagogiqueEcoleDoctorale.model';
import {EcoleDoctoraleVo} from '../../../controller/model/EcoleDoctorale.model';
import {StatutEcoleDoctoraleVo} from '../../../controller/model/StatutEcoleDoctorale.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-responsabilitePedagogiqueEcoleDoctorale-view',
  templateUrl: './responsabilitePedagogiqueEcoleDoctorale-view.component.html',
  styleUrls: ['./responsabilitePedagogiqueEcoleDoctorale-view.component.css']
})
export class ResponsabilitePedagogiqueEcoleDoctoraleViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private responsabilitePedagogiqueEcoleDoctoraleService: ResponsabilitePedagogiqueEcoleDoctoraleService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewResponsabilitePedagogiqueEcoleDoctoraleDialog = false;
    } 



   // getters and setters
    get viewResponsabilitePedagogiqueEcoleDoctoraleDialog():boolean {
        return this.responsabilitePedagogiqueEcoleDoctoraleService.viewResponsabilitePedagogiqueEcoleDoctoraleDialog;
        }
    set viewResponsabilitePedagogiqueEcoleDoctoraleDialog(value: boolean) {
        this.responsabilitePedagogiqueEcoleDoctoraleService.viewResponsabilitePedagogiqueEcoleDoctoraleDialog= value;
        }
    
    get selectedResponsabilitePedagogiqueEcoleDoctorale():ResponsabilitePedagogiqueEcoleDoctoraleVo {
           return this.responsabilitePedagogiqueEcoleDoctoraleService.selectedResponsabilitePedagogiqueEcoleDoctorale;
       }
    set selectedResponsabilitePedagogiqueEcoleDoctorale(value: ResponsabilitePedagogiqueEcoleDoctoraleVo) {
        this.responsabilitePedagogiqueEcoleDoctoraleService.selectedResponsabilitePedagogiqueEcoleDoctorale = value;
       }





}