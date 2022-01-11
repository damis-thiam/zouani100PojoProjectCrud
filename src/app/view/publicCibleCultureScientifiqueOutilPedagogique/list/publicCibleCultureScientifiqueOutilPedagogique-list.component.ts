import {Component, OnInit} from '@angular/core';
import {PublicCibleCultureScientifiqueOutilPedagogiqueService} from '../../../controller/service/PublicCibleCultureScientifiqueOutilPedagogique.service';
import {PublicCibleCultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/PublicCibleCultureScientifiqueOutilPedagogique.model';
import {PublicCibleVo} from '../../../controller/model/PublicCible.model';
import {CultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/CultureScientifiqueOutilPedagogique.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-publicCibleCultureScientifiqueOutilPedagogique-list',
  templateUrl: './publicCibleCultureScientifiqueOutilPedagogique-list.component.html',
  styleUrls: ['./publicCibleCultureScientifiqueOutilPedagogique-list.component.css']
})

export class PublicCibleCultureScientifiqueOutilPedagogiqueListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private publicCibleCultureScientifiqueOutilPedagogiqueService: PublicCibleCultureScientifiqueOutilPedagogiqueService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadPublicCibleCultureScientifiqueOutilPedagogiques();
    } 
    
    // methods 
    public async loadPublicCibleCultureScientifiqueOutilPedagogiques(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("PublicCibleCultureScientifiqueOutilPedagogique", "list");
        isPermistted ? this.publicCibleCultureScientifiqueOutilPedagogiqueService.findAll().subscribe(publicCibleCultureScientifiqueOutilPedagogiques => this.publicCibleCultureScientifiqueOutilPedagogiques = publicCibleCultureScientifiqueOutilPedagogiques,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.publicCibleCultureScientifiqueOutilPedagogiqueService.findByCriteria(this.searchPublicCibleCultureScientifiqueOutilPedagogique).subscribe(publicCibleCultureScientifiqueOutilPedagogiques=>{
            
            this.publicCibleCultureScientifiqueOutilPedagogiques = publicCibleCultureScientifiqueOutilPedagogiques;
           // this.searchPublicCibleCultureScientifiqueOutilPedagogique = new PublicCibleCultureScientifiqueOutilPedagogiqueVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'publicCible', header: 'publicCible'},
                {field: 'cultureScientifiqueOutilPedagogique', header: 'cultureScientifiqueOutilPedagogique'},
                {field: 'pays', header: 'pays'},
        ];
    }
    
    public async editPublicCibleCultureScientifiqueOutilPedagogique(publicCibleCultureScientifiqueOutilPedagogique:PublicCibleCultureScientifiqueOutilPedagogiqueVo){
        const isPermistted = await this.roleService.isPermitted("PublicCibleCultureScientifiqueOutilPedagogique", "edit");
         if(isPermistted){
         this.selectedPublicCibleCultureScientifiqueOutilPedagogique = publicCibleCultureScientifiqueOutilPedagogique;
         this.editPublicCibleCultureScientifiqueOutilPedagogiqueDialog = true;
         this.publicCibleCultureScientifiqueOutilPedagogiqueService.editPublicCibleCultureScientifiqueOutilPedagogique$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewPublicCibleCultureScientifiqueOutilPedagogique(publicCibleCultureScientifiqueOutilPedagogique:PublicCibleCultureScientifiqueOutilPedagogiqueVo){
        const isPermistted = await this.roleService.isPermitted("PublicCibleCultureScientifiqueOutilPedagogique", "view");
        if(isPermistted){
       this.selectedPublicCibleCultureScientifiqueOutilPedagogique = publicCibleCultureScientifiqueOutilPedagogique;
        this.viewPublicCibleCultureScientifiqueOutilPedagogiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreatePublicCibleCultureScientifiqueOutilPedagogique(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedPublicCibleCultureScientifiqueOutilPedagogique = new PublicCibleCultureScientifiqueOutilPedagogiqueVo();
        this.createPublicCibleCultureScientifiqueOutilPedagogiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deletePublicCibleCultureScientifiqueOutilPedagogique(publicCibleCultureScientifiqueOutilPedagogique:PublicCibleCultureScientifiqueOutilPedagogiqueVo){
       const isPermistted = await this.roleService.isPermitted("PublicCibleCultureScientifiqueOutilPedagogique", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the PublicCibleCultureScientifiqueOutilPedagogique ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.publicCibleCultureScientifiqueOutilPedagogiqueService.delete(publicCibleCultureScientifiqueOutilPedagogique).subscribe(status=>{
                          if(status > 0){
                          const position = this.publicCibleCultureScientifiqueOutilPedagogiques.indexOf(publicCibleCultureScientifiqueOutilPedagogique);
                          position > -1 ? this.publicCibleCultureScientifiqueOutilPedagogiques.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'PublicCibleCultureScientifiqueOutilPedagogique Deleted',
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

    get publicCibleCultureScientifiqueOutilPedagogiques(): Array<PublicCibleCultureScientifiqueOutilPedagogiqueVo> {
           return this.publicCibleCultureScientifiqueOutilPedagogiqueService.publicCibleCultureScientifiqueOutilPedagogiques;
       }
    set publicCibleCultureScientifiqueOutilPedagogiques(value: Array<PublicCibleCultureScientifiqueOutilPedagogiqueVo>) {
        this.publicCibleCultureScientifiqueOutilPedagogiqueService.publicCibleCultureScientifiqueOutilPedagogiques = value;
       }

    get publicCibleCultureScientifiqueOutilPedagogiqueSelections(): Array<PublicCibleCultureScientifiqueOutilPedagogiqueVo> {
           return this.publicCibleCultureScientifiqueOutilPedagogiqueService.publicCibleCultureScientifiqueOutilPedagogiqueSelections;
       }
    set publicCibleCultureScientifiqueOutilPedagogiqueSelections(value: Array<PublicCibleCultureScientifiqueOutilPedagogiqueVo>) {
        this.publicCibleCultureScientifiqueOutilPedagogiqueService.publicCibleCultureScientifiqueOutilPedagogiqueSelections = value;
       }
   
     


    get selectedPublicCibleCultureScientifiqueOutilPedagogique():PublicCibleCultureScientifiqueOutilPedagogiqueVo {
           return this.publicCibleCultureScientifiqueOutilPedagogiqueService.selectedPublicCibleCultureScientifiqueOutilPedagogique;
       }
    set selectedPublicCibleCultureScientifiqueOutilPedagogique(value: PublicCibleCultureScientifiqueOutilPedagogiqueVo) {
        this.publicCibleCultureScientifiqueOutilPedagogiqueService.selectedPublicCibleCultureScientifiqueOutilPedagogique = value;
       }
    
    get createPublicCibleCultureScientifiqueOutilPedagogiqueDialog():boolean {
           return this.publicCibleCultureScientifiqueOutilPedagogiqueService.createPublicCibleCultureScientifiqueOutilPedagogiqueDialog;
       }
    set createPublicCibleCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this.publicCibleCultureScientifiqueOutilPedagogiqueService.createPublicCibleCultureScientifiqueOutilPedagogiqueDialog= value;
       }
    
    get editPublicCibleCultureScientifiqueOutilPedagogiqueDialog():boolean {
           return this.publicCibleCultureScientifiqueOutilPedagogiqueService.editPublicCibleCultureScientifiqueOutilPedagogiqueDialog;
       }
    set editPublicCibleCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this.publicCibleCultureScientifiqueOutilPedagogiqueService.editPublicCibleCultureScientifiqueOutilPedagogiqueDialog= value;
       }
    get viewPublicCibleCultureScientifiqueOutilPedagogiqueDialog():boolean {
           return this.publicCibleCultureScientifiqueOutilPedagogiqueService.viewPublicCibleCultureScientifiqueOutilPedagogiqueDialog;
       }
    set viewPublicCibleCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this.publicCibleCultureScientifiqueOutilPedagogiqueService.viewPublicCibleCultureScientifiqueOutilPedagogiqueDialog = value;
       }
       
     get searchPublicCibleCultureScientifiqueOutilPedagogique(): PublicCibleCultureScientifiqueOutilPedagogiqueVo {
        return this.publicCibleCultureScientifiqueOutilPedagogiqueService.searchPublicCibleCultureScientifiqueOutilPedagogique;
       }
    set searchPublicCibleCultureScientifiqueOutilPedagogique(value: PublicCibleCultureScientifiqueOutilPedagogiqueVo) {
        this.publicCibleCultureScientifiqueOutilPedagogiqueService.searchPublicCibleCultureScientifiqueOutilPedagogique = value;
       }



}