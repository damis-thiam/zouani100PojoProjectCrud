import {Component, OnInit} from '@angular/core';
import {VieInstitutionnelleService} from '../../../controller/service/VieInstitutionnelle.service';
import {VieInstitutionnelleVo} from '../../../controller/model/VieInstitutionnelle.model';
import {TypeInstanceVo} from '../../../controller/model/TypeInstance.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-vieInstitutionnelle-list',
  templateUrl: './vieInstitutionnelle-list.component.html',
  styleUrls: ['./vieInstitutionnelle-list.component.css']
})

export class VieInstitutionnelleListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private vieInstitutionnelleService: VieInstitutionnelleService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadVieInstitutionnelles();
    } 
    
    // methods 
    public async loadVieInstitutionnelles(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("VieInstitutionnelle", "list");
        isPermistted ? this.vieInstitutionnelleService.findAll().subscribe(vieInstitutionnelles => this.vieInstitutionnelles = vieInstitutionnelles,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.vieInstitutionnelleService.findByCriteria(this.searchVieInstitutionnelle).subscribe(vieInstitutionnelles=>{
            
            this.vieInstitutionnelles = vieInstitutionnelles;
           // this.searchVieInstitutionnelle = new VieInstitutionnelleVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'tempsEstime', header: 'tempsEstime'},
                {field: 'typeInstance', header: 'typeInstance'},
                {field: 'paysEtablissement', header: 'paysEtablissement'},
                {field: 'etablissement', header: 'etablissement'},
                {field: 'libelleInstance', header: 'libelleInstance'},
                {field: 'chercheur', header: 'chercheur'},
        ];
    }
    
    public async editVieInstitutionnelle(vieInstitutionnelle:VieInstitutionnelleVo){
        const isPermistted = await this.roleService.isPermitted("VieInstitutionnelle", "edit");
         if(isPermistted){
         this.selectedVieInstitutionnelle = vieInstitutionnelle;
         this.editVieInstitutionnelleDialog = true;
         this.vieInstitutionnelleService.editVieInstitutionnelle$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewVieInstitutionnelle(vieInstitutionnelle:VieInstitutionnelleVo){
        const isPermistted = await this.roleService.isPermitted("VieInstitutionnelle", "view");
        if(isPermistted){
       this.selectedVieInstitutionnelle = vieInstitutionnelle;
        this.viewVieInstitutionnelleDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateVieInstitutionnelle(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedVieInstitutionnelle = new VieInstitutionnelleVo();
        this.createVieInstitutionnelleDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteVieInstitutionnelle(vieInstitutionnelle:VieInstitutionnelleVo){
       const isPermistted = await this.roleService.isPermitted("VieInstitutionnelle", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the VieInstitutionnelle ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.vieInstitutionnelleService.delete(vieInstitutionnelle).subscribe(status=>{
                          if(status > 0){
                          const position = this.vieInstitutionnelles.indexOf(vieInstitutionnelle);
                          position > -1 ? this.vieInstitutionnelles.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'VieInstitutionnelle Deleted',
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

    get vieInstitutionnelles(): Array<VieInstitutionnelleVo> {
           return this.vieInstitutionnelleService.vieInstitutionnelles;
       }
    set vieInstitutionnelles(value: Array<VieInstitutionnelleVo>) {
        this.vieInstitutionnelleService.vieInstitutionnelles = value;
       }

    get vieInstitutionnelleSelections(): Array<VieInstitutionnelleVo> {
           return this.vieInstitutionnelleService.vieInstitutionnelleSelections;
       }
    set vieInstitutionnelleSelections(value: Array<VieInstitutionnelleVo>) {
        this.vieInstitutionnelleService.vieInstitutionnelleSelections = value;
       }
   
     


    get selectedVieInstitutionnelle():VieInstitutionnelleVo {
           return this.vieInstitutionnelleService.selectedVieInstitutionnelle;
       }
    set selectedVieInstitutionnelle(value: VieInstitutionnelleVo) {
        this.vieInstitutionnelleService.selectedVieInstitutionnelle = value;
       }
    
    get createVieInstitutionnelleDialog():boolean {
           return this.vieInstitutionnelleService.createVieInstitutionnelleDialog;
       }
    set createVieInstitutionnelleDialog(value: boolean) {
        this.vieInstitutionnelleService.createVieInstitutionnelleDialog= value;
       }
    
    get editVieInstitutionnelleDialog():boolean {
           return this.vieInstitutionnelleService.editVieInstitutionnelleDialog;
       }
    set editVieInstitutionnelleDialog(value: boolean) {
        this.vieInstitutionnelleService.editVieInstitutionnelleDialog= value;
       }
    get viewVieInstitutionnelleDialog():boolean {
           return this.vieInstitutionnelleService.viewVieInstitutionnelleDialog;
       }
    set viewVieInstitutionnelleDialog(value: boolean) {
        this.vieInstitutionnelleService.viewVieInstitutionnelleDialog = value;
       }
       
     get searchVieInstitutionnelle(): VieInstitutionnelleVo {
        return this.vieInstitutionnelleService.searchVieInstitutionnelle;
       }
    set searchVieInstitutionnelle(value: VieInstitutionnelleVo) {
        this.vieInstitutionnelleService.searchVieInstitutionnelle = value;
       }



}