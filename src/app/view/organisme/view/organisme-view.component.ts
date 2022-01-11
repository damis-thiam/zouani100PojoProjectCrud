import {Component, OnInit} from '@angular/core';
import {OrganismeService} from '../../../controller/service/Organisme.service';
import {OrganismeVo} from '../../../controller/model/Organisme.model';

@Component({
  selector: 'app-organisme-view',
  templateUrl: './organisme-view.component.html',
  styleUrls: ['./organisme-view.component.css']
})
export class OrganismeViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private organismeService: OrganismeService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewOrganismeDialog = false;
    } 



   // getters and setters
    get viewOrganismeDialog():boolean {
        return this.organismeService.viewOrganismeDialog;
        }
    set viewOrganismeDialog(value: boolean) {
        this.organismeService.viewOrganismeDialog= value;
        }
    
    get selectedOrganisme():OrganismeVo {
           return this.organismeService.selectedOrganisme;
       }
    set selectedOrganisme(value: OrganismeVo) {
        this.organismeService.selectedOrganisme = value;
       }





}