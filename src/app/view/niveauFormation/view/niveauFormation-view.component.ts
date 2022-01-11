import {Component, OnInit} from '@angular/core';
import {NiveauFormationService} from '../../../controller/service/NiveauFormation.service';
import {NiveauFormationVo} from '../../../controller/model/NiveauFormation.model';

@Component({
  selector: 'app-niveauFormation-view',
  templateUrl: './niveauFormation-view.component.html',
  styleUrls: ['./niveauFormation-view.component.css']
})
export class NiveauFormationViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private niveauFormationService: NiveauFormationService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewNiveauFormationDialog = false;
    } 



   // getters and setters
    get viewNiveauFormationDialog():boolean {
        return this.niveauFormationService.viewNiveauFormationDialog;
        }
    set viewNiveauFormationDialog(value: boolean) {
        this.niveauFormationService.viewNiveauFormationDialog= value;
        }
    
    get selectedNiveauFormation():NiveauFormationVo {
           return this.niveauFormationService.selectedNiveauFormation;
       }
    set selectedNiveauFormation(value: NiveauFormationVo) {
        this.niveauFormationService.selectedNiveauFormation = value;
       }





}