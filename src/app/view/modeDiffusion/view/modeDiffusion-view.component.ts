import {Component, OnInit} from '@angular/core';
import {ModeDiffusionService} from '../../../controller/service/ModeDiffusion.service';
import {ModeDiffusionVo} from '../../../controller/model/ModeDiffusion.model';
import {TypeSavoirVo} from '../../../controller/model/TypeSavoir.model';

@Component({
  selector: 'app-modeDiffusion-view',
  templateUrl: './modeDiffusion-view.component.html',
  styleUrls: ['./modeDiffusion-view.component.css']
})
export class ModeDiffusionViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private modeDiffusionService: ModeDiffusionService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewModeDiffusionDialog = false;
    } 



   // getters and setters
    get viewModeDiffusionDialog():boolean {
        return this.modeDiffusionService.viewModeDiffusionDialog;
        }
    set viewModeDiffusionDialog(value: boolean) {
        this.modeDiffusionService.viewModeDiffusionDialog= value;
        }
    
    get selectedModeDiffusion():ModeDiffusionVo {
           return this.modeDiffusionService.selectedModeDiffusion;
       }
    set selectedModeDiffusion(value: ModeDiffusionVo) {
        this.modeDiffusionService.selectedModeDiffusion = value;
       }





}