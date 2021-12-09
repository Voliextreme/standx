import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ChangepwComponent } from './pages/change-pw/changepw.component';
import { CreateuserComponent } from './pages/create-user/createuser.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { FourOfourComponent } from './pages/four-ofour/four-ofour.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'changepw', component: ChangepwComponent },
  { path: 'editProfile', component: EditProfileComponent },
  { path: 'createUser', component: CreateuserComponent },
  { path: 'home', component: HomeComponent},
  { path: '**', component: FourOfourComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

