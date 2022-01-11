import {Component, OnInit} from '@angular/core';
import {ConseilEtComiteScientifiqueService} from '../../../controller/service/ConseilEtComiteScientifique.service';
import {ConseilEtComiteScientifiqueVo} from '../../../controller/model/ConseilEtComiteScientifique.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-conseilEtComiteScientifique-list',
  templateUrl: './conseilEtComiteScientifique-list.component.html',
  styleUrls: ['./conseilEtComiteScientifique-list.component.css']
})

export class ConseilEtComiteScientifiqueListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private conseilEtComiteScientifiqueService: ConseilEtComiteScientifiqueService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadConseilEtComiteScientifiques();
    } 
    
    // methods 
    public async loadConseilEtComiteScientifiques(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("ConseilEtComiteScientifique", "list");
        isPermistted ? this.conseilEtComiteScientifiqueService.findAll().subscribe(conseilEtComiteScientifiques => this.conseilEtComiteScientifiques = conseilEtComiteScientifiques,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.conseilEtComiteScientifiqueService.findByCriteria(this.searchConseilEtComiteScientifique).subscribe(conseilEtComiteScientifiques=>{
            
            this.conseilEtComiteScientifiques = conseilEtComiteScientifiques;
           // this.searchConseilEtComiteScientifique = new ConseilEtComiteScientifiqueVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'annee', header: 'annee'},
                {field: 'tempsEstimePourCetteAnnne', header: 'tempsEstimePourCetteAnnne'},
                {field: 'intitule', header: 'intitule'},
                {field: 'paysEtablissement', header: 'paysEtablissement'},
                {field: 'etablissement', header: 'etablissement'},
                {field: 'nombreJoursParAnnee', header: 'nombreJoursParAnnee'},
                {field: 'communauteSavoirConseilEtComiteScientifiques', header: 'communauteSavoirConseilEtComiteScientifiques'},
                {field: 'disciplineScientifiqueConseilEtComiteScientifiques', header: 'disciplineScientifiqueConseilEtComiteScientifiques'},
                {field: 'chercheur', header: 'chercheur'},
        ];
    }
    
    public async editConseilEtComiteScientifique(conseilEtComiteScientifique:ConseilEtComiteScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted("ConseilEtComiteScientifique", "edit");
         if(isPermistted){
         this.selectedConseilEtComiteScientifique = conseilEtComiteScientifique;
         this.editConseilEtComiteScientifiqueDialog = true;
         this.conseilEtComiteScientifiqueService.editConseilEtComiteScientifique$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewConseilEtComiteScientifique(conseilEtComiteScientifique:ConseilEtComiteScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted("ConseilEtComiteScientifique", "view");
        if(isPermistted){
       this.selectedConseilEtComiteScientifique = conseilEtComiteScientifique;
        this.viewConseilEtComiteScientifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateConseilEtComiteScientifique(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedConseilEtComiteScientifique = new ConseilEtComiteScientifiqueVo();
        this.createConseilEtComiteScientifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteConseilEtComiteScientifique(conseilEtComiteScientifique:ConseilEtComiteScientifiqueVo){
       const isPermistted = await this.roleService.isPermitted("ConseilEtComiteScientifique", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the ConseilEtComiteScientifique ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.conseilEtComiteScientifiqueService.delete(conseilEtComiteScientifique).subscribe(status=>{
                          if(status > 0){
                          const position = this.conseilEtComiteScientifiques.indexOf(conseilEtComiteScientifique);
                          position > -1 ? this.conseilEtComiteScientifiques.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'ConseilEtComiteScientifique Deleted',
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

    get conseilEtComiteScientifiques(): Array<ConseilEtComiteScientifiqueVo> {
           return this.conseilEtComiteScientifiqueService.conseilEtComiteScientifiques;
       }
    set conseilEtComiteScientifiques(value: Array<ConseilEtComiteScientifiqueVo>) {
        this.conseilEtComiteScientifiqueService.conseilEtComiteScientifiques = value;
       }

    get conseilEtComiteScientifiqueSelections(): Array<ConseilEtComiteScientifiqueVo> {
           return this.conseilEtComiteScientifiqueService.conseilEtComiteScientifiqueSelections;
       }
    set conseilEtComiteScientifiqueSelections(value: Array<ConseilEtComiteScientifiqueVo>) {
        this.conseilEtComiteScientifiqueService.conseilEtComiteScientifiqueSelections = value;
       }
   
     


    get selectedConseilEtComiteScientifique():ConseilEtComiteScientifiqueVo {
           return this.conseilEtComiteScientifiqueService.selectedConseilEtComiteScientifique;
       }
    set selectedConseilEtComiteScientifique(value: ConseilEtComiteScientifiqueVo) {
        this.conseilEtComiteScientifiqueService.selectedConseilEtComiteScientifique = value;
       }
    
    get createConseilEtComiteScientifiqueDialog():boolean {
           return this.conseilEtComiteScientifiqueService.createConseilEtComiteScientifiqueDialog;
       }
    set createConseilEtComiteScientifiqueDialog(value: boolean) {
        this.conseilEtComiteScientifiqueService.createConseilEtComiteScientifiqueDialog= value;
       }
    
    get editConseilEtComiteScientifiqueDialog():boolean {
           return this.conseilEtComiteScientifiqueService.editConseilEtComiteScientifiqueDialog;
       }
    set editConseilEtComiteScientifiqueDialog(value: boolean) {
        this.conseilEtComiteScientifiqueService.editConseilEtComiteScientifiqueDialog= value;
       }
    get viewConseilEtComiteScientifiqueDialog():boolean {
           return this.conseilEtComiteScientifiqueService.viewConseilEtComiteScientifiqueDialog;
       }
    set viewConseilEtComiteScientifiqueDialog(value: boolean) {
        this.conseilEtComiteScientifiqueService.viewConseilEtComiteScientifiqueDialog = value;
       }
       
     get searchConseilEtComiteScientifique(): ConseilEtComiteScientifiqueVo {
        return this.conseilEtComiteScientifiqueService.searchConseilEtComiteScientifique;
       }
    set searchConseilEtComiteScientifique(value: ConseilEtComiteScientifiqueVo) {
        this.conseilEtComiteScientifiqueService.searchConseilEtComiteScientifique = value;
       }



}