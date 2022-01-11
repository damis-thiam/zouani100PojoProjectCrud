import {Component, OnInit} from '@angular/core';
import {NatureEnseignementService} from '../../../controller/service/NatureEnseignement.service';
import {NatureEnseignementVo} from '../../../controller/model/NatureEnseignement.model';
import {EnseignementVo} from '../../../controller/model/Enseignement.model';
import {NatureEtudeVo} from '../../../controller/model/NatureEtude.model';

@Component({
  selector: 'app-natureEnseignement-view',
  templateUrl: './natureEnseignement-view.component.html',
  styleUrls: ['./natureEnseignement-view.component.css']
})
export class NatureEnseignementViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private natureEnseignementService: NatureEnseignementService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewNatureEnseignementDialog = false;
    } 



   // getters and setters
    get viewNatureEnseignementDialog():boolean {
        return this.natureEnseignementService.viewNatureEnseignementDialog;
        }
    set viewNatureEnseignementDialog(value: boolean) {
        this.natureEnseignementService.viewNatureEnseignementDialog= value;
        }
    
    get selectedNatureEnseignement():NatureEnseignementVo {
           return this.natureEnseignementService.selectedNatureEnseignement;
       }
    set selectedNatureEnseignement(value: NatureEnseignementVo) {
        this.natureEnseignementService.selectedNatureEnseignement = value;
       }





}