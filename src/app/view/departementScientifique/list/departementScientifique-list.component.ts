import {Component, OnInit} from '@angular/core';
import {DepartementScientifiqueService} from '../../../controller/service/DepartementScientifique.service';
import {DepartementScientifiqueVo} from '../../../controller/model/DepartementScientifique.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-departementScientifique-list',
  templateUrl: './departementScientifique-list.component.html',
  styleUrls: ['./departementScientifique-list.component.css']
})

export class DepartementScientifiqueListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private departementScientifiqueService: DepartementScientifiqueService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadDepartementScientifiques();
    } 
    
    // methods 
    public async loadDepartementScientifiques(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("DepartementScientifique", "list");
        isPermistted ? this.departementScientifiqueService.findAll().subscribe(departementScientifiques => this.departementScientifiques = departementScientifiques,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.departementScientifiqueService.findByCriteria(this.searchDepartementScientifique).subscribe(departementScientifiques=>{
            
            this.departementScientifiques = departementScientifiques;
           // this.searchDepartementScientifique = new DepartementScientifiqueVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editDepartementScientifique(departementScientifique:DepartementScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted("DepartementScientifique", "edit");
         if(isPermistted){
         this.selectedDepartementScientifique = departementScientifique;
         this.editDepartementScientifiqueDialog = true;
         this.departementScientifiqueService.editDepartementScientifique$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewDepartementScientifique(departementScientifique:DepartementScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted("DepartementScientifique", "view");
        if(isPermistted){
       this.selectedDepartementScientifique = departementScientifique;
        this.viewDepartementScientifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateDepartementScientifique(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedDepartementScientifique = new DepartementScientifiqueVo();
        this.createDepartementScientifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteDepartementScientifique(departementScientifique:DepartementScientifiqueVo){
       const isPermistted = await this.roleService.isPermitted("DepartementScientifique", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the DepartementScientifique ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.departementScientifiqueService.delete(departementScientifique).subscribe(status=>{
                          if(status > 0){
                          const position = this.departementScientifiques.indexOf(departementScientifique);
                          position > -1 ? this.departementScientifiques.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'DepartementScientifique Deleted',
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

    get departementScientifiques(): Array<DepartementScientifiqueVo> {
           return this.departementScientifiqueService.departementScientifiques;
       }
    set departementScientifiques(value: Array<DepartementScientifiqueVo>) {
        this.departementScientifiqueService.departementScientifiques = value;
       }

    get departementScientifiqueSelections(): Array<DepartementScientifiqueVo> {
           return this.departementScientifiqueService.departementScientifiqueSelections;
       }
    set departementScientifiqueSelections(value: Array<DepartementScientifiqueVo>) {
        this.departementScientifiqueService.departementScientifiqueSelections = value;
       }
   
     


    get selectedDepartementScientifique():DepartementScientifiqueVo {
           return this.departementScientifiqueService.selectedDepartementScientifique;
       }
    set selectedDepartementScientifique(value: DepartementScientifiqueVo) {
        this.departementScientifiqueService.selectedDepartementScientifique = value;
       }
    
    get createDepartementScientifiqueDialog():boolean {
           return this.departementScientifiqueService.createDepartementScientifiqueDialog;
       }
    set createDepartementScientifiqueDialog(value: boolean) {
        this.departementScientifiqueService.createDepartementScientifiqueDialog= value;
       }
    
    get editDepartementScientifiqueDialog():boolean {
           return this.departementScientifiqueService.editDepartementScientifiqueDialog;
       }
    set editDepartementScientifiqueDialog(value: boolean) {
        this.departementScientifiqueService.editDepartementScientifiqueDialog= value;
       }
    get viewDepartementScientifiqueDialog():boolean {
           return this.departementScientifiqueService.viewDepartementScientifiqueDialog;
       }
    set viewDepartementScientifiqueDialog(value: boolean) {
        this.departementScientifiqueService.viewDepartementScientifiqueDialog = value;
       }
       
     get searchDepartementScientifique(): DepartementScientifiqueVo {
        return this.departementScientifiqueService.searchDepartementScientifique;
       }
    set searchDepartementScientifique(value: DepartementScientifiqueVo) {
        this.departementScientifiqueService.searchDepartementScientifique = value;
       }



}