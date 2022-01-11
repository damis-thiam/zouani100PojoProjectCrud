import {Component, OnInit} from '@angular/core';
import {EtablissementService} from '../../../controller/service/Etablissement.service';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';

@Component({
  selector: 'app-etablissement-view',
  templateUrl: './etablissement-view.component.html',
  styleUrls: ['./etablissement-view.component.css']
})
export class EtablissementViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private etablissementService: EtablissementService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewEtablissementDialog = false;
    } 



   // getters and setters
    get viewEtablissementDialog():boolean {
        return this.etablissementService.viewEtablissementDialog;
        }
    set viewEtablissementDialog(value: boolean) {
        this.etablissementService.viewEtablissementDialog= value;
        }
    
    get selectedEtablissement():EtablissementVo {
           return this.etablissementService.selectedEtablissement;
       }
    set selectedEtablissement(value: EtablissementVo) {
        this.etablissementService.selectedEtablissement = value;
       }





}