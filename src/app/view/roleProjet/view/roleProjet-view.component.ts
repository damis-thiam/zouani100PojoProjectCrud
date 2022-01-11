import {Component, OnInit} from '@angular/core';
import {RoleProjetService} from '../../../controller/service/RoleProjet.service';
import {RoleProjetVo} from '../../../controller/model/RoleProjet.model';

@Component({
  selector: 'app-roleProjet-view',
  templateUrl: './roleProjet-view.component.html',
  styleUrls: ['./roleProjet-view.component.css']
})
export class RoleProjetViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private roleProjetService: RoleProjetService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewRoleProjetDialog = false;
    } 



   // getters and setters
    get viewRoleProjetDialog():boolean {
        return this.roleProjetService.viewRoleProjetDialog;
        }
    set viewRoleProjetDialog(value: boolean) {
        this.roleProjetService.viewRoleProjetDialog= value;
        }
    
    get selectedRoleProjet():RoleProjetVo {
           return this.roleProjetService.selectedRoleProjet;
       }
    set selectedRoleProjet(value: RoleProjetVo) {
        this.roleProjetService.selectedRoleProjet = value;
       }





}