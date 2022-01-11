import {Component, OnInit} from '@angular/core';
import {GestionEquipeService} from '../../../controller/service/GestionEquipe.service';
import {GestionEquipeVo} from '../../../controller/model/GestionEquipe.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-gestionEquipe-list',
  templateUrl: './gestionEquipe-list.component.html',
  styleUrls: ['./gestionEquipe-list.component.css']
})

export class GestionEquipeListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private gestionEquipeService: GestionEquipeService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadGestionEquipes();
    } 
    
    // methods 
    public async loadGestionEquipes(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("GestionEquipe", "list");
        isPermistted ? this.gestionEquipeService.findAll().subscribe(gestionEquipes => this.gestionEquipes = gestionEquipes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.gestionEquipeService.findByCriteria(this.searchGestionEquipe).subscribe(gestionEquipes=>{
            
            this.gestionEquipes = gestionEquipes;
           // this.searchGestionEquipe = new GestionEquipeVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'annee', header: 'annee'},
                {field: 'tempsEstimePourCetteAnnne', header: 'tempsEstimePourCetteAnnne'},
                {field: 'nombrePersonneHorsEtudiantEtDoctorant', header: 'nombrePersonneHorsEtudiantEtDoctorant'},
                {field: 'nombrePersonneMemeNonIrd', header: 'nombrePersonneMemeNonIrd'},
                {field: 'nombrePersonneMemeSousConventionsOuContratProjet', header: 'nombrePersonneMemeSousConventionsOuContratProjet'},
                {field: 'chercheur', header: 'chercheur'},
        ];
    }
    
    public async editGestionEquipe(gestionEquipe:GestionEquipeVo){
        const isPermistted = await this.roleService.isPermitted("GestionEquipe", "edit");
         if(isPermistted){
         this.selectedGestionEquipe = gestionEquipe;
         this.editGestionEquipeDialog = true;
         this.gestionEquipeService.editGestionEquipe$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewGestionEquipe(gestionEquipe:GestionEquipeVo){
        const isPermistted = await this.roleService.isPermitted("GestionEquipe", "view");
        if(isPermistted){
       this.selectedGestionEquipe = gestionEquipe;
        this.viewGestionEquipeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateGestionEquipe(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedGestionEquipe = new GestionEquipeVo();
        this.createGestionEquipeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteGestionEquipe(gestionEquipe:GestionEquipeVo){
       const isPermistted = await this.roleService.isPermitted("GestionEquipe", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the GestionEquipe ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.gestionEquipeService.delete(gestionEquipe).subscribe(status=>{
                          if(status > 0){
                          const position = this.gestionEquipes.indexOf(gestionEquipe);
                          position > -1 ? this.gestionEquipes.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'GestionEquipe Deleted',
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

    get gestionEquipes(): Array<GestionEquipeVo> {
           return this.gestionEquipeService.gestionEquipes;
       }
    set gestionEquipes(value: Array<GestionEquipeVo>) {
        this.gestionEquipeService.gestionEquipes = value;
       }

    get gestionEquipeSelections(): Array<GestionEquipeVo> {
           return this.gestionEquipeService.gestionEquipeSelections;
       }
    set gestionEquipeSelections(value: Array<GestionEquipeVo>) {
        this.gestionEquipeService.gestionEquipeSelections = value;
       }
   
     


    get selectedGestionEquipe():GestionEquipeVo {
           return this.gestionEquipeService.selectedGestionEquipe;
       }
    set selectedGestionEquipe(value: GestionEquipeVo) {
        this.gestionEquipeService.selectedGestionEquipe = value;
       }
    
    get createGestionEquipeDialog():boolean {
           return this.gestionEquipeService.createGestionEquipeDialog;
       }
    set createGestionEquipeDialog(value: boolean) {
        this.gestionEquipeService.createGestionEquipeDialog= value;
       }
    
    get editGestionEquipeDialog():boolean {
           return this.gestionEquipeService.editGestionEquipeDialog;
       }
    set editGestionEquipeDialog(value: boolean) {
        this.gestionEquipeService.editGestionEquipeDialog= value;
       }
    get viewGestionEquipeDialog():boolean {
           return this.gestionEquipeService.viewGestionEquipeDialog;
       }
    set viewGestionEquipeDialog(value: boolean) {
        this.gestionEquipeService.viewGestionEquipeDialog = value;
       }
       
     get searchGestionEquipe(): GestionEquipeVo {
        return this.gestionEquipeService.searchGestionEquipe;
       }
    set searchGestionEquipe(value: GestionEquipeVo) {
        this.gestionEquipeService.searchGestionEquipe = value;
       }



}