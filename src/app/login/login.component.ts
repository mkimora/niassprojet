import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {}

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  onLogin(data){
    this._auth.login(data)
      .subscribe(resp=>{
        let jwt = resp.headers.get('Authorization');
        this._auth.saveToken(jwt);
        this._router.navigateByUrl("/")
      },err=>{

      })
  }


  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {console.log(res)
        localStorage.setItem('token' ,res.token)
        this._router.navigate(['/acceuil'])
      } ,
        err => console.log(err)
      )
  }

  isSUPERADMIN(){
    return this._auth.isSUPERADMIN();
  }

  isADMIN(){
    return this._auth.isADMIN();
  }

  isUser(){
    return this._auth.isUser();
  }

  isCaissier(){
    return this._auth.isCaissier();
  }
  isAuthenticated(){
    return this._auth.isAuthenticated();  
  }
  
  }


