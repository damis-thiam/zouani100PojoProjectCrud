import {Component, OnInit} from '@angular/core';
import {ModaliteEtudeEnseignementService} from '../../../controller/service/ModaliteEtudeEnseignement.service';
import {ModaliteEtudeEnseignementVo} from '../../../controller/model/ModaliteEtudeEnseignement.model';
      import {EnseignementVo} from '../../../controller/model/Enseignement.model';
      import {ModaliteEtudeVo} from '../../../controller/model/ModaliteEtude.model';

@Component({
  selector: 'app-modaliteEtudeEnseignement-create',
  templateUrl: './modaliteEtudeEnseignement-create.component.html',
  styleUrls: ['./modaliteEtudeEnseignement-create.component.css']
})
export class ModaliteEtudeEnseignementCreateComponent implements OnInit {

constructor(private modaliteEtudeEnseignementService: ModaliteEtudeEnseignementService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.modaliteEtudeEnseignementService.save().subscribe(modaliteEtudeEnseignement=>{
          
       this.modaliteEtudeEnseignements.push({...modaliteEtudeEnseignement});
       this.createModaliteEtudeEnseignementDialog = false;
       this.selectedModaliteEtudeEnseignement = new ModaliteEtudeEnseignementVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createModaliteEtudeEnseignementDialog  = false;
}

// getters and setters 

get modaliteEtudeEnseignements(): Array<ModaliteEtudeEnseignementVo> {
    return this.modaliteEtudeEnseignementService.modaliteEtudeEnseignements;
       }
set modaliteEtudeEnseignements(value: Array<ModaliteEtudeEnseignementVo>) {
        this.modaliteEtudeEnseignementService.modaliteEtudeEnseignements = value;
       } 

 get selectedModaliteEtudeEnseignement():ModaliteEtudeEnseignementVo {
           return this.modaliteEtudeEnseignementService.selectedModaliteEtudeEnseignement;
       }
    set selectedModaliteEtudeEnseignement(value: ModaliteEtudeEnseignementVo) {
        this.modaliteEtudeEnseignementService.selectedModaliteEtudeEnseignement = value;
       }
  
   get createModaliteEtudeEnseignementDialog():boolean {
           return this.modaliteEtudeEnseignementService.createModaliteEtudeEnseignementDialog;
       }
    set createModaliteEtudeEnseignementDialog(value: boolean) {
        this.modaliteEtudeEnseignementService.createModaliteEtudeEnseignementDialog= value;
       }


}