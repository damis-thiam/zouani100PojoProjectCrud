import {Component, OnInit} from '@angular/core';
import {StatutEcoleDoctoraleService} from '../../../controller/service/StatutEcoleDoctorale.service';
import {StatutEcoleDoctoraleVo} from '../../../controller/model/StatutEcoleDoctorale.model';

@Component({
  selector: 'app-statutEcoleDoctorale-view',
  templateUrl: './statutEcoleDoctorale-view.component.html',
  styleUrls: ['./statutEcoleDoctorale-view.component.css']
})
export class StatutEcoleDoctoraleViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private statutEcoleDoctoraleService: StatutEcoleDoctoraleService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewStatutEcoleDoctoraleDialog = false;
    } 



   // getters and setters
    get viewStatutEcoleDoctoraleDialog():boolean {
        return this.statutEcoleDoctoraleService.viewStatutEcoleDoctoraleDialog;
        }
    set viewStatutEcoleDoctoraleDialog(value: boolean) {
        this.statutEcoleDoctoraleService.viewStatutEcoleDoctoraleDialog= value;
        }
    
    get selectedStatutEcoleDoctorale():StatutEcoleDoctoraleVo {
           return this.statutEcoleDoctoraleService.selectedStatutEcoleDoctorale;
       }
    set selectedStatutEcoleDoctorale(value: StatutEcoleDoctoraleVo) {
        this.statutEcoleDoctoraleService.selectedStatutEcoleDoctorale = value;
       }





}