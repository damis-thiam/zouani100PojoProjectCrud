import {Component, OnInit} from '@angular/core';
import {StatusProjetService} from '../../../controller/service/StatusProjet.service';
import {StatusProjetVo} from '../../../controller/model/StatusProjet.model';

@Component({
  selector: 'app-statusProjet-view',
  templateUrl: './statusProjet-view.component.html',
  styleUrls: ['./statusProjet-view.component.css']
})
export class StatusProjetViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private statusProjetService: StatusProjetService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewStatusProjetDialog = false;
    } 



   // getters and setters
    get viewStatusProjetDialog():boolean {
        return this.statusProjetService.viewStatusProjetDialog;
        }
    set viewStatusProjetDialog(value: boolean) {
        this.statusProjetService.viewStatusProjetDialog= value;
        }
    
    get selectedStatusProjet():StatusProjetVo {
           return this.statusProjetService.selectedStatusProjet;
       }
    set selectedStatusProjet(value: StatusProjetVo) {
        this.statusProjetService.selectedStatusProjet = value;
       }





}