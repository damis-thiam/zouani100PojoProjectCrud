import {Component, OnInit} from '@angular/core';
import {ModaliteEtudeService} from '../../../controller/service/ModaliteEtude.service';
import {ModaliteEtudeVo} from '../../../controller/model/ModaliteEtude.model';

@Component({
  selector: 'app-modaliteEtude-create',
  templateUrl: './modaliteEtude-create.component.html',
  styleUrls: ['./modaliteEtude-create.component.css']
})
export class ModaliteEtudeCreateComponent implements OnInit {

constructor(private modaliteEtudeService: ModaliteEtudeService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.modaliteEtudeService.save().subscribe(modaliteEtude=>{
          
       this.modaliteEtudes.push({...modaliteEtude});
       this.createModaliteEtudeDialog = false;
       this.selectedModaliteEtude = new ModaliteEtudeVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createModaliteEtudeDialog  = false;
}

// getters and setters 

get modaliteEtudes(): Array<ModaliteEtudeVo> {
    return this.modaliteEtudeService.modaliteEtudes;
       }
set modaliteEtudes(value: Array<ModaliteEtudeVo>) {
        this.modaliteEtudeService.modaliteEtudes = value;
       } 

 get selectedModaliteEtude():ModaliteEtudeVo {
           return this.modaliteEtudeService.selectedModaliteEtude;
       }
    set selectedModaliteEtude(value: ModaliteEtudeVo) {
        this.modaliteEtudeService.selectedModaliteEtude = value;
       }
  
   get createModaliteEtudeDialog():boolean {
           return this.modaliteEtudeService.createModaliteEtudeDialog;
       }
    set createModaliteEtudeDialog(value: boolean) {
        this.modaliteEtudeService.createModaliteEtudeDialog= value;
       }


}