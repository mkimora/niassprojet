import { Component, OnInit } from '@angular/core';
import { ListeService } from '../liste.service';


@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  public partenaires = [];
  constructor(private _listeService: ListeService) { }

  ngOnInit() {
    this._listeService.getListe()
    //getListe retourne un observable
      .subscribe(data => this.partenaires = data)
      //on souscrit pour recevoir les données
      //les données arrivent de manière asynchrone
      //nous assignons data à notre propriété de classe en utilisant la flèche
  }

}
