import {Component, OnInit} from '@angular/core';
import {TypeExpertiseService} from '../../../controller/service/TypeExpertise.service';
import {TypeExpertiseVo} from '../../../controller/model/TypeExpertise.model';

@Component({
  selector: 'app-typeExpertise-view',
  templateUrl: './typeExpertise-view.component.html',
  styleUrls: ['./typeExpertise-view.component.css']
})
export class TypeExpertiseViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private typeExpertiseService: TypeExpertiseService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewTypeExpertiseDialog = false;
    } 



   // getters and setters
    get viewTypeExpertiseDialog():boolean {
        return this.typeExpertiseService.viewTypeExpertiseDialog;
        }
    set viewTypeExpertiseDialog(value: boolean) {
        this.typeExpertiseService.viewTypeExpertiseDialog= value;
        }
    
    get selectedTypeExpertise():TypeExpertiseVo {
           return this.typeExpertiseService.selectedTypeExpertise;
       }
    set selectedTypeExpertise(value: TypeExpertiseVo) {
        this.typeExpertiseService.selectedTypeExpertise = value;
       }





}