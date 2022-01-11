import {Component, OnInit} from '@angular/core';
import {DomaineScientifiqueService} from '../../../controller/service/DomaineScientifique.service';
import {DomaineScientifiqueVo} from '../../../controller/model/DomaineScientifique.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-domaineScientifique-list',
  templateUrl: './domaineScientifique-list.component.html',
  styleUrls: ['./domaineScientifique-list.component.css']
})

export class DomaineScientifiqueListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private domaineScientifiqueService: DomaineScientifiqueService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadDomaineScientifiques();
    } 
    
    // methods 
    public async loadDomaineScientifiques(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("DomaineScientifique", "list");
        isPermistted ? this.domaineScientifiqueService.findAll().subscribe(domaineScientifiques => this.domaineScientifiques = domaineScientifiques,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.domaineScientifiqueService.findByCriteria(this.searchDomaineScientifique).subscribe(domaineScientifiques=>{
            
            this.domaineScientifiques = domaineScientifiques;
           // this.searchDomaineScientifique = new DomaineScientifiqueVo();
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
    
    public async editDomaineScientifique(domaineScientifique:DomaineScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted("DomaineScientifique", "edit");
         if(isPermistted){
         this.selectedDomaineScientifique = domaineScientifique;
         this.editDomaineScientifiqueDialog = true;
         this.domaineScientifiqueService.editDomaineScientifique$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewDomaineScientifique(domaineScientifique:DomaineScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted("DomaineScientifique", "view");
        if(isPermistted){
       this.selectedDomaineScientifique = domaineScientifique;
        this.viewDomaineScientifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateDomaineScientifique(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedDomaineScientifique = new DomaineScientifiqueVo();
        this.createDomaineScientifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteDomaineScientifique(domaineScientifique:DomaineScientifiqueVo){
       const isPermistted = await this.roleService.isPermitted("DomaineScientifique", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the DomaineScientifique ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.domaineScientifiqueService.delete(domaineScientifique).subscribe(status=>{
                          if(status > 0){
                          const position = this.domaineScientifiques.indexOf(domaineScientifique);
                          position > -1 ? this.domaineScientifiques.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'DomaineScientifique Deleted',
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

    get domaineScientifiques(): Array<DomaineScientifiqueVo> {
           return this.domaineScientifiqueService.domaineScientifiques;
       }
    set domaineScientifiques(value: Array<DomaineScientifiqueVo>) {
        this.domaineScientifiqueService.domaineScientifiques = value;
       }

    get domaineScientifiqueSelections(): Array<DomaineScientifiqueVo> {
           return this.domaineScientifiqueService.domaineScientifiqueSelections;
       }
    set domaineScientifiqueSelections(value: Array<DomaineScientifiqueVo>) {
        this.domaineScientifiqueService.domaineScientifiqueSelections = value;
       }
   
     


    get selectedDomaineScientifique():DomaineScientifiqueVo {
           return this.domaineScientifiqueService.selectedDomaineScientifique;
       }
    set selectedDomaineScientifique(value: DomaineScientifiqueVo) {
        this.domaineScientifiqueService.selectedDomaineScientifique = value;
       }
    
    get createDomaineScientifiqueDialog():boolean {
           return this.domaineScientifiqueService.createDomaineScientifiqueDialog;
       }
    set createDomaineScientifiqueDialog(value: boolean) {
        this.domaineScientifiqueService.createDomaineScientifiqueDialog= value;
       }
    
    get editDomaineScientifiqueDialog():boolean {
           return this.domaineScientifiqueService.editDomaineScientifiqueDialog;
       }
    set editDomaineScientifiqueDialog(value: boolean) {
        this.domaineScientifiqueService.editDomaineScientifiqueDialog= value;
       }
    get viewDomaineScientifiqueDialog():boolean {
           return this.domaineScientifiqueService.viewDomaineScientifiqueDialog;
       }
    set viewDomaineScientifiqueDialog(value: boolean) {
        this.domaineScientifiqueService.viewDomaineScientifiqueDialog = value;
       }
       
     get searchDomaineScientifique(): DomaineScientifiqueVo {
        return this.domaineScientifiqueService.searchDomaineScientifique;
       }
    set searchDomaineScientifique(value: DomaineScientifiqueVo) {
        this.domaineScientifiqueService.searchDomaineScientifique = value;
       }



}