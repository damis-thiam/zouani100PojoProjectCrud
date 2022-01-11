import {Component, OnInit} from '@angular/core';
import {CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueService} from '../../../controller/service/CaracterisationDeveloppementDeSavoirEtInnovationScientifique.service';
import {CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo} from '../../../controller/model/CaracterisationDeveloppementDeSavoirEtInnovationScientifique.model';
import {CaracterisationVo} from '../../../controller/model/Caracterisation.model';
import {DeveloppementDeSavoirEtInnovationScientifiqueVo} from '../../../controller/model/DeveloppementDeSavoirEtInnovationScientifique.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-caracterisationDeveloppementDeSavoirEtInnovationScientifique-list',
  templateUrl: './caracterisationDeveloppementDeSavoirEtInnovationScientifique-list.component.html',
  styleUrls: ['./caracterisationDeveloppementDeSavoirEtInnovationScientifique-list.component.css']
})

export class CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService: CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadCaracterisationDeveloppementDeSavoirEtInnovationScientifiques();
    } 
    
    // methods 
    public async loadCaracterisationDeveloppementDeSavoirEtInnovationScientifiques(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("CaracterisationDeveloppementDeSavoirEtInnovationScientifique", "list");
        isPermistted ? this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.findAll().subscribe(caracterisationDeveloppementDeSavoirEtInnovationScientifiques => this.caracterisationDeveloppementDeSavoirEtInnovationScientifiques = caracterisationDeveloppementDeSavoirEtInnovationScientifiques,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.findByCriteria(this.searchCaracterisationDeveloppementDeSavoirEtInnovationScientifique).subscribe(caracterisationDeveloppementDeSavoirEtInnovationScientifiques=>{
            
            this.caracterisationDeveloppementDeSavoirEtInnovationScientifiques = caracterisationDeveloppementDeSavoirEtInnovationScientifiques;
           // this.searchCaracterisationDeveloppementDeSavoirEtInnovationScientifique = new CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'caracterisation', header: 'caracterisation'},
                {field: 'developpementDeSavoirEtInnovationScientifique', header: 'developpementDeSavoirEtInnovationScientifique'},
        ];
    }
    
    public async editCaracterisationDeveloppementDeSavoirEtInnovationScientifique(caracterisationDeveloppementDeSavoirEtInnovationScientifique:CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted("CaracterisationDeveloppementDeSavoirEtInnovationScientifique", "edit");
         if(isPermistted){
         this.selectedCaracterisationDeveloppementDeSavoirEtInnovationScientifique = caracterisationDeveloppementDeSavoirEtInnovationScientifique;
         this.editCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog = true;
         this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.editCaracterisationDeveloppementDeSavoirEtInnovationScientifique$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewCaracterisationDeveloppementDeSavoirEtInnovationScientifique(caracterisationDeveloppementDeSavoirEtInnovationScientifique:CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted("CaracterisationDeveloppementDeSavoirEtInnovationScientifique", "view");
        if(isPermistted){
       this.selectedCaracterisationDeveloppementDeSavoirEtInnovationScientifique = caracterisationDeveloppementDeSavoirEtInnovationScientifique;
        this.viewCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateCaracterisationDeveloppementDeSavoirEtInnovationScientifique(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedCaracterisationDeveloppementDeSavoirEtInnovationScientifique = new CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo();
        this.createCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteCaracterisationDeveloppementDeSavoirEtInnovationScientifique(caracterisationDeveloppementDeSavoirEtInnovationScientifique:CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo){
       const isPermistted = await this.roleService.isPermitted("CaracterisationDeveloppementDeSavoirEtInnovationScientifique", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the CaracterisationDeveloppementDeSavoirEtInnovationScientifique ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.delete(caracterisationDeveloppementDeSavoirEtInnovationScientifique).subscribe(status=>{
                          if(status > 0){
                          const position = this.caracterisationDeveloppementDeSavoirEtInnovationScientifiques.indexOf(caracterisationDeveloppementDeSavoirEtInnovationScientifique);
                          position > -1 ? this.caracterisationDeveloppementDeSavoirEtInnovationScientifiques.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'CaracterisationDeveloppementDeSavoirEtInnovationScientifique Deleted',
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

    get caracterisationDeveloppementDeSavoirEtInnovationScientifiques(): Array<CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo> {
           return this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.caracterisationDeveloppementDeSavoirEtInnovationScientifiques;
       }
    set caracterisationDeveloppementDeSavoirEtInnovationScientifiques(value: Array<CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo>) {
        this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.caracterisationDeveloppementDeSavoirEtInnovationScientifiques = value;
       }

    get caracterisationDeveloppementDeSavoirEtInnovationScientifiqueSelections(): Array<CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo> {
           return this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueSelections;
       }
    set caracterisationDeveloppementDeSavoirEtInnovationScientifiqueSelections(value: Array<CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo>) {
        this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueSelections = value;
       }
   
     


    get selectedCaracterisationDeveloppementDeSavoirEtInnovationScientifique():CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo {
           return this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.selectedCaracterisationDeveloppementDeSavoirEtInnovationScientifique;
       }
    set selectedCaracterisationDeveloppementDeSavoirEtInnovationScientifique(value: CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo) {
        this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.selectedCaracterisationDeveloppementDeSavoirEtInnovationScientifique = value;
       }
    
    get createCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog():boolean {
           return this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.createCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog;
       }
    set createCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog(value: boolean) {
        this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.createCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog= value;
       }
    
    get editCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog():boolean {
           return this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.editCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog;
       }
    set editCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog(value: boolean) {
        this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.editCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog= value;
       }
    get viewCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog():boolean {
           return this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.viewCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog;
       }
    set viewCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog(value: boolean) {
        this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.viewCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog = value;
       }
       
     get searchCaracterisationDeveloppementDeSavoirEtInnovationScientifique(): CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo {
        return this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.searchCaracterisationDeveloppementDeSavoirEtInnovationScientifique;
       }
    set searchCaracterisationDeveloppementDeSavoirEtInnovationScientifique(value: CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo) {
        this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.searchCaracterisationDeveloppementDeSavoirEtInnovationScientifique = value;
       }



}