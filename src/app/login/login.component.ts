import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import {AuthServiceService} from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private authService: AuthServiceService) { }

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
      this.authService.login(this.formGroup.value).subscribe(result => {
        if (result.token_type === 'bearer'){
          console.log(result.access_token);
        }
        else {
          alert('Wrong Credentials');
        }
    });
  }
}
}
