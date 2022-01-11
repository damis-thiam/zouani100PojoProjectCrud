import {Component, OnInit} from '@angular/core';
import {DomaineScientifiqueService} from '../../../controller/service/DomaineScientifique.service';
import {DomaineScientifiqueVo} from '../../../controller/model/DomaineScientifique.model';

@Component({
  selector: 'app-domaineScientifique-view',
  templateUrl: './domaineScientifique-view.component.html',
  styleUrls: ['./domaineScientifique-view.component.css']
})
export class DomaineScientifiqueViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private domaineScientifiqueService: DomaineScientifiqueService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewDomaineScientifiqueDialog = false;
    } 



   // getters and setters
    get viewDomaineScientifiqueDialog():boolean {
        return this.domaineScientifiqueService.viewDomaineScientifiqueDialog;
        }
    set viewDomaineScientifiqueDialog(value: boolean) {
        this.domaineScientifiqueService.viewDomaineScientifiqueDialog= value;
        }
    
    get selectedDomaineScientifique():DomaineScientifiqueVo {
           return this.domaineScientifiqueService.selectedDomaineScientifique;
       }
    set selectedDomaineScientifique(value: DomaineScientifiqueVo) {
        this.domaineScientifiqueService.selectedDomaineScientifique = value;
       }





}