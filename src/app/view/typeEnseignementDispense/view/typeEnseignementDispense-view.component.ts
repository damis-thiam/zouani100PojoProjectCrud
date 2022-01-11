import {Component, OnInit} from '@angular/core';
import {TypeEnseignementDispenseService} from '../../../controller/service/TypeEnseignementDispense.service';
import {TypeEnseignementDispenseVo} from '../../../controller/model/TypeEnseignementDispense.model';

@Component({
  selector: 'app-typeEnseignementDispense-view',
  templateUrl: './typeEnseignementDispense-view.component.html',
  styleUrls: ['./typeEnseignementDispense-view.component.css']
})
export class TypeEnseignementDispenseViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private typeEnseignementDispenseService: TypeEnseignementDispenseService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewTypeEnseignementDispenseDialog = false;
    } 



   // getters and setters
    get viewTypeEnseignementDispenseDialog():boolean {
        return this.typeEnseignementDispenseService.viewTypeEnseignementDispenseDialog;
        }
    set viewTypeEnseignementDispenseDialog(value: boolean) {
        this.typeEnseignementDispenseService.viewTypeEnseignementDispenseDialog= value;
        }
    
    get selectedTypeEnseignementDispense():TypeEnseignementDispenseVo {
           return this.typeEnseignementDispenseService.selectedTypeEnseignementDispense;
       }
    set selectedTypeEnseignementDispense(value: TypeEnseignementDispenseVo) {
        this.typeEnseignementDispenseService.selectedTypeEnseignementDispense = value;
       }





}