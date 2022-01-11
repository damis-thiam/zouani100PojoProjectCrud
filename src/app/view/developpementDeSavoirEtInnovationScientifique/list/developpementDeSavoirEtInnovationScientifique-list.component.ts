import {Component, OnInit} from '@angular/core';
import {DeveloppementDeSavoirEtInnovationScientifiqueService} from '../../../controller/service/DeveloppementDeSavoirEtInnovationScientifique.service';
import {DeveloppementDeSavoirEtInnovationScientifiqueVo} from '../../../controller/model/DeveloppementDeSavoirEtInnovationScientifique.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-developpementDeSavoirEtInnovationScientifique-list',
  templateUrl: './developpementDeSavoirEtInnovationScientifique-list.component.html',
  styleUrls: ['./developpementDeSavoirEtInnovationScientifique-list.component.css']
})

export class DeveloppementDeSavoirEtInnovationScientifiqueListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private developpementDeSavoirEtInnovationScientifiqueService: DeveloppementDeSavoirEtInnovationScientifiqueService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadDeveloppementDeSavoirEtInnovationScientifiques();
    } 
    
    // methods 
    public async loadDeveloppementDeSavoirEtInnovationScientifiques(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("DeveloppementDeSavoirEtInnovationScientifique", "list");
        isPermistted ? this.developpementDeSavoirEtInnovationScientifiqueService.findAll().subscribe(developpementDeSavoirEtInnovationScientifiques => this.developpementDeSavoirEtInnovationScientifiques = developpementDeSavoirEtInnovationScientifiques,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.developpementDeSavoirEtInnovationScientifiqueService.findByCriteria(this.searchDeveloppementDeSavoirEtInnovationScientifique).subscribe(developpementDeSavoirEtInnovationScientifiques=>{
            
            this.developpementDeSavoirEtInnovationScientifiques = developpementDeSavoirEtInnovationScientifiques;
           // this.searchDeveloppementDeSavoirEtInnovationScientifique = new DeveloppementDeSavoirEtInnovationScientifiqueVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'typeSavoirDeveloppementDeSavoirEtInnovationScientifiques', header: 'typeSavoirDeveloppementDeSavoirEtInnovationScientifiques'},
                {field: 'titreInstrument', header: 'titreInstrument'},
                {field: 'modeDiffusions', header: 'modeDiffusions'},
                {field: 'caracterisationUtilisateurs', header: 'caracterisationUtilisateurs'},
                {field: 'role', header: 'role'},
                {field: 'anneeMiseEnOeuvre', header: 'anneeMiseEnOeuvre'},
                {field: 'paysDiffusion', header: 'paysDiffusion'},
                {field: 'codeveloppeurs', header: 'codeveloppeurs'},
                {field: 'lienWeb', header: 'lienWeb'},
        ];
    }
    
    public async editDeveloppementDeSavoirEtInnovationScientifique(developpementDeSavoirEtInnovationScientifique:DeveloppementDeSavoirEtInnovationScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted("DeveloppementDeSavoirEtInnovationScientifique", "edit");
         if(isPermistted){
         this.selectedDeveloppementDeSavoirEtInnovationScientifique = developpementDeSavoirEtInnovationScientifique;
         this.editDeveloppementDeSavoirEtInnovationScientifiqueDialog = true;
         this.developpementDeSavoirEtInnovationScientifiqueService.editDeveloppementDeSavoirEtInnovationScientifique$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewDeveloppementDeSavoirEtInnovationScientifique(developpementDeSavoirEtInnovationScientifique:DeveloppementDeSavoirEtInnovationScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted("DeveloppementDeSavoirEtInnovationScientifique", "view");
        if(isPermistted){
       this.selectedDeveloppementDeSavoirEtInnovationScientifique = developpementDeSavoirEtInnovationScientifique;
        this.viewDeveloppementDeSavoirEtInnovationScientifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateDeveloppementDeSavoirEtInnovationScientifique(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedDeveloppementDeSavoirEtInnovationScientifique = new DeveloppementDeSavoirEtInnovationScientifiqueVo();
        this.createDeveloppementDeSavoirEtInnovationScientifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteDeveloppementDeSavoirEtInnovationScientifique(developpementDeSavoirEtInnovationScientifique:DeveloppementDeSavoirEtInnovationScientifiqueVo){
       const isPermistted = await this.roleService.isPermitted("DeveloppementDeSavoirEtInnovationScientifique", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the DeveloppementDeSavoirEtInnovationScientifique ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.developpementDeSavoirEtInnovationScientifiqueService.delete(developpementDeSavoirEtInnovationScientifique).subscribe(status=>{
                          if(status > 0){
                          const position = this.developpementDeSavoirEtInnovationScientifiques.indexOf(developpementDeSavoirEtInnovationScientifique);
                          position > -1 ? this.developpementDeSavoirEtInnovationScientifiques.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'DeveloppementDeSavoirEtInnovationScientifique Deleted',
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

    get developpementDeSavoirEtInnovationScientifiques(): Array<DeveloppementDeSavoirEtInnovationScientifiqueVo> {
           return this.developpementDeSavoirEtInnovationScientifiqueService.developpementDeSavoirEtInnovationScientifiques;
       }
    set developpementDeSavoirEtInnovationScientifiques(value: Array<DeveloppementDeSavoirEtInnovationScientifiqueVo>) {
        this.developpementDeSavoirEtInnovationScientifiqueService.developpementDeSavoirEtInnovationScientifiques = value;
       }

    get developpementDeSavoirEtInnovationScientifiqueSelections(): Array<DeveloppementDeSavoirEtInnovationScientifiqueVo> {
           return this.developpementDeSavoirEtInnovationScientifiqueService.developpementDeSavoirEtInnovationScientifiqueSelections;
       }
    set developpementDeSavoirEtInnovationScientifiqueSelections(value: Array<DeveloppementDeSavoirEtInnovationScientifiqueVo>) {
        this.developpementDeSavoirEtInnovationScientifiqueService.developpementDeSavoirEtInnovationScientifiqueSelections = value;
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
    
    get editDeveloppementDeSavoirEtInnovationScientifiqueDialog():boolean {
           return this.developpementDeSavoirEtInnovationScientifiqueService.editDeveloppementDeSavoirEtInnovationScientifiqueDialog;
       }
    set editDeveloppementDeSavoirEtInnovationScientifiqueDialog(value: boolean) {
        this.developpementDeSavoirEtInnovationScientifiqueService.editDeveloppementDeSavoirEtInnovationScientifiqueDialog= value;
       }
    get viewDeveloppementDeSavoirEtInnovationScientifiqueDialog():boolean {
           return this.developpementDeSavoirEtInnovationScientifiqueService.viewDeveloppementDeSavoirEtInnovationScientifiqueDialog;
       }
    set viewDeveloppementDeSavoirEtInnovationScientifiqueDialog(value: boolean) {
        this.developpementDeSavoirEtInnovationScientifiqueService.viewDeveloppementDeSavoirEtInnovationScientifiqueDialog = value;
       }
       
     get searchDeveloppementDeSavoirEtInnovationScientifique(): DeveloppementDeSavoirEtInnovationScientifiqueVo {
        return this.developpementDeSavoirEtInnovationScientifiqueService.searchDeveloppementDeSavoirEtInnovationScientifique;
       }
    set searchDeveloppementDeSavoirEtInnovationScientifique(value: DeveloppementDeSavoirEtInnovationScientifiqueVo) {
        this.developpementDeSavoirEtInnovationScientifiqueService.searchDeveloppementDeSavoirEtInnovationScientifique = value;
       }



}