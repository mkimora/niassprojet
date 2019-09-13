import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle: string = ' ';
  // OR (either will work)
  
  constructor(private _authService: AuthService) { }

  ngOnInit() {
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

