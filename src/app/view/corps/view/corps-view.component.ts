import {Component, OnInit} from '@angular/core';
import {CorpsService} from '../../../controller/service/Corps.service';
import {CorpsVo} from '../../../controller/model/Corps.model';

@Component({
  selector: 'app-corps-view',
  templateUrl: './corps-view.component.html',
  styleUrls: ['./corps-view.component.css']
})
export class CorpsViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private corpsService: CorpsService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewCorpsDialog = false;
    } 



   // getters and setters
    get viewCorpsDialog():boolean {
        return this.corpsService.viewCorpsDialog;
        }
    set viewCorpsDialog(value: boolean) {
        this.corpsService.viewCorpsDialog= value;
        }
    
    get selectedCorps():CorpsVo {
           return this.corpsService.selectedCorps;
       }
    set selectedCorps(value: CorpsVo) {
        this.corpsService.selectedCorps = value;
       }





}