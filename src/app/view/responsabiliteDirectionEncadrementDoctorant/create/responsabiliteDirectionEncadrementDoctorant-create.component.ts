import {Component, OnInit} from '@angular/core';
import {ResponsabiliteDirectionEncadrementDoctorantService} from '../../../controller/service/ResponsabiliteDirectionEncadrementDoctorant.service';
import {ResponsabiliteDirectionEncadrementDoctorantVo} from '../../../controller/model/ResponsabiliteDirectionEncadrementDoctorant.model';

@Component({
  selector: 'app-responsabiliteDirectionEncadrementDoctorant-create',
  templateUrl: './responsabiliteDirectionEncadrementDoctorant-create.component.html',
  styleUrls: ['./responsabiliteDirectionEncadrementDoctorant-create.component.css']
})
export class ResponsabiliteDirectionEncadrementDoctorantCreateComponent implements OnInit {

constructor(private responsabiliteDirectionEncadrementDoctorantService: ResponsabiliteDirectionEncadrementDoctorantService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.responsabiliteDirectionEncadrementDoctorantService.save().subscribe(responsabiliteDirectionEncadrementDoctorant=>{
          
       this.responsabiliteDirectionEncadrementDoctorants.push({...responsabiliteDirectionEncadrementDoctorant});
       this.createResponsabiliteDirectionEncadrementDoctorantDialog = false;
       this.selectedResponsabiliteDirectionEncadrementDoctorant = new ResponsabiliteDirectionEncadrementDoctorantVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createResponsabiliteDirectionEncadrementDoctorantDialog  = false;
}

// getters and setters 

get responsabiliteDirectionEncadrementDoctorants(): Array<ResponsabiliteDirectionEncadrementDoctorantVo> {
    return this.responsabiliteDirectionEncadrementDoctorantService.responsabiliteDirectionEncadrementDoctorants;
       }
set responsabiliteDirectionEncadrementDoctorants(value: Array<ResponsabiliteDirectionEncadrementDoctorantVo>) {
        this.responsabiliteDirectionEncadrementDoctorantService.responsabiliteDirectionEncadrementDoctorants = value;
       } 

 get selectedResponsabiliteDirectionEncadrementDoctorant():ResponsabiliteDirectionEncadrementDoctorantVo {
           return this.responsabiliteDirectionEncadrementDoctorantService.selectedResponsabiliteDirectionEncadrementDoctorant;
       }
    set selectedResponsabiliteDirectionEncadrementDoctorant(value: ResponsabiliteDirectionEncadrementDoctorantVo) {
        this.responsabiliteDirectionEncadrementDoctorantService.selectedResponsabiliteDirectionEncadrementDoctorant = value;
       }
  
   get createResponsabiliteDirectionEncadrementDoctorantDialog():boolean {
           return this.responsabiliteDirectionEncadrementDoctorantService.createResponsabiliteDirectionEncadrementDoctorantDialog;
       }
    set createResponsabiliteDirectionEncadrementDoctorantDialog(value: boolean) {
        this.responsabiliteDirectionEncadrementDoctorantService.createResponsabiliteDirectionEncadrementDoctorantDialog= value;
       }


}