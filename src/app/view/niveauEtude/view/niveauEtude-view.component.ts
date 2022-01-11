import {Component, OnInit} from '@angular/core';
import {NiveauEtudeService} from '../../../controller/service/NiveauEtude.service';
import {NiveauEtudeVo} from '../../../controller/model/NiveauEtude.model';

@Component({
  selector: 'app-niveauEtude-view',
  templateUrl: './niveauEtude-view.component.html',
  styleUrls: ['./niveauEtude-view.component.css']
})
export class NiveauEtudeViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private niveauEtudeService: NiveauEtudeService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewNiveauEtudeDialog = false;
    } 



   // getters and setters
    get viewNiveauEtudeDialog():boolean {
        return this.niveauEtudeService.viewNiveauEtudeDialog;
        }
    set viewNiveauEtudeDialog(value: boolean) {
        this.niveauEtudeService.viewNiveauEtudeDialog= value;
        }
    
    get selectedNiveauEtude():NiveauEtudeVo {
           return this.niveauEtudeService.selectedNiveauEtude;
       }
    set selectedNiveauEtude(value: NiveauEtudeVo) {
        this.niveauEtudeService.selectedNiveauEtude = value;
       }





}