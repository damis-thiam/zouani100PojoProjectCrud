import {Component, OnInit} from '@angular/core';
import {GestionEquipeService} from '../../../controller/service/GestionEquipe.service';
import {GestionEquipeVo} from '../../../controller/model/GestionEquipe.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-gestionEquipe-view',
  templateUrl: './gestionEquipe-view.component.html',
  styleUrls: ['./gestionEquipe-view.component.css']
})
export class GestionEquipeViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private gestionEquipeService: GestionEquipeService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewGestionEquipeDialog = false;
    } 



   // getters and setters
    get viewGestionEquipeDialog():boolean {
        return this.gestionEquipeService.viewGestionEquipeDialog;
        }
    set viewGestionEquipeDialog(value: boolean) {
        this.gestionEquipeService.viewGestionEquipeDialog= value;
        }
    
    get selectedGestionEquipe():GestionEquipeVo {
           return this.gestionEquipeService.selectedGestionEquipe;
       }
    set selectedGestionEquipe(value: GestionEquipeVo) {
        this.gestionEquipeService.selectedGestionEquipe = value;
       }





}