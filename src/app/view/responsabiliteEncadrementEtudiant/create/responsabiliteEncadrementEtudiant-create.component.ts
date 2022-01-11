import {Component, OnInit} from '@angular/core';
import {ResponsabiliteEncadrementEtudiantService} from '../../../controller/service/ResponsabiliteEncadrementEtudiant.service';
import {ResponsabiliteEncadrementEtudiantVo} from '../../../controller/model/ResponsabiliteEncadrementEtudiant.model';

@Component({
  selector: 'app-responsabiliteEncadrementEtudiant-create',
  templateUrl: './responsabiliteEncadrementEtudiant-create.component.html',
  styleUrls: ['./responsabiliteEncadrementEtudiant-create.component.css']
})
export class ResponsabiliteEncadrementEtudiantCreateComponent implements OnInit {

constructor(private responsabiliteEncadrementEtudiantService: ResponsabiliteEncadrementEtudiantService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.responsabiliteEncadrementEtudiantService.save().subscribe(responsabiliteEncadrementEtudiant=>{
          
       this.responsabiliteEncadrementEtudiants.push({...responsabiliteEncadrementEtudiant});
       this.createResponsabiliteEncadrementEtudiantDialog = false;
       this.selectedResponsabiliteEncadrementEtudiant = new ResponsabiliteEncadrementEtudiantVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createResponsabiliteEncadrementEtudiantDialog  = false;
}

// getters and setters 

get responsabiliteEncadrementEtudiants(): Array<ResponsabiliteEncadrementEtudiantVo> {
    return this.responsabiliteEncadrementEtudiantService.responsabiliteEncadrementEtudiants;
       }
set responsabiliteEncadrementEtudiants(value: Array<ResponsabiliteEncadrementEtudiantVo>) {
        this.responsabiliteEncadrementEtudiantService.responsabiliteEncadrementEtudiants = value;
       } 

 get selectedResponsabiliteEncadrementEtudiant():ResponsabiliteEncadrementEtudiantVo {
           return this.responsabiliteEncadrementEtudiantService.selectedResponsabiliteEncadrementEtudiant;
       }
    set selectedResponsabiliteEncadrementEtudiant(value: ResponsabiliteEncadrementEtudiantVo) {
        this.responsabiliteEncadrementEtudiantService.selectedResponsabiliteEncadrementEtudiant = value;
       }
  
   get createResponsabiliteEncadrementEtudiantDialog():boolean {
           return this.responsabiliteEncadrementEtudiantService.createResponsabiliteEncadrementEtudiantDialog;
       }
    set createResponsabiliteEncadrementEtudiantDialog(value: boolean) {
        this.responsabiliteEncadrementEtudiantService.createResponsabiliteEncadrementEtudiantDialog= value;
       }


}