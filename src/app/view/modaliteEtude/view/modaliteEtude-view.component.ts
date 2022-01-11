import {Component, OnInit} from '@angular/core';
import {ModaliteEtudeService} from '../../../controller/service/ModaliteEtude.service';
import {ModaliteEtudeVo} from '../../../controller/model/ModaliteEtude.model';

@Component({
  selector: 'app-modaliteEtude-view',
  templateUrl: './modaliteEtude-view.component.html',
  styleUrls: ['./modaliteEtude-view.component.css']
})
export class ModaliteEtudeViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private modaliteEtudeService: ModaliteEtudeService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewModaliteEtudeDialog = false;
    } 



   // getters and setters
    get viewModaliteEtudeDialog():boolean {
        return this.modaliteEtudeService.viewModaliteEtudeDialog;
        }
    set viewModaliteEtudeDialog(value: boolean) {
        this.modaliteEtudeService.viewModaliteEtudeDialog= value;
        }
    
    get selectedModaliteEtude():ModaliteEtudeVo {
           return this.modaliteEtudeService.selectedModaliteEtude;
       }
    set selectedModaliteEtude(value: ModaliteEtudeVo) {
        this.modaliteEtudeService.selectedModaliteEtude = value;
       }





}