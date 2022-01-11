import {Component, OnInit} from '@angular/core';
import {EtudiantService} from '../../../controller/service/Etudiant.service';
import {EtudiantVo} from '../../../controller/model/Etudiant.model';
      import {SexeVo} from '../../../controller/model/Sexe.model';
      import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-etudiant-create',
  templateUrl: './etudiant-create.component.html',
  styleUrls: ['./etudiant-create.component.css']
})
export class EtudiantCreateComponent implements OnInit {

constructor(private etudiantService: EtudiantService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.etudiantService.save().subscribe(etudiant=>{
          
       this.etudiants.push({...etudiant});
       this.createEtudiantDialog = false;
       this.selectedEtudiant = new EtudiantVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createEtudiantDialog  = false;
}

// getters and setters 

get etudiants(): Array<EtudiantVo> {
    return this.etudiantService.etudiants;
       }
set etudiants(value: Array<EtudiantVo>) {
        this.etudiantService.etudiants = value;
       } 

 get selectedEtudiant():EtudiantVo {
           return this.etudiantService.selectedEtudiant;
       }
    set selectedEtudiant(value: EtudiantVo) {
        this.etudiantService.selectedEtudiant = value;
       }
  
   get createEtudiantDialog():boolean {
           return this.etudiantService.createEtudiantDialog;
       }
    set createEtudiantDialog(value: boolean) {
        this.etudiantService.createEtudiantDialog= value;
       }


}