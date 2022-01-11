import {Component, OnInit} from '@angular/core';
import {TypeInstrumentsEtDispositifsIrdService} from '../../../controller/service/TypeInstrumentsEtDispositifsIrd.service';
import {TypeInstrumentsEtDispositifsIrdVo} from '../../../controller/model/TypeInstrumentsEtDispositifsIrd.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-typeInstrumentsEtDispositifsIrd-list',
  templateUrl: './typeInstrumentsEtDispositifsIrd-list.component.html',
  styleUrls: ['./typeInstrumentsEtDispositifsIrd-list.component.css']
})

export class TypeInstrumentsEtDispositifsIrdListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private typeInstrumentsEtDispositifsIrdService: TypeInstrumentsEtDispositifsIrdService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadTypeInstrumentsEtDispositifsIrds();
    } 
    
    // methods 
    public async loadTypeInstrumentsEtDispositifsIrds(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("TypeInstrumentsEtDispositifsIrd", "list");
        isPermistted ? this.typeInstrumentsEtDispositifsIrdService.findAll().subscribe(typeInstrumentsEtDispositifsIrds => this.typeInstrumentsEtDispositifsIrds = typeInstrumentsEtDispositifsIrds,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.typeInstrumentsEtDispositifsIrdService.findByCriteria(this.searchTypeInstrumentsEtDispositifsIrd).subscribe(typeInstrumentsEtDispositifsIrds=>{
            
            this.typeInstrumentsEtDispositifsIrds = typeInstrumentsEtDispositifsIrds;
           // this.searchTypeInstrumentsEtDispositifsIrd = new TypeInstrumentsEtDispositifsIrdVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editTypeInstrumentsEtDispositifsIrd(typeInstrumentsEtDispositifsIrd:TypeInstrumentsEtDispositifsIrdVo){
        const isPermistted = await this.roleService.isPermitted("TypeInstrumentsEtDispositifsIrd", "edit");
         if(isPermistted){
         this.selectedTypeInstrumentsEtDispositifsIrd = typeInstrumentsEtDispositifsIrd;
         this.editTypeInstrumentsEtDispositifsIrdDialog = true;
         this.typeInstrumentsEtDispositifsIrdService.editTypeInstrumentsEtDispositifsIrd$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewTypeInstrumentsEtDispositifsIrd(typeInstrumentsEtDispositifsIrd:TypeInstrumentsEtDispositifsIrdVo){
        const isPermistted = await this.roleService.isPermitted("TypeInstrumentsEtDispositifsIrd", "view");
        if(isPermistted){
       this.selectedTypeInstrumentsEtDispositifsIrd = typeInstrumentsEtDispositifsIrd;
        this.viewTypeInstrumentsEtDispositifsIrdDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateTypeInstrumentsEtDispositifsIrd(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedTypeInstrumentsEtDispositifsIrd = new TypeInstrumentsEtDispositifsIrdVo();
        this.createTypeInstrumentsEtDispositifsIrdDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteTypeInstrumentsEtDispositifsIrd(typeInstrumentsEtDispositifsIrd:TypeInstrumentsEtDispositifsIrdVo){
       const isPermistted = await this.roleService.isPermitted("TypeInstrumentsEtDispositifsIrd", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the TypeInstrumentsEtDispositifsIrd ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.typeInstrumentsEtDispositifsIrdService.delete(typeInstrumentsEtDispositifsIrd).subscribe(status=>{
                          if(status > 0){
                          const position = this.typeInstrumentsEtDispositifsIrds.indexOf(typeInstrumentsEtDispositifsIrd);
                          position > -1 ? this.typeInstrumentsEtDispositifsIrds.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'TypeInstrumentsEtDispositifsIrd Deleted',
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

    get typeInstrumentsEtDispositifsIrds(): Array<TypeInstrumentsEtDispositifsIrdVo> {
           return this.typeInstrumentsEtDispositifsIrdService.typeInstrumentsEtDispositifsIrds;
       }
    set typeInstrumentsEtDispositifsIrds(value: Array<TypeInstrumentsEtDispositifsIrdVo>) {
        this.typeInstrumentsEtDispositifsIrdService.typeInstrumentsEtDispositifsIrds = value;
       }

    get typeInstrumentsEtDispositifsIrdSelections(): Array<TypeInstrumentsEtDispositifsIrdVo> {
           return this.typeInstrumentsEtDispositifsIrdService.typeInstrumentsEtDispositifsIrdSelections;
       }
    set typeInstrumentsEtDispositifsIrdSelections(value: Array<TypeInstrumentsEtDispositifsIrdVo>) {
        this.typeInstrumentsEtDispositifsIrdService.typeInstrumentsEtDispositifsIrdSelections = value;
       }
   
     


    get selectedTypeInstrumentsEtDispositifsIrd():TypeInstrumentsEtDispositifsIrdVo {
           return this.typeInstrumentsEtDispositifsIrdService.selectedTypeInstrumentsEtDispositifsIrd;
       }
    set selectedTypeInstrumentsEtDispositifsIrd(value: TypeInstrumentsEtDispositifsIrdVo) {
        this.typeInstrumentsEtDispositifsIrdService.selectedTypeInstrumentsEtDispositifsIrd = value;
       }
    
    get createTypeInstrumentsEtDispositifsIrdDialog():boolean {
           return this.typeInstrumentsEtDispositifsIrdService.createTypeInstrumentsEtDispositifsIrdDialog;
       }
    set createTypeInstrumentsEtDispositifsIrdDialog(value: boolean) {
        this.typeInstrumentsEtDispositifsIrdService.createTypeInstrumentsEtDispositifsIrdDialog= value;
       }
    
    get editTypeInstrumentsEtDispositifsIrdDialog():boolean {
           return this.typeInstrumentsEtDispositifsIrdService.editTypeInstrumentsEtDispositifsIrdDialog;
       }
    set editTypeInstrumentsEtDispositifsIrdDialog(value: boolean) {
        this.typeInstrumentsEtDispositifsIrdService.editTypeInstrumentsEtDispositifsIrdDialog= value;
       }
    get viewTypeInstrumentsEtDispositifsIrdDialog():boolean {
           return this.typeInstrumentsEtDispositifsIrdService.viewTypeInstrumentsEtDispositifsIrdDialog;
       }
    set viewTypeInstrumentsEtDispositifsIrdDialog(value: boolean) {
        this.typeInstrumentsEtDispositifsIrdService.viewTypeInstrumentsEtDispositifsIrdDialog = value;
       }
       
     get searchTypeInstrumentsEtDispositifsIrd(): TypeInstrumentsEtDispositifsIrdVo {
        return this.typeInstrumentsEtDispositifsIrdService.searchTypeInstrumentsEtDispositifsIrd;
       }
    set searchTypeInstrumentsEtDispositifsIrd(value: TypeInstrumentsEtDispositifsIrdVo) {
        this.typeInstrumentsEtDispositifsIrdService.searchTypeInstrumentsEtDispositifsIrd = value;
       }



}