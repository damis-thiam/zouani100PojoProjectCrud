import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueEncadrementEtudiantService} from '../../../controller/service/DisciplineScientifiqueEncadrementEtudiant.service';
import {DisciplineScientifiqueEncadrementEtudiantVo} from '../../../controller/model/DisciplineScientifiqueEncadrementEtudiant.model';
import {EncadrementEtudiantVo} from '../../../controller/model/EncadrementEtudiant.model';
import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';

@Component({
  selector: 'app-disciplineScientifiqueEncadrementEtudiant-view',
  templateUrl: './disciplineScientifiqueEncadrementEtudiant-view.component.html',
  styleUrls: ['./disciplineScientifiqueEncadrementEtudiant-view.component.css']
})
export class DisciplineScientifiqueEncadrementEtudiantViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private disciplineScientifiqueEncadrementEtudiantService: DisciplineScientifiqueEncadrementEtudiantService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewDisciplineScientifiqueEncadrementEtudiantDialog = false;
    } 



   // getters and setters
    get viewDisciplineScientifiqueEncadrementEtudiantDialog():boolean {
        return this.disciplineScientifiqueEncadrementEtudiantService.viewDisciplineScientifiqueEncadrementEtudiantDialog;
        }
    set viewDisciplineScientifiqueEncadrementEtudiantDialog(value: boolean) {
        this.disciplineScientifiqueEncadrementEtudiantService.viewDisciplineScientifiqueEncadrementEtudiantDialog= value;
        }
    
    get selectedDisciplineScientifiqueEncadrementEtudiant():DisciplineScientifiqueEncadrementEtudiantVo {
           return this.disciplineScientifiqueEncadrementEtudiantService.selectedDisciplineScientifiqueEncadrementEtudiant;
       }
    set selectedDisciplineScientifiqueEncadrementEtudiant(value: DisciplineScientifiqueEncadrementEtudiantVo) {
        this.disciplineScientifiqueEncadrementEtudiantService.selectedDisciplineScientifiqueEncadrementEtudiant = value;
       }





}