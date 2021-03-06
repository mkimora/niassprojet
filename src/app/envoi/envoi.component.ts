import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-envoi',
  templateUrl: './envoi.component.html',
  styleUrls: ['./envoi.component.scss']
})
export class EnvoiComponent implements OnInit {

envoiUserData = {}

  constructor(private _auth: AuthService,
              private _router:Router) { }

  ngOnInit() {
  }

envoiUser() {
  console.log(this.envoiUserData)
  this._auth.envoiUser(this.envoiUser)
    .subscribe(
      res => {
        console.log(res)
      },
      err =>console.log(err)
    )
}

}
