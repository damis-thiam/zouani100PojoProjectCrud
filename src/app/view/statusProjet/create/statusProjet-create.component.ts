import {Component, OnInit} from '@angular/core';
import {StatusProjetService} from '../../../controller/service/StatusProjet.service';
import {StatusProjetVo} from '../../../controller/model/StatusProjet.model';

@Component({
  selector: 'app-statusProjet-create',
  templateUrl: './statusProjet-create.component.html',
  styleUrls: ['./statusProjet-create.component.css']
})
export class StatusProjetCreateComponent implements OnInit {

constructor(private statusProjetService: StatusProjetService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.statusProjetService.save().subscribe(statusProjet=>{
          
       this.statusProjets.push({...statusProjet});
       this.createStatusProjetDialog = false;
       this.selectedStatusProjet = new StatusProjetVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createStatusProjetDialog  = false;
}

// getters and setters 

get statusProjets(): Array<StatusProjetVo> {
    return this.statusProjetService.statusProjets;
       }
set statusProjets(value: Array<StatusProjetVo>) {
        this.statusProjetService.statusProjets = value;
       } 

 get selectedStatusProjet():StatusProjetVo {
           return this.statusProjetService.selectedStatusProjet;
       }
    set selectedStatusProjet(value: StatusProjetVo) {
        this.statusProjetService.selectedStatusProjet = value;
       }
  
   get createStatusProjetDialog():boolean {
           return this.statusProjetService.createStatusProjetDialog;
       }
    set createStatusProjetDialog(value: boolean) {
        this.statusProjetService.createStatusProjetDialog= value;
       }


}