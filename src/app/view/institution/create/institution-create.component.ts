import {Component, OnInit} from '@angular/core';
import {InstitutionService} from '../../../controller/service/Institution.service';
import {InstitutionVo} from '../../../controller/model/Institution.model';

@Component({
  selector: 'app-institution-create',
  templateUrl: './institution-create.component.html',
  styleUrls: ['./institution-create.component.css']
})
export class InstitutionCreateComponent implements OnInit {

constructor(private institutionService: InstitutionService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.institutionService.save().subscribe(institution=>{
          
       this.institutions.push({...institution});
       this.createInstitutionDialog = false;
       this.selectedInstitution = new InstitutionVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createInstitutionDialog  = false;
}

// getters and setters 

get institutions(): Array<InstitutionVo> {
    return this.institutionService.institutions;
       }
set institutions(value: Array<InstitutionVo>) {
        this.institutionService.institutions = value;
       } 

 get selectedInstitution():InstitutionVo {
           return this.institutionService.selectedInstitution;
       }
    set selectedInstitution(value: InstitutionVo) {
        this.institutionService.selectedInstitution = value;
       }
  
   get createInstitutionDialog():boolean {
           return this.institutionService.createInstitutionDialog;
       }
    set createInstitutionDialog(value: boolean) {
        this.institutionService.createInstitutionDialog= value;
       }


}