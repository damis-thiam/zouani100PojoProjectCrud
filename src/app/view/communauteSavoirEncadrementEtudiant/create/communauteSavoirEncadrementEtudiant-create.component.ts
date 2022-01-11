import {Component, OnInit} from '@angular/core';
import {CommunauteSavoirEncadrementEtudiantService} from '../../../controller/service/CommunauteSavoirEncadrementEtudiant.service';
import {CommunauteSavoirEncadrementEtudiantVo} from '../../../controller/model/CommunauteSavoirEncadrementEtudiant.model';
      import {EncadrementEtudiantVo} from '../../../controller/model/EncadrementEtudiant.model';
      import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';

@Component({
  selector: 'app-communauteSavoirEncadrementEtudiant-create',
  templateUrl: './communauteSavoirEncadrementEtudiant-create.component.html',
  styleUrls: ['./communauteSavoirEncadrementEtudiant-create.component.css']
})
export class CommunauteSavoirEncadrementEtudiantCreateComponent implements OnInit {

constructor(private communauteSavoirEncadrementEtudiantService: CommunauteSavoirEncadrementEtudiantService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.communauteSavoirEncadrementEtudiantService.save().subscribe(communauteSavoirEncadrementEtudiant=>{
          
       this.communauteSavoirEncadrementEtudiants.push({...communauteSavoirEncadrementEtudiant});
       this.createCommunauteSavoirEncadrementEtudiantDialog = false;
       this.selectedCommunauteSavoirEncadrementEtudiant = new CommunauteSavoirEncadrementEtudiantVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createCommunauteSavoirEncadrementEtudiantDialog  = false;
}

// getters and setters 

get communauteSavoirEncadrementEtudiants(): Array<CommunauteSavoirEncadrementEtudiantVo> {
    return this.communauteSavoirEncadrementEtudiantService.communauteSavoirEncadrementEtudiants;
       }
set communauteSavoirEncadrementEtudiants(value: Array<CommunauteSavoirEncadrementEtudiantVo>) {
        this.communauteSavoirEncadrementEtudiantService.communauteSavoirEncadrementEtudiants = value;
       } 

 get selectedCommunauteSavoirEncadrementEtudiant():CommunauteSavoirEncadrementEtudiantVo {
           return this.communauteSavoirEncadrementEtudiantService.selectedCommunauteSavoirEncadrementEtudiant;
       }
    set selectedCommunauteSavoirEncadrementEtudiant(value: CommunauteSavoirEncadrementEtudiantVo) {
        this.communauteSavoirEncadrementEtudiantService.selectedCommunauteSavoirEncadrementEtudiant = value;
       }
  
   get createCommunauteSavoirEncadrementEtudiantDialog():boolean {
           return this.communauteSavoirEncadrementEtudiantService.createCommunauteSavoirEncadrementEtudiantDialog;
       }
    set createCommunauteSavoirEncadrementEtudiantDialog(value: boolean) {
        this.communauteSavoirEncadrementEtudiantService.createCommunauteSavoirEncadrementEtudiantDialog= value;
       }


}