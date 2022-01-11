import {Component, OnInit} from '@angular/core';
import {TypeInstanceService} from '../../../controller/service/TypeInstance.service';
import {TypeInstanceVo} from '../../../controller/model/TypeInstance.model';

@Component({
  selector: 'app-typeInstance-view',
  templateUrl: './typeInstance-view.component.html',
  styleUrls: ['./typeInstance-view.component.css']
})
export class TypeInstanceViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private typeInstanceService: TypeInstanceService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewTypeInstanceDialog = false;
    } 



   // getters and setters
    get viewTypeInstanceDialog():boolean {
        return this.typeInstanceService.viewTypeInstanceDialog;
        }
    set viewTypeInstanceDialog(value: boolean) {
        this.typeInstanceService.viewTypeInstanceDialog= value;
        }
    
    get selectedTypeInstance():TypeInstanceVo {
           return this.typeInstanceService.selectedTypeInstance;
       }
    set selectedTypeInstance(value: TypeInstanceVo) {
        this.typeInstanceService.selectedTypeInstance = value;
       }





}