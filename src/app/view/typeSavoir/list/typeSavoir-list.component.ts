import {Component, OnInit} from '@angular/core';
import {TypeSavoirService} from '../../../controller/service/TypeSavoir.service';
import {TypeSavoirVo} from '../../../controller/model/TypeSavoir.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-typeSavoir-list',
  templateUrl: './typeSavoir-list.component.html',
  styleUrls: ['./typeSavoir-list.component.css']
})

export class TypeSavoirListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private typeSavoirService: TypeSavoirService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadTypeSavoirs();
    } 
    
    // methods 
    public async loadTypeSavoirs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("TypeSavoir", "list");
        isPermistted ? this.typeSavoirService.findAll().subscribe(typeSavoirs => this.typeSavoirs = typeSavoirs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.typeSavoirService.findByCriteria(this.searchTypeSavoir).subscribe(typeSavoirs=>{
            
            this.typeSavoirs = typeSavoirs;
           // this.searchTypeSavoir = new TypeSavoirVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editTypeSavoir(typeSavoir:TypeSavoirVo){
        const isPermistted = await this.roleService.isPermitted("TypeSavoir", "edit");
         if(isPermistted){
         this.selectedTypeSavoir = typeSavoir;
         this.editTypeSavoirDialog = true;
         this.typeSavoirService.editTypeSavoir$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewTypeSavoir(typeSavoir:TypeSavoirVo){
        const isPermistted = await this.roleService.isPermitted("TypeSavoir", "view");
        if(isPermistted){
       this.selectedTypeSavoir = typeSavoir;
        this.viewTypeSavoirDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateTypeSavoir(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedTypeSavoir = new TypeSavoirVo();
        this.createTypeSavoirDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteTypeSavoir(typeSavoir:TypeSavoirVo){
       const isPermistted = await this.roleService.isPermitted("TypeSavoir", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the TypeSavoir ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.typeSavoirService.delete(typeSavoir).subscribe(status=>{
                          if(status > 0){
                          const position = this.typeSavoirs.indexOf(typeSavoir);
                          position > -1 ? this.typeSavoirs.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'TypeSavoir Deleted',
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

    get typeSavoirs(): Array<TypeSavoirVo> {
           return this.typeSavoirService.typeSavoirs;
       }
    set typeSavoirs(value: Array<TypeSavoirVo>) {
        this.typeSavoirService.typeSavoirs = value;
       }

    get typeSavoirSelections(): Array<TypeSavoirVo> {
           return this.typeSavoirService.typeSavoirSelections;
       }
    set typeSavoirSelections(value: Array<TypeSavoirVo>) {
        this.typeSavoirService.typeSavoirSelections = value;
       }
   
     


    get selectedTypeSavoir():TypeSavoirVo {
           return this.typeSavoirService.selectedTypeSavoir;
       }
    set selectedTypeSavoir(value: TypeSavoirVo) {
        this.typeSavoirService.selectedTypeSavoir = value;
       }
    
    get createTypeSavoirDialog():boolean {
           return this.typeSavoirService.createTypeSavoirDialog;
       }
    set createTypeSavoirDialog(value: boolean) {
        this.typeSavoirService.createTypeSavoirDialog= value;
       }
    
    get editTypeSavoirDialog():boolean {
           return this.typeSavoirService.editTypeSavoirDialog;
       }
    set editTypeSavoirDialog(value: boolean) {
        this.typeSavoirService.editTypeSavoirDialog= value;
       }
    get viewTypeSavoirDialog():boolean {
           return this.typeSavoirService.viewTypeSavoirDialog;
       }
    set viewTypeSavoirDialog(value: boolean) {
        this.typeSavoirService.viewTypeSavoirDialog = value;
       }
       
     get searchTypeSavoir(): TypeSavoirVo {
        return this.typeSavoirService.searchTypeSavoir;
       }
    set searchTypeSavoir(value: TypeSavoirVo) {
        this.typeSavoirService.searchTypeSavoir = value;
       }



}