import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueEvenementColloqueScientifiquesService} from '../../../controller/service/DisciplineScientifiqueEvenementColloqueScientifiques.service';
import {DisciplineScientifiqueEvenementColloqueScientifiquesVo} from '../../../controller/model/DisciplineScientifiqueEvenementColloqueScientifiques.model';
import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';

@Component({
  selector: 'app-disciplineScientifiqueEvenementColloqueScientifiques-view',
  templateUrl: './disciplineScientifiqueEvenementColloqueScientifiques-view.component.html',
  styleUrls: ['./disciplineScientifiqueEvenementColloqueScientifiques-view.component.css']
})
export class DisciplineScientifiqueEvenementColloqueScientifiquesViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private disciplineScientifiqueEvenementColloqueScientifiquesService: DisciplineScientifiqueEvenementColloqueScientifiquesService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewDisciplineScientifiqueEvenementColloqueScientifiquesDialog = false;
    } 



   // getters and setters
    get viewDisciplineScientifiqueEvenementColloqueScientifiquesDialog():boolean {
        return this.disciplineScientifiqueEvenementColloqueScientifiquesService.viewDisciplineScientifiqueEvenementColloqueScientifiquesDialog;
        }
    set viewDisciplineScientifiqueEvenementColloqueScientifiquesDialog(value: boolean) {
        this.disciplineScientifiqueEvenementColloqueScientifiquesService.viewDisciplineScientifiqueEvenementColloqueScientifiquesDialog= value;
        }
    
    get selectedDisciplineScientifiqueEvenementColloqueScientifiques():DisciplineScientifiqueEvenementColloqueScientifiquesVo {
           return this.disciplineScientifiqueEvenementColloqueScientifiquesService.selectedDisciplineScientifiqueEvenementColloqueScientifiques;
       }
    set selectedDisciplineScientifiqueEvenementColloqueScientifiques(value: DisciplineScientifiqueEvenementColloqueScientifiquesVo) {
        this.disciplineScientifiqueEvenementColloqueScientifiquesService.selectedDisciplineScientifiqueEvenementColloqueScientifiques = value;
       }





}