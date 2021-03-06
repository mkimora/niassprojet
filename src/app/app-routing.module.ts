import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { LoginComponent } from './login/login.component';
import { AjoutComponent } from './ajout/ajout.component';
import { NavComponent } from './nav/nav.component';
import { AjoutpartenaireComponent } from './ajoutpartenaire/ajoutpartenaire.component';
import { ListeuserComponent } from './listeuser/listeuser.component';
import { DepotComponent } from './depot/depot.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { HistoriquecComponent } from './historiquec/historiquec.component';
import { BloquerComponent } from './bloquer/bloquer.component';
import { EnvoiComponent } from './envoi/envoi.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'lister', component: ListeComponent },
  { path: 'register', component: AjoutComponent },
  { path: 'partenaire', component: AjoutpartenaireComponent },
  { path: 'listeuser', component: ListeuserComponent },
  { path: 'depot', component: DepotComponent },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'historique', component: HistoriquecComponent },
  { path: 'bloquer', component: BloquerComponent },
  { path: 'envoi', component: EnvoiComponent },







  // { path: 'acceuil', component: NavComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
