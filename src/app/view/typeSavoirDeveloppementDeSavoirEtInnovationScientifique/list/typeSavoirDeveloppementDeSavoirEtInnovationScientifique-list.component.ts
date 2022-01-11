import {Component, OnInit} from '@angular/core';
import {TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService} from '../../../controller/service/TypeSavoirDeveloppementDeSavoirEtInnovationScientifique.service';
import {TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo} from '../../../controller/model/TypeSavoirDeveloppementDeSavoirEtInnovationScientifique.model';
import {TypeSavoirVo} from '../../../controller/model/TypeSavoir.model';
import {DeveloppementDeSavoirEtInnovationScientifiqueVo} from '../../../controller/model/DeveloppementDeSavoirEtInnovationScientifique.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-typeSavoirDeveloppementDeSavoirEtInnovationScientifique-list',
  templateUrl: './typeSavoirDeveloppementDeSavoirEtInnovationScientifique-list.component.html',
  styleUrls: ['./typeSavoirDeveloppementDeSavoirEtInnovationScientifique-list.component.css']
})

export class TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService: TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadTypeSavoirDeveloppementDeSavoirEtInnovationScientifiques();
    } 
    
    // methods 
    public async loadTypeSavoirDeveloppementDeSavoirEtInnovationScientifiques(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("TypeSavoirDeveloppementDeSavoirEtInnovationScientifique", "list");
        isPermistted ? this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.findAll().subscribe(typeSavoirDeveloppementDeSavoirEtInnovationScientifiques => this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiques = typeSavoirDeveloppementDeSavoirEtInnovationScientifiques,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.findByCriteria(this.searchTypeSavoirDeveloppementDeSavoirEtInnovationScientifique).subscribe(typeSavoirDeveloppementDeSavoirEtInnovationScientifiques=>{
            
            this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiques = typeSavoirDeveloppementDeSavoirEtInnovationScientifiques;
           // this.searchTypeSavoirDeveloppementDeSavoirEtInnovationScientifique = new TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'developpementDeSavoirEtInnovationScientifique', header: 'developpementDeSavoirEtInnovationScientifique'},
                {field: 'typeSavoir', header: 'typeSavoir'},
        ];
    }
    
    public async editTypeSavoirDeveloppementDeSavoirEtInnovationScientifique(typeSavoirDeveloppementDeSavoirEtInnovationScientifique:TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted("TypeSavoirDeveloppementDeSavoirEtInnovationScientifique", "edit");
         if(isPermistted){
         this.selectedTypeSavoirDeveloppementDeSavoirEtInnovationScientifique = typeSavoirDeveloppementDeSavoirEtInnovationScientifique;
         this.editTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog = true;
         this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.editTypeSavoirDeveloppementDeSavoirEtInnovationScientifique$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewTypeSavoirDeveloppementDeSavoirEtInnovationScientifique(typeSavoirDeveloppementDeSavoirEtInnovationScientifique:TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted("TypeSavoirDeveloppementDeSavoirEtInnovationScientifique", "view");
        if(isPermistted){
       this.selectedTypeSavoirDeveloppementDeSavoirEtInnovationScientifique = typeSavoirDeveloppementDeSavoirEtInnovationScientifique;
        this.viewTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateTypeSavoirDeveloppementDeSavoirEtInnovationScientifique(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedTypeSavoirDeveloppementDeSavoirEtInnovationScientifique = new TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo();
        this.createTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteTypeSavoirDeveloppementDeSavoirEtInnovationScientifique(typeSavoirDeveloppementDeSavoirEtInnovationScientifique:TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo){
       const isPermistted = await this.roleService.isPermitted("TypeSavoirDeveloppementDeSavoirEtInnovationScientifique", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the TypeSavoirDeveloppementDeSavoirEtInnovationScientifique ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.delete(typeSavoirDeveloppementDeSavoirEtInnovationScientifique).subscribe(status=>{
                          if(status > 0){
                          const position = this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiques.indexOf(typeSavoirDeveloppementDeSavoirEtInnovationScientifique);
                          position > -1 ? this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiques.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'TypeSavoirDeveloppementDeSavoirEtInnovationScientifique Deleted',
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

    get typeSavoirDeveloppementDeSavoirEtInnovationScientifiques(): Array<TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo> {
           return this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.typeSavoirDeveloppementDeSavoirEtInnovationScientifiques;
       }
    set typeSavoirDeveloppementDeSavoirEtInnovationScientifiques(value: Array<TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo>) {
        this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.typeSavoirDeveloppementDeSavoirEtInnovationScientifiques = value;
       }

    get typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueSelections(): Array<TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo> {
           return this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueSelections;
       }
    set typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueSelections(value: Array<TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo>) {
        this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueSelections = value;
       }
   
     


    get selectedTypeSavoirDeveloppementDeSavoirEtInnovationScientifique():TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo {
           return this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.selectedTypeSavoirDeveloppementDeSavoirEtInnovationScientifique;
       }
    set selectedTypeSavoirDeveloppementDeSavoirEtInnovationScientifique(value: TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo) {
        this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.selectedTypeSavoirDeveloppementDeSavoirEtInnovationScientifique = value;
       }
    
    get createTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog():boolean {
           return this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.createTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog;
       }
    set createTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog(value: boolean) {
        this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.createTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog= value;
       }
    
    get editTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog():boolean {
           return this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.editTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog;
       }
    set editTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog(value: boolean) {
        this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.editTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog= value;
       }
    get viewTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog():boolean {
           return this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.viewTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog;
       }
    set viewTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog(value: boolean) {
        this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.viewTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog = value;
       }
       
     get searchTypeSavoirDeveloppementDeSavoirEtInnovationScientifique(): TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo {
        return this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.searchTypeSavoirDeveloppementDeSavoirEtInnovationScientifique;
       }
    set searchTypeSavoirDeveloppementDeSavoirEtInnovationScientifique(value: TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo) {
        this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.searchTypeSavoirDeveloppementDeSavoirEtInnovationScientifique = value;
       }



}