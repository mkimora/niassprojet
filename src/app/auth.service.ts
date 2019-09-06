import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';



@Injectable()
export class AuthService {

 
  private _loginUrl = "http://localhost:8000/api/login";
  //private _depotUrl = "http://localhost:8000/api/operation";


  constructor(private http: HttpClient,
              private _router: Router) { }

  ajoutUser(user,fileToUpload) {
    var headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    const endpoint = "http://localhost:8000/api/register";
    const formData: FormData = new FormData();
    formData.append('username',user.username);
    formData.append('Role',user.role);
    formData.append('plainPassword',user.plainpassword);
    formData.append('adresseU',user.adresse);
    formData.append('nomCompletU',user.nomcomplet);
    formData.append('imageFile',fileToUpload,fileToUpload.name);
    formData.append('etat',user.etat);
    formData.append('email',user.email);
    formData.append('Partenaire',user.partenaire_id);
    formData.append('Compte',user.compte_id);
    formData.append('telephone',user.telephone);

    console.log(formData.getAll)
    return this.http.post(endpoint, formData , {headers:headers});
   //return this.http.post<any>(this._userUrl, user)  
  }

  ajoutParte(partenaire) {
    var headers = new HttpHeaders().set("Authorization","Bearer " + localStorage.getItem('token'));
    const endpoint = "http://localhost:8000/api/partenaire";
    const formData : FormData = new FormData();
    formData.append('nomCompletU',partenaire.nomcomplet);
    formData.append('adresseU',partenaire.adresseU);
    formData.append('raisonSociale',partenaire.raisonSociale);
    formData.append('ninea',partenaire.ninea);
   // formData.append('etatU',partenaire.etatU);
    formData.append('telephone',partenaire.telephone);
    formData.append('email',partenaire.email);
    formData.append('username',partenaire.username);
    console.log(formData.getAll)
    return this.http.post(endpoint, formData , {headers:headers});


  }
  
  depot(depot) {
    var headers = new HttpHeaders().set("Authorization","Bearer " + localStorage.getItem('token'));
    const endpoint = "http://localhost:8000/api/operation";
    const formData : FormData = new FormData();
    formData.append('compte',depot.Compte);
    formData.append('nouveauSolde',depot.nouveauSolde);
    console.log(formData.getAll)
    return this.http.post(endpoint, formData , {headers:headers});

  }
  
  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }
  
  loggedIn() {
    return !!localStorage.getItem('token')
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/ajout'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  // depot() {
  //   this._auth.depot(this.depotData)
  //     .subscribe(
  //       res => console.log(res),
  //       err => console.log(err)
  //     )
  // }
  
}

 
