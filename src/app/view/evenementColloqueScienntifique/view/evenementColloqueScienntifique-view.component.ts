import {Component, OnInit} from '@angular/core';
import {EvenementColloqueScienntifiqueService} from '../../../controller/service/EvenementColloqueScienntifique.service';
import {EvenementColloqueScienntifiqueVo} from '../../../controller/model/EvenementColloqueScienntifique.model';
import {ModaliteVo} from '../../../controller/model/Modalite.model';
import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-evenementColloqueScienntifique-view',
  templateUrl: './evenementColloqueScienntifique-view.component.html',
  styleUrls: ['./evenementColloqueScienntifique-view.component.css']
})
export class EvenementColloqueScienntifiqueViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private evenementColloqueScienntifiqueService: EvenementColloqueScienntifiqueService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewEvenementColloqueScienntifiqueDialog = false;
    } 



   // getters and setters
    get viewEvenementColloqueScienntifiqueDialog():boolean {
        return this.evenementColloqueScienntifiqueService.viewEvenementColloqueScienntifiqueDialog;
        }
    set viewEvenementColloqueScienntifiqueDialog(value: boolean) {
        this.evenementColloqueScienntifiqueService.viewEvenementColloqueScienntifiqueDialog= value;
        }
    
    get selectedEvenementColloqueScienntifique():EvenementColloqueScienntifiqueVo {
           return this.evenementColloqueScienntifiqueService.selectedEvenementColloqueScienntifique;
       }
    set selectedEvenementColloqueScienntifique(value: EvenementColloqueScienntifiqueVo) {
        this.evenementColloqueScienntifiqueService.selectedEvenementColloqueScienntifique = value;
       }





}