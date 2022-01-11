import {Component, OnInit} from '@angular/core';
import {EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicService} from '../../../controller/service/EtablissementCultureScientifiqueRecontreGrandPublicJeunePublic.service';
import {EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/EtablissementCultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {CultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/CultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-etablissementCultureScientifiqueRecontreGrandPublicJeunePublic-list',
  templateUrl: './etablissementCultureScientifiqueRecontreGrandPublicJeunePublic-list.component.html',
  styleUrls: ['./etablissementCultureScientifiqueRecontreGrandPublicJeunePublic-list.component.css']
})

export class EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService: EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadEtablissementCultureScientifiqueRecontreGrandPublicJeunePublics();
    } 
    
    // methods 
    public async loadEtablissementCultureScientifiqueRecontreGrandPublicJeunePublics(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("EtablissementCultureScientifiqueRecontreGrandPublicJeunePublic", "list");
        isPermistted ? this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.findAll().subscribe(etablissementCultureScientifiqueRecontreGrandPublicJeunePublics => this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublics = etablissementCultureScientifiqueRecontreGrandPublicJeunePublics,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.findByCriteria(this.searchEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic).subscribe(etablissementCultureScientifiqueRecontreGrandPublicJeunePublics=>{
            
            this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublics = etablissementCultureScientifiqueRecontreGrandPublicJeunePublics;
           // this.searchEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic = new EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'cultureScientifiqueRecontreGrandPublicJeunePublic', header: 'cultureScientifiqueRecontreGrandPublicJeunePublic'},
                {field: 'etablissement', header: 'etablissement'},
        ];
    }
    
    public async editEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic(etablissementCultureScientifiqueRecontreGrandPublicJeunePublic:EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo){
        const isPermistted = await this.roleService.isPermitted("EtablissementCultureScientifiqueRecontreGrandPublicJeunePublic", "edit");
         if(isPermistted){
         this.selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic = etablissementCultureScientifiqueRecontreGrandPublicJeunePublic;
         this.editEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog = true;
         this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.editEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic(etablissementCultureScientifiqueRecontreGrandPublicJeunePublic:EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo){
        const isPermistted = await this.roleService.isPermitted("EtablissementCultureScientifiqueRecontreGrandPublicJeunePublic", "view");
        if(isPermistted){
       this.selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic = etablissementCultureScientifiqueRecontreGrandPublicJeunePublic;
        this.viewEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic = new EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo();
        this.createEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic(etablissementCultureScientifiqueRecontreGrandPublicJeunePublic:EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo){
       const isPermistted = await this.roleService.isPermitted("EtablissementCultureScientifiqueRecontreGrandPublicJeunePublic", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the EtablissementCultureScientifiqueRecontreGrandPublicJeunePublic ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.delete(etablissementCultureScientifiqueRecontreGrandPublicJeunePublic).subscribe(status=>{
                          if(status > 0){
                          const position = this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublics.indexOf(etablissementCultureScientifiqueRecontreGrandPublicJeunePublic);
                          position > -1 ? this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublics.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'EtablissementCultureScientifiqueRecontreGrandPublicJeunePublic Deleted',
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

    get etablissementCultureScientifiqueRecontreGrandPublicJeunePublics(): Array<EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo> {
           return this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.etablissementCultureScientifiqueRecontreGrandPublicJeunePublics;
       }
    set etablissementCultureScientifiqueRecontreGrandPublicJeunePublics(value: Array<EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo>) {
        this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.etablissementCultureScientifiqueRecontreGrandPublicJeunePublics = value;
       }

    get etablissementCultureScientifiqueRecontreGrandPublicJeunePublicSelections(): Array<EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo> {
           return this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicSelections;
       }
    set etablissementCultureScientifiqueRecontreGrandPublicJeunePublicSelections(value: Array<EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo>) {
        this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicSelections = value;
       }
   
     


    get selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic():EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo {
           return this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic;
       }
    set selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic(value: EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo) {
        this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic = value;
       }
    
    get createEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog():boolean {
           return this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.createEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
    set createEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.createEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog= value;
       }
    
    get editEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog():boolean {
           return this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.editEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
    set editEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.editEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog= value;
       }
    get viewEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog():boolean {
           return this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.viewEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
    set viewEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.viewEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog = value;
       }
       
     get searchEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic(): EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo {
        return this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.searchEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic;
       }
    set searchEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic(value: EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo) {
        this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.searchEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic = value;
       }



}