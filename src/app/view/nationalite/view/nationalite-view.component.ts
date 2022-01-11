import {Component, OnInit} from '@angular/core';
import {NationaliteService} from '../../../controller/service/Nationalite.service';
import {NationaliteVo} from '../../../controller/model/Nationalite.model';

@Component({
  selector: 'app-nationalite-view',
  templateUrl: './nationalite-view.component.html',
  styleUrls: ['./nationalite-view.component.css']
})
export class NationaliteViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private nationaliteService: NationaliteService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewNationaliteDialog = false;
    } 



   // getters and setters
    get viewNationaliteDialog():boolean {
        return this.nationaliteService.viewNationaliteDialog;
        }
    set viewNationaliteDialog(value: boolean) {
        this.nationaliteService.viewNationaliteDialog= value;
        }
    
    get selectedNationalite():NationaliteVo {
           return this.nationaliteService.selectedNationalite;
       }
    set selectedNationalite(value: NationaliteVo) {
        this.nationaliteService.selectedNationalite = value;
       }





}