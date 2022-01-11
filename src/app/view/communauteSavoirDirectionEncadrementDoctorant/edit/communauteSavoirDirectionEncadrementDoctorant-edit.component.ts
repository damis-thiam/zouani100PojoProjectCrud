import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {CommunauteSavoirDirectionEncadrementDoctorantService} from '../../../controller/service/CommunauteSavoirDirectionEncadrementDoctorant.service';
import {CommunauteSavoirDirectionEncadrementDoctorantVo} from '../../../controller/model/CommunauteSavoirDirectionEncadrementDoctorant.model';
import {DirectionEncadrementDoctorantVo} from '../../../controller/model/DirectionEncadrementDoctorant.model';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';

@Component({
  selector: 'app-communauteSavoirDirectionEncadrementDoctorant-edit',
  templateUrl: './communauteSavoirDirectionEncadrementDoctorant-edit.component.html',
  styleUrls: ['./communauteSavoirDirectionEncadrementDoctorant-edit.component.css']
})
export class CommunauteSavoirDirectionEncadrementDoctorantEditComponent implements OnInit {
// declarations
 editCommunauteSavoirDirectionEncadrementDoctorantForm = new FormGroup({
  }); 
constructor(private communauteSavoirDirectionEncadrementDoctorantService: CommunauteSavoirDirectionEncadrementDoctorantService) { }
// methods 


  ngOnInit(): void {
    this.communauteSavoirDirectionEncadrementDoctorantService.editCommunauteSavoirDirectionEncadrementDoctorant$.subscribe(value=>{
    if(value){
     this.editCommunauteSavoirDirectionEncadrementDoctorantForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.communauteSavoirDirectionEncadrementDoctorantService.edit().subscribe(updatedCommunauteSavoirDirectionEncadrementDoctorant => {
          const indexOfUpdated = this.communauteSavoirDirectionEncadrementDoctorants.findIndex(
           (CommunauteSavoirDirectionEncadrementDoctorant) => CommunauteSavoirDirectionEncadrementDoctorant.id === updatedCommunauteSavoirDirectionEncadrementDoctorant.id
            );
            indexOfUpdated > -1 ? this.communauteSavoirDirectionEncadrementDoctorants[indexOfUpdated] = updatedCommunauteSavoirDirectionEncadrementDoctorant : false;
                });
                  this.editCommunauteSavoirDirectionEncadrementDoctorantDialog = false;
    this.selectedCommunauteSavoirDirectionEncadrementDoctorant = new CommunauteSavoirDirectionEncadrementDoctorantVo();
            }

  hideEditDialog(){
    this.editCommunauteSavoirDirectionEncadrementDoctorantDialog = false;
  }
   submit(){
    this.communauteSavoirDirectionEncadrementDoctorantService.edit().subscribe(result=>{
        this.editCommunauteSavoirDirectionEncadrementDoctorantDialog = false;
    },error=>{
        console.log(error);
    });
  
  }
// getters and setters 
 
  get communauteSavoirDirectionEncadrementDoctorants(): Array<CommunauteSavoirDirectionEncadrementDoctorantVo> {
    return this.communauteSavoirDirectionEncadrementDoctorantService.communauteSavoirDirectionEncadrementDoctorants;
       }
  set communauteSavoirDirectionEncadrementDoctorants(value: Array<CommunauteSavoirDirectionEncadrementDoctorantVo>) {
        this.communauteSavoirDirectionEncadrementDoctorantService.communauteSavoirDirectionEncadrementDoctorants = value;
       } 

  get selectedCommunauteSavoirDirectionEncadrementDoctorant():CommunauteSavoirDirectionEncadrementDoctorantVo {
           return this.communauteSavoirDirectionEncadrementDoctorantService.selectedCommunauteSavoirDirectionEncadrementDoctorant;
       }
  set selectedCommunauteSavoirDirectionEncadrementDoctorant(value: CommunauteSavoirDirectionEncadrementDoctorantVo) {
        this.communauteSavoirDirectionEncadrementDoctorantService.selectedCommunauteSavoirDirectionEncadrementDoctorant = value;
       }
  
  get editCommunauteSavoirDirectionEncadrementDoctorantDialog():boolean {
           return this.communauteSavoirDirectionEncadrementDoctorantService.editCommunauteSavoirDirectionEncadrementDoctorantDialog;
       }
  set editCommunauteSavoirDirectionEncadrementDoctorantDialog(value: boolean) {
        this.communauteSavoirDirectionEncadrementDoctorantService.editCommunauteSavoirDirectionEncadrementDoctorantDialog= value;
       }


}