import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AuthService {

  //private _ajoutUrl = "http://localhost:8000/api/register";
  private _loginUrl = "http://localhost:8000/api/login";

  constructor(private http: HttpClient) { }

  ajoutUser(User) {
    const endpoint = 'http://localhost:8000/register';
    const formData: FormData = new FormData();
    formData.append('username',User.username);
    formData.append('role',User.role);
    formData.append('plainpassword',User.plainpassword);
    formData.append('adresse',User.adresse);
    formData.append('nomcomplet',User.nomcomplet);
    formData.append('image',User.image);
    formData.append('etat',User.etat);
    formData.append('email',User.roles);
    formData.append('partenaire_id',User.partenaire);
    formData.append('compte_id',User.compte);

    return this.http.post(endpoint, formData);
   //return this.http.post<any>(this._userUrl, user)  
  }
  
  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }
  
  loggedIn() {
    return !!localStorage.getItem('token')
  }

  logoutUser() {
    localStorage.removeItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }

  
}

 
