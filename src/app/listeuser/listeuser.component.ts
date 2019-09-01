import { Component, OnInit } from '@angular/core';
import { ListeuserService } from '../listeuser.service';

@Component({
  selector: 'app-listeuser',
  templateUrl: './listeuser.component.html',
  styleUrls: ['./listeuser.component.scss']
})
export class ListeuserComponent implements OnInit {
users = [];
  constructor(private _ListeuserService : ListeuserService) { }
  
  ngOnInit() {
    this._ListeuserService.getListe()
    //getListe retourne un observable
    .subscribe(data => this.users = data)
    //on souscrit pour recevoir les données
    //les données arrivent de manière asynchrone
    //nous assignons data à notre propriété de classe en utilisant la flèche
  }

}
