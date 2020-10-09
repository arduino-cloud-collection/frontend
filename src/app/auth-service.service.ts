import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {baseUrl} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private credentials: FormData;

  constructor(private http: HttpClient) { }
  login(data): Observable<any>{
    this.credentials = new FormData();
    this.credentials.append('username', data.username);
    this.credentials.append('password', data.password);
    return this.http.post(baseUrl + '/auth', this.credentials);
  }
}
