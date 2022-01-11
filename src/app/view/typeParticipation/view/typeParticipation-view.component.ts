import {Component, OnInit} from '@angular/core';
import {TypeParticipationService} from '../../../controller/service/TypeParticipation.service';
import {TypeParticipationVo} from '../../../controller/model/TypeParticipation.model';

@Component({
  selector: 'app-typeParticipation-view',
  templateUrl: './typeParticipation-view.component.html',
  styleUrls: ['./typeParticipation-view.component.css']
})
export class TypeParticipationViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private typeParticipationService: TypeParticipationService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewTypeParticipationDialog = false;
    } 



   // getters and setters
    get viewTypeParticipationDialog():boolean {
        return this.typeParticipationService.viewTypeParticipationDialog;
        }
    set viewTypeParticipationDialog(value: boolean) {
        this.typeParticipationService.viewTypeParticipationDialog= value;
        }
    
    get selectedTypeParticipation():TypeParticipationVo {
           return this.typeParticipationService.selectedTypeParticipation;
       }
    set selectedTypeParticipation(value: TypeParticipationVo) {
        this.typeParticipationService.selectedTypeParticipation = value;
       }





}