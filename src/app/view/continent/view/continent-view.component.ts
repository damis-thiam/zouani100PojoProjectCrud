import {Component, OnInit} from '@angular/core';
import {ContinentService} from '../../../controller/service/Continent.service';
import {ContinentVo} from '../../../controller/model/Continent.model';

@Component({
  selector: 'app-continent-view',
  templateUrl: './continent-view.component.html',
  styleUrls: ['./continent-view.component.css']
})
export class ContinentViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private continentService: ContinentService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewContinentDialog = false;
    } 



   // getters and setters
    get viewContinentDialog():boolean {
        return this.continentService.viewContinentDialog;
        }
    set viewContinentDialog(value: boolean) {
        this.continentService.viewContinentDialog= value;
        }
    
    get selectedContinent():ContinentVo {
           return this.continentService.selectedContinent;
       }
    set selectedContinent(value: ContinentVo) {
        this.continentService.selectedContinent = value;
       }





}