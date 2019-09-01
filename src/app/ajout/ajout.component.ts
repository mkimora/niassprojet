import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss']
})
export class AjoutComponent implements OnInit {
  imageUrl: string = "/assets/image/alsina.jpg";
  fileToUpload: File = null;

  ajoutUserData = {}
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    

    //show image preview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  ajoutUser() {
    this._auth.ajoutUser(this.ajoutUserData)
      .subscribe(
        res => { 
          console.log(res)
          localStorage.setItem('token', res.token)
          this._router.navigate(['/special'])
        },
        err => console.log(err)
      )
  }


}
