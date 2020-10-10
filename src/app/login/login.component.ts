import { Component, OnInit, Inject } from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import {AuthServiceService} from '../services/auth-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private authService: AuthServiceService, public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  // tslint:disable-next-line:typedef
  initForm(){
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl( '', [Validators.required])
    });
  }
  // tslint:disable-next-line:typedef
  loginProcess(){
    if (this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(
        result => {
        if (result.token_type === 'bearer'){
          console.log(result.access_token);
          localStorage.setItem('token', result.access_token);
          this.router.navigate(['']);
        }
    }, error => {
          this.dialog.open(DialogElementsExampleDialog, {
            width: '250px',
            data: { msg: 'Please enter a valid username or password' }
          });
        });
  }
}
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}
