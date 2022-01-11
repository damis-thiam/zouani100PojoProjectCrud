import {Component, OnInit} from '@angular/core';
import {CommunauteSavoirChercheurService} from '../../../controller/service/CommunauteSavoirChercheur.service';
import {CommunauteSavoirChercheurVo} from '../../../controller/model/CommunauteSavoirChercheur.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-communauteSavoirChercheur-list',
  templateUrl: './communauteSavoirChercheur-list.component.html',
  styleUrls: ['./communauteSavoirChercheur-list.component.css']
})

export class CommunauteSavoirChercheurListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private communauteSavoirChercheurService: CommunauteSavoirChercheurService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadCommunauteSavoirChercheurs();
    } 
    
    // methods 
    public async loadCommunauteSavoirChercheurs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("CommunauteSavoirChercheur", "list");
        isPermistted ? this.communauteSavoirChercheurService.findAll().subscribe(communauteSavoirChercheurs => this.communauteSavoirChercheurs = communauteSavoirChercheurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.communauteSavoirChercheurService.findByCriteria(this.searchCommunauteSavoirChercheur).subscribe(communauteSavoirChercheurs=>{
            
            this.communauteSavoirChercheurs = communauteSavoirChercheurs;
           // this.searchCommunauteSavoirChercheur = new CommunauteSavoirChercheurVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'communauteSavoir', header: 'communauteSavoir'},
                {field: 'chercheur', header: 'chercheur'},
        ];
    }
    
    public async editCommunauteSavoirChercheur(communauteSavoirChercheur:CommunauteSavoirChercheurVo){
        const isPermistted = await this.roleService.isPermitted("CommunauteSavoirChercheur", "edit");
         if(isPermistted){
         this.selectedCommunauteSavoirChercheur = communauteSavoirChercheur;
         this.editCommunauteSavoirChercheurDialog = true;
         this.communauteSavoirChercheurService.editCommunauteSavoirChercheur$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewCommunauteSavoirChercheur(communauteSavoirChercheur:CommunauteSavoirChercheurVo){
        const isPermistted = await this.roleService.isPermitted("CommunauteSavoirChercheur", "view");
        if(isPermistted){
       this.selectedCommunauteSavoirChercheur = communauteSavoirChercheur;
        this.viewCommunauteSavoirChercheurDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateCommunauteSavoirChercheur(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedCommunauteSavoirChercheur = new CommunauteSavoirChercheurVo();
        this.createCommunauteSavoirChercheurDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteCommunauteSavoirChercheur(communauteSavoirChercheur:CommunauteSavoirChercheurVo){
       const isPermistted = await this.roleService.isPermitted("CommunauteSavoirChercheur", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the CommunauteSavoirChercheur ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.communauteSavoirChercheurService.delete(communauteSavoirChercheur).subscribe(status=>{
                          if(status > 0){
                          const position = this.communauteSavoirChercheurs.indexOf(communauteSavoirChercheur);
                          position > -1 ? this.communauteSavoirChercheurs.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'CommunauteSavoirChercheur Deleted',
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

    get communauteSavoirChercheurs(): Array<CommunauteSavoirChercheurVo> {
           return this.communauteSavoirChercheurService.communauteSavoirChercheurs;
       }
    set communauteSavoirChercheurs(value: Array<CommunauteSavoirChercheurVo>) {
        this.communauteSavoirChercheurService.communauteSavoirChercheurs = value;
       }

    get communauteSavoirChercheurSelections(): Array<CommunauteSavoirChercheurVo> {
           return this.communauteSavoirChercheurService.communauteSavoirChercheurSelections;
       }
    set communauteSavoirChercheurSelections(value: Array<CommunauteSavoirChercheurVo>) {
        this.communauteSavoirChercheurService.communauteSavoirChercheurSelections = value;
       }
   
     


    get selectedCommunauteSavoirChercheur():CommunauteSavoirChercheurVo {
           return this.communauteSavoirChercheurService.selectedCommunauteSavoirChercheur;
       }
    set selectedCommunauteSavoirChercheur(value: CommunauteSavoirChercheurVo) {
        this.communauteSavoirChercheurService.selectedCommunauteSavoirChercheur = value;
       }
    
    get createCommunauteSavoirChercheurDialog():boolean {
           return this.communauteSavoirChercheurService.createCommunauteSavoirChercheurDialog;
       }
    set createCommunauteSavoirChercheurDialog(value: boolean) {
        this.communauteSavoirChercheurService.createCommunauteSavoirChercheurDialog= value;
       }
    
    get editCommunauteSavoirChercheurDialog():boolean {
           return this.communauteSavoirChercheurService.editCommunauteSavoirChercheurDialog;
       }
    set editCommunauteSavoirChercheurDialog(value: boolean) {
        this.communauteSavoirChercheurService.editCommunauteSavoirChercheurDialog= value;
       }
    get viewCommunauteSavoirChercheurDialog():boolean {
           return this.communauteSavoirChercheurService.viewCommunauteSavoirChercheurDialog;
       }
    set viewCommunauteSavoirChercheurDialog(value: boolean) {
        this.communauteSavoirChercheurService.viewCommunauteSavoirChercheurDialog = value;
       }
       
     get searchCommunauteSavoirChercheur(): CommunauteSavoirChercheurVo {
        return this.communauteSavoirChercheurService.searchCommunauteSavoirChercheur;
       }
    set searchCommunauteSavoirChercheur(value: CommunauteSavoirChercheurVo) {
        this.communauteSavoirChercheurService.searchCommunauteSavoirChercheur = value;
       }



}