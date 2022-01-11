import {Component, OnInit} from '@angular/core';
import {ContexteCultureScientifiqueRecontreGrandPublicJeunePublicService} from '../../../controller/service/ContexteCultureScientifiqueRecontreGrandPublicJeunePublic.service';
import {ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/ContexteCultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {ContexteVo} from '../../../controller/model/Contexte.model';
import {CultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/CultureScientifiqueRecontreGrandPublicJeunePublic.model';

@Component({
  selector: 'app-contexteCultureScientifiqueRecontreGrandPublicJeunePublic-view',
  templateUrl: './contexteCultureScientifiqueRecontreGrandPublicJeunePublic-view.component.html',
  styleUrls: ['./contexteCultureScientifiqueRecontreGrandPublicJeunePublic-view.component.css']
})
export class ContexteCultureScientifiqueRecontreGrandPublicJeunePublicViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private contexteCultureScientifiqueRecontreGrandPublicJeunePublicService: ContexteCultureScientifiqueRecontreGrandPublicJeunePublicService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog = false;
    } 



   // getters and setters
    get viewContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog():boolean {
        return this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.viewContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
        }
    set viewContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.viewContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog= value;
        }
    
    get selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic():ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo {
           return this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic;
       }
    set selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic(value: ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo) {
        this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic = value;
       }





}