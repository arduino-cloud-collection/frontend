import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {baseUrl} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {AuthServiceService} from '../auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient, private authService: AuthServiceService) {}
  // tslint:disable-next-line:typedef
  update(data: UserUpdateSchema){
    console.log('service');
    this.http.put(baseUrl + '/user/' + localStorage.getItem('username'), data, {
      headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}}).subscribe(response => {
      localStorage.setItem('username', data.username);
    }, error => {
        this.authService.logout();
    });
  }
}

export class UserUpdateSchema {
  constructor(public username?: string, public password?: string) {
  }
}
