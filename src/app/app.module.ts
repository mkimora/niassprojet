import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';




import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { ListeComponent } from './liste/liste.component';
import { AjoutComponent } from './ajout/ajout.component';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { UploadImageComponent } from './upload-image/upload-image.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent, 
    LoginComponent,
    ListeComponent,
    AjoutComponent,
    UploadImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService,
  {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
