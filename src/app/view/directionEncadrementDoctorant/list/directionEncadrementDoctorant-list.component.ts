import {Component, OnInit} from '@angular/core';
import {DirectionEncadrementDoctorantService} from '../../../controller/service/DirectionEncadrementDoctorant.service';
import {DirectionEncadrementDoctorantVo} from '../../../controller/model/DirectionEncadrementDoctorant.model';
import {FinancementDoctorantVo} from '../../../controller/model/FinancementDoctorant.model';
import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
import {DoctorantVo} from '../../../controller/model/Doctorant.model';
import {ResponsabiliteDirectionEncadrementDoctorantVo} from '../../../controller/model/ResponsabiliteDirectionEncadrementDoctorant.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import * as moment from 'moment';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-directionEncadrementDoctorant-list',
  templateUrl: './directionEncadrementDoctorant-list.component.html',
  styleUrls: ['./directionEncadrementDoctorant-list.component.css']
})

export class DirectionEncadrementDoctorantListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];
           searchDirectionEncadrementDoctorantMin: Date = null;
    searchDirectionEncadrementDoctorantMax: Date = null;


    constructor(private directionEncadrementDoctorantService: DirectionEncadrementDoctorantService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadDirectionEncadrementDoctorants();
    }

    // methods
    public async loadDirectionEncadrementDoctorants(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("DirectionEncadrementDoctorant", "list");
        isPermistted ? this.directionEncadrementDoctorantService.findAll().subscribe(directionEncadrementDoctorants => this.directionEncadrementDoctorants = directionEncadrementDoctorants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.searchDirectionEncadrementDoctorant.dateDebutTheseMax = this.searchDirectionEncadrementDoctorantMax ? moment(this.searchDirectionEncadrementDoctorantMax).format("YYYY-MM-DD") : '';
        this.searchDirectionEncadrementDoctorant.dateDebutTheseMin = this.searchDirectionEncadrementDoctorantMin ? moment(this.searchDirectionEncadrementDoctorantMin).format("YYYY-MM-DD") : '';
        this.searchDirectionEncadrementDoctorant.datePrevuSoutenanceTheseMax = this.searchDirectionEncadrementDoctorantMax ? moment(this.searchDirectionEncadrementDoctorantMax).format("YYYY-MM-DD") : '';
        this.searchDirectionEncadrementDoctorant.datePrevuSoutenanceTheseMin = this.searchDirectionEncadrementDoctorantMin ? moment(this.searchDirectionEncadrementDoctorantMin).format("YYYY-MM-DD") : '';
        this.directionEncadrementDoctorantService.findByCriteria(this.searchDirectionEncadrementDoctorant).subscribe(directionEncadrementDoctorants=>{

            this.directionEncadrementDoctorants = directionEncadrementDoctorants;
           // this.searchDirectionEncadrementDoctorant = new DirectionEncadrementDoctorantVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'annee', header: 'annee'},
                {field: 'tempsEstimePourCetteAnnne', header: 'tempsEstimePourCetteAnnne'},
                {field: 'sujetThese', header: 'sujetThese'},
                {field: 'communauteSavoirDirectionEncadrementDoctorants', header: 'communauteSavoirDirectionEncadrementDoctorants'},
                {field: 'disciplineScientifiqueDirectionEncadrementDoctorant', header: 'disciplineScientifiqueDirectionEncadrementDoctorant'},
                {field: 'doctorant', header: 'doctorant'},
                {field: 'responsabilite', header: 'responsabilite'},
                {field: 'dateDebutThese', header: 'dateDebutThese'},
                {field: 'datePrevuSoutenanceThese', header: 'datePrevuSoutenanceThese'},
                {field: 'financementDoctorant', header: 'financementDoctorant'},
                {field: 'directeurThese', header: 'directeurThese'},
                {field: 'codirectionInternationale', header: 'codirectionInternationale'},
                {field: 'paysEtablissementInscriptionDoctorant', header: 'paysEtablissementInscriptionDoctorant'},
                {field: 'etablissementInscription', header: 'etablissementInscription'},
                {field: 'intituleEd', header: 'intituleEd'},
                {field: 'numeroEd', header: 'numeroEd'},
                {field: 'projetActiviteRecherche', header: 'projetActiviteRecherche'},
        ];
    }

    public async editDirectionEncadrementDoctorant(directionEncadrementDoctorant:DirectionEncadrementDoctorantVo){
        const isPermistted = await this.roleService.isPermitted("DirectionEncadrementDoctorant", "edit");
         if(isPermistted){
         this.selectedDirectionEncadrementDoctorant = directionEncadrementDoctorant;
         this.editDirectionEncadrementDoctorantDialog = true;
         this.directionEncadrementDoctorantService.editDirectionEncadrementDoctorant$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }

    }



    public async viewDirectionEncadrementDoctorant(directionEncadrementDoctorant:DirectionEncadrementDoctorantVo){
        const isPermistted = await this.roleService.isPermitted("DirectionEncadrementDoctorant", "view");
        if(isPermistted){
       this.selectedDirectionEncadrementDoctorant = directionEncadrementDoctorant;
        this.viewDirectionEncadrementDoctorantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }

    }

    public async openCreateDirectionEncadrementDoctorant(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedDirectionEncadrementDoctorant = new DirectionEncadrementDoctorantVo();
        this.createDirectionEncadrementDoctorantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }

    }

    public async deleteDirectionEncadrementDoctorant(directionEncadrementDoctorant:DirectionEncadrementDoctorantVo){
       const isPermistted = await this.roleService.isPermitted("DirectionEncadrementDoctorant", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the DirectionEncadrementDoctorant ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.directionEncadrementDoctorantService.delete(directionEncadrementDoctorant).subscribe(status=>{
                          if(status > 0){
                          const position = this.directionEncadrementDoctorants.indexOf(directionEncadrementDoctorant);
                          position > -1 ? this.directionEncadrementDoctorants.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'DirectionEncadrementDoctorant Deleted',
                        life: 3000
                    });
                    },error=>console.log(error))
                             }
                     });
              }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
              });
             }



    }


    // getters and setters

    get directionEncadrementDoctorants(): Array<DirectionEncadrementDoctorantVo> {
           return this.directionEncadrementDoctorantService.directionEncadrementDoctorants;
       }
    set directionEncadrementDoctorants(value: Array<DirectionEncadrementDoctorantVo>) {
        this.directionEncadrementDoctorantService.directionEncadrementDoctorants = value;
       }

    get directionEncadrementDoctorantSelections(): Array<DirectionEncadrementDoctorantVo> {
           return this.directionEncadrementDoctorantService.directionEncadrementDoctorantSelections;
       }
    set directionEncadrementDoctorantSelections(value: Array<DirectionEncadrementDoctorantVo>) {
        this.directionEncadrementDoctorantService.directionEncadrementDoctorantSelections = value;
       }




    get selectedDirectionEncadrementDoctorant():DirectionEncadrementDoctorantVo {
           return this.directionEncadrementDoctorantService.selectedDirectionEncadrementDoctorant;
       }
    set selectedDirectionEncadrementDoctorant(value: DirectionEncadrementDoctorantVo) {
        this.directionEncadrementDoctorantService.selectedDirectionEncadrementDoctorant = value;
       }

    get createDirectionEncadrementDoctorantDialog():boolean {
           return this.directionEncadrementDoctorantService.createDirectionEncadrementDoctorantDialog;
       }
    set createDirectionEncadrementDoctorantDialog(value: boolean) {
        this.directionEncadrementDoctorantService.createDirectionEncadrementDoctorantDialog= value;
       }

    get editDirectionEncadrementDoctorantDialog():boolean {
           return this.directionEncadrementDoctorantService.editDirectionEncadrementDoctorantDialog;
       }
    set editDirectionEncadrementDoctorantDialog(value: boolean) {
        this.directionEncadrementDoctorantService.editDirectionEncadrementDoctorantDialog= value;
       }
    get viewDirectionEncadrementDoctorantDialog():boolean {
           return this.directionEncadrementDoctorantService.viewDirectionEncadrementDoctorantDialog;
       }
    set viewDirectionEncadrementDoctorantDialog(value: boolean) {
        this.directionEncadrementDoctorantService.viewDirectionEncadrementDoctorantDialog = value;
       }

     get searchDirectionEncadrementDoctorant(): DirectionEncadrementDoctorantVo {
        return this.directionEncadrementDoctorantService.searchDirectionEncadrementDoctorant;
       }
    set searchDirectionEncadrementDoctorant(value: DirectionEncadrementDoctorantVo) {
        this.directionEncadrementDoctorantService.searchDirectionEncadrementDoctorant = value;
       }



}
