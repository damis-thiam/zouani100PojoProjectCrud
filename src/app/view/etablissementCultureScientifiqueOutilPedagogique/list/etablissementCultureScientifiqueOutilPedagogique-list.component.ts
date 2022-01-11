import {Component, OnInit} from '@angular/core';
import {EtablissementCultureScientifiqueOutilPedagogiqueService} from '../../../controller/service/EtablissementCultureScientifiqueOutilPedagogique.service';
import {EtablissementCultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/EtablissementCultureScientifiqueOutilPedagogique.model';
import {CultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/CultureScientifiqueOutilPedagogique.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-etablissementCultureScientifiqueOutilPedagogique-list',
  templateUrl: './etablissementCultureScientifiqueOutilPedagogique-list.component.html',
  styleUrls: ['./etablissementCultureScientifiqueOutilPedagogique-list.component.css']
})

export class EtablissementCultureScientifiqueOutilPedagogiqueListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private etablissementCultureScientifiqueOutilPedagogiqueService: EtablissementCultureScientifiqueOutilPedagogiqueService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadEtablissementCultureScientifiqueOutilPedagogiques();
    } 
    
    // methods 
    public async loadEtablissementCultureScientifiqueOutilPedagogiques(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("EtablissementCultureScientifiqueOutilPedagogique", "list");
        isPermistted ? this.etablissementCultureScientifiqueOutilPedagogiqueService.findAll().subscribe(etablissementCultureScientifiqueOutilPedagogiques => this.etablissementCultureScientifiqueOutilPedagogiques = etablissementCultureScientifiqueOutilPedagogiques,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.etablissementCultureScientifiqueOutilPedagogiqueService.findByCriteria(this.searchEtablissementCultureScientifiqueOutilPedagogique).subscribe(etablissementCultureScientifiqueOutilPedagogiques=>{
            
            this.etablissementCultureScientifiqueOutilPedagogiques = etablissementCultureScientifiqueOutilPedagogiques;
           // this.searchEtablissementCultureScientifiqueOutilPedagogique = new EtablissementCultureScientifiqueOutilPedagogiqueVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'cultureScientifiqueOutilPedagogique', header: 'cultureScientifiqueOutilPedagogique'},
                {field: 'etablissement', header: 'etablissement'},
        ];
    }
    
    public async editEtablissementCultureScientifiqueOutilPedagogique(etablissementCultureScientifiqueOutilPedagogique:EtablissementCultureScientifiqueOutilPedagogiqueVo){
        const isPermistted = await this.roleService.isPermitted("EtablissementCultureScientifiqueOutilPedagogique", "edit");
         if(isPermistted){
         this.selectedEtablissementCultureScientifiqueOutilPedagogique = etablissementCultureScientifiqueOutilPedagogique;
         this.editEtablissementCultureScientifiqueOutilPedagogiqueDialog = true;
         this.etablissementCultureScientifiqueOutilPedagogiqueService.editEtablissementCultureScientifiqueOutilPedagogique$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewEtablissementCultureScientifiqueOutilPedagogique(etablissementCultureScientifiqueOutilPedagogique:EtablissementCultureScientifiqueOutilPedagogiqueVo){
        const isPermistted = await this.roleService.isPermitted("EtablissementCultureScientifiqueOutilPedagogique", "view");
        if(isPermistted){
       this.selectedEtablissementCultureScientifiqueOutilPedagogique = etablissementCultureScientifiqueOutilPedagogique;
        this.viewEtablissementCultureScientifiqueOutilPedagogiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateEtablissementCultureScientifiqueOutilPedagogique(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedEtablissementCultureScientifiqueOutilPedagogique = new EtablissementCultureScientifiqueOutilPedagogiqueVo();
        this.createEtablissementCultureScientifiqueOutilPedagogiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteEtablissementCultureScientifiqueOutilPedagogique(etablissementCultureScientifiqueOutilPedagogique:EtablissementCultureScientifiqueOutilPedagogiqueVo){
       const isPermistted = await this.roleService.isPermitted("EtablissementCultureScientifiqueOutilPedagogique", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the EtablissementCultureScientifiqueOutilPedagogique ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.etablissementCultureScientifiqueOutilPedagogiqueService.delete(etablissementCultureScientifiqueOutilPedagogique).subscribe(status=>{
                          if(status > 0){
                          const position = this.etablissementCultureScientifiqueOutilPedagogiques.indexOf(etablissementCultureScientifiqueOutilPedagogique);
                          position > -1 ? this.etablissementCultureScientifiqueOutilPedagogiques.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'EtablissementCultureScientifiqueOutilPedagogique Deleted',
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

    get etablissementCultureScientifiqueOutilPedagogiques(): Array<EtablissementCultureScientifiqueOutilPedagogiqueVo> {
           return this.etablissementCultureScientifiqueOutilPedagogiqueService.etablissementCultureScientifiqueOutilPedagogiques;
       }
    set etablissementCultureScientifiqueOutilPedagogiques(value: Array<EtablissementCultureScientifiqueOutilPedagogiqueVo>) {
        this.etablissementCultureScientifiqueOutilPedagogiqueService.etablissementCultureScientifiqueOutilPedagogiques = value;
       }

    get etablissementCultureScientifiqueOutilPedagogiqueSelections(): Array<EtablissementCultureScientifiqueOutilPedagogiqueVo> {
           return this.etablissementCultureScientifiqueOutilPedagogiqueService.etablissementCultureScientifiqueOutilPedagogiqueSelections;
       }
    set etablissementCultureScientifiqueOutilPedagogiqueSelections(value: Array<EtablissementCultureScientifiqueOutilPedagogiqueVo>) {
        this.etablissementCultureScientifiqueOutilPedagogiqueService.etablissementCultureScientifiqueOutilPedagogiqueSelections = value;
       }
   
     


    get selectedEtablissementCultureScientifiqueOutilPedagogique():EtablissementCultureScientifiqueOutilPedagogiqueVo {
           return this.etablissementCultureScientifiqueOutilPedagogiqueService.selectedEtablissementCultureScientifiqueOutilPedagogique;
       }
    set selectedEtablissementCultureScientifiqueOutilPedagogique(value: EtablissementCultureScientifiqueOutilPedagogiqueVo) {
        this.etablissementCultureScientifiqueOutilPedagogiqueService.selectedEtablissementCultureScientifiqueOutilPedagogique = value;
       }
    
    get createEtablissementCultureScientifiqueOutilPedagogiqueDialog():boolean {
           return this.etablissementCultureScientifiqueOutilPedagogiqueService.createEtablissementCultureScientifiqueOutilPedagogiqueDialog;
       }
    set createEtablissementCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this.etablissementCultureScientifiqueOutilPedagogiqueService.createEtablissementCultureScientifiqueOutilPedagogiqueDialog= value;
       }
    
    get editEtablissementCultureScientifiqueOutilPedagogiqueDialog():boolean {
           return this.etablissementCultureScientifiqueOutilPedagogiqueService.editEtablissementCultureScientifiqueOutilPedagogiqueDialog;
       }
    set editEtablissementCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this.etablissementCultureScientifiqueOutilPedagogiqueService.editEtablissementCultureScientifiqueOutilPedagogiqueDialog= value;
       }
    get viewEtablissementCultureScientifiqueOutilPedagogiqueDialog():boolean {
           return this.etablissementCultureScientifiqueOutilPedagogiqueService.viewEtablissementCultureScientifiqueOutilPedagogiqueDialog;
       }
    set viewEtablissementCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this.etablissementCultureScientifiqueOutilPedagogiqueService.viewEtablissementCultureScientifiqueOutilPedagogiqueDialog = value;
       }
       
     get searchEtablissementCultureScientifiqueOutilPedagogique(): EtablissementCultureScientifiqueOutilPedagogiqueVo {
        return this.etablissementCultureScientifiqueOutilPedagogiqueService.searchEtablissementCultureScientifiqueOutilPedagogique;
       }
    set searchEtablissementCultureScientifiqueOutilPedagogique(value: EtablissementCultureScientifiqueOutilPedagogiqueVo) {
        this.etablissementCultureScientifiqueOutilPedagogiqueService.searchEtablissementCultureScientifiqueOutilPedagogique = value;
       }



}