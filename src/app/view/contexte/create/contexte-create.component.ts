import {Component, OnInit} from '@angular/core';
import {ContexteService} from '../../../controller/service/Contexte.service';
import {ContexteVo} from '../../../controller/model/Contexte.model';

@Component({
  selector: 'app-contexte-create',
  templateUrl: './contexte-create.component.html',
  styleUrls: ['./contexte-create.component.css']
})
export class ContexteCreateComponent implements OnInit {

constructor(private contexteService: ContexteService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.contexteService.save().subscribe(contexte=>{
          
       this.contextes.push({...contexte});
       this.createContexteDialog = false;
       this.selectedContexte = new ContexteVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createContexteDialog  = false;
}

// getters and setters 

get contextes(): Array<ContexteVo> {
    return this.contexteService.contextes;
       }
set contextes(value: Array<ContexteVo>) {
        this.contexteService.contextes = value;
       } 

 get selectedContexte():ContexteVo {
           return this.contexteService.selectedContexte;
       }
    set selectedContexte(value: ContexteVo) {
        this.contexteService.selectedContexte = value;
       }
  
   get createContexteDialog():boolean {
           return this.contexteService.createContexteDialog;
       }
    set createContexteDialog(value: boolean) {
        this.contexteService.createContexteDialog= value;
       }


}