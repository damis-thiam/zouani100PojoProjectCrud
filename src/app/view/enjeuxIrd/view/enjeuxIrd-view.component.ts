import {Component, OnInit} from '@angular/core';
import {EnjeuxIrdService} from '../../../controller/service/EnjeuxIrd.service';
import {EnjeuxIrdVo} from '../../../controller/model/EnjeuxIrd.model';

@Component({
  selector: 'app-enjeuxIrd-view',
  templateUrl: './enjeuxIrd-view.component.html',
  styleUrls: ['./enjeuxIrd-view.component.css']
})
export class EnjeuxIrdViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private enjeuxIrdService: EnjeuxIrdService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewEnjeuxIrdDialog = false;
    } 



   // getters and setters
    get viewEnjeuxIrdDialog():boolean {
        return this.enjeuxIrdService.viewEnjeuxIrdDialog;
        }
    set viewEnjeuxIrdDialog(value: boolean) {
        this.enjeuxIrdService.viewEnjeuxIrdDialog= value;
        }
    
    get selectedEnjeuxIrd():EnjeuxIrdVo {
           return this.enjeuxIrdService.selectedEnjeuxIrd;
       }
    set selectedEnjeuxIrd(value: EnjeuxIrdVo) {
        this.enjeuxIrdService.selectedEnjeuxIrd = value;
       }





}