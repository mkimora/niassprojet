import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss']
})
export class AjoutComponent implements OnInit {

  ajoutUserData = {}
  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  ajoutUser() {
    this._auth.ajoutUser(this.ajoutUserData)
    .subscribe(
      res => {console.log(res)
      localStorage.setItem('token' ,res.token)
    } ,
      err => console.log(err)
    )
  }

}
