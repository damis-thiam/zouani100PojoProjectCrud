import {Component, OnInit} from '@angular/core';
import {CommunauteSavoirDirectionEncadrementDoctorantService} from '../../../controller/service/CommunauteSavoirDirectionEncadrementDoctorant.service';
import {CommunauteSavoirDirectionEncadrementDoctorantVo} from '../../../controller/model/CommunauteSavoirDirectionEncadrementDoctorant.model';
import {DirectionEncadrementDoctorantVo} from '../../../controller/model/DirectionEncadrementDoctorant.model';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';

@Component({
  selector: 'app-communauteSavoirDirectionEncadrementDoctorant-view',
  templateUrl: './communauteSavoirDirectionEncadrementDoctorant-view.component.html',
  styleUrls: ['./communauteSavoirDirectionEncadrementDoctorant-view.component.css']
})
export class CommunauteSavoirDirectionEncadrementDoctorantViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private communauteSavoirDirectionEncadrementDoctorantService: CommunauteSavoirDirectionEncadrementDoctorantService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewCommunauteSavoirDirectionEncadrementDoctorantDialog = false;
    } 



   // getters and setters
    get viewCommunauteSavoirDirectionEncadrementDoctorantDialog():boolean {
        return this.communauteSavoirDirectionEncadrementDoctorantService.viewCommunauteSavoirDirectionEncadrementDoctorantDialog;
        }
    set viewCommunauteSavoirDirectionEncadrementDoctorantDialog(value: boolean) {
        this.communauteSavoirDirectionEncadrementDoctorantService.viewCommunauteSavoirDirectionEncadrementDoctorantDialog= value;
        }
    
    get selectedCommunauteSavoirDirectionEncadrementDoctorant():CommunauteSavoirDirectionEncadrementDoctorantVo {
           return this.communauteSavoirDirectionEncadrementDoctorantService.selectedCommunauteSavoirDirectionEncadrementDoctorant;
       }
    set selectedCommunauteSavoirDirectionEncadrementDoctorant(value: CommunauteSavoirDirectionEncadrementDoctorantVo) {
        this.communauteSavoirDirectionEncadrementDoctorantService.selectedCommunauteSavoirDirectionEncadrementDoctorant = value;
       }





}