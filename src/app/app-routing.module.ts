import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HelpComponent } from './components/help/help.component';
import { E404Component } from './components/e404/e404.component';
import { HelpDetailComponent } from './components/help-detail/help-detail.component';
import { RevisionComponent } from './components/revision/revision.component';

const routes: Routes = [
  { path:"", redirectTo: "/home", pathMatch:"full"},
  { path:"home", component:HomeComponent},
  { path:"about", component:AboutComponent},
  { path:"help", component:HelpComponent},
  { path:"help/:comp", component:HelpDetailComponent},
  { path:"revision/:nbrp", component:RevisionComponent},
  { path:"**", component:E404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
