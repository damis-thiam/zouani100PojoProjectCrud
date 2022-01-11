import {Component, OnInit} from '@angular/core';
import {DomaineScientifiqueChercheurService} from '../../../controller/service/DomaineScientifiqueChercheur.service';
import {DomaineScientifiqueChercheurVo} from '../../../controller/model/DomaineScientifiqueChercheur.model';
import {DomaineScientifiqueVo} from '../../../controller/model/DomaineScientifique.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-domaineScientifiqueChercheur-view',
  templateUrl: './domaineScientifiqueChercheur-view.component.html',
  styleUrls: ['./domaineScientifiqueChercheur-view.component.css']
})
export class DomaineScientifiqueChercheurViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private domaineScientifiqueChercheurService: DomaineScientifiqueChercheurService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewDomaineScientifiqueChercheurDialog = false;
    } 



   // getters and setters
    get viewDomaineScientifiqueChercheurDialog():boolean {
        return this.domaineScientifiqueChercheurService.viewDomaineScientifiqueChercheurDialog;
        }
    set viewDomaineScientifiqueChercheurDialog(value: boolean) {
        this.domaineScientifiqueChercheurService.viewDomaineScientifiqueChercheurDialog= value;
        }
    
    get selectedDomaineScientifiqueChercheur():DomaineScientifiqueChercheurVo {
           return this.domaineScientifiqueChercheurService.selectedDomaineScientifiqueChercheur;
       }
    set selectedDomaineScientifiqueChercheur(value: DomaineScientifiqueChercheurVo) {
        this.domaineScientifiqueChercheurService.selectedDomaineScientifiqueChercheur = value;
       }





}