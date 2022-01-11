import {Component, OnInit} from '@angular/core';
import {EcoleDoctoraleService} from '../../../controller/service/EcoleDoctorale.service';
import {EcoleDoctoraleVo} from '../../../controller/model/EcoleDoctorale.model';
import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-ecoleDoctorale-view',
  templateUrl: './ecoleDoctorale-view.component.html',
  styleUrls: ['./ecoleDoctorale-view.component.css']
})
export class EcoleDoctoraleViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private ecoleDoctoraleService: EcoleDoctoraleService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewEcoleDoctoraleDialog = false;
    } 



   // getters and setters
    get viewEcoleDoctoraleDialog():boolean {
        return this.ecoleDoctoraleService.viewEcoleDoctoraleDialog;
        }
    set viewEcoleDoctoraleDialog(value: boolean) {
        this.ecoleDoctoraleService.viewEcoleDoctoraleDialog= value;
        }
    
    get selectedEcoleDoctorale():EcoleDoctoraleVo {
           return this.ecoleDoctoraleService.selectedEcoleDoctorale;
       }
    set selectedEcoleDoctorale(value: EcoleDoctoraleVo) {
        this.ecoleDoctoraleService.selectedEcoleDoctorale = value;
       }





}