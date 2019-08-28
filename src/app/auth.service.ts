import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {

  private _ajoutUrl = "http://localhost:8000/api/register";
  private _loginUrl = "http://localhost:8000/api/login";

  constructor(private http: HttpClient,
                private _router:Router) { }

  ajoutUser(user) {
    return this.http.post<any>(this._ajoutUrl, user)
  }
  
  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }
  
  loggedIn() {
    return !!localStorage.getItem('token')
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/events'])
  }

  getToken() {
    return localStorage.getItem('token')
  }
}

 
