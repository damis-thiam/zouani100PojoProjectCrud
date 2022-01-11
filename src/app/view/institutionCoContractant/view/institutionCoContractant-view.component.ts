import {Component, OnInit} from '@angular/core';
import {InstitutionCoContractantService} from '../../../controller/service/InstitutionCoContractant.service';
import {InstitutionCoContractantVo} from '../../../controller/model/InstitutionCoContractant.model';
import {InstitutionVo} from '../../../controller/model/Institution.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-institutionCoContractant-view',
  templateUrl: './institutionCoContractant-view.component.html',
  styleUrls: ['./institutionCoContractant-view.component.css']
})
export class InstitutionCoContractantViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private institutionCoContractantService: InstitutionCoContractantService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewInstitutionCoContractantDialog = false;
    } 



   // getters and setters
    get viewInstitutionCoContractantDialog():boolean {
        return this.institutionCoContractantService.viewInstitutionCoContractantDialog;
        }
    set viewInstitutionCoContractantDialog(value: boolean) {
        this.institutionCoContractantService.viewInstitutionCoContractantDialog= value;
        }
    
    get selectedInstitutionCoContractant():InstitutionCoContractantVo {
           return this.institutionCoContractantService.selectedInstitutionCoContractant;
       }
    set selectedInstitutionCoContractant(value: InstitutionCoContractantVo) {
        this.institutionCoContractantService.selectedInstitutionCoContractant = value;
       }





}