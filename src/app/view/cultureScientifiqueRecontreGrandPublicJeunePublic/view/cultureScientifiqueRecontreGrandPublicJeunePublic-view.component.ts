import {Component, OnInit} from '@angular/core';
import {CultureScientifiqueRecontreGrandPublicJeunePublicService} from '../../../controller/service/CultureScientifiqueRecontreGrandPublicJeunePublic.service';
import {CultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/CultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {FormatRencontreVo} from '../../../controller/model/FormatRencontre.model';

@Component({
  selector: 'app-cultureScientifiqueRecontreGrandPublicJeunePublic-view',
  templateUrl: './cultureScientifiqueRecontreGrandPublicJeunePublic-view.component.html',
  styleUrls: ['./cultureScientifiqueRecontreGrandPublicJeunePublic-view.component.css']
})
export class CultureScientifiqueRecontreGrandPublicJeunePublicViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private cultureScientifiqueRecontreGrandPublicJeunePublicService: CultureScientifiqueRecontreGrandPublicJeunePublicService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewCultureScientifiqueRecontreGrandPublicJeunePublicDialog = false;
    } 



   // getters and setters
    get viewCultureScientifiqueRecontreGrandPublicJeunePublicDialog():boolean {
        return this.cultureScientifiqueRecontreGrandPublicJeunePublicService.viewCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
        }
    set viewCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this.cultureScientifiqueRecontreGrandPublicJeunePublicService.viewCultureScientifiqueRecontreGrandPublicJeunePublicDialog= value;
        }
    
    get selectedCultureScientifiqueRecontreGrandPublicJeunePublic():CultureScientifiqueRecontreGrandPublicJeunePublicVo {
           return this.cultureScientifiqueRecontreGrandPublicJeunePublicService.selectedCultureScientifiqueRecontreGrandPublicJeunePublic;
       }
    set selectedCultureScientifiqueRecontreGrandPublicJeunePublic(value: CultureScientifiqueRecontreGrandPublicJeunePublicVo) {
        this.cultureScientifiqueRecontreGrandPublicJeunePublicService.selectedCultureScientifiqueRecontreGrandPublicJeunePublic = value;
       }





}