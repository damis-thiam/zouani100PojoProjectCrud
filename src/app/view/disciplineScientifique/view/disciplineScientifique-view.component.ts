import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueService} from '../../../controller/service/DisciplineScientifique.service';
import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';

@Component({
  selector: 'app-disciplineScientifique-view',
  templateUrl: './disciplineScientifique-view.component.html',
  styleUrls: ['./disciplineScientifique-view.component.css']
})
export class DisciplineScientifiqueViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private disciplineScientifiqueService: DisciplineScientifiqueService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewDisciplineScientifiqueDialog = false;
    } 



   // getters and setters
    get viewDisciplineScientifiqueDialog():boolean {
        return this.disciplineScientifiqueService.viewDisciplineScientifiqueDialog;
        }
    set viewDisciplineScientifiqueDialog(value: boolean) {
        this.disciplineScientifiqueService.viewDisciplineScientifiqueDialog= value;
        }
    
    get selectedDisciplineScientifique():DisciplineScientifiqueVo {
           return this.disciplineScientifiqueService.selectedDisciplineScientifique;
       }
    set selectedDisciplineScientifique(value: DisciplineScientifiqueVo) {
        this.disciplineScientifiqueService.selectedDisciplineScientifique = value;
       }





}