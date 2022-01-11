import {Component, OnInit} from '@angular/core';
import {CultureScientifiqueOutilPedagogiqueService} from '../../../controller/service/CultureScientifiqueOutilPedagogique.service';
import {CultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/CultureScientifiqueOutilPedagogique.model';
import {PublicCibleCultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/PublicCibleCultureScientifiqueOutilPedagogique.model';
import {PublicCibleVo} from '../../../controller/model/PublicCible.model';
import {PublicCibleService} from '../../../controller/service/PublicCible.service';
import {PaysVo} from '../../../controller/model/Pays.model';
import {PaysService} from '../../../controller/service/Pays.service';
import {TypeOutilCultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/TypeOutilCultureScientifiqueOutilPedagogique.model';
import {TypeOutilVo} from '../../../controller/model/TypeOutil.model';
import {TypeOutilService} from '../../../controller/service/TypeOutil.service';
import {PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/PaysTypeOutilCultureScientifiqueOutilPedagogique.model';
import {EtablissementCultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/EtablissementCultureScientifiqueOutilPedagogique.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import {EtablissementService} from '../../../controller/service/Etablissement.service';

@Component({
  selector: 'app-cultureScientifiqueOutilPedagogique-create',
  templateUrl: './cultureScientifiqueOutilPedagogique-create.component.html',
  styleUrls: ['./cultureScientifiqueOutilPedagogique-create.component.css']
})
export class CultureScientifiqueOutilPedagogiqueCreateComponent implements OnInit {

constructor(private cultureScientifiqueOutilPedagogiqueService: CultureScientifiqueOutilPedagogiqueService
            ,private publicCibleService: PublicCibleService
            ,private paysService: PaysService
            ,private typeOutilService: TypeOutilService
            ,private etablissementService: EtablissementService
            ) { }
// methods 
ngOnInit(): void {
                this.selectedPublicCibleCultureScientifiqueOutilPedagogique.publicCibleVo = new PublicCibleVo();
                this.publicCibleService.findAll().subscribe((data) => this.mypublicCibles = data);
                this.selectedPublicCibleCultureScientifiqueOutilPedagogique.paysVo = new PaysVo();
                this.paysService.findAll().subscribe((data) => this.mypayss = data);
                this.selectedTypeOutilCultureScientifiqueOutilPedagogique.typeOutilVo = new TypeOutilVo();
                this.typeOutilService.findAll().subscribe((data) => this.mytypeOutils = data);
                this.selectedPaysTypeOutilCultureScientifiqueOutilPedagogique.paysVo = new PaysVo();
                this.paysService.findAll().subscribe((data) => this.mypayss = data);
                this.selectedEtablissementCultureScientifiqueOutilPedagogique.etablissementVo = new EtablissementVo();
                this.etablissementService.findAll().subscribe((data) => this.myetablissements = data);
    }
        selectedPublicCibleCultureScientifiqueOutilPedagogique: PublicCibleCultureScientifiqueOutilPedagogiqueVo = new PublicCibleCultureScientifiqueOutilPedagogiqueVo();
        publicCibleCultureScientifiqueOutilPedagogiqueListe: Array<PublicCibleCultureScientifiqueOutilPedagogiqueVo> = [];
        mypublicCibles: Array<PublicCibleVo> = [];
        mypayss: Array<PaysVo> = [];

        addPublicCibleCultureScientifiqueOutilPedagogique() {
            this.selectedPublicCibleCultureScientifiqueOutilPedagogique.cultureScientifiqueOutilPedagogiqueVo = this.selectedCultureScientifiqueOutilPedagogique
          this.publicCibleCultureScientifiqueOutilPedagogiqueListe.push(this.selectedPublicCibleCultureScientifiqueOutilPedagogique);
          this.selectedPublicCibleCultureScientifiqueOutilPedagogique = new PublicCibleCultureScientifiqueOutilPedagogiqueVo();
        }

        deletePublicCibleCultureScientifiqueOutilPedagogique(p: PublicCibleCultureScientifiqueOutilPedagogiqueVo) {
        this.publicCibleCultureScientifiqueOutilPedagogiqueListe.forEach((element, index) => {
            if (element === p) { this.publicCibleCultureScientifiqueOutilPedagogiqueListe.splice(index, 1); }
        });
    }
        selectedTypeOutilCultureScientifiqueOutilPedagogique: TypeOutilCultureScientifiqueOutilPedagogiqueVo = new TypeOutilCultureScientifiqueOutilPedagogiqueVo();
        typeOutilCultureScientifiqueOutilPedagogiqueListe: Array<TypeOutilCultureScientifiqueOutilPedagogiqueVo> = [];
        mytypeOutils: Array<TypeOutilVo> = [];

        addTypeOutilCultureScientifiqueOutilPedagogique() {
            this.selectedTypeOutilCultureScientifiqueOutilPedagogique.cultureScientifiqueOutilPedagogiqueVo = this.selectedCultureScientifiqueOutilPedagogique
          this.typeOutilCultureScientifiqueOutilPedagogiqueListe.push(this.selectedTypeOutilCultureScientifiqueOutilPedagogique);
          this.selectedTypeOutilCultureScientifiqueOutilPedagogique = new TypeOutilCultureScientifiqueOutilPedagogiqueVo();
        }

        deleteTypeOutilCultureScientifiqueOutilPedagogique(p: TypeOutilCultureScientifiqueOutilPedagogiqueVo) {
        this.typeOutilCultureScientifiqueOutilPedagogiqueListe.forEach((element, index) => {
            if (element === p) { this.typeOutilCultureScientifiqueOutilPedagogiqueListe.splice(index, 1); }
        });
    }
        selectedPaysTypeOutilCultureScientifiqueOutilPedagogique: PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo = new PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo();
        paysTypeOutilCultureScientifiqueOutilPedagogiqueListe: Array<PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo> = [];

        addPaysTypeOutilCultureScientifiqueOutilPedagogique() {
            this.selectedPaysTypeOutilCultureScientifiqueOutilPedagogique.cultureScientifiqueOutilPedagogiqueVo = this.selectedCultureScientifiqueOutilPedagogique
          this.paysTypeOutilCultureScientifiqueOutilPedagogiqueListe.push(this.selectedPaysTypeOutilCultureScientifiqueOutilPedagogique);
          this.selectedPaysTypeOutilCultureScientifiqueOutilPedagogique = new PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo();
        }

        deletePaysTypeOutilCultureScientifiqueOutilPedagogique(p: PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo) {
        this.paysTypeOutilCultureScientifiqueOutilPedagogiqueListe.forEach((element, index) => {
            if (element === p) { this.paysTypeOutilCultureScientifiqueOutilPedagogiqueListe.splice(index, 1); }
        });
    }
        selectedEtablissementCultureScientifiqueOutilPedagogique: EtablissementCultureScientifiqueOutilPedagogiqueVo = new EtablissementCultureScientifiqueOutilPedagogiqueVo();
        etablissementCultureScientifiqueOutilPedagogiqueListe: Array<EtablissementCultureScientifiqueOutilPedagogiqueVo> = [];
        myetablissements: Array<EtablissementVo> = [];

        addEtablissementCultureScientifiqueOutilPedagogique() {
            this.selectedEtablissementCultureScientifiqueOutilPedagogique.cultureScientifiqueOutilPedagogiqueVo = this.selectedCultureScientifiqueOutilPedagogique
          this.etablissementCultureScientifiqueOutilPedagogiqueListe.push(this.selectedEtablissementCultureScientifiqueOutilPedagogique);
          this.selectedEtablissementCultureScientifiqueOutilPedagogique = new EtablissementCultureScientifiqueOutilPedagogiqueVo();
        }

        deleteEtablissementCultureScientifiqueOutilPedagogique(p: EtablissementCultureScientifiqueOutilPedagogiqueVo) {
        this.etablissementCultureScientifiqueOutilPedagogiqueListe.forEach((element, index) => {
            if (element === p) { this.etablissementCultureScientifiqueOutilPedagogiqueListe.splice(index, 1); }
        });
    }

public save(){
            this.selectedCultureScientifiqueOutilPedagogique.publicCibleCultureScientifiqueOutilPedagogiquesVo = this.publicCibleCultureScientifiqueOutilPedagogiqueListe;
            this.selectedCultureScientifiqueOutilPedagogique.typeOutilCultureScientifiqueOutilPedagogiquesVo = this.typeOutilCultureScientifiqueOutilPedagogiqueListe;
            this.selectedCultureScientifiqueOutilPedagogique.paysTypeOutilCultureScientifiqueOutilPedagogiquesVo = this.paysTypeOutilCultureScientifiqueOutilPedagogiqueListe;
            this.selectedCultureScientifiqueOutilPedagogique.partenaitresVo = this.etablissementCultureScientifiqueOutilPedagogiqueListe;
    this.cultureScientifiqueOutilPedagogiqueService.save().subscribe(cultureScientifiqueOutilPedagogique=>{
          
       this.cultureScientifiqueOutilPedagogiques.push({...cultureScientifiqueOutilPedagogique});
       this.createCultureScientifiqueOutilPedagogiqueDialog = false;
       this.selectedCultureScientifiqueOutilPedagogique = new CultureScientifiqueOutilPedagogiqueVo();
    },error=>{
        console.log(error);
    })
            this.selectedPublicCibleCultureScientifiqueOutilPedagogique = new PublicCibleCultureScientifiqueOutilPedagogiqueVo();
            this.publicCibleCultureScientifiqueOutilPedagogiqueListe = [];
            this.selectedTypeOutilCultureScientifiqueOutilPedagogique = new TypeOutilCultureScientifiqueOutilPedagogiqueVo();
            this.typeOutilCultureScientifiqueOutilPedagogiqueListe = [];
            this.selectedPaysTypeOutilCultureScientifiqueOutilPedagogique = new PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo();
            this.paysTypeOutilCultureScientifiqueOutilPedagogiqueListe = [];
            this.selectedEtablissementCultureScientifiqueOutilPedagogique = new EtablissementCultureScientifiqueOutilPedagogiqueVo();
            this.etablissementCultureScientifiqueOutilPedagogiqueListe = [];
}
// methods 

hideCreateDialog(){
    this.createCultureScientifiqueOutilPedagogiqueDialog  = false;
}

// getters and setters 

get cultureScientifiqueOutilPedagogiques(): Array<CultureScientifiqueOutilPedagogiqueVo> {
    return this.cultureScientifiqueOutilPedagogiqueService.cultureScientifiqueOutilPedagogiques;
       }
set cultureScientifiqueOutilPedagogiques(value: Array<CultureScientifiqueOutilPedagogiqueVo>) {
        this.cultureScientifiqueOutilPedagogiqueService.cultureScientifiqueOutilPedagogiques = value;
       } 

 get selectedCultureScientifiqueOutilPedagogique():CultureScientifiqueOutilPedagogiqueVo {
           return this.cultureScientifiqueOutilPedagogiqueService.selectedCultureScientifiqueOutilPedagogique;
       }
    set selectedCultureScientifiqueOutilPedagogique(value: CultureScientifiqueOutilPedagogiqueVo) {
        this.cultureScientifiqueOutilPedagogiqueService.selectedCultureScientifiqueOutilPedagogique = value;
       }
  
   get createCultureScientifiqueOutilPedagogiqueDialog():boolean {
           return this.cultureScientifiqueOutilPedagogiqueService.createCultureScientifiqueOutilPedagogiqueDialog;
       }
    set createCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this.cultureScientifiqueOutilPedagogiqueService.createCultureScientifiqueOutilPedagogiqueDialog= value;
       }


}