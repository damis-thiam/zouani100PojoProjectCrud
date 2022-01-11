import {Component, OnInit} from '@angular/core';
import {VieInstitutionnelleService} from '../../../controller/service/VieInstitutionnelle.service';
import {VieInstitutionnelleVo} from '../../../controller/model/VieInstitutionnelle.model';
import {TypeInstanceVo} from '../../../controller/model/TypeInstance.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-vieInstitutionnelle-view',
  templateUrl: './vieInstitutionnelle-view.component.html',
  styleUrls: ['./vieInstitutionnelle-view.component.css']
})
export class VieInstitutionnelleViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private vieInstitutionnelleService: VieInstitutionnelleService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewVieInstitutionnelleDialog = false;
    } 



   // getters and setters
    get viewVieInstitutionnelleDialog():boolean {
        return this.vieInstitutionnelleService.viewVieInstitutionnelleDialog;
        }
    set viewVieInstitutionnelleDialog(value: boolean) {
        this.vieInstitutionnelleService.viewVieInstitutionnelleDialog= value;
        }
    
    get selectedVieInstitutionnelle():VieInstitutionnelleVo {
           return this.vieInstitutionnelleService.selectedVieInstitutionnelle;
       }
    set selectedVieInstitutionnelle(value: VieInstitutionnelleVo) {
        this.vieInstitutionnelleService.selectedVieInstitutionnelle = value;
       }





}