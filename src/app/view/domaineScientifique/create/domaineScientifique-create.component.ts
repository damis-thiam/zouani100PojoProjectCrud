import {Component, OnInit} from '@angular/core';
import {DomaineScientifiqueService} from '../../../controller/service/DomaineScientifique.service';
import {DomaineScientifiqueVo} from '../../../controller/model/DomaineScientifique.model';

@Component({
  selector: 'app-domaineScientifique-create',
  templateUrl: './domaineScientifique-create.component.html',
  styleUrls: ['./domaineScientifique-create.component.css']
})
export class DomaineScientifiqueCreateComponent implements OnInit {

constructor(private domaineScientifiqueService: DomaineScientifiqueService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.domaineScientifiqueService.save().subscribe(domaineScientifique=>{
          
       this.domaineScientifiques.push({...domaineScientifique});
       this.createDomaineScientifiqueDialog = false;
       this.selectedDomaineScientifique = new DomaineScientifiqueVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createDomaineScientifiqueDialog  = false;
}

// getters and setters 

get domaineScientifiques(): Array<DomaineScientifiqueVo> {
    return this.domaineScientifiqueService.domaineScientifiques;
       }
set domaineScientifiques(value: Array<DomaineScientifiqueVo>) {
        this.domaineScientifiqueService.domaineScientifiques = value;
       } 

 get selectedDomaineScientifique():DomaineScientifiqueVo {
           return this.domaineScientifiqueService.selectedDomaineScientifique;
       }
    set selectedDomaineScientifique(value: DomaineScientifiqueVo) {
        this.domaineScientifiqueService.selectedDomaineScientifique = value;
       }
  
   get createDomaineScientifiqueDialog():boolean {
           return this.domaineScientifiqueService.createDomaineScientifiqueDialog;
       }
    set createDomaineScientifiqueDialog(value: boolean) {
        this.domaineScientifiqueService.createDomaineScientifiqueDialog= value;
       }


}