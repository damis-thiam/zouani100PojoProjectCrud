import {Component, OnInit} from '@angular/core';
import {CommissionScientifiqueService} from '../../../controller/service/CommissionScientifique.service';
import {CommissionScientifiqueVo} from '../../../controller/model/CommissionScientifique.model';

@Component({
  selector: 'app-commissionScientifique-view',
  templateUrl: './commissionScientifique-view.component.html',
  styleUrls: ['./commissionScientifique-view.component.css']
})
export class CommissionScientifiqueViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private commissionScientifiqueService: CommissionScientifiqueService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewCommissionScientifiqueDialog = false;
    } 



   // getters and setters
    get viewCommissionScientifiqueDialog():boolean {
        return this.commissionScientifiqueService.viewCommissionScientifiqueDialog;
        }
    set viewCommissionScientifiqueDialog(value: boolean) {
        this.commissionScientifiqueService.viewCommissionScientifiqueDialog= value;
        }
    
    get selectedCommissionScientifique():CommissionScientifiqueVo {
           return this.commissionScientifiqueService.selectedCommissionScientifique;
       }
    set selectedCommissionScientifique(value: CommissionScientifiqueVo) {
        this.commissionScientifiqueService.selectedCommissionScientifique = value;
       }





}