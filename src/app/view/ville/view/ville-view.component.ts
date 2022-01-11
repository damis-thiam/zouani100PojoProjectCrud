import {Component, OnInit} from '@angular/core';
import {VilleService} from '../../../controller/service/Ville.service';
import {VilleVo} from '../../../controller/model/Ville.model';
import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-ville-view',
  templateUrl: './ville-view.component.html',
  styleUrls: ['./ville-view.component.css']
})
export class VilleViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private villeService: VilleService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewVilleDialog = false;
    } 



   // getters and setters
    get viewVilleDialog():boolean {
        return this.villeService.viewVilleDialog;
        }
    set viewVilleDialog(value: boolean) {
        this.villeService.viewVilleDialog= value;
        }
    
    get selectedVille():VilleVo {
           return this.villeService.selectedVille;
       }
    set selectedVille(value: VilleVo) {
        this.villeService.selectedVille = value;
       }





}