import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DialogElementsExampleDialog} from '../../login/login/login.component';
import {AuthServiceService} from '../../services/auth-service.service';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide: boolean;
  formGroup: FormGroup;

  constructor(private authService: AuthServiceService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.initForm();
  }
  // tslint:disable-next-line:typedef
  initForm(){
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl( '', [Validators.required]),
      password2: new FormControl('', [Validators.required])
    });
  }
  // tslint:disable-next-line:typedef
  registerProcess(){
    if (this.formGroup.valid){
      if (this.formGroup.value.password === this.formGroup.value.password2) {
        delete this.formGroup.value.password2;
        this.authService.register(this.formGroup.value).subscribe(
          result => {
            this.authService.login(this.formGroup.value).subscribe(
              // tslint:disable-next-line:no-shadowed-variable
              result => {
                if (result.token_type === 'bearer'){
                  console.log(result.access_token);
                  localStorage.setItem('token', result.access_token);
                  this.router.navigate(['']);
              }
              }
            );
          }
        );
      }
      else {
        this.dialog.open(DialogPassword, {
          width: '250px',
          data: { msg: 'The passwords aren\'t matching.' }
        });
      }
    }
    }
}
@Component({
  selector: 'dialog-password',
  templateUrl: 'dialog-password.html',
})
export class DialogPassword {}
