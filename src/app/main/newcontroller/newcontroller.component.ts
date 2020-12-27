import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogPassword} from '../../register/register/register.component';

@Component({
  selector: 'app-newcontroller',
  templateUrl: './newcontroller.component.html',
  styleUrls: ['./newcontroller.component.css']
})
export class NewcontrollerComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dialog.open(DialogPassword, {
      width: '250px',
      data: { msg: 'The passwords aren\'t matching.' }
    });
  }

}

@Component({
  selector: 'app-creation-dialog',
  templateUrl: 'dialog-creation.html',
})
export class DialogCreationComponent {}
