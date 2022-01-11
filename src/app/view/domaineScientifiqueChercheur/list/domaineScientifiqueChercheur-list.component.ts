import {Component, OnInit} from '@angular/core';
import {DomaineScientifiqueChercheurService} from '../../../controller/service/DomaineScientifiqueChercheur.service';
import {DomaineScientifiqueChercheurVo} from '../../../controller/model/DomaineScientifiqueChercheur.model';
import {DomaineScientifiqueVo} from '../../../controller/model/DomaineScientifique.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-domaineScientifiqueChercheur-list',
  templateUrl: './domaineScientifiqueChercheur-list.component.html',
  styleUrls: ['./domaineScientifiqueChercheur-list.component.css']
})

export class DomaineScientifiqueChercheurListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private domaineScientifiqueChercheurService: DomaineScientifiqueChercheurService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadDomaineScientifiqueChercheurs();
    } 
    
    // methods 
    public async loadDomaineScientifiqueChercheurs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("DomaineScientifiqueChercheur", "list");
        isPermistted ? this.domaineScientifiqueChercheurService.findAll().subscribe(domaineScientifiqueChercheurs => this.domaineScientifiqueChercheurs = domaineScientifiqueChercheurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.domaineScientifiqueChercheurService.findByCriteria(this.searchDomaineScientifiqueChercheur).subscribe(domaineScientifiqueChercheurs=>{
            
            this.domaineScientifiqueChercheurs = domaineScientifiqueChercheurs;
           // this.searchDomaineScientifiqueChercheur = new DomaineScientifiqueChercheurVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'domaineScientifique', header: 'domaineScientifique'},
                {field: 'chercheur', header: 'chercheur'},
        ];
    }
    
    public async editDomaineScientifiqueChercheur(domaineScientifiqueChercheur:DomaineScientifiqueChercheurVo){
        const isPermistted = await this.roleService.isPermitted("DomaineScientifiqueChercheur", "edit");
         if(isPermistted){
         this.selectedDomaineScientifiqueChercheur = domaineScientifiqueChercheur;
         this.editDomaineScientifiqueChercheurDialog = true;
         this.domaineScientifiqueChercheurService.editDomaineScientifiqueChercheur$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewDomaineScientifiqueChercheur(domaineScientifiqueChercheur:DomaineScientifiqueChercheurVo){
        const isPermistted = await this.roleService.isPermitted("DomaineScientifiqueChercheur", "view");
        if(isPermistted){
       this.selectedDomaineScientifiqueChercheur = domaineScientifiqueChercheur;
        this.viewDomaineScientifiqueChercheurDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateDomaineScientifiqueChercheur(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedDomaineScientifiqueChercheur = new DomaineScientifiqueChercheurVo();
        this.createDomaineScientifiqueChercheurDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteDomaineScientifiqueChercheur(domaineScientifiqueChercheur:DomaineScientifiqueChercheurVo){
       const isPermistted = await this.roleService.isPermitted("DomaineScientifiqueChercheur", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the DomaineScientifiqueChercheur ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.domaineScientifiqueChercheurService.delete(domaineScientifiqueChercheur).subscribe(status=>{
                          if(status > 0){
                          const position = this.domaineScientifiqueChercheurs.indexOf(domaineScientifiqueChercheur);
                          position > -1 ? this.domaineScientifiqueChercheurs.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'DomaineScientifiqueChercheur Deleted',
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

    get domaineScientifiqueChercheurs(): Array<DomaineScientifiqueChercheurVo> {
           return this.domaineScientifiqueChercheurService.domaineScientifiqueChercheurs;
       }
    set domaineScientifiqueChercheurs(value: Array<DomaineScientifiqueChercheurVo>) {
        this.domaineScientifiqueChercheurService.domaineScientifiqueChercheurs = value;
       }

    get domaineScientifiqueChercheurSelections(): Array<DomaineScientifiqueChercheurVo> {
           return this.domaineScientifiqueChercheurService.domaineScientifiqueChercheurSelections;
       }
    set domaineScientifiqueChercheurSelections(value: Array<DomaineScientifiqueChercheurVo>) {
        this.domaineScientifiqueChercheurService.domaineScientifiqueChercheurSelections = value;
       }
   
     


    get selectedDomaineScientifiqueChercheur():DomaineScientifiqueChercheurVo {
           return this.domaineScientifiqueChercheurService.selectedDomaineScientifiqueChercheur;
       }
    set selectedDomaineScientifiqueChercheur(value: DomaineScientifiqueChercheurVo) {
        this.domaineScientifiqueChercheurService.selectedDomaineScientifiqueChercheur = value;
       }
    
    get createDomaineScientifiqueChercheurDialog():boolean {
           return this.domaineScientifiqueChercheurService.createDomaineScientifiqueChercheurDialog;
       }
    set createDomaineScientifiqueChercheurDialog(value: boolean) {
        this.domaineScientifiqueChercheurService.createDomaineScientifiqueChercheurDialog= value;
       }
    
    get editDomaineScientifiqueChercheurDialog():boolean {
           return this.domaineScientifiqueChercheurService.editDomaineScientifiqueChercheurDialog;
       }
    set editDomaineScientifiqueChercheurDialog(value: boolean) {
        this.domaineScientifiqueChercheurService.editDomaineScientifiqueChercheurDialog= value;
       }
    get viewDomaineScientifiqueChercheurDialog():boolean {
           return this.domaineScientifiqueChercheurService.viewDomaineScientifiqueChercheurDialog;
       }
    set viewDomaineScientifiqueChercheurDialog(value: boolean) {
        this.domaineScientifiqueChercheurService.viewDomaineScientifiqueChercheurDialog = value;
       }
       
     get searchDomaineScientifiqueChercheur(): DomaineScientifiqueChercheurVo {
        return this.domaineScientifiqueChercheurService.searchDomaineScientifiqueChercheur;
       }
    set searchDomaineScientifiqueChercheur(value: DomaineScientifiqueChercheurVo) {
        this.domaineScientifiqueChercheurService.searchDomaineScientifiqueChercheur = value;
       }



}