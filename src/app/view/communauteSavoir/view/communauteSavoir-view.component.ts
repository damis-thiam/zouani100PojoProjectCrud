import {Component, OnInit} from '@angular/core';
import {CommunauteSavoirService} from '../../../controller/service/CommunauteSavoir.service';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';

@Component({
  selector: 'app-communauteSavoir-view',
  templateUrl: './communauteSavoir-view.component.html',
  styleUrls: ['./communauteSavoir-view.component.css']
})
export class CommunauteSavoirViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private communauteSavoirService: CommunauteSavoirService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewCommunauteSavoirDialog = false;
    } 



   // getters and setters
    get viewCommunauteSavoirDialog():boolean {
        return this.communauteSavoirService.viewCommunauteSavoirDialog;
        }
    set viewCommunauteSavoirDialog(value: boolean) {
        this.communauteSavoirService.viewCommunauteSavoirDialog= value;
        }
    
    get selectedCommunauteSavoir():CommunauteSavoirVo {
           return this.communauteSavoirService.selectedCommunauteSavoir;
       }
    set selectedCommunauteSavoir(value: CommunauteSavoirVo) {
        this.communauteSavoirService.selectedCommunauteSavoir = value;
       }





}