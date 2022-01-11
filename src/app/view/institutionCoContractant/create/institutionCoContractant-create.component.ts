import {Component, OnInit} from '@angular/core';
import {InstitutionCoContractantService} from '../../../controller/service/InstitutionCoContractant.service';
import {InstitutionCoContractantVo} from '../../../controller/model/InstitutionCoContractant.model';
      import {InstitutionVo} from '../../../controller/model/Institution.model';
      import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-institutionCoContractant-create',
  templateUrl: './institutionCoContractant-create.component.html',
  styleUrls: ['./institutionCoContractant-create.component.css']
})
export class InstitutionCoContractantCreateComponent implements OnInit {

constructor(private institutionCoContractantService: InstitutionCoContractantService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.institutionCoContractantService.save().subscribe(institutionCoContractant=>{
          
       this.institutionCoContractants.push({...institutionCoContractant});
       this.createInstitutionCoContractantDialog = false;
       this.selectedInstitutionCoContractant = new InstitutionCoContractantVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createInstitutionCoContractantDialog  = false;
}

// getters and setters 

get institutionCoContractants(): Array<InstitutionCoContractantVo> {
    return this.institutionCoContractantService.institutionCoContractants;
       }
set institutionCoContractants(value: Array<InstitutionCoContractantVo>) {
        this.institutionCoContractantService.institutionCoContractants = value;
       } 

 get selectedInstitutionCoContractant():InstitutionCoContractantVo {
           return this.institutionCoContractantService.selectedInstitutionCoContractant;
       }
    set selectedInstitutionCoContractant(value: InstitutionCoContractantVo) {
        this.institutionCoContractantService.selectedInstitutionCoContractant = value;
       }
  
   get createInstitutionCoContractantDialog():boolean {
           return this.institutionCoContractantService.createInstitutionCoContractantDialog;
       }
    set createInstitutionCoContractantDialog(value: boolean) {
        this.institutionCoContractantService.createInstitutionCoContractantDialog= value;
       }


}