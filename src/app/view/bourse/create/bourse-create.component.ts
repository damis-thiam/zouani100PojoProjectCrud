import {Component, OnInit} from '@angular/core';
import {BourseService} from '../../../controller/service/Bourse.service';
import {BourseVo} from '../../../controller/model/Bourse.model';
      import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
      import {TypeParticipationVo} from '../../../controller/model/TypeParticipation.model';

@Component({
  selector: 'app-bourse-create',
  templateUrl: './bourse-create.component.html',
  styleUrls: ['./bourse-create.component.css']
})
export class BourseCreateComponent implements OnInit {

constructor(private bourseService: BourseService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.bourseService.save().subscribe(bourse=>{
          
       this.bourses.push({...bourse});
       this.createBourseDialog = false;
       this.selectedBourse = new BourseVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createBourseDialog  = false;
}

// getters and setters 

get bourses(): Array<BourseVo> {
    return this.bourseService.bourses;
       }
set bourses(value: Array<BourseVo>) {
        this.bourseService.bourses = value;
       } 

 get selectedBourse():BourseVo {
           return this.bourseService.selectedBourse;
       }
    set selectedBourse(value: BourseVo) {
        this.bourseService.selectedBourse = value;
       }
  
   get createBourseDialog():boolean {
           return this.bourseService.createBourseDialog;
       }
    set createBourseDialog(value: boolean) {
        this.bourseService.createBourseDialog= value;
       }


}