import {Component, OnInit} from '@angular/core';
import {EnjeuxIrdChercheurService} from '../../../controller/service/EnjeuxIrdChercheur.service';
import {EnjeuxIrdChercheurVo} from '../../../controller/model/EnjeuxIrdChercheur.model';
import {EnjeuxIrdVo} from '../../../controller/model/EnjeuxIrd.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-enjeuxIrdChercheur-list',
  templateUrl: './enjeuxIrdChercheur-list.component.html',
  styleUrls: ['./enjeuxIrdChercheur-list.component.css']
})

export class EnjeuxIrdChercheurListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private enjeuxIrdChercheurService: EnjeuxIrdChercheurService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadEnjeuxIrdChercheurs();
    } 
    
    // methods 
    public async loadEnjeuxIrdChercheurs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("EnjeuxIrdChercheur", "list");
        isPermistted ? this.enjeuxIrdChercheurService.findAll().subscribe(enjeuxIrdChercheurs => this.enjeuxIrdChercheurs = enjeuxIrdChercheurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.enjeuxIrdChercheurService.findByCriteria(this.searchEnjeuxIrdChercheur).subscribe(enjeuxIrdChercheurs=>{
            
            this.enjeuxIrdChercheurs = enjeuxIrdChercheurs;
           // this.searchEnjeuxIrdChercheur = new EnjeuxIrdChercheurVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'enjeuxIrd', header: 'enjeuxIrd'},
                {field: 'chercheur', header: 'chercheur'},
        ];
    }
    
    public async editEnjeuxIrdChercheur(enjeuxIrdChercheur:EnjeuxIrdChercheurVo){
        const isPermistted = await this.roleService.isPermitted("EnjeuxIrdChercheur", "edit");
         if(isPermistted){
         this.selectedEnjeuxIrdChercheur = enjeuxIrdChercheur;
         this.editEnjeuxIrdChercheurDialog = true;
         this.enjeuxIrdChercheurService.editEnjeuxIrdChercheur$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewEnjeuxIrdChercheur(enjeuxIrdChercheur:EnjeuxIrdChercheurVo){
        const isPermistted = await this.roleService.isPermitted("EnjeuxIrdChercheur", "view");
        if(isPermistted){
       this.selectedEnjeuxIrdChercheur = enjeuxIrdChercheur;
        this.viewEnjeuxIrdChercheurDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateEnjeuxIrdChercheur(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedEnjeuxIrdChercheur = new EnjeuxIrdChercheurVo();
        this.createEnjeuxIrdChercheurDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteEnjeuxIrdChercheur(enjeuxIrdChercheur:EnjeuxIrdChercheurVo){
       const isPermistted = await this.roleService.isPermitted("EnjeuxIrdChercheur", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the EnjeuxIrdChercheur ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.enjeuxIrdChercheurService.delete(enjeuxIrdChercheur).subscribe(status=>{
                          if(status > 0){
                          const position = this.enjeuxIrdChercheurs.indexOf(enjeuxIrdChercheur);
                          position > -1 ? this.enjeuxIrdChercheurs.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'EnjeuxIrdChercheur Deleted',
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

    get enjeuxIrdChercheurs(): Array<EnjeuxIrdChercheurVo> {
           return this.enjeuxIrdChercheurService.enjeuxIrdChercheurs;
       }
    set enjeuxIrdChercheurs(value: Array<EnjeuxIrdChercheurVo>) {
        this.enjeuxIrdChercheurService.enjeuxIrdChercheurs = value;
       }

    get enjeuxIrdChercheurSelections(): Array<EnjeuxIrdChercheurVo> {
           return this.enjeuxIrdChercheurService.enjeuxIrdChercheurSelections;
       }
    set enjeuxIrdChercheurSelections(value: Array<EnjeuxIrdChercheurVo>) {
        this.enjeuxIrdChercheurService.enjeuxIrdChercheurSelections = value;
       }
   
     


    get selectedEnjeuxIrdChercheur():EnjeuxIrdChercheurVo {
           return this.enjeuxIrdChercheurService.selectedEnjeuxIrdChercheur;
       }
    set selectedEnjeuxIrdChercheur(value: EnjeuxIrdChercheurVo) {
        this.enjeuxIrdChercheurService.selectedEnjeuxIrdChercheur = value;
       }
    
    get createEnjeuxIrdChercheurDialog():boolean {
           return this.enjeuxIrdChercheurService.createEnjeuxIrdChercheurDialog;
       }
    set createEnjeuxIrdChercheurDialog(value: boolean) {
        this.enjeuxIrdChercheurService.createEnjeuxIrdChercheurDialog= value;
       }
    
    get editEnjeuxIrdChercheurDialog():boolean {
           return this.enjeuxIrdChercheurService.editEnjeuxIrdChercheurDialog;
       }
    set editEnjeuxIrdChercheurDialog(value: boolean) {
        this.enjeuxIrdChercheurService.editEnjeuxIrdChercheurDialog= value;
       }
    get viewEnjeuxIrdChercheurDialog():boolean {
           return this.enjeuxIrdChercheurService.viewEnjeuxIrdChercheurDialog;
       }
    set viewEnjeuxIrdChercheurDialog(value: boolean) {
        this.enjeuxIrdChercheurService.viewEnjeuxIrdChercheurDialog = value;
       }
       
     get searchEnjeuxIrdChercheur(): EnjeuxIrdChercheurVo {
        return this.enjeuxIrdChercheurService.searchEnjeuxIrdChercheur;
       }
    set searchEnjeuxIrdChercheur(value: EnjeuxIrdChercheurVo) {
        this.enjeuxIrdChercheurService.searchEnjeuxIrdChercheur = value;
       }



}