import {Component, OnInit} from '@angular/core';
import {TypeSavoirService} from '../../../controller/service/TypeSavoir.service';
import {TypeSavoirVo} from '../../../controller/model/TypeSavoir.model';

@Component({
  selector: 'app-typeSavoir-view',
  templateUrl: './typeSavoir-view.component.html',
  styleUrls: ['./typeSavoir-view.component.css']
})
export class TypeSavoirViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private typeSavoirService: TypeSavoirService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewTypeSavoirDialog = false;
    } 



   // getters and setters
    get viewTypeSavoirDialog():boolean {
        return this.typeSavoirService.viewTypeSavoirDialog;
        }
    set viewTypeSavoirDialog(value: boolean) {
        this.typeSavoirService.viewTypeSavoirDialog= value;
        }
    
    get selectedTypeSavoir():TypeSavoirVo {
           return this.typeSavoirService.selectedTypeSavoir;
       }
    set selectedTypeSavoir(value: TypeSavoirVo) {
        this.typeSavoirService.selectedTypeSavoir = value;
       }





}