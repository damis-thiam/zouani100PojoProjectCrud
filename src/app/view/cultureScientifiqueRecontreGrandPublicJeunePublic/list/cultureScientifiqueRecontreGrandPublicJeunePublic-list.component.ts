import {Component, OnInit} from '@angular/core';
import {CultureScientifiqueRecontreGrandPublicJeunePublicService} from '../../../controller/service/CultureScientifiqueRecontreGrandPublicJeunePublic.service';
import {CultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/CultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {FormatRencontreVo} from '../../../controller/model/FormatRencontre.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-cultureScientifiqueRecontreGrandPublicJeunePublic-list',
  templateUrl: './cultureScientifiqueRecontreGrandPublicJeunePublic-list.component.html',
  styleUrls: ['./cultureScientifiqueRecontreGrandPublicJeunePublic-list.component.css']
})

export class CultureScientifiqueRecontreGrandPublicJeunePublicListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private cultureScientifiqueRecontreGrandPublicJeunePublicService: CultureScientifiqueRecontreGrandPublicJeunePublicService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadCultureScientifiqueRecontreGrandPublicJeunePublics();
    } 
    
    // methods 
    public async loadCultureScientifiqueRecontreGrandPublicJeunePublics(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("CultureScientifiqueRecontreGrandPublicJeunePublic", "list");
        isPermistted ? this.cultureScientifiqueRecontreGrandPublicJeunePublicService.findAll().subscribe(cultureScientifiqueRecontreGrandPublicJeunePublics => this.cultureScientifiqueRecontreGrandPublicJeunePublics = cultureScientifiqueRecontreGrandPublicJeunePublics,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.cultureScientifiqueRecontreGrandPublicJeunePublicService.findByCriteria(this.searchCultureScientifiqueRecontreGrandPublicJeunePublic).subscribe(cultureScientifiqueRecontreGrandPublicJeunePublics=>{
            
            this.cultureScientifiqueRecontreGrandPublicJeunePublics = cultureScientifiqueRecontreGrandPublicJeunePublics;
           // this.searchCultureScientifiqueRecontreGrandPublicJeunePublic = new CultureScientifiqueRecontreGrandPublicJeunePublicVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'tempsEstimePourCetteAnnne', header: 'tempsEstimePourCetteAnnne'},
                {field: 'publicCibleCultureScientifiqueRecontresGrandPublicJeunePublics', header: 'publicCibleCultureScientifiqueRecontresGrandPublicJeunePublics'},
                {field: 'formatRencontre', header: 'formatRencontre'},
                {field: 'contexteCultureScientifiqueRecontreGrandPublicJeunePublics', header: 'contexteCultureScientifiqueRecontreGrandPublicJeunePublics'},
                {field: 'intituleSujet', header: 'intituleSujet'},
                {field: 'periodeAnnee', header: 'periodeAnnee'},
                {field: 'periodeMois', header: 'periodeMois'},
                {field: 'etablisementOrganisateurEvenements', header: 'etablisementOrganisateurEvenements'},
                {field: 'evenementGrandPublic', header: 'evenementGrandPublic'},
                {field: 'volumePublic', header: 'volumePublic'},
                {field: 'paysCultureScientifiqueRecontreGrandPublicJeunePublics', header: 'paysCultureScientifiqueRecontreGrandPublicJeunePublics'},
                {field: 'lienWeb', header: 'lienWeb'},
        ];
    }
    
    public async editCultureScientifiqueRecontreGrandPublicJeunePublic(cultureScientifiqueRecontreGrandPublicJeunePublic:CultureScientifiqueRecontreGrandPublicJeunePublicVo){
        const isPermistted = await this.roleService.isPermitted("CultureScientifiqueRecontreGrandPublicJeunePublic", "edit");
         if(isPermistted){
         this.selectedCultureScientifiqueRecontreGrandPublicJeunePublic = cultureScientifiqueRecontreGrandPublicJeunePublic;
         this.editCultureScientifiqueRecontreGrandPublicJeunePublicDialog = true;
         this.cultureScientifiqueRecontreGrandPublicJeunePublicService.editCultureScientifiqueRecontreGrandPublicJeunePublic$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewCultureScientifiqueRecontreGrandPublicJeunePublic(cultureScientifiqueRecontreGrandPublicJeunePublic:CultureScientifiqueRecontreGrandPublicJeunePublicVo){
        const isPermistted = await this.roleService.isPermitted("CultureScientifiqueRecontreGrandPublicJeunePublic", "view");
        if(isPermistted){
       this.selectedCultureScientifiqueRecontreGrandPublicJeunePublic = cultureScientifiqueRecontreGrandPublicJeunePublic;
        this.viewCultureScientifiqueRecontreGrandPublicJeunePublicDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateCultureScientifiqueRecontreGrandPublicJeunePublic(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedCultureScientifiqueRecontreGrandPublicJeunePublic = new CultureScientifiqueRecontreGrandPublicJeunePublicVo();
        this.createCultureScientifiqueRecontreGrandPublicJeunePublicDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteCultureScientifiqueRecontreGrandPublicJeunePublic(cultureScientifiqueRecontreGrandPublicJeunePublic:CultureScientifiqueRecontreGrandPublicJeunePublicVo){
       const isPermistted = await this.roleService.isPermitted("CultureScientifiqueRecontreGrandPublicJeunePublic", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the CultureScientifiqueRecontreGrandPublicJeunePublic ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.cultureScientifiqueRecontreGrandPublicJeunePublicService.delete(cultureScientifiqueRecontreGrandPublicJeunePublic).subscribe(status=>{
                          if(status > 0){
                          const position = this.cultureScientifiqueRecontreGrandPublicJeunePublics.indexOf(cultureScientifiqueRecontreGrandPublicJeunePublic);
                          position > -1 ? this.cultureScientifiqueRecontreGrandPublicJeunePublics.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'CultureScientifiqueRecontreGrandPublicJeunePublic Deleted',
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

    get cultureScientifiqueRecontreGrandPublicJeunePublics(): Array<CultureScientifiqueRecontreGrandPublicJeunePublicVo> {
           return this.cultureScientifiqueRecontreGrandPublicJeunePublicService.cultureScientifiqueRecontreGrandPublicJeunePublics;
       }
    set cultureScientifiqueRecontreGrandPublicJeunePublics(value: Array<CultureScientifiqueRecontreGrandPublicJeunePublicVo>) {
        this.cultureScientifiqueRecontreGrandPublicJeunePublicService.cultureScientifiqueRecontreGrandPublicJeunePublics = value;
       }

    get cultureScientifiqueRecontreGrandPublicJeunePublicSelections(): Array<CultureScientifiqueRecontreGrandPublicJeunePublicVo> {
           return this.cultureScientifiqueRecontreGrandPublicJeunePublicService.cultureScientifiqueRecontreGrandPublicJeunePublicSelections;
       }
    set cultureScientifiqueRecontreGrandPublicJeunePublicSelections(value: Array<CultureScientifiqueRecontreGrandPublicJeunePublicVo>) {
        this.cultureScientifiqueRecontreGrandPublicJeunePublicService.cultureScientifiqueRecontreGrandPublicJeunePublicSelections = value;
       }
   
     


    get selectedCultureScientifiqueRecontreGrandPublicJeunePublic():CultureScientifiqueRecontreGrandPublicJeunePublicVo {
           return this.cultureScientifiqueRecontreGrandPublicJeunePublicService.selectedCultureScientifiqueRecontreGrandPublicJeunePublic;
       }
    set selectedCultureScientifiqueRecontreGrandPublicJeunePublic(value: CultureScientifiqueRecontreGrandPublicJeunePublicVo) {
        this.cultureScientifiqueRecontreGrandPublicJeunePublicService.selectedCultureScientifiqueRecontreGrandPublicJeunePublic = value;
       }
    
    get createCultureScientifiqueRecontreGrandPublicJeunePublicDialog():boolean {
           return this.cultureScientifiqueRecontreGrandPublicJeunePublicService.createCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
    set createCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this.cultureScientifiqueRecontreGrandPublicJeunePublicService.createCultureScientifiqueRecontreGrandPublicJeunePublicDialog= value;
       }
    
    get editCultureScientifiqueRecontreGrandPublicJeunePublicDialog():boolean {
           return this.cultureScientifiqueRecontreGrandPublicJeunePublicService.editCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
    set editCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this.cultureScientifiqueRecontreGrandPublicJeunePublicService.editCultureScientifiqueRecontreGrandPublicJeunePublicDialog= value;
       }
    get viewCultureScientifiqueRecontreGrandPublicJeunePublicDialog():boolean {
           return this.cultureScientifiqueRecontreGrandPublicJeunePublicService.viewCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
    set viewCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this.cultureScientifiqueRecontreGrandPublicJeunePublicService.viewCultureScientifiqueRecontreGrandPublicJeunePublicDialog = value;
       }
       
     get searchCultureScientifiqueRecontreGrandPublicJeunePublic(): CultureScientifiqueRecontreGrandPublicJeunePublicVo {
        return this.cultureScientifiqueRecontreGrandPublicJeunePublicService.searchCultureScientifiqueRecontreGrandPublicJeunePublic;
       }
    set searchCultureScientifiqueRecontreGrandPublicJeunePublic(value: CultureScientifiqueRecontreGrandPublicJeunePublicVo) {
        this.cultureScientifiqueRecontreGrandPublicJeunePublicService.searchCultureScientifiqueRecontreGrandPublicJeunePublic = value;
       }



}