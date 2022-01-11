import {Component, OnInit} from '@angular/core';
import {ConseilEtComiteScientifiqueService} from '../../../controller/service/ConseilEtComiteScientifique.service';
import {ConseilEtComiteScientifiqueVo} from '../../../controller/model/ConseilEtComiteScientifique.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-conseilEtComiteScientifique-view',
  templateUrl: './conseilEtComiteScientifique-view.component.html',
  styleUrls: ['./conseilEtComiteScientifique-view.component.css']
})
export class ConseilEtComiteScientifiqueViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private conseilEtComiteScientifiqueService: ConseilEtComiteScientifiqueService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewConseilEtComiteScientifiqueDialog = false;
    } 



   // getters and setters
    get viewConseilEtComiteScientifiqueDialog():boolean {
        return this.conseilEtComiteScientifiqueService.viewConseilEtComiteScientifiqueDialog;
        }
    set viewConseilEtComiteScientifiqueDialog(value: boolean) {
        this.conseilEtComiteScientifiqueService.viewConseilEtComiteScientifiqueDialog= value;
        }
    
    get selectedConseilEtComiteScientifique():ConseilEtComiteScientifiqueVo {
           return this.conseilEtComiteScientifiqueService.selectedConseilEtComiteScientifique;
       }
    set selectedConseilEtComiteScientifique(value: ConseilEtComiteScientifiqueVo) {
        this.conseilEtComiteScientifiqueService.selectedConseilEtComiteScientifique = value;
       }





}