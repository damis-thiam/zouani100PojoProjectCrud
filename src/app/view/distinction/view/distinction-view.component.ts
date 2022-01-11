import {Component, OnInit} from '@angular/core';
import {DistinctionService} from '../../../controller/service/Distinction.service';
import {DistinctionVo} from '../../../controller/model/Distinction.model';
import {TypeParticipationVo} from '../../../controller/model/TypeParticipation.model';
import {OrganismeVo} from '../../../controller/model/Organisme.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-distinction-view',
  templateUrl: './distinction-view.component.html',
  styleUrls: ['./distinction-view.component.css']
})
export class DistinctionViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private distinctionService: DistinctionService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewDistinctionDialog = false;
    } 



   // getters and setters
    get viewDistinctionDialog():boolean {
        return this.distinctionService.viewDistinctionDialog;
        }
    set viewDistinctionDialog(value: boolean) {
        this.distinctionService.viewDistinctionDialog= value;
        }
    
    get selectedDistinction():DistinctionVo {
           return this.distinctionService.selectedDistinction;
       }
    set selectedDistinction(value: DistinctionVo) {
        this.distinctionService.selectedDistinction = value;
       }





}