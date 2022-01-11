import {Component, OnInit} from '@angular/core';
import {ModaliteFormationContinueService} from '../../../controller/service/ModaliteFormationContinue.service';
import {ModaliteFormationContinueVo} from '../../../controller/model/ModaliteFormationContinue.model';

@Component({
  selector: 'app-modaliteFormationContinue-view',
  templateUrl: './modaliteFormationContinue-view.component.html',
  styleUrls: ['./modaliteFormationContinue-view.component.css']
})
export class ModaliteFormationContinueViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private modaliteFormationContinueService: ModaliteFormationContinueService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewModaliteFormationContinueDialog = false;
    } 



   // getters and setters
    get viewModaliteFormationContinueDialog():boolean {
        return this.modaliteFormationContinueService.viewModaliteFormationContinueDialog;
        }
    set viewModaliteFormationContinueDialog(value: boolean) {
        this.modaliteFormationContinueService.viewModaliteFormationContinueDialog= value;
        }
    
    get selectedModaliteFormationContinue():ModaliteFormationContinueVo {
           return this.modaliteFormationContinueService.selectedModaliteFormationContinue;
       }
    set selectedModaliteFormationContinue(value: ModaliteFormationContinueVo) {
        this.modaliteFormationContinueService.selectedModaliteFormationContinue = value;
       }





}