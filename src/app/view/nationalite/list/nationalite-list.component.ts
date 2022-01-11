import {Component, OnInit} from '@angular/core';
import {NationaliteService} from '../../../controller/service/Nationalite.service';
import {NationaliteVo} from '../../../controller/model/Nationalite.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-nationalite-list',
  templateUrl: './nationalite-list.component.html',
  styleUrls: ['./nationalite-list.component.css']
})

export class NationaliteListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private nationaliteService: NationaliteService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadNationalites();
    } 
    
    // methods 
    public async loadNationalites(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("Nationalite", "list");
        isPermistted ? this.nationaliteService.findAll().subscribe(nationalites => this.nationalites = nationalites,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.nationaliteService.findByCriteria(this.searchNationalite).subscribe(nationalites=>{
            
            this.nationalites = nationalites;
           // this.searchNationalite = new NationaliteVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editNationalite(nationalite:NationaliteVo){
        const isPermistted = await this.roleService.isPermitted("Nationalite", "edit");
         if(isPermistted){
         this.selectedNationalite = nationalite;
         this.editNationaliteDialog = true;
         this.nationaliteService.editNationalite$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewNationalite(nationalite:NationaliteVo){
        const isPermistted = await this.roleService.isPermitted("Nationalite", "view");
        if(isPermistted){
       this.selectedNationalite = nationalite;
        this.viewNationaliteDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateNationalite(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedNationalite = new NationaliteVo();
        this.createNationaliteDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteNationalite(nationalite:NationaliteVo){
       const isPermistted = await this.roleService.isPermitted("Nationalite", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the Nationalite ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.nationaliteService.delete(nationalite).subscribe(status=>{
                          if(status > 0){
                          const position = this.nationalites.indexOf(nationalite);
                          position > -1 ? this.nationalites.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Nationalite Deleted',
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

    get nationalites(): Array<NationaliteVo> {
           return this.nationaliteService.nationalites;
       }
    set nationalites(value: Array<NationaliteVo>) {
        this.nationaliteService.nationalites = value;
       }

    get nationaliteSelections(): Array<NationaliteVo> {
           return this.nationaliteService.nationaliteSelections;
       }
    set nationaliteSelections(value: Array<NationaliteVo>) {
        this.nationaliteService.nationaliteSelections = value;
       }
   
     


    get selectedNationalite():NationaliteVo {
           return this.nationaliteService.selectedNationalite;
       }
    set selectedNationalite(value: NationaliteVo) {
        this.nationaliteService.selectedNationalite = value;
       }
    
    get createNationaliteDialog():boolean {
           return this.nationaliteService.createNationaliteDialog;
       }
    set createNationaliteDialog(value: boolean) {
        this.nationaliteService.createNationaliteDialog= value;
       }
    
    get editNationaliteDialog():boolean {
           return this.nationaliteService.editNationaliteDialog;
       }
    set editNationaliteDialog(value: boolean) {
        this.nationaliteService.editNationaliteDialog= value;
       }
    get viewNationaliteDialog():boolean {
           return this.nationaliteService.viewNationaliteDialog;
       }
    set viewNationaliteDialog(value: boolean) {
        this.nationaliteService.viewNationaliteDialog = value;
       }
       
     get searchNationalite(): NationaliteVo {
        return this.nationaliteService.searchNationalite;
       }
    set searchNationalite(value: NationaliteVo) {
        this.nationaliteService.searchNationalite = value;
       }



}