import {Component, OnInit} from '@angular/core';
import {CultureScientifiqueRecontreGrandPublicJeunePublicService} from '../../../controller/service/CultureScientifiqueRecontreGrandPublicJeunePublic.service';
import {CultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/CultureScientifiqueRecontreGrandPublicJeunePublic.model';
      import {FormatRencontreVo} from '../../../controller/model/FormatRencontre.model';
import {PublicCibleCultureScientifiqueRecontreGrandPublicVo} from '../../../controller/model/PublicCibleCultureScientifiqueRecontreGrandPublic.model';
import {PublicCibleVo} from '../../../controller/model/PublicCible.model';
import {PublicCibleService} from '../../../controller/service/PublicCible.service';
import {PaysVo} from '../../../controller/model/Pays.model';
import {PaysService} from '../../../controller/service/Pays.service';
import {ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/ContexteCultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {ContexteVo} from '../../../controller/model/Contexte.model';
import {ContexteService} from '../../../controller/service/Contexte.service';
import {EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/EtablissementCultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import {EtablissementService} from '../../../controller/service/Etablissement.service';
import {PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/PaysCultureScientifiqueRecontreGrandPublicJeunePublic.model';

@Component({
  selector: 'app-cultureScientifiqueRecontreGrandPublicJeunePublic-create',
  templateUrl: './cultureScientifiqueRecontreGrandPublicJeunePublic-create.component.html',
  styleUrls: ['./cultureScientifiqueRecontreGrandPublicJeunePublic-create.component.css']
})
export class CultureScientifiqueRecontreGrandPublicJeunePublicCreateComponent implements OnInit {

constructor(private cultureScientifiqueRecontreGrandPublicJeunePublicService: CultureScientifiqueRecontreGrandPublicJeunePublicService
            ,private publicCibleService: PublicCibleService
            ,private paysService: PaysService
            ,private contexteService: ContexteService
            ,private etablissementService: EtablissementService
            ) { }
// methods 
ngOnInit(): void {
                this.selectedPublicCibleCultureScientifiqueRecontreGrandPublic.publicCibleVo = new PublicCibleVo();
                this.publicCibleService.findAll().subscribe((data) => this.mypublicCibles = data);
                this.selectedPublicCibleCultureScientifiqueRecontreGrandPublic.paysVo = new PaysVo();
                this.paysService.findAll().subscribe((data) => this.mypayss = data);
                this.selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic.contexteVo = new ContexteVo();
                this.contexteService.findAll().subscribe((data) => this.mycontextes = data);
                this.selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic.etablissementVo = new EtablissementVo();
                this.etablissementService.findAll().subscribe((data) => this.myetablissements = data);
                this.selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic.paysVo = new PaysVo();
                this.paysService.findAll().subscribe((data) => this.mypayss = data);
    }
        selectedPublicCibleCultureScientifiqueRecontreGrandPublic: PublicCibleCultureScientifiqueRecontreGrandPublicVo = new PublicCibleCultureScientifiqueRecontreGrandPublicVo();
        publicCibleCultureScientifiqueRecontreGrandPublicListe: Array<PublicCibleCultureScientifiqueRecontreGrandPublicVo> = [];
        mypublicCibles: Array<PublicCibleVo> = [];
        mypayss: Array<PaysVo> = [];

        addPublicCibleCultureScientifiqueRecontreGrandPublic() {
            this.selectedPublicCibleCultureScientifiqueRecontreGrandPublic.cultureScientifiqueRecontreGrandPublicVo = this.selectedCultureScientifiqueRecontreGrandPublicJeunePublic
          this.publicCibleCultureScientifiqueRecontreGrandPublicListe.push(this.selectedPublicCibleCultureScientifiqueRecontreGrandPublic);
          this.selectedPublicCibleCultureScientifiqueRecontreGrandPublic = new PublicCibleCultureScientifiqueRecontreGrandPublicVo();
        }

        deletePublicCibleCultureScientifiqueRecontreGrandPublic(p: PublicCibleCultureScientifiqueRecontreGrandPublicVo) {
        this.publicCibleCultureScientifiqueRecontreGrandPublicListe.forEach((element, index) => {
            if (element === p) { this.publicCibleCultureScientifiqueRecontreGrandPublicListe.splice(index, 1); }
        });
    }
        selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic: ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo = new ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo();
        contexteCultureScientifiqueRecontreGrandPublicJeunePublicListe: Array<ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo> = [];
        mycontextes: Array<ContexteVo> = [];

        addContexteCultureScientifiqueRecontreGrandPublicJeunePublic() {
            this.selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic.cultureScientifiqueRecontreGrandPublicJeunePublicVo = this.selectedCultureScientifiqueRecontreGrandPublicJeunePublic
          this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicListe.push(this.selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic);
          this.selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic = new ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo();
        }

        deleteContexteCultureScientifiqueRecontreGrandPublicJeunePublic(p: ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo) {
        this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicListe.forEach((element, index) => {
            if (element === p) { this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicListe.splice(index, 1); }
        });
    }
        selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic: EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo = new EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo();
        etablissementCultureScientifiqueRecontreGrandPublicJeunePublicListe: Array<EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo> = [];
        myetablissements: Array<EtablissementVo> = [];

        addEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic() {
            this.selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic.cultureScientifiqueRecontreGrandPublicJeunePublicVo = this.selectedCultureScientifiqueRecontreGrandPublicJeunePublic
          this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicListe.push(this.selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic);
          this.selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic = new EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo();
        }

        deleteEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic(p: EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo) {
        this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicListe.forEach((element, index) => {
            if (element === p) { this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicListe.splice(index, 1); }
        });
    }
        selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic: PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo = new PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo();
        paysCultureScientifiqueRecontreGrandPublicJeunePublicListe: Array<PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo> = [];

        addPaysCultureScientifiqueRecontreGrandPublicJeunePublic() {
            this.selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic.cultureScientifiqueRecontreGrandPublicJeunePublicVo = this.selectedCultureScientifiqueRecontreGrandPublicJeunePublic
          this.paysCultureScientifiqueRecontreGrandPublicJeunePublicListe.push(this.selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic);
          this.selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic = new PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo();
        }

        deletePaysCultureScientifiqueRecontreGrandPublicJeunePublic(p: PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo) {
        this.paysCultureScientifiqueRecontreGrandPublicJeunePublicListe.forEach((element, index) => {
            if (element === p) { this.paysCultureScientifiqueRecontreGrandPublicJeunePublicListe.splice(index, 1); }
        });
    }

public save(){
            this.selectedCultureScientifiqueRecontreGrandPublicJeunePublic.publicCibleCultureScientifiqueRecontresGrandPublicJeunePublicsVo = this.publicCibleCultureScientifiqueRecontreGrandPublicListe;
            this.selectedCultureScientifiqueRecontreGrandPublicJeunePublic.contexteCultureScientifiqueRecontreGrandPublicJeunePublicsVo = this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicListe;
            this.selectedCultureScientifiqueRecontreGrandPublicJeunePublic.etablisementOrganisateurEvenementsVo = this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicListe;
            this.selectedCultureScientifiqueRecontreGrandPublicJeunePublic.paysCultureScientifiqueRecontreGrandPublicJeunePublicsVo = this.paysCultureScientifiqueRecontreGrandPublicJeunePublicListe;
    this.cultureScientifiqueRecontreGrandPublicJeunePublicService.save().subscribe(cultureScientifiqueRecontreGrandPublicJeunePublic=>{
          
       this.cultureScientifiqueRecontreGrandPublicJeunePublics.push({...cultureScientifiqueRecontreGrandPublicJeunePublic});
       this.createCultureScientifiqueRecontreGrandPublicJeunePublicDialog = false;
       this.selectedCultureScientifiqueRecontreGrandPublicJeunePublic = new CultureScientifiqueRecontreGrandPublicJeunePublicVo();
    },error=>{
        console.log(error);
    })
            this.selectedPublicCibleCultureScientifiqueRecontreGrandPublic = new PublicCibleCultureScientifiqueRecontreGrandPublicVo();
            this.publicCibleCultureScientifiqueRecontreGrandPublicListe = [];
            this.selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic = new ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo();
            this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicListe = [];
            this.selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic = new EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo();
            this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicListe = [];
            this.selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic = new PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo();
            this.paysCultureScientifiqueRecontreGrandPublicJeunePublicListe = [];
}
// methods 

hideCreateDialog(){
    this.createCultureScientifiqueRecontreGrandPublicJeunePublicDialog  = false;
}

// getters and setters 

get cultureScientifiqueRecontreGrandPublicJeunePublics(): Array<CultureScientifiqueRecontreGrandPublicJeunePublicVo> {
    return this.cultureScientifiqueRecontreGrandPublicJeunePublicService.cultureScientifiqueRecontreGrandPublicJeunePublics;
       }
set cultureScientifiqueRecontreGrandPublicJeunePublics(value: Array<CultureScientifiqueRecontreGrandPublicJeunePublicVo>) {
        this.cultureScientifiqueRecontreGrandPublicJeunePublicService.cultureScientifiqueRecontreGrandPublicJeunePublics = value;
       } 

 get selectedCultureScientifiqueRecontreGrandPublicJeunePublic():CultureScientifiqueRecontreGrandPublicJeunePublicVo {
           return this.cultureScientifiqueRecontreGrandPublicJeunePublicService.selectedCultureScientifiqueRecontreGrandPublicJeunePublic;
       }
    set selectedCultureScientifiqueRecontreGrandPublicJeunePublic(value: CultureScientifiqueRecontreGrandPublicJeunePublicVo) {
        this.cultureScientifiqueRecontreGrandPublicJeunePublicService.selectedCultureScientifiqueRecontreGrandPublicJeunePublic = value;
       }
  
   get createCultureScientifiqueRecontreGrandPublicJeunePublicDialog():boolean {
           return this.cultureScientifiqueRecontreGrandPublicJeunePublicService.createCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
    set createCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this.cultureScientifiqueRecontreGrandPublicJeunePublicService.createCultureScientifiqueRecontreGrandPublicJeunePublicDialog= value;
       }


}