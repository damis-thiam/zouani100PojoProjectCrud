import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueDirectionEncadrementDoctorantService} from '../../../controller/service/DisciplineScientifiqueDirectionEncadrementDoctorant.service';
import {DisciplineScientifiqueDirectionEncadrementDoctorantVo} from '../../../controller/model/DisciplineScientifiqueDirectionEncadrementDoctorant.model';
import {DomaineScientifiqueVo} from '../../../controller/model/DomaineScientifique.model';
import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-disciplineScientifiqueDirectionEncadrementDoctorant-list',
  templateUrl: './disciplineScientifiqueDirectionEncadrementDoctorant-list.component.html',
  styleUrls: ['./disciplineScientifiqueDirectionEncadrementDoctorant-list.component.css']
})

export class DisciplineScientifiqueDirectionEncadrementDoctorantListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private disciplineScientifiqueDirectionEncadrementDoctorantService: DisciplineScientifiqueDirectionEncadrementDoctorantService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadDisciplineScientifiqueDirectionEncadrementDoctorants();
    } 
    
    // methods 
    public async loadDisciplineScientifiqueDirectionEncadrementDoctorants(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("DisciplineScientifiqueDirectionEncadrementDoctorant", "list");
        isPermistted ? this.disciplineScientifiqueDirectionEncadrementDoctorantService.findAll().subscribe(disciplineScientifiqueDirectionEncadrementDoctorants => this.disciplineScientifiqueDirectionEncadrementDoctorants = disciplineScientifiqueDirectionEncadrementDoctorants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.disciplineScientifiqueDirectionEncadrementDoctorantService.findByCriteria(this.searchDisciplineScientifiqueDirectionEncadrementDoctorant).subscribe(disciplineScientifiqueDirectionEncadrementDoctorants=>{
            
            this.disciplineScientifiqueDirectionEncadrementDoctorants = disciplineScientifiqueDirectionEncadrementDoctorants;
           // this.searchDisciplineScientifiqueDirectionEncadrementDoctorant = new DisciplineScientifiqueDirectionEncadrementDoctorantVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'domaineScientifique', header: 'domaineScientifique'},
                {field: 'disciplineScientifique', header: 'disciplineScientifique'},
        ];
    }
    
    public async editDisciplineScientifiqueDirectionEncadrementDoctorant(disciplineScientifiqueDirectionEncadrementDoctorant:DisciplineScientifiqueDirectionEncadrementDoctorantVo){
        const isPermistted = await this.roleService.isPermitted("DisciplineScientifiqueDirectionEncadrementDoctorant", "edit");
         if(isPermistted){
         this.selectedDisciplineScientifiqueDirectionEncadrementDoctorant = disciplineScientifiqueDirectionEncadrementDoctorant;
         this.editDisciplineScientifiqueDirectionEncadrementDoctorantDialog = true;
         this.disciplineScientifiqueDirectionEncadrementDoctorantService.editDisciplineScientifiqueDirectionEncadrementDoctorant$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewDisciplineScientifiqueDirectionEncadrementDoctorant(disciplineScientifiqueDirectionEncadrementDoctorant:DisciplineScientifiqueDirectionEncadrementDoctorantVo){
        const isPermistted = await this.roleService.isPermitted("DisciplineScientifiqueDirectionEncadrementDoctorant", "view");
        if(isPermistted){
       this.selectedDisciplineScientifiqueDirectionEncadrementDoctorant = disciplineScientifiqueDirectionEncadrementDoctorant;
        this.viewDisciplineScientifiqueDirectionEncadrementDoctorantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateDisciplineScientifiqueDirectionEncadrementDoctorant(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedDisciplineScientifiqueDirectionEncadrementDoctorant = new DisciplineScientifiqueDirectionEncadrementDoctorantVo();
        this.createDisciplineScientifiqueDirectionEncadrementDoctorantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteDisciplineScientifiqueDirectionEncadrementDoctorant(disciplineScientifiqueDirectionEncadrementDoctorant:DisciplineScientifiqueDirectionEncadrementDoctorantVo){
       const isPermistted = await this.roleService.isPermitted("DisciplineScientifiqueDirectionEncadrementDoctorant", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the DisciplineScientifiqueDirectionEncadrementDoctorant ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.disciplineScientifiqueDirectionEncadrementDoctorantService.delete(disciplineScientifiqueDirectionEncadrementDoctorant).subscribe(status=>{
                          if(status > 0){
                          const position = this.disciplineScientifiqueDirectionEncadrementDoctorants.indexOf(disciplineScientifiqueDirectionEncadrementDoctorant);
                          position > -1 ? this.disciplineScientifiqueDirectionEncadrementDoctorants.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'DisciplineScientifiqueDirectionEncadrementDoctorant Deleted',
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

    get disciplineScientifiqueDirectionEncadrementDoctorants(): Array<DisciplineScientifiqueDirectionEncadrementDoctorantVo> {
           return this.disciplineScientifiqueDirectionEncadrementDoctorantService.disciplineScientifiqueDirectionEncadrementDoctorants;
       }
    set disciplineScientifiqueDirectionEncadrementDoctorants(value: Array<DisciplineScientifiqueDirectionEncadrementDoctorantVo>) {
        this.disciplineScientifiqueDirectionEncadrementDoctorantService.disciplineScientifiqueDirectionEncadrementDoctorants = value;
       }

    get disciplineScientifiqueDirectionEncadrementDoctorantSelections(): Array<DisciplineScientifiqueDirectionEncadrementDoctorantVo> {
           return this.disciplineScientifiqueDirectionEncadrementDoctorantService.disciplineScientifiqueDirectionEncadrementDoctorantSelections;
       }
    set disciplineScientifiqueDirectionEncadrementDoctorantSelections(value: Array<DisciplineScientifiqueDirectionEncadrementDoctorantVo>) {
        this.disciplineScientifiqueDirectionEncadrementDoctorantService.disciplineScientifiqueDirectionEncadrementDoctorantSelections = value;
       }
   
     


    get selectedDisciplineScientifiqueDirectionEncadrementDoctorant():DisciplineScientifiqueDirectionEncadrementDoctorantVo {
           return this.disciplineScientifiqueDirectionEncadrementDoctorantService.selectedDisciplineScientifiqueDirectionEncadrementDoctorant;
       }
    set selectedDisciplineScientifiqueDirectionEncadrementDoctorant(value: DisciplineScientifiqueDirectionEncadrementDoctorantVo) {
        this.disciplineScientifiqueDirectionEncadrementDoctorantService.selectedDisciplineScientifiqueDirectionEncadrementDoctorant = value;
       }
    
    get createDisciplineScientifiqueDirectionEncadrementDoctorantDialog():boolean {
           return this.disciplineScientifiqueDirectionEncadrementDoctorantService.createDisciplineScientifiqueDirectionEncadrementDoctorantDialog;
       }
    set createDisciplineScientifiqueDirectionEncadrementDoctorantDialog(value: boolean) {
        this.disciplineScientifiqueDirectionEncadrementDoctorantService.createDisciplineScientifiqueDirectionEncadrementDoctorantDialog= value;
       }
    
    get editDisciplineScientifiqueDirectionEncadrementDoctorantDialog():boolean {
           return this.disciplineScientifiqueDirectionEncadrementDoctorantService.editDisciplineScientifiqueDirectionEncadrementDoctorantDialog;
       }
    set editDisciplineScientifiqueDirectionEncadrementDoctorantDialog(value: boolean) {
        this.disciplineScientifiqueDirectionEncadrementDoctorantService.editDisciplineScientifiqueDirectionEncadrementDoctorantDialog= value;
       }
    get viewDisciplineScientifiqueDirectionEncadrementDoctorantDialog():boolean {
           return this.disciplineScientifiqueDirectionEncadrementDoctorantService.viewDisciplineScientifiqueDirectionEncadrementDoctorantDialog;
       }
    set viewDisciplineScientifiqueDirectionEncadrementDoctorantDialog(value: boolean) {
        this.disciplineScientifiqueDirectionEncadrementDoctorantService.viewDisciplineScientifiqueDirectionEncadrementDoctorantDialog = value;
       }
       
     get searchDisciplineScientifiqueDirectionEncadrementDoctorant(): DisciplineScientifiqueDirectionEncadrementDoctorantVo {
        return this.disciplineScientifiqueDirectionEncadrementDoctorantService.searchDisciplineScientifiqueDirectionEncadrementDoctorant;
       }
    set searchDisciplineScientifiqueDirectionEncadrementDoctorant(value: DisciplineScientifiqueDirectionEncadrementDoctorantVo) {
        this.disciplineScientifiqueDirectionEncadrementDoctorantService.searchDisciplineScientifiqueDirectionEncadrementDoctorant = value;
       }



}