import {Component, OnInit} from '@angular/core';
import {PaysService} from '../../../controller/service/Pays.service';
import {PaysVo} from '../../../controller/model/Pays.model';
import {ContinentVo} from '../../../controller/model/Continent.model';

@Component({
  selector: 'app-pays-view',
  templateUrl: './pays-view.component.html',
  styleUrls: ['./pays-view.component.css']
})
export class PaysViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private paysService: PaysService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewPaysDialog = false;
    } 



   // getters and setters
    get viewPaysDialog():boolean {
        return this.paysService.viewPaysDialog;
        }
    set viewPaysDialog(value: boolean) {
        this.paysService.viewPaysDialog= value;
        }
    
    get selectedPays():PaysVo {
           return this.paysService.selectedPays;
       }
    set selectedPays(value: PaysVo) {
        this.paysService.selectedPays = value;
       }





}