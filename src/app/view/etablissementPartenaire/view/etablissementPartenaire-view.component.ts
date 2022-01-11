import {Component, OnInit} from '@angular/core';
import {EtablissementPartenaireService} from '../../../controller/service/EtablissementPartenaire.service';
import {EtablissementPartenaireVo} from '../../../controller/model/EtablissementPartenaire.model';

@Component({
  selector: 'app-etablissementPartenaire-view',
  templateUrl: './etablissementPartenaire-view.component.html',
  styleUrls: ['./etablissementPartenaire-view.component.css']
})
export class EtablissementPartenaireViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private etablissementPartenaireService: EtablissementPartenaireService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewEtablissementPartenaireDialog = false;
    } 



   // getters and setters
    get viewEtablissementPartenaireDialog():boolean {
        return this.etablissementPartenaireService.viewEtablissementPartenaireDialog;
        }
    set viewEtablissementPartenaireDialog(value: boolean) {
        this.etablissementPartenaireService.viewEtablissementPartenaireDialog= value;
        }
    
    get selectedEtablissementPartenaire():EtablissementPartenaireVo {
           return this.etablissementPartenaireService.selectedEtablissementPartenaire;
       }
    set selectedEtablissementPartenaire(value: EtablissementPartenaireVo) {
        this.etablissementPartenaireService.selectedEtablissementPartenaire = value;
       }





}