import {Component, OnInit} from '@angular/core';
import {NatureEtudeService} from '../../../controller/service/NatureEtude.service';
import {NatureEtudeVo} from '../../../controller/model/NatureEtude.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-natureEtude-list',
  templateUrl: './natureEtude-list.component.html',
  styleUrls: ['./natureEtude-list.component.css']
})

export class NatureEtudeListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private natureEtudeService: NatureEtudeService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadNatureEtudes();
    } 
    
    // methods 
    public async loadNatureEtudes(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("NatureEtude", "list");
        isPermistted ? this.natureEtudeService.findAll().subscribe(natureEtudes => this.natureEtudes = natureEtudes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.natureEtudeService.findByCriteria(this.searchNatureEtude).subscribe(natureEtudes=>{
            
            this.natureEtudes = natureEtudes;
           // this.searchNatureEtude = new NatureEtudeVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editNatureEtude(natureEtude:NatureEtudeVo){
        const isPermistted = await this.roleService.isPermitted("NatureEtude", "edit");
         if(isPermistted){
         this.selectedNatureEtude = natureEtude;
         this.editNatureEtudeDialog = true;
         this.natureEtudeService.editNatureEtude$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewNatureEtude(natureEtude:NatureEtudeVo){
        const isPermistted = await this.roleService.isPermitted("NatureEtude", "view");
        if(isPermistted){
       this.selectedNatureEtude = natureEtude;
        this.viewNatureEtudeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateNatureEtude(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedNatureEtude = new NatureEtudeVo();
        this.createNatureEtudeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteNatureEtude(natureEtude:NatureEtudeVo){
       const isPermistted = await this.roleService.isPermitted("NatureEtude", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the NatureEtude ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.natureEtudeService.delete(natureEtude).subscribe(status=>{
                          if(status > 0){
                          const position = this.natureEtudes.indexOf(natureEtude);
                          position > -1 ? this.natureEtudes.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'NatureEtude Deleted',
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

    get natureEtudes(): Array<NatureEtudeVo> {
           return this.natureEtudeService.natureEtudes;
       }
    set natureEtudes(value: Array<NatureEtudeVo>) {
        this.natureEtudeService.natureEtudes = value;
       }

    get natureEtudeSelections(): Array<NatureEtudeVo> {
           return this.natureEtudeService.natureEtudeSelections;
       }
    set natureEtudeSelections(value: Array<NatureEtudeVo>) {
        this.natureEtudeService.natureEtudeSelections = value;
       }
   
     


    get selectedNatureEtude():NatureEtudeVo {
           return this.natureEtudeService.selectedNatureEtude;
       }
    set selectedNatureEtude(value: NatureEtudeVo) {
        this.natureEtudeService.selectedNatureEtude = value;
       }
    
    get createNatureEtudeDialog():boolean {
           return this.natureEtudeService.createNatureEtudeDialog;
       }
    set createNatureEtudeDialog(value: boolean) {
        this.natureEtudeService.createNatureEtudeDialog= value;
       }
    
    get editNatureEtudeDialog():boolean {
           return this.natureEtudeService.editNatureEtudeDialog;
       }
    set editNatureEtudeDialog(value: boolean) {
        this.natureEtudeService.editNatureEtudeDialog= value;
       }
    get viewNatureEtudeDialog():boolean {
           return this.natureEtudeService.viewNatureEtudeDialog;
       }
    set viewNatureEtudeDialog(value: boolean) {
        this.natureEtudeService.viewNatureEtudeDialog = value;
       }
       
     get searchNatureEtude(): NatureEtudeVo {
        return this.natureEtudeService.searchNatureEtude;
       }
    set searchNatureEtude(value: NatureEtudeVo) {
        this.natureEtudeService.searchNatureEtude = value;
       }



}