import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueDirectionEncadrementDoctorantService} from '../../../controller/service/DisciplineScientifiqueDirectionEncadrementDoctorant.service';
import {DisciplineScientifiqueDirectionEncadrementDoctorantVo} from '../../../controller/model/DisciplineScientifiqueDirectionEncadrementDoctorant.model';
import {DomaineScientifiqueVo} from '../../../controller/model/DomaineScientifique.model';
import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';

@Component({
  selector: 'app-disciplineScientifiqueDirectionEncadrementDoctorant-view',
  templateUrl: './disciplineScientifiqueDirectionEncadrementDoctorant-view.component.html',
  styleUrls: ['./disciplineScientifiqueDirectionEncadrementDoctorant-view.component.css']
})
export class DisciplineScientifiqueDirectionEncadrementDoctorantViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private disciplineScientifiqueDirectionEncadrementDoctorantService: DisciplineScientifiqueDirectionEncadrementDoctorantService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewDisciplineScientifiqueDirectionEncadrementDoctorantDialog = false;
    } 



   // getters and setters
    get viewDisciplineScientifiqueDirectionEncadrementDoctorantDialog():boolean {
        return this.disciplineScientifiqueDirectionEncadrementDoctorantService.viewDisciplineScientifiqueDirectionEncadrementDoctorantDialog;
        }
    set viewDisciplineScientifiqueDirectionEncadrementDoctorantDialog(value: boolean) {
        this.disciplineScientifiqueDirectionEncadrementDoctorantService.viewDisciplineScientifiqueDirectionEncadrementDoctorantDialog= value;
        }
    
    get selectedDisciplineScientifiqueDirectionEncadrementDoctorant():DisciplineScientifiqueDirectionEncadrementDoctorantVo {
           return this.disciplineScientifiqueDirectionEncadrementDoctorantService.selectedDisciplineScientifiqueDirectionEncadrementDoctorant;
       }
    set selectedDisciplineScientifiqueDirectionEncadrementDoctorant(value: DisciplineScientifiqueDirectionEncadrementDoctorantVo) {
        this.disciplineScientifiqueDirectionEncadrementDoctorantService.selectedDisciplineScientifiqueDirectionEncadrementDoctorant = value;
       }





}