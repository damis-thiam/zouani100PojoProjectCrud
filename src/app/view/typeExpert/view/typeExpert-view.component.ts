import {Component, OnInit} from '@angular/core';
import {TypeExpertService} from '../../../controller/service/TypeExpert.service';
import {TypeExpertVo} from '../../../controller/model/TypeExpert.model';

@Component({
  selector: 'app-typeExpert-view',
  templateUrl: './typeExpert-view.component.html',
  styleUrls: ['./typeExpert-view.component.css']
})
export class TypeExpertViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private typeExpertService: TypeExpertService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewTypeExpertDialog = false;
    } 



   // getters and setters
    get viewTypeExpertDialog():boolean {
        return this.typeExpertService.viewTypeExpertDialog;
        }
    set viewTypeExpertDialog(value: boolean) {
        this.typeExpertService.viewTypeExpertDialog= value;
        }
    
    get selectedTypeExpert():TypeExpertVo {
           return this.typeExpertService.selectedTypeExpert;
       }
    set selectedTypeExpert(value: TypeExpertVo) {
        this.typeExpertService.selectedTypeExpert = value;
       }





}