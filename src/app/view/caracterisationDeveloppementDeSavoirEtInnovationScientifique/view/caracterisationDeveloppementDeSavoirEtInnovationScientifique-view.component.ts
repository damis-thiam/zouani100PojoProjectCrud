import {Component, OnInit} from '@angular/core';
import {CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueService} from '../../../controller/service/CaracterisationDeveloppementDeSavoirEtInnovationScientifique.service';
import {CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo} from '../../../controller/model/CaracterisationDeveloppementDeSavoirEtInnovationScientifique.model';
import {CaracterisationVo} from '../../../controller/model/Caracterisation.model';
import {DeveloppementDeSavoirEtInnovationScientifiqueVo} from '../../../controller/model/DeveloppementDeSavoirEtInnovationScientifique.model';

@Component({
  selector: 'app-caracterisationDeveloppementDeSavoirEtInnovationScientifique-view',
  templateUrl: './caracterisationDeveloppementDeSavoirEtInnovationScientifique-view.component.html',
  styleUrls: ['./caracterisationDeveloppementDeSavoirEtInnovationScientifique-view.component.css']
})
export class CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService: CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog = false;
    } 



   // getters and setters
    get viewCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog():boolean {
        return this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.viewCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog;
        }
    set viewCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog(value: boolean) {
        this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.viewCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog= value;
        }
    
    get selectedCaracterisationDeveloppementDeSavoirEtInnovationScientifique():CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo {
           return this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.selectedCaracterisationDeveloppementDeSavoirEtInnovationScientifique;
       }
    set selectedCaracterisationDeveloppementDeSavoirEtInnovationScientifique(value: CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo) {
        this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.selectedCaracterisationDeveloppementDeSavoirEtInnovationScientifique = value;
       }





}