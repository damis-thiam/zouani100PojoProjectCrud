import {Component, OnInit} from '@angular/core';
import {PublicCibleService} from '../../../controller/service/PublicCible.service';
import {PublicCibleVo} from '../../../controller/model/PublicCible.model';

@Component({
  selector: 'app-publicCible-create',
  templateUrl: './publicCible-create.component.html',
  styleUrls: ['./publicCible-create.component.css']
})
export class PublicCibleCreateComponent implements OnInit {

constructor(private publicCibleService: PublicCibleService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.publicCibleService.save().subscribe(publicCible=>{
          
       this.publicCibles.push({...publicCible});
       this.createPublicCibleDialog = false;
       this.selectedPublicCible = new PublicCibleVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createPublicCibleDialog  = false;
}

// getters and setters 

get publicCibles(): Array<PublicCibleVo> {
    return this.publicCibleService.publicCibles;
       }
set publicCibles(value: Array<PublicCibleVo>) {
        this.publicCibleService.publicCibles = value;
       } 

 get selectedPublicCible():PublicCibleVo {
           return this.publicCibleService.selectedPublicCible;
       }
    set selectedPublicCible(value: PublicCibleVo) {
        this.publicCibleService.selectedPublicCible = value;
       }
  
   get createPublicCibleDialog():boolean {
           return this.publicCibleService.createPublicCibleDialog;
       }
    set createPublicCibleDialog(value: boolean) {
        this.publicCibleService.createPublicCibleDialog= value;
       }


}