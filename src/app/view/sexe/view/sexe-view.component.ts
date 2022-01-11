import {Component, OnInit} from '@angular/core';
import {SexeService} from '../../../controller/service/Sexe.service';
import {SexeVo} from '../../../controller/model/Sexe.model';

@Component({
  selector: 'app-sexe-view',
  templateUrl: './sexe-view.component.html',
  styleUrls: ['./sexe-view.component.css']
})
export class SexeViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private sexeService: SexeService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewSexeDialog = false;
    } 



   // getters and setters
    get viewSexeDialog():boolean {
        return this.sexeService.viewSexeDialog;
        }
    set viewSexeDialog(value: boolean) {
        this.sexeService.viewSexeDialog= value;
        }
    
    get selectedSexe():SexeVo {
           return this.sexeService.selectedSexe;
       }
    set selectedSexe(value: SexeVo) {
        this.sexeService.selectedSexe = value;
       }





}