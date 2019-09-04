import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';




import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { ListeComponent } from './liste/liste.component';
import { AjoutComponent } from './ajout/ajout.component';
import { AuthService } from './auth.service';
import { ListeService } from './liste.service';
import { AjoutpartenaireComponent } from './ajoutpartenaire/ajoutpartenaire.component';
import { ListeuserComponent } from './listeuser/listeuser.component';
import { DepotComponent } from './depot/depot.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent, 
    LoginComponent,
    ListeComponent,
    AjoutComponent,
    AjoutpartenaireComponent,
    ListeuserComponent,
    DepotComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService, ListeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
