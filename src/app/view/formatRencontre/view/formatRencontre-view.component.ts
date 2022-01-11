import {Component, OnInit} from '@angular/core';
import {FormatRencontreService} from '../../../controller/service/FormatRencontre.service';
import {FormatRencontreVo} from '../../../controller/model/FormatRencontre.model';

@Component({
  selector: 'app-formatRencontre-view',
  templateUrl: './formatRencontre-view.component.html',
  styleUrls: ['./formatRencontre-view.component.css']
})
export class FormatRencontreViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private formatRencontreService: FormatRencontreService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewFormatRencontreDialog = false;
    } 



   // getters and setters
    get viewFormatRencontreDialog():boolean {
        return this.formatRencontreService.viewFormatRencontreDialog;
        }
    set viewFormatRencontreDialog(value: boolean) {
        this.formatRencontreService.viewFormatRencontreDialog= value;
        }
    
    get selectedFormatRencontre():FormatRencontreVo {
           return this.formatRencontreService.selectedFormatRencontre;
       }
    set selectedFormatRencontre(value: FormatRencontreVo) {
        this.formatRencontreService.selectedFormatRencontre = value;
       }





}