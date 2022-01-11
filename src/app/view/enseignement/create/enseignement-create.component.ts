import {Component, OnInit} from '@angular/core';
import {EnseignementService} from '../../../controller/service/Enseignement.service';
import {EnseignementVo} from '../../../controller/model/Enseignement.model';
      import {TypeEnseignementDispenseVo} from '../../../controller/model/TypeEnseignementDispense.model';
      import {PaysVo} from '../../../controller/model/Pays.model';
      import {ChercheurVo} from '../../../controller/model/Chercheur.model';
import {NiveauEtudeEnseignementVo} from '../../../controller/model/NiveauEtudeEnseignement.model';
import {NiveauEtudeVo} from '../../../controller/model/NiveauEtude.model';
import {NiveauEtudeService} from '../../../controller/service/NiveauEtude.service';
import {ModaliteEtudeEnseignementVo} from '../../../controller/model/ModaliteEtudeEnseignement.model';
import {ModaliteEtudeVo} from '../../../controller/model/ModaliteEtude.model';
import {ModaliteEtudeService} from '../../../controller/service/ModaliteEtude.service';
import {EtablissementEnseignementVo} from '../../../controller/model/EtablissementEnseignement.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import {EtablissementService} from '../../../controller/service/Etablissement.service';
import {NatureEnseignementVo} from '../../../controller/model/NatureEnseignement.model';
import {NatureEtudeVo} from '../../../controller/model/NatureEtude.model';
import {NatureEtudeService} from '../../../controller/service/NatureEtude.service';

@Component({
  selector: 'app-enseignement-create',
  templateUrl: './enseignement-create.component.html',
  styleUrls: ['./enseignement-create.component.css']
})
export class EnseignementCreateComponent implements OnInit {

constructor(private enseignementService: EnseignementService
            ,private niveauEtudeService: NiveauEtudeService
            ,private modaliteEtudeService: ModaliteEtudeService
            ,private etablissementService: EtablissementService
            ,private natureEtudeService: NatureEtudeService
            ) { }
// methods 
ngOnInit(): void {
                this.selectedNiveauEtudeEnseignement.niveauEtudeVo = new NiveauEtudeVo();
                this.niveauEtudeService.findAll().subscribe((data) => this.myniveauEtudes = data);
                this.selectedModaliteEtudeEnseignement.modaliteEtudeVo = new ModaliteEtudeVo();
                this.modaliteEtudeService.findAll().subscribe((data) => this.mymodaliteEtudes = data);
                this.selectedEtablissementEnseignement.etablissementVo = new EtablissementVo();
                this.etablissementService.findAll().subscribe((data) => this.myetablissements = data);
                this.selectedNatureEnseignement.natureEtudeVo = new NatureEtudeVo();
                this.natureEtudeService.findAll().subscribe((data) => this.mynatureEtudes = data);
    }
        selectedNiveauEtudeEnseignement: NiveauEtudeEnseignementVo = new NiveauEtudeEnseignementVo();
        niveauEtudeEnseignementListe: Array<NiveauEtudeEnseignementVo> = [];
        myniveauEtudes: Array<NiveauEtudeVo> = [];

        addNiveauEtudeEnseignement() {
            this.selectedNiveauEtudeEnseignement.enseignementVo = this.selectedEnseignement
          this.niveauEtudeEnseignementListe.push(this.selectedNiveauEtudeEnseignement);
          this.selectedNiveauEtudeEnseignement = new NiveauEtudeEnseignementVo();
        }

        deleteNiveauEtudeEnseignement(p: NiveauEtudeEnseignementVo) {
        this.niveauEtudeEnseignementListe.forEach((element, index) => {
            if (element === p) { this.niveauEtudeEnseignementListe.splice(index, 1); }
        });
    }
        selectedModaliteEtudeEnseignement: ModaliteEtudeEnseignementVo = new ModaliteEtudeEnseignementVo();
        modaliteEtudeEnseignementListe: Array<ModaliteEtudeEnseignementVo> = [];
        mymodaliteEtudes: Array<ModaliteEtudeVo> = [];

        addModaliteEtudeEnseignement() {
            this.selectedModaliteEtudeEnseignement.enseignementVo = this.selectedEnseignement
          this.modaliteEtudeEnseignementListe.push(this.selectedModaliteEtudeEnseignement);
          this.selectedModaliteEtudeEnseignement = new ModaliteEtudeEnseignementVo();
        }

        deleteModaliteEtudeEnseignement(p: ModaliteEtudeEnseignementVo) {
        this.modaliteEtudeEnseignementListe.forEach((element, index) => {
            if (element === p) { this.modaliteEtudeEnseignementListe.splice(index, 1); }
        });
    }
        selectedEtablissementEnseignement: EtablissementEnseignementVo = new EtablissementEnseignementVo();
        etablissementEnseignementListe: Array<EtablissementEnseignementVo> = [];
        myetablissements: Array<EtablissementVo> = [];

        addEtablissementEnseignement() {
            this.selectedEtablissementEnseignement.enseignementVo = this.selectedEnseignement
          this.etablissementEnseignementListe.push(this.selectedEtablissementEnseignement);
          this.selectedEtablissementEnseignement = new EtablissementEnseignementVo();
        }

        deleteEtablissementEnseignement(p: EtablissementEnseignementVo) {
        this.etablissementEnseignementListe.forEach((element, index) => {
            if (element === p) { this.etablissementEnseignementListe.splice(index, 1); }
        });
    }
        selectedNatureEnseignement: NatureEnseignementVo = new NatureEnseignementVo();
        natureEnseignementListe: Array<NatureEnseignementVo> = [];
        mynatureEtudes: Array<NatureEtudeVo> = [];

        addNatureEnseignement() {
            this.selectedNatureEnseignement.enseignementVo = this.selectedEnseignement
          this.natureEnseignementListe.push(this.selectedNatureEnseignement);
          this.selectedNatureEnseignement = new NatureEnseignementVo();
        }

        deleteNatureEnseignement(p: NatureEnseignementVo) {
        this.natureEnseignementListe.forEach((element, index) => {
            if (element === p) { this.natureEnseignementListe.splice(index, 1); }
        });
    }

public save(){
            this.selectedEnseignement.niveauEtudeEnseignementsVo = this.niveauEtudeEnseignementListe;
            this.selectedEnseignement.modaliteEtudeEnseignementsVo = this.modaliteEtudeEnseignementListe;
            this.selectedEnseignement.etablissementEnseignementsVo = this.etablissementEnseignementListe;
            this.selectedEnseignement.natureEnseignementsVo = this.natureEnseignementListe;
    this.enseignementService.save().subscribe(enseignement=>{
          
       this.enseignements.push({...enseignement});
       this.createEnseignementDialog = false;
       this.selectedEnseignement = new EnseignementVo();
    },error=>{
        console.log(error);
    })
            this.selectedNiveauEtudeEnseignement = new NiveauEtudeEnseignementVo();
            this.niveauEtudeEnseignementListe = [];
            this.selectedModaliteEtudeEnseignement = new ModaliteEtudeEnseignementVo();
            this.modaliteEtudeEnseignementListe = [];
            this.selectedEtablissementEnseignement = new EtablissementEnseignementVo();
            this.etablissementEnseignementListe = [];
            this.selectedNatureEnseignement = new NatureEnseignementVo();
            this.natureEnseignementListe = [];
}
// methods 

hideCreateDialog(){
    this.createEnseignementDialog  = false;
}

// getters and setters 

get enseignements(): Array<EnseignementVo> {
    return this.enseignementService.enseignements;
       }
set enseignements(value: Array<EnseignementVo>) {
        this.enseignementService.enseignements = value;
       } 

 get selectedEnseignement():EnseignementVo {
           return this.enseignementService.selectedEnseignement;
       }
    set selectedEnseignement(value: EnseignementVo) {
        this.enseignementService.selectedEnseignement = value;
       }
  
   get createEnseignementDialog():boolean {
           return this.enseignementService.createEnseignementDialog;
       }
    set createEnseignementDialog(value: boolean) {
        this.enseignementService.createEnseignementDialog= value;
       }


}