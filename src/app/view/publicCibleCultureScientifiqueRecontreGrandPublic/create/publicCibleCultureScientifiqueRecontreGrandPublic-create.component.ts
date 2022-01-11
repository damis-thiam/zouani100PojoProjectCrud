import {Component, OnInit} from '@angular/core';
import {PublicCibleCultureScientifiqueRecontreGrandPublicService} from '../../../controller/service/PublicCibleCultureScientifiqueRecontreGrandPublic.service';
import {PublicCibleCultureScientifiqueRecontreGrandPublicVo} from '../../../controller/model/PublicCibleCultureScientifiqueRecontreGrandPublic.model';
      import {PublicCibleVo} from '../../../controller/model/PublicCible.model';
      import {CultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/CultureScientifiqueRecontreGrandPublicJeunePublic.model';
      import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-publicCibleCultureScientifiqueRecontreGrandPublic-create',
  templateUrl: './publicCibleCultureScientifiqueRecontreGrandPublic-create.component.html',
  styleUrls: ['./publicCibleCultureScientifiqueRecontreGrandPublic-create.component.css']
})
export class PublicCibleCultureScientifiqueRecontreGrandPublicCreateComponent implements OnInit {

constructor(private publicCibleCultureScientifiqueRecontreGrandPublicService: PublicCibleCultureScientifiqueRecontreGrandPublicService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.publicCibleCultureScientifiqueRecontreGrandPublicService.save().subscribe(publicCibleCultureScientifiqueRecontreGrandPublic=>{
          
       this.publicCibleCultureScientifiqueRecontreGrandPublics.push({...publicCibleCultureScientifiqueRecontreGrandPublic});
       this.createPublicCibleCultureScientifiqueRecontreGrandPublicDialog = false;
       this.selectedPublicCibleCultureScientifiqueRecontreGrandPublic = new PublicCibleCultureScientifiqueRecontreGrandPublicVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createPublicCibleCultureScientifiqueRecontreGrandPublicDialog  = false;
}

// getters and setters 

get publicCibleCultureScientifiqueRecontreGrandPublics(): Array<PublicCibleCultureScientifiqueRecontreGrandPublicVo> {
    return this.publicCibleCultureScientifiqueRecontreGrandPublicService.publicCibleCultureScientifiqueRecontreGrandPublics;
       }
set publicCibleCultureScientifiqueRecontreGrandPublics(value: Array<PublicCibleCultureScientifiqueRecontreGrandPublicVo>) {
        this.publicCibleCultureScientifiqueRecontreGrandPublicService.publicCibleCultureScientifiqueRecontreGrandPublics = value;
       } 

 get selectedPublicCibleCultureScientifiqueRecontreGrandPublic():PublicCibleCultureScientifiqueRecontreGrandPublicVo {
           return this.publicCibleCultureScientifiqueRecontreGrandPublicService.selectedPublicCibleCultureScientifiqueRecontreGrandPublic;
       }
    set selectedPublicCibleCultureScientifiqueRecontreGrandPublic(value: PublicCibleCultureScientifiqueRecontreGrandPublicVo) {
        this.publicCibleCultureScientifiqueRecontreGrandPublicService.selectedPublicCibleCultureScientifiqueRecontreGrandPublic = value;
       }
  
   get createPublicCibleCultureScientifiqueRecontreGrandPublicDialog():boolean {
           return this.publicCibleCultureScientifiqueRecontreGrandPublicService.createPublicCibleCultureScientifiqueRecontreGrandPublicDialog;
       }
    set createPublicCibleCultureScientifiqueRecontreGrandPublicDialog(value: boolean) {
        this.publicCibleCultureScientifiqueRecontreGrandPublicService.createPublicCibleCultureScientifiqueRecontreGrandPublicDialog= value;
       }


}