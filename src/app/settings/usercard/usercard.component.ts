import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent implements OnInit {
  userSettings: FormGroup;
  passwordHide: boolean;
  password2Hide: boolean;

  constructor() {
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

}
