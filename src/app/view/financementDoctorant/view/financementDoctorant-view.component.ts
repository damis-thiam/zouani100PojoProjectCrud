import {Component, OnInit} from '@angular/core';
import {FinancementDoctorantService} from '../../../controller/service/FinancementDoctorant.service';
import {FinancementDoctorantVo} from '../../../controller/model/FinancementDoctorant.model';

@Component({
  selector: 'app-financementDoctorant-view',
  templateUrl: './financementDoctorant-view.component.html',
  styleUrls: ['./financementDoctorant-view.component.css']
})
export class FinancementDoctorantViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private financementDoctorantService: FinancementDoctorantService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewFinancementDoctorantDialog = false;
    } 



   // getters and setters
    get viewFinancementDoctorantDialog():boolean {
        return this.financementDoctorantService.viewFinancementDoctorantDialog;
        }
    set viewFinancementDoctorantDialog(value: boolean) {
        this.financementDoctorantService.viewFinancementDoctorantDialog= value;
        }
    
    get selectedFinancementDoctorant():FinancementDoctorantVo {
           return this.financementDoctorantService.selectedFinancementDoctorant;
       }
    set selectedFinancementDoctorant(value: FinancementDoctorantVo) {
        this.financementDoctorantService.selectedFinancementDoctorant = value;
       }





}