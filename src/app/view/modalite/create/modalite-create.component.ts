import {Component, OnInit} from '@angular/core';
import {ModaliteService} from '../../../controller/service/Modalite.service';
import {ModaliteVo} from '../../../controller/model/Modalite.model';

@Component({
  selector: 'app-modalite-create',
  templateUrl: './modalite-create.component.html',
  styleUrls: ['./modalite-create.component.css']
})
export class ModaliteCreateComponent implements OnInit {

constructor(private modaliteService: ModaliteService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.modaliteService.save().subscribe(modalite=>{
          
       this.modalites.push({...modalite});
       this.createModaliteDialog = false;
       this.selectedModalite = new ModaliteVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createModaliteDialog  = false;
}

// getters and setters 

get modalites(): Array<ModaliteVo> {
    return this.modaliteService.modalites;
       }
set modalites(value: Array<ModaliteVo>) {
        this.modaliteService.modalites = value;
       } 

 get selectedModalite():ModaliteVo {
           return this.modaliteService.selectedModalite;
       }
    set selectedModalite(value: ModaliteVo) {
        this.modaliteService.selectedModalite = value;
       }
  
   get createModaliteDialog():boolean {
           return this.modaliteService.createModaliteDialog;
       }
    set createModaliteDialog(value: boolean) {
        this.modaliteService.createModaliteDialog= value;
       }


}