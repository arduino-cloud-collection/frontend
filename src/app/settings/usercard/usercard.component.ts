import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserServiceService, UserUpdateSchema} from '../../services/user/user-service.service';
import {DialogElementsExampleDialog} from '../../login/login/login.component';
import {MatDialog} from '@angular/material/dialog';
import {DialogPassword} from '../../register/register/register.component';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent implements OnInit {
  userSettings: FormGroup;
  passwordHide: boolean;
  password2Hide: boolean;

  constructor(private userService: UserServiceService, public dialog: MatDialog) {
    this.passwordHide = true;
    this.password2Hide = true;
  }

  ngOnInit(): void {
    this.userSettings = new FormGroup({
      username: new FormControl(localStorage.getItem('username')),
      password: new FormControl( ''),
      password2: new FormControl('')
    });
  }
  updateUser(): void {
    if (this.userSettings.value.password !== '' && this.userSettings.value.password === this.userSettings.value.password2){
      const data: UserUpdateSchema = new UserUpdateSchema(this.userSettings.value.username, this.userSettings.value.password);
      this.userService.update(data);
    }
    else if (this.userSettings.value.password === '' && this.userSettings.value.password === this.userSettings.value.password2){
      const data: UserUpdateSchema = new UserUpdateSchema(this.userSettings.value.username);
      this.userService.update(data);
    }
    else {
      this.dialog.open(DialogPassword, {
        width: '250px',
        data: { msg: 'The passwords are not matching.' }
      });
    }
    }
}
