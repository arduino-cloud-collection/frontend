import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogPassword} from '../../register/register/register.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ControllerService} from '../../services/controller/controller.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-newcontroller',
  templateUrl: './newcontroller.component.html',
  styleUrls: ['./newcontroller.component.css']
})
export class NewcontrollerComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dialog.open(DialogCreationComponent, {
      width: '300px',
      data: { msg: 'The passwords aren\'t matching.' }
    });
  }

}

@Component({
  selector: 'app-creation-dialog',
  templateUrl: 'dialog-creation.html',
})
export class DialogCreationComponent implements OnInit{
  formGroup: FormGroup;

  constructor(private controllerService: ControllerService, private router: Router) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required])
    });
  }

  createController(): void {
    if (this.formGroup.valid){
      this.controllerService.createController(this.formGroup.value.name).subscribe(result => {
        console.log(result);
        this.router.navigate(['controller/' + result.uuid]);
      });
    }
  }
}
