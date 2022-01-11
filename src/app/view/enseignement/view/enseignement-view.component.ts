import {Component, OnInit} from '@angular/core';
import {EnseignementService} from '../../../controller/service/Enseignement.service';
import {EnseignementVo} from '../../../controller/model/Enseignement.model';
import {TypeEnseignementDispenseVo} from '../../../controller/model/TypeEnseignementDispense.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-enseignement-view',
  templateUrl: './enseignement-view.component.html',
  styleUrls: ['./enseignement-view.component.css']
})
export class EnseignementViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private enseignementService: EnseignementService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewEnseignementDialog = false;
    } 



   // getters and setters
    get viewEnseignementDialog():boolean {
        return this.enseignementService.viewEnseignementDialog;
        }
    set viewEnseignementDialog(value: boolean) {
        this.enseignementService.viewEnseignementDialog= value;
        }
    
    get selectedEnseignement():EnseignementVo {
           return this.enseignementService.selectedEnseignement;
       }
    set selectedEnseignement(value: EnseignementVo) {
        this.enseignementService.selectedEnseignement = value;
       }





}