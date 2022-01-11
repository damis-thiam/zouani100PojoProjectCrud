import {Component, OnInit} from '@angular/core';
import {EncadrementEtudiantService} from '../../../controller/service/EncadrementEtudiant.service';
import {EncadrementEtudiantVo} from '../../../controller/model/EncadrementEtudiant.model';
import {EvaluationEncadrementVo} from '../../../controller/model/EvaluationEncadrement.model';
import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
import {EtudiantVo} from '../../../controller/model/Etudiant.model';
import {ResponsabiliteEncadrementEtudiantVo} from '../../../controller/model/ResponsabiliteEncadrementEtudiant.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import {EtablissementPartenaireVo} from '../../../controller/model/EtablissementPartenaire.model';

@Component({
  selector: 'app-encadrementEtudiant-view',
  templateUrl: './encadrementEtudiant-view.component.html',
  styleUrls: ['./encadrementEtudiant-view.component.css']
})
export class EncadrementEtudiantViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private encadrementEtudiantService: EncadrementEtudiantService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewEncadrementEtudiantDialog = false;
    } 



   // getters and setters
    get viewEncadrementEtudiantDialog():boolean {
        return this.encadrementEtudiantService.viewEncadrementEtudiantDialog;
        }
    set viewEncadrementEtudiantDialog(value: boolean) {
        this.encadrementEtudiantService.viewEncadrementEtudiantDialog= value;
        }
    
    get selectedEncadrementEtudiant():EncadrementEtudiantVo {
           return this.encadrementEtudiantService.selectedEncadrementEtudiant;
       }
    set selectedEncadrementEtudiant(value: EncadrementEtudiantVo) {
        this.encadrementEtudiantService.selectedEncadrementEtudiant = value;
       }





}