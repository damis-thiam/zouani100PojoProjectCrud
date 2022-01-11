import {Component, OnInit} from '@angular/core';
import {DirectionEncadrementDoctorantService} from '../../../controller/service/DirectionEncadrementDoctorant.service';
import {DirectionEncadrementDoctorantVo} from '../../../controller/model/DirectionEncadrementDoctorant.model';
import {FinancementDoctorantVo} from '../../../controller/model/FinancementDoctorant.model';
import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
import {DoctorantVo} from '../../../controller/model/Doctorant.model';
import {ResponsabiliteDirectionEncadrementDoctorantVo} from '../../../controller/model/ResponsabiliteDirectionEncadrementDoctorant.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';
import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-directionEncadrementDoctorant-view',
  templateUrl: './directionEncadrementDoctorant-view.component.html',
  styleUrls: ['./directionEncadrementDoctorant-view.component.css']
})
export class DirectionEncadrementDoctorantViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private directionEncadrementDoctorantService: DirectionEncadrementDoctorantService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewDirectionEncadrementDoctorantDialog = false;
    } 



   // getters and setters
    get viewDirectionEncadrementDoctorantDialog():boolean {
        return this.directionEncadrementDoctorantService.viewDirectionEncadrementDoctorantDialog;
        }
    set viewDirectionEncadrementDoctorantDialog(value: boolean) {
        this.directionEncadrementDoctorantService.viewDirectionEncadrementDoctorantDialog= value;
        }
    
    get selectedDirectionEncadrementDoctorant():DirectionEncadrementDoctorantVo {
           return this.directionEncadrementDoctorantService.selectedDirectionEncadrementDoctorant;
       }
    set selectedDirectionEncadrementDoctorant(value: DirectionEncadrementDoctorantVo) {
        this.directionEncadrementDoctorantService.selectedDirectionEncadrementDoctorant = value;
       }





}