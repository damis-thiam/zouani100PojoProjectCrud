import {Component, OnInit} from '@angular/core';
import {VilleService} from '../../../controller/service/Ville.service';
import {VilleVo} from '../../../controller/model/Ville.model';
      import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-ville-create',
  templateUrl: './ville-create.component.html',
  styleUrls: ['./ville-create.component.css']
})
export class VilleCreateComponent implements OnInit {

constructor(private villeService: VilleService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.villeService.save().subscribe(ville=>{
          
       this.villes.push({...ville});
       this.createVilleDialog = false;
       this.selectedVille = new VilleVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createVilleDialog  = false;
}

// getters and setters 

get villes(): Array<VilleVo> {
    return this.villeService.villes;
       }
set villes(value: Array<VilleVo>) {
        this.villeService.villes = value;
       } 

 get selectedVille():VilleVo {
           return this.villeService.selectedVille;
       }
    set selectedVille(value: VilleVo) {
        this.villeService.selectedVille = value;
       }
  
   get createVilleDialog():boolean {
           return this.villeService.createVilleDialog;
       }
    set createVilleDialog(value: boolean) {
        this.villeService.createVilleDialog= value;
       }


}