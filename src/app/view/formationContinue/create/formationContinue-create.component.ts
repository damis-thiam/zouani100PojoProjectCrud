import {Component, OnInit} from '@angular/core';
import {FormationContinueService} from '../../../controller/service/FormationContinue.service';
import {FormationContinueVo} from '../../../controller/model/FormationContinue.model';
      import {OutilFormationContinueVo} from '../../../controller/model/OutilFormationContinue.model';
      import {ModaliteFormationContinueVo} from '../../../controller/model/ModaliteFormationContinue.model';
      import {EtablissementVo} from '../../../controller/model/Etablissement.model';
      import {PaysVo} from '../../../controller/model/Pays.model';
      import {ChercheurVo} from '../../../controller/model/Chercheur.model';
import {ObjetGlobalDeFormationContinueVo} from '../../../controller/model/ObjetGlobalDeFormationContinue.model';
import {ObjetGlobalVo} from '../../../controller/model/ObjetGlobal.model';
import {ObjetGlobalService} from '../../../controller/service/ObjetGlobal.service';
import {PubliquePrincipalConcemeFormationContinueVo} from '../../../controller/model/PubliquePrincipalConcemeFormationContinue.model';
import {PubliquePrincipalVo} from '../../../controller/model/PubliquePrincipal.model';
import {PubliquePrincipalService} from '../../../controller/service/PubliquePrincipal.service';
import {PaysFormationContinueVo} from '../../../controller/model/PaysFormationContinue.model';
import {PaysService} from '../../../controller/service/Pays.service';

@Component({
  selector: 'app-formationContinue-create',
  templateUrl: './formationContinue-create.component.html',
  styleUrls: ['./formationContinue-create.component.css']
})
export class FormationContinueCreateComponent implements OnInit {

constructor(private formationContinueService: FormationContinueService
            ,private objetGlobalService: ObjetGlobalService
            ,private publiquePrincipalService: PubliquePrincipalService
            ,private paysService: PaysService
            ) { }
// methods 
ngOnInit(): void {
                this.selectedObjetGlobalDeFormationContinue.objetGlobalVo = new ObjetGlobalVo();
                this.objetGlobalService.findAll().subscribe((data) => this.myobjetGlobals = data);
                this.selectedPubliquePrincipalConcemeFormationContinue.publiquePrincipalVo = new PubliquePrincipalVo();
                this.publiquePrincipalService.findAll().subscribe((data) => this.mypubliquePrincipals = data);
                this.selectedPaysFormationContinue.paysNationnaliteVo = new PaysVo();
                this.paysService.findAll().subscribe((data) => this.mypaysNationnalites = data);
    }
        selectedObjetGlobalDeFormationContinue: ObjetGlobalDeFormationContinueVo = new ObjetGlobalDeFormationContinueVo();
        objetGlobalDeFormationContinueListe: Array<ObjetGlobalDeFormationContinueVo> = [];
        myobjetGlobals: Array<ObjetGlobalVo> = [];

        addObjetGlobalDeFormationContinue() {
            this.selectedObjetGlobalDeFormationContinue.formationContinueVo = this.selectedFormationContinue
          this.objetGlobalDeFormationContinueListe.push(this.selectedObjetGlobalDeFormationContinue);
          this.selectedObjetGlobalDeFormationContinue = new ObjetGlobalDeFormationContinueVo();
        }

        deleteObjetGlobalDeFormationContinue(p: ObjetGlobalDeFormationContinueVo) {
        this.objetGlobalDeFormationContinueListe.forEach((element, index) => {
            if (element === p) { this.objetGlobalDeFormationContinueListe.splice(index, 1); }
        });
    }
        selectedPubliquePrincipalConcemeFormationContinue: PubliquePrincipalConcemeFormationContinueVo = new PubliquePrincipalConcemeFormationContinueVo();
        publiquePrincipalConcemeFormationContinueListe: Array<PubliquePrincipalConcemeFormationContinueVo> = [];
        mypubliquePrincipals: Array<PubliquePrincipalVo> = [];

        addPubliquePrincipalConcemeFormationContinue() {
            this.selectedPubliquePrincipalConcemeFormationContinue.formationContinueVo = this.selectedFormationContinue
          this.publiquePrincipalConcemeFormationContinueListe.push(this.selectedPubliquePrincipalConcemeFormationContinue);
          this.selectedPubliquePrincipalConcemeFormationContinue = new PubliquePrincipalConcemeFormationContinueVo();
        }

        deletePubliquePrincipalConcemeFormationContinue(p: PubliquePrincipalConcemeFormationContinueVo) {
        this.publiquePrincipalConcemeFormationContinueListe.forEach((element, index) => {
            if (element === p) { this.publiquePrincipalConcemeFormationContinueListe.splice(index, 1); }
        });
    }
        selectedPaysFormationContinue: PaysFormationContinueVo = new PaysFormationContinueVo();
        paysFormationContinueListe: Array<PaysFormationContinueVo> = [];
        mypaysNationnalites: Array<PaysVo> = [];

        addPaysFormationContinue() {
            this.selectedPaysFormationContinue.formationContinueVo = this.selectedFormationContinue
          this.paysFormationContinueListe.push(this.selectedPaysFormationContinue);
          this.selectedPaysFormationContinue = new PaysFormationContinueVo();
        }

        deletePaysFormationContinue(p: PaysFormationContinueVo) {
        this.paysFormationContinueListe.forEach((element, index) => {
            if (element === p) { this.paysFormationContinueListe.splice(index, 1); }
        });
    }

public save(){
            this.selectedFormationContinue.objetGlobalDeFormationContinuesVo = this.objetGlobalDeFormationContinueListe;
            this.selectedFormationContinue.publiquePrinciplaeConcernerFormationContinuesVo = this.publiquePrincipalConcemeFormationContinueListe;
            this.selectedFormationContinue.paysFormationContinuesVo = this.paysFormationContinueListe;
    this.formationContinueService.save().subscribe(formationContinue=>{
          
       this.formationContinues.push({...formationContinue});
       this.createFormationContinueDialog = false;
       this.selectedFormationContinue = new FormationContinueVo();
    },error=>{
        console.log(error);
    })
            this.selectedObjetGlobalDeFormationContinue = new ObjetGlobalDeFormationContinueVo();
            this.objetGlobalDeFormationContinueListe = [];
            this.selectedPubliquePrincipalConcemeFormationContinue = new PubliquePrincipalConcemeFormationContinueVo();
            this.publiquePrincipalConcemeFormationContinueListe = [];
            this.selectedPaysFormationContinue = new PaysFormationContinueVo();
            this.paysFormationContinueListe = [];
}
// methods 

hideCreateDialog(){
    this.createFormationContinueDialog  = false;
}

// getters and setters 

get formationContinues(): Array<FormationContinueVo> {
    return this.formationContinueService.formationContinues;
       }
set formationContinues(value: Array<FormationContinueVo>) {
        this.formationContinueService.formationContinues = value;
       } 

 get selectedFormationContinue():FormationContinueVo {
           return this.formationContinueService.selectedFormationContinue;
       }
    set selectedFormationContinue(value: FormationContinueVo) {
        this.formationContinueService.selectedFormationContinue = value;
       }
  
   get createFormationContinueDialog():boolean {
           return this.formationContinueService.createFormationContinueDialog;
       }
    set createFormationContinueDialog(value: boolean) {
        this.formationContinueService.createFormationContinueDialog= value;
       }


}