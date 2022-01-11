import {Component, OnInit} from '@angular/core';
import {ResponsabilitePedagogiqueMasterService} from '../../../controller/service/ResponsabilitePedagogiqueMaster.service';
import {ResponsabilitePedagogiqueMasterVo} from '../../../controller/model/ResponsabilitePedagogiqueMaster.model';
import {MasterVo} from '../../../controller/model/Master.model';
import {StatutMasterVo} from '../../../controller/model/StatutMaster.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-responsabilitePedagogiqueMaster-view',
  templateUrl: './responsabilitePedagogiqueMaster-view.component.html',
  styleUrls: ['./responsabilitePedagogiqueMaster-view.component.css']
})
export class ResponsabilitePedagogiqueMasterViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private responsabilitePedagogiqueMasterService: ResponsabilitePedagogiqueMasterService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewResponsabilitePedagogiqueMasterDialog = false;
    } 



   // getters and setters
    get viewResponsabilitePedagogiqueMasterDialog():boolean {
        return this.responsabilitePedagogiqueMasterService.viewResponsabilitePedagogiqueMasterDialog;
        }
    set viewResponsabilitePedagogiqueMasterDialog(value: boolean) {
        this.responsabilitePedagogiqueMasterService.viewResponsabilitePedagogiqueMasterDialog= value;
        }
    
    get selectedResponsabilitePedagogiqueMaster():ResponsabilitePedagogiqueMasterVo {
           return this.responsabilitePedagogiqueMasterService.selectedResponsabilitePedagogiqueMaster;
       }
    set selectedResponsabilitePedagogiqueMaster(value: ResponsabilitePedagogiqueMasterVo) {
        this.responsabilitePedagogiqueMasterService.selectedResponsabilitePedagogiqueMaster = value;
       }





}