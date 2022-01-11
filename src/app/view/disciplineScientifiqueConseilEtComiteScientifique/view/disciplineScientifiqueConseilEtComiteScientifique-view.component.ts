import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueConseilEtComiteScientifiqueService} from '../../../controller/service/DisciplineScientifiqueConseilEtComiteScientifique.service';
import {DisciplineScientifiqueConseilEtComiteScientifiqueVo} from '../../../controller/model/DisciplineScientifiqueConseilEtComiteScientifique.model';
import {ConseilEtComiteScientifiqueVo} from '../../../controller/model/ConseilEtComiteScientifique.model';
import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';

@Component({
  selector: 'app-disciplineScientifiqueConseilEtComiteScientifique-view',
  templateUrl: './disciplineScientifiqueConseilEtComiteScientifique-view.component.html',
  styleUrls: ['./disciplineScientifiqueConseilEtComiteScientifique-view.component.css']
})
export class DisciplineScientifiqueConseilEtComiteScientifiqueViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private disciplineScientifiqueConseilEtComiteScientifiqueService: DisciplineScientifiqueConseilEtComiteScientifiqueService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewDisciplineScientifiqueConseilEtComiteScientifiqueDialog = false;
    } 



   // getters and setters
    get viewDisciplineScientifiqueConseilEtComiteScientifiqueDialog():boolean {
        return this.disciplineScientifiqueConseilEtComiteScientifiqueService.viewDisciplineScientifiqueConseilEtComiteScientifiqueDialog;
        }
    set viewDisciplineScientifiqueConseilEtComiteScientifiqueDialog(value: boolean) {
        this.disciplineScientifiqueConseilEtComiteScientifiqueService.viewDisciplineScientifiqueConseilEtComiteScientifiqueDialog= value;
        }
    
    get selectedDisciplineScientifiqueConseilEtComiteScientifique():DisciplineScientifiqueConseilEtComiteScientifiqueVo {
           return this.disciplineScientifiqueConseilEtComiteScientifiqueService.selectedDisciplineScientifiqueConseilEtComiteScientifique;
       }
    set selectedDisciplineScientifiqueConseilEtComiteScientifique(value: DisciplineScientifiqueConseilEtComiteScientifiqueVo) {
        this.disciplineScientifiqueConseilEtComiteScientifiqueService.selectedDisciplineScientifiqueConseilEtComiteScientifique = value;
       }





}