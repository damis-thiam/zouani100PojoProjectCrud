import {Component, OnInit} from '@angular/core';
import {PubliquePrincipalService} from '../../../controller/service/PubliquePrincipal.service';
import {PubliquePrincipalVo} from '../../../controller/model/PubliquePrincipal.model';

@Component({
  selector: 'app-publiquePrincipal-view',
  templateUrl: './publiquePrincipal-view.component.html',
  styleUrls: ['./publiquePrincipal-view.component.css']
})
export class PubliquePrincipalViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private publiquePrincipalService: PubliquePrincipalService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewPubliquePrincipalDialog = false;
    } 



   // getters and setters
    get viewPubliquePrincipalDialog():boolean {
        return this.publiquePrincipalService.viewPubliquePrincipalDialog;
        }
    set viewPubliquePrincipalDialog(value: boolean) {
        this.publiquePrincipalService.viewPubliquePrincipalDialog= value;
        }
    
    get selectedPubliquePrincipal():PubliquePrincipalVo {
           return this.publiquePrincipalService.selectedPubliquePrincipal;
       }
    set selectedPubliquePrincipal(value: PubliquePrincipalVo) {
        this.publiquePrincipalService.selectedPubliquePrincipal = value;
       }





}