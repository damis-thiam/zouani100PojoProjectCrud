import {Component, OnInit} from '@angular/core';
import {InstitutionService} from '../../../controller/service/Institution.service';
import {InstitutionVo} from '../../../controller/model/Institution.model';

@Component({
  selector: 'app-institution-view',
  templateUrl: './institution-view.component.html',
  styleUrls: ['./institution-view.component.css']
})
export class InstitutionViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private institutionService: InstitutionService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewInstitutionDialog = false;
    } 



   // getters and setters
    get viewInstitutionDialog():boolean {
        return this.institutionService.viewInstitutionDialog;
        }
    set viewInstitutionDialog(value: boolean) {
        this.institutionService.viewInstitutionDialog= value;
        }
    
    get selectedInstitution():InstitutionVo {
           return this.institutionService.selectedInstitution;
       }
    set selectedInstitution(value: InstitutionVo) {
        this.institutionService.selectedInstitution = value;
       }





}