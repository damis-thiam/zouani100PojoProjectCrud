import {Component, OnInit} from '@angular/core';
import {CommunauteSavoirConseilEtComiteScientifiqueService} from '../../../controller/service/CommunauteSavoirConseilEtComiteScientifique.service';
import {CommunauteSavoirConseilEtComiteScientifiqueVo} from '../../../controller/model/CommunauteSavoirConseilEtComiteScientifique.model';
import {ConseilEtComiteScientifiqueVo} from '../../../controller/model/ConseilEtComiteScientifique.model';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';

@Component({
  selector: 'app-communauteSavoirConseilEtComiteScientifique-view',
  templateUrl: './communauteSavoirConseilEtComiteScientifique-view.component.html',
  styleUrls: ['./communauteSavoirConseilEtComiteScientifique-view.component.css']
})
export class CommunauteSavoirConseilEtComiteScientifiqueViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private communauteSavoirConseilEtComiteScientifiqueService: CommunauteSavoirConseilEtComiteScientifiqueService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewCommunauteSavoirConseilEtComiteScientifiqueDialog = false;
    } 



   // getters and setters
    get viewCommunauteSavoirConseilEtComiteScientifiqueDialog():boolean {
        return this.communauteSavoirConseilEtComiteScientifiqueService.viewCommunauteSavoirConseilEtComiteScientifiqueDialog;
        }
    set viewCommunauteSavoirConseilEtComiteScientifiqueDialog(value: boolean) {
        this.communauteSavoirConseilEtComiteScientifiqueService.viewCommunauteSavoirConseilEtComiteScientifiqueDialog= value;
        }
    
    get selectedCommunauteSavoirConseilEtComiteScientifique():CommunauteSavoirConseilEtComiteScientifiqueVo {
           return this.communauteSavoirConseilEtComiteScientifiqueService.selectedCommunauteSavoirConseilEtComiteScientifique;
       }
    set selectedCommunauteSavoirConseilEtComiteScientifique(value: CommunauteSavoirConseilEtComiteScientifiqueVo) {
        this.communauteSavoirConseilEtComiteScientifiqueService.selectedCommunauteSavoirConseilEtComiteScientifique = value;
       }





}