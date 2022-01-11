import {Component, OnInit} from '@angular/core';
import {ContinentService} from '../../../controller/service/Continent.service';
import {ContinentVo} from '../../../controller/model/Continent.model';

@Component({
  selector: 'app-continent-create',
  templateUrl: './continent-create.component.html',
  styleUrls: ['./continent-create.component.css']
})
export class ContinentCreateComponent implements OnInit {

constructor(private continentService: ContinentService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.continentService.save().subscribe(continent=>{
          
       this.continents.push({...continent});
       this.createContinentDialog = false;
       this.selectedContinent = new ContinentVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createContinentDialog  = false;
}

// getters and setters 

get continents(): Array<ContinentVo> {
    return this.continentService.continents;
       }
set continents(value: Array<ContinentVo>) {
        this.continentService.continents = value;
       } 

 get selectedContinent():ContinentVo {
           return this.continentService.selectedContinent;
       }
    set selectedContinent(value: ContinentVo) {
        this.continentService.selectedContinent = value;
       }
  
   get createContinentDialog():boolean {
           return this.continentService.createContinentDialog;
       }
    set createContinentDialog(value: boolean) {
        this.continentService.createContinentDialog= value;
       }


}