import {Component, OnInit} from '@angular/core';
import {EtudiantService} from '../../../controller/service/Etudiant.service';
import {EtudiantVo} from '../../../controller/model/Etudiant.model';
import {SexeVo} from '../../../controller/model/Sexe.model';
import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-etudiant-view',
  templateUrl: './etudiant-view.component.html',
  styleUrls: ['./etudiant-view.component.css']
})
export class EtudiantViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private etudiantService: EtudiantService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewEtudiantDialog = false;
    } 



   // getters and setters
    get viewEtudiantDialog():boolean {
        return this.etudiantService.viewEtudiantDialog;
        }
    set viewEtudiantDialog(value: boolean) {
        this.etudiantService.viewEtudiantDialog= value;
        }
    
    get selectedEtudiant():EtudiantVo {
           return this.etudiantService.selectedEtudiant;
       }
    set selectedEtudiant(value: EtudiantVo) {
        this.etudiantService.selectedEtudiant = value;
       }





}