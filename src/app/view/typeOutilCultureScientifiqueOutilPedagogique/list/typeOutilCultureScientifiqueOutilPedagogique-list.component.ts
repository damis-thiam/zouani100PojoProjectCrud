import {Component, OnInit} from '@angular/core';
import {TypeOutilCultureScientifiqueOutilPedagogiqueService} from '../../../controller/service/TypeOutilCultureScientifiqueOutilPedagogique.service';
import {TypeOutilCultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/TypeOutilCultureScientifiqueOutilPedagogique.model';
import {TypeOutilVo} from '../../../controller/model/TypeOutil.model';
import {CultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/CultureScientifiqueOutilPedagogique.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-typeOutilCultureScientifiqueOutilPedagogique-list',
  templateUrl: './typeOutilCultureScientifiqueOutilPedagogique-list.component.html',
  styleUrls: ['./typeOutilCultureScientifiqueOutilPedagogique-list.component.css']
})

export class TypeOutilCultureScientifiqueOutilPedagogiqueListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private typeOutilCultureScientifiqueOutilPedagogiqueService: TypeOutilCultureScientifiqueOutilPedagogiqueService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadTypeOutilCultureScientifiqueOutilPedagogiques();
    } 
    
    // methods 
    public async loadTypeOutilCultureScientifiqueOutilPedagogiques(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("TypeOutilCultureScientifiqueOutilPedagogique", "list");
        isPermistted ? this.typeOutilCultureScientifiqueOutilPedagogiqueService.findAll().subscribe(typeOutilCultureScientifiqueOutilPedagogiques => this.typeOutilCultureScientifiqueOutilPedagogiques = typeOutilCultureScientifiqueOutilPedagogiques,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.typeOutilCultureScientifiqueOutilPedagogiqueService.findByCriteria(this.searchTypeOutilCultureScientifiqueOutilPedagogique).subscribe(typeOutilCultureScientifiqueOutilPedagogiques=>{
            
            this.typeOutilCultureScientifiqueOutilPedagogiques = typeOutilCultureScientifiqueOutilPedagogiques;
           // this.searchTypeOutilCultureScientifiqueOutilPedagogique = new TypeOutilCultureScientifiqueOutilPedagogiqueVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'cultureScientifiqueOutilPedagogique', header: 'cultureScientifiqueOutilPedagogique'},
                {field: 'typeOutil', header: 'typeOutil'},
        ];
    }
    
    public async editTypeOutilCultureScientifiqueOutilPedagogique(typeOutilCultureScientifiqueOutilPedagogique:TypeOutilCultureScientifiqueOutilPedagogiqueVo){
        const isPermistted = await this.roleService.isPermitted("TypeOutilCultureScientifiqueOutilPedagogique", "edit");
         if(isPermistted){
         this.selectedTypeOutilCultureScientifiqueOutilPedagogique = typeOutilCultureScientifiqueOutilPedagogique;
         this.editTypeOutilCultureScientifiqueOutilPedagogiqueDialog = true;
         this.typeOutilCultureScientifiqueOutilPedagogiqueService.editTypeOutilCultureScientifiqueOutilPedagogique$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewTypeOutilCultureScientifiqueOutilPedagogique(typeOutilCultureScientifiqueOutilPedagogique:TypeOutilCultureScientifiqueOutilPedagogiqueVo){
        const isPermistted = await this.roleService.isPermitted("TypeOutilCultureScientifiqueOutilPedagogique", "view");
        if(isPermistted){
       this.selectedTypeOutilCultureScientifiqueOutilPedagogique = typeOutilCultureScientifiqueOutilPedagogique;
        this.viewTypeOutilCultureScientifiqueOutilPedagogiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateTypeOutilCultureScientifiqueOutilPedagogique(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedTypeOutilCultureScientifiqueOutilPedagogique = new TypeOutilCultureScientifiqueOutilPedagogiqueVo();
        this.createTypeOutilCultureScientifiqueOutilPedagogiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteTypeOutilCultureScientifiqueOutilPedagogique(typeOutilCultureScientifiqueOutilPedagogique:TypeOutilCultureScientifiqueOutilPedagogiqueVo){
       const isPermistted = await this.roleService.isPermitted("TypeOutilCultureScientifiqueOutilPedagogique", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the TypeOutilCultureScientifiqueOutilPedagogique ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.typeOutilCultureScientifiqueOutilPedagogiqueService.delete(typeOutilCultureScientifiqueOutilPedagogique).subscribe(status=>{
                          if(status > 0){
                          const position = this.typeOutilCultureScientifiqueOutilPedagogiques.indexOf(typeOutilCultureScientifiqueOutilPedagogique);
                          position > -1 ? this.typeOutilCultureScientifiqueOutilPedagogiques.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'TypeOutilCultureScientifiqueOutilPedagogique Deleted',
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

    get typeOutilCultureScientifiqueOutilPedagogiques(): Array<TypeOutilCultureScientifiqueOutilPedagogiqueVo> {
           return this.typeOutilCultureScientifiqueOutilPedagogiqueService.typeOutilCultureScientifiqueOutilPedagogiques;
       }
    set typeOutilCultureScientifiqueOutilPedagogiques(value: Array<TypeOutilCultureScientifiqueOutilPedagogiqueVo>) {
        this.typeOutilCultureScientifiqueOutilPedagogiqueService.typeOutilCultureScientifiqueOutilPedagogiques = value;
       }

    get typeOutilCultureScientifiqueOutilPedagogiqueSelections(): Array<TypeOutilCultureScientifiqueOutilPedagogiqueVo> {
           return this.typeOutilCultureScientifiqueOutilPedagogiqueService.typeOutilCultureScientifiqueOutilPedagogiqueSelections;
       }
    set typeOutilCultureScientifiqueOutilPedagogiqueSelections(value: Array<TypeOutilCultureScientifiqueOutilPedagogiqueVo>) {
        this.typeOutilCultureScientifiqueOutilPedagogiqueService.typeOutilCultureScientifiqueOutilPedagogiqueSelections = value;
       }
   
     


    get selectedTypeOutilCultureScientifiqueOutilPedagogique():TypeOutilCultureScientifiqueOutilPedagogiqueVo {
           return this.typeOutilCultureScientifiqueOutilPedagogiqueService.selectedTypeOutilCultureScientifiqueOutilPedagogique;
       }
    set selectedTypeOutilCultureScientifiqueOutilPedagogique(value: TypeOutilCultureScientifiqueOutilPedagogiqueVo) {
        this.typeOutilCultureScientifiqueOutilPedagogiqueService.selectedTypeOutilCultureScientifiqueOutilPedagogique = value;
       }
    
    get createTypeOutilCultureScientifiqueOutilPedagogiqueDialog():boolean {
           return this.typeOutilCultureScientifiqueOutilPedagogiqueService.createTypeOutilCultureScientifiqueOutilPedagogiqueDialog;
       }
    set createTypeOutilCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this.typeOutilCultureScientifiqueOutilPedagogiqueService.createTypeOutilCultureScientifiqueOutilPedagogiqueDialog= value;
       }
    
    get editTypeOutilCultureScientifiqueOutilPedagogiqueDialog():boolean {
           return this.typeOutilCultureScientifiqueOutilPedagogiqueService.editTypeOutilCultureScientifiqueOutilPedagogiqueDialog;
       }
    set editTypeOutilCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this.typeOutilCultureScientifiqueOutilPedagogiqueService.editTypeOutilCultureScientifiqueOutilPedagogiqueDialog= value;
       }
    get viewTypeOutilCultureScientifiqueOutilPedagogiqueDialog():boolean {
           return this.typeOutilCultureScientifiqueOutilPedagogiqueService.viewTypeOutilCultureScientifiqueOutilPedagogiqueDialog;
       }
    set viewTypeOutilCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this.typeOutilCultureScientifiqueOutilPedagogiqueService.viewTypeOutilCultureScientifiqueOutilPedagogiqueDialog = value;
       }
       
     get searchTypeOutilCultureScientifiqueOutilPedagogique(): TypeOutilCultureScientifiqueOutilPedagogiqueVo {
        return this.typeOutilCultureScientifiqueOutilPedagogiqueService.searchTypeOutilCultureScientifiqueOutilPedagogique;
       }
    set searchTypeOutilCultureScientifiqueOutilPedagogique(value: TypeOutilCultureScientifiqueOutilPedagogiqueVo) {
        this.typeOutilCultureScientifiqueOutilPedagogiqueService.searchTypeOutilCultureScientifiqueOutilPedagogique = value;
       }



}