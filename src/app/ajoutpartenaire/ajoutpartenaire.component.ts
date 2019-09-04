import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajoutpartenaire',
  templateUrl: './ajoutpartenaire.component.html',
  styleUrls: ['./ajoutpartenaire.component.scss']
})
export class AjoutpartenaireComponent implements OnInit {


  ajoutParteData = {}

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  ajoutParte() {
    this._auth.ajoutParte(this.ajoutParteData)
      .subscribe(
        res => { 
          console.log(res)
          //localStorage.setItem('token', res.token)
          //this._router.navigate(['/special'])
        }
        ,
        //err => console.log(err)
      )
  }

}
