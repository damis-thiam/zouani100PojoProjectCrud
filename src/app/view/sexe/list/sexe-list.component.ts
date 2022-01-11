import {Component, OnInit} from '@angular/core';
import {SexeService} from '../../../controller/service/Sexe.service';
import {SexeVo} from '../../../controller/model/Sexe.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-sexe-list',
  templateUrl: './sexe-list.component.html',
  styleUrls: ['./sexe-list.component.css']
})

export class SexeListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private sexeService: SexeService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadSexes();
    } 
    
    // methods 
    public async loadSexes(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("Sexe", "list");
        isPermistted ? this.sexeService.findAll().subscribe(sexes => this.sexes = sexes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.sexeService.findByCriteria(this.searchSexe).subscribe(sexes=>{
            
            this.sexes = sexes;
           // this.searchSexe = new SexeVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editSexe(sexe:SexeVo){
        const isPermistted = await this.roleService.isPermitted("Sexe", "edit");
         if(isPermistted){
         this.selectedSexe = sexe;
         this.editSexeDialog = true;
         this.sexeService.editSexe$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewSexe(sexe:SexeVo){
        const isPermistted = await this.roleService.isPermitted("Sexe", "view");
        if(isPermistted){
       this.selectedSexe = sexe;
        this.viewSexeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateSexe(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedSexe = new SexeVo();
        this.createSexeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteSexe(sexe:SexeVo){
       const isPermistted = await this.roleService.isPermitted("Sexe", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the Sexe ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.sexeService.delete(sexe).subscribe(status=>{
                          if(status > 0){
                          const position = this.sexes.indexOf(sexe);
                          position > -1 ? this.sexes.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Sexe Deleted',
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

    get sexes(): Array<SexeVo> {
           return this.sexeService.sexes;
       }
    set sexes(value: Array<SexeVo>) {
        this.sexeService.sexes = value;
       }

    get sexeSelections(): Array<SexeVo> {
           return this.sexeService.sexeSelections;
       }
    set sexeSelections(value: Array<SexeVo>) {
        this.sexeService.sexeSelections = value;
       }
   
     


    get selectedSexe():SexeVo {
           return this.sexeService.selectedSexe;
       }
    set selectedSexe(value: SexeVo) {
        this.sexeService.selectedSexe = value;
       }
    
    get createSexeDialog():boolean {
           return this.sexeService.createSexeDialog;
       }
    set createSexeDialog(value: boolean) {
        this.sexeService.createSexeDialog= value;
       }
    
    get editSexeDialog():boolean {
           return this.sexeService.editSexeDialog;
       }
    set editSexeDialog(value: boolean) {
        this.sexeService.editSexeDialog= value;
       }
    get viewSexeDialog():boolean {
           return this.sexeService.viewSexeDialog;
       }
    set viewSexeDialog(value: boolean) {
        this.sexeService.viewSexeDialog = value;
       }
       
     get searchSexe(): SexeVo {
        return this.sexeService.searchSexe;
       }
    set searchSexe(value: SexeVo) {
        this.sexeService.searchSexe = value;
       }



}