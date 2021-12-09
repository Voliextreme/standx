import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ChangepwComponent } from './pages/changepw/changepw.component';
import { CreateuserComponent } from './pages/createuser/createuser.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'changepw', component: ChangepwComponent },
  { path: 'createUser', component: CreateuserComponent },
  { path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

