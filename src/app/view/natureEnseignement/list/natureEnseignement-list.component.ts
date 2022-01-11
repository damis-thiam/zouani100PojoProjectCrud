import {Component, OnInit} from '@angular/core';
import {NatureEnseignementService} from '../../../controller/service/NatureEnseignement.service';
import {NatureEnseignementVo} from '../../../controller/model/NatureEnseignement.model';
import {EnseignementVo} from '../../../controller/model/Enseignement.model';
import {NatureEtudeVo} from '../../../controller/model/NatureEtude.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-natureEnseignement-list',
  templateUrl: './natureEnseignement-list.component.html',
  styleUrls: ['./natureEnseignement-list.component.css']
})

export class NatureEnseignementListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private natureEnseignementService: NatureEnseignementService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadNatureEnseignements();
    } 
    
    // methods 
    public async loadNatureEnseignements(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("NatureEnseignement", "list");
        isPermistted ? this.natureEnseignementService.findAll().subscribe(natureEnseignements => this.natureEnseignements = natureEnseignements,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.natureEnseignementService.findByCriteria(this.searchNatureEnseignement).subscribe(natureEnseignements=>{
            
            this.natureEnseignements = natureEnseignements;
           // this.searchNatureEnseignement = new NatureEnseignementVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'natureEtude', header: 'natureEtude'},
                {field: 'enseignement', header: 'enseignement'},
        ];
    }
    
    public async editNatureEnseignement(natureEnseignement:NatureEnseignementVo){
        const isPermistted = await this.roleService.isPermitted("NatureEnseignement", "edit");
         if(isPermistted){
         this.selectedNatureEnseignement = natureEnseignement;
         this.editNatureEnseignementDialog = true;
         this.natureEnseignementService.editNatureEnseignement$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewNatureEnseignement(natureEnseignement:NatureEnseignementVo){
        const isPermistted = await this.roleService.isPermitted("NatureEnseignement", "view");
        if(isPermistted){
       this.selectedNatureEnseignement = natureEnseignement;
        this.viewNatureEnseignementDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateNatureEnseignement(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedNatureEnseignement = new NatureEnseignementVo();
        this.createNatureEnseignementDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteNatureEnseignement(natureEnseignement:NatureEnseignementVo){
       const isPermistted = await this.roleService.isPermitted("NatureEnseignement", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the NatureEnseignement ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.natureEnseignementService.delete(natureEnseignement).subscribe(status=>{
                          if(status > 0){
                          const position = this.natureEnseignements.indexOf(natureEnseignement);
                          position > -1 ? this.natureEnseignements.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'NatureEnseignement Deleted',
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

    get natureEnseignements(): Array<NatureEnseignementVo> {
           return this.natureEnseignementService.natureEnseignements;
       }
    set natureEnseignements(value: Array<NatureEnseignementVo>) {
        this.natureEnseignementService.natureEnseignements = value;
       }

    get natureEnseignementSelections(): Array<NatureEnseignementVo> {
           return this.natureEnseignementService.natureEnseignementSelections;
       }
    set natureEnseignementSelections(value: Array<NatureEnseignementVo>) {
        this.natureEnseignementService.natureEnseignementSelections = value;
       }
   
     


    get selectedNatureEnseignement():NatureEnseignementVo {
           return this.natureEnseignementService.selectedNatureEnseignement;
       }
    set selectedNatureEnseignement(value: NatureEnseignementVo) {
        this.natureEnseignementService.selectedNatureEnseignement = value;
       }
    
    get createNatureEnseignementDialog():boolean {
           return this.natureEnseignementService.createNatureEnseignementDialog;
       }
    set createNatureEnseignementDialog(value: boolean) {
        this.natureEnseignementService.createNatureEnseignementDialog= value;
       }
    
    get editNatureEnseignementDialog():boolean {
           return this.natureEnseignementService.editNatureEnseignementDialog;
       }
    set editNatureEnseignementDialog(value: boolean) {
        this.natureEnseignementService.editNatureEnseignementDialog= value;
       }
    get viewNatureEnseignementDialog():boolean {
           return this.natureEnseignementService.viewNatureEnseignementDialog;
       }
    set viewNatureEnseignementDialog(value: boolean) {
        this.natureEnseignementService.viewNatureEnseignementDialog = value;
       }
       
     get searchNatureEnseignement(): NatureEnseignementVo {
        return this.natureEnseignementService.searchNatureEnseignement;
       }
    set searchNatureEnseignement(value: NatureEnseignementVo) {
        this.natureEnseignementService.searchNatureEnseignement = value;
       }



}