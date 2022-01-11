import {Component, OnInit} from '@angular/core';
import {DoctorantService} from '../../../controller/service/Doctorant.service';
import {DoctorantVo} from '../../../controller/model/Doctorant.model';
import {SexeVo} from '../../../controller/model/Sexe.model';
import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-doctorant-view',
  templateUrl: './doctorant-view.component.html',
  styleUrls: ['./doctorant-view.component.css']
})
export class DoctorantViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private doctorantService: DoctorantService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewDoctorantDialog = false;
    } 



   // getters and setters
    get viewDoctorantDialog():boolean {
        return this.doctorantService.viewDoctorantDialog;
        }
    set viewDoctorantDialog(value: boolean) {
        this.doctorantService.viewDoctorantDialog= value;
        }
    
    get selectedDoctorant():DoctorantVo {
           return this.doctorantService.selectedDoctorant;
       }
    set selectedDoctorant(value: DoctorantVo) {
        this.doctorantService.selectedDoctorant = value;
       }





}