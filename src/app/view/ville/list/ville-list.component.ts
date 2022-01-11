import {Component, OnInit} from '@angular/core';
import {VilleService} from '../../../controller/service/Ville.service';
import {VilleVo} from '../../../controller/model/Ville.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-ville-list',
  templateUrl: './ville-list.component.html',
  styleUrls: ['./ville-list.component.css']
})

export class VilleListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private villeService: VilleService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadVilles();
    } 
    
    // methods 
    public async loadVilles(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("Ville", "list");
        isPermistted ? this.villeService.findAll().subscribe(villes => this.villes = villes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.villeService.findByCriteria(this.searchVille).subscribe(villes=>{
            
            this.villes = villes;
           // this.searchVille = new VilleVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
                {field: 'pays', header: 'pays'},
        ];
    }
    
    public async editVille(ville:VilleVo){
        const isPermistted = await this.roleService.isPermitted("Ville", "edit");
         if(isPermistted){
         this.selectedVille = ville;
         this.editVilleDialog = true;
         this.villeService.editVille$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewVille(ville:VilleVo){
        const isPermistted = await this.roleService.isPermitted("Ville", "view");
        if(isPermistted){
       this.selectedVille = ville;
        this.viewVilleDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateVille(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedVille = new VilleVo();
        this.createVilleDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteVille(ville:VilleVo){
       const isPermistted = await this.roleService.isPermitted("Ville", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the Ville ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.villeService.delete(ville).subscribe(status=>{
                          if(status > 0){
                          const position = this.villes.indexOf(ville);
                          position > -1 ? this.villes.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Ville Deleted',
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

    get villes(): Array<VilleVo> {
           return this.villeService.villes;
       }
    set villes(value: Array<VilleVo>) {
        this.villeService.villes = value;
       }

    get villeSelections(): Array<VilleVo> {
           return this.villeService.villeSelections;
       }
    set villeSelections(value: Array<VilleVo>) {
        this.villeService.villeSelections = value;
       }
   
     


    get selectedVille():VilleVo {
           return this.villeService.selectedVille;
       }
    set selectedVille(value: VilleVo) {
        this.villeService.selectedVille = value;
       }
    
    get createVilleDialog():boolean {
           return this.villeService.createVilleDialog;
       }
    set createVilleDialog(value: boolean) {
        this.villeService.createVilleDialog= value;
       }
    
    get editVilleDialog():boolean {
           return this.villeService.editVilleDialog;
       }
    set editVilleDialog(value: boolean) {
        this.villeService.editVilleDialog= value;
       }
    get viewVilleDialog():boolean {
           return this.villeService.viewVilleDialog;
       }
    set viewVilleDialog(value: boolean) {
        this.villeService.viewVilleDialog = value;
       }
       
     get searchVille(): VilleVo {
        return this.villeService.searchVille;
       }
    set searchVille(value: VilleVo) {
        this.villeService.searchVille = value;
       }



}