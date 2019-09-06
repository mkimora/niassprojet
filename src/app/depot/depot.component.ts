import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss']
})
export class DepotComponent implements OnInit {

  depotData = {}
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }
  
  depot() {
    console.log(this.depotData)
    this._auth.depot(this.depotData)
      .subscribe(
        res => {
          console.log(res)
          this._router.navigate(['/operation'])
        },
        err => console.log(err)
      )
  }

}
