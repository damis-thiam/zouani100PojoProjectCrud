import {Component, OnInit} from '@angular/core';
import {IdentifiantRechercheService} from '../../../controller/service/IdentifiantRecherche.service';
import {IdentifiantRechercheVo} from '../../../controller/model/IdentifiantRecherche.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-identifiantRecherche-list',
  templateUrl: './identifiantRecherche-list.component.html',
  styleUrls: ['./identifiantRecherche-list.component.css']
})

export class IdentifiantRechercheListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private identifiantRechercheService: IdentifiantRechercheService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadIdentifiantRecherches();
    } 
    
    // methods 
    public async loadIdentifiantRecherches(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("IdentifiantRecherche", "list");
        isPermistted ? this.identifiantRechercheService.findAll().subscribe(identifiantRecherches => this.identifiantRecherches = identifiantRecherches,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.identifiantRechercheService.findByCriteria(this.searchIdentifiantRecherche).subscribe(identifiantRecherches=>{
            
            this.identifiantRecherches = identifiantRecherches;
           // this.searchIdentifiantRecherche = new IdentifiantRechercheVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
                {field: 'description', header: 'description'},
        ];
    }
    
    public async editIdentifiantRecherche(identifiantRecherche:IdentifiantRechercheVo){
        const isPermistted = await this.roleService.isPermitted("IdentifiantRecherche", "edit");
         if(isPermistted){
         this.selectedIdentifiantRecherche = identifiantRecherche;
         this.editIdentifiantRechercheDialog = true;
         this.identifiantRechercheService.editIdentifiantRecherche$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewIdentifiantRecherche(identifiantRecherche:IdentifiantRechercheVo){
        const isPermistted = await this.roleService.isPermitted("IdentifiantRecherche", "view");
        if(isPermistted){
       this.selectedIdentifiantRecherche = identifiantRecherche;
        this.viewIdentifiantRechercheDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateIdentifiantRecherche(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedIdentifiantRecherche = new IdentifiantRechercheVo();
        this.createIdentifiantRechercheDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteIdentifiantRecherche(identifiantRecherche:IdentifiantRechercheVo){
       const isPermistted = await this.roleService.isPermitted("IdentifiantRecherche", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the IdentifiantRecherche ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.identifiantRechercheService.delete(identifiantRecherche).subscribe(status=>{
                          if(status > 0){
                          const position = this.identifiantRecherches.indexOf(identifiantRecherche);
                          position > -1 ? this.identifiantRecherches.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'IdentifiantRecherche Deleted',
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

    get identifiantRecherches(): Array<IdentifiantRechercheVo> {
           return this.identifiantRechercheService.identifiantRecherches;
       }
    set identifiantRecherches(value: Array<IdentifiantRechercheVo>) {
        this.identifiantRechercheService.identifiantRecherches = value;
       }

    get identifiantRechercheSelections(): Array<IdentifiantRechercheVo> {
           return this.identifiantRechercheService.identifiantRechercheSelections;
       }
    set identifiantRechercheSelections(value: Array<IdentifiantRechercheVo>) {
        this.identifiantRechercheService.identifiantRechercheSelections = value;
       }
   
     


    get selectedIdentifiantRecherche():IdentifiantRechercheVo {
           return this.identifiantRechercheService.selectedIdentifiantRecherche;
       }
    set selectedIdentifiantRecherche(value: IdentifiantRechercheVo) {
        this.identifiantRechercheService.selectedIdentifiantRecherche = value;
       }
    
    get createIdentifiantRechercheDialog():boolean {
           return this.identifiantRechercheService.createIdentifiantRechercheDialog;
       }
    set createIdentifiantRechercheDialog(value: boolean) {
        this.identifiantRechercheService.createIdentifiantRechercheDialog= value;
       }
    
    get editIdentifiantRechercheDialog():boolean {
           return this.identifiantRechercheService.editIdentifiantRechercheDialog;
       }
    set editIdentifiantRechercheDialog(value: boolean) {
        this.identifiantRechercheService.editIdentifiantRechercheDialog= value;
       }
    get viewIdentifiantRechercheDialog():boolean {
           return this.identifiantRechercheService.viewIdentifiantRechercheDialog;
       }
    set viewIdentifiantRechercheDialog(value: boolean) {
        this.identifiantRechercheService.viewIdentifiantRechercheDialog = value;
       }
       
     get searchIdentifiantRecherche(): IdentifiantRechercheVo {
        return this.identifiantRechercheService.searchIdentifiantRecherche;
       }
    set searchIdentifiantRecherche(value: IdentifiantRechercheVo) {
        this.identifiantRechercheService.searchIdentifiantRecherche = value;
       }



}