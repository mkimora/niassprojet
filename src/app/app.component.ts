import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng7kimora';


  constructor(private _authService: AuthService){}

  ngOnInit(): void {
    this._authService.loadToken();
  }

  isSUPERADMIN(){
    return this._authService.isSUPERADMIN();
  }

  isADMIN(){
    return this._authService.isADMIN();
  }

  isUser(){
    return this._authService.isUser();
  }

  isCaissier(){
    return this._authService.isCaissier();
  }
  
  isAuthenticated(){
    return this._authService.isAuthenticated();
  }

  logOut() {
    this._authService.logout();
  }

}
