import {Component, OnInit} from '@angular/core';
import {NiveauEtudeService} from '../../../controller/service/NiveauEtude.service';
import {NiveauEtudeVo} from '../../../controller/model/NiveauEtude.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-niveauEtude-list',
  templateUrl: './niveauEtude-list.component.html',
  styleUrls: ['./niveauEtude-list.component.css']
})

export class NiveauEtudeListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private niveauEtudeService: NiveauEtudeService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadNiveauEtudes();
    } 
    
    // methods 
    public async loadNiveauEtudes(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("NiveauEtude", "list");
        isPermistted ? this.niveauEtudeService.findAll().subscribe(niveauEtudes => this.niveauEtudes = niveauEtudes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.niveauEtudeService.findByCriteria(this.searchNiveauEtude).subscribe(niveauEtudes=>{
            
            this.niveauEtudes = niveauEtudes;
           // this.searchNiveauEtude = new NiveauEtudeVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editNiveauEtude(niveauEtude:NiveauEtudeVo){
        const isPermistted = await this.roleService.isPermitted("NiveauEtude", "edit");
         if(isPermistted){
         this.selectedNiveauEtude = niveauEtude;
         this.editNiveauEtudeDialog = true;
         this.niveauEtudeService.editNiveauEtude$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewNiveauEtude(niveauEtude:NiveauEtudeVo){
        const isPermistted = await this.roleService.isPermitted("NiveauEtude", "view");
        if(isPermistted){
       this.selectedNiveauEtude = niveauEtude;
        this.viewNiveauEtudeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateNiveauEtude(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedNiveauEtude = new NiveauEtudeVo();
        this.createNiveauEtudeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteNiveauEtude(niveauEtude:NiveauEtudeVo){
       const isPermistted = await this.roleService.isPermitted("NiveauEtude", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the NiveauEtude ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.niveauEtudeService.delete(niveauEtude).subscribe(status=>{
                          if(status > 0){
                          const position = this.niveauEtudes.indexOf(niveauEtude);
                          position > -1 ? this.niveauEtudes.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'NiveauEtude Deleted',
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

    get niveauEtudes(): Array<NiveauEtudeVo> {
           return this.niveauEtudeService.niveauEtudes;
       }
    set niveauEtudes(value: Array<NiveauEtudeVo>) {
        this.niveauEtudeService.niveauEtudes = value;
       }

    get niveauEtudeSelections(): Array<NiveauEtudeVo> {
           return this.niveauEtudeService.niveauEtudeSelections;
       }
    set niveauEtudeSelections(value: Array<NiveauEtudeVo>) {
        this.niveauEtudeService.niveauEtudeSelections = value;
       }
   
     


    get selectedNiveauEtude():NiveauEtudeVo {
           return this.niveauEtudeService.selectedNiveauEtude;
       }
    set selectedNiveauEtude(value: NiveauEtudeVo) {
        this.niveauEtudeService.selectedNiveauEtude = value;
       }
    
    get createNiveauEtudeDialog():boolean {
           return this.niveauEtudeService.createNiveauEtudeDialog;
       }
    set createNiveauEtudeDialog(value: boolean) {
        this.niveauEtudeService.createNiveauEtudeDialog= value;
       }
    
    get editNiveauEtudeDialog():boolean {
           return this.niveauEtudeService.editNiveauEtudeDialog;
       }
    set editNiveauEtudeDialog(value: boolean) {
        this.niveauEtudeService.editNiveauEtudeDialog= value;
       }
    get viewNiveauEtudeDialog():boolean {
           return this.niveauEtudeService.viewNiveauEtudeDialog;
       }
    set viewNiveauEtudeDialog(value: boolean) {
        this.niveauEtudeService.viewNiveauEtudeDialog = value;
       }
       
     get searchNiveauEtude(): NiveauEtudeVo {
        return this.niveauEtudeService.searchNiveauEtude;
       }
    set searchNiveauEtude(value: NiveauEtudeVo) {
        this.niveauEtudeService.searchNiveauEtude = value;
       }



}