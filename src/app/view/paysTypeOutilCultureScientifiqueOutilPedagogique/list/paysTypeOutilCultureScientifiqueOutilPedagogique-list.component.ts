import {Component, OnInit} from '@angular/core';
import {PaysTypeOutilCultureScientifiqueOutilPedagogiqueService} from '../../../controller/service/PaysTypeOutilCultureScientifiqueOutilPedagogique.service';
import {PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/PaysTypeOutilCultureScientifiqueOutilPedagogique.model';
import {CultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/CultureScientifiqueOutilPedagogique.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-paysTypeOutilCultureScientifiqueOutilPedagogique-list',
  templateUrl: './paysTypeOutilCultureScientifiqueOutilPedagogique-list.component.html',
  styleUrls: ['./paysTypeOutilCultureScientifiqueOutilPedagogique-list.component.css']
})

export class PaysTypeOutilCultureScientifiqueOutilPedagogiqueListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private paysTypeOutilCultureScientifiqueOutilPedagogiqueService: PaysTypeOutilCultureScientifiqueOutilPedagogiqueService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadPaysTypeOutilCultureScientifiqueOutilPedagogiques();
    } 
    
    // methods 
    public async loadPaysTypeOutilCultureScientifiqueOutilPedagogiques(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("PaysTypeOutilCultureScientifiqueOutilPedagogique", "list");
        isPermistted ? this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.findAll().subscribe(paysTypeOutilCultureScientifiqueOutilPedagogiques => this.paysTypeOutilCultureScientifiqueOutilPedagogiques = paysTypeOutilCultureScientifiqueOutilPedagogiques,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.findByCriteria(this.searchPaysTypeOutilCultureScientifiqueOutilPedagogique).subscribe(paysTypeOutilCultureScientifiqueOutilPedagogiques=>{
            
            this.paysTypeOutilCultureScientifiqueOutilPedagogiques = paysTypeOutilCultureScientifiqueOutilPedagogiques;
           // this.searchPaysTypeOutilCultureScientifiqueOutilPedagogique = new PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'cultureScientifiqueOutilPedagogique', header: 'cultureScientifiqueOutilPedagogique'},
                {field: 'pays', header: 'pays'},
        ];
    }
    
    public async editPaysTypeOutilCultureScientifiqueOutilPedagogique(paysTypeOutilCultureScientifiqueOutilPedagogique:PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo){
        const isPermistted = await this.roleService.isPermitted("PaysTypeOutilCultureScientifiqueOutilPedagogique", "edit");
         if(isPermistted){
         this.selectedPaysTypeOutilCultureScientifiqueOutilPedagogique = paysTypeOutilCultureScientifiqueOutilPedagogique;
         this.editPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog = true;
         this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.editPaysTypeOutilCultureScientifiqueOutilPedagogique$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewPaysTypeOutilCultureScientifiqueOutilPedagogique(paysTypeOutilCultureScientifiqueOutilPedagogique:PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo){
        const isPermistted = await this.roleService.isPermitted("PaysTypeOutilCultureScientifiqueOutilPedagogique", "view");
        if(isPermistted){
       this.selectedPaysTypeOutilCultureScientifiqueOutilPedagogique = paysTypeOutilCultureScientifiqueOutilPedagogique;
        this.viewPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreatePaysTypeOutilCultureScientifiqueOutilPedagogique(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedPaysTypeOutilCultureScientifiqueOutilPedagogique = new PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo();
        this.createPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deletePaysTypeOutilCultureScientifiqueOutilPedagogique(paysTypeOutilCultureScientifiqueOutilPedagogique:PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo){
       const isPermistted = await this.roleService.isPermitted("PaysTypeOutilCultureScientifiqueOutilPedagogique", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the PaysTypeOutilCultureScientifiqueOutilPedagogique ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.delete(paysTypeOutilCultureScientifiqueOutilPedagogique).subscribe(status=>{
                          if(status > 0){
                          const position = this.paysTypeOutilCultureScientifiqueOutilPedagogiques.indexOf(paysTypeOutilCultureScientifiqueOutilPedagogique);
                          position > -1 ? this.paysTypeOutilCultureScientifiqueOutilPedagogiques.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'PaysTypeOutilCultureScientifiqueOutilPedagogique Deleted',
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

    get paysTypeOutilCultureScientifiqueOutilPedagogiques(): Array<PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo> {
           return this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.paysTypeOutilCultureScientifiqueOutilPedagogiques;
       }
    set paysTypeOutilCultureScientifiqueOutilPedagogiques(value: Array<PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo>) {
        this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.paysTypeOutilCultureScientifiqueOutilPedagogiques = value;
       }

    get paysTypeOutilCultureScientifiqueOutilPedagogiqueSelections(): Array<PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo> {
           return this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.paysTypeOutilCultureScientifiqueOutilPedagogiqueSelections;
       }
    set paysTypeOutilCultureScientifiqueOutilPedagogiqueSelections(value: Array<PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo>) {
        this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.paysTypeOutilCultureScientifiqueOutilPedagogiqueSelections = value;
       }
   
     


    get selectedPaysTypeOutilCultureScientifiqueOutilPedagogique():PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo {
           return this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.selectedPaysTypeOutilCultureScientifiqueOutilPedagogique;
       }
    set selectedPaysTypeOutilCultureScientifiqueOutilPedagogique(value: PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo) {
        this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.selectedPaysTypeOutilCultureScientifiqueOutilPedagogique = value;
       }
    
    get createPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog():boolean {
           return this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.createPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog;
       }
    set createPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.createPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog= value;
       }
    
    get editPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog():boolean {
           return this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.editPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog;
       }
    set editPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.editPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog= value;
       }
    get viewPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog():boolean {
           return this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.viewPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog;
       }
    set viewPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.viewPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog = value;
       }
       
     get searchPaysTypeOutilCultureScientifiqueOutilPedagogique(): PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo {
        return this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.searchPaysTypeOutilCultureScientifiqueOutilPedagogique;
       }
    set searchPaysTypeOutilCultureScientifiqueOutilPedagogique(value: PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo) {
        this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.searchPaysTypeOutilCultureScientifiqueOutilPedagogique = value;
       }



}