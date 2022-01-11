import {Component, OnInit} from '@angular/core';
import {PubliquePrincipalService} from '../../../controller/service/PubliquePrincipal.service';
import {PubliquePrincipalVo} from '../../../controller/model/PubliquePrincipal.model';

@Component({
  selector: 'app-publiquePrincipal-create',
  templateUrl: './publiquePrincipal-create.component.html',
  styleUrls: ['./publiquePrincipal-create.component.css']
})
export class PubliquePrincipalCreateComponent implements OnInit {

constructor(private publiquePrincipalService: PubliquePrincipalService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.publiquePrincipalService.save().subscribe(publiquePrincipal=>{
          
       this.publiquePrincipals.push({...publiquePrincipal});
       this.createPubliquePrincipalDialog = false;
       this.selectedPubliquePrincipal = new PubliquePrincipalVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createPubliquePrincipalDialog  = false;
}

// getters and setters 

get publiquePrincipals(): Array<PubliquePrincipalVo> {
    return this.publiquePrincipalService.publiquePrincipals;
       }
set publiquePrincipals(value: Array<PubliquePrincipalVo>) {
        this.publiquePrincipalService.publiquePrincipals = value;
       } 

 get selectedPubliquePrincipal():PubliquePrincipalVo {
           return this.publiquePrincipalService.selectedPubliquePrincipal;
       }
    set selectedPubliquePrincipal(value: PubliquePrincipalVo) {
        this.publiquePrincipalService.selectedPubliquePrincipal = value;
       }
  
   get createPubliquePrincipalDialog():boolean {
           return this.publiquePrincipalService.createPubliquePrincipalDialog;
       }
    set createPubliquePrincipalDialog(value: boolean) {
        this.publiquePrincipalService.createPubliquePrincipalDialog= value;
       }


}