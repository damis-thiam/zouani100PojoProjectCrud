import {Component, OnInit} from '@angular/core';
import {EvenementColloqueScienntifiqueService} from '../../../controller/service/EvenementColloqueScienntifique.service';
import {EvenementColloqueScienntifiqueVo} from '../../../controller/model/EvenementColloqueScienntifique.model';
import {ModaliteVo} from '../../../controller/model/Modalite.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-evenementColloqueScienntifique-list',
  templateUrl: './evenementColloqueScienntifique-list.component.html',
  styleUrls: ['./evenementColloqueScienntifique-list.component.css']
})

export class EvenementColloqueScienntifiqueListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private evenementColloqueScienntifiqueService: EvenementColloqueScienntifiqueService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadEvenementColloqueScienntifiques();
    } 
    
    // methods 
    public async loadEvenementColloqueScienntifiques(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("EvenementColloqueScienntifique", "list");
        isPermistted ? this.evenementColloqueScienntifiqueService.findAll().subscribe(evenementColloqueScienntifiques => this.evenementColloqueScienntifiques = evenementColloqueScienntifiques,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.evenementColloqueScienntifiqueService.findByCriteria(this.searchEvenementColloqueScienntifique).subscribe(evenementColloqueScienntifiques=>{
            
            this.evenementColloqueScienntifiques = evenementColloqueScienntifiques;
           // this.searchEvenementColloqueScienntifique = new EvenementColloqueScienntifiqueVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'tempsEstime', header: 'tempsEstime'},
                {field: 'modalite', header: 'modalite'},
                {field: 'typeDeParticipation', header: 'typeDeParticipation'},
                {field: 'intitule', header: 'intitule'},
                {field: 'periodeEvenementAnnee', header: 'periodeEvenementAnnee'},
                {field: 'periodeEvenementMois', header: 'periodeEvenementMois'},
                {field: 'diplomatieScientifiques', header: 'diplomatieScientifiques'},
                {field: 'communauteSavoirEvenementColloqueScientifiques', header: 'communauteSavoirEvenementColloqueScientifiques'},
                {field: 'disciplineScientifiqueEvenementColloqueScientifiques', header: 'disciplineScientifiqueEvenementColloqueScientifiques'},
                {field: 'paysEvenement', header: 'paysEvenement'},
                {field: 'volumeParticipant', header: 'volumeParticipant'},
                {field: 'financementEvenement', header: 'financementEvenement'},
                {field: 'typeEvenement', header: 'typeEvenement'},
                {field: 'partIrd', header: 'partIrd'},
        ];
    }
    
    public async editEvenementColloqueScienntifique(evenementColloqueScienntifique:EvenementColloqueScienntifiqueVo){
        const isPermistted = await this.roleService.isPermitted("EvenementColloqueScienntifique", "edit");
         if(isPermistted){
         this.selectedEvenementColloqueScienntifique = evenementColloqueScienntifique;
         this.editEvenementColloqueScienntifiqueDialog = true;
         this.evenementColloqueScienntifiqueService.editEvenementColloqueScienntifique$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewEvenementColloqueScienntifique(evenementColloqueScienntifique:EvenementColloqueScienntifiqueVo){
        const isPermistted = await this.roleService.isPermitted("EvenementColloqueScienntifique", "view");
        if(isPermistted){
       this.selectedEvenementColloqueScienntifique = evenementColloqueScienntifique;
        this.viewEvenementColloqueScienntifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateEvenementColloqueScienntifique(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedEvenementColloqueScienntifique = new EvenementColloqueScienntifiqueVo();
        this.createEvenementColloqueScienntifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteEvenementColloqueScienntifique(evenementColloqueScienntifique:EvenementColloqueScienntifiqueVo){
       const isPermistted = await this.roleService.isPermitted("EvenementColloqueScienntifique", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the EvenementColloqueScienntifique ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.evenementColloqueScienntifiqueService.delete(evenementColloqueScienntifique).subscribe(status=>{
                          if(status > 0){
                          const position = this.evenementColloqueScienntifiques.indexOf(evenementColloqueScienntifique);
                          position > -1 ? this.evenementColloqueScienntifiques.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'EvenementColloqueScienntifique Deleted',
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

    get evenementColloqueScienntifiques(): Array<EvenementColloqueScienntifiqueVo> {
           return this.evenementColloqueScienntifiqueService.evenementColloqueScienntifiques;
       }
    set evenementColloqueScienntifiques(value: Array<EvenementColloqueScienntifiqueVo>) {
        this.evenementColloqueScienntifiqueService.evenementColloqueScienntifiques = value;
       }

    get evenementColloqueScienntifiqueSelections(): Array<EvenementColloqueScienntifiqueVo> {
           return this.evenementColloqueScienntifiqueService.evenementColloqueScienntifiqueSelections;
       }
    set evenementColloqueScienntifiqueSelections(value: Array<EvenementColloqueScienntifiqueVo>) {
        this.evenementColloqueScienntifiqueService.evenementColloqueScienntifiqueSelections = value;
       }
   
     


    get selectedEvenementColloqueScienntifique():EvenementColloqueScienntifiqueVo {
           return this.evenementColloqueScienntifiqueService.selectedEvenementColloqueScienntifique;
       }
    set selectedEvenementColloqueScienntifique(value: EvenementColloqueScienntifiqueVo) {
        this.evenementColloqueScienntifiqueService.selectedEvenementColloqueScienntifique = value;
       }
    
    get createEvenementColloqueScienntifiqueDialog():boolean {
           return this.evenementColloqueScienntifiqueService.createEvenementColloqueScienntifiqueDialog;
       }
    set createEvenementColloqueScienntifiqueDialog(value: boolean) {
        this.evenementColloqueScienntifiqueService.createEvenementColloqueScienntifiqueDialog= value;
       }
    
    get editEvenementColloqueScienntifiqueDialog():boolean {
           return this.evenementColloqueScienntifiqueService.editEvenementColloqueScienntifiqueDialog;
       }
    set editEvenementColloqueScienntifiqueDialog(value: boolean) {
        this.evenementColloqueScienntifiqueService.editEvenementColloqueScienntifiqueDialog= value;
       }
    get viewEvenementColloqueScienntifiqueDialog():boolean {
           return this.evenementColloqueScienntifiqueService.viewEvenementColloqueScienntifiqueDialog;
       }
    set viewEvenementColloqueScienntifiqueDialog(value: boolean) {
        this.evenementColloqueScienntifiqueService.viewEvenementColloqueScienntifiqueDialog = value;
       }
       
     get searchEvenementColloqueScienntifique(): EvenementColloqueScienntifiqueVo {
        return this.evenementColloqueScienntifiqueService.searchEvenementColloqueScienntifique;
       }
    set searchEvenementColloqueScienntifique(value: EvenementColloqueScienntifiqueVo) {
        this.evenementColloqueScienntifiqueService.searchEvenementColloqueScienntifique = value;
       }



}