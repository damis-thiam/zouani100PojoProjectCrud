import {Component, OnInit} from '@angular/core';
import {ContexteCultureScientifiqueRecontreGrandPublicJeunePublicService} from '../../../controller/service/ContexteCultureScientifiqueRecontreGrandPublicJeunePublic.service';
import {ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/ContexteCultureScientifiqueRecontreGrandPublicJeunePublic.model';
      import {ContexteVo} from '../../../controller/model/Contexte.model';
      import {CultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/CultureScientifiqueRecontreGrandPublicJeunePublic.model';

@Component({
  selector: 'app-contexteCultureScientifiqueRecontreGrandPublicJeunePublic-create',
  templateUrl: './contexteCultureScientifiqueRecontreGrandPublicJeunePublic-create.component.html',
  styleUrls: ['./contexteCultureScientifiqueRecontreGrandPublicJeunePublic-create.component.css']
})
export class ContexteCultureScientifiqueRecontreGrandPublicJeunePublicCreateComponent implements OnInit {

constructor(private contexteCultureScientifiqueRecontreGrandPublicJeunePublicService: ContexteCultureScientifiqueRecontreGrandPublicJeunePublicService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.save().subscribe(contexteCultureScientifiqueRecontreGrandPublicJeunePublic=>{
          
       this.contexteCultureScientifiqueRecontreGrandPublicJeunePublics.push({...contexteCultureScientifiqueRecontreGrandPublicJeunePublic});
       this.createContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog = false;
       this.selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic = new ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog  = false;
}

// getters and setters 

get contexteCultureScientifiqueRecontreGrandPublicJeunePublics(): Array<ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo> {
    return this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.contexteCultureScientifiqueRecontreGrandPublicJeunePublics;
       }
set contexteCultureScientifiqueRecontreGrandPublicJeunePublics(value: Array<ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo>) {
        this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.contexteCultureScientifiqueRecontreGrandPublicJeunePublics = value;
       } 

 get selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic():ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo {
           return this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic;
       }
    set selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic(value: ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo) {
        this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic = value;
       }
  
   get createContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog():boolean {
           return this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.createContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
    set createContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.createContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog= value;
       }


}