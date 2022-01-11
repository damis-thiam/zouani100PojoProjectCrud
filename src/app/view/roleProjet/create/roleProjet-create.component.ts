import {Component, OnInit} from '@angular/core';
import {RoleProjetService} from '../../../controller/service/RoleProjet.service';
import {RoleProjetVo} from '../../../controller/model/RoleProjet.model';

@Component({
  selector: 'app-roleProjet-create',
  templateUrl: './roleProjet-create.component.html',
  styleUrls: ['./roleProjet-create.component.css']
})
export class RoleProjetCreateComponent implements OnInit {

constructor(private roleProjetService: RoleProjetService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.roleProjetService.save().subscribe(roleProjet=>{
          
       this.roleProjets.push({...roleProjet});
       this.createRoleProjetDialog = false;
       this.selectedRoleProjet = new RoleProjetVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createRoleProjetDialog  = false;
}

// getters and setters 

get roleProjets(): Array<RoleProjetVo> {
    return this.roleProjetService.roleProjets;
       }
set roleProjets(value: Array<RoleProjetVo>) {
        this.roleProjetService.roleProjets = value;
       } 

 get selectedRoleProjet():RoleProjetVo {
           return this.roleProjetService.selectedRoleProjet;
       }
    set selectedRoleProjet(value: RoleProjetVo) {
        this.roleProjetService.selectedRoleProjet = value;
       }
  
   get createRoleProjetDialog():boolean {
           return this.roleProjetService.createRoleProjetDialog;
       }
    set createRoleProjetDialog(value: boolean) {
        this.roleProjetService.createRoleProjetDialog= value;
       }


}