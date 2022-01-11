import {Component, OnInit} from '@angular/core';
import {CaracterisationService} from '../../../controller/service/Caracterisation.service';
import {CaracterisationVo} from '../../../controller/model/Caracterisation.model';

@Component({
  selector: 'app-caracterisation-view',
  templateUrl: './caracterisation-view.component.html',
  styleUrls: ['./caracterisation-view.component.css']
})
export class CaracterisationViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private caracterisationService: CaracterisationService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewCaracterisationDialog = false;
    } 



   // getters and setters
    get viewCaracterisationDialog():boolean {
        return this.caracterisationService.viewCaracterisationDialog;
        }
    set viewCaracterisationDialog(value: boolean) {
        this.caracterisationService.viewCaracterisationDialog= value;
        }
    
    get selectedCaracterisation():CaracterisationVo {
           return this.caracterisationService.selectedCaracterisation;
       }
    set selectedCaracterisation(value: CaracterisationVo) {
        this.caracterisationService.selectedCaracterisation = value;
       }





}