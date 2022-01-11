import {Component, OnInit} from '@angular/core';
import {CaracterisationService} from '../../../controller/service/Caracterisation.service';
import {CaracterisationVo} from '../../../controller/model/Caracterisation.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-caracterisation-list',
  templateUrl: './caracterisation-list.component.html',
  styleUrls: ['./caracterisation-list.component.css']
})

export class CaracterisationListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private caracterisationService: CaracterisationService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadCaracterisations();
    } 
    
    // methods 
    public async loadCaracterisations(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("Caracterisation", "list");
        isPermistted ? this.caracterisationService.findAll().subscribe(caracterisations => this.caracterisations = caracterisations,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.caracterisationService.findByCriteria(this.searchCaracterisation).subscribe(caracterisations=>{
            
            this.caracterisations = caracterisations;
           // this.searchCaracterisation = new CaracterisationVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editCaracterisation(caracterisation:CaracterisationVo){
        const isPermistted = await this.roleService.isPermitted("Caracterisation", "edit");
         if(isPermistted){
         this.selectedCaracterisation = caracterisation;
         this.editCaracterisationDialog = true;
         this.caracterisationService.editCaracterisation$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewCaracterisation(caracterisation:CaracterisationVo){
        const isPermistted = await this.roleService.isPermitted("Caracterisation", "view");
        if(isPermistted){
       this.selectedCaracterisation = caracterisation;
        this.viewCaracterisationDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateCaracterisation(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedCaracterisation = new CaracterisationVo();
        this.createCaracterisationDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteCaracterisation(caracterisation:CaracterisationVo){
       const isPermistted = await this.roleService.isPermitted("Caracterisation", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the Caracterisation ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.caracterisationService.delete(caracterisation).subscribe(status=>{
                          if(status > 0){
                          const position = this.caracterisations.indexOf(caracterisation);
                          position > -1 ? this.caracterisations.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Caracterisation Deleted',
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

    get caracterisations(): Array<CaracterisationVo> {
           return this.caracterisationService.caracterisations;
       }
    set caracterisations(value: Array<CaracterisationVo>) {
        this.caracterisationService.caracterisations = value;
       }

    get caracterisationSelections(): Array<CaracterisationVo> {
           return this.caracterisationService.caracterisationSelections;
       }
    set caracterisationSelections(value: Array<CaracterisationVo>) {
        this.caracterisationService.caracterisationSelections = value;
       }
   
     


    get selectedCaracterisation():CaracterisationVo {
           return this.caracterisationService.selectedCaracterisation;
       }
    set selectedCaracterisation(value: CaracterisationVo) {
        this.caracterisationService.selectedCaracterisation = value;
       }
    
    get createCaracterisationDialog():boolean {
           return this.caracterisationService.createCaracterisationDialog;
       }
    set createCaracterisationDialog(value: boolean) {
        this.caracterisationService.createCaracterisationDialog= value;
       }
    
    get editCaracterisationDialog():boolean {
           return this.caracterisationService.editCaracterisationDialog;
       }
    set editCaracterisationDialog(value: boolean) {
        this.caracterisationService.editCaracterisationDialog= value;
       }
    get viewCaracterisationDialog():boolean {
           return this.caracterisationService.viewCaracterisationDialog;
       }
    set viewCaracterisationDialog(value: boolean) {
        this.caracterisationService.viewCaracterisationDialog = value;
       }
       
     get searchCaracterisation(): CaracterisationVo {
        return this.caracterisationService.searchCaracterisation;
       }
    set searchCaracterisation(value: CaracterisationVo) {
        this.caracterisationService.searchCaracterisation = value;
       }



}