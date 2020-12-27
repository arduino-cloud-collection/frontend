import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Controller} from '../../main/controllercard/controller';
import {baseUrl} from '../../../environments/environment';
import {AuthServiceService} from '../auth/auth-service.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  constructor(private http: HttpClient, private authService: AuthServiceService) { }

  getControllers(): Observable<any>{
    return this.http.get(baseUrl + '/controller', {
      headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
  }
}
