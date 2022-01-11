import {Component, OnInit} from '@angular/core';
import {CultureScientifiqueOutilPedagogiqueService} from '../../../controller/service/CultureScientifiqueOutilPedagogique.service';
import {CultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/CultureScientifiqueOutilPedagogique.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-cultureScientifiqueOutilPedagogique-list',
  templateUrl: './cultureScientifiqueOutilPedagogique-list.component.html',
  styleUrls: ['./cultureScientifiqueOutilPedagogique-list.component.css']
})

export class CultureScientifiqueOutilPedagogiqueListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private cultureScientifiqueOutilPedagogiqueService: CultureScientifiqueOutilPedagogiqueService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadCultureScientifiqueOutilPedagogiques();
    } 
    
    // methods 
    public async loadCultureScientifiqueOutilPedagogiques(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("CultureScientifiqueOutilPedagogique", "list");
        isPermistted ? this.cultureScientifiqueOutilPedagogiqueService.findAll().subscribe(cultureScientifiqueOutilPedagogiques => this.cultureScientifiqueOutilPedagogiques = cultureScientifiqueOutilPedagogiques,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.cultureScientifiqueOutilPedagogiqueService.findByCriteria(this.searchCultureScientifiqueOutilPedagogique).subscribe(cultureScientifiqueOutilPedagogiques=>{
            
            this.cultureScientifiqueOutilPedagogiques = cultureScientifiqueOutilPedagogiques;
           // this.searchCultureScientifiqueOutilPedagogique = new CultureScientifiqueOutilPedagogiqueVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'publicCibleCultureScientifiqueOutilPedagogiques', header: 'publicCibleCultureScientifiqueOutilPedagogiques'},
                {field: 'role', header: 'role'},
                {field: 'typeOutilCultureScientifiqueOutilPedagogiques', header: 'typeOutilCultureScientifiqueOutilPedagogiques'},
                {field: 'nomOutil', header: 'nomOutil'},
                {field: 'sortieAnnee', header: 'sortieAnnee'},
                {field: 'sortieMois', header: 'sortieMois'},
                {field: 'paysTypeOutilCultureScientifiqueOutilPedagogiques', header: 'paysTypeOutilCultureScientifiqueOutilPedagogiques'},
                {field: 'partenaitres', header: 'partenaitres'},
                {field: 'lienWeb', header: 'lienWeb'},
        ];
    }
    
    public async editCultureScientifiqueOutilPedagogique(cultureScientifiqueOutilPedagogique:CultureScientifiqueOutilPedagogiqueVo){
        const isPermistted = await this.roleService.isPermitted("CultureScientifiqueOutilPedagogique", "edit");
         if(isPermistted){
         this.selectedCultureScientifiqueOutilPedagogique = cultureScientifiqueOutilPedagogique;
         this.editCultureScientifiqueOutilPedagogiqueDialog = true;
         this.cultureScientifiqueOutilPedagogiqueService.editCultureScientifiqueOutilPedagogique$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewCultureScientifiqueOutilPedagogique(cultureScientifiqueOutilPedagogique:CultureScientifiqueOutilPedagogiqueVo){
        const isPermistted = await this.roleService.isPermitted("CultureScientifiqueOutilPedagogique", "view");
        if(isPermistted){
       this.selectedCultureScientifiqueOutilPedagogique = cultureScientifiqueOutilPedagogique;
        this.viewCultureScientifiqueOutilPedagogiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateCultureScientifiqueOutilPedagogique(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedCultureScientifiqueOutilPedagogique = new CultureScientifiqueOutilPedagogiqueVo();
        this.createCultureScientifiqueOutilPedagogiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteCultureScientifiqueOutilPedagogique(cultureScientifiqueOutilPedagogique:CultureScientifiqueOutilPedagogiqueVo){
       const isPermistted = await this.roleService.isPermitted("CultureScientifiqueOutilPedagogique", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the CultureScientifiqueOutilPedagogique ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.cultureScientifiqueOutilPedagogiqueService.delete(cultureScientifiqueOutilPedagogique).subscribe(status=>{
                          if(status > 0){
                          const position = this.cultureScientifiqueOutilPedagogiques.indexOf(cultureScientifiqueOutilPedagogique);
                          position > -1 ? this.cultureScientifiqueOutilPedagogiques.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'CultureScientifiqueOutilPedagogique Deleted',
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

    get cultureScientifiqueOutilPedagogiques(): Array<CultureScientifiqueOutilPedagogiqueVo> {
           return this.cultureScientifiqueOutilPedagogiqueService.cultureScientifiqueOutilPedagogiques;
       }
    set cultureScientifiqueOutilPedagogiques(value: Array<CultureScientifiqueOutilPedagogiqueVo>) {
        this.cultureScientifiqueOutilPedagogiqueService.cultureScientifiqueOutilPedagogiques = value;
       }

    get cultureScientifiqueOutilPedagogiqueSelections(): Array<CultureScientifiqueOutilPedagogiqueVo> {
           return this.cultureScientifiqueOutilPedagogiqueService.cultureScientifiqueOutilPedagogiqueSelections;
       }
    set cultureScientifiqueOutilPedagogiqueSelections(value: Array<CultureScientifiqueOutilPedagogiqueVo>) {
        this.cultureScientifiqueOutilPedagogiqueService.cultureScientifiqueOutilPedagogiqueSelections = value;
       }
   
     


    get selectedCultureScientifiqueOutilPedagogique():CultureScientifiqueOutilPedagogiqueVo {
           return this.cultureScientifiqueOutilPedagogiqueService.selectedCultureScientifiqueOutilPedagogique;
       }
    set selectedCultureScientifiqueOutilPedagogique(value: CultureScientifiqueOutilPedagogiqueVo) {
        this.cultureScientifiqueOutilPedagogiqueService.selectedCultureScientifiqueOutilPedagogique = value;
       }
    
    get createCultureScientifiqueOutilPedagogiqueDialog():boolean {
           return this.cultureScientifiqueOutilPedagogiqueService.createCultureScientifiqueOutilPedagogiqueDialog;
       }
    set createCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this.cultureScientifiqueOutilPedagogiqueService.createCultureScientifiqueOutilPedagogiqueDialog= value;
       }
    
    get editCultureScientifiqueOutilPedagogiqueDialog():boolean {
           return this.cultureScientifiqueOutilPedagogiqueService.editCultureScientifiqueOutilPedagogiqueDialog;
       }
    set editCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this.cultureScientifiqueOutilPedagogiqueService.editCultureScientifiqueOutilPedagogiqueDialog= value;
       }
    get viewCultureScientifiqueOutilPedagogiqueDialog():boolean {
           return this.cultureScientifiqueOutilPedagogiqueService.viewCultureScientifiqueOutilPedagogiqueDialog;
       }
    set viewCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this.cultureScientifiqueOutilPedagogiqueService.viewCultureScientifiqueOutilPedagogiqueDialog = value;
       }
       
     get searchCultureScientifiqueOutilPedagogique(): CultureScientifiqueOutilPedagogiqueVo {
        return this.cultureScientifiqueOutilPedagogiqueService.searchCultureScientifiqueOutilPedagogique;
       }
    set searchCultureScientifiqueOutilPedagogique(value: CultureScientifiqueOutilPedagogiqueVo) {
        this.cultureScientifiqueOutilPedagogiqueService.searchCultureScientifiqueOutilPedagogique = value;
       }



}