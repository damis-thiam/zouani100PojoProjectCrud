import {Component, OnInit} from '@angular/core';
import {DepartementScientifiqueService} from '../../../controller/service/DepartementScientifique.service';
import {DepartementScientifiqueVo} from '../../../controller/model/DepartementScientifique.model';

@Component({
  selector: 'app-departementScientifique-view',
  templateUrl: './departementScientifique-view.component.html',
  styleUrls: ['./departementScientifique-view.component.css']
})
export class DepartementScientifiqueViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private departementScientifiqueService: DepartementScientifiqueService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewDepartementScientifiqueDialog = false;
    } 



   // getters and setters
    get viewDepartementScientifiqueDialog():boolean {
        return this.departementScientifiqueService.viewDepartementScientifiqueDialog;
        }
    set viewDepartementScientifiqueDialog(value: boolean) {
        this.departementScientifiqueService.viewDepartementScientifiqueDialog= value;
        }
    
    get selectedDepartementScientifique():DepartementScientifiqueVo {
           return this.departementScientifiqueService.selectedDepartementScientifique;
       }
    set selectedDepartementScientifique(value: DepartementScientifiqueVo) {
        this.departementScientifiqueService.selectedDepartementScientifique = value;
       }





}