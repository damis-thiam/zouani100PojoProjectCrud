import {Component, OnInit} from '@angular/core';
import {DeveloppementDeSavoirEtInnovationScientifiqueService} from '../../../controller/service/DeveloppementDeSavoirEtInnovationScientifique.service';
import {DeveloppementDeSavoirEtInnovationScientifiqueVo} from '../../../controller/model/DeveloppementDeSavoirEtInnovationScientifique.model';
      import {PaysVo} from '../../../controller/model/Pays.model';
import {TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo} from '../../../controller/model/TypeSavoirDeveloppementDeSavoirEtInnovationScientifique.model';
import {TypeSavoirVo} from '../../../controller/model/TypeSavoir.model';
import {TypeSavoirService} from '../../../controller/service/TypeSavoir.service';
import {ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo} from '../../../controller/model/ModeDiffusionDeveloppementDeSavoirEtInnovationScientifique.model';
import {ModeDiffusionVo} from '../../../controller/model/ModeDiffusion.model';
import {ModeDiffusionService} from '../../../controller/service/ModeDiffusion.service';
import {CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo} from '../../../controller/model/CaracterisationDeveloppementDeSavoirEtInnovationScientifique.model';
import {CaracterisationVo} from '../../../controller/model/Caracterisation.model';
import {CaracterisationService} from '../../../controller/service/Caracterisation.service';

@Component({
  selector: 'app-developpementDeSavoirEtInnovationScientifique-create',
  templateUrl: './developpementDeSavoirEtInnovationScientifique-create.component.html',
  styleUrls: ['./developpementDeSavoirEtInnovationScientifique-create.component.css']
})
export class DeveloppementDeSavoirEtInnovationScientifiqueCreateComponent implements OnInit {

constructor(private developpementDeSavoirEtInnovationScientifiqueService: DeveloppementDeSavoirEtInnovationScientifiqueService
            ,private typeSavoirService: TypeSavoirService
            ,private modeDiffusionService: ModeDiffusionService
            ,private caracterisationService: CaracterisationService
            ) { }
// methods 
ngOnInit(): void {
                this.selectedTypeSavoirDeveloppementDeSavoirEtInnovationScientifique.typeSavoirVo = new TypeSavoirVo();
                this.typeSavoirService.findAll().subscribe((data) => this.mytypeSavoirs = data);
                this.selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique.modeDiffusionVo = new ModeDiffusionVo();
                this.modeDiffusionService.findAll().subscribe((data) => this.mymodeDiffusions = data);
                this.selectedCaracterisationDeveloppementDeSavoirEtInnovationScientifique.caracterisationVo = new CaracterisationVo();
                this.caracterisationService.findAll().subscribe((data) => this.mycaracterisations = data);
    }
        selectedTypeSavoirDeveloppementDeSavoirEtInnovationScientifique: TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo = new TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo();
        typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueListe: Array<TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo> = [];
        mytypeSavoirs: Array<TypeSavoirVo> = [];

        addTypeSavoirDeveloppementDeSavoirEtInnovationScientifique() {
            this.selectedTypeSavoirDeveloppementDeSavoirEtInnovationScientifique.developpementDeSavoirEtInnovationScientifiqueVo = this.selectedDeveloppementDeSavoirEtInnovationScientifique
          this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueListe.push(this.selectedTypeSavoirDeveloppementDeSavoirEtInnovationScientifique);
          this.selectedTypeSavoirDeveloppementDeSavoirEtInnovationScientifique = new TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo();
        }

        deleteTypeSavoirDeveloppementDeSavoirEtInnovationScientifique(p: TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo) {
        this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueListe.forEach((element, index) => {
            if (element === p) { this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueListe.splice(index, 1); }
        });
    }
        selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique: ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo = new ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo();
        modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueListe: Array<ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo> = [];
        mymodeDiffusions: Array<ModeDiffusionVo> = [];

        addModeDiffusionDeveloppementDeSavoirEtInnovationScientifique() {
            this.selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique.developpementDeSavoirEtInnovationScientifiqueVo = this.selectedDeveloppementDeSavoirEtInnovationScientifique
          this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueListe.push(this.selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique);
          this.selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique = new ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo();
        }

        deleteModeDiffusionDeveloppementDeSavoirEtInnovationScientifique(p: ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo) {
        this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueListe.forEach((element, index) => {
            if (element === p) { this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueListe.splice(index, 1); }
        });
    }
        selectedCaracterisationDeveloppementDeSavoirEtInnovationScientifique: CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo = new CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo();
        caracterisationDeveloppementDeSavoirEtInnovationScientifiqueListe: Array<CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo> = [];
        mycaracterisations: Array<CaracterisationVo> = [];

        addCaracterisationDeveloppementDeSavoirEtInnovationScientifique() {
            this.selectedCaracterisationDeveloppementDeSavoirEtInnovationScientifique.developpementDeSavoirEtInnovationScientifiqueVo = this.selectedDeveloppementDeSavoirEtInnovationScientifique
          this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueListe.push(this.selectedCaracterisationDeveloppementDeSavoirEtInnovationScientifique);
          this.selectedCaracterisationDeveloppementDeSavoirEtInnovationScientifique = new CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo();
        }

        deleteCaracterisationDeveloppementDeSavoirEtInnovationScientifique(p: CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo) {
        this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueListe.forEach((element, index) => {
            if (element === p) { this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueListe.splice(index, 1); }
        });
    }

public save(){
            this.selectedDeveloppementDeSavoirEtInnovationScientifique.typeSavoirDeveloppementDeSavoirEtInnovationScientifiquesVo = this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueListe;
            this.selectedDeveloppementDeSavoirEtInnovationScientifique.modeDiffusionsVo = this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueListe;
            this.selectedDeveloppementDeSavoirEtInnovationScientifique.caracterisationUtilisateursVo = this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueListe;
    this.developpementDeSavoirEtInnovationScientifiqueService.save().subscribe(developpementDeSavoirEtInnovationScientifique=>{
          
       this.developpementDeSavoirEtInnovationScientifiques.push({...developpementDeSavoirEtInnovationScientifique});
       this.createDeveloppementDeSavoirEtInnovationScientifiqueDialog = false;
       this.selectedDeveloppementDeSavoirEtInnovationScientifique = new DeveloppementDeSavoirEtInnovationScientifiqueVo();
    },error=>{
        console.log(error);
    })
            this.selectedTypeSavoirDeveloppementDeSavoirEtInnovationScientifique = new TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo();
            this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueListe = [];
            this.selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique = new ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo();
            this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueListe = [];
            this.selectedCaracterisationDeveloppementDeSavoirEtInnovationScientifique = new CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo();
            this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueListe = [];
}
// methods 

hideCreateDialog(){
    this.createDeveloppementDeSavoirEtInnovationScientifiqueDialog  = false;
}

// getters and setters 

get developpementDeSavoirEtInnovationScientifiques(): Array<DeveloppementDeSavoirEtInnovationScientifiqueVo> {
    return this.developpementDeSavoirEtInnovationScientifiqueService.developpementDeSavoirEtInnovationScientifiques;
       }
set developpementDeSavoirEtInnovationScientifiques(value: Array<DeveloppementDeSavoirEtInnovationScientifiqueVo>) {
        this.developpementDeSavoirEtInnovationScientifiqueService.developpementDeSavoirEtInnovationScientifiques = value;
       } 

 get selectedDeveloppementDeSavoirEtInnovationScientifique():DeveloppementDeSavoirEtInnovationScientifiqueVo {
           return this.developpementDeSavoirEtInnovationScientifiqueService.selectedDeveloppementDeSavoirEtInnovationScientifique;
       }
    set selectedDeveloppementDeSavoirEtInnovationScientifique(value: DeveloppementDeSavoirEtInnovationScientifiqueVo) {
        this.developpementDeSavoirEtInnovationScientifiqueService.selectedDeveloppementDeSavoirEtInnovationScientifique = value;
       }
  
   get createDeveloppementDeSavoirEtInnovationScientifiqueDialog():boolean {
           return this.developpementDeSavoirEtInnovationScientifiqueService.createDeveloppementDeSavoirEtInnovationScientifiqueDialog;
       }
    set createDeveloppementDeSavoirEtInnovationScientifiqueDialog(value: boolean) {
        this.developpementDeSavoirEtInnovationScientifiqueService.createDeveloppementDeSavoirEtInnovationScientifiqueDialog= value;
       }


}