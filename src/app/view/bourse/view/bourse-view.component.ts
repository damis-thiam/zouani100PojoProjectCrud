import {Component, OnInit} from '@angular/core';
import {BourseService} from '../../../controller/service/Bourse.service';
import {BourseVo} from '../../../controller/model/Bourse.model';
import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
import {TypeParticipationVo} from '../../../controller/model/TypeParticipation.model';

@Component({
  selector: 'app-bourse-view',
  templateUrl: './bourse-view.component.html',
  styleUrls: ['./bourse-view.component.css']
})
export class BourseViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private bourseService: BourseService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewBourseDialog = false;
    } 



   // getters and setters
    get viewBourseDialog():boolean {
        return this.bourseService.viewBourseDialog;
        }
    set viewBourseDialog(value: boolean) {
        this.bourseService.viewBourseDialog= value;
        }
    
    get selectedBourse():BourseVo {
           return this.bourseService.selectedBourse;
       }
    set selectedBourse(value: BourseVo) {
        this.bourseService.selectedBourse = value;
       }





}