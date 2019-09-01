import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { LoginComponent } from './login/login.component';
import { AjoutComponent } from './ajout/ajout.component';
import { NavComponent } from './nav/nav.component';
import { AjoutpartenaireComponent } from './ajoutpartenaire/ajoutpartenaire.component';
import { ListeuserComponent } from './listeuser/listeuser.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'lister', component: ListeComponent },
  { path: 'ajout', component: AjoutComponent },
  { path: 'ajoutpartenaire', component: AjoutpartenaireComponent },
  { path: 'listeuser', component: ListeuserComponent },


  // { path: 'acceuil', component: NavComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
