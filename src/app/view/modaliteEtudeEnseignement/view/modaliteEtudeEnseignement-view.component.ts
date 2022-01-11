import {Component, OnInit} from '@angular/core';
import {ModaliteEtudeEnseignementService} from '../../../controller/service/ModaliteEtudeEnseignement.service';
import {ModaliteEtudeEnseignementVo} from '../../../controller/model/ModaliteEtudeEnseignement.model';
import {EnseignementVo} from '../../../controller/model/Enseignement.model';
import {ModaliteEtudeVo} from '../../../controller/model/ModaliteEtude.model';

@Component({
  selector: 'app-modaliteEtudeEnseignement-view',
  templateUrl: './modaliteEtudeEnseignement-view.component.html',
  styleUrls: ['./modaliteEtudeEnseignement-view.component.css']
})
export class ModaliteEtudeEnseignementViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private modaliteEtudeEnseignementService: ModaliteEtudeEnseignementService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewModaliteEtudeEnseignementDialog = false;
    } 



   // getters and setters
    get viewModaliteEtudeEnseignementDialog():boolean {
        return this.modaliteEtudeEnseignementService.viewModaliteEtudeEnseignementDialog;
        }
    set viewModaliteEtudeEnseignementDialog(value: boolean) {
        this.modaliteEtudeEnseignementService.viewModaliteEtudeEnseignementDialog= value;
        }
    
    get selectedModaliteEtudeEnseignement():ModaliteEtudeEnseignementVo {
           return this.modaliteEtudeEnseignementService.selectedModaliteEtudeEnseignement;
       }
    set selectedModaliteEtudeEnseignement(value: ModaliteEtudeEnseignementVo) {
        this.modaliteEtudeEnseignementService.selectedModaliteEtudeEnseignement = value;
       }





}