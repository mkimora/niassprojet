import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { LoginComponent } from './login/login.component';
import { AjoutComponent } from './ajout/ajout.component';
import { NavComponent } from './nav/nav.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'lister', component: ListeComponent },
  { path: 'ajout', component: AjoutComponent },
  { path: '', component: NavComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
