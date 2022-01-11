import {Component, OnInit} from '@angular/core';
import {BourseService} from '../../../controller/service/Bourse.service';
import {BourseVo} from '../../../controller/model/Bourse.model';
import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
import {TypeParticipationVo} from '../../../controller/model/TypeParticipation.model';
import * as moment from 'moment';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-bourse-list',
  templateUrl: './bourse-list.component.html',
  styleUrls: ['./bourse-list.component.css']
})

export class BourseListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];
           searchBourseMin: Date = null;
           searchBourseMax: Date = null;

    constructor(private bourseService: BourseService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadBourses();
    } 
    
    // methods 
    public async loadBourses(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("Bourse", "list");
        isPermistted ? this.bourseService.findAll().subscribe(bourses => this.bourses = bourses,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.searchBourse.dateObtentionMax = this.searchBourseMax ? moment(this.searchBourseMax).format("YYYY-MM-DD") : '';
        this.searchBourse.dateObtentionMin = this.searchBourseMin ? moment(this.searchBourseMin).format("YYYY-MM-DD") : '';
        this.bourseService.findByCriteria(this.searchBourse).subscribe(bourses=>{
            
            this.bourses = bourses;
           // this.searchBourse = new BourseVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'dateObtention', header: 'dateObtention'},
                {field: 'intitule', header: 'intitule'},
                {field: 'typeParticipation', header: 'typeParticipation'},
                {field: 'montant', header: 'montant'},
                {field: 'dureeEnMois', header: 'dureeEnMois'},
                {field: 'projetActiviteRecherche', header: 'projetActiviteRecherche'},
        ];
    }
    
    public async editBourse(bourse:BourseVo){
        const isPermistted = await this.roleService.isPermitted("Bourse", "edit");
         if(isPermistted){
         this.selectedBourse = bourse;
         this.editBourseDialog = true;
         this.bourseService.editBourse$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewBourse(bourse:BourseVo){
        const isPermistted = await this.roleService.isPermitted("Bourse", "view");
        if(isPermistted){
       this.selectedBourse = bourse;
        this.viewBourseDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateBourse(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedBourse = new BourseVo();
        this.createBourseDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteBourse(bourse:BourseVo){
       const isPermistted = await this.roleService.isPermitted("Bourse", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the Bourse ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.bourseService.delete(bourse).subscribe(status=>{
                          if(status > 0){
                          const position = this.bourses.indexOf(bourse);
                          position > -1 ? this.bourses.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Bourse Deleted',
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

    get bourses(): Array<BourseVo> {
           return this.bourseService.bourses;
       }
    set bourses(value: Array<BourseVo>) {
        this.bourseService.bourses = value;
       }

    get bourseSelections(): Array<BourseVo> {
           return this.bourseService.bourseSelections;
       }
    set bourseSelections(value: Array<BourseVo>) {
        this.bourseService.bourseSelections = value;
       }
   
     


    get selectedBourse():BourseVo {
           return this.bourseService.selectedBourse;
       }
    set selectedBourse(value: BourseVo) {
        this.bourseService.selectedBourse = value;
       }
    
    get createBourseDialog():boolean {
           return this.bourseService.createBourseDialog;
       }
    set createBourseDialog(value: boolean) {
        this.bourseService.createBourseDialog= value;
       }
    
    get editBourseDialog():boolean {
           return this.bourseService.editBourseDialog;
       }
    set editBourseDialog(value: boolean) {
        this.bourseService.editBourseDialog= value;
       }
    get viewBourseDialog():boolean {
           return this.bourseService.viewBourseDialog;
       }
    set viewBourseDialog(value: boolean) {
        this.bourseService.viewBourseDialog = value;
       }
       
     get searchBourse(): BourseVo {
        return this.bourseService.searchBourse;
       }
    set searchBourse(value: BourseVo) {
        this.bourseService.searchBourse = value;
       }



}