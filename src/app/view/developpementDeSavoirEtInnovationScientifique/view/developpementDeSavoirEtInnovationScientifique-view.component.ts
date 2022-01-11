import {Component, OnInit} from '@angular/core';
import {DeveloppementDeSavoirEtInnovationScientifiqueService} from '../../../controller/service/DeveloppementDeSavoirEtInnovationScientifique.service';
import {DeveloppementDeSavoirEtInnovationScientifiqueVo} from '../../../controller/model/DeveloppementDeSavoirEtInnovationScientifique.model';
import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-developpementDeSavoirEtInnovationScientifique-view',
  templateUrl: './developpementDeSavoirEtInnovationScientifique-view.component.html',
  styleUrls: ['./developpementDeSavoirEtInnovationScientifique-view.component.css']
})
export class DeveloppementDeSavoirEtInnovationScientifiqueViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private developpementDeSavoirEtInnovationScientifiqueService: DeveloppementDeSavoirEtInnovationScientifiqueService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewDeveloppementDeSavoirEtInnovationScientifiqueDialog = false;
    } 



   // getters and setters
    get viewDeveloppementDeSavoirEtInnovationScientifiqueDialog():boolean {
        return this.developpementDeSavoirEtInnovationScientifiqueService.viewDeveloppementDeSavoirEtInnovationScientifiqueDialog;
        }
    set viewDeveloppementDeSavoirEtInnovationScientifiqueDialog(value: boolean) {
        this.developpementDeSavoirEtInnovationScientifiqueService.viewDeveloppementDeSavoirEtInnovationScientifiqueDialog= value;
        }
    
    get selectedDeveloppementDeSavoirEtInnovationScientifique():DeveloppementDeSavoirEtInnovationScientifiqueVo {
           return this.developpementDeSavoirEtInnovationScientifiqueService.selectedDeveloppementDeSavoirEtInnovationScientifique;
       }
    set selectedDeveloppementDeSavoirEtInnovationScientifique(value: DeveloppementDeSavoirEtInnovationScientifiqueVo) {
        this.developpementDeSavoirEtInnovationScientifiqueService.selectedDeveloppementDeSavoirEtInnovationScientifique = value;
       }





}