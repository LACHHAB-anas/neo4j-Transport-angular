import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddUserServiceService {

  constructor(private http: HttpClient) { }

  addUser(){
    return this.http.get('http://localhost:8081/anas')
  }
}
