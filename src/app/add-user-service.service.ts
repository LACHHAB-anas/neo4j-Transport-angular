import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AddUserServiceService {

  constructor(private http: HttpClient) { }

  addUser(user : User){
    return this.http.post('http://localhost:8081/adduser',user);
  }
}