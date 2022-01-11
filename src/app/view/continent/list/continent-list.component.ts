import {Component, OnInit} from '@angular/core';
import {ContinentService} from '../../../controller/service/Continent.service';
import {ContinentVo} from '../../../controller/model/Continent.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-continent-list',
  templateUrl: './continent-list.component.html',
  styleUrls: ['./continent-list.component.css']
})

export class ContinentListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private continentService: ContinentService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadContinents();
    } 
    
    // methods 
    public async loadContinents(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("Continent", "list");
        isPermistted ? this.continentService.findAll().subscribe(continents => this.continents = continents,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.continentService.findByCriteria(this.searchContinent).subscribe(continents=>{
            
            this.continents = continents;
           // this.searchContinent = new ContinentVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editContinent(continent:ContinentVo){
        const isPermistted = await this.roleService.isPermitted("Continent", "edit");
         if(isPermistted){
         this.selectedContinent = continent;
         this.editContinentDialog = true;
         this.continentService.editContinent$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewContinent(continent:ContinentVo){
        const isPermistted = await this.roleService.isPermitted("Continent", "view");
        if(isPermistted){
       this.selectedContinent = continent;
        this.viewContinentDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateContinent(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedContinent = new ContinentVo();
        this.createContinentDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteContinent(continent:ContinentVo){
       const isPermistted = await this.roleService.isPermitted("Continent", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the Continent ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.continentService.delete(continent).subscribe(status=>{
                          if(status > 0){
                          const position = this.continents.indexOf(continent);
                          position > -1 ? this.continents.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Continent Deleted',
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

    get continents(): Array<ContinentVo> {
           return this.continentService.continents;
       }
    set continents(value: Array<ContinentVo>) {
        this.continentService.continents = value;
       }

    get continentSelections(): Array<ContinentVo> {
           return this.continentService.continentSelections;
       }
    set continentSelections(value: Array<ContinentVo>) {
        this.continentService.continentSelections = value;
       }
   
     


    get selectedContinent():ContinentVo {
           return this.continentService.selectedContinent;
       }
    set selectedContinent(value: ContinentVo) {
        this.continentService.selectedContinent = value;
       }
    
    get createContinentDialog():boolean {
           return this.continentService.createContinentDialog;
       }
    set createContinentDialog(value: boolean) {
        this.continentService.createContinentDialog= value;
       }
    
    get editContinentDialog():boolean {
           return this.continentService.editContinentDialog;
       }
    set editContinentDialog(value: boolean) {
        this.continentService.editContinentDialog= value;
       }
    get viewContinentDialog():boolean {
           return this.continentService.viewContinentDialog;
       }
    set viewContinentDialog(value: boolean) {
        this.continentService.viewContinentDialog = value;
       }
       
     get searchContinent(): ContinentVo {
        return this.continentService.searchContinent;
       }
    set searchContinent(value: ContinentVo) {
        this.continentService.searchContinent = value;
       }



}