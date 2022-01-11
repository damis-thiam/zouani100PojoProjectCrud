import {Component, OnInit} from '@angular/core';
import {TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService} from '../../../controller/service/TypeSavoirDeveloppementDeSavoirEtInnovationScientifique.service';
import {TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo} from '../../../controller/model/TypeSavoirDeveloppementDeSavoirEtInnovationScientifique.model';
import {TypeSavoirVo} from '../../../controller/model/TypeSavoir.model';
import {DeveloppementDeSavoirEtInnovationScientifiqueVo} from '../../../controller/model/DeveloppementDeSavoirEtInnovationScientifique.model';

@Component({
  selector: 'app-typeSavoirDeveloppementDeSavoirEtInnovationScientifique-view',
  templateUrl: './typeSavoirDeveloppementDeSavoirEtInnovationScientifique-view.component.html',
  styleUrls: ['./typeSavoirDeveloppementDeSavoirEtInnovationScientifique-view.component.css']
})
export class TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService: TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog = false;
    } 



   // getters and setters
    get viewTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog():boolean {
        return this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.viewTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog;
        }
    set viewTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog(value: boolean) {
        this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.viewTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog= value;
        }
    
    get selectedTypeSavoirDeveloppementDeSavoirEtInnovationScientifique():TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo {
           return this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.selectedTypeSavoirDeveloppementDeSavoirEtInnovationScientifique;
       }
    set selectedTypeSavoirDeveloppementDeSavoirEtInnovationScientifique(value: TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo) {
        this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.selectedTypeSavoirDeveloppementDeSavoirEtInnovationScientifique = value;
       }





}