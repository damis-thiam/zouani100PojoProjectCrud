import {Component, OnInit} from '@angular/core';
import {CommunauteSavoirEncadrementEtudiantService} from '../../../controller/service/CommunauteSavoirEncadrementEtudiant.service';
import {CommunauteSavoirEncadrementEtudiantVo} from '../../../controller/model/CommunauteSavoirEncadrementEtudiant.model';
import {EncadrementEtudiantVo} from '../../../controller/model/EncadrementEtudiant.model';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';

@Component({
  selector: 'app-communauteSavoirEncadrementEtudiant-view',
  templateUrl: './communauteSavoirEncadrementEtudiant-view.component.html',
  styleUrls: ['./communauteSavoirEncadrementEtudiant-view.component.css']
})
export class CommunauteSavoirEncadrementEtudiantViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private communauteSavoirEncadrementEtudiantService: CommunauteSavoirEncadrementEtudiantService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewCommunauteSavoirEncadrementEtudiantDialog = false;
    } 



   // getters and setters
    get viewCommunauteSavoirEncadrementEtudiantDialog():boolean {
        return this.communauteSavoirEncadrementEtudiantService.viewCommunauteSavoirEncadrementEtudiantDialog;
        }
    set viewCommunauteSavoirEncadrementEtudiantDialog(value: boolean) {
        this.communauteSavoirEncadrementEtudiantService.viewCommunauteSavoirEncadrementEtudiantDialog= value;
        }
    
    get selectedCommunauteSavoirEncadrementEtudiant():CommunauteSavoirEncadrementEtudiantVo {
           return this.communauteSavoirEncadrementEtudiantService.selectedCommunauteSavoirEncadrementEtudiant;
       }
    set selectedCommunauteSavoirEncadrementEtudiant(value: CommunauteSavoirEncadrementEtudiantVo) {
        this.communauteSavoirEncadrementEtudiantService.selectedCommunauteSavoirEncadrementEtudiant = value;
       }





}