import {Component, OnInit} from '@angular/core';
import {EnjeuxIrdChercheurService} from '../../../controller/service/EnjeuxIrdChercheur.service';
import {EnjeuxIrdChercheurVo} from '../../../controller/model/EnjeuxIrdChercheur.model';
import {EnjeuxIrdVo} from '../../../controller/model/EnjeuxIrd.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-enjeuxIrdChercheur-view',
  templateUrl: './enjeuxIrdChercheur-view.component.html',
  styleUrls: ['./enjeuxIrdChercheur-view.component.css']
})
export class EnjeuxIrdChercheurViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private enjeuxIrdChercheurService: EnjeuxIrdChercheurService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewEnjeuxIrdChercheurDialog = false;
    } 



   // getters and setters
    get viewEnjeuxIrdChercheurDialog():boolean {
        return this.enjeuxIrdChercheurService.viewEnjeuxIrdChercheurDialog;
        }
    set viewEnjeuxIrdChercheurDialog(value: boolean) {
        this.enjeuxIrdChercheurService.viewEnjeuxIrdChercheurDialog= value;
        }
    
    get selectedEnjeuxIrdChercheur():EnjeuxIrdChercheurVo {
           return this.enjeuxIrdChercheurService.selectedEnjeuxIrdChercheur;
       }
    set selectedEnjeuxIrdChercheur(value: EnjeuxIrdChercheurVo) {
        this.enjeuxIrdChercheurService.selectedEnjeuxIrdChercheur = value;
       }





}