import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ChangepwComponent } from './pages/change-pw/changepw.component';
import { CreateuserComponent } from './pages/create-user/createuser.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { FourOfourComponent } from './pages/four-ofour/four-ofour.component';
import { CreateAnuncioComponent } from './pages/create-anuncio/create-anuncio.component';
import { LostPasswordComponent } from './pages/lost-password/lost-password.component';
import { ChatComponent } from './pages/chat/chat.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'editProfile', component: EditProfileComponent },
  { path: 'changePassword', component: ChangepwComponent },
  { path: 'lostPassword', component: LostPasswordComponent },
  { path: 'chat', component: ChatComponent},
  { path: 'createAnnouncement', component: CreateAnuncioComponent },
  { path: 'createUser', component: CreateuserComponent },
  { path: 'home', component: HomeComponent},
  { path: '**', component: FourOfourComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

