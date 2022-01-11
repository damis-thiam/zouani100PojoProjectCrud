import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueExpertiseScientifiqueService} from '../../../controller/service/DisciplineScientifiqueExpertiseScientifique.service';
import {DisciplineScientifiqueExpertiseScientifiqueVo} from '../../../controller/model/DisciplineScientifiqueExpertiseScientifique.model';
import {ExpertiseScientifiqueVo} from '../../../controller/model/ExpertiseScientifique.model';
import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';

@Component({
  selector: 'app-disciplineScientifiqueExpertiseScientifique-view',
  templateUrl: './disciplineScientifiqueExpertiseScientifique-view.component.html',
  styleUrls: ['./disciplineScientifiqueExpertiseScientifique-view.component.css']
})
export class DisciplineScientifiqueExpertiseScientifiqueViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private disciplineScientifiqueExpertiseScientifiqueService: DisciplineScientifiqueExpertiseScientifiqueService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewDisciplineScientifiqueExpertiseScientifiqueDialog = false;
    } 



   // getters and setters
    get viewDisciplineScientifiqueExpertiseScientifiqueDialog():boolean {
        return this.disciplineScientifiqueExpertiseScientifiqueService.viewDisciplineScientifiqueExpertiseScientifiqueDialog;
        }
    set viewDisciplineScientifiqueExpertiseScientifiqueDialog(value: boolean) {
        this.disciplineScientifiqueExpertiseScientifiqueService.viewDisciplineScientifiqueExpertiseScientifiqueDialog= value;
        }
    
    get selectedDisciplineScientifiqueExpertiseScientifique():DisciplineScientifiqueExpertiseScientifiqueVo {
           return this.disciplineScientifiqueExpertiseScientifiqueService.selectedDisciplineScientifiqueExpertiseScientifique;
       }
    set selectedDisciplineScientifiqueExpertiseScientifique(value: DisciplineScientifiqueExpertiseScientifiqueVo) {
        this.disciplineScientifiqueExpertiseScientifiqueService.selectedDisciplineScientifiqueExpertiseScientifique = value;
       }





}