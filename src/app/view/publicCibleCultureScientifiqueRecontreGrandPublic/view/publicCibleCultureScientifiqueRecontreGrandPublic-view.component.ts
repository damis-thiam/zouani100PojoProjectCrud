import {Component, OnInit} from '@angular/core';
import {PublicCibleCultureScientifiqueRecontreGrandPublicService} from '../../../controller/service/PublicCibleCultureScientifiqueRecontreGrandPublic.service';
import {PublicCibleCultureScientifiqueRecontreGrandPublicVo} from '../../../controller/model/PublicCibleCultureScientifiqueRecontreGrandPublic.model';
import {PublicCibleVo} from '../../../controller/model/PublicCible.model';
import {CultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/CultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-publicCibleCultureScientifiqueRecontreGrandPublic-view',
  templateUrl: './publicCibleCultureScientifiqueRecontreGrandPublic-view.component.html',
  styleUrls: ['./publicCibleCultureScientifiqueRecontreGrandPublic-view.component.css']
})
export class PublicCibleCultureScientifiqueRecontreGrandPublicViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private publicCibleCultureScientifiqueRecontreGrandPublicService: PublicCibleCultureScientifiqueRecontreGrandPublicService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewPublicCibleCultureScientifiqueRecontreGrandPublicDialog = false;
    } 



   // getters and setters
    get viewPublicCibleCultureScientifiqueRecontreGrandPublicDialog():boolean {
        return this.publicCibleCultureScientifiqueRecontreGrandPublicService.viewPublicCibleCultureScientifiqueRecontreGrandPublicDialog;
        }
    set viewPublicCibleCultureScientifiqueRecontreGrandPublicDialog(value: boolean) {
        this.publicCibleCultureScientifiqueRecontreGrandPublicService.viewPublicCibleCultureScientifiqueRecontreGrandPublicDialog= value;
        }
    
    get selectedPublicCibleCultureScientifiqueRecontreGrandPublic():PublicCibleCultureScientifiqueRecontreGrandPublicVo {
           return this.publicCibleCultureScientifiqueRecontreGrandPublicService.selectedPublicCibleCultureScientifiqueRecontreGrandPublic;
       }
    set selectedPublicCibleCultureScientifiqueRecontreGrandPublic(value: PublicCibleCultureScientifiqueRecontreGrandPublicVo) {
        this.publicCibleCultureScientifiqueRecontreGrandPublicService.selectedPublicCibleCultureScientifiqueRecontreGrandPublic = value;
       }





}