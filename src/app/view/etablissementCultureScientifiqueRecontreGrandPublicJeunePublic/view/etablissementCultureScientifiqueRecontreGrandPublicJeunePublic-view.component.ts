import {Component, OnInit} from '@angular/core';
import {EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicService} from '../../../controller/service/EtablissementCultureScientifiqueRecontreGrandPublicJeunePublic.service';
import {EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/EtablissementCultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {CultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/CultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';

@Component({
  selector: 'app-etablissementCultureScientifiqueRecontreGrandPublicJeunePublic-view',
  templateUrl: './etablissementCultureScientifiqueRecontreGrandPublicJeunePublic-view.component.html',
  styleUrls: ['./etablissementCultureScientifiqueRecontreGrandPublicJeunePublic-view.component.css']
})
export class EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService: EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog = false;
    } 



   // getters and setters
    get viewEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog():boolean {
        return this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.viewEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
        }
    set viewEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.viewEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog= value;
        }
    
    get selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic():EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo {
           return this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic;
       }
    set selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic(value: EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo) {
        this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic = value;
       }





}