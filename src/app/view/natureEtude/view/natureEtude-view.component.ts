import {Component, OnInit} from '@angular/core';
import {NatureEtudeService} from '../../../controller/service/NatureEtude.service';
import {NatureEtudeVo} from '../../../controller/model/NatureEtude.model';

@Component({
  selector: 'app-natureEtude-view',
  templateUrl: './natureEtude-view.component.html',
  styleUrls: ['./natureEtude-view.component.css']
})
export class NatureEtudeViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private natureEtudeService: NatureEtudeService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewNatureEtudeDialog = false;
    } 



   // getters and setters
    get viewNatureEtudeDialog():boolean {
        return this.natureEtudeService.viewNatureEtudeDialog;
        }
    set viewNatureEtudeDialog(value: boolean) {
        this.natureEtudeService.viewNatureEtudeDialog= value;
        }
    
    get selectedNatureEtude():NatureEtudeVo {
           return this.natureEtudeService.selectedNatureEtude;
       }
    set selectedNatureEtude(value: NatureEtudeVo) {
        this.natureEtudeService.selectedNatureEtude = value;
       }





}