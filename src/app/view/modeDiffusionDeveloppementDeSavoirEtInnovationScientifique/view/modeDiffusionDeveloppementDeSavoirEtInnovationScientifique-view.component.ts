import {Component, OnInit} from '@angular/core';
import {ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService} from '../../../controller/service/ModeDiffusionDeveloppementDeSavoirEtInnovationScientifique.service';
import {ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo} from '../../../controller/model/ModeDiffusionDeveloppementDeSavoirEtInnovationScientifique.model';
import {ModeDiffusionVo} from '../../../controller/model/ModeDiffusion.model';
import {DeveloppementDeSavoirEtInnovationScientifiqueVo} from '../../../controller/model/DeveloppementDeSavoirEtInnovationScientifique.model';

@Component({
  selector: 'app-modeDiffusionDeveloppementDeSavoirEtInnovationScientifique-view',
  templateUrl: './modeDiffusionDeveloppementDeSavoirEtInnovationScientifique-view.component.html',
  styleUrls: ['./modeDiffusionDeveloppementDeSavoirEtInnovationScientifique-view.component.css']
})
export class ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService: ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog = false;
    } 



   // getters and setters
    get viewModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog():boolean {
        return this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.viewModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog;
        }
    set viewModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog(value: boolean) {
        this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.viewModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog= value;
        }
    
    get selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique():ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo {
           return this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique;
       }
    set selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique(value: ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo) {
        this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique = value;
       }





}