import {Component, OnInit} from '@angular/core';
import {ModaliteService} from '../../../controller/service/Modalite.service';
import {ModaliteVo} from '../../../controller/model/Modalite.model';

@Component({
  selector: 'app-modalite-view',
  templateUrl: './modalite-view.component.html',
  styleUrls: ['./modalite-view.component.css']
})
export class ModaliteViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private modaliteService: ModaliteService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewModaliteDialog = false;
    } 



   // getters and setters
    get viewModaliteDialog():boolean {
        return this.modaliteService.viewModaliteDialog;
        }
    set viewModaliteDialog(value: boolean) {
        this.modaliteService.viewModaliteDialog= value;
        }
    
    get selectedModalite():ModaliteVo {
           return this.modaliteService.selectedModalite;
       }
    set selectedModalite(value: ModaliteVo) {
        this.modaliteService.selectedModalite = value;
       }





}