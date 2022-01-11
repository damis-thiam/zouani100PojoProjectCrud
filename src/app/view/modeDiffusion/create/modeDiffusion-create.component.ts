import {Component, OnInit} from '@angular/core';
import {ModeDiffusionService} from '../../../controller/service/ModeDiffusion.service';
import {ModeDiffusionVo} from '../../../controller/model/ModeDiffusion.model';
      import {TypeSavoirVo} from '../../../controller/model/TypeSavoir.model';

@Component({
  selector: 'app-modeDiffusion-create',
  templateUrl: './modeDiffusion-create.component.html',
  styleUrls: ['./modeDiffusion-create.component.css']
})
export class ModeDiffusionCreateComponent implements OnInit {

constructor(private modeDiffusionService: ModeDiffusionService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.modeDiffusionService.save().subscribe(modeDiffusion=>{
          
       this.modeDiffusions.push({...modeDiffusion});
       this.createModeDiffusionDialog = false;
       this.selectedModeDiffusion = new ModeDiffusionVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createModeDiffusionDialog  = false;
}

// getters and setters 

get modeDiffusions(): Array<ModeDiffusionVo> {
    return this.modeDiffusionService.modeDiffusions;
       }
set modeDiffusions(value: Array<ModeDiffusionVo>) {
        this.modeDiffusionService.modeDiffusions = value;
       } 

 get selectedModeDiffusion():ModeDiffusionVo {
           return this.modeDiffusionService.selectedModeDiffusion;
       }
    set selectedModeDiffusion(value: ModeDiffusionVo) {
        this.modeDiffusionService.selectedModeDiffusion = value;
       }
  
   get createModeDiffusionDialog():boolean {
           return this.modeDiffusionService.createModeDiffusionDialog;
       }
    set createModeDiffusionDialog(value: boolean) {
        this.modeDiffusionService.createModeDiffusionDialog= value;
       }


}