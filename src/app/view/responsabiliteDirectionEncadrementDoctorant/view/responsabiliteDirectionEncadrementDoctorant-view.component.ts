import {Component, OnInit} from '@angular/core';
import {ResponsabiliteDirectionEncadrementDoctorantService} from '../../../controller/service/ResponsabiliteDirectionEncadrementDoctorant.service';
import {ResponsabiliteDirectionEncadrementDoctorantVo} from '../../../controller/model/ResponsabiliteDirectionEncadrementDoctorant.model';

@Component({
  selector: 'app-responsabiliteDirectionEncadrementDoctorant-view',
  templateUrl: './responsabiliteDirectionEncadrementDoctorant-view.component.html',
  styleUrls: ['./responsabiliteDirectionEncadrementDoctorant-view.component.css']
})
export class ResponsabiliteDirectionEncadrementDoctorantViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private responsabiliteDirectionEncadrementDoctorantService: ResponsabiliteDirectionEncadrementDoctorantService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewResponsabiliteDirectionEncadrementDoctorantDialog = false;
    } 



   // getters and setters
    get viewResponsabiliteDirectionEncadrementDoctorantDialog():boolean {
        return this.responsabiliteDirectionEncadrementDoctorantService.viewResponsabiliteDirectionEncadrementDoctorantDialog;
        }
    set viewResponsabiliteDirectionEncadrementDoctorantDialog(value: boolean) {
        this.responsabiliteDirectionEncadrementDoctorantService.viewResponsabiliteDirectionEncadrementDoctorantDialog= value;
        }
    
    get selectedResponsabiliteDirectionEncadrementDoctorant():ResponsabiliteDirectionEncadrementDoctorantVo {
           return this.responsabiliteDirectionEncadrementDoctorantService.selectedResponsabiliteDirectionEncadrementDoctorant;
       }
    set selectedResponsabiliteDirectionEncadrementDoctorant(value: ResponsabiliteDirectionEncadrementDoctorantVo) {
        this.responsabiliteDirectionEncadrementDoctorantService.selectedResponsabiliteDirectionEncadrementDoctorant = value;
       }





}