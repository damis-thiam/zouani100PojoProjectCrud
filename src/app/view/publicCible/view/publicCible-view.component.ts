import {Component, OnInit} from '@angular/core';
import {PublicCibleService} from '../../../controller/service/PublicCible.service';
import {PublicCibleVo} from '../../../controller/model/PublicCible.model';

@Component({
  selector: 'app-publicCible-view',
  templateUrl: './publicCible-view.component.html',
  styleUrls: ['./publicCible-view.component.css']
})
export class PublicCibleViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private publicCibleService: PublicCibleService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewPublicCibleDialog = false;
    } 



   // getters and setters
    get viewPublicCibleDialog():boolean {
        return this.publicCibleService.viewPublicCibleDialog;
        }
    set viewPublicCibleDialog(value: boolean) {
        this.publicCibleService.viewPublicCibleDialog= value;
        }
    
    get selectedPublicCible():PublicCibleVo {
           return this.publicCibleService.selectedPublicCible;
       }
    set selectedPublicCible(value: PublicCibleVo) {
        this.publicCibleService.selectedPublicCible = value;
       }





}