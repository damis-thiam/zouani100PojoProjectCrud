import {Component, OnInit} from '@angular/core';
import {OrganismeService} from '../../../controller/service/Organisme.service';
import {OrganismeVo} from '../../../controller/model/Organisme.model';

@Component({
  selector: 'app-organisme-create',
  templateUrl: './organisme-create.component.html',
  styleUrls: ['./organisme-create.component.css']
})
export class OrganismeCreateComponent implements OnInit {

constructor(private organismeService: OrganismeService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.organismeService.save().subscribe(organisme=>{
          
       this.organismes.push({...organisme});
       this.createOrganismeDialog = false;
       this.selectedOrganisme = new OrganismeVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createOrganismeDialog  = false;
}

// getters and setters 

get organismes(): Array<OrganismeVo> {
    return this.organismeService.organismes;
       }
set organismes(value: Array<OrganismeVo>) {
        this.organismeService.organismes = value;
       } 

 get selectedOrganisme():OrganismeVo {
           return this.organismeService.selectedOrganisme;
       }
    set selectedOrganisme(value: OrganismeVo) {
        this.organismeService.selectedOrganisme = value;
       }
  
   get createOrganismeDialog():boolean {
           return this.organismeService.createOrganismeDialog;
       }
    set createOrganismeDialog(value: boolean) {
        this.organismeService.createOrganismeDialog= value;
       }


}