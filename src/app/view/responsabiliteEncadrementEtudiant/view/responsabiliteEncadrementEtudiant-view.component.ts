import {Component, OnInit} from '@angular/core';
import {ResponsabiliteEncadrementEtudiantService} from '../../../controller/service/ResponsabiliteEncadrementEtudiant.service';
import {ResponsabiliteEncadrementEtudiantVo} from '../../../controller/model/ResponsabiliteEncadrementEtudiant.model';

@Component({
  selector: 'app-responsabiliteEncadrementEtudiant-view',
  templateUrl: './responsabiliteEncadrementEtudiant-view.component.html',
  styleUrls: ['./responsabiliteEncadrementEtudiant-view.component.css']
})
export class ResponsabiliteEncadrementEtudiantViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private responsabiliteEncadrementEtudiantService: ResponsabiliteEncadrementEtudiantService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewResponsabiliteEncadrementEtudiantDialog = false;
    } 



   // getters and setters
    get viewResponsabiliteEncadrementEtudiantDialog():boolean {
        return this.responsabiliteEncadrementEtudiantService.viewResponsabiliteEncadrementEtudiantDialog;
        }
    set viewResponsabiliteEncadrementEtudiantDialog(value: boolean) {
        this.responsabiliteEncadrementEtudiantService.viewResponsabiliteEncadrementEtudiantDialog= value;
        }
    
    get selectedResponsabiliteEncadrementEtudiant():ResponsabiliteEncadrementEtudiantVo {
           return this.responsabiliteEncadrementEtudiantService.selectedResponsabiliteEncadrementEtudiant;
       }
    set selectedResponsabiliteEncadrementEtudiant(value: ResponsabiliteEncadrementEtudiantVo) {
        this.responsabiliteEncadrementEtudiantService.selectedResponsabiliteEncadrementEtudiant = value;
       }





}