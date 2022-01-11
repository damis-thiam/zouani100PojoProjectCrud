import {Component, OnInit} from '@angular/core';
import {ExpertiseScientifiqueService} from '../../../controller/service/ExpertiseScientifique.service';
import {ExpertiseScientifiqueVo} from '../../../controller/model/ExpertiseScientifique.model';
import {TypeExpertiseVo} from '../../../controller/model/TypeExpertise.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-expertiseScientifique-view',
  templateUrl: './expertiseScientifique-view.component.html',
  styleUrls: ['./expertiseScientifique-view.component.css']
})
export class ExpertiseScientifiqueViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private expertiseScientifiqueService: ExpertiseScientifiqueService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewExpertiseScientifiqueDialog = false;
    } 



   // getters and setters
    get viewExpertiseScientifiqueDialog():boolean {
        return this.expertiseScientifiqueService.viewExpertiseScientifiqueDialog;
        }
    set viewExpertiseScientifiqueDialog(value: boolean) {
        this.expertiseScientifiqueService.viewExpertiseScientifiqueDialog= value;
        }
    
    get selectedExpertiseScientifique():ExpertiseScientifiqueVo {
           return this.expertiseScientifiqueService.selectedExpertiseScientifique;
       }
    set selectedExpertiseScientifique(value: ExpertiseScientifiqueVo) {
        this.expertiseScientifiqueService.selectedExpertiseScientifique = value;
       }





}