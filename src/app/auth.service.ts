import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable()
export class AuthService {
  host2:string="http://localhost:8000/api/login";
  jwt : string;
  username : string;
  roles : Array<string>;
 
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
    formData.append('image',fileToUpload,fileToUpload.name);
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
    formData.append('telephone',partenaire.telephone);
    formData.append('email',partenaire.email);
    formData.append('username',partenaire.username);
    console.log(formData.getAll)
    return this.http.post(endpoint, formData , {headers:headers});
  }
  

  depot(depot) {
    var headers = new HttpHeaders().set("Authorization","Bearer " + localStorage.getItem('token'));
    const endpoint = "http://localhost:8000/api/depot";
    const formData : FormData = new FormData();
    formData.append('compte',depot.Compte);
    formData.append('nouveauSolde',depot.nouveauSolde);
    console.log(formData.getAll)
    return this.http.post(endpoint, formData , {headers:headers});
  }

  envoiUser(envoi) {
    var headers = new HttpHeaders().set("Authorization","Bearer " + localStorage.getItem('token'));
    const endpoint = "http://localhost:8000/api/envoi";
    const formData : FormData = new FormData();
    formData.append('nomEnvoyeur',envoi.nom);
    formData.append('prenomEnvoyeur',envoi.prenome);
    formData.append('telEnvoyeur',envoi.telephone);
    formData.append('nomBene',envoi.nomb);
    formData.append('prenomBene',envoi.prenomb);
    formData.append('numBene',envoi.telephoneb);
    formData.append('montant',envoi.montant);
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
    this._router.navigate(['/'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  login(data) {
    return this.http.post(this.host2+"/",data,{observe:'response'})
  }
  //creons la methode saveToken
  saveToken(jwt:string) {
    localStorage.setItem('token',jwt);
    this.jwt = jwt; 
    this.parseJWT();
  }

  parseJWT() {
    let jwtHelper = new JwtHelperService();
    let objJWT = jwtHelper.decodeToken(this.jwt);
    this.username = objJWT.obj;
    this.roles = objJWT.roles;
    localStorage.setItem('role', objJWT.roles); 
  }

  getRole(){
    return localStorage.getItem('role');
  }

  isSUPERADMIN(){
    return this.roles.indexOf('ROLE_SUPERADMIN')>=0;
  }
  

  isADMIN(){
    return this.roles.indexOf('ROLE_ADMIN')>=0;
  }
  
  isUser(){
    return this.roles.indexOf('ROLE_USER')>=0;
  }
  
  isCaissier(){
    return this.roles.indexOf('ROLE_CAISSIER')>=0;
  }
  
  isAuthenticated(){
  return this.roles && (this.isADMIN() || this.isUser());
  }

  loadToken() {
    this.jwt = localStorage.getItem('token');
    //pour ne plus avoir besoin de m'authentifier à chaque fois
    this.parseJWT();
  }

  logout() {
    localStorage.removeItem('token');
    this.initParams() ;
    
  }

  initParams() {
    this.jwt = undefined;
    this.username = undefined;
    this.roles = undefined;
  }
  
}

 
