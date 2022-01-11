import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {OrganismeService} from '../../../controller/service/Organisme.service';
import {OrganismeVo} from '../../../controller/model/Organisme.model';

@Component({
  selector: 'app-organisme-edit',
  templateUrl: './organisme-edit.component.html',
  styleUrls: ['./organisme-edit.component.css']
})
export class OrganismeEditComponent implements OnInit {
// declarations
 editOrganismeForm = new FormGroup({
      intitule: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
  }); 
constructor(private organismeService: OrganismeService) { }
// methods 


  ngOnInit(): void {
    this.organismeService.editOrganisme$.subscribe(value=>{
    if(value){
     this.editOrganismeForm.setValue({
          intitule: this.selectedOrganisme.intitule,
          code: this.selectedOrganisme.code,
          description: this.selectedOrganisme.description,
    });
    }
  });
  }



public edit(){ 
    this.organismeService.edit().subscribe(updatedOrganisme => {
          const indexOfUpdated = this.organismes.findIndex(
           (Organisme) => Organisme.id === updatedOrganisme.id
            );
            indexOfUpdated > -1 ? this.organismes[indexOfUpdated] = updatedOrganisme : false;
                });
                  this.editOrganismeDialog = false;
    this.selectedOrganisme = new OrganismeVo();
            }

  hideEditDialog(){
    this.editOrganismeDialog = false;
  }
   submit(){
                this.selectedOrganisme.intitule = this.intitule.value;
                this.selectedOrganisme.code = this.code.value;
                this.selectedOrganisme.description = this.description.value;
    this.organismeService.edit().subscribe(result=>{
        this.editOrganismeDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
            get intitule() {
                 return this.editOrganismeForm.get('intitule');
            }
            get code() {
                 return this.editOrganismeForm.get('code');
            }
            get description() {
                 return this.editOrganismeForm.get('description');
            }
 
  get organismes(): Array<OrganismeVo> {
    return this.organismeService.organismes;
       }
  set organismes(value: Array<OrganismeVo>) {
        this.organismeService.organismes = value;
       } 

  get selectedOrganisme():OrganismeVo {
           return this.organismeService.selectedOrganisme;
       }
  set selectedOrganisme(value: OrganismeVo) {
        this.organismeService.selectedOrganisme = value;
       }
  
  get editOrganismeDialog():boolean {
           return this.organismeService.editOrganismeDialog;
       }
  set editOrganismeDialog(value: boolean) {
        this.organismeService.editOrganismeDialog= value;
       }


}