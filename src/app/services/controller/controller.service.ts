import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Controller} from '../../main/controllercard/controller';
import {baseUrl} from '../../../environments/environment';
import {AuthServiceService} from '../auth/auth-service.service';
import {Observable} from 'rxjs';
import {ControllerUpdate} from '../../main/editcontroller/ControllerUpdate';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  constructor(private http: HttpClient, private authService: AuthServiceService) { }

  getControllers(): Observable<any>{
    return this.http.get(baseUrl + '/controller', {
      headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
  }
  removeController(uuid: string): Observable<any>{
    return this.http.delete(baseUrl + '/controller/' + uuid, {
      headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
  }
  getControllerById(uuid: string): Observable<any>{
    return this.http.get(baseUrl + '/controller/' + uuid, {
      headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
  }
  createController(name: string): Observable<any>{
    return this.http.post(baseUrl + '/controller/', {name}, {
      headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
  }
  updateController(uuid: string, data: ControllerUpdate): Observable<any>{
    return this.http.put(baseUrl + '/controller/' + uuid, data, {
      headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
  }
}
