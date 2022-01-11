import {Component, OnInit} from '@angular/core';
import {FormatRencontreService} from '../../../controller/service/FormatRencontre.service';
import {FormatRencontreVo} from '../../../controller/model/FormatRencontre.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-formatRencontre-list',
  templateUrl: './formatRencontre-list.component.html',
  styleUrls: ['./formatRencontre-list.component.css']
})

export class FormatRencontreListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private formatRencontreService: FormatRencontreService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadFormatRencontres();
    } 
    
    // methods 
    public async loadFormatRencontres(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("FormatRencontre", "list");
        isPermistted ? this.formatRencontreService.findAll().subscribe(formatRencontres => this.formatRencontres = formatRencontres,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.formatRencontreService.findByCriteria(this.searchFormatRencontre).subscribe(formatRencontres=>{
            
            this.formatRencontres = formatRencontres;
           // this.searchFormatRencontre = new FormatRencontreVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editFormatRencontre(formatRencontre:FormatRencontreVo){
        const isPermistted = await this.roleService.isPermitted("FormatRencontre", "edit");
         if(isPermistted){
         this.selectedFormatRencontre = formatRencontre;
         this.editFormatRencontreDialog = true;
         this.formatRencontreService.editFormatRencontre$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewFormatRencontre(formatRencontre:FormatRencontreVo){
        const isPermistted = await this.roleService.isPermitted("FormatRencontre", "view");
        if(isPermistted){
       this.selectedFormatRencontre = formatRencontre;
        this.viewFormatRencontreDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateFormatRencontre(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedFormatRencontre = new FormatRencontreVo();
        this.createFormatRencontreDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteFormatRencontre(formatRencontre:FormatRencontreVo){
       const isPermistted = await this.roleService.isPermitted("FormatRencontre", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the FormatRencontre ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.formatRencontreService.delete(formatRencontre).subscribe(status=>{
                          if(status > 0){
                          const position = this.formatRencontres.indexOf(formatRencontre);
                          position > -1 ? this.formatRencontres.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'FormatRencontre Deleted',
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

    get formatRencontres(): Array<FormatRencontreVo> {
           return this.formatRencontreService.formatRencontres;
       }
    set formatRencontres(value: Array<FormatRencontreVo>) {
        this.formatRencontreService.formatRencontres = value;
       }

    get formatRencontreSelections(): Array<FormatRencontreVo> {
           return this.formatRencontreService.formatRencontreSelections;
       }
    set formatRencontreSelections(value: Array<FormatRencontreVo>) {
        this.formatRencontreService.formatRencontreSelections = value;
       }
   
     


    get selectedFormatRencontre():FormatRencontreVo {
           return this.formatRencontreService.selectedFormatRencontre;
       }
    set selectedFormatRencontre(value: FormatRencontreVo) {
        this.formatRencontreService.selectedFormatRencontre = value;
       }
    
    get createFormatRencontreDialog():boolean {
           return this.formatRencontreService.createFormatRencontreDialog;
       }
    set createFormatRencontreDialog(value: boolean) {
        this.formatRencontreService.createFormatRencontreDialog= value;
       }
    
    get editFormatRencontreDialog():boolean {
           return this.formatRencontreService.editFormatRencontreDialog;
       }
    set editFormatRencontreDialog(value: boolean) {
        this.formatRencontreService.editFormatRencontreDialog= value;
       }
    get viewFormatRencontreDialog():boolean {
           return this.formatRencontreService.viewFormatRencontreDialog;
       }
    set viewFormatRencontreDialog(value: boolean) {
        this.formatRencontreService.viewFormatRencontreDialog = value;
       }
       
     get searchFormatRencontre(): FormatRencontreVo {
        return this.formatRencontreService.searchFormatRencontre;
       }
    set searchFormatRencontre(value: FormatRencontreVo) {
        this.formatRencontreService.searchFormatRencontre = value;
       }



}