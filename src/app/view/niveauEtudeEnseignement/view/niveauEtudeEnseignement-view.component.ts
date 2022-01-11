import {Component, OnInit} from '@angular/core';
import {NiveauEtudeEnseignementService} from '../../../controller/service/NiveauEtudeEnseignement.service';
import {NiveauEtudeEnseignementVo} from '../../../controller/model/NiveauEtudeEnseignement.model';
import {EnseignementVo} from '../../../controller/model/Enseignement.model';
import {NiveauEtudeVo} from '../../../controller/model/NiveauEtude.model';

@Component({
  selector: 'app-niveauEtudeEnseignement-view',
  templateUrl: './niveauEtudeEnseignement-view.component.html',
  styleUrls: ['./niveauEtudeEnseignement-view.component.css']
})
export class NiveauEtudeEnseignementViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private niveauEtudeEnseignementService: NiveauEtudeEnseignementService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewNiveauEtudeEnseignementDialog = false;
    } 



   // getters and setters
    get viewNiveauEtudeEnseignementDialog():boolean {
        return this.niveauEtudeEnseignementService.viewNiveauEtudeEnseignementDialog;
        }
    set viewNiveauEtudeEnseignementDialog(value: boolean) {
        this.niveauEtudeEnseignementService.viewNiveauEtudeEnseignementDialog= value;
        }
    
    get selectedNiveauEtudeEnseignement():NiveauEtudeEnseignementVo {
           return this.niveauEtudeEnseignementService.selectedNiveauEtudeEnseignement;
       }
    set selectedNiveauEtudeEnseignement(value: NiveauEtudeEnseignementVo) {
        this.niveauEtudeEnseignementService.selectedNiveauEtudeEnseignement = value;
       }





}