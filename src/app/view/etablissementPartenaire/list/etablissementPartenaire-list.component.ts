import {Component, OnInit} from '@angular/core';
import {EtablissementPartenaireService} from '../../../controller/service/EtablissementPartenaire.service';
import {EtablissementPartenaireVo} from '../../../controller/model/EtablissementPartenaire.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-etablissementPartenaire-list',
  templateUrl: './etablissementPartenaire-list.component.html',
  styleUrls: ['./etablissementPartenaire-list.component.css']
})

export class EtablissementPartenaireListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private etablissementPartenaireService: EtablissementPartenaireService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadEtablissementPartenaires();
    } 
    
    // methods 
    public async loadEtablissementPartenaires(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("EtablissementPartenaire", "list");
        isPermistted ? this.etablissementPartenaireService.findAll().subscribe(etablissementPartenaires => this.etablissementPartenaires = etablissementPartenaires,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.etablissementPartenaireService.findByCriteria(this.searchEtablissementPartenaire).subscribe(etablissementPartenaires=>{
            
            this.etablissementPartenaires = etablissementPartenaires;
           // this.searchEtablissementPartenaire = new EtablissementPartenaireVo();
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
    
    public async editEtablissementPartenaire(etablissementPartenaire:EtablissementPartenaireVo){
        const isPermistted = await this.roleService.isPermitted("EtablissementPartenaire", "edit");
         if(isPermistted){
         this.selectedEtablissementPartenaire = etablissementPartenaire;
         this.editEtablissementPartenaireDialog = true;
         this.etablissementPartenaireService.editEtablissementPartenaire$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewEtablissementPartenaire(etablissementPartenaire:EtablissementPartenaireVo){
        const isPermistted = await this.roleService.isPermitted("EtablissementPartenaire", "view");
        if(isPermistted){
       this.selectedEtablissementPartenaire = etablissementPartenaire;
        this.viewEtablissementPartenaireDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateEtablissementPartenaire(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedEtablissementPartenaire = new EtablissementPartenaireVo();
        this.createEtablissementPartenaireDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteEtablissementPartenaire(etablissementPartenaire:EtablissementPartenaireVo){
       const isPermistted = await this.roleService.isPermitted("EtablissementPartenaire", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the EtablissementPartenaire ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.etablissementPartenaireService.delete(etablissementPartenaire).subscribe(status=>{
                          if(status > 0){
                          const position = this.etablissementPartenaires.indexOf(etablissementPartenaire);
                          position > -1 ? this.etablissementPartenaires.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'EtablissementPartenaire Deleted',
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

    get etablissementPartenaires(): Array<EtablissementPartenaireVo> {
           return this.etablissementPartenaireService.etablissementPartenaires;
       }
    set etablissementPartenaires(value: Array<EtablissementPartenaireVo>) {
        this.etablissementPartenaireService.etablissementPartenaires = value;
       }

    get etablissementPartenaireSelections(): Array<EtablissementPartenaireVo> {
           return this.etablissementPartenaireService.etablissementPartenaireSelections;
       }
    set etablissementPartenaireSelections(value: Array<EtablissementPartenaireVo>) {
        this.etablissementPartenaireService.etablissementPartenaireSelections = value;
       }
   
     


    get selectedEtablissementPartenaire():EtablissementPartenaireVo {
           return this.etablissementPartenaireService.selectedEtablissementPartenaire;
       }
    set selectedEtablissementPartenaire(value: EtablissementPartenaireVo) {
        this.etablissementPartenaireService.selectedEtablissementPartenaire = value;
       }
    
    get createEtablissementPartenaireDialog():boolean {
           return this.etablissementPartenaireService.createEtablissementPartenaireDialog;
       }
    set createEtablissementPartenaireDialog(value: boolean) {
        this.etablissementPartenaireService.createEtablissementPartenaireDialog= value;
       }
    
    get editEtablissementPartenaireDialog():boolean {
           return this.etablissementPartenaireService.editEtablissementPartenaireDialog;
       }
    set editEtablissementPartenaireDialog(value: boolean) {
        this.etablissementPartenaireService.editEtablissementPartenaireDialog= value;
       }
    get viewEtablissementPartenaireDialog():boolean {
           return this.etablissementPartenaireService.viewEtablissementPartenaireDialog;
       }
    set viewEtablissementPartenaireDialog(value: boolean) {
        this.etablissementPartenaireService.viewEtablissementPartenaireDialog = value;
       }
       
     get searchEtablissementPartenaire(): EtablissementPartenaireVo {
        return this.etablissementPartenaireService.searchEtablissementPartenaire;
       }
    set searchEtablissementPartenaire(value: EtablissementPartenaireVo) {
        this.etablissementPartenaireService.searchEtablissementPartenaire = value;
       }



}