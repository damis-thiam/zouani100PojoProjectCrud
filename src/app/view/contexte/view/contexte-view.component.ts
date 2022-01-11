import {Component, OnInit} from '@angular/core';
import {ContexteService} from '../../../controller/service/Contexte.service';
import {ContexteVo} from '../../../controller/model/Contexte.model';

@Component({
  selector: 'app-contexte-view',
  templateUrl: './contexte-view.component.html',
  styleUrls: ['./contexte-view.component.css']
})
export class ContexteViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private contexteService: ContexteService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewContexteDialog = false;
    } 



   // getters and setters
    get viewContexteDialog():boolean {
        return this.contexteService.viewContexteDialog;
        }
    set viewContexteDialog(value: boolean) {
        this.contexteService.viewContexteDialog= value;
        }
    
    get selectedContexte():ContexteVo {
           return this.contexteService.selectedContexte;
       }
    set selectedContexte(value: ContexteVo) {
        this.contexteService.selectedContexte = value;
       }





}