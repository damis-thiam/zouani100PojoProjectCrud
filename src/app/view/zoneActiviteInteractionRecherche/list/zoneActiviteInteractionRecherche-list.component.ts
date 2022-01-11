import {Component, OnInit} from '@angular/core';
import {ZoneActiviteInteractionRechercheService} from '../../../controller/service/ZoneActiviteInteractionRecherche.service';
import {ZoneActiviteInteractionRechercheVo} from '../../../controller/model/ZoneActiviteInteractionRecherche.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-zoneActiviteInteractionRecherche-list',
  templateUrl: './zoneActiviteInteractionRecherche-list.component.html',
  styleUrls: ['./zoneActiviteInteractionRecherche-list.component.css']
})

export class ZoneActiviteInteractionRechercheListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private zoneActiviteInteractionRechercheService: ZoneActiviteInteractionRechercheService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadZoneActiviteInteractionRecherches();
    } 
    
    // methods 
    public async loadZoneActiviteInteractionRecherches(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("ZoneActiviteInteractionRecherche", "list");
        isPermistted ? this.zoneActiviteInteractionRechercheService.findAll().subscribe(zoneActiviteInteractionRecherches => this.zoneActiviteInteractionRecherches = zoneActiviteInteractionRecherches,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.zoneActiviteInteractionRechercheService.findByCriteria(this.searchZoneActiviteInteractionRecherche).subscribe(zoneActiviteInteractionRecherches=>{
            
            this.zoneActiviteInteractionRecherches = zoneActiviteInteractionRecherches;
           // this.searchZoneActiviteInteractionRecherche = new ZoneActiviteInteractionRechercheVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'pays', header: 'pays'},
                {field: 'chercheur', header: 'chercheur'},
        ];
    }
    
    public async editZoneActiviteInteractionRecherche(zoneActiviteInteractionRecherche:ZoneActiviteInteractionRechercheVo){
        const isPermistted = await this.roleService.isPermitted("ZoneActiviteInteractionRecherche", "edit");
         if(isPermistted){
         this.selectedZoneActiviteInteractionRecherche = zoneActiviteInteractionRecherche;
         this.editZoneActiviteInteractionRechercheDialog = true;
         this.zoneActiviteInteractionRechercheService.editZoneActiviteInteractionRecherche$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewZoneActiviteInteractionRecherche(zoneActiviteInteractionRecherche:ZoneActiviteInteractionRechercheVo){
        const isPermistted = await this.roleService.isPermitted("ZoneActiviteInteractionRecherche", "view");
        if(isPermistted){
       this.selectedZoneActiviteInteractionRecherche = zoneActiviteInteractionRecherche;
        this.viewZoneActiviteInteractionRechercheDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateZoneActiviteInteractionRecherche(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedZoneActiviteInteractionRecherche = new ZoneActiviteInteractionRechercheVo();
        this.createZoneActiviteInteractionRechercheDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteZoneActiviteInteractionRecherche(zoneActiviteInteractionRecherche:ZoneActiviteInteractionRechercheVo){
       const isPermistted = await this.roleService.isPermitted("ZoneActiviteInteractionRecherche", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the ZoneActiviteInteractionRecherche ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.zoneActiviteInteractionRechercheService.delete(zoneActiviteInteractionRecherche).subscribe(status=>{
                          if(status > 0){
                          const position = this.zoneActiviteInteractionRecherches.indexOf(zoneActiviteInteractionRecherche);
                          position > -1 ? this.zoneActiviteInteractionRecherches.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'ZoneActiviteInteractionRecherche Deleted',
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

    get zoneActiviteInteractionRecherches(): Array<ZoneActiviteInteractionRechercheVo> {
           return this.zoneActiviteInteractionRechercheService.zoneActiviteInteractionRecherches;
       }
    set zoneActiviteInteractionRecherches(value: Array<ZoneActiviteInteractionRechercheVo>) {
        this.zoneActiviteInteractionRechercheService.zoneActiviteInteractionRecherches = value;
       }

    get zoneActiviteInteractionRechercheSelections(): Array<ZoneActiviteInteractionRechercheVo> {
           return this.zoneActiviteInteractionRechercheService.zoneActiviteInteractionRechercheSelections;
       }
    set zoneActiviteInteractionRechercheSelections(value: Array<ZoneActiviteInteractionRechercheVo>) {
        this.zoneActiviteInteractionRechercheService.zoneActiviteInteractionRechercheSelections = value;
       }
   
     


    get selectedZoneActiviteInteractionRecherche():ZoneActiviteInteractionRechercheVo {
           return this.zoneActiviteInteractionRechercheService.selectedZoneActiviteInteractionRecherche;
       }
    set selectedZoneActiviteInteractionRecherche(value: ZoneActiviteInteractionRechercheVo) {
        this.zoneActiviteInteractionRechercheService.selectedZoneActiviteInteractionRecherche = value;
       }
    
    get createZoneActiviteInteractionRechercheDialog():boolean {
           return this.zoneActiviteInteractionRechercheService.createZoneActiviteInteractionRechercheDialog;
       }
    set createZoneActiviteInteractionRechercheDialog(value: boolean) {
        this.zoneActiviteInteractionRechercheService.createZoneActiviteInteractionRechercheDialog= value;
       }
    
    get editZoneActiviteInteractionRechercheDialog():boolean {
           return this.zoneActiviteInteractionRechercheService.editZoneActiviteInteractionRechercheDialog;
       }
    set editZoneActiviteInteractionRechercheDialog(value: boolean) {
        this.zoneActiviteInteractionRechercheService.editZoneActiviteInteractionRechercheDialog= value;
       }
    get viewZoneActiviteInteractionRechercheDialog():boolean {
           return this.zoneActiviteInteractionRechercheService.viewZoneActiviteInteractionRechercheDialog;
       }
    set viewZoneActiviteInteractionRechercheDialog(value: boolean) {
        this.zoneActiviteInteractionRechercheService.viewZoneActiviteInteractionRechercheDialog = value;
       }
       
     get searchZoneActiviteInteractionRecherche(): ZoneActiviteInteractionRechercheVo {
        return this.zoneActiviteInteractionRechercheService.searchZoneActiviteInteractionRecherche;
       }
    set searchZoneActiviteInteractionRecherche(value: ZoneActiviteInteractionRechercheVo) {
        this.zoneActiviteInteractionRechercheService.searchZoneActiviteInteractionRecherche = value;
       }



}