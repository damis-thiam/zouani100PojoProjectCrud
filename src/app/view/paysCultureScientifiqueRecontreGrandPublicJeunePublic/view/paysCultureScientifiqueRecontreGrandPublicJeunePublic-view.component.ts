import {Component, OnInit} from '@angular/core';
import {PaysCultureScientifiqueRecontreGrandPublicJeunePublicService} from '../../../controller/service/PaysCultureScientifiqueRecontreGrandPublicJeunePublic.service';
import {PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/PaysCultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {CultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/CultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-paysCultureScientifiqueRecontreGrandPublicJeunePublic-view',
  templateUrl: './paysCultureScientifiqueRecontreGrandPublicJeunePublic-view.component.html',
  styleUrls: ['./paysCultureScientifiqueRecontreGrandPublicJeunePublic-view.component.css']
})
export class PaysCultureScientifiqueRecontreGrandPublicJeunePublicViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private paysCultureScientifiqueRecontreGrandPublicJeunePublicService: PaysCultureScientifiqueRecontreGrandPublicJeunePublicService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog = false;
    } 



   // getters and setters
    get viewPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog():boolean {
        return this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.viewPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
        }
    set viewPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.viewPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog= value;
        }
    
    get selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic():PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo {
           return this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic;
       }
    set selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic(value: PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo) {
        this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic = value;
       }





}